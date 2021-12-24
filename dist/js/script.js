const scrollWin = () => {
    const facebook = document.querySelector ('.facebook > svg > path');
    const instgram = document.querySelector ('.instgram > svg > path');
    const github = document.querySelector ('.github > svg > path');
    const divider = document.querySelector ('.sidepanel__divider');
    const text = document.querySelector ('.sidepanel__text');

    facebook.style.fill = '#000';
    instgram.style.fill = '#000';
    github.style.fill = '#000';
    divider.style.background = '#000';
    text.style.color = '#000';

    console.log(facebook);
    console.log(divider);
    console.log(text);
};

const openMenu = () => {

    const humburger = document.querySelector ('.menu__btn');
    const menu = document.querySelector ('.menu');
    const overlay = document.querySelector ('.menu__overlay');

    let isOpen = false;

    humburger.addEventListener('click', () => {
        isOpen = !isOpen;

        if(isOpen) {
            humburger.classList.add('menu__btn_active');
            menu.classList.add('menu_active');
        }
        else {
           humburger.classList.remove('menu__btn_active');
           menu.classList.remove('menu_active');   
        }
    }); 

   
    window.addEventListener("keydown", (e) => {
        if (e.key == 'Escape') {
                    menu.classList.remove('menu_active');
                    humburger.classList.remove('menu__btn_active');
        }
    });

    window.addEventListener('click', (e) => {
        if (e.target == overlay) {
            menu.classList.remove('menu_active');
            humburger.classList.remove('menu__btn_active');
        }
    });
};



openMenu ();
/* scrollWin(); */
