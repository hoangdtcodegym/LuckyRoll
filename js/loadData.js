import GSheetProcessor from '../packaged/g-sheets-api/src/gsheetsprocessor.js';

// const demoSheetURL = 'https://docs.google.com/spreadsheets/d/1ZqtXtOM-1V1uUic27APdXTOw8SMdzI9wr4M_jmt6eDw/edit#gid=0';
const demoSheetURL = 'https://docs.google.com/spreadsheets/d/1BVGV8PplOI6VpCE1kw3HBJ_uSzhOulz26jTgIeiNIoM/edit?usp=sharing';
const demoSheetId = '1BVGV8PplOI6VpCE1kw3HBJ_uSzhOulz26jTgIeiNIoM';
const options = {
    sheetId: '1BVGV8PplOI6VpCE1kw3HBJ_uSzhOulz26jTgIeiNIoM',
    returnAllResults: false,
}
GSheetProcessor(options, results => {
    customers = Array.from(results);
    $().ready(function () {
        $('.start').removeAttr('disabled');
    });

});
