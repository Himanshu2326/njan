document.body.onload = function () {
  var loader = document.getElementById("loader_home");
  loader.style.display = "none";
  setTimeout(init_execution, 1000);
};

console.log("hello");
//? NavBar Toggle :--
const toggle_menu_mobile = document.querySelector(".toggle_menu_mobile");
const nav_icon = document.querySelector("#nav_icon");
const mobile_navbar = document.querySelector("#mobile_navbar");
let is_menu_on = false;

toggle_menu_mobile.addEventListener("click", () => {
  is_menu_on = !is_menu_on;

  let header = document.querySelector(".header");
  let logo_image = document.querySelector(".logo_img");
  let toggle_menu_mobile = document.querySelector(".toggle_menu_mobile");
  let mobile_navbar_ul = document.querySelector(".mobile_navbar_ul");
  let cross_icon = document.querySelector("#nav_icon");
  // let topHeader = document.querySelector('#header')

  if (is_menu_on) {
    // Icon Change :---
    nav_icon.classList.remove("fa-bars");
    nav_icon.classList.add("fa-xmark");

    // Side navbar Open :--
    mobile_navbar_ul.style.transform = "translateX(0%)";
    mobile_navbar.style.display = "block";

    // Hide Logo :--
    logo_image.style.visibility = "hidden";

    // Header padding adjust :--
    header.style.padding = "4px 0px";

    // Toggle icon :--
    toggle_menu_mobile.classList.remove("toggle_menu_mobile");
    toggle_menu_mobile.classList.add("adjust_toggle_menu_mobile");

    // adjust cross icon :--
    cross_icon.classList.add("adjust_cross_icon");

    // Adjust Padding :--
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      mobile_navbar_ul.style.paddingTop = "1.7rem";
    } else {
      mobile_navbar_ul.style.paddingTop = "3.74rem";
    }

    // Stop Body Moment :--
    document.body.style.overflow = "hidden";
    // topHeader.style.marginTop = "0rem !important"
  } else {
    // Icon Change :--
    nav_icon.classList.remove("fa-xmark");
    nav_icon.classList.add("fa-bars");

    // Show Logo :--
    logo_image.style.visibility = "visible";

    // Hide Side Navbar  :--
    mobile_navbar_ul.style.transform = "translateX(100%)";
    mobile_navbar.style.display = "none";

    // Adjust Padding :---
    header.style.padding = "0px 0px";
    mobile_navbar_ul.style.paddingTop = "5rem";

    //  Hide Cross Icon :--
    cross_icon = document.querySelector(".adjust_cross_icon");

    cross_icon.classList.remove("adjust_cross_icon");
    cross_icon.classList.add("remove_cross_icon");

    // Toggle Menu :--
    toggle_menu_mobile = document.querySelector(".adjust_toggle_menu_mobile");

    toggle_menu_mobile.classList.remove("adjust_toggle_menu_mobile");
    toggle_menu_mobile.classList.add("toggle_menu_mobile");

    document.body.style.overflow = "auto";
  }
});


 //? Off Mobile Navbar on menu btns click :--
 const menu_btns = document.querySelectorAll(".mobile_menu_btns");

 menu_btns.forEach((btn) => {
   btn.addEventListener("click", () => {
     is_menu_on = !is_menu_on;

     let logo_image = document.querySelector(".logo_img");
     let toggle_menu_mobile = document.querySelector(".toggle_menu_mobile");
     let mobile_navbar_ul = document.querySelector(".mobile_navbar_ul");
     let cross_icon = document.querySelector("#nav_icon");

     // Icon Change :--
     nav_icon.classList.remove("fa-xmark");
     nav_icon.classList.add("fa-bars");

     // Show Logo :--
     logo_image.style.visibility = "visible";

     // Hide Side Navbar  :--
     mobile_navbar_ul.style.transform = "translateX(100%)";
     mobile_navbar.style.display = "none";

     // Adjust Padding :---
     header.style.padding = "0px 0px";
     mobile_navbar_ul.style.paddingTop = "5rem";

     //  Hide Cross Icon :--
     cross_icon = document.querySelector(".adjust_cross_icon");

     cross_icon.classList.remove("adjust_cross_icon");
     cross_icon.classList.add("remove_cross_icon");

     // Toggle Menu :--
     toggle_menu_mobile = document.querySelector(".adjust_toggle_menu_mobile");

     toggle_menu_mobile.classList.remove("adjust_toggle_menu_mobile");
     toggle_menu_mobile.classList.add("toggle_menu_mobile");

     document.body.style.overflow = "auto";
   });
 });


// document.addEventListener("DOMContentLoaded", function () {
//   let count = 0;
//   let Call_Back_NO = document.querySelector("#Call_Back_NO");

//   document.addEventListener("mouseleave", function (event) {
//     if (event.clientY <= 0 && count == 0) {
//       document.querySelector(".OnLeaveCard").style.display = "flex";
//     }
//     return;
//   });

  // document.addEventListener("click", function (event) {
  //   const onLeaveCard = document.querySelector(".OnLeaveCard");
  //   const card = document.querySelector(".Card");

  //   if (onLeaveCard.style.display !== "none") {
  //     if (count === 0) {
  //       if (!card.contains(event.target)) {
  //         onLeaveCard.style.display = "none";
  //         count = count + 1;
  //       }
  //     }
  //     return;
  //   }
  // });

  // document.querySelector(".No_ThanksBtn").addEventListener("click", (e) => {
  //   count = count + 1;
  //   e.preventDefault();
  //   document.querySelector(".OnLeaveCard").style.display = "none";
  // });

  // Call_Back_NO.addEventListener("submit", (e) => {
  //   // e.preventDefault();
  //   count = count + 1;
  //   document.querySelector(".OnLeaveCard").style.display = "none";
  // });

  //? Number Validation :--
  // let User_Number = document.querySelectorAll(".User_Number");

  // User_Number.forEach((number_field) => {
  //   number_field.addEventListener("input", () => {
  //     if (number_field.validity.patternMismatch) {
  //       number_field.setCustomValidity(
  //         "It seems the number is invalid, Your number must start with 9, 8, 7 or 6 and it must be 10 digits only."
  //       );
  //     } else {
  //       number_field.setCustomValidity("");
  //     }
  //   });
  // });

 
// });

// var send_event = false;
// function send_ply_event() {
//   if (send_event === false) {
//     try {
//       ply.trackEvent("fill_form");
//     } catch (err) { }
//     send_event = true;
//   }
// }

function getCleanPath(url) {
  var urlObj = new URL(url);
  var pathname = urlObj.pathname;
  if (pathname.charAt(0) === "/") {
    pathname = pathname.substr(1);
  }
  return pathname;
}

var workshopname = "";
var current_url_path = "/fb";
var current_url_protocol = "https:";
var current_domain = "yoga.satvicmovement.org";
var current_url = "https://yoga.satvicmovement.org/fb";
var source_page = getCleanPath(current_url);

function toggleCollapse(a) {
  var content = document.querySelector("#dv_" + a);
  var show = document.querySelector("#sm_" + a);

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    show.textContent = "Show More";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    show.textContent = "Show Less";
  }
}

// ------read more and less toggle button feature ---
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", function () {
    const textShort = this.previousElementSibling.previousElementSibling; // Selects the short text span
    const textFull = this.previousElementSibling; // Selects the full text span

    if (textFull.style.display === "none") {
      // Show full text and hide short text
      textShort.style.display = "none";
      textFull.style.display = "inline";
      this.innerText = "Read Less";
    } else {
      // Show short text and hide full text
      textShort.style.display = "inline";
      textFull.style.display = "none";
      this.innerText = "Read More";
    }
  });
});

$(document).ready(function () {
  var $stickyDiv = $("#stickyDiv");
  var $header = $("#header");
  var $footer = $("#footer");
  var headerHeight = $header.outerHeight();
  var footerHeight = $footer.outerHeight();
  var marginFromHeader = 95; // Margin from header
  var marginFromFooter = 5; // Margin from footer

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var docHeight = $(document).height();
    var footerOffsetTop = $footer.offset().top;
    var stickyHeight = $stickyDiv.outerHeight();

    if (scrollTop >= headerHeight + marginFromHeader) {
      var maxScrollTop =
        footerOffsetTop - stickyHeight - marginFromFooter - windowHeight;
      if (scrollTop >= maxScrollTop) {
        $stickyDiv.css({
          position: "absolute",
          top: maxScrollTop + marginFromHeader + "px",
        });
      } else {
        // alert('2');
        $stickyDiv.css({
          position: "fixed",
          top: marginFromHeader + "px",
        });
      }
    } else {
      $stickyDiv.css({
        position: "relative",
        top: "0",
      });
    }
  });
});

// document.getElementById("chkbx").addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent the default link behavior
//   document.getElementById("terms").checked = false;
// });

// document
//   .getElementById("submitBtn")
//   .addEventListener("click", function (event) {
//     var termsCheckbox = document.getElementById("terms");

//     if (!termsCheckbox.checked) {
//       termsCheckbox.setCustomValidity("Please accept the terms and conditions");
//     } else {
//       termsCheckbox.setCustomValidity("");
//     }
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.getElementById("mobile_row");

//   button.addEventListener("click", function () {
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//     if (isMobile) {
//       window.location.href = "tel:9319629093"; // Replace with your phone number
//     } else {
//       window.open("tel:9319629093", "_blank"); // Replace with your WhatsApp number
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.querySelector(".phone_call");

//   button.addEventListener("click", function () {
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//     if (isMobile) {
//       window.location.href = "tel:9319629093"; // Replace with your phone number
//     } else {
//       window.open(
//         "https://api.whatsapp.com/send/?phone=919319629093&text=Hello,%20I%20am%20looking%20to%20improve%20my%20English.%20Can%20you%20check%20my%20level%20and%20suggest%20the%20best%20batch%C2%A0for%C2%A0me?%20Thanks",
//         "_blank"
//       );
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("myVideo");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           video.play();
//         } else {
//           video.pause();
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   observer.observe(video);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 300,
//       modifier: 1,
//       slideShadows: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     autoplay: {
//       delay: 1000,
//       disableOnInteraction: false,
//     },
//     loop: true, // Enable continuous loop
//     loopedSlides: 3, // Adjust this to match how many slides should be duplicated
//     loopAdditionalSlides: 3, // Ensures proper duplication for smooth looping
//   });

//   // Pause autoplay on hover
//   var swiperContainer = document.querySelector(".mySwiper");
//   swiperContainer.addEventListener("mouseenter", function () {
//     swiper.autoplay.stop(); // Stop autoplay when hovering
//   });
//   swiperContainer.addEventListener("mouseleave", function () {
//     swiper.autoplay.start(); // Resume autoplay when hover ends
//   });
// });

// function getNextMondayMidnight() {
//   const now = new Date();
//   const dayOfWeek = now.getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
//   const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7; // Calculate days until next Monday
//   const nextMondayMidnight = new Date(now);

//   // Set the time to next Monday at 00:00 AM
//   nextMondayMidnight.setDate(now.getDate() + daysUntilNextMonday);
//   nextMondayMidnight.setHours(0, 0, 0, 0);

//   return nextMondayMidnight;
// }

// function padZero(value) {
//   return value < 10 ? `0${value}` : value;
// }

// function updateCountdown() {
//   const now = new Date();
//   const nextMonday = getNextMondayMidnight();
//   const timeDiff = nextMonday - now;

//   // Calculate time left in days, hours, minutes, and seconds
//   const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

//   // Update the HTML with padded zeros
//   document.querySelector(".days").textContent = padZero(days);
//   document.querySelector(".hours").textContent = padZero(hours);
//   document.querySelector(".minutes").textContent = padZero(minutes);
//   document.querySelector(".seconds").textContent = padZero(seconds);

//   // If the time is up, reset the countdown
//   if (timeDiff <= 0) {
//     setTimeout(() => {
//       updateCountdown(); // Start again
//     }, 1000);
//   }
// }

// // Update the countdown every second
// setInterval(updateCountdown, 1000);

// Initialize Splide slider
// var splide = new Splide(".splide", {
//   type: "loop", // Infinite looping
//   perPage: 4, // Default number of slides per page
//   cover: false, // Image does not need to cover the whole slide
//   height: "100px", // Set slider height
//   autoplay: true, // Enable autoplay
//   interval: 0, // Set to 0 for no breaks between slides
//   speed: 8000, // Slow speed for smooth continuous flow (8 seconds per transition)
//   pauseOnHover: false, // Don't pause on hover for continuous effect
//   arrows: false, // Disable arrows for a clean, continuous flow
//   pagination: false, // Disable pagination for a clean look
//   easing: "linear", // Use linear easing for smooth, continuous flow

//   breakpoints: {
//     1200: {
//       // Adjust for large desktops
//       perPage: 4, // Show 4 slides at a time
//       speed: 8000, // Keep the speed the same for large screens
//       height: "120px", // Adjust the height for large screens
//       gap: "10px", // Small gap between images
//     },
//     1024: {
//       // Adjust for tablets or small desktops
//       perPage: 3, // Show 3 slides at a time
//       speed: 6000, // Faster speed on medium screens
//       height: "100px", // Set height for medium screens
//       gap: "8px", // Gap between images
//     },
//     768: {
//       // Adjust for tablets or smaller devices
//       perPage: 2, // Show 2 slides at a time
//       speed: 5000, // Even faster speed on small screens
//       height: "90px", // Adjust height
//       gap: "5px", // Smaller gap for smaller screens
//     },
//     480: {
//       // Adjust for mobile devices
//       perPage: 2, // Show 1 slide at a time for mobile
//       speed: 4000, // Fastest speed on mobile
//       height: "90px", // Smaller height for mobile
//       gap: "3px", // Minimal gap on mobile
//     },
//   },
// });

// splide.mount();

function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        script.setAttribute("crossorigin", "anonymous");
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

function init_execution() {
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 190) {
      $(".register_desktop").fadeIn();
      $(".register_desktop").css("display", "block");
    } else {
      $(".register_desktop").fadeOut();
      $(".register_desktop").css("display", "none");
    }
  });

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    var z = $(window).width();
    if (y > 70 && z < 878) {
      $(".register_mobile").fadeIn();
      $(".register_mobile").css("display", "block");
    } else {
      $(".register_mobile").fadeOut();
      $(".register_mobile").css("display", "none");
    }
  });

  $(document).ready(function () {
    if ("" != "") {
      $("#city").val("");
    }
    if ("IN" != "") {
      $("#country_code > option").each(function () {
        var text = this.text;
        var value = this.value;
        var textArr = text.split(" ");
        if (textArr[0] == "IN") {
          $(this).attr("selected", "selected");
          return false;
        }
      });
    }
    if ("India" != "") {
      $("#country").val("India");
    }
  });

  $(document).ready(function () {
    loadScript(
      "./resources/js/new.js",
      function () { }
    );
    //	loadScript("https://checkout.razorpay.com/v1/checkout.js", function () { });
  });
  // mixpanel.track("page_visit", {
  //   workshop_name: "Yoga Challenge",
  //   activity_code: "page_visit",
  //   source_page: source_page,
  //   current_url_path: "/fb",
  //   current_url_protocol: "https:",
  //   current_domain: "yoga.satvicmovement.org",
  //   UCAMPAIGN: "",
  //   USOURCE: "",
  //   UMEDIUM: "",
  //   UTERM: "",
  //   UCONTENT: "",
  // });

  $(".register-now-track-btn").on("click", function () {
    const eventName = "register_click";
    mixpanel.track(eventName, {
      button_position: $.trim($(this).data("btn")),
      workshop_name: "Yoga Challenge",
      activity_code: "register_click",
      source_page: source_page,
      current_url_path: "/fb",
      current_url_protocol: "https:",
      current_domain: "yoga.satvicmovement.org",
    });
  });
  $(".accordion-button").on("click", function () {
    const eventName = "faq_expand";
    if (!$(this).hasClass("collapsed")) {
      mixpanel.track(eventName, {
        question_number: $.trim($(this).data("q_no")),
        workshop_name: "Yoga Challenge",
        activity_code: "faq_expand",
        source_page: source_page,
        current_url_path: "/fb",
        current_url_protocol: "https:",
        current_domain: "yoga.satvicmovement.org",
      });
    }
  });
  $(".menu-btn").on("click", function () {
    const eventName = "menu_click";
    mixpanel.track(eventName, {
      activity: $.trim($(this).data("menu")),
      workshop_name: "Yoga Challenge",
      activity_code: "menu_click",
      source_page: source_page,
      current_url_path: "/fb",
      current_url_protocol: "https:",
      current_domain: "yoga.satvicmovement.org",
    });
  });

  var checkboxcount = $("div.radio-container input[type=checkbox]").length;
  $("div.radio-container input[type=checkbox]").on("change", function () {
    const eventName = "accepted_terms";
    var checkcount = $(
      "div.radio-container input[type=checkbox]:checked"
    ).length;
    if (checkboxcount == checkcount) {
      mixpanel.track(eventName, {
        workshop_name: "Yoga Challenge",
        activity_code: "accepted_terms",
        source_page: source_page,
        current_url_path: "/fb",
        current_url_protocol: "https:",
        current_domain: "yoga.satvicmovement.org",
      });
    }
  });
  $("#thumb_0").on("click", function () {
    const eventName = "video_click";
    mixpanel.track(eventName, {
      workshop_name: "Yoga Challenge",
      activity_code: "video_click",
      source_page: source_page,
      current_url_path: "/fb",
      current_url_protocol: "https:",
      current_domain: "yoga.satvicmovement.org",
    });
  });
  $("#name").blur(function () {
    const eventName = "start_typing";
    mixpanel.track(eventName, {
      workshop_name: "Yoga Challenge",
      activity_code: "start_typing",
      source_page: source_page,
      current_url_path: "/fb",
      current_url_protocol: "https:",
      current_domain: "yoga.satvicmovement.org",
    });
  });
  if ("fb" == "thankyou") {
    mixpanel.track("thankyou_page", {
      workshop_name: "Yoga Challenge",
      location: "",
      "time-slot": "",
      language: "",
      activity_code: "thankyou_page",
      source_page: source_page,
      current_url_path: "/fb",
      current_url_protocol: "https:",
      current_domain: "yoga.satvicmovement.org",
    });

    $("#welcome_video_0").on("click", function () {
      const eventName = "thankyou_page_Activity";
      mixpanel.track(eventName, {
        workshop_name: "Yoga Challenge",
        activity_code: "thankyou_page_Activity",
        activity: "video",
        source_page: source_page,
        current_url_path: "/fb",
        current_url_protocol: "https:",
        current_domain: "yoga.satvicmovement.org",
      });
    });
  }
  $("#whatsapp_btn").on("click", function () {
    const eventName = "talk_to_us";
    mixpanel.track(eventName, {
      workshop_name: "Yoga Challenge",
      source_page: source_page,
      current_url_path: "/fb",
      current_url_protocol: "https:",
      current_domain: "yoga.satvicmovement.org",
    });
  });
}

let tabs = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".content-item");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => tabClick(i));
}

function tabClick(currentTab) {
  removeActive();
  tabs[currentTab].classList.add("active");
  content[currentTab].classList.add("active");
  console.log(currentTab);
}

function removeActive() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    content[i].classList.remove("active");
  }
}

function openFullscreen(id) {
  var elem = document.getElementById(id);
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
  elem.play();
}

// function youtubeVideoPlay(id, link) {
//   if (id == 0) {
//     $("#thumb_" + id).html(
//       '<iframe loading="lazy" width="100%" height="360" src="' +
//       link +
//       '?autoplay=1" title="YouTube video player" frameborder="0" style="border-radius: 30px; width:636px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//     );
//   } else {
//     $("#thumb_" + id).html(
//       '<iframe loading="lazy" width="100%" src="' +
//       link +
//       '?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//     );
//   }
//   return;
// }
// function thankYouPageYoutubeVideoPlay(id, link) {
//   var iframe_height = $("#welcome_video_0").height();
//   if (id == 0) {
//     $("#welcome_video_" + id).html(
//       '<iframe loading="lazy" src="' +
//       link +
//       '?autoplay=1" title="YouTube video player" frameborder="0" style="width: -webkit-fill-available;width: -moz-available;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;position: relative;top: 7px;height:' +
//       iframe_height +
//       'px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//     );
//   } else {
//     $("#welcome_video_" + id).html(
//       '<iframe loading="lazy" width="100%" src="' +
//       link +
//       '?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//     );
//   }
//   return;
// }

// // --------readmore and less toggle feature -----------

// document.querySelectorAll(".read-more").forEach((button) => {
//   button.addEventListener("click", function () {
//     const textShort = this.previousElementSibling.previousElementSibling; // Selects the short text span
//     const textFull = this.previousElementSibling; // Selects the full text span

//     if (textFull.style.display === "none") {
//       // Show full text and hide short text
//       textShort.style.display = "none";
//       textFull.style.display = "inline";
//       this.innerText = "Read Less";
//     } else {
//       // Show short text and hide full text
//       textShort.style.display = "inline";
//       textFull.style.display = "none";
//       this.innerText = "Read More";
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", function() {
  const accordionButtons = document.querySelectorAll('.accordion-button');
  

  const firstAccordion = document.querySelector('.accordion-collapse.show');
  if (firstAccordion) {
    firstAccordion.style.maxHeight = firstAccordion.scrollHeight + "px"; // Set maxHeight for the open accordion
  }


  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const target = document.querySelector(this.getAttribute('data-bs-target'));

      if (target.classList.contains('show')) {
        // Close the accordion with animation
        target.style.maxHeight = target.scrollHeight + "px"; // Set to current height to animate closing
        requestAnimationFrame(() => {
          target.style.maxHeight = null; // Set to null to trigger collapse
        });
        target.classList.remove('show');
        this.classList.remove('rotate'); 
      } else {
        // Collapse any open accordion first
        document.querySelectorAll('.accordion-collapse.show').forEach(openAccordion => {
          openAccordion.style.maxHeight = openAccordion.scrollHeight + "px"; // Set to current height to animate closing
          requestAnimationFrame(() => {
            openAccordion.style.maxHeight = null; // Set to null to trigger collapse
            openAccordion.classList.remove('show');
          });
          document.querySelector('.accordion-button.rotate')?.classList.remove('rotate');
        });

        // Open the current accordion
        target.classList.add('show'); // Show the current accordion
        target.style.maxHeight = target.scrollHeight + "px"; // Set maxHeight for animation
        this.classList.add('rotate'); 
      }
    });
  });
});


