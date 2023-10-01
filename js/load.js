var loading = document.getElementById("loading").children[1];
var currentLoad = 0;

setTimeout(loadScreen, 50);

window.addEventListener("load", function() {
    clearInterval(loadInterval);
    loading.innerHTML = "100/100";
    document.getElementById("loading").classList.add("done");
});

function loadScreen() {
    if (currentLoad < 99) {
        currentLoad++;
        loading.innerHTML = currentLoad + "/100";
    }
}

var loadInterval = setInterval(loadScreen, 50);
