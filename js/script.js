// Tabs UI
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.header__inner nav ul li a');
const tabs_mobile = $$('.header__inner-nav_mobile ul li i');
const panes = $$('section');

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    const pane = panes[index];

    $('section.active').classList.remove('active');

    pane.classList.add('active');
  };
});

tabs_mobile.forEach((tab, index) => {
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

