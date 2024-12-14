function MultiTable1() {
    let x = Number(window.prompt("The multiplication table of: ")),
    a = Number(window.prompt("From:  ")),
    b = Number(window.prompt("To:  "));
    
    let container = document.getElementsByClassName('a1con1')[0];
    let left = document.getElementsByClassName('a1con1-left')[0];
    let right = document.getElementsByClassName('a1con1-right')[0];
    right.innerHTML = '';
    left.innerHTML = "The multiplication table of:  " + x;
    if (!isNaN(x) && !isNaN(a) && !isNaN(b)) {
        for (i = a; i <= b; i++) {
        right.innerHTML += '<p>' +`${x} * ${i} = ${x * i}` + '</p>'
        }
    } else {
        alert("Please input numbers!");
        MultiTable1();
    }
}