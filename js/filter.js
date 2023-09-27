const filter = document.getElementById("filter");
const filterTags = document.getElementById("filter-tags").children;

function checkFilter() {
    filter.classList.toggle("filter-"+this.id);
    initMasonry();
}

for(let i=0; i<filterTags.length; i++) {
    filterTags[i].addEventListener("click", checkFilter)
}