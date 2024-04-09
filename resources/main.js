$(".menu > ul > li").click(function (e) {
  // remove active from already active
  $(this).siblings().removeClass("active");
  // add active to clicked
  $(this).toggleClass("active");
  // if has sub menu open it
  $(this).find("ul").slideToggle();
  // close other sub menu if any open
  $(this).siblings().find("ul").slideUp();
  // remove active class of sub menu items
  $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".content").click(function (e) {
  if ($(".sidebar").hasClass("active")) {
    $(".menu > ul > li").siblings().removeClass("active");
    $(".menu > ul > li").siblings().find("ul").slideUp();
  }
});

if ($(".container").width() < 1150) {
  $(".sidebar").addClass("active");
}

$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
});

$(".menu__box > li").click(function (e) {
  // if has sub menu open it
  $(this).find("ul").slideToggle();
  // close other sub menu if any open
  $(this).siblings().find("ul").slideUp();
  // remove active class of sub menu items
  $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".user-res > i").click(function () {
  $(".user-res-info").toggleClass("user-active");
});

/*-- Calendar --*/
const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".cal-header i");
// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
// storing full name of all months in array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  if (currentDate) {
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
  }
};
renderCalendar();

prevNextIcon.forEach((icon) => {
  // getting prev and next icons
  icon.addEventListener("click", () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
  });
});

/*-- Gear --*/
$(".btn-dropdown").click(function () {
  $(this).next().toggleClass("open");
});

// mision
$(".mission-btn").click(function () {
  if (!$(this).hasClass("mission-btn-active")) {
    $(".mission-btn.mission-btn-active").removeClass("mission-btn-active");
    $(this).addClass("mission-btn-active");
  }
});
$(".mission-btn").click(function () {
  if ($(this).hasClass("mission-btn-active")) {
    $(".mission-content .mission-content-active").removeClass(
      "mission-content-active"
    );
    if ($(this).hasClass("all-btn")) {
      $(".all-mission").addClass("mission-content-active");
    } else if ($(this).hasClass("incomplete-btn")) {
      $(".incomplete-mission").addClass("mission-content-active");
    } else {
      $(".completed-mission").addClass("mission-content-active");
    }
  }
});

//Nhan su
document.addEventListener("DOMContentLoaded", function () {
  function addClickEvent(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.addEventListener("click", function () {
        this.classList.toggle("green");
      });
    }
  }
  addClickEvent("mydot");
  addClickEvent("mydot1");
  addClickEvent("mydot2");
  addClickEvent("mydot3");
});

//Lo trinh
window.addEventListener("DOMContentLoaded",() => {
	const ctl = new CollapsibleTimeline("#timeline");
});

class CollapsibleTimeline {
	constructor(el) {
		this.el = document.querySelector(el);

		this.init();
	}
	init() {
		this.el?.addEventListener("click",this.itemAction.bind(this));
	}
	animateItemAction(button,ctrld,contentHeight,shouldCollapse) {
		const expandedClass = "timeline__item-body--expanded";
		const animOptions = {
			duration: 300,
			easing: "cubic-bezier(0.65,0,0.35,1)"
		};

		if (shouldCollapse) {
			button.ariaExpanded = "false";
			ctrld.ariaHidden = "true";
			ctrld.classList.remove(expandedClass);
			animOptions.duration *= 2;
			this.animation = ctrld.animate([
				{ height: `${contentHeight}px` },
				{ height: `${contentHeight}px` },
				{ height: "0px" }
			],animOptions);
		} else {
			button.ariaExpanded = "true";
			ctrld.ariaHidden = "false";
			ctrld.classList.add(expandedClass);
			this.animation = ctrld.animate([
				{ height: "0px" },
				{ height: `${contentHeight}px` }
			],animOptions);
		}
	}
	itemAction(e) {
		const { target } = e;
		const action = target?.getAttribute("data-action");
		const item = target?.getAttribute("data-item");

		if (action) {
			const targetExpanded = action === "expand" ? "false" : "true";
			const buttons = Array.from(this.el?.querySelectorAll(`[aria-expanded="${targetExpanded}"]`));
			const wasExpanded = action === "collapse";

			for (let button of buttons) {
				const buttonID = button.getAttribute("data-item");
				const ctrld = this.el?.querySelector(`#item${buttonID}-ctrld`);
				const contentHeight = ctrld.firstElementChild?.offsetHeight;

				this.animateItemAction(button,ctrld,contentHeight,wasExpanded);
			}

		} else if (item) {
			const button = this.el?.querySelector(`[data-item="${item}"]`);
			const expanded = button?.getAttribute("aria-expanded");

			if (!expanded) return;

			const wasExpanded = expanded === "true";
			const ctrld = this.el?.querySelector(`#item${item}-ctrld`);
			const contentHeight = ctrld.firstElementChild?.offsetHeight;

			this.animateItemAction(button,ctrld,contentHeight,wasExpanded);
		}
	}
}

//Quan ly nha su
$(document).ready(function () {
  $("#toggleBtn1").click(function () {
    $("#content1").slideToggle();
  });
  $("#toggleBtn2").click(function () {
    $("#content2").slideToggle();
  });
});

$(document).ready(function () {
  $("#toggleBtn-1").click(function () {
    $("#content-1").slideToggle();
    $("#content-3").slideToggle();
  });
  $("#toggleBtn-2").click(function () {
    $("#content-2").slideToggle();
  });
  $("#toggleBtn-3").click(function () {
    $("#content-4").slideToggle();
  });
});

// Flag
var flagColors = ["red", "yellow", "green"];
//
var flagIcon = document.getElementById("flagIcon");
var savedColor = localStorage.getItem("currentColor");
if (savedColor) {
  if (flagIcon) {
    flagIcon.style.color = savedColor;
  }
}
function changeColor() {
  var currentColor = flagIcon.style.color;
  var currentIndex = flagColors.indexOf(currentColor);
  var nextIndex = (currentIndex + 1) % flagColors.length;
  var nextColor = flagColors[nextIndex];
  flagIcon.style.color = nextColor;
  localStorage.setItem("currentColor", nextColor);
}
//
var flagIcon1 = document.getElementById("flagIcon1");
var savedColor1 = localStorage.getItem("currentColor1");
if (savedColor1) {
  if (flagIcon1) {
    flagIcon1.style.color = savedColor1;
  }
}
function changeColor1() {
  var currentColor1 = flagIcon1.style.color;
  var currentIndex1 = flagColors.indexOf(currentColor1);
  var nextIndex1 = (currentIndex1 + 1) % flagColors.length;
  var nextColor1 = flagColors[nextIndex1];
  flagIcon1.style.color = nextColor1;
  localStorage.setItem("currentColor1", nextColor1);
}
//
var flagIcon2 = document.getElementById("flagIcon2");
var savedColor2 = localStorage.getItem("currentColor2");
if (savedColor2) {
  if (flagIcon2) {
    flagIcon2.style.color = savedColor2;
  }
}
function changeColor2() {
  var currentColor2 = flagIcon2.style.color;
  var currentIndex2 = flagColors.indexOf(currentColor2);
  var nextIndex2 = (currentIndex2 + 1) % flagColors.length;
  var nextColor2 = flagColors[nextIndex2];
  flagIcon2.style.color = nextColor2;
  localStorage.setItem("currentColor2", nextColor2);
}
//
var flagIcon3 = document.getElementById("flagIcon3");
var savedColor3 = localStorage.getItem("currentColor3");
if (savedColor3) {
  if (flagIcon3) {
    flagIcon3.style.color = savedColor3;
  }
}
function changeColor3() {
  var currentColor3 = flagIcon3.style.color;
  var currentIndex3 = flagColors.indexOf(currentColor3);
  var nextIndex3 = (currentIndex3 + 1) % flagColors.length;
  var nextColor3 = flagColors[nextIndex3];
  flagIcon3.style.color = nextColor3;
  localStorage.setItem("currentColor3", nextColor3);
}
//
var flagIcon4 = document.getElementById("flagIcon4");
var savedColor4 = localStorage.getItem("currentColor4");
if (savedColor4) {
  if (flagIcon4) {
    flagIcon4.style.color = savedColor4;
  }
}
function changeColor4() {
  var currentColor4 = flagIcon4.style.color;
  var currentIndex4 = flagColors.indexOf(currentColor4);
  var nextIndex4 = (currentIndex4 + 1) % flagColors.length;
  var nextColor4 = flagColors[nextIndex4];
  flagIcon4.style.color = nextColor4;
  localStorage.setItem("currentColor4", nextColor4);
}
//
var flagIcon5 = document.getElementById("flagIcon5");
var savedColor5 = localStorage.getItem("currentColor5");
if (savedColor5) {
  if (flagIcon5) {
    flagIcon5.style.color = savedColor5;
  }
}
function changeColor5() {
  var currentColor5 = flagIcon5.style.color;
  var currentIndex5 = flagColors.indexOf(currentColor5);
  var nextIndex5 = (currentIndex5 + 1) % flagColors.length;
  var nextColor5 = flagColors[nextIndex5];
  flagIcon5.style.color = nextColor5;
  localStorage.setItem("currentColor5", nextColor5);
}
//
var flagIcon6 = document.getElementById("flagIcon6");
var savedColor6 = localStorage.getItem("currentColor6");
if (savedColor6) {
  if (flagIcon6) {
    flagIcon6.style.color = savedColor6;
  }
}
function changeColor6() {
  var currentColor6 = flagIcon6.style.color;
  var currentIndex6 = flagColors.indexOf(currentColor6);
  var nextIndex6 = (currentIndex6 + 1) % flagColors.length;
  var nextColor6 = flagColors[nextIndex6];
  flagIcon6.style.color = nextColor6;
  localStorage.setItem("currentColor6", nextColor6);
}
//
var flagIcon7 = document.getElementById("flagIcon7");
var savedColor7 = localStorage.getItem("currentColor7");
if (savedColor7) {
  if (flagIcon7) {
    flagIcon7.style.color = savedColor7;
  }
}
function changeColor7() {
  var currentColor7 = flagIcon7.style.color;
  var currentIndex7 = flagColors.indexOf(currentColor7);
  var nextIndex7 = (currentIndex7 + 1) % flagColors.length;
  var nextColor7 = flagColors[nextIndex7];
  flagIcon7.style.color = nextColor7;
  localStorage.setItem("currentColor7", nextColor7);
}
//
var flagIcon8 = document.getElementById("flagIcon8");
var savedColor8 = localStorage.getItem("currentColor8");
if (savedColor8) {
  if (flagIcon8) {
    flagIcon8.style.color = savedColor8;
  }
}
function changeColor8() {
  var currentColor8 = flagIcon8.style.color;
  var currentIndex8 = flagColors.indexOf(currentColor8);
  var nextIndex8 = (currentIndex8 + 1) % flagColors.length;
  var nextColor8 = flagColors[nextIndex8];
  flagIcon8.style.color = nextColor8;
  localStorage.setItem("currentColor8", nextColor8);
}
//
var flagIcon9 = document.getElementById("flagIcon9");
var savedColor9 = localStorage.getItem("currentColor9");
if (savedColor9) {
  if (flagIcon9) {
    flagIcon9.style.color = savedColor9;
  }
}
function changeColor9() {
  var currentColor9 = flagIcon9.style.color;
  var currentIndex9 = flagColors.indexOf(currentColor9);
  var nextIndex9 = (currentIndex9 + 1) % flagColors.length;
  var nextColor9 = flagColors[nextIndex9];
  flagIcon9.style.color = nextColor9;
  localStorage.setItem("currentColor9", nextColor9);
}
//
var flagIcon10 = document.getElementById("flagIcon10");
var savedColor10 = localStorage.getItem("currentColor10");
if (savedColor10) {
  if (flagIcon10) {
    flagIcon10.style.color = savedColor10;
  }
}
function changeColor10() {
  var currentColor10 = flagIcon10.style.color;
  var currentIndex10 = flagColors.indexOf(currentColor10);
  var nextIndex10 = (currentIndex10 + 1) % flagColors.length;
  var nextColor10 = flagColors[nextIndex10];
  flagIcon10.style.color = nextColor10;
  localStorage.setItem("currentColor10", nextColor10);
}

