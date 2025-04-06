<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#4a6da7"> <!-- Barva pro PWA lištu -->
    <title>Pracovní výkazy & Finance</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="icons/icon-192x192.png"> <!-- Ikona pro iOS -->
    <link rel="icon" href="icons/favicon.ico" type="image/x-icon"> <!-- Favicon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> <!-- Font Awesome -->
</head>
<body>
    <header>
        <h1>Pracovní výkazy & Finance</h1>
        <nav>
            <button id="nav-reports" class="active">Výkazy</button>
            <button id="nav-finances">Finance</button>
            <button id="nav-summary">Souhrn</button>
        </nav>
    </header>

    <main>
        <!-- Sekce pracovních výkazů -->
        <section id="reports-section" class="section active">
            <div class="section-header">
                <h2>Pracovní výkazy</h2>
                <div class="action-buttons">
                    <button id="toggle-timer-mode" class="btn primary-btn">
                        <i class="fas fa-stopwatch"></i> Stopky
                    </button>
                    <button id="toggle-manual-mode" class="btn">
                        <i class="fas fa-pen"></i> Ruční zadání
                    </button>
                </div>
            </div>

            <!-- Timer Mode -->
            <div id="timer-mode" class="input-form">
                 <div class="form-row">
                    <div class="form-group">
                        <label for="timer-date">Datum:</label>
                        <input type="date" id="timer-date" required>
                    </div>
                     <div class="form-group">
                         <label for="timer-person">Osoba:</label>
                         <select id="timer-person" required>
                             <option value="Maru">Maru (275 Kč/hod)</option>
                             <option value="Marty">Marty (400 Kč/hod)</option>
                         </select>
                     </div>
                 </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="timer-category">Kategorie:</label>
                        <select id="timer-category" required>
                            <!-- Dynamicky načtené + Vlastní -->
                        </select>
                        <input type="text" id="timer-custom-category" placeholder="Vlastní kategorie" class="hidden">
                    </div>
                     <div class="form-group">
                        <label for="timer-currency">Měna:</label>
                        <select id="timer-currency">
                            <option value="CZK">CZK</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                </div>

                <div id="timer-display" class="timer-container">
                    <div id="timer" class="timer-text">00:00:00</div>
                    <div class="timer-buttons">
                        <button id="start-timer" class="btn success-btn"><i class="fas fa-play"></i> Start</button>
                        <button id="pause-timer" class="btn warning-btn" disabled><i class="fas fa-pause"></i> Pauza</button>
                        <button id="stop-timer" class="btn danger-btn" disabled><i class="fas fa-stop"></i> Stop & Uložit</button>
                    </div>
                </div>

                 <!-- Pole pro zobrazení údajů po stopnutí timeru (pro kontrolu) -->
                <div id="timer-summary" class="hidden timer-summary-details">
                    <h4>Detaily záznamu (pro kontrolu)</h4>
                     <div class="form-row">
                        <div class="form-group">
                             <label>Začátek:</label>
                             <span id="timer-start-display">-</span>
                        </div>
                        <div class="form-group">
                             <label>Konec:</label>
                             <span id="timer-end-display">-</span>
                        </div>
                     </div>
                     <div class="form-row">
                         <div class="form-group">
                             <label>Pauza (min):</label>
                              <input type="number" id="timer-pause" min="0" value="0">
                         </div>
                         <div class="form-group">
                             <label>Odpracováno (hod):</label>
                             <span id="timer-hours-display">-</span>
                         </div>
                         <div class="form-group">
                             <label>Výdělek:</label>
                             <span id="timer-earnings-display">-</span>
                         </div>
                     </div>
                 </div>
            </div>

            <!-- Manual Mode -->
            <div id="manual-mode" class="input-form hidden">
                 <div class="form-row">
                    <div class="form-group">
                        <label for="manual-date">Datum:</label>
                        <input type="date" id="manual-date" required>
                    </div>
                    <div class="form-group">
                        <label for="manual-person">Osoba:</label>
                        <select id="manual-person" required>
                            <option value="Maru">Maru (275 Kč/hod)</option>
                            <option value="Marty">Marty (400 Kč/hod)</option>
                        </select>
                    </div>
                     <div class="form-group">
                        <label for="manual-currency">Měna:</label>
                        <select id="manual-currency">
                            <option value="CZK">CZK</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="manual-category">Kategorie:</label>
                        <select id="manual-category" required>
                             <!-- Dynamicky načtené + Vlastní -->
                        </select>
                        <input type="text" id="manual-custom-category" placeholder="Vlastní kategorie" class="hidden">
                    </div>
                     <div class="form-group">
                        <label for="manual-hours">Odpracováno (hod):</label>
                        <input type="text" id="manual-hours" placeholder="Např. 2:30, 2.5, 150m, 0830">
                    </div>
                </div>
                 <div class="form-row time-inputs">
                     <div class="form-group">
                         <label for="manual-start">Začátek:</label>
                         <input type="time" id="manual-start">
                     </div>
                     <div class="form-group">
                         <label for="manual-end">Konec:</label>
                         <input type="time" id="manual-end">
                     </div>
                     <div class="form-group">
                         <label for="manual-pause">Pauza (min):</label>
                         <input type="number" id="manual-pause" min="0" value="0">
                     </div>
                 </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="manual-earnings">Výdělek:</label>
                        <input type="text" id="manual-earnings" disabled>
                    </div>
                    <div class="form-group">
                        <label for="manual-note">Poznámka:</label>
                        <input type="text" id="manual-note" placeholder="Volitelná poznámka">
                    </div>
                </div>
                <button id="save-manual" class="btn primary-btn"><i class="fas fa-save"></i> Uložit ruční záznam</button>
            </div>

            <!-- Filtry pro výkazy -->
            <div class="filters">
                <h4>Filtry</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="filter-date">Datum:</label>
                        <input type="date" id="filter-date">
                    </div>
                    <div class="form-group">
                        <label for="filter-person">Osoba:</label>
                        <select id="filter-person">
                            <option value="">Všichni</option>
                            <option value="Maru">Maru</option>
                            <option value="Marty">Marty</option>
                        </select>
                    </div>
                     <div class="form-group">
                        <label for="filter-currency">Měna:</label>
                        <select id="filter-currency">
                            <option value="">Všechny</option>
                            <option value="CZK">CZK</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button id="clear-report-filters" class="btn"><i class="fas fa-times"></i> Zrušit filtry</button>
                    </div>
                </div>
            </div>

            <!-- Tabulka výkazů -->
            <div class="table-container">
                <table id="reports-table">
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Osoba</th>
                            <th>Kategorie</th>
                            <th>Začátek</th>
                            <th>Konec</th>
                            <th>Pauza</th>
                            <th>Hodiny</th>
                            <th>Výdělek</th>
                            <th>Měna</th>
                            <th>Akce</th>
                        </tr>
                    </thead>
                    <tbody id="reports-table-body">
                        <!-- Zde budou dynamicky generované řádky -->
                    </tbody>
                </table>
                <div id="no-reports-message" class="hidden info-message">
                    <p>Zatím nebyly zaznamenány žádné výkazy.</p>
                </div>
            </div>
        </section>

        <!-- Sekce financí -->
        <section id="finances-section" class="section">
            <div class="section-header">
                <h2>Finance</h2>
                <div class="action-buttons">
                     <button id="add-finance" class="btn primary-btn">
                        <i class="fas fa-plus"></i> Přidat záznam
                    </button>
                    <button id="add-debt" class="btn warning-btn">
                        <i class="fas fa-file-invoice-dollar"></i> Přidat dluh
                    </button>
                 </div>
            </div>

            <!-- Formulář pro přidání/editaci finančního záznamu -->
            <div id="finance-form" class="input-form hidden">
                <h3 id="finance-form-title">Přidat finanční záznam</h3>
                 <input type="hidden" id="finance-edit-id"> <!-- Pro editaci -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="finance-date">Datum:</label>
                        <input type="date" id="finance-date" required>
                    </div>
                    <div class="form-group">
                        <label for="finance-type">Typ:</label>
                        <select id="finance-type" required>
                            <option value="income">Příjem (Výplata/Záloha)</option>
                            <option value="expense">Výdaj (Nákup)</option>
                        </select>
                    </div>
                     <div class="form-group">
                        <label for="finance-currency">Měna:</label>
                        <select id="finance-currency">
                            <option value="CZK">CZK</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="finance-amount">Částka:</label>
                        <input type="number" id="finance-amount" min="0" step="any" required>
                    </div>
                     <div class="form-group">
                        <label for="finance-category">Kategorie:</label>
                        <select id="finance-category" required>
                           <!-- Dynamicky načtené + Vlastní -->
                        </select>
                         <input type="text" id="finance-custom-category" placeholder="Vlastní kategorie" class="hidden">
                    </div>
                    <div class="form-group" id="finance-person-group">
                        <label for="finance-person">Osoba (pro příjem):</label>
                        <select id="finance-person">
                            <option value="">-</option>
                            <option value="Maru">Maru</option>
                            <option value="Marty">Marty</option>
                        </select>
                    </div>
                 </div>
                <div class="form-row">
                    <div class="form-group wide">
                        <label for="finance-note">Poznámka:</label>
                        <input type="text" id="finance-note">
                    </div>
                </div>
                <!-- Sekce pro výpočet splátky dluhu (pouze pro příjmy) -->
                 <div id="finance-debt-section" class="debt-details hidden">
                     <h4>Automatická splátka dluhu (z příjmu)</h4>
                     <div class="form-row">
                        <div class="form-group">
                             <label>Poměr splátky:</label>
                             <span id="finance-debt-ratio-display">N/A</span>
                         </div>
                         <div class="form-group">
                             <label>Celková splátka:</label>
                             <span id="finance-total-debt-payment-display">0 Kč</span>
                         </div>
                     </div>
                     <div class="form-row">
                        <div class="form-group">
                            <label>Splátka nájmu:</label>
                             <span id="finance-rent-payment-display">0 Kč</span>
                        </div>
                        <div class="form-group">
                            <label>Splátka ost. dluhu:</label>
                             <span id="finance-other-debt-payment-display">0 Kč</span>
                        </div>
                     </div>
                    <div class="form-row">
                        <div class="form-group">
                             <label>Částka k vyplacení:</label>
                             <span id="finance-payout-display">0 Kč</span>
                        </div>
                         <div class="form-group">
                            <label for="finance-paid-amount">Reálně vyplaceno:</label>
                            <input type="number" id="finance-paid-amount" min="0" step="any" placeholder="Kolik bylo skutečně vyplaceno">
                        </div>
                    </div>
                 </div>
                <div class="form-actions">
                    <button type="button" id="save-finance" class="btn primary-btn"><i class="fas fa-save"></i> Uložit záznam</button>
                    <button type="button" id="cancel-finance" class="btn"><i class="fas fa-times"></i> Zrušit</button>
                </div>
            </div>

             <!-- Formulář pro přidání dluhu -->
            <div id="debt-form" class="input-form hidden">
                 <h3>Přidat dluh</h3>
                 <input type="hidden" id="debt-edit-id"> <!-- Pro editaci -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="debt-date">Datum:</label>
                        <input type="date" id="debt-date" required>
                    </div>
                    <div class="form-group">
                        <label for="debt-person">Osoba (dlužník):</label>
                        <select id="debt-person" required>
                            <option value="Maru">Maru</option>
                            <option value="Marty">Marty</option>
                            <option value="Společný">Společný</option> <!-- Pro nájem apod. -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="debt-currency">Měna:</label>
                        <select id="debt-currency">
                            <option value="CZK">CZK</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                 </div>
                 <div class="form-row">
                     <div class="form-group">
                        <label for="debt-type">Typ dluhu:</label>
                        <select id="debt-type" required>
                            <option value="rent">Nájem</option>
                            <option value="other">Ostatní</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="debt-amount">Částka:</label>
                        <input type="number" id="debt-amount" min="0" step="any" required>
                    </div>
                    <div class="form-group">
                         <label for="debt-note">Poznámka:</label>
                         <input type="text" id="debt-note">
                     </div>
                </div>
                 <div class="form-actions">
                     <button type="button" id="save-debt" class="btn primary-btn"><i class="fas fa-save"></i> Uložit dluh</button>
                     <button type="button" id="cancel-debt" class="btn"><i class="fas fa-times"></i> Zrušit</button>
                 </div>
             </div>

            <!-- Filtry pro finance -->
            <div class="filters">
                 <h4>Filtry</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="filter-finance-date">Datum:</label>
                        <input type="date" id="filter-finance-date">
                    </div>
                    <div class="form-group">
                        <label for="filter-finance-type">Typ:</label>
                        <select id="filter-finance-type">
                            <option value="">Vše</option>
                            <option value="income">Příjem</option>
                            <option value="expense">Výdaj</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="filter-finance-person">Osoba:</label>
                        <select id="filter-finance-person">
                            <option value="">Všichni</option>
                            <option value="Maru">Maru</option>
                            <option value="Marty">Marty</option>
                            <option value="N/A">- (Výdaje bez osoby)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="filter-finance-currency">Měna:</label>
                        <select id="filter-finance-currency">
                            <option value="">Všechny</option>
                            <option value="CZK">CZK</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button id="clear-finance-filters" class="btn"><i class="fas fa-times"></i> Zrušit filtry</button>
                    </div>
                </div>
            </div>

            <!-- Tabulka financí -->
            <div class="table-container">
                <table id="finances-table">
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Typ</th>
                            <th>Osoba</th>
                            <th>Kategorie</th>
                            <th>Částka</th>
                            <th>Měna</th>
                            <th>Spl. nájmu</th>
                            <th>Spl. ost. dluhu</th>
                            <th>K vyplacení</th>
                             <th>Reálně vyplaceno</th>
                            <th>Poznámka</th>
                            <th>Akce</th>
                        </tr>
                    </thead>
                    <tbody id="finances-table-body">
                        <!-- Zde budou dynamicky generované řádky -->
                    </tbody>
                </table>
                <div id="no-finances-message" class="hidden info-message">
                    <p>Zatím nebyly zaznamenány žádné finanční transakce.</p>
                </div>
            </div>
        </section>

        <!-- Sekce souhrnu -->
        <section id="summary-section" class="section">
            <div class="section-header">
                <h2>Souhrn & Dluhy</h2>
                 <div class="action-buttons">
                     <button id="export-data" class="btn primary-btn">
                        <i class="fas fa-file-export"></i> Export do CSV
                    </button>
                    <button id="settings-button" class="btn secondary-btn">
                        <i class="fas fa-cog"></i> Nastavení
                    </button>
                 </div>
            </div>

            <!-- Přehled dluhů -->
             <div class="debt-summary">
                 <h3>Přehled dluhů</h3>
                 <div class="debt-cards">
                     <div class="debt-card">
                         <h4>Maru</h4>
                         <div class="debt-item">
                             <span class="label">Nájem (CZK):</span>
                             <span id="maru-debt-rent-czk" class="value debt-value">0 Kč</span>
                         </div>
                         <div class="debt-item">
                             <span class="label">Nájem (EUR):</span>
                             <span id="maru-debt-rent-eur" class="value debt-value">0 €</span>
                         </div>
                         <div class="debt-item">
                             <span class="label">Ostatní (CZK):</span>
                             <span id="maru-debt-other-czk" class="value debt-value">0 Kč</span>
                         </div>
                         <div class="debt-item">
                             <span class="label">Ostatní (EUR):</span>
                             <span id="maru-debt-other-eur" class="value debt-value">0 €</span>
                         </div>
                         <div class="debt-item total">
                             <span class="label">Celkem splaceno (CZK):</span>
                             <span id="maru-total-paid-debt-czk" class="value">0 Kč</span>
                         </div>
                          <div class="debt-item total">
                             <span class="label">Celkem splaceno (EUR):</span>
                             <span id="maru-total-paid-debt-eur" class="value">0 €</span>
                         </div>
                     </div>
                     <div class="debt-card">
                         <h4>Marty</h4>
                          <div class="debt-item">
                             <span class="label">Nájem (CZK):</span>
                             <span id="marty-debt-rent-czk" class="value debt-value">0 Kč</span>
                         </div>
                         <div class="debt-item">
                             <span class="label">Nájem (EUR):</span>
                             <span id="marty-debt-rent-eur" class="value debt-value">0 €</span>
                         </div>
                         <div class="debt-item">
                             <span class="label">Ostatní (CZK):</span>
                             <span id="marty-debt-other-czk" class="value debt-value">0 Kč</span>
                         </div>
                          <div class="debt-item">
                             <span class="label">Ostatní (EUR):</span>
                             <span id="marty-debt-other-eur" class="value debt-value">0 €</span>
                         </div>
                          <div class="debt-item total">
                             <span class="label">Celkem splaceno (CZK):</span>
                             <span id="marty-total-paid-debt-czk" class="value">0 Kč</span>
                         </div>
                          <div class="debt-item total">
                             <span class="label">Celkem splaceno (EUR):</span>
                             <span id="marty-total-paid-debt-eur" class="value">0 €</span>
                         </div>
                     </div>
                      <div class="debt-card">
                         <h4>Společný dluh (Nájem)</h4>
                          <div class="debt-item">
                             <span class="label">Celkem dluh (CZK):</span>
                             <span id="shared-debt-rent-czk" class="value debt-value">0 Kč</span>
                         </div>
                         <div class="debt-item">
                             <span class="label">Celkem dluh (EUR):</span>
                             <span id="shared-debt-rent-eur" class="value debt-value">0 €</span>
                         </div>
                     </div>
                 </div>
             </div>

             <!-- Tabulka dluhů -->
            <div class="table-container debt-table">
                 <h4>Detailní výpis dluhů</h4>
                 <table id="debts-table">
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Osoba</th>
                            <th>Typ dluhu</th>
                            <th>Částka</th>
                            <th>Měna</th>
                            <th>Poznámka</th>
                            <th>Akce</th>
                        </tr>
                    </thead>
                    <tbody id="debts-table-body">
                        <!-- Zde budou dynamicky generované řádky dluhů -->
                    </tbody>
                </table>
                 <div id="no-debts-message" class="hidden info-message">
                    <p>Zatím nebyly zaznamenány žádné dluhy.</p>
                </div>
            </div>

             <!-- Tabulka splátek -->
            <div class="table-container debt-table">
                 <h4>Detailní výpis splátek dluhů</h4>
                 <table id="debt-payments-table">
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Osoba</th>
                             <th>Typ splátky</th>
                            <th>Částka</th>
                             <th>Měna</th>
                            <th>Poznámka (Původní příjem/výplata)</th>
                            <th>Akce</th>
                        </tr>
                    </thead>
                    <tbody id="debt-payments-table-body">
                        <!-- Zde budou dynamicky generované řádky splátek -->
                    </tbody>
                </table>
                 <div id="no-debt-payments-message" class="hidden info-message">
                    <p>Zatím nebyly zaznamenány žádné splátky dluhů.</p>
                </div>
            </div>


            <!-- Souhrn práce a financí -->
             <h3>Souhrn práce a financí (dle výkazů a financí)</h3>
            <div class="summary-cards">
                <div class="summary-card">
                    <h3>Maru</h3>
                    <div class="summary-data">
                        <div class="summary-item">
                            <span class="label">Odpracováno (CZK):</span>
                            <span id="maru-total-hours-czk" class="value">0 hod</span>
                        </div>
                        <div class="summary-item">
                            <span class="label">Výdělek (CZK):</span>
                            <span id="maru-total-earnings-czk" class="value">0 Kč</span>
                        </div>
                        <div class="summary-item">
                            <span class="label">Odpracováno (EUR):</span>
                            <span id="maru-total-hours-eur" class="value">0 hod</span>
                        </div>
                        <div class="summary-item">
                            <span class="label">Výdělek (EUR):</span>
                            <span id="maru-total-earnings-eur" class="value">0 €</span>
                        </div>
                         <div class="summary-item highlight">
                             <span class="label">Vyplaceno (CZK):</span>
                             <span id="maru-paid-out-czk" class="value">0 Kč</span>
                         </div>
                         <div class="summary-item highlight">
                             <span class="label">Vyplaceno (EUR):</span>
                             <span id="maru-paid-out-eur" class="value">0 €</span>
                         </div>
                    </div>
                </div>

                <div class="summary-card">
                    <h3>Marty</h3>
                    <div class="summary-data">
                        <div class="summary-item">
                            <span class="label">Odpracováno (CZK):</span>
                            <span id="marty-total-hours-czk" class="value">0 hod</span>
                        </div>
                        <div class="summary-item">
                            <span class="label">Výdělek (CZK):</span>
                            <span id="marty-total-earnings-czk" class="value">0 Kč</span>
                        </div>
                        <div class="summary-item">
                            <span class="label">Odpracováno (EUR):</span>
                            <span id="marty-total-hours-eur" class="value">0 hod</span>
                        </div>
                        <div class="summary-item">
                            <span class="label">Výdělek (EUR):</span>
                            <span id="marty-total-earnings-eur" class="value">0 €</span>
                        </div>
                         <div class="summary-item highlight">
                             <span class="label">Vyplaceno (CZK):</span>
                             <span id="marty-paid-out-czk" class="value">0 Kč</span>
                         </div>
                         <div class="summary-item highlight">
                             <span class="label">Vyplaceno (EUR):</span>
                             <span id="marty-paid-out-eur" class="value">0 €</span>
                         </div>
                    </div>
                </div>

                 <div class="summary-card">
                    <h3>Celkový souhrn</h3>
                    <div class="summary-data">
                         <div class="summary-item">
                            <span class="label">Celkem odpracováno (CZK):</span>
                            <span id="total-hours-czk" class="value">0 hod</span>
                        </div>
                         <div class="summary-item">
                            <span class="label">Celkový výdělek (CZK):</span>
                            <span id="total-earnings-czk" class="value">0 Kč</span>
                        </div>
                         <div class="summary-item">
                            <span class="label">Celkem odpracováno (EUR):</span>
                            <span id="total-hours-eur" class="value">0 hod</span>
                        </div>
                         <div class="summary-item">
                            <span class="label">Celkový výdělek (EUR):</span>
                            <span id="total-earnings-eur" class="value">0 €</span>
                        </div>
                         <div class="summary-item">
                            <span class="label">Celkem příjmy (CZK):</span>
                            <span id="total-income-czk" class="value">0 Kč</span>
                        </div>
                         <div class="summary-item">
                            <span class="label">Celkem příjmy (EUR):</span>
                            <span id="total-income-eur" class="value">0 €</span>
                        </div>
                        <div class="summary-item">
                            <span class="label">Celkem výdaje (CZK):</span>
                            <span id="total-expenses-czk" class="value">0 Kč</span>
                        </div>
                         <div class="summary-item">
                            <span class="label">Celkem výdaje (EUR):</span>
                            <span id="total-expenses-eur" class="value">0 €</span>
                        </div>
                        <div class="summary-item highlight">
                             <span class="label">Celkem vyplaceno (CZK):</span>
                             <span id="total-paid-out-czk" class="value">0 Kč</span>
                         </div>
                         <div class="summary-item highlight">
                             <span class="label">Celkem vyplaceno (EUR):</span>
                             <span id="total-paid-out-eur" class="value">0 €</span>
                         </div>
                    </div>
                </div>
            </div>
        </section>

         <!-- Modální okno pro Nastavení -->
        <div id="settings-modal" class="modal hidden">
            <div class="modal-content">
                <span class="close-button" id="close-settings">×</span>
                <h2>Nastavení</h2>
                <div class="form-group">
                    <label for="monthly-rent-amount">Měsíční nájem (CZK):</label>
                    <input type="number" id="monthly-rent-amount" min="0" step="100">
                </div>
                <div class="form-group">
                    <label for="monthly-rent-amount-eur">Měsíční nájem (EUR):</label>
                    <input type="number" id="monthly-rent-amount-eur" min="0" step="10">
                </div>
                 <div class="form-group">
                    <label for="auto-add-rent">Automaticky přidat nájem:</label>
                    <select id="auto-add-rent">
                        <option value="0">Nikdy</option>
                        <option value="1">1. den v měsíci</option>
                        <option value="15">15. den v měsíci</option>
                        <!-- Další dny lze přidat -->
                    </select>
                </div>
                <button id="save-settings" class="btn primary-btn">Uložit nastavení</button>
            </div>
        </div>

    </main>

    <footer>
        <p>Pracovní výkazy & Finance © 2024 | Verze 1.0</p>
        <button id="install-app" class="btn hidden"><i class="fas fa-download"></i> Nainstalovat aplikaci</button>
    </footer>

    <!-- Notifikace -->
    <div id="notification" class="notification"></div>

    <script src="app.js"></script>
    <script>
        // Registrace service workeru
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('service-worker.js') // Upravená cesta
                    .then(reg => console.log('Service Worker registrován!', reg))
                    .catch(err => console.log('Service Worker registrace selhala:', err));
            });
        }

        // Logika pro tlačítko instalace PWA
        let deferredPrompt;
        const installButton = document.getElementById('install-app');

        window.addEventListener('beforeinstallprompt', (e) => {
            // Zabraňte prohlížeči zobrazit výzvu
            e.preventDefault();
            // Uložte událost, abyste ji mohli spustit později
            deferredPrompt = e;
            // Zobrazte tlačítko pro instalaci
            installButton.classList.remove('hidden');
        });

        installButton.addEventListener('click', async () => {
            if (deferredPrompt) {
                // Zobrazte výzvu k instalaci
                deferredPrompt.prompt();
                // Počkejte na odpověď uživatele
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to the install prompt: ${outcome}`);
                // Výzvu lze použít pouze jednou
                deferredPrompt = null;
                // Skryjte tlačítko
                installButton.classList.add('hidden');
            }
        });

         window.addEventListener('appinstalled', () => {
            // Skryjte tlačítko po instalaci
            installButton.classList.add('hidden');
            deferredPrompt = null;
            console.log('Aplikace byla úspěšně nainstalována!');
         });

    </script>
</body>
</html>