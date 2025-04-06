:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-color: #f8f9fa;
    --text-color: #212529;
    --border-color: #dee2e6;
    --hover-color: #0056b3;
    --danger-color: #dc3545;
    --danger-hover-color: #c82333;
    --dialog-background: #fff;
    --overlay-background: rgba(0, 0, 0, 0.5);
}

body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
}

header {
    background-color: var(--primary-color);
    color: white;
    padding: 1rem;
    text-align: center;
}

header h1 {
    margin: 0;
    margin-bottom: 0.5rem;
}

nav button {
    background-color: var(--secondary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0 0.3rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s ease;
}

nav button:hover,
nav button.active {
    background-color: var(--hover-color);
}

main {
    padding: 1.5rem;
    max-width: 1200px;
    margin: 1rem auto;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-radius: 5px;
}

.content-section {
    display: none; /* Skryté ve výchozím stavu */
}

.content-section.active {
    display: block; /* Aktivní sekce je viditelná */
}

h2 {
    color: var(--primary-color);
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}
h2:first-of-type {
    margin-top: 0;
}

h3 {
    color: var(--secondary-color);
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
}

/* --- Timer --- */
.timer-container {
    text-align: center;
    margin-bottom: 2rem;
}

#timer-display {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--text-color);
    background-color: #e9ecef;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    display: inline-block;
}

.timer-controls button {
    font-size: 1.1em;
    padding: 0.7rem 1.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s ease;
}

#start-stop-btn {
    background-color: #28a745; /* Zelená */
    color: white;
}
#start-stop-btn.running {
    background-color: #dc3545; /* Červená */
}
#start-stop-btn:hover {
    background-color: #218838;
}
#start-stop-btn.running:hover {
    background-color: #c82333;
}


#reset-btn {
    background-color: var(--secondary-color);
    color: white;
}
#reset-btn:hover {
    background-color: #5a6268;
}

/* --- Tabulky --- */
.table-container {
    overflow-x: auto; /* Pro responzivitu na menších obrazovkách */
    margin-bottom: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
}

th, td {
    border: 1px solid var(--border-color);
    padding: 0.75rem;
    text-align: left;
}

th {
    background-color: #e9ecef;
    font-weight: bold;
}

tbody tr:nth-child(odd) {
    background-color: var(--background-color);
}

tbody tr:hover {
    background-color: #d6d8db;
}

td button {
     padding: 0.2rem 0.5rem;
     margin-right: 0.3rem;
     cursor: pointer;
}

/* --- Formuláře a dialogy --- */
.dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--dialog-background);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    z-index: 1001; /* Nad overlay */
    width: 90%;
    max-width: 500px;
    border: 1px solid var(--border-color);
}

.dialog h3 {
    margin-top: 0;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 1.5rem;
}

.dialog form div {
    margin-bottom: 1rem;
}

.dialog label {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: bold;
}
.dialog span { /* Pro zobrazení času */
     display: inline-block;
     margin-left: 5px;
}

.dialog input[type="text"],
.dialog input[type="number"],
.dialog select,
.dialog textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    box-sizing: border-box; /* Aby padding neovlivnil šířku */
}
.dialog textarea {
    min-height: 80px;
    resize: vertical;
}

.dialog-buttons {
    text-align: right;
    margin-top: 1.5rem;
}

.dialog-buttons button {
    padding: 0.6rem 1.2rem;
    margin-left: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    border: none;
}

.dialog-buttons button[type="submit"] {
    background-color: var(--primary-color);
    color: white;
}
.dialog-buttons button[type="submit"]:hover {
    background-color: var(--hover-color);
}
.dialog-buttons button[type="button"] { /* Zrušit */
    background-color: var(--secondary-color);
    color: white;
}
.dialog-buttons button[type="button"]:hover {
    background-color: #5a6268;
}


#overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-background);
    z-index: 1000; /* Pod dialogem */
}

/* --- Utility --- */
.hidden {
    display: none !important;
}

.danger {
    background-color: var(--danger-color);
    color: white;
}
.danger:hover {
     background-color: var(--danger-hover-color);
}

button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid transparent;
    transition: background-color 0.2s, border-color 0.2s;
}

button i { /* Ikony */
    margin-right: 0.4em;
}


/* --- Nastavení --- */
#categories-settings ul {
    list-style: none;
    padding: 0;
}
#categories-settings li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid var(--border-color);
}
#categories-settings li button {
    background: none;
    border: none;
    color: var(--danger-color);
    cursor: pointer;
    font-size: 1em;
}

#categories-settings input[type="text"] {
     padding: 0.4rem;
     margin-right: 0.5rem;
}


/* --- Responzivita (základní) --- */
@media (max-width: 768px) {
    nav button {
        display: block;
        width: 100%;
        margin: 0.3rem 0;
        text-align: center;
    }
    #timer-display {
        font-size: 2.5em;
    }
    .timer-controls button {
        font-size: 1em;
        padding: 0.6rem 1rem;
    }
    main {
        padding: 1rem;
    }
    .dialog {
        width: 95%;
    }
    th, td {
        padding: 0.5rem;
    }
}

footer {
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    color: var(--secondary-color);
    font-size: 0.9em;
}
