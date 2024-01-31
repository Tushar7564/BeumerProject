const pageTitle = document.title;
const sidebar = document.querySelector(".sidebar");
const left = document.querySelector(".left");
const right = document.querySelectorAll(".right");
// const right2 = document.querySelector(".right2");
const toggle = document.querySelector(".toggle");
const icon = document.querySelector(".bi-chevron-right")
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
const span3 = document.querySelector("#span3");
const span4 = document.querySelector("#span4");
const i1 = document.querySelector(".i1");
const i2 = document.querySelector(".i2");
const cc = document.querySelector(".content-container");
const h = document.querySelector("#header");
// Dashboard
const dcharts_left = document.querySelector(".dcharts-left");
const dcharts_right = document.querySelector(".dcharts-right");
const dashboardContainer = document.querySelector(".dashboard-container");
const rt = document.querySelector(".rt");
const rb = document.querySelector(".rb");
// Homepage
const tr = document.querySelector(".tr");
const tm = document.querySelector(".tm");
const ls = document.querySelector(".leftcharts");
const rs = document.querySelector(".rightcharts");
// const chart1 = document.querySelector(".chart1");
const chart2 = document.querySelector(".chart2");
const chart3 = document.querySelector(".chart3");
// RestPages
const toprow = document.querySelector(".top-row");
const topmid = document.querySelector(".top-mid");
const mt = document.querySelector(".main-top");
const mb = document.querySelector(".main-bottom");
const cChart5 = document.querySelector(".Chart5");
const cChart6 = document.querySelector(".Chart6");
const cChart7 = document.querySelector(".Chart7");
const cChart8 = document.querySelector(".Chart8");
const subc8 = document.querySelector(".subc8");
const canvac8 = document.querySelector(".canvac8");
const t4oee = document.querySelector(".t4oee");
const histStat = document.querySelector(".histStat");
const gtm = document.querySelector("#gtm");
const liveStat = document.querySelector("#liveStat");
const c25 = document.querySelector("#chart25");
const Packercharts = document.getElementById("Packercharts");
// const pChart2 = document.getElementById("pChart2");
const Bucketcharts = document.getElementById("Bucketcharts");
const Truckcharts = document.getElementById("Truckcharts");
const overviewTable = document.getElementById("overviewTable");
const timelineTable = document.getElementById("timelineTable");
const statisticsTable = document.getElementById("statisticsTable");

toggle.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    sidebar.setAttribute('style', 'width: 7vw');
    h.setAttribute('style', 'width: 7vw !important;')
    left.setAttribute('style', 'width: 7vw; height: 100vh; background-color: darkslateblue; position: sticky;');
    // tr.setAttribute('style', 'width: 93vw !important;');
    toggle.setAttribute('style', 'left: 6.5% !important;');
    i1.removeAttribute('style');
    i2.setAttribute('style', 'width: 2vw;');
    span1.removeAttribute('style');
    span2.removeAttribute('style');
    span3.removeAttribute('style');
    span4.removeAttribute('style');
    // classSpan4.removeAttribute('style');
    right.forEach(function (element) {
      element.setAttribute('style', 'width: 94vw !important; float: right;');
      console.log(element);
    })

    if (pageTitle === "Dashboard") {
      // Dashboard
      const sdc = document.querySelector(".side-dcharts");
      right.forEach(function (element) {
        element.setAttribute('style', 'width: 93vw !important;');
      })
      rt.setAttribute('style', 'width: 92vw; position: sticky; margin-left: 10px;');
      rb.setAttribute('style', 'width: 92.5vw; --bs-gutter-x: 0;');
      dcharts_left.setAttribute('style', 'width: 35vw; padding-left: 1px; padding-right: 1px;');
      dcharts_right.setAttribute('style', 'width: 35vw; padding-left: 1px; padding-right: 1px;');
      dashboardContainer.setAttribute('style', 'width: 69.4vw; padding-left: 0; padding-right: 0; margin-left: 9px; border-width: thin; border: 1px solid lightgray; border-radius: 4px; background-color: whitesmoke;');
      sdc.style.width = "23vw";
      histStat.style.width = "69vw";
      liveStat.style.width = "69.3vw";
      c25.style.width = "58vw";
      gtm.style.marginRight = "0vw";
    }
    else if (pageTitle === "Homepage") {
      // Homepage
      tr.setAttribute('style', 'width: 92.5vw;');
      tm.setAttribute('style', 'width: 92.5vw;');
      rs.setAttribute('style', 'height: 38vh;');
      ls.setAttribute('style', 'height: 38vh;');
      // chart1.setAttribute('style', 'width: 42vw;')
      chart2.setAttribute('style', 'width: 46vw; height: inherit;')
      chart3.setAttribute('style', 'width: 46vw; height: inherit;')
    }
    else if (document.title === "All Machines" || pageTitle === "Packers" || pageTitle === "Bucket Elevators" || pageTitle === "Truck Loaders") {
      const am = document.getElementById("AllMachines");
      const iS = document.getElementById("iSearch");
      var pm = document.getElementById("pm");
      const pSpan1 = document.getElementById("pSpan1");
      const pSpan2 = document.getElementById("pSpan2");
      const pSpan3 = document.getElementById("pSpan3");
      const pSpan4 = document.getElementById("pSpan4");
      const ps = document.getElementById("ps");
      const rg = document.getElementById("rorg");
      const At = document.getElementById("ActiveTime");
      sidebar.setAttribute('style', 'width: 6vw');
      h.setAttribute('style', 'width: 6vw !important;')
      left.setAttribute('style', 'width: 6vw; height: 100vh; background-color: darkslateblue; position: sticky;');
      toggle.setAttribute('style', 'left: 5.45% !important;');
      toprow.setAttribute('style', 'width: 27.5vw !important; background-color: white;');
      topmid.setAttribute('style', 'width: 66.5vw !important;');
      am.setAttribute('style', 'width: 21.5vw;');
      iS.setAttribute('style', 'width: 21vw;');
      Packercharts.style.width = '66vw';
      pChart2.style.width = '66vw';
      Bucketcharts.style.width = '66vw';
      Truckcharts.style.width = '66vw';
      overviewTable.style.width = '65vw';
      timelineTable.style.width = '65vw';
      statisticsTable.style.width = '65vw';
      if (pageTitle === "Packers") {
        ps.setAttribute('style', 'width: 46.2vw;');
        pm1.addEventListener('click', function () {
          // console.log(pm);
          // console.log(pSpan1);
          pm.textContent = pSpan1.textContent;
          rg.style.display = "inline-block";
          At.style.display = "inline-block";
          ps.setAttribute('style', 'width: 46.2vw; float: right;');
        })
        pm2.addEventListener('click', function () {
          // console.log(pm);
          // console.log(pSpan1);
          pm.textContent = pSpan1.textContent;
          rg.style.display = "inline-block";
          At.style.display = "inline-block";
          ps.setAttribute('style', 'width: 46.2vw; float: right;');
        })
        pm3.addEventListener('click', function () {
          // console.log(pm);
          // console.log(pSpan1);
          pm.textContent = pSpan1.textContent;
          rg.style.display = "inline-block";
          At.style.display = "inline-block";
          ps.setAttribute('style', 'width: 46.2vw; float: right;');
        })
        pm4.addEventListener('click', function () {
          // console.log(pm);
          // console.log(pSpan1);
          pm.textContent = pSpan1.textContent;
          rg.style.display = "inline-block";
          At.style.display = "inline-block";
          ps.setAttribute('style', 'width: 48.3vw; float: right;');
        })
      }
      else if (pageTitle === "Bucket Elevators") {
        ps.style.width = "38vw";
      }
      else {
        ps.setAttribute('style', 'width: 40.3vw;');
      }
    }
    else if (pageTitle === "Profile") {
      const right = document.querySelector(".right");
      const rt = document.querySelector(".rt");
      const rb = document.querySelector(".rb");
      const card = document.querySelector(".card");
      right.style.width = "93vw";
      rt.style.width = "92.5vw";
      rb.style.width = "92.5vw";
      card.style.width = "90vw";
    }
    else {
      rt.style.width = "92.5vw";
    }
  }
  else {
    sidebar.classList.add("open");
    sidebar.setAttribute('style', 'width: 12vw');
    h.setAttribute('style', 'width: 12vw !important;')
    left.setAttribute('style', 'width: 12vw !important; background-color: darkslateblue; position: sticky;');
    // tr.setAttribute('style', 'width: 86vw !important;');
    toggle.setAttribute('style', 'left: 11.5% !important; top: 3.95% !important;');
    i1.setAttribute('style', 'display: inline !important; width: 87%; margin: 0.25rem !important; margin-left: 1rem !important; margin-right: 2.5rem !important;');
    i2.setAttribute('style', 'display: none !important;');
    span1.setAttribute('style', 'display: inline !important;');
    span2.setAttribute('style', 'display: inline !important;');
    span3.setAttribute('style', 'display: inline !important;');
    span4.setAttribute('style', 'display: inline !important;');
    right.forEach(function (element) {
      element.setAttribute('style', 'width: 88vw !important; float: right;');
      console.log(element);
    })

    if (pageTitle === "Dashboard") {
      // Dashboard
      // right2.setAttribute('style', 'width: 88vw !important; float: right;');
      const sdc = document.querySelector(".side-dcharts");
      toggle.style.top = '3.25%';
      rt.setAttribute('style', 'width: 87vw; margin-left: 10px;');
      rb.setAttribute('style', 'width: 87.5vw; --bs-gutter-x: 0;');
      dcharts_left.setAttribute('style', 'width: 32.5vw; padding-left: initial; padding-right: initial;');
      dcharts_right.setAttribute('style', 'width: 32.5vw; padding-left: initial; padding-right: initial;');
      dashboardContainer.setAttribute('style', 'width: 64.3vw; padding-left: 0; padding-right: 0; margin-left: 9px; border-width: thin; border: 1px solid lightgray; border-radius: 4px; background-color: whitesmoke;');
      sdc.style.width = "23vw";
      histStat.style.width = "64vw";
      liveStat.style.width = "64.3vw";
      c25.style.width = "53.1vw";
      gtm.style.marginRight = "0vw";
    }
    else if (pageTitle === "Homepage") {
      // Homepage
      tr.setAttribute('style', 'width: 87.5vw;');
      tm.setAttribute('style', 'width: 87.5vw;');
      ls.setAttribute('style', 'height: 38vh');
      rs.setAttribute('style', 'height: 38vh');
      chart2.setAttribute('style', 'width: 43.5vw; height: inherit;')
      chart3.setAttribute('style', 'width: 43.5vw; height: inherit;')
    }
    else if (document.title === "All Machines" || pageTitle === "Packers" || pageTitle === "Bucket Elevators" || pageTitle === "Truck Loaders") {
      const am = document.getElementById("AllMachines");
      const iS = document.getElementById("iSearch");
      var pm = document.getElementById("pm");
      const pSpan1 = document.getElementById("pSpan1");
      const pSpan2 = document.getElementById("pSpan2");
      const pSpan3 = document.getElementById("pSpan3");
      const pSpan4 = document.getElementById("pSpan4");
      const ps = document.getElementById("ps");
      const rg = document.getElementById("rorg");
      const At = document.getElementById("ActiveTime");
      toprow.setAttribute('style', 'width: 28vw !important; background-color: white;');
      topmid.setAttribute('style', 'width: 60vw !important;');
      am.setAttribute('style', 'width: 21vw;');
      iS.setAttribute('style', 'width: 20.5vw;');
      Packercharts.style.width = '60vw';
      pChart2.style.width = '59.5vw';
      document.querySelectorAll('.canvasjs-chart-container').forEach((element) => {
        element.style.width = '59.5vw !important';
      });
      Bucketcharts.style.width = '60vw';
      Truckcharts.style.width = '60vw';
      overviewTable.style.width = '59vw';
      timelineTable.style.width = '59vw';
      statisticsTable.style.width = '59vw';
      if (pageTitle === "Packers") {
        ps.setAttribute('style', 'width: 42.3vw;');
        pm1.addEventListener('click', function () {
          // console.log(pm);
          // console.log(pSpan1);
          pm.textContent = pSpan1.textContent;
          rg.style.display = "inline-block";
          At.style.display = "inline-block";
          ps.setAttribute('style', 'width: 42.3vw !important; float: right;');
        })
        pm2.addEventListener('click', function () {
          pm.textContent = pSpan2.textContent;
          rg.style.display = "inline-block";
          At.style.display = "inline-block";
          ps.setAttribute('style', 'width: 42.3vw; float: right;');
        })
        pm3.addEventListener('click', function () {
          pm.textContent = pSpan3.textContent;
          rg.style.display = "inline-block";
          At.style.display = "inline-block";
          ps.setAttribute('style', 'width: 42.3vw; float: right;');
        })
        pm4.addEventListener('click', function () {
          pm.textContent = pSpan4.textContent;
          rg.style.display = "inline-block";
          At.style.display = "inline-block";
          ps.setAttribute('style', 'width: 42.3vw; float: right;');
        })
      }
      else if (pageTitle === "Bucket Elevators") {
        ps.setAttribute('style', 'width: 34.3vw;');
      }
      else {
        ps.setAttribute('style', 'width: 36vw;');
      }
    }
    else if (pageTitle === "Profile") {
      const right = document.querySelector(".right");
      const rt = document.querySelector(".rt");
      const rb = document.querySelector(".rb");
      const card = document.querySelector(".card");
      right.style.width = "88vw";
      rt.style.width = "87.5vw";
      rb.style.width = "88vw";
      card.style.width = "85vw";
    }
    else {
      rt.style.width = "87.5vw";
    }
  }
  // Toggle the chevron icon
  icon.classList.toggle("bi-chevron-right");
  icon.classList.toggle("bi-chevron-left");
})

// toggle.addEventListener("click", () => {
//   sidebar.classList.add("close");
// })

var dashboard_button = document.querySelector(".dashboard_button");
var profile_button = document.querySelector(".profile_button");

if (pageTitle === "Dashboard") {
  dashboard_button.classList.add("dbActive");
  // console.log("DB is having class dbActive!!!");
} else {
  dashboard_button.classList.remove("dbActive");
  // console.log("dbActive class is removed");
}

if (pageTitle === "Profile") {
  profile_button.classList.add("dbActive");
  // console.log("DB is having class dbActive!!!");
} else {
  profile_button.classList.remove("dbActive");
  // console.log("dbActive class is removed");
}

const cctElements = document.getElementsByClassName("canvasjs-chart-tooltip");
if (document.title === "All Machines" || pageTitle === "Packers" || pageTitle === "Bucket Elevators" || pageTitle === "Truck Loaders") {
  // Access the first element in the collection
  const cct = cctElements[0];

  // Check if an element is found before trying to manipulate it
  if (cct) {
    cct.classList.add('cct-style');
  }
} else {
  // Loop through all elements in the collection and remove the class from each one
  for (const cct of cctElements) {
    cct.classList.remove('cct-style');
  }
}

var overlay = document.querySelector('.overlay');
// Shift Input
function showModel() {
  var offcanvasElement = document.getElementById('span2');
  const si_button = document.querySelector('.si_button');
  // <div className="offcanvas-backdrop fade show"></div>
  offcanvasElement.classList.remove('show');
  si_button.classList.add('shift_input_active');
  dashboard_button.classList.remove("dbActive");

  // Show the custom modal
  // document.querySelector('.overlay').classList.add('showOverlay');
  overlay.style.display = 'block';
  document.querySelector('.si').classList.add('showsi');
}

function ActionModel() {
  var ActionElement = document.getElementById('ActionButton');
  ActionElement.classList.remove('show');
  dashboard_button.classList.remove("dbActive");

  overlay.style.display = 'block';
  document.querySelector('.Action').classList.add('showAction');
  console.log("Action Button Clicked overlay should be displayed!!!")
}

function sicloseModel() {
  var overlay = document.querySelector('.overlay');
  // document.querySelector('.overlay').classList.remove('showOverlay');
  overlay.style.display = 'none';
  document.querySelector('.si').classList.remove('showsi');
  dashboard_button.classList.add("dbActive");

  var si_button = document.querySelector(".si_button");
  // var shift_input_active = document.querySelector(".shift_input_active");
  si_button.classList.remove("shift_input_active");
  console.log("shift_input_active class removed!!!");

  setTimeout(() => {
    document.getElementById('exportOptions').style.display = "none";
  }, 500);
}

var si_close = document.getElementById("si_close");
si_close.addEventListener("click", sicloseModel);

function ActioncloseModel() {
  var overlay = document.querySelector('.overlay');
  // document.querySelector('.overlay').classList.remove('showOverlay');
  dashboard_button.classList.add("dbActive");
  overlay.style.display = 'none';
  document.querySelector('.Action').classList.remove('showAction');
}

var Action_close = document.getElementById("Action_close");
// Action_close.addEventListener("click", ActioncloseModel);

const length = document.querySelector("#length");
const ns = document.querySelector(".ns");
length.addEventListener("change", function () {
  if (length.value == "8") {
    ns.placeholder = "3";
  }
  else if (length.value == "16") {
    ns.placeholder = "2";
  }
  else if (length.value == "24") {
    ns.placeholder = "1";
  }
  else {
    ns.placeholder = "";
  }
})

// const mbs = document.querySelector("#mbs");
// const v60 = document.querySelector(".value60");
// mbs.addEventListener("change", function () {
//   const selectedValue = parseFloat(mbs.value);

//   if (!isNaN(selectedValue)) {
//     const result = selectedValue * 60;
//     v60.placeholder = `x 60 = ${result}`;
//   }
//   else {
//     v60.placeholder = '';
//   }
// })

// Script for Packer to change Machine Capacity
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
const mbs = document.querySelector(".mbs");
const sbs = document.querySelector(".sbs");
const its = document.querySelector(".its");
const dt = document.querySelector(".dt");

length.addEventListener("change", function () {
  // if ((p1.value == "1" || p1.value == "2" || p1.value == "3" || p1.value == "4" || p1.value == "5") && length.value == "8") {
  //   sbs.setAttribute("value", "06:00");
  //   sbs.setAttribute("step", "3600");
  //   sbs.min = "06:00";
  //   sbs.max = new Date().getHours() + 8 + ":00";
  //   mbs.setAttribute("value", "06:00");
  //   mbs.setAttribute("step", "3600");
  //   mbs.min = "06:00";
  //   mbs.max = new Date().getHours() + 0 + ":00";
  //   its.setAttribute("value", "06:00");
  //   its.setAttribute("step", "3600");
  //   its.min = "6:00 AM";
  //   its.max = new Date().getHours() + 0 + ":00";
  //   dt.setAttribute("value", "06:00");
  //   dt.setAttribute("step", "3600");
  //   dt.min = "6:00 AM";
  //   dt.max = new Date().getHours() + 0 + ":00";
  // }
  // else if (p1.value == "1" || p1.value == "2" || p1.value == "3" || p1.value == "4" || p1.value == "5" && length.value == "16") {
  //   sbs.setAttribute("value", "06:00");
  //   sbs.setAttribute("step", "3600");
  //   sbs.min = "06:00";
  //   sbs.max = new Date().getHours() + 16 + ":00";
  //   mbs.setAttribute("value", "06:00");
  //   mbs.setAttribute("step", "3600");
  //   mbs.min = "06:00";
  //   mbs.max = new Date().getHours() + 16 + ":00";
  //   its.setAttribute("value", "06:00");
  //   its.setAttribute("step", "3600");
  //   its.min = "6:00 AM";
  //   its.max = new Date().getHours() + 16 + ":00";
  //   dt.setAttribute("value", "06:00");
  //   dt.setAttribute("step", "3600");
  //   dt.min = "6:00 AM";
  //   dt.max = new Date().getHours() + 16 + ":00";
  // }
})