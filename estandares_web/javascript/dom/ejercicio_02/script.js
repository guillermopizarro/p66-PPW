let button = document.getElementById("changeBtn");
button.addEventListener("click", function() {
    alert("Button was clicked!");
});

let title = document.getElementById("title");
title.addEventListener("mouseover", function() {
    title.style.color = "red";
});
title.addEventListener("mouseout", function() {
    title.style.color = "black";
});
title.addEventListener("click", function() {
    title.style.color = "blue";
});
title.addEventListener("mousemove", function() {
    //title.style.color = "white";
});

document.addEventListener("keydown", function(event) {
    console.log("Key Pressed:", event.key);
});