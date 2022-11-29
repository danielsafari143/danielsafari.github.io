import { data, data as Person } from "./data.js";
import {courses} from './cours.js'

const speakersTag = document.getElementById('speakers');
const cours =  document.getElementById('program')

function speakers(arg , coursList){

    Object.keys(data).forEach(key => {

        arg.innerHTML += `<div class="speaker-items">
        <img class="speaker-img" src=${data[key].photo}>
            <div class="speaker-items-section">
                <h3 class="speaker-items-title">${data[key].name}</h3>
                <p class="speaker-items-para-1">${data[key].filds}</p>
                <hr class="peaker-items-para-separate">
                <p class="speaker-items-para-2">${data[key].texte}</p>
            </div>
        </div>` 

      });

      Object.keys(courses).forEach(key => {

        coursList.innerHTML += `<div class="program-items">
        <img  src="${courses[key].image}" width="50px">
        <div class="program-items-section">
            <h3 class="program-items-title"><a class="program-items-title-link" href="${courses[key].link}">${courses[key].title}</a></h3>
            <p class="program-items-para">${courses[key].texte}</p>
        </div>
     </div>` 

      });
   
}

document.getElementById('humberger').addEventListener('click',open);

document.getElementById('humbergerIco').addEventListener('click',close);
function open(){
    document.getElementById('header-link').classList.remove('header-link');
    document.getElementById('header-section').classList.add('header-link-humberger');
    document.getElementById('header-link').classList.add('header-link-show');
    document.getElementById('body').classList.add('bod');
    document.getElementById('humberger').style.display ='none'
    document.getElementById('humbergerIco').style.display = 'block'
}
function close(){
    document.getElementById('header-link').classList.remove('header-link-show');
    document.getElementById('header-section').classList.remove('header-link-humberger');
    document.getElementById('header-link').classList.add('header-link');
    document.getElementById('humbergerIco').style.display = 'none';
    document.getElementById('humberger').style.display ='block';
}

window.addEventListener("resize", function(){

    if(window.innerWidth > 768){
        close()
        if(window.innerWidth > 768){
             document.getElementById('humberger').style.display ='none';
        }
    }
    else{
       
        for (let vare of document.getElementById('header-link').classList){
            if(vare === 'header-link-show' ){
                document.getElementById('humbergerIco').style.display = 'display';
            }
            else{
                document.getElementById('humberger').style.display ='block';
            }  
        }
       
    }
  });
  
speakers( speakersTag , cours)