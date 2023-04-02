//Variables
var userInput1 = document.getElementById("text1");
var userInput2 = document.getElementById("text2");
var userInput3 = document.getElementById("text3");
var userInput4 = document.getElementById("text4");
var userInput5 = document.getElementById("text5");
var userInput6 = document.getElementById("text6");
var userInput7 = document.getElementById("text7");

var listItems1 = document.getElementsByClassName("listItems1");
var listItems2 = document.getElementsByClassName("listItems2");
var listItems3 = document.getElementsByClassName("listItems3");
var listItems4 = document.getElementsByClassName("listItems4");
var listItems5 = document.getElementsByClassName("listItems5");
var listItems6 = document.getElementsByClassName("listItems6");
var listItems7 = document.getElementsByClassName("listItems7");

var i = 0;


function myfunc() {
    localStorage.setItem
    alert("Saved");
  }

function saveTask(x, uin) {
    
    switch (uin){
        case 1:
            var createdLi = document.createElement("li");
            createdLi.innerHTML = x;
            document.getElementById("listItems1").appendChild(createdLi);
            
            createdLi.className = "listClass";
            createdLi.setAttribute("id" ,"listItem" + i);
            break;
        case 2:
            var createdLi = document.createElement("li");
            createdLi.innerHTML = x;
            document.getElementById("listItems2").appendChild(createdLi);
            
            createdLi.className = "listClass";
            createdLi.setAttribute("id" ,"listItem" + i);  
            break;
        case 3:
            var createdLi = document.createElement("li");
            createdLi.innerHTML = x;
            document.getElementById("listItems3").appendChild(createdLi);
            
            createdLi.className = "listClass";
            createdLi.setAttribute("id" ,"listItem" + i);  
            break;
        case 4:
            var createdLi = document.createElement("li");
            createdLi.innerHTML = x;
            document.getElementById("listItems4").appendChild(createdLi);
            
            createdLi.className = "listClass";
            createdLi.setAttribute("id" ,"listItem" + i);  
            break;
        case 5:
            var createdLi = document.createElement("li");
            createdLi.innerHTML = x;
            document.getElementById("listItems5").appendChild(createdLi);
            
            createdLi.className = "listClass";
            createdLi.setAttribute("id" ,"listItem" + i);  
            break;
        case 6:
            var createdLi = document.createElement("li");
            createdLi.innerHTML = x;
            document.getElementById("listItems6").appendChild(createdLi);
            
            createdLi.className = "listClass";
            createdLi.setAttribute("id" ,"listItem" + i);  
            break;
        case 7:
            var createdLi = document.createElement("li");
            createdLi.innerHTML = x;
            document.getElementById("listItems7").appendChild(createdLi);
            
            createdLi.className = "listClass";
            createdLi.setAttribute("id" ,"listItem" + i);  
            break;
    }
}

function check(event) {
    //var x = document.getElementById("text1").value
    var x1 = userInput1.value
    var x2 = userInput2.value
    var x3 = userInput3.value
    var x4 = userInput4.value
    var x5 = userInput5.value
    var x6 = userInput6.value
    var x7 = userInput7.value

    if (event.key == "Enter" && x1 != "")  
    {
      var uin = 1;
      event.preventDefault();
      i++
      saveTask(x1, uin)
      userInput1.value = "";
    }
    if (event.key == "Enter" && x2 != "")  
    {
      var uin = 2;
      event.preventDefault();
      i++
      saveTask(x2, uin)
      userInput2.value = "";
    }
    if (event.key == "Enter" && x3 != "")  
    {
      var uin = 3;
      event.preventDefault();
      i++
      saveTask(x3, uin)
      userInput3.value = "";
    }
    if (event.key == "Enter" && x4 != "")  
    {
      var uin = 4;
      event.preventDefault();
      i++
      saveTask(x4, uin)
      userInput4.value = "";
    }
    if (event.key == "Enter" && x5 != "")  
    {
      var uin = 5;
      event.preventDefault();
      i++
      saveTask(x5, uin)
      userInput5.value = "";
    }
    if (event.key == "Enter" && x6 != "")  
    {
      var uin = 6;
      event.preventDefault();
      i++
      saveTask(x6, uin)
      userInput6.value = "";
    }
    if (event.key == "Enter" && x7 != "")  
    {
      var uin = 7;
      event.preventDefault();
      i++
      saveTask(x7, uin)
      userInput7.value = "";
    }
}

const listClicked = (e) => {
    var  listID = (e.target.id);
    var  listIDdel = (e.target);
    console.log(listID);
    if (listIDdel.nodeName == "LI"){
        listIDdel.remove();  
    }
}

userInput1.addEventListener("keypress", function() {check(event)});
userInput2.addEventListener("keypress", function() {check(event)});
userInput3.addEventListener("keypress", function() {check(event)});
userInput4.addEventListener("keypress", function() {check(event)});
userInput5.addEventListener("keypress", function() {check(event)});
userInput6.addEventListener("keypress", function() {check(event)});
userInput7.addEventListener("keypress", function() {check(event)});

for (let listItem1 of listItems1) {
    listItem1.addEventListener("click", listClicked);
    //if (listItem.innerHTML == "") {   
    //}   
}
for (let listItem2 of listItems2) {
    listItem2.addEventListener("click", listClicked);
}
for (let listItem3 of listItems3) {
    listItem3.addEventListener("click", listClicked);
}
for (let listItem4 of listItems4) {
    listItem4.addEventListener("click", listClicked);
}
for (let listItem5 of listItems5) {
    listItem5.addEventListener("click", listClicked);
}
for (let listItem6 of listItems6) {
    listItem6.addEventListener("click", listClicked);
}
for (let listItem7 of listItems7) {
    listItem7.addEventListener("click", listClicked);
}



/*
const para = document.createElement("li");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);

*/