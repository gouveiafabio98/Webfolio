var loading = document.getElementById("loading").children[1];
var currentLoad = 0;
var loadBlock = true;

setTimeout(loadScreen, 50);

window.addEventListener("load", function() {
    setTimeout(function() {
        loadBlock = false;
    }, 500);
});

function loadScreen() {
    if (!loadBlock) {
        loading.innerHTML = "100/100";
        document.getElementById("loading").classList.add("done");
    } else if (currentLoad < 99) {
        currentLoad++;
        loading.innerHTML = currentLoad + "/100";
    } else {
        clearInterval(loadInterval); // Stop the loading animation when it's done
    }
}

// Use setInterval for smoother animation updates
var loadInterval = setInterval(loadScreen, 50);
