
/* ------ Navigation Bar Function ------- */

function MyMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu")
    {
    menuBtn.className +="responsive";
  }
  else{
    manuBtn.className = "nav-menu";
    
  }
}
/* ------ Add Shadow on Navigation Bar While Scrolling ------- */

window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

 
  }
  else
  {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}
/* ------DArk Mode ------- */

   const body = document.querySelector("body"),
   toggleSwitch = document.getElementById("toggle-switch");
   toggleSwitch.addEventListener("click", ()=> {
  body.classList.toggle("dark");
});


/* ------Typing Effect ------- */

 var TypingEffect = new Typed(".typedText",{
  strings:["Web Designer", "Coder", " Web Developer"],

  loop:true,
  typeSpeed:100,
  backSpeed:80,
  backDelay:2000,
 })

/* ------ Scroll Animation ------- */

const sr = scrollReveal({
  origin: 'top',
  Distance: '80px',
  duration:2000,
  reset: true

})
/* ------Home Page ------- */
sr.reveal('.featured-text', {});

sr.reveal('.featured-name', {delay: 100});
sr.reveal('.text-info', {delay: 200});
sr.reveal('.text-btn', {delay: 200});
sr.reveal('.social-icons', {delay: 200});
sr.reveal('.featured-image', {delay: 300});

/* ------ PROJECT BOX ------- */


sr.reveal('.project-box', {interval:200});

/* ------ Top Header ------- */

sr.reveal('.top-header', {});

const srRight = scrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true,
})
srRight.reveal('.skill',{delay:100});
srRight.reveal('.skill-box',{delay:100});


//  change Active Link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop=current.offsetTop - 50,
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('.active-link');
    }else{
      document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('.active-link');
    }
  })
}

window.addEventListener('scroll', scrollActive);


