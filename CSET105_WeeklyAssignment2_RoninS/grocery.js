
var list = []
var log = document.getElementsByClassName('a4con3')[0]


function UpdateList(){
    let container = document.getElementsByClassName('a4con2')[0];
    container.innerHTML = '';
    for (let i = 0; i < list.length; i++){
        if (list[i] == ''){
            continue
        }
        let item = document.createElement('p');
        item.innerHTML = `${i+1}. `+ list[i];
        item.value = item.innerHTML;
        item.className = 'a4li';
        item.onclick = function(){strikethrough(this)};
        container.appendChild(item);
    }
    
}
function AddToList(){
    let item = window.prompt("What would you like to add to the list?");
    log.innerHTML = "Added " + item + ' to the list!';
    list.push(item);
    UpdateList();
}
function ModifyList(){
    let index = window.prompt('Which number list item would you like to change?');
    let text = window.prompt('What do you want on this spot of the list instead?');
    list[index-1] = text;
    log.innerHTML = 'Changing list item number ' + index + ' to ' + text + '!'
    UpdateList();
}
function strikethrough(thi){
    let value = thi.innerHTML;
    if (thi.value != value){
        thi.innerHTML = thi.value;
        log.innerHTML = 'Undoing the cross off';
    }
    else{
        thi.value = value;
        thi.innerHTML = "<s>" + value + '</s>';
        log.innerHTML = 'Crossing off ' + value + ' from the list!'
    }
}
var sort = 0;
function SortList(){
    sort ++;
    let items = document.getElementsByClassName('a4li');
    switch(sort){
        case 0:
            //display all
            for (let item of items){
                item.style.display = 'block';
            }
            break
        case 1:
            //display only unpurchased
            for (let item of items){
                if (item.innerHTML != item.value){
                    item.style.display = 'none';
                }
                else{
                    item.style.display = 'block';
                }
            }
            break
        case 2:
            //display only purchased
            
            for (let item of items){
                if(item.innerHTML == item.value){
                    item.style.display = 'none';
                }
                else{
                    item.style.display = 'block'; 
                }
            }
            sort = -1;
            break
    }
}