// For initializing the select input field
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, "");
});

// Initialize values of all the languages in local storage
if(window.localStorage.length == 0) {
    window.localStorage.setItem("1", "0");
    window.localStorage.setItem("2", "0");
    window.localStorage.setItem("3", "0");
    window.localStorage.setItem("4", "0");
}
else {
    if(window.localStorage.getItem("1") !== "0")
        document.querySelector(".collection-item:nth-child(1) span").innerHTML = window.localStorage.getItem("1");
    if(window.localStorage.getItem("2") !== "0")
        document.querySelector(".collection-item:nth-child(2) span").innerHTML = window.localStorage.getItem("2");
    if(window.localStorage.getItem("3") !== "0")
        document.querySelector(".collection-item:nth-child(3) span").innerHTML = window.localStorage.getItem("3");
    if(window.localStorage.getItem("4") !== "0")
        document.querySelector(".collection-item:nth-child(4) span").innerHTML = window.localStorage.getItem("4");
}

// When form is submitted
document.querySelector("form").addEventListener("submit", (object) => {
    object.preventDefault();

    if(document.querySelector("select").value > 0)
        updateBadges(document.querySelector("select").value);
    
    // Reset all input fields to default values
    document.querySelector("form").reset();
})

// Function which updaes the badges in the collection element
function updateBadges(language) {
    value = Number(window.localStorage.getItem(language));
    value++;
    window.localStorage.setItem(`${language}`, String(value));

    const span_element = document.querySelector(`.collection-item:nth-child(${language}) span`);
    if(!span_element.classList.contains("new"))  span_element.classList.add("new");
    span_element.innerHTML = value;
}

// If any of the collection items are clicked, remove the new class from that item if present
document.querySelectorAll(".collection-item").forEach((object) => {
    object.addEventListener("click", () => {
        if(object.childNodes[0].classList.contains("new"))
            object.childNodes[0].classList.remove("new");
    });
});