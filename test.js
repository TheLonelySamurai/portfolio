// let skills = document.body.getElementsByClassName("skill");
// for (let i = 0; i < skills.length; i++){
//     console.log(skills[i].innerHTML);
//     skills[i].innerHTML += '!';
//     console.log(skills[i].innerHTML);
// }
// let count = 0;
// function createH1(){
//     let h1 = document.createElement("h1");
//     h1.innerHTML = 'BREATH OF THE WILD <br>' + ++count;
//     h1.style.color = 'white';
//     h1.style.opacity='0.5';
//     let backImg = document.getElementsByClassName('background-image')[0];
//     backImg.appendChild(h1); 
// }
function previewSite(){
    var userName = window.prompt('What is your name?');
    var biostart = "My name is " + userName + ', and I';
    document.body.getElementsByTagName('h2')[0].innerHTML = userName;
    document.body.getElementsByClassName('intro')[0].getElementsByTagName('h1')[0].innerHTML = "This is " + userName;
    document.body.getElementsByClassName('center-title')[0].getElementsByTagName('p')[0].innerText = biostart + window.prompt('Write a short bio for yourself following the start of: ' + biostart);
    document.body.getElementsByClassName('left-content')[0].getElementsByTagName('p')[0].innerText = window.prompt("What would you like to put in the 'Get to Know Me' section?");
    var response = 'Y';
    var skillset = document.body.getElementsByClassName('skillset')[0];
    skillset.innerHTML = '';
    while (response != 'N'){
        if (response != 'Y'){
            response = window.prompt('Do you have more skills to add? (Y or N only!)')
            continue
        }
        let newH4 = document.createElement('h4');
        newH4.className = 'skill';
        newH4.innerText = window.prompt("Name a skill that you would list on your resume(keep it short).")
        skillset.appendChild(newH4);
        response = window.prompt('Do you have more skills to add? (Y or N only!)')
    }
}
