let title = document.getElementById('title');
console.log(title.innerHTML);

let items = document.getElementsByClassName("item");
console.log(items[0].innerText);

for (let i of items) {
    console.log(i.innerText)
}

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].innerText);

let firstItem = document.querySelector(".item");
console.log(firstItem.innerText);

let allItems = document.querySelectorAll(".item");
allItems.forEach(item => console.log(item.innerText));

function change_title() {
    let title = document.getElementById("title");
    title.innerText = "DOM Manipulation Updated!"; 
}

function change_css() {
    let title3 = document.getElementById("title")
    title3.style.color = "blue"
    title3.style.fontSize = "24px"
}

let list = document.getElementById("list");
list.innerHTML += "<li class='item'>Item 4</li>"; // Adds a new list item

