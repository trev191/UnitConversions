function convertTemp() {
  cels = document.getElementById("c");
  fahr = document.getElementById("f")
  if (cels.value != "") {
    fahrConv = (cels.value * (9/5)) + 32;
    fahr.value = fahrConv;
  } else {
    fahr.value = "";
  }
}

function convertWeight() {
  kgs = document.getElementById("kg");
  lbs = document.getElementById("lb");
  if (kgs.value != "") {
    lbConv = kgs.value * 2.2;
    lbs.value = lbConv;
  } else {
    lbs.value = "";
  }
}

function convertDistance() {
  km = document.getElementById("km");
  mi = document.getElementById("mi");
  if (km.value != "") {
    miConv = km.value * 0.62137;
    mi.value = miConv;
  } else {
    mi.value = "";
  }
}