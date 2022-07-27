function changeElement(number) {
    const showEventChange = document.getElementById("showEventChange");
    showEventChange.innerHTML = '';
    var objTitle = ['Map', 'Set', 'Object', 'Array'];
    showEventChange.innerHTML = `
        <h4>Please enter the name ${objTitle[number]}<h4>
        <label for="">Name:
        <input id="name" type="text" class="${objTitle[number]}">
        <button onclick="create()">Create</button>
    `;
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}