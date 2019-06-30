
let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");

let mapLink = document.querySelector(".contacts-button-map");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close");

let form = popup.querySelector("form"); 
let login = popup.querySelector("[name=login]");
let password = popup.querySelector("[name=password]"); 

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", (evt) => {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus(); 
    }
}); 



close.addEventListener("click", (evt) => {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    
});

form.addEventListener("submit", (evt) => {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }

});

mapLink.addEventListener("click", (evt) => {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", (evt) => {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    
});

window.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});