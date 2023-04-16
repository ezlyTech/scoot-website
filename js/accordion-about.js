var acc = document.getElementsByClassName("accordion");
var activeAcc = null;

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    
    if (this === activeAcc) {
      this.classList.remove("active");
      panel.style.maxHeight = null;
      activeAcc = null;
    }
    
    else {
      if (activeAcc) {
        activeAcc.classList.remove("active");
        activeAcc.nextElementSibling.style.maxHeight = null;
      }
      
      this.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      activeAcc = this;
    }
  });
}