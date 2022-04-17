function detectTaskList() {
    var taskListObjects = document.getElementsByTagName("input");
    for (var i = 0; i < taskListObjects.length; i++) {
      var par = taskListObjects[i].parentNode;
      par.classList.add("task-list-item");
      par.parentNode.classList.add("task-list");
    }
}

function detectBlockTable() {
  var tableListObjects = document.getElementsByTagName("thead");
  for (var i = 0; i < tableListObjects.length; i++) {
    var par = tableListObjects[i].parentNode;
    par.classList.add("block-table");

  }
}

function detectCode() {
  var codeBlockObjects = document.getElementsByClassName("code");
  for (let i = 0; i < codeBlockObjects.length; i++) {
    const block = codeBlockObjects[i];
    block.classList.add("notranslate");    
  }
}

function toggleMenu() {
    var menuList = document.getElementsByClassName("menu-list")[0];
    var menuButton = document.getElementById("menu-btn");  
    if(menuList.classList.contains("active")){
      menuList.classList.remove("active");
      menuButton.innerHTML = "MENU";
    }else{
      menuList.classList.add("active");
      menuButton.innerHTML = "<div class=\"icon arrow-up\"> </div>";
    }
}

function detectors(){
  detectTaskList();
  detectBlockTable();
  detectCode();
}


