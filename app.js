let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
document.querySelector('body').style.backgroundColor = change();
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('button is', buttonText)
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        } else if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

function change() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var a = Math.floor(Math.random() * 10)
    var mycolor = "rgba(" + r + "," + g + "," + b + "," + a + ")";

    return mycolor;

}