// Tabs UI
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.header__inner nav ul li a');
const panes = $$('section');

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    const pane = panes[index];

    $('section.active').classList.remove('active');

    pane.classList.add('active');
  };
});

// Dark Mode
const darkIcon = document.getElementById('btn-dark');

darkIcon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    darkIcon.setAttribute('class', 'bx bx-sun');
    document.body.style.transition = '.5s';
  } else {
    darkIcon.setAttribute('class', 'bx bx-moon');
  }
};

// Tab Avatar Settings
const avatar = document.getElementById('avatar');

avatar.onclick = function () {
  if (document.getElementById('settings').classList.contains('active')) {
    document.getElementById('settings').classList.remove('active');
  } else {
    document.getElementById('settings').classList.add('active');
  }
};

// Dropdown for Mobile
const btnIcon = $('#btn-menu i');

btnIcon.onclick = () => {
  if (btnIcon.classList.contains('bx-menu')) {
    btnIcon.classList.replace('bx-menu', 'bx-x');
    $('.header__inner nav').setAttribute('style', 'display: block!important;');
  } else {
    btnIcon.classList.replace('bx-x', 'bx-menu');
    $('.header__inner nav').setAttribute('style', 'display: none!important;');
  }
};
