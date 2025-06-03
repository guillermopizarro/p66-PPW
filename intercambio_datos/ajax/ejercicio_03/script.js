function cargar_datos() {
    const xhttp = new XMLHttpRequest()

    xhttp.open('GET', 'cd_catalog.xml', true)
    xhttp.onreadystatechange = function() {
        if (xhttp && xhttp.readyState == 4 && xhttp.status == 200) {
            cargar_xml(xhttp.responseXML)
        }
    }
    xhttp.send()
}

function cargar_xml(xmlDoc) {
  var i;
  var table="<tr><th>Title</th><th>Artist</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}