

const log = (str, type = "info") => {
    const topDocument = (window.opener || window).document;
    var logElement = topDocument.createElement("li");
    logElement.innerText = str;
    logElement.className=type;
    topDocument.getElementById("log").appendChild(logElement);
}

