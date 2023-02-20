// Type Write Effect
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 200;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 200;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}
document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
}

//Menu Bar
$(document).ready(function(){
  $('.menu-toggle').click(function()
  {
   $('nav').toggleClass('active').show();
  })   
  
});
$(document).ready(function(){
  $('nav li a').on('click', function()
  {
    $('nav').slideDown('slow');
    $('nav').toggleClass('active');
  });
});


$(window).resize(function() {
  if ($(this).width() > 500) {
      $('nav').show(); 
  }
});

/*LOGINNNNNNNN*/
const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

/*---------------------*/
// // Get DOM Elements
// const modal = document.querySelector('#login');
// const modalBtn = document.querySelector('#text-center');
// const closeBtn = document.querySelector('.close');

// // Events
// modalBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', outsideClick);

// // Open
// function openModal() {
//   modal.style.display = 'block';
// }

// // Close
// function closeModal() {
//   modal.style.display = 'none';
// }

// // Close If Outside Click
// function outsideClick(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }


/*modal*/

// Get DOM Elements

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Close
function closeModal() {
  modal.style.display = 'none';
  document.body.style.removeProperty('overflow');
}

// // Close If Outside Click
// function outsideClick(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }
