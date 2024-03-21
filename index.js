const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// Tabs
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
  evt.currentTarget.style.borderBottomColor = "#00A991";
  moveLine(evt.currentTarget);
}

