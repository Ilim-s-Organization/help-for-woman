let a = 5
let b = 10

console.log(a + b, 'Hello')

function find_openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("find_tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("find_tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
      tablinks[i].style.borderBottomColor = "transparent";
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
    evt.currentTarget.style.borderBottomColor = "#007bff";
    moveLine(evt.currentTarget);
  }