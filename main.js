let sum = 0;

function addCaloriesHamburger(){
    sum += 520;
    let list = document.getElementById('list');
    let li = document.createElement('li');
    let s = 520;
    let asd = "Hamburger (<i>" + s.toString()  + "</i>)";
    li.innerHTML = asd.toString();
    let button = document.createElement('button');
    button.textContent = "X";
    button.addEventListener('click', remove);
    function remove(){
        sum -= 520;
        writeSum();
        li.remove();
    }
    li.appendChild(button);
    list.appendChild(li);
    writeSum();
}

function addCaloriesHotdog(){
    sum += 150;
    let list = document.getElementById('list');
    let li = document.createElement('li');
    let s = 150;
    let asd = "Hot-Dog (<i>" + s.toString()  + "</i>)";
    li.innerHTML = asd.toString();
    let button = document.createElement('button');
    button.textContent = "X";
    button.addEventListener('click', remove);
    function remove(){
        sum -= 150;
        writeSum();
        li.remove();
    }
    li.appendChild(button);
    list.appendChild(li);
    writeSum();
}

function addCaloriesCola(){
    sum += 139;
    let list = document.getElementById('list');
    let li = document.createElement('li');
    let s = 139;
    let asd = "Cola (<i>" + s.toString()  + "</i>)";
    li.innerHTML = asd.toString();
    let button = document.createElement('button');
    button.textContent = "X";
    button.addEventListener('click', remove);
    function remove(){
        sum -= 139;
        writeSum();
        li.remove();
    }
    li.appendChild(button);
    list.appendChild(li);
    writeSum();
}

function writeSum(){
    document.getElementById('output').innerHTML = "Összes kalória bevitel: " + sum.toString();
}

function reset(){
    let list = document.getElementById('list');
    list.textContent = "";
    sum = 0;
    writeSum();
}

function init(){
    document.getElementById('hamburger').addEventListener('click', addCaloriesHamburger);
    document.getElementById('hotdog').addEventListener('click', addCaloriesHotdog);
    document.getElementById('cola').addEventListener('click', addCaloriesCola);
    document.getElementById('reset').addEventListener('click', reset);
    writeSum();
}

document.addEventListener('DOMContentLoaded', init);