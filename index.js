import { data } from './data.js';
import { courses } from './cours.js';

const speakersTag = document.getElementById('speakers');
const cours = document.getElementById('program');

function speakers(arg, coursList) {
  Object.keys(data).forEach((key) => {
    arg.innerHTML += `<article class="speaker-items">
            <img class="speaker-img" src=${data[key].photo} width='100px'>
            <div class="speaker-items-section">
                <h3 class="speaker-items-title">${data[key].name}</h3>
                <p class="speaker-items-para-1">${data[key].filds}</p>
                <hr class="peaker-items-para-separate">
                <p class="speaker-items-para-2">${data[key].texte}</p>
            </div>
        </article>`;
  });

  Object.keys(courses).forEach((key) => {
    coursList.innerHTML += `<div class="program-items">
        <img  src="${courses[key].image}" width="30px">
        <div class="program-items-section">
            <h3 class="program-items-title"><a class="program-items-title-link" href="${courses[key].link}">${courses[key].title}</a></h3>
            <p class="program-items-para">${courses[key].texte}</p>
        </div>
     </div>`;
  });
}

function open() {
  document.getElementById('header-link').classList.remove('header-link');
  document.getElementById('header-section').classList.add('header-link-humberger');
  document.getElementById('header-link').classList.add('header-link-show');
  document.getElementById('body').classList.add('bod');
  document.getElementById('humberger').style.display = 'none';
  document.getElementById('humbergerIco').style.display = 'block';
}
function close() {
  document.getElementById('header-link').classList.remove('header-link-show');
  document.getElementById('header-section').classList.remove('header-link-humberger');
  document.getElementById('header-link').classList.add('header-link');
  document.getElementById('humbergerIco').style.display = 'none';
  document.getElementById('humberger').style.display = 'block';
}

document.getElementById('humberger').addEventListener('click', open);
document.getElementById('humbergerIco').addEventListener('click', close);

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    close();
    if (window.innerWidth > 768) {
      document.getElementById('humberger').style.display = 'none';
      document.getElementById('footer').style.display = 'block';
    }
  } else if (document.getElementById('header-link').className === 'header-link-show') {
    document.getElementById('humbergerIco').style.display = 'display';
    document.getElementById('footer').style.display = 'none';
  } else {
    document.getElementById('humberger').style.display = 'block';
    document.getElementById('footer').style.display = 'none';
  }
});
window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    document.getElementById('footer').style.display = 'none';
  }
});
document.getElementById('more').addEventListener('click', () => {
  if (document.getElementById('footer').style.display === 'none') {
    document.getElementById('footer').style.display = 'block';
  } else {
    document.getElementById('footer').style.display = 'none';
  }
});

speakers(speakersTag, cours);