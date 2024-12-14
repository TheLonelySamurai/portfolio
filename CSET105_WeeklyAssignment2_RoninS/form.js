var names = []
var answers = {
  'Question 1': 'D',
  'Question 2': 'A',
  'Question 3': 'C',
  'Question 4': 'B'
}
function checkAnswers(){
   let inputs = document.body.getElementsByTagName('input');
   for (let input of inputs){
        if (input.type != 'radio'){
            continue
        }
        if (names.includes(input.name)==false){
            names.push(input.name);
        }
   }
   let score = 0;
   for(let name of names){
    // If any question is unanswered
    if(!checkIfChecked(name)){
      alert("Please answer all questions! Unanswered: "+ name)
      return
    }
   }
   for(let name of names){
    for (let input of inputs){
      if (input.name == name){
        if (input.checked){
          if(answers[name] == input.value){
            score ++;
          }
        }
      }
    }
   }
   let con = document.getElementsByClassName('a5con2')[0];
   let scoretext = document.createElement('h1');
   scoretext.className = 'score';
   scoretext.innerHTML = score + '/' + names.length;
   con.appendChild(scoretext);
   let button = document.getElementById('endButton');
   button.innerHTML = 'Reload & Retry?'
   button.onclick = function(){location.reload()};
function checkIfChecked(name){
  let inputs = document.body.getElementsByTagName('input'); 
  for (let input of inputs){
    if (input.name == name){
      if(input.checked){
        return true;
      }
    }
  }
  return false;
}
function scrollDown(){
  let windo = document.getElementsByClassName('a5-container')[0];
  windo.scrollBy({
    top: 300,
    left: 0,
    behavior: 'smooth'
  })
}