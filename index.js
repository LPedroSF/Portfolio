let isModalOpen = false;
let theme = false;

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