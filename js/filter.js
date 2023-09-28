let projectsFilter = document.getElementById("filter");
projectsFilter.items = projectsFilter.querySelectorAll(".grid-item");

/* FILTER TAGS*/
let filterTags = document.querySelectorAll("#filter-tags > .tag");
for (let i = 0; i < filterTags.length; i++) {
    filterTags[i].check = filterTags[i].querySelector("input");
    filterTags[i].text = filterTags[i].querySelector("span");
}
let allTag = document.getElementById("all");
allTag.check = allTag.querySelector("input");
allTag.text = allTag.querySelector("span");

function toggleFilter(e, stat) {
    e.check.checked = stat;
    setFilterAmount(e);
    setFilterState(e, stat);
    if(e == allTag) {
        setAllFilterState(stat);
    } else {
        checkFilterAll();
    }

    initMasonry();
}

function setAllFilterState(stat) {
    for (let i = 0; i < filterTags.length; i++) {
        toggleFilter(filterTags[i], stat);
    }
}

function checkFilterAll() {
    for (let i = 0; i < filterTags.length; i++) {
        if(!filterTags[i].check.checked) {
            allTag.check.checked = false;
            setFilterAmount(allTag);
            setFilterState(allTag, false);
            return;
        }
    }
    
    allTag.check.checked = true;
    setFilterAmount(allTag);
    setFilterState(allTag, true);
}

function setFilterAmount(e) {
    if (e.check.checked) {
        if (e === allTag) {
            allTag.amount = projectsFilter.items.length;
        } else {
            e.amount = projectsFilter.querySelectorAll(".grid-item." + e.id).length;
        }
        e.text.innerText = "(" + e.amount + ")";
    } else {
        e.text.innerText = "";
    }
}

function setFilterState(e, stat) {
    if (stat) {
        projectsFilter.classList.add("filter-" + e.id);
    } else {
        projectsFilter.classList.remove("filter-" + e.id);
    }
}


/* ------------------- */

for (let i = 0; i < filterTags.length; i++) {
    filterTags[i].addEventListener("click", function () {
        toggleFilter(this, !this.check.checked);
    });
}

allTag.addEventListener("click", function () {
    toggleFilter(this, !this.check.checked);
});

/* ------------------- */

toggleFilter(allTag, true);