

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navOnSmall");
    if (x.className.indexOf("onSmallLinks") == -1) {
        x.className += " onSmallLinks";
    } else {
        x.className = x.className.replace(" onSmallLinks", "");
    }
}
function toggleOff() {
  var x = document.getElementById("navOnSmall");
  if(x.className.indexOf("onSmallLinks") > 0) {
    x.className = x.className.replace("onSmallLinks", "");
  }
}


