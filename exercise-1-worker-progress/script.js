// script.js

// The dynamic data object containing all values for the report.
const originalDataset = {
    workerName: "Madeleine Willson",
    claimNumber: "20042047",
    reportDate: "March 15, 2024",
    returnToWorkStatus: "returned", 
    returnToWorkDate: "March 15, 2024",
    workingStatus: "modified-reduced", 
    returnToWorkComments: "Terrible. Testing Testing",
    expectedReturnDate: "",
    returnToWorkConcerns: "",
    employerContact: "",
    employerContactDate: "",
    recoveryStatus: "fully-recovered",
    recoveryComments: "",
    painScale: "",
    medTreatmentStatus: "not-continuing",
    medProviderType: "",
    lastTreatmentDate: "",
    lastProviderName: "",
    nextTreatmentDate: "",
    nextProviderName: "",
    chiroFreq: "",
    medicationStatus: "not-taking",
    medicationName: "",
    homeExercisesStatus: "not-doing",
    exercisesList: "",
    otherInfo: "No info Testing Testing",
    workerAppId: "712041",
    submitted: "March 19, 2024 19:21",
    certifyTrue: "yes",
    privacyNotice: "yes"
};

const alternativeDataset = {
    workerName: "Alex Johnson",
    claimNumber: "55512345",
    reportDate: "April 2, 2024",
    returnToWorkStatus: "not-returned", 
    returnToWorkDate: "",
    workingStatus: "other", 
    returnToWorkComments: "Still feeling severe pain. Cannot return yet.",
    expectedReturnDate: "May 1, 2024",
    returnToWorkConcerns: "Concerned about heavy lifting.",
    employerContact: "Jane Manager",
    employerContactDate: "April 1, 2024",
    recoveryStatus: "not-fully-recovered",
    recoveryComments: "Attending physio twice a week.",
    painScale: "7",
    medTreatmentStatus: "continuing",
    medProviderType: "Physiotherapy Clinic",
    lastTreatmentDate: "April 1, 2024",
    lastProviderName: "Dr. Smith",
    nextTreatmentDate: "April 8, 2024",
    nextProviderName: "Dr. Smith",
    chiroFreq: "Twice a week",
    medicationStatus: "taking",
    medicationName: "Ibuprofen 400mg",
    homeExercisesStatus: "doing",
    exercisesList: "Stretches and mobility work",
    otherInfo: "Needs ergonomic assessment.",
    workerAppId: "998877",
    submitted: "April 3, 2024 09:15",
    certifyTrue: "yes",
    privacyNotice: "yes"
};

let reportData = JSON.parse(JSON.stringify(originalDataset));

// Function to read values from the form and update the data model
function readFormData() {
    reportData.workerName = document.getElementById('ctrl-workerName').value;
    reportData.claimNumber = document.getElementById('ctrl-claimNumber').value;
    reportData.reportDate = document.getElementById('ctrl-reportDate').value;
    reportData.returnToWorkStatus = document.getElementById('ctrl-rtwStatus').value;
    reportData.returnToWorkDate = document.getElementById('ctrl-rtwDate').value;
    reportData.workingStatus = document.getElementById('ctrl-workingStatus').value;
    reportData.expectedReturnDate = document.getElementById('ctrl-expectedReturnDate').value;
    reportData.employerContact = document.getElementById('ctrl-employerContact').value;
    reportData.employerContactDate = document.getElementById('ctrl-employerContactDate').value;
    reportData.recoveryStatus = document.getElementById('ctrl-recoveryStatus').value;
    
    reportData.returnToWorkComments = document.getElementById('ctrl-rtwComments').value;
    reportData.returnToWorkConcerns = document.getElementById('ctrl-concerns').value;
    reportData.recoveryComments = document.getElementById('ctrl-recoveryComments').value;

    reportData.painScale = document.getElementById('ctrl-painScale').value;
    reportData.medTreatmentStatus = document.getElementById('ctrl-medTreatmentStatus').value;
    reportData.medProviderType = document.getElementById('ctrl-medProviderType').value;
    reportData.lastTreatmentDate = document.getElementById('ctrl-lastTreatmentDate').value;
    reportData.lastProviderName = document.getElementById('ctrl-lastProviderName').value;
    reportData.nextTreatmentDate = document.getElementById('ctrl-nextTreatmentDate').value;
    reportData.nextProviderName = document.getElementById('ctrl-nextProviderName').value;
    reportData.chiroFreq = document.getElementById('ctrl-chiroFreq').value;
    reportData.medicationStatus = document.getElementById('ctrl-medicationStatus').value;
    reportData.medicationName = document.getElementById('ctrl-medicationName').value;
    reportData.homeExercisesStatus = document.getElementById('ctrl-homeExercisesStatus').value;
    reportData.exercisesList = document.getElementById('ctrl-exercisesList').value;
    reportData.otherInfo = document.getElementById('ctrl-otherInfo').value;
    
    reportData.workerAppId = document.getElementById('ctrl-workerAppId').value;
    reportData.submitted = document.getElementById('ctrl-submitted').value;
    reportData.certifyTrue = document.getElementById('ctrl-certifyTrue').value;
    reportData.privacyNotice = document.getElementById('ctrl-privacyNotice').value;
}

// Function to safely set dropdowns
function setSelectValue(id, value) {
    const el = document.getElementById(id);
    if(el) el.value = value;
}

// Function to populate the HTML controls from a dataset
function updateControlsFromDataset() {
    document.getElementById('ctrl-workerName').value = reportData.workerName;
    document.getElementById('ctrl-claimNumber').value = reportData.claimNumber;
    document.getElementById('ctrl-reportDate').value = reportData.reportDate;
    setSelectValue('ctrl-rtwStatus', reportData.returnToWorkStatus);
    document.getElementById('ctrl-rtwDate').value = reportData.returnToWorkDate;
    setSelectValue('ctrl-workingStatus', reportData.workingStatus);
    document.getElementById('ctrl-expectedReturnDate').value = reportData.expectedReturnDate;
    document.getElementById('ctrl-employerContact').value = reportData.employerContact;
    document.getElementById('ctrl-employerContactDate').value = reportData.employerContactDate;
    setSelectValue('ctrl-recoveryStatus', reportData.recoveryStatus);
    
    document.getElementById('ctrl-rtwComments').value = reportData.returnToWorkComments;
    document.getElementById('ctrl-concerns').value = reportData.returnToWorkConcerns;
    document.getElementById('ctrl-recoveryComments').value = reportData.recoveryComments;

    setSelectValue('ctrl-painScale', reportData.painScale);
    setSelectValue('ctrl-medTreatmentStatus', reportData.medTreatmentStatus);
    document.getElementById('ctrl-medProviderType').value = reportData.medProviderType;
    document.getElementById('ctrl-lastTreatmentDate').value = reportData.lastTreatmentDate;
    document.getElementById('ctrl-lastProviderName').value = reportData.lastProviderName;
    document.getElementById('ctrl-nextTreatmentDate').value = reportData.nextTreatmentDate;
    document.getElementById('ctrl-nextProviderName').value = reportData.nextProviderName;
    document.getElementById('ctrl-chiroFreq').value = reportData.chiroFreq;
    setSelectValue('ctrl-medicationStatus', reportData.medicationStatus);
    document.getElementById('ctrl-medicationName').value = reportData.medicationName;
    setSelectValue('ctrl-homeExercisesStatus', reportData.homeExercisesStatus);
    document.getElementById('ctrl-exercisesList').value = reportData.exercisesList;
    document.getElementById('ctrl-otherInfo').value = reportData.otherInfo;

    document.getElementById('ctrl-workerAppId').value = reportData.workerAppId;
    document.getElementById('ctrl-submitted').value = reportData.submitted;
    setSelectValue('ctrl-certifyTrue', reportData.certifyTrue);
    setSelectValue('ctrl-privacyNotice', reportData.privacyNotice);
}

// Helper to render a read-only radio or checkbox
function renderCheck(type, name, label, isChecked, extraContent = "") {
    const checkedAttr = isChecked ? "checked" : "";
    return `
        <div class="radio-item">
            <input type="${type}" name="${name}" ${checkedAttr} disabled>
            <label>${label}</label>
            ${extraContent}
        </div>
    `;
}

// Generate the header block
function renderHeader(data) {
    return `
        <div class="header">
            <div class="header-left">
                <img src="assets/wcb-logo.png" alt="WCB Logo" class="logo-img">
                <div class="header-address">
                    <div>333 Broadway</div>
                    <div>Winnipeg, MB R3C 4W3</div>
                    <div>Phone: (204) 954-4321</div>
                    <div>Toll Free: 1-855-954-4321</div>
                    <div>wcb.mb.ca</div>
                </div>
            </div>
            <div class="header-right">
                <div class="doc-title">Worker Progress Report</div>
                <div style="margin-bottom: 8px;">
                    <span style="display: inline-block; border: 2px solid #000; padding: 4px 8px; font-weight: bold;">Claim No. ${data.claimNumber}</span>
                    <span style="display: inline-block; border: 2px solid #000; padding: 4px 6px; font-weight: bold; margin-left: 4px;">WP</span>
                </div>
                <div><span class="info-label">Report Date:</span> <span class="border-bottom">${data.reportDate || "&nbsp;"}</span></div>
            </div>
        </div>
        <div style="margin-bottom: 15px; font-size: 11pt;">
            <span style="font-weight: bold;">${data.workerName}</span> provided the following updates in relation to their claim:
        </div>
    `;
}

// Generate the footer block
function renderFooter(data, pageNum) {
    return `
        <div class="footer">
            <div>Worker App ID: ${data.workerAppId}</div>
            <div>Submitted: ${data.submitted}</div>
            <div>Page ${pageNum} of 3</div>
        </div>
    `;
}

function renderReport() {
    const data = reportData;
    
    // ==========================================
    // PAGE 1
    // ==========================================
    let p1 = `
    <section class="report-page page-1">
        <div class="content-wrapper">
            ${renderHeader(data)}

            <div class="section-title">Return to Work</div>
            <div class="bordered-section">
                <div style="font-size: 9pt; margin-bottom: 8px;">Select one:</div>
                <div class="inline-group" style="justify-content: space-between;">
                    ${renderCheck("checkbox", "rtw", "I have not missed time from work", data.returnToWorkStatus === "not-missed")}
                    ${renderCheck("checkbox", "rtw", "I have not returned to work", data.returnToWorkStatus === "not-returned")}
                    ${renderCheck("checkbox", "rtw", "I returned to work on:", data.returnToWorkStatus === "returned", `<span class="border-bottom" style="text-align:center;">${data.returnToWorkDate || "&nbsp;"}</span>`)}
                </div>
            </div>
            
            <div class="bordered-section">
                <div style="font-size: 9pt; margin-bottom: 8px;">I am working:</div>
                <div class="inline-group" style="justify-content: space-between; margin-bottom: 15px;">
                    ${renderCheck("checkbox", "ws", "Full duties, regular hours", data.workingStatus === "full-regular")}
                    ${renderCheck("checkbox", "ws", "Full duties, reduced hours", data.workingStatus === "full-reduced")}
                    ${renderCheck("checkbox", "ws", "Modified duties, regular hours", data.workingStatus === "modified-regular")}
                    ${renderCheck("checkbox", "ws", "Modified duties, reduced hours", data.workingStatus === "modified-reduced")}
                </div>
                <div class="inline-group">
                    ${renderCheck("checkbox", "ws", "Other:", data.workingStatus === "other", `<span class="border-bottom" style="flex-grow: 1;"></span>`)}
                </div>
            </div>
            
            <div class="bordered-section">
                <div style="margin-bottom: 5px;">My return to work is going:</div>
                <div style="color: #0b5ed7;">${data.returnToWorkComments || "&nbsp;"}</div>
            </div>
            
            <div class="inline-group" style="margin-top: 15px; margin-bottom: 15px;">
                <label>I expect to return to work on:</label>
                <span class="border-bottom" style="width: 200px; text-align: center;">${data.expectedReturnDate || "&nbsp;"}</span>
            </div>
            
            <div class="bordered-section">
                <div style="margin-bottom: 5px;">I have the following concerns about returning to work:</div>
                <div>${data.returnToWorkConcerns || ""}</div>
            </div>
            
            <div class="inline-group" style="margin-top: 15px; margin-bottom: 25px;">
                <label>I was most recently in contact with:</label>
                <span class="border-bottom" style="width: 250px;">${data.employerContact || "&nbsp;"}</span>
                <label>on</label>
                <span class="border-bottom" style="width: 150px;">${data.employerContactDate || "&nbsp;"}</span>
            </div>

            <div class="section-title">Recovery</div>
            <div class="bordered-section">
                <div style="font-size: 9pt; margin-bottom: 8px;">Select one:</div>
                <div class="inline-group" style="justify-content: space-between;">
                    ${renderCheck("checkbox", "rec", "I have not fully recovered from my workplace injury.", data.recoveryStatus === "not-fully-recovered")}
                    ${renderCheck("checkbox", "rec", "I have fully recovered from my workplace injury.", data.recoveryStatus === "fully-recovered")}
                </div>
            </div>
            
            <div class="bordered-section">
                <div style="margin-bottom: 5px;">I have provided the following comments about my recovery:</div>
                <div>${data.recoveryComments || ""}</div>
            </div>
        </div>
        ${renderFooter(data, 1)}
    </section>`;

    // ==========================================
    // PAGE 2
    // ==========================================
    let p2 = `
    <section class="report-page page-2">
        <div class="content-wrapper">
            <div class="inline-group" style="justify-content: space-between; margin-bottom: 15px;">
                <div style="width: 50%;">
                    I rate my current pain/discomfort on a scale of 1-10,<br>
                    where 1 is no pain and 10 is severe pain out of 10.
                </div>
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;">
                    ${renderCheck("checkbox", "pain", "1", data.painScale === "1")}
                    ${renderCheck("checkbox", "pain", "2", data.painScale === "2")}
                    ${renderCheck("checkbox", "pain", "3", data.painScale === "3")}
                    ${renderCheck("checkbox", "pain", "4", data.painScale === "4")}
                    ${renderCheck("checkbox", "pain", "5", data.painScale === "5")}
                    ${renderCheck("checkbox", "pain", "6", data.painScale === "6")}
                    ${renderCheck("checkbox", "pain", "7", data.painScale === "7")}
                    ${renderCheck("checkbox", "pain", "8", data.painScale === "8")}
                    ${renderCheck("checkbox", "pain", "9", data.painScale === "9")}
                    ${renderCheck("checkbox", "pain", "10", data.painScale === "10")}
                </div>
            </div>
            
            <div class="bordered-section" style="margin-bottom: 25px;">
                <div style="font-size: 9pt; margin-bottom: 8px;">Select one:</div>
                <div class="inline-group" style="justify-content: space-between; align-items: flex-start;">
                    ${renderCheck("checkbox", "medTreat", "I am not continuing to receive medical treatment for my workplace injury.", data.medTreatmentStatus === "not-continuing")}
                    ${renderCheck("checkbox", "medTreat", "I am continuing to receive medical treatment for my workplace injury from:", data.medTreatmentStatus === "continuing", `<div style="margin-left: 20px;"><span class="border-bottom" style="width: 250px;">${data.medProviderType || "&nbsp;"}</span><br><span style="font-size: 9pt;">(Medical Provider Type)</span></div>`)}
                </div>
            </div>
            
            <div class="inline-group" style="margin-bottom: 25px;">
                <label style="width: 200px;">My last medical treatment was</label>
                <div style="text-align: center;">
                    <span class="border-bottom" style="width: 200px;">${data.lastTreatmentDate || "&nbsp;"}</span><br>
                    <span style="font-size: 9pt;">Date</span>
                </div>
                <label>from</label>
                <div style="text-align: center;">
                    <span class="border-bottom" style="width: 200px;">${data.lastProviderName || "&nbsp;"}</span><br>
                    <span style="font-size: 9pt;">(Medical Provider Name)</span>
                </div>
            </div>
            
            <div class="inline-group" style="margin-bottom: 35px;">
                <label style="width: 200px;">My next medical treatment is</label>
                <div style="text-align: center;">
                    <span class="border-bottom" style="width: 200px;">${data.nextTreatmentDate || "&nbsp;"}</span><br>
                    <span style="font-size: 9pt;">Date</span>
                </div>
                <label>from</label>
                <div style="text-align: center;">
                    <span class="border-bottom" style="width: 200px;">${data.nextProviderName || "&nbsp;"}</span><br>
                    <span style="font-size: 9pt;">(Medical Provider Name)</span>
                </div>
            </div>
            
            <div class="inline-group" style="margin-bottom: 25px;">
                <label>I am attending a Chiropractor or Physiotherapist</label>
                <div style="text-align: center; flex-grow: 1;">
                    <span class="border-bottom" style="width: 100%;">${data.chiroFreq || "&nbsp;"}</span><br>
                    <span style="font-size: 9pt;">(Frequency)</span>
                </div>
            </div>
            
            <div class="bordered-section" style="margin-bottom: 25px; padding-bottom: 25px;">
                <div style="font-size: 9pt; margin-bottom: 8px;">Select one:</div>
                <div class="inline-group" style="justify-content: space-between; align-items: flex-start;">
                    ${renderCheck("checkbox", "medStatus", "I am not taking medication for my workplace injury.", data.medicationStatus === "not-taking")}
                    ${renderCheck("checkbox", "medStatus", "I am taking medication for my workplace injury:", data.medicationStatus === "taking", `<div style="margin-top: 35px;"><span class="border-bottom" style="width: 300px; display: block;">${data.medicationName || "&nbsp;"}</span><span style="font-size: 9pt;">(Name of prescribed medication)</span></div>`)}
                </div>
            </div>
            
            <div class="bordered-section" style="margin-bottom: 25px;">
                <div style="font-size: 9pt; margin-bottom: 8px;">Select one:</div>
                <div class="inline-group" style="justify-content: space-between;">
                    ${renderCheck("checkbox", "homeEx", "I am not doing home exercises for my workplace injury.", data.homeExercisesStatus === "not-doing")}
                    ${renderCheck("checkbox", "homeEx", "I am doing home exercises for my workplace injury.", data.homeExercisesStatus === "doing")}
                </div>
            </div>
            
            <div class="bordered-section" style="margin-bottom: 25px;">
                <div style="margin-bottom: 5px;">List the exercises you are doing:</div>
                <div>${data.exercisesList || ""}</div>
            </div>
            
            <div class="section-title">Other Information</div>
            <div class="bordered-section">
                <div style="margin-bottom: 5px;">I would like to provide the following additional information about my claim/injury:</div>
                <div style="color: #0b5ed7;">${data.otherInfo || ""}</div>
            </div>
        </div>
        ${renderFooter(data, 2)}
    </section>`;

    // ==========================================
    // PAGE 3
    // ==========================================
    let p3 = `
    <section class="report-page page-3">
        <div class="content-wrapper">
            <div style="margin-top: 20px; line-height: 1.6;">
                <div class="inline-group" style="align-items: flex-start; margin-bottom: 20px;">
                    <div style="margin-top: 2px;">${renderCheck("checkbox", "certify", "", data.certifyTrue === "yes")}</div>
                    <div style="flex: 1;">
                        I certify that the information given on this form is true, correct and complete to the best of my 
                        knowledge. I agree to notify the Workers Compensation Board of Manitoba (WCB) immediately once I 
                        return to any form of work and/or employment. I understand that it is an offence to knowingly make 
                        a false statement to the WCB. I also understand that it is an offence to withhold information from 
                        WCB which affects my entitlement to compensation (e.g., full or partial recovery from injury, ability to 
                        return to work, sources of additional income, etc.). I understand that refusing to co-operate with, or 
                        follow my treatment, may result in the WCB reducing or suspending my benefits.
                    </div>
                </div>
                
                <div class="inline-group" style="align-items: flex-start;">
                    <div style="margin-top: 2px;">${renderCheck("checkbox", "privacy", "", data.privacyNotice === "yes")}</div>
                    <div style="flex: 1;">
                        I understand that the <a href="#" style="color: #0d6efd; text-decoration: underline;">Privacy Notice</a> applies to the personal information collected in this document.
                    </div>
                </div>
            </div>
        </div>
        ${renderFooter(data, 3)}
    </section>`;

    document.getElementById('report-container').innerHTML = `<div class="report">${p1 + p2 + p3}</div>`;
}

// Bind events
document.getElementById('btn-update').addEventListener('click', () => {
    readFormData();
    renderReport();
});

document.getElementById('btn-reset').addEventListener('click', () => {
    document.getElementById('ctrl-dataset').value = 'original';
    loadDataset('original');
});

document.getElementById('ctrl-dataset').addEventListener('change', (e) => {
    loadDataset(e.target.value);
});

function loadDataset(name) {
    if (name === 'alternative') {
        reportData = JSON.parse(JSON.stringify(alternativeDataset));
    } else {
        reportData = JSON.parse(JSON.stringify(originalDataset));
    }
    updateControlsFromDataset();
    renderReport();
}

function initializeApp() {
    updateControlsFromDataset();
    renderReport();
}

// Init when DOM loads
window.onload = initializeApp;
