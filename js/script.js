/*Бургер*/
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
  })

  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.header-container__nav-menu').classList.toggle('active');
  })

  document.querySelector('.burger span.active').addEventListener('click', function () {
    document.querySelector('.header-container__nav-menu.active').classList.remove('active');
  })
});


/*Табы*/

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
});

/*Слайдер*/

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
});

$(".selector").accordion({
  collapsible: true
});
