

function getSquareOfTheWall(obj) {

    return `${(obj.height1 * obj.width1) + (obj.height2 * obj.width2) + (obj.height3 * obj.width3) + (obj.height4 * obj.width4) - (obj.doorH * obj.doorW) - (obj.windowH * obj.windowW)} sq.m`;

}
function renderResult() {
    const obj = {
        height1: document.getElementById('h1').value,
        width1: document.getElementById('w1').value,
        height2: document.getElementById('h2').value,
        width2: document.getElementById('w2').value,
        height3: document.getElementById('h3').value,
        width3: document.getElementById('w3').value,
        height4: document.getElementById('h4').value,
        width4: document.getElementById('w4').value,
        doorH: document.getElementById('door-h').value,
        doorW: document.getElementById('door-w').value,
        windowH: document.getElementById('win-h').value,
        windowW: document.getElementById('win-w').value
    }

    document.getElementById('res1').innerHTML = getSquareOfTheWall(obj);
}

