# WCB Report Generator

## Project Purpose
This project is an internship technical-round submission. It demonstrates the ability to convert official fixed-format documents into dynamic, web-based applications using vanilla web technologies.

The application generates professional, print-ready reports that strictly adhere to the visual formatting of official Worker's Compensation Board (WCB) documents. It includes a custom-built, dynamic control panel that manages state and precisely renders output data without resorting to heavy external frameworks.

## How to Run the Project
1. Open `index.html` in any modern web browser.
2. From the landing page, select **Open Exercise** for either Exercise 1 or Exercise 2.
3. Use the Control Panel on the left to input data, add/remove rows, or select pre-configured datasets.
4. Click **Update Report** to instantly render the changes into the official document preview on the right.
5. To generate the final PDF, use your browser's Print function (`Ctrl + P` or `Cmd + P`). The CSS is configured to hide the control panels and format the output as a perfect, paginated US Letter document.

## Exercise 1: Worker Progress Report
A multi-page application that accurately recreates all 3 pages of the official Worker Progress Report.
- Features dynamic text binding, real-time date propagation, and conditional radio selections.
- Uses strict CSS Grid alignment and responsive layouts for a clean control panel.

## Exercise 2: Medical & Travel Expense Request
A multi-page application that recreates a complex 2-page expense request document.
- Features 6 independent, dynamic tables (Prescription Drugs, OTC Drugs, Medical Supplies, Parking, Mileage, Bus/Taxi).
- Allows users to add and remove rows dynamically.
- Auto-calculates monetary and mileage totals on the fly.
- Includes a stress-test "Large Dataset" demonstrating seamless native print pagination across 10-row tables.

## Assumptions & Limitations
- **Page Constraints**: Exercise 1 perfectly recreates the original 3-page document logic using explicit 11-inch page containers. Exercise 2 naturally generates 2 pages for standard data, but gracefully overflows into additional pages during PDF generation if 10+ rows are added, relying on native browser `@media print` rules.
- **Vanilla Implementation**: No front-end frameworks (React, Vue, Tailwind) were used, ensuring lightweight, raw DOM manipulation and CSS adherence.

## Technologies Used
- HTML5 (Semantic Structure)
- CSS3 (Flexbox, Grid, Print Media Queries)
- Vanilla JavaScript (State Management, DOM Manipulation)

## AI Assistance Disclosure
This project was developed with AI assistance for rapid prototyping, robust CSS Grid alignment, dynamic DOM generation logic, and state management. The AI prompt history is strictly logged in the repository.

## Video Demonstrations
- [Video 1: Requirements, Assumptions, & Usage](#) *(Placeholder link)*
- [Video 2: Code Structure, Challenges, & AI Usage](#) *(Placeholder link)*

## Repository Structure
```
wcb-report-generator/
├── index.html                   # Landing page
├── style.css                    # Landing page styling
├── README.md                    # Project documentation
├── AI_PROMPT_HISTORY.md         # Log of AI prompts used
├── exercise-1-worker-progress/  # Ex 1 Source Code
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/                  # Shared WCB Logo
└── exercise-2-medical-expense/  # Ex 2 Source Code
    ├── index.html
    ├── style.css
    └── script.js
```
