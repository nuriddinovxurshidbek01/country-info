// Function to elements
function $(select) {
    return document.querySelector(select);
}

function $$(atribut) {
    return document.querySelectorAll(atribut)
}

// Function createElements
function createElement(tagName, className, content) {
    let element = document.createElement(tagName);
    if (className)
        element.setAttribute("class", className);
    if (content)
        element.innerHTML = content;

    return element;
}