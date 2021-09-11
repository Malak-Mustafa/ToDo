var theInput = document.querySelector(".addTask input");
var theAddButton = document.querySelector(".addTask .addBtn");

window.onload = function () {
  // ما حد بحط بداية اسم المتغيير the
    theInput.focus();
};

theAddButton.onclick = function () {

    if (theInput.value === '') {
     alert("please add your task");
    }
    else{
      addElement();
    }
    
  }
  function addElement(){
      if (document.body.contains(document.getElementById("willRemove"))) {
          var removeLi=document.getElementById("willRemove");
          removeLi.remove();
      }
        var div = document.createElement("div");

        var P=document.createElement("p");
         P.innerText=theInput.value;
         div.appendChild(P);
        //var t = document.createTextNode(theInput.value);
        //li.appendChild();

       /* li.onclick=function(){
            li.contentEditable=true;
        }*/

        var tasksHolder =document.querySelector(".tasksList")
      

        var closeButton =document.createElement("button");
        closeButton.innerText="delete";
        div.appendChild(closeButton);
        closeButton.className="close";

        var editButton = document.createElement('button');
        editButton.innerText="edit";
        div.appendChild(editButton);
        editButton.className="edit";


       tasksHolder.appendChild(div);


        closeButton.onclick=function(){
           closeButton.parentNode.remove();
        }

        editButton.onclick=function(){
            P.contentEditable=true;
        }



        theInput.value = "";
      }
      