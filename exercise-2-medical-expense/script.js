// script.js

const originalDataset = {
    workerName: "Madeleine Willson",
    claimNumber: "20042047",
    workerAppId: "712041",
    submitted: "March 19, 2024 19:21",
    prescriptionDrugs: [
        { id: 1, drug: "Naproxen", rxDate: "", purchaseDate: "", provider: "", amount: 20 }
    ],
    otcDrugs: [
        { id: 1, drug: "Advil", purchaseDate: "", amount: 0, seller: "Shoppers Drug Mart", reason: "Pain" }
    ],
    medicalSupplies: [
        { id: 1, item: "Tensor", date: "", prescribed: "Yes", provider: "Dr. Best", amount: 10, seller: "" }
    ],
    parking: [
        { id: 1, facility: "", date: "", amount: 0, meterUsed: "", meterNumber: "" }
    ],
    mileage: [
        { id: 1, date: "", facility: "", workplace: "", km: 20 }
    ],
    transportation: [
        { id: 1, date: "", start: "", facility: "", type: "Bus", fare: 3 },
        { id: 2, date: "", start: "", facility: "", type: "Taxi", fare: 15 }
    ]
};

const alternativeDataset = {
    workerName: "Alex Johnson",
    claimNumber: "30051289",
    workerAppId: "992100",
    submitted: "April 2, 2024 10:15",
    prescriptionDrugs: [
        { id: 1, drug: "Amoxicillin", rxDate: "2024-03-01", purchaseDate: "2024-03-01", provider: "Dr. Smith", amount: 45.50 }
    ],
    otcDrugs: [
        { id: 1, drug: "Tylenol", purchaseDate: "2024-03-05", amount: 12.99, seller: "Rexall", reason: "Fever" },
        { id: 2, drug: "Cough Syrup", purchaseDate: "2024-03-10", amount: 8.50, seller: "Walmart", reason: "Cough" }
    ],
    medicalSupplies: [
        { id: 1, item: "Crutches", date: "2024-03-02", prescribed: "Yes", provider: "Medical Inc", amount: 120, seller: "Medical Inc" }
    ],
    parking: [
        { id: 1, facility: "Hospital", date: "2024-03-01", amount: 15, meterUsed: "No", meterNumber: "" }
    ],
    mileage: [
        { id: 1, date: "2024-03-01", facility: "Hospital", workplace: "Office", km: 45 }
    ],
    transportation: [
        { id: 1, date: "2024-03-15", start: "Home", facility: "Clinic", type: "Taxi", fare: 25.50 }
    ]
};

const largeDataset = {
    workerName: "Max Mustermann",
    claimNumber: "99887766",
    workerAppId: "554433",
    submitted: "May 10, 2024 08:00",
    prescriptionDrugs: Array.from({length: 10}, (_, i) => ({ id: i+1, drug: `Rx Drug ${i+1}`, rxDate: "2024-04-01", purchaseDate: "2024-04-02", provider: "Pharmacy", amount: 15.00 + i })),
    otcDrugs: Array.from({length: 10}, (_, i) => ({ id: i+1, drug: `OTC Item ${i+1}`, purchaseDate: "2024-04-05", amount: 5.50 + i, seller: "Drugstore", reason: "Pain" })),
    medicalSupplies: Array.from({length: 10}, (_, i) => ({ id: i+1, item: `Supply ${i+1}`, date: "2024-04-10", prescribed: "Yes", provider: "Medical Co", amount: 25.00, seller: "Medical Co" })),
    parking: Array.from({length: 10}, (_, i) => ({ id: i+1, facility: `Lot ${i+1}`, date: "2024-04-15", amount: 12.00, meterUsed: "No", meterNumber: "" })),
    mileage: Array.from({length: 10}, (_, i) => ({ id: i+1, date: "2024-04-16", facility: "Clinic", workplace: "HQ", km: 20 + i })),
    transportation: Array.from({length: 10}, (_, i) => ({ id: i+1, date: "2024-04-17", start: "Home", facility: "Hospital", type: i%2===0?"Taxi":"Bus", fare: 15.00 }))
};

let reportData = JSON.parse(JSON.stringify(originalDataset));
let nextId = 1000; // unique ID generator for new rows

// Number formatter
const formatCurrency = (amount) => {
    const num = parseFloat(amount);
    return isNaN(num) ? "$0.00" : "$" + num.toFixed(2);
};

// --- RENDER CONTROLS ---

function renderControlPanel() {
    const cp = document.getElementById('control-panel');
    let html = `
        <div class="panel-header">
            <h2>Editor Panel</h2>
            <span class="panel-status">Unsaved Changes</span>
        </div>
        
        <form id="editor-form" onsubmit="event.preventDefault();">
            <fieldset class="editor-group">
                <legend>Document Info</legend>
                <div class="controls-grid">
                    <label>Worker Name <input type="text" id="doc-workerName" value="${reportData.workerName}"></label>
                    <label>Claim Number <input type="text" id="doc-claimNumber" value="${reportData.claimNumber}"></label>
                    <label>Worker App ID <input type="text" id="doc-workerAppId" value="${reportData.workerAppId}"></label>
                    <label>Submitted <input type="text" id="doc-submitted" value="${reportData.submitted}"></label>
                </div>
            </fieldset>
    `;

    html += renderListControl('prescriptionDrugs', 'Prescription Drugs', ['Drug', 'Rx Date', 'Purchase Date', 'Provider', 'Amount'], ['drug', 'rxDate', 'purchaseDate', 'provider', 'amount']);
    html += renderListControl('otcDrugs', 'Over-The-Counter Drugs', ['Drug', 'Purchase Date', 'Amount', 'Seller', 'Reason'], ['drug', 'purchaseDate', 'amount', 'seller', 'reason']);
    html += renderListControl('medicalSupplies', 'Medical Supplies', ['Item', 'Date', 'Prescribed', 'Provider', 'Amount', 'Seller'], ['item', 'date', 'prescribed', 'provider', 'amount', 'seller']);
    html += renderListControl('parking', 'Parking', ['Facility', 'Date', 'Amount', 'Meter Used', 'Meter Number'], ['facility', 'date', 'amount', 'meterUsed', 'meterNumber']);
    html += renderListControl('mileage', 'Mileage', ['Date', 'Facility', 'Workplace', 'Kilometres'], ['date', 'facility', 'workplace', 'km']);
    html += renderListControl('transportation', 'Bus / Taxi', ['Date', 'Start', 'Facility', 'Type', 'Fare'], ['date', 'start', 'facility', 'type', 'fare']);

    html += `
            <div class="controls-actions">
                <button id="btn-update" class="btn-primary">Update Report Preview</button>
            </div>
        </form>
    `;

    cp.innerHTML = html;

    document.getElementById('btn-update').addEventListener('click', updateReportData);
}

function renderListControl(key, title, labels, fields) {
    let html = `<fieldset class="editor-group" id="section-${key}">
        <legend>${title}</legend>
        <div class="rows-container">`;
    
    reportData[key].forEach(item => {
        html += `<div class="cp-row" data-id="${item.id}">`;
        fields.forEach((field, i) => {
            html += `<label>${labels[i]}
                <input type="text" data-field="${field}" value="${item[field] || ''}">
            </label>`;
        });
        html += `<button class="btn-remove" onclick="removeRow('${key}', ${item.id})">Remove</button>
        </div>`;
    });

    html += `</div>
        <button type="button" class="btn-add" onclick="addRow('${key}')">+ Add Row</button>
    </fieldset>`;
    return html;
}

window.removeRow = (key, id) => {
    reportData[key] = reportData[key].filter(item => item.id !== id);
    renderControlPanel(); // re-render controls
}

window.addRow = (key) => {
    const newItem = { id: nextId++ };
    // Provide empty defaults based on key
    const template = reportData[key].length > 0 ? reportData[key][0] : {};
    Object.keys(template).forEach(k => {
        if (k !== 'id') newItem[k] = (k === 'amount' || k === 'fare' || k === 'km') ? 0 : '';
    });
    reportData[key].push(newItem);
    renderControlPanel();
}

function updateReportData() {
    // Read Doc Info
    reportData.workerName = document.getElementById('doc-workerName').value;
    reportData.claimNumber = document.getElementById('doc-claimNumber').value;
    reportData.workerAppId = document.getElementById('doc-workerAppId').value;
    reportData.submitted = document.getElementById('doc-submitted').value;

    // Read Lists
    const listKeys = ['prescriptionDrugs', 'otcDrugs', 'medicalSupplies', 'parking', 'mileage', 'transportation'];
    listKeys.forEach(key => {
        const rows = document.querySelectorAll(`#section-${key} .cp-row`);
        reportData[key] = [];
        rows.forEach(row => {
            const id = parseInt(row.getAttribute('data-id'));
            const obj = { id };
            row.querySelectorAll('input').forEach(input => {
                const field = input.getAttribute('data-field');
                // Auto-cast numeric fields safely
                if (field === 'amount' || field === 'fare' || field === 'km') {
                    obj[field] = parseFloat(input.value) || 0;
                } else {
                    obj[field] = input.value;
                }
            });
            reportData[key].push(obj);
        });
    });

    renderReport();
}

// --- RENDER REPORT ---

function renderHeader(data) {
    return `
        <div class="header">
            <div class="header-left">
                <img src="../exercise-1-worker-progress/assets/wcb-logo.png" alt="WCB Logo" class="logo-img">
                <div class="header-address">
                    <div>333 Broadway</div>
                    <div>Winnipeg, MB R3C 4W3</div>
                    <div>Phone: (204) 954-4321</div>
                    <div>Toll Free: 1-855-954-4321</div>
                    <div>wcb.mb.ca</div>
                </div>
            </div>
            <div class="header-right">
                <div class="doc-title" style="max-width: 250px; text-align: right;">MEDICAL & TRAVEL EXPENSE REQUEST</div>
                <div style="margin-bottom: 5px;"><span class="info-label">Claim No.</span> ${data.claimNumber}</div>
                <div>WP</div>
            </div>
        </div>
        <div class="section" style="margin-bottom: 20px;">
            <p><strong>Worker:</strong> ${data.workerName}</p>
        </div>
    `;
}

function renderFooter(data, pageNum, totalPages) {
    return `
        <div class="footer">
            <div>Worker App ID: ${data.workerAppId}</div>
            <div>Submitted: ${data.submitted}</div>
            <div>Page ${pageNum} of ${totalPages}</div>
        </div>
    `;
}

function renderTable(title, columns, dataArray, mappingFn, totalField = null) {
    let html = `<div class="section">
        <div class="section-title">${title}</div>
        <table class="report-table">
            <thead>
                <tr>`;
    columns.forEach(col => html += `<th>${col}</th>`);
    html += `</tr>
            </thead>
            <tbody>`;
    
    let total = 0;
    
    if (dataArray.length === 0) {
        html += `<tr><td colspan="${columns.length}" style="text-align:center; font-style:italic;">No records entered</td></tr>`;
    } else {
        dataArray.forEach(item => {
            html += `<tr>`;
            const rowData = mappingFn(item);
            rowData.forEach((val, i) => {
                // If it's an amount column, align right
                const isAmount = (totalField && typeof val === 'string' && val.startsWith('$')) || (title === "MILEAGE" && i === columns.length - 1);
                html += `<td ${isAmount ? 'class="amount-col"' : ''}>${val || ''}</td>`;
            });
            html += `</tr>`;
            if (totalField) {
                total += parseFloat(item[totalField] || 0);
            }
        });
        
        if (totalField) {
            html += `<tr class="total-row">
                <td colspan="${columns.length - 1}" style="text-align: right;">TOTAL:</td>
                <td class="amount-col">${title === 'MILEAGE' ? total : formatCurrency(total)}</td>
            </tr>`;
        }
    }
    
    html += `</tbody>
        </table>
    </div>`;
    return html;
}

function renderReport() {
    const container = document.getElementById('report-container');
    
    // Page 1
    let p1 = `<div class="page-container">
        <div class="content-wrapper">
            ${renderHeader(reportData)}
            
            ${renderTable(
                "PRESCRIPTION DRUGS", 
                ["Drug", "Prescription Date", "Purchase Date", "Provider", "Amount"],
                reportData.prescriptionDrugs,
                item => [item.drug, item.rxDate, item.purchaseDate, item.provider, formatCurrency(item.amount)],
                "amount"
            )}
            
            ${renderTable(
                "OVER-THE-COUNTER DRUGS", 
                ["Drug", "Purchase Date", "Seller", "Reason", "Amount"],
                reportData.otcDrugs,
                item => [item.drug, item.purchaseDate, item.seller, item.reason, formatCurrency(item.amount)],
                "amount"
            )}
            
            ${renderTable(
                "MEDICAL SUPPLIES", 
                ["Item", "Date", "Prescribed", "Provider", "Seller", "Amount"],
                reportData.medicalSupplies,
                item => [item.item, item.date, item.prescribed, item.provider, item.seller, formatCurrency(item.amount)],
                "amount"
            )}
        </div>
        ${renderFooter(reportData, 1, 2)}
    </div>`;

    // Page 2
    let p2 = `<div class="page-container">
        <div class="content-wrapper">
            ${renderHeader(reportData)}
            
            ${renderTable(
                "PARKING", 
                ["Facility", "Date", "Meter Used", "Meter Number", "Amount"],
                reportData.parking,
                item => [item.facility, item.date, item.meterUsed, item.meterNumber, formatCurrency(item.amount)],
                "amount"
            )}
            
            ${renderTable(
                "MILEAGE", 
                ["Appointment Date", "Facility", "Workplace", "Kilometres"],
                reportData.mileage,
                item => [item.date, item.facility, item.workplace, item.km],
                "km"
            )}
            
            ${renderTable(
                "BUS / TAXI", 
                ["Appointment Date", "Starting Point", "Facility", "Bus/Taxi", "Total Fare"],
                reportData.transportation,
                item => [item.date, item.start, item.facility, item.type, formatCurrency(item.fare)],
                "fare"
            )}
        </div>
        ${renderFooter(reportData, 2, 2)}
    </div>`;

    container.innerHTML = p1 + p2;
}

function initializeApp() {
    renderControlPanel();
    renderReport();
    
    // Attach static top-header events
    document.getElementById('btn-reset').addEventListener('click', () => {
        reportData = JSON.parse(JSON.stringify(originalDataset));
        renderControlPanel();
        renderReport();
    });

    document.getElementById('ctrl-dataset').addEventListener('change', (e) => {
        let selectedDataset = originalDataset;
        if (e.target.value === 'alternative') selectedDataset = alternativeDataset;
        if (e.target.value === 'large') selectedDataset = largeDataset;
        
        reportData = JSON.parse(JSON.stringify(selectedDataset));
        renderControlPanel();
        renderReport();
    });
}

window.onload = initializeApp;
