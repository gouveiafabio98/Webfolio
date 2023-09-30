var loading = document.getElementById("loading").children[1];
var currentLoad = 0,
    loadBlock = true;

setTimeout(loadScreen, 50);

function finishLoad() {
    setTimeout(function() {
        loadBlock = false;
    }, 500);
};

window.addEventListener("load", finishLoad);

function loadScreen() {
    if (!loadBlock) {
        loading.innerHTML = "100/100";
        document.getElementById("loading").classList.add("done");
    } else if (currentLoad < 99) {
        currentLoad++;
        loading.innerHTML = currentLoad + "/100";
        setTimeout(loadScreen, 50);
    }
}