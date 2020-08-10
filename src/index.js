import './styles.css';
import data from './menu.json';
import itemTemplates from './templates/item.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
  items: itemTemplates(data),
  body: document.querySelector('body'),
  switchDiv: document.querySelector('.switch'),
  switchInput: document.querySelector('.js-switch-input'),
};

refs.menu.insertAdjacentHTML('afterbegin', refs.items);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switchDiv.addEventListener('click', changeTheme);

function changeTheme() {
  if (refs.switchInput.checked) {
    darkTheme();
    localStorage.setItem('Theme:', Theme.DARK);
  } else {
    lightTheme();
    localStorage.setItem('Theme:', Theme.LIGHT);
  }
}

function darkTheme() {
  refs.switchInput.checked = true;
  refs.body.classList.add('dark-theme');
  refs.body.classList.remove('light-theme');
}

function lightTheme() {
  refs.body.classList.add('light-theme');
  refs.body.classList.remove('dark-theme');
}

getTheme();
function getTheme() {
  const themeCheck = localStorage.getItem('Theme:');
  if (themeCheck === null || themeCheck === 'light-theme') {
    localStorage.setItem('Theme:', Theme.LIGHT);
    lightTheme();
  } else if (themeCheck === 'dark-theme') {
    darkTheme();
  }
}
