function checkFast() {
    let isFastCheapChecked = document.getElementById('fast').checked && document.getElementById('cheap').checked;
    let isFastGoodChecked = document.getElementById('fast').checked && document.getElementById('good').checked;
    if (isFastCheapChecked) {
        document.getElementById('good').checked = false;
        alert("Fast Cheap so not Good");
    } else if (isFastGoodChecked) {
        document.getElementById('cheap').checked = false;
        alert("Fast Good so not Cheap");
    }
}
function checkGood() {
    let isGoodFastChecked = document.getElementById('good').checked && document.getElementById('fast').checked;
    let isGoodCheapChecked = document.getElementById('good').checked && document.getElementById('cheap').checked;
    if (isGoodFastChecked) {
        document.getElementById('cheap').checked = false;
        alert("Good Fast so not Cheap");
    } else if (isGoodCheapChecked) {
        document.getElementById('fast').checked = false;
        alert("Good Cheap so not Fast");
    }
}
function checkCheap() {
    let isCheapGoodChecked = document.getElementById('cheap').checked && document.getElementById('good').checked;
    let isCheapFastChecked = document.getElementById('cheap').checked && document.getElementById('fast').checked;
    if (isCheapGoodChecked) {
        document.getElementById('fast').checked = false;
        alert("Cheap Good so not Fast");
    } else if (isCheapFastChecked) {
        document.getElementById('good').checked = false;
        alert("Cheap Fast so not Good");
    }
}