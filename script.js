

function getSquareOfTheWall(height1, width1, height2, width2, height3, width3, height4, width4, doorH, doorW, windowH, windowW) {

    return `${(height1 * width1) + (height2 * width2) + (height3 * width3) + (height4 * width4) - (doorH * doorW) - (windowH * windowW)} sq.m`;

}
function renderResult() {
    let height1 = document.getElementById('h1').value;
    let width1 = document.getElementById('w1').value;
    let height2 = document.getElementById('h2').value;
    let width2 = document.getElementById('w2').value;
    let height3 = document.getElementById('h3').value;
    let width3 = document.getElementById('w3').value;
    let height4 = document.getElementById('h4').value;
    let width4 = document.getElementById('w4').value;
    let doorH = document.getElementById('door-h').value;
    let doorW = document.getElementById('door-w').value;
    let windowH = document.getElementById('win-h').value;
    let windowW = document.getElementById('win-w').value;
    document.getElementById('res1').innerHTML = getSquareOfTheWall(
        height1, width1, height2, width2, height3, width3, height4, width4, doorH, doorW, windowH, windowW
    )
}

