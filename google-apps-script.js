var SHEET_ID = '1cCntrtEZ8EQA2qwA4Y0CMPoYrZTC6V1WBVobezAG6YA';
var SHEET_NAME = 'Sheet1';

function doPost(e) {
  var workbook = SpreadsheetApp.openById(SHEET_ID);
  var sheet = workbook.getSheetByName(SHEET_NAME) || workbook.getSheets()[0];
  var data = e.parameter || {};

  sheet.appendRow([
    new Date(),
    data.firstName || '',
    data.email || '',
    data.phone || '',
    data.source || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
