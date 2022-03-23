

const topTitle = document.querySelector('.top-title');

const topText = document.querySelector('.top-text');

const header = document.querySelector('.header');
const tops = document.querySelector('.top');

// header animation
document.addEventListener('DOMContentLoaded', () => {
     topTitle.classList.add('_active');
     topText.classList.add('_active');
     



//form
     const form = document.getElementById('form');
     form.addEventListener('submit', formSend);
     async function formSend(e) {
          e.preventDefault();

          let error = formValidate(form);
            


     }

     function formValidate(form) {
           let error = 0;
           let formReq = document.querySelectorAll('._req');

           for (let i = 0; i < formReq.length; i++) {
                const input = formReq[i];
                formRemoveError(input);
                if(input.classList.contains('_email')) {
                     if(emailTest(input)) {
                          formAddError(input);
                          error++;
                     }
                }else{
                     if(input.value === '') {
                          formAddError(input);
                          error++;
                     }
                }
           }
           return error;
     }

     function formAddError(input) {
           input.parentElement.classList.add('_error');
           input.classList.add('_error');
     }
     function formRemoveError(input) {
         input.parentElement.classList.remove('_error');
         input.classList.remove('_error');
   }

   function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }


});



//header
window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY;
      let topsCenter = tops.offsetHeight / 1.5;
      

      if (scrollTop >= topsCenter) {
           header.classList.add('fixed');
           tops.style.marginTop = `${header.offsetHeight}px`;
      }else {
          header.classList.remove('fixed');
          tops.style.marginTop = `0px`;
      }
});




// phone





const mask = (selector) => {
   

     let setCursorPosition = (pos, elem) => {
         elem.focus();

         if(elem.setSelectionRange) {
              elem.setSelectionRange(pos,pos)
         } else if (elem.createTextRange){
              let range = elem.elem.createTextRange();

              range.collapse(true);
              range.moveEnd('character', pos);
              range.moveStart('character', pos);
              range.select();
         }
     };

     function createMask(event) {
         let matrix = '+380 (__) ___ __ __',
         i = 0,
         def = matrix.replace(/\D/g, ''),
         val = this.value.replace(/\D/g, '');

         if(def.length >= val.length) {
              val = def;
         }


         this.value = matrix.replace(/./g, function(a) {
             return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
         });

         if(event.type === 'blur') {
              if(this.value.length == 4) {
                   this.value = '';
              }
         } else {
              setCursorPosition(this.value.length, this);
         }
     }

     let inputs = document.querySelectorAll(selector);
     inputs.forEach(input => {
          input.addEventListener('input', createMask);
          input.addEventListener('focus', createMask);
          input.addEventListener('blur', createMask);
     })
};



mask('[name="phone"]');





///////////

let formTel = document.getElementById('formTel')
formTel.addEventListener('click', (e) => {
	e.preventDefault()
     if (formTel.value === '+380'){
          console.log(formTel.setSelectionRange(4, 4))
     }

})



////////////

// подсказки дя input
const promt = document.querySelectorAll('.form__input');
for(let key of promt) {
     key.addEventListener('mouseenter', function(event) {
                event.target.setAttribute('autocomplete', 'off')
           });
}



// anchors  прокрутка

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
     anchor.addEventListener('click', function(event) {
          event.preventDefault();
          const blockID  = anchor.getAttribute('href');
          document.querySelector('' + blockID).scrollIntoView({
               behavior: 'smooth',
               block: 'start',
          });
     })
}







//humburger
const hamburger = document.querySelector('.hamburger');
const navUl  = document.querySelector('.nav-ul');
const menuListLink = document.querySelectorAll('.menu-list-link');
let menuOpen = false;
hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
    if(!menuOpen) {
        hamburger.classList.add('open');
        menuOpen = true;
    } else {
        hamburger.classList.remove('open');
        menuOpen = false;
    }
    
});



for (let i = 0; i < menuListLink.length; i++) {
    
    menuListLink[i].addEventListener('click', function() {
          
        hamburger.classList.remove('open');
              navUl.classList.remove('show')
              menuOpen = false;
    });
}












/////////////////////////////////////////////////




   




////////////////////////////////////////////////////////////////////////////////////////////