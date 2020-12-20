

function updateMetaData(data) {
    var PANEL = document.getElementById("sample-metadata");
    PANEL.innterHTML = '';
    for(var key in data) {
        h6tag = document.createElement("h6");
        h6Text = document.createTextNode(`${key}: ${data[key]}`);
        h6tag.append(h6tag);
        PANEL.appendChild(h6tag);
    }
}