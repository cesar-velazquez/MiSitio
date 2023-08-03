function showLabel() {    
    const cuadro = document.querySelector('#lab__Name');
    const email = document.querySelector("#inp__email");
    const asunto = document.querySelector('#inp__asunto');

    document.addEventListener("DOMContentLoaded", function() {
        const inputemail = document.getElementById('input__email');
        inputemail.addEventListener("focus", function () {
            this.removeAttribute("placeholder");
            email.classList.remove('label__form');
        });
        inputemail.addEventListener("blur", function () {
            if (this.value.trim() === ""){
                this.setAttribute("placeholder", "Email");
                email.classList.add('label__form');
            }
        })
    })
// ---------------------------------------------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
        const input = document.getElementById("label__Name");

        input.addEventListener("focus", function () {
            // Al dar clic en el input, eliminar el atributo placeholder
            this.removeAttribute("placeholder");
            cuadro.classList.remove('label__form');            
        });

        input.addEventListener("blur", function () {
            // Si el input pierde el foco y está vacío, restaurar el placeholder
            if (this.value.trim() === "") {
                this.setAttribute("placeholder", "Nombre");
                cuadro.classList.add('label__form');
            }
        });
// ------------------------------------------------------------------------------
    });

    document.addEventListener("DOMContentLoaded", function () {
        const inputasunto = document.getElementById("input__asunto");
    
        inputasunto.addEventListener("focus", function () {
            this.removeAttribute("placeholder");
            asunto.classList.remove('label__form');
        });
        inputasunto.addEventListener("blur", function () {
            if(this.value.trim() === ""){
                this.setAttribute("placeholder", "Asunto");
                asunto.classList.add('label__form');
            }
        });
    });
    
}

function changeMode() {
    const changeThemeHtml = document.querySelector('#changeTheme');
    const changeIconHtml = document.getElementById('changeTheme');

    changeThemeHtml.addEventListener("click", function () {
        document.body.classList.toggle("darkmode");

        const Darkmode = document.body.classList.contains("darkmode");
        localStorage.setItem("theme", Darkmode ? "dark" : "light");
    });
    changeIconHtml.addEventListener("click", function () {
        const icon = changeIconHtml.querySelector('i');
        if (icon.classList.contains('bxs-moon')) {
            icon.classList.remove('bxs-moon');
            icon.classList.add('bxs-sun');
        } else {
            icon.classList.remove('bxs-sun');
            icon.classList.add('bxs-moon');
        }
    });
}

// GUARDAR EL DARKMODE  
window.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        this.document.body.classList.add("darkmode");
    }
});

function hiddennav() {
    window.addEventListener("scroll", function () {
        let navbar = document.getElementById("navbar");

        if (window.scrollY) {
            navbar.classList.add("transparent");
            navbar.classList.remove("scrolled");
        } else {
            navbar.classList.add("scrolled");
            navbar.classList.remove("transparent");
        }
    });
}

function ShowProjects() {
    let buttons = document.querySelectorAll('.btn__expandir');
    let showContent = document.querySelectorAll('.expandir')
    buttons.forEach((elemento, clave) =>{
        elemento.addEventListener('click', ()=>{            
            showContent[clave].classList.toggle("abrir__cerrar")
        })
    })
}



    function ShowMenu() {
        const showmenu = document.querySelector(".menu_hidden");
        const icon = document.querySelector(".bx-menu");
        const li = document.querySelectorAll(".menu_hidden li");

        function controllerMenu() {
            showmenu.classList.toggle("menu__show");
        }
        icon.addEventListener("click", controllerMenu);

        li.forEach((link) =>{
            window.addEventListener("click", function (e) {
                if(!showmenu.contains(e.target) && !icon.contains(e.target)){
                    showmenu.classList.remove("menu__show");
                }
            })
        })
    }


async function main() {
    changeMode();
    hiddennav();
    showLabel();
    ShowProjects();
    ShowMenu();
}
main();