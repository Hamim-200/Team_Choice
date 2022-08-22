function getInputValueById(input) {
    const element = document.getElementById(input);
    const elementValue = parseFloat(element.value);
    return elementValue;
}

function getElementById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = parseFloat(element.innerText);
    return elementText;
}

function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    const elementTextValue = parseFloat(element.innerText);
    element.innerText = value;
}