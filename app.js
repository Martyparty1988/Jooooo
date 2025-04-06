document.addEventListener('DOMContentLoaded', () => {
    // --- Globální proměnné a konstanty ---
    const timerDisplay = document.getElementById('timer-display');
    const startStopBtn = document.getElementById('start-stop-btn');
    const resetBtn = document.getElementById('reset-btn');
    const reportsTableBody = document.getElementById('reports-table-body');
    const noReportsMessage = document.getElementById('no-reports-message');
    const saveReportDialog = document.getElementById('save-report-dialog');
    const saveReportForm = document.getElementById('save-report-form');
    const cancelSaveBtn = document.getElementById('cancel-save-btn');
    const reportProjectInput = document.getElementById('report-project');
    const reportCategorySelect = document.getElementById('report-category');
    const reportNotesInput = document.getElementById('report-notes');
    const reportStartDisplay = document.getElementById('report-start-display');
    const reportEndDisplay = document.getElementById('report-end-display');
    const reportDurationDisplay = document.getElementById('report-duration-display');
    const reportStartTimeInput = document.getElementById('report-start-time');
    const reportEndTimeInput = document.getElementById('report-end-time');
    const reportDurationMsInput = document.getElementById('report-duration-ms');

    const overlay = document.getElementById('overlay');
    const navButtons = document.querySelectorAll('header nav button');
    const contentSections = document.querySelectorAll('.content-section');
    const currentYearSpan = document.getElementById('current-year');

    // Nastavení
    const workCategoriesList = document.getElementById('work-categories-list');
    const newWorkCategoryInput = document.getElementById('new-work-category');
    const addWorkCategoryBtn = document.getElementById('add-work-category-btn');
    const resetAllDataBtn = document.getElementById('reset-all-data-btn');


    const TIMER_STATE_KEY = 'timerState';
    const APP_DATA_KEY = 'workFinanceData';
    const DEFAULT_TITLE = 'Pracovní výkazy & Finance';

    let timerInterval = null;
    let timerState = loadTimerState();
    let appData = loadAppData();

    // --- Inicializace ---
    function initializeApp() {
        currentYearSpan.textContent = new Date().getFullYear();
        setupEventListeners();
        loadWorkCategories(); // Načíst kategorie do selectu a nastavení
        renderReportsTable();
        restoreTimer();
        updateUI();
        updateNav('timer-reports'); // Zobrazit výchozí sekci
    }

    // --- Načítání a ukládání dat ---
    function loadTimerState() {
        const storedState = localStorage.getItem(TIMER_STATE_KEY);
        if (storedState) {
            try {
                return JSON.parse(storedState);
            } catch (e) {
                console.error("Chyba při parsování stavu časovače:", e);
                return getDefaultTimerState();
            }
        }
        return getDefaultTimerState();
    }

    function saveTimerState() {
        localStorage.setItem(TIMER_STATE_KEY, JSON.stringify(timerState));
    }

    function getDefaultTimerState() {
        return {
            isRunning: false,
            startTime: null, // Timestamp posledního startu
            elapsedTimeBeforePause: 0 // Uplynulý čas PŘED posledním startem (pro budoucí pauzu)
        };
    }

     function loadAppData() {
        const storedData = localStorage.getItem(APP_DATA_KEY);
        if (storedData) {
            try {
                // Zde by měla být i migrace, pokud se změní struktura dat
                return JSON.parse(storedData);
            } catch (e) {
                 console.error("Chyba při parsování dat aplikace:", e);
                return getDefaultAppData();
            }
        }
        return getDefaultAppData();
    }

    function saveAppData() {
        localStorage.setItem(APP_DATA_KEY, JSON.stringify(appData));
    }

     function getDefaultAppData() {
        // Výchozí struktura dat, pokud v localStorage nic není
        return {
            reports: [],
            finance: [],
            debts: [],
            payments: [],
            categories: {
                work: ['Vývoj', 'Schůzka', 'Administrativa'],
                finance: ['Příjem', 'Výdaj'] // Jen příklady
            },
            settings: {
                defaultHourlyRateCZK: 350,
                defaultHourlyRateEUR: 15,
                defaultCurrency: "CZK",
                defaultPerson: "",
                autoRentAmountCZK: 0,
                autoRentAmountEUR: 0,
                autoAddRentDay: 1,
                lastRentAddedMonth: null,
                lastRentAddedYear: null
            }
        };
    }

    // --- Logika časovače ---
    function startTimer() {
        if (timerState.isRunning) return; // Už běží

        timerState.isRunning = true;
        // Pokud timer nebyl resetován, pokračujeme od startTime, jinak startujeme znovu
        if (!timerState.startTime) {
            timerState.startTime = Date.now();
             // timerState.elapsedTimeBeforePause = 0; // Resetovat pokud nepoužíváme pauzu
        } else {
             // Pokud bychom implementovali pauzu, zde bychom startTime posunuli
             // o dobu, po kterou byl timer zastaven.
             // Pro perzistenci bez pauzy je startTime fixní od prvního spuštění
             // dokud není stopnut a uložen/resetován.
             // Pokud ale timer byl stopnut a znovu startujeme BEZ uložení/resetu,
             // potřebujeme nové startTime. Toto ošetříme v stopTimer.
             timerState.startTime = Date.now() - timerState.elapsedTimeBeforePause;

        }


        timerInterval = setInterval(updateDisplay, 1000); // Aktualizace zobrazení každou sekundu
        updateDisplay(); // Okamžitá aktualizace
        updateUI();
        saveTimerState();
    }

    function stopTimer() {
        if (!timerState.isRunning) return; // Neběží

        clearInterval(timerInterval);
        timerInterval = null;
        timerState.isRunning = false;

        // Vypočítat CELKOVOU dobu trvání od původního startu
        const endTime = Date.now();
        const durationMs = endTime - timerState.startTime;
        timerState.elapsedTimeBeforePause = durationMs; // Uložíme celkovou dobu pro případný restart bez uložení

        updateUI(); // Aktualizuje tlačítka a titulek
        saveTimerState(); // Uložíme stav (isRunning=false, elapsedTime)

        // Zobrazit dialog pro uložení záznamu
        showSaveReportDialog(timerState.startTime, endTime, durationMs);
    }

     function resetTimer(confirmReset = true) {
        if (timerState.isRunning) {
             alert("Nejdříve zastavte časovač.");
             return;
        }
        if (confirmReset && !confirm("Opravdu chcete resetovat časovač a zahodit aktuálně naměřený čas?")) {
            return;
        }

        clearInterval(timerInterval);
        timerInterval = null;
        timerState = getDefaultTimerState(); // Reset na výchozí stav
        saveTimerState();
        updateDisplay(); // Vynulovat zobrazení
        updateUI();
    }

    function updateDisplay() {
        let elapsedTime = 0;
        if (timerState.isRunning && timerState.startTime) {
             elapsedTime = Date.now() - timerState.startTime;
        } else {
            elapsedTime = timerState.elapsedTimeBeforePause; // Zobrazit poslední naměřený čas, pokud neběží
        }

        timerDisplay.textContent = formatTime(elapsedTime);

        if (timerState.isRunning) {
            document.title = `(${formatTime(elapsedTime)}) ${DEFAULT_TITLE}`;
        } else {
            document.title = DEFAULT_TITLE;
        }
    }

    function formatTime(ms) {
        if (ms < 0) ms = 0;
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

     function formatDateTime(timestamp) {
        if (!timestamp) return '';
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Měsíce jsou 0-11
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }


    function restoreTimer() {
        if (timerState.isRunning && timerState.startTime) {
            // Pokud aplikace byla zavřena a timer běžel, obnovíme ho
            const now = Date.now();
            const expectedElapsedTime = now - timerState.startTime;

            // Možná kontrola proti nesmyslně dlouhé době (např. pokud PC bylo vypnuté)
            // if (expectedElapsedTime > ...) { /* handle potentially huge time */ }

            timerState.elapsedTimeBeforePause = expectedElapsedTime; // Aktualizujeme, i když hned spustíme interval
            timerInterval = setInterval(updateDisplay, 1000);
            updateDisplay();
        } else {
             // Pokud neběžel, jen zobrazíme poslední elapsedTime nebo 00:00:00
             updateDisplay();
        }
         updateUI();
    }

    // --- Správa pracovních výkazů ---
     function showSaveReportDialog(startTime, endTime, durationMs) {
         // Předvyplnit formulář
         reportStartTimeInput.value = startTime;
         reportEndTimeInput.value = endTime;
         reportDurationMsInput.value = durationMs;
         reportStartDisplay.textContent = formatDateTime(startTime);
         reportEndDisplay.textContent = formatDateTime(endTime);
         reportDurationDisplay.textContent = formatTime(durationMs);
         reportProjectInput.value = ''; // Vyčistit předchozí hodnoty
         reportNotesInput.value = '';

         // Načíst aktuální kategorie do selectu
         populateWorkCategoriesSelect();

        // Zobrazit dialog a overlay
        saveReportDialog.classList.remove('hidden');
        overlay.classList.remove('hidden');
        reportProjectInput.focus();
    }

    function hideSaveReportDialog() {
        saveReportDialog.classList.add('hidden');
        overlay.classList.add('hidden');
    }

     function handleSaveReportSubmit(event) {
        event.preventDefault();

        const newReport = {
            id: `report-${Date.now()}-${Math.random().toString(16).slice(2)}`, // Jednoduché unikátní ID
            project: reportProjectInput.value.trim(),
            category: reportCategorySelect.value,
            startTime: parseInt(reportStartTimeInput.value, 10),
            endTime: parseInt(reportEndTimeInput.value, 10),
            duration: parseInt(reportDurationMsInput.value, 10),
            notes: reportNotesInput.value.trim(),
            // TODO: Přidat výpočet výdělku na základě nastavení
            earnings: 0,
            currency: appData.settings.defaultCurrency
        };

        if (!newReport.project || !newReport.category) {
             alert("Prosím vyplňte projekt a kategorii.");
             return;
        }

        appData.reports.push(newReport);
        saveAppData();
        renderReportsTable();
        hideSaveReportDialog();
        resetTimer(false); // Resetovat časovač bez potvrzení po úspěšném uložení
    }

     function renderReportsTable() {
        reportsTableBody.innerHTML = ''; // Vyčistit tabulku

        if (appData.reports.length === 0) {
            noReportsMessage.classList.remove('hidden');
            reportsTableBody.innerHTML = ''; // Jistota
            return;
        }

        noReportsMessage.classList.add('hidden');

         // Seřadit sestupně podle data začátku (nejnovější první)
        const sortedReports = [...appData.reports].sort((a, b) => b.startTime - a.startTime);

        sortedReports.forEach(report => {
            const row = reportsTableBody.insertRow();
            row.dataset.id = report.id; // Přidat ID pro snadnější manipulaci

            row.insertCell().textContent = formatDateTime(report.startTime).split(' ')[0]; // Jen datum
            row.insertCell().textContent = report.project;
            row.insertCell().textContent = report.category;
            row.insertCell().textContent = formatTime(report.duration);
            row.insertCell().textContent = report.notes;

            // Akce (zatím jen smazání)
            const actionsCell = row.insertCell();
             actionsCell.style.whiteSpace = 'nowrap'; // Zabraňuje zalomení tlačítek
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.title = "Smazat záznam";
            deleteBtn.classList.add('danger');
            deleteBtn.addEventListener('click', () => deleteReport(report.id));
            actionsCell.appendChild(deleteBtn);

             // TODO: Přidat tlačítko Upravit
             // const editBtn = document.createElement('button'); ...
        });

        // TODO: Aktualizovat souhrn
        updateReportsSummary();
    }

    function deleteReport(reportId) {
        if (!confirm(`Opravdu chcete smazat tento pracovní výkaz?`)) {
            return;
        }
        appData.reports = appData.reports.filter(report => report.id !== reportId);
        saveAppData();
        renderReportsTable(); // Překreslit tabulku
    }

     function updateReportsSummary() {
         // TODO: Implementovat výpočet a zobrazení souhrnu (celková doba, výdělek)
         const summaryDiv = document.getElementById('reports-summary');
         summaryDiv.textContent = `Celkem záznamů: ${appData.reports.length}`; // Velmi základní
     }


    // --- Správa kategorií ---
     function loadWorkCategories() {
         populateWorkCategoriesSelect();
         renderWorkCategoriesSettings();
     }

     function populateWorkCategoriesSelect() {
        reportCategorySelect.innerHTML = ''; // Vyčistit select
        if (!appData.categories || !appData.categories.work) return;

        appData.categories.work.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            reportCategorySelect.appendChild(option);
        });
     }

     function renderWorkCategoriesSettings() {
         workCategoriesList.innerHTML = '';
         if (!appData.categories || !appData.categories.work) return;

         appData.categories.work.forEach(category => {
             const li = document.createElement('li');
             li.textContent = category;

             const deleteBtn = document.createElement('button');
             deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
             deleteBtn.title = 'Smazat kategorii';
             deleteBtn.addEventListener('click', () => deleteWorkCategory(category));

             li.appendChild(deleteBtn);
             workCategoriesList.appendChild(li);
         });
     }

     function addWorkCategory() {
         const newCategory = newWorkCategoryInput.value.trim();
         if (!newCategory) {
             alert('Název kategorie nemůže být prázdný.');
             return;
         }
         if (appData.categories.work.includes(newCategory)) {
              alert('Tato kategorie již existuje.');
              return;
         }

         appData.categories.work.push(newCategory);
         appData.categories.work.sort(); // Udržovat seřazené
         saveAppData();
         loadWorkCategories(); // Refresh selectu i nastavení
         newWorkCategoryInput.value = '';
     }

     function deleteWorkCategory(categoryToDelete) {
          if (!confirm(`Opravdu chcete smazat kategorii "${categoryToDelete}"? Záznamy používající tuto kategorii nebudou ovlivněny, ale nebudete ji moci znovu vybrat.`)) {
              return;
          }
          appData.categories.work = appData.categories.work.filter(cat => cat !== categoryToDelete);
          saveAppData();
          loadWorkCategories(); // Refresh selectu i nastavení
     }

    // --- Navigace ---
    function handleNavClick(event) {
        if (event.target.tagName === 'BUTTON' && event.target.dataset.section) {
            const targetSectionId = event.target.dataset.section;
            updateNav(targetSectionId);
        }
    }

    function updateNav(activeSectionId) {
        // Skrýt všechny sekce
        contentSections.forEach(section => section.classList.add('hidden'));
        // Zobrazit cílovou sekci
        const activeSection = document.getElementById(activeSectionId);
        if (activeSection) {
            activeSection.classList.remove('hidden');
             activeSection.classList.add('active'); // Přidat aktivní třídu
        }

        // Aktualizovat aktivní tlačítko v navigaci
        navButtons.forEach(button => {
            if (button.dataset.section === activeSectionId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }


    // --- UI Aktualizace ---
    function updateUI() {
        // Aktualizace tlačítka Start/Stop
        if (timerState.isRunning) {
            startStopBtn.innerHTML = '<i class="fas fa-stop"></i> Stop';
            startStopBtn.classList.add('running');
        } else {
            startStopBtn.innerHTML = '<i class="fas fa-play"></i> Start';
            startStopBtn.classList.remove('running');
        }

        // Reset tlačítko - aktivní jen když časovač neběží a je co resetovat
         resetBtn.disabled = timerState.isRunning || (!timerState.startTime && timerState.elapsedTimeBeforePause === 0);


        // Titulek stránky (řešeno v updateDisplay)
    }

    // --- Reset aplikace ---
    function resetApplicationData() {
         if (confirm("POZOR!\n\nOpravdu chcete smazat VŠECHNA data aplikace (výkazy, finance, dluhy, nastavení)?\nTato akce je nevratná!")) {
             if (confirm("Opravdu poslední varování: Chcete smazat všechna data?")) {
                 localStorage.removeItem(APP_DATA_KEY);
                 localStorage.removeItem(TIMER_STATE_KEY);
                 // Znovu načíst výchozí data a restartovat UI
                 timerState = getDefaultTimerState();
                 appData = getDefaultAppData();
                 initializeApp(); // Re-inicializace s výchozími daty
                 alert("Všechna data aplikace byla resetována.");
             }
         }
    }


    // --- Event Listeners ---
    function setupEventListeners() {
        startStopBtn.addEventListener('click', () => {
            if (timerState.isRunning) {
                stopTimer();
            } else {
                startTimer();
            }
        });
        resetBtn.addEventListener('click', () => resetTimer(true)); // S potvrzením

        // Navigace
        document.querySelector('header nav').addEventListener('click', handleNavClick);

        // Dialog pro uložení
        saveReportForm.addEventListener('submit', handleSaveReportSubmit);
        cancelSaveBtn.addEventListener('click', () => {
             hideSaveReportDialog();
             // Nechat časovač zastavený, ale čas nevyresetovaný
             // Uživatel může buď znovu startovat (pokračovat v měření) nebo resetovat
        });
        overlay.addEventListener('click', hideSaveReportDialog); // Kliknutí mimo dialog ho zavře

        // Nastavení kategorií
        addWorkCategoryBtn.addEventListener('click', addWorkCategory);
         newWorkCategoryInput.addEventListener('keypress', (e) => {
             if (e.key === 'Enter') {
                 addWorkCategory();
             }
         });

         // Reset aplikace
         resetAllDataBtn.addEventListener('click', resetApplicationData);

         // TODO: Přidat listenery pro další tlačítka (Přidat ručně, Filtry, Export...)
    }

    // --- Spuštění aplikace ---
    initializeApp();

}); // Konec DOMContentLoaded
