/* ===============================  Custom fadeIn, fadeOut  =============================== */
var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;
function fadeIn(el, time) {
  setInterval(show(el), time);
}
function show(el) {
  opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 1;
    el.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
function fadeOut(el, time) {
  setInterval(hide(el), time);
}
function hide(el) {
  opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
  if (opacity > 0) {
    opacity = 0;
    el.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

/* ===============================  Custom Delay Function  =============================== */
function delay(time, callback) {
  setTimeout(function () {
    callback;
  }, time);
}

/* ===============================  Custom Get Siblings Function  =============================== */
let getSiblings = function (e) {
  let siblings = [];
  if (!e.parentNode) {
    return siblings;
  }
  let sibling = e.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/* ===============================  Custom animateEl Function =============================== */
const animateEl = (el, to) => {
  function draw() {
    el.style.left = to;
  }
  draw();
};

/* ===============================  Pace Setup  =============================== */
Pace.on("start", function () {
  //When Pace Start
  document.querySelector("#preloader").classList.remove("isdone");
  document.querySelector(".loading").classList.remove("isdone");
});
Pace.on("done", function () {
  //When Pace End
  if (document.querySelector(".hamenu")) {
    delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
    document.querySelector(".topnav .menu-icon").classList.remove("open");
  }
  document.querySelector("#preloader").classList.add("isdone");
  document.querySelector(".loading").classList.add("isdone");
});

if (document.querySelector('body').classList.contains('pace-done')) {
  document.querySelector("#preloader").classList.add("isdone");
  document.querySelector(".loading").classList.add("isdone");
}

document.addEventListener('load', () => {
  document.querySelector("#preloader").classList.add("isdone");
  document.querySelector(".loading").classList.add("isdone");
})

/* ===============================  Skills Progress In Team Section  =============================== */
let teamSection = document.querySelector(".team-crv");
let skillInAbout = document.querySelector(".about-cr .skills-box");

if (teamSection) {
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".skill-progress .progres").forEach((item) => {
      let myVal = item.getAttribute("data-value");
      if (window.pageYOffset > teamSection.offsetTop - 200) {
        item.style.width = myVal;
      }
    });
  });
}
if (skillInAbout) {
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".skill-progress .progres").forEach((item) => {
      let myVal = item.getAttribute("data-value");
      if (
        window.pageYOffset >
        document.querySelector(".about-cr").offsetTop - 200
      ) {
        item.style.width = myVal;
      }
    });
  });
}

/* ===============================  Scroll To Top With Progress Bar  =============================== */
let progressPath = document.querySelector(".progress-wrap path");
let pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = "none";
progressPath.style.strokeDasharray = pathLength + " " + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition =
  "stroke-dashoffset 10ms linear";
const updateProgress = function () {
  let scroll = window.pageYOffset;
  let height = document.documentElement.scrollHeight - window.innerHeight;
  let progress = pathLength - (scroll * pathLength) / height;
  progressPath.style.strokeDashoffset = progress;
};
updateProgress();
window.addEventListener("scroll", updateProgress);
let progressWrap = document.querySelector(".progress-wrap");
let offset = 150;
window.addEventListener("scroll", function () {
  if (window.pageYOffset > offset) {
    progressWrap.classList.add("active-progress");
  } else {
    document
      .querySelector(".progress-wrap")
      .classList.remove("active-progress");
  }
});
progressWrap.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
  return false;
});

/* ===============================  Tooltip  =============================== */
let template1 = document.createElement("div");
template1.classList.add("div-tooltip-tit");
document.body.appendChild(template1);
let template2 = document.createElement("div");
template2.classList.add("div-tooltip-sub");
document.body.appendChild(template2);
document.querySelectorAll("[data-tooltip-tit]").forEach((item) => {
  template1 = document.querySelector(".div-tooltip-tit");
  item.addEventListener("mouseover", () => {
    template1.innerText = item.getAttribute("data-tooltip-tit");
  });
  item.addEventListener("mousemove", (e) => {
    fadeIn(template1, 800);
    template1.style.top = e.pageY + 10 + "px";
    template1.style.left = e.pageX + 20 + "px";
    template1.style.padding = "0px 10px";
  });
  item.addEventListener("mouseleave", () => {
    fadeOut(template1, 800);
    template1.style.padding = 0;
  });
});
document.querySelectorAll("[data-tooltip-sub]").forEach((item) => {
  template2 = document.querySelector(".div-tooltip-sub");
  item.addEventListener("mouseover", () => {
    template2.innerText = item.getAttribute("data-tooltip-sub");
  });

  item.addEventListener("mousemove", (e) => {
    fadeIn(template2, 800);
    template2.style.top = e.pageY - 15 + "px";
    template2.style.left = e.pageX + 30 + "px";
    template2.style.padding = "5px 10px";
  });
  item.addEventListener("mouseleave", () => {
    fadeOut(template2, 800);
    template2.style.padding = 0;
  });
});

/* ===============================  Text fadeout when scroll  =============================== */
window.addEventListener("scroll", () => {
  var scrolled = window.pageYOffset;
  if (document.querySelector(".fixed-slider .caption")) {
    document.querySelector(".fixed-slider .caption").style.transform =
      "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
    document.querySelector(".fixed-slider .caption").style.opacity =
      1 - scrolled / 600;
  }
  if (document.querySelector(".fixed-slider .capt .parlx")) {
    document.querySelector(".fixed-slider .capt .parlx").style.transform =
      "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
    document.querySelector(".fixed-slider .capt .parlx").style.opacity =
      1 - scrolled / 600;
  }
});

// Mouse Effect
function mousecursor() {
  const cursorInner = document.querySelector(".cursor-inner"),
    cursorOuter = document.querySelector(".cursor-outer");
  let n,
    i = 0,
    o = !1;
  window.onmousemove = function (s) {
    o ||
      (cursorOuter.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (cursorInner.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (n = s.clientY),
      (i = s.clientX);
  };
  if (document.querySelector(".cursor-pointer")) {
    document
      .querySelector(".cursor-pointer")
      .addEventListener("mouseenter", function () {
        cursorInner.classList.add("cursor-hover"),
          cursorOuter.classList.add("cursor-hover");
      });
    document
      .querySelector(".cursor-pointer")
      .addEventListener("mouseleave", function () {
        cursorInner.classList.remove("cursor-hover"),
          cursorOuter.classList.remove("cursor-hover");
      }),
      (cursorInner.style.visibility = "visible"),
      (cursorOuter.style.visibility = "visible");
  }
  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      cursorInner.classList.add("cursor-hover"),
        cursorOuter.classList.add("cursor-hover");
    });
  });
  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseleave", function () {
      cursorInner.classList.remove("cursor-hover"),
        cursorOuter.classList.remove("cursor-hover");
    });
  }),
    (cursorInner.style.visibility = "visible"),
    (cursorOuter.style.visibility = "visible");
}
mousecursor();

/* ===============================  Mouse Hover in Features Section  =============================== */
var featuresitems = document.querySelectorAll(".feat .items");
if (featuresitems) {
  featuresitems.forEach((item) => {
    item.onmouseover = function (event) {
      item.classList.add("active");
      let siblings = getSiblings(item),
        siblingEl = siblings.map((e) => e.classList.remove("active"));
    };
  });
}
document
  .querySelectorAll(".button")
  .forEach(
    (button) =>
      (button.innerHTML =
        "<div><span>" +
        button.textContent.trim().split("").join("</span><span>") +
        "</span></div>")
  );

/* ===============================  Isotope Setup  =============================== */
var grid = document.querySelectorAll(".gallery");
var iso;
if (grid.length >= 1) {
  grid.forEach((item) => {
    iso = new Isotope(item, {
      itemSelector: ".items",
    });
  });
}

var gridMons = document.querySelectorAll(".gallery-mons");
if (gridMons.length >= 1) {
  gridMons.forEach((item) => {
    iso = new Isotope(item, {
      itemSelector: ".items",
      masonry: {
        columnWidth: ".width2",
      },
    });
  });
}

var filtersElem = document.querySelector(".filtering");
if (filtersElem) {
  filtersElem.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, "span")) {
      return;
    }
    var filterValue = event.target.getAttribute("data-filter");
    filterValue = filterValue;
    iso.arrange({ filter: filterValue });
  });
  var buttonGroups = document.querySelectorAll(".filtering");
  for (var i = 0, len = buttonGroups.length; i < len; i++) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
  }
  function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener("click", function (event) {
      if (!matchesSelector(event.target, "span")) {
        return;
      }
      buttonGroup.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
    });
  }
}

/* ===============================  Init Wow.js  =============================== */
new WOW().init();

/* ===============================  Init simpleParallax  =============================== */
var imageUp = document.getElementsByClassName("thumparallax");
if (imageUp) {
  new simpleParallax(imageUp, {
    delay: 1,
    scale: 1.1,
  });
}
var imageDown = document.getElementsByClassName("thumparallax-down");
if (imageDown) {
  new simpleParallax(imageDown, {
    orientation: "down",
    delay: 1,
    scale: 1.1,
  });
}

/* ===============================  Remove Siwper Pagination "/"  =============================== */
if (document.querySelector(".swiper-pagination")) {
  document.querySelector(".swiper-pagination").innerHTML = document
    .querySelector(".swiper-pagination")
    .innerHTML.replace(" / ", "");
}

/* ===============================  Init Map  =============================== */
let map = document.getElementById("ieatmaps");
if (map) initMap();
