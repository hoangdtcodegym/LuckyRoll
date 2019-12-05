import GSheetProcessor from '../packaged/g-sheets-api/src/gsheetsprocessor.js';

const demoSheetURL = 'https://docs.google.com/spreadsheets/d/1ZqtXtOM-1V1uUic27APdXTOw8SMdzI9wr4M_jmt6eDw/edit#gid=0';
const demoSheetId = '1ZqtXtOM-1V1uUic27APdXTOw8SMdzI9wr4M_jmt6eDw';
const options = {
    sheetId: '1ZqtXtOM-1V1uUic27APdXTOw8SMdzI9wr4M_jmt6eDw',
    returnAllResults: false,
}
GSheetProcessor(options, results => {
    customers = Array.from(results);
    console.log(customers);
    $().ready(function () {
        $('.start').removeAttr('disabled');
    });

});