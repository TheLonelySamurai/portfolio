//get container
var buttonCon = document.body.getElementsByClassName('a3con1')[0];
//color list
var randomColors = ['red', 'blue', 'yellow', 'orange', 'darkGreen', 'green', 'magenta', 'gold', 'purple'] 
//save colors
var buttonColors = [];
function getRandomColor(){
    let randomColor = randomColors[Math.floor(Math.random() * randomColors.length)]
    return randomColor;
}
// initialize initial buttons
for(let i = 0; i < 10; i++){
    let button = document.createElement('button');
    let randomColor = getRandomColor()
    button.className = 'a3-button';
    button.style.backgroundColor = randomColor;
    buttonColors.push(randomColor);//save color
    buttonCon.appendChild(button);//add to container
}
var buttons = buttonCon.getElementsByTagName('button');//get button array
//the actual operation
function colorSwap(selectVal){
    // selectVal is this.val
    if (selectVal!= "Random" && selectVal != "Reset"){
        for (let i = 0; i < buttons.length; i++){
            //for r g b it is the value you would put for it
            buttons[i].style.backgroundColor = selectVal;
        }
    }
    else{
        switch(selectVal){
            case 'Random':
                //if random
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].style.backgroundColor = getRandomColor();
                }
                break
            case 'Reset': 
                //if reset
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].style.backgroundColor = buttonColors[i];
                }
                break
        }
    }
}