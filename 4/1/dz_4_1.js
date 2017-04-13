var td = document.getElementsByTagName("tr");

td[1].innerHTML += "<td>" + window.screen.width + "</td>";      //1
td[2].innerHTML += "<td>" + window.screen.height + "</td>";     //2
td[3].innerHTML += "<td>" + window.screen.availWidth + "</td>";     //3
td[4].innerHTML += "<td>" + window.screen.availHeight + "</td>";     //4
td[5].innerHTML += "<td>" + window.screen.colorDepth + "</td>";     //5
td[6].innerHTML += "<td>" + window.innerHeight + "</td>";     //6
td[7].innerHTML += "<td>" + window.innerWidth + "</td>";     //7
td[8].innerHTML += "<td>" + window.location + "</td>";     //11
td[9].innerHTML += "<td>" + window.navigator.appCodeName + "</td>"; //12
td[10].innerHTML += "<td>" + window.navigator.appName + "</td>";     //13
td[11].innerHTML += "<td>" + window.navigator.cookieEnabled + "</td>";     //14
td[12].innerHTML += "<td>" + window.navigator.onLine + "</td>";     //15
td[13].innerHTML += "<td>" + window.navigator.userAgent + "</td>";     //16

