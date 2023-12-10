let isModalOpen = false;
let theme = false;
const scaleFactor = 1/15;

function ultraverse() {
    window.location = "https://luis-internship-lpedrosf.vercel.app";
}

function bookLibrary() {
    window.location = "https://book-library-hazel.vercel.app";
}

function twitterClone(){
    window.location = "https://twitter-clone-rouge-seven.vercel.app/";
}

function moveBackground(event){
    const icons = document.querySelectorAll(".icon");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < icons.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        icons[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleThemeMode() {
    theme = !theme;
    if (theme) {
      document.body.classList += " dark-theme";
    }
    else {
      document.body.classList.remove("dark-theme");
    }
}

function contact(event){
    event.preventDefault();
    
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    //template_7kvspbb
    //service_am6zked
    //RpmlIx-q7fZuzADpX
    
    emailjs
        .sendForm(
            'service_am6zked',
            'template_7kvspbb',
            event.target,
            'RpmlIx-q7fZuzADpX'
        ).then(() =>{
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is currently unavailable. Please contact me on lpedrosf02@gmail.com"
        );
    })
}

function toggleModal(){
    if (isModalOpen){
        isModalOpen = !isModalOpen;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}