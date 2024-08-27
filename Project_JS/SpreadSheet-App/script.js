const spreadSheetContainer = document.querySelector('#spreadsheet-container');
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const exportBtn = document.querySelector('#export-btn');

class Cell{
    constructor( isHeader, disabled, data, column, row, rowName, columName, active) {
        this.isHeader = isHeader;
        this.disabled = disabled;
        this.data = data;
        this.column = column;
        this.columName = columName;
        this.row = row;
        this.rowName = rowName;
        this.active = active;
    }
}


initSpreadsheet();

function initSpreadsheet(){

    for(let i=0; i<ROWS; i++){
        let spreadsheetRow = [];
        for(let j=0; j<COLS; j++){
            let cellData = "";
            let isHeader = false;
            let disabled = false;

            if (j === 0){
                cellData = i;
                isHeader= true;
                disabled = true;
            }

            if (i === 0){
                isHeader= true;
                disabled = true;
                cellData = alphabets[j-1];

            }

            if (!cellData){
                cellData = "";
            }

            const rowName = i;
            const columName = alphabets[j-1];

            const cell = new Cell(isHeader, disabled, cellData, i,j, rowName, columName, false)
            spreadsheetRow.push(cell);
        }
        spreadsheet.push(spreadsheetRow);
    }
    drawSheet();
    console.log(spreadsheet);
}

// create cell element function
function createCellEl(cell){
    const cellEl = document.createElement("input");
    cellEl.className = "cell";
    cellEl.id = "cell_" + cell.row + cell.column;
    cellEl.value = cell.data;
    cellEl.disabled = cell.disabled;

    if(cell.isHeader){
        cellEl.classList.add("header");
    }

    cellEl.onclick = () => handleCellClick(cell);
    cellEl.onchange = (e) => handleCellChange(e.target.value, cell);
    return cellEl
}

function handleCellChange(data, cell){
    cell.data = data;
}

exportBtn.onclick =  (e) => {
    let csv = "";
    for (let i = 0; i < spreadsheet.length; i++) {
        if (i === 0 ) continue;
        csv += spreadsheet[i].filter((item)=> !item.isHeader)
            .map((item)=> item.data)
            .join(",") + "\r\n";
    }
    ///console.log(csv);

    const csvObj = new Blob([csv]);
    const csvURL = URL.createObjectURL(csvObj);
    console.log("csv", csvURL);
    const a = document.createElement("a");
    a.href = csvURL;
    a.download = "spreadsheet file name.csv";
    a.click();
}

function handleCellClick(cell){
    clearHeaderActiveStates();
    const columnHeader = spreadsheet[cell.column][0];
    const rowHeader = spreadsheet[0][cell.row];
    // console.log('clicked cell', cell);
    // console.log("column Header", columnHeader);
    // console.log("row Header", rowHeader);

    const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
    const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);

    columnHeaderEl.classList.add("active");
    rowHeaderEl.classList.add("active");

    document.querySelector("#cell-status").innerHTML = cell.columName+""+cell.rowName;
}
function clearHeaderActiveStates(){
    const headers = document.querySelectorAll(".header");
    headers.forEach(header => {
        header.classList.remove("active");
    });
}

function getElFromRowCol(row, col){
    return document.querySelector("#cell_" + row + col);
}

// draw Sheet function
function drawSheet(){
    for (let i=0; i<spreadsheet.length; i++){
        const rowContainerEl = document.createElement("div");
        rowContainerEl.className = "cell-row";
        for(let j=0; j<spreadsheet[i].length; j++){
            const cell = spreadsheet[i][j];
            rowContainerEl.append(createCellEl(cell));
        }
        spreadSheetContainer.append(rowContainerEl);
    }
}