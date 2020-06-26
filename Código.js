
const idData = "1ieo8TMXf47Z5fsqPPQOqbSwCRSllyYgeGHumC8-vrtc"
const dados = SpreadsheetApp.openById(idData);
const ss = dados.getSheetByName("Data");


function getDataAsJson () {
  let dados =[];
  let valor = {};

    const data = ss.getRange(2, 1, ss.getLastRow()-1, 6).getDisplayValues();
    data.map( (e) =>  valor[e[0]] = e[5]) ;
    let periodo = {periodo:valor.Periodo, publicado:new Date().toDateString()};
    dados.push ({periodo: periodo, valor:valor}); 

    return dados;    
  }


function doGet() {
  let dataAsJson = getDataAsJson ();
  const response = dataAsJson;
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
  
}


function doPost(e) {
  const body = e.postData.contents;
  const bodyJSON = JSON.parse(body);
  
  const idData = "1ieo8TMXf47Z5fsqPPQOqbSwCRSllyYgeGHumC8-vrtc"
  const dados = SpreadsheetApp.openById(idData);
  const ws = dados.getSheetByName("json");
  ws.appendRow([bodyJSON.name]);
  
}