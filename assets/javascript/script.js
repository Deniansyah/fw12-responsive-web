if (window.location.href.endsWith('sing-in.html')) {
    const formLogin = document.getElementsByClassName("form-control")[0];
    const alert = document.getElementsByClassName("alert")[0];

    formLogin.addEventListener("submit", (event) => {
        if (event.target.email.value === "deni@mail.com" && event.target.password.value === "1") {
            window.location = "home.html";
        } else {
            alert.style.display = "inline-block";
        }
        event.preventDefault();
    });

    const hideShow = document.getElementsByName('password')[0];
    const changeEye = document.getElementById("i-eye");
    changeEye.addEventListener("click", () => {
        if (changeEye.dataset.clicked === "false") {
            changeEye.innerHTML = feather.icons["eye-off"].toSvg();
            hideShow.setAttribute('type', 'text');
            changeEye.dataset.clicked = "true";
        } else {
            changeEye.innerHTML = feather.icons["eye"].toSvg();
            hideShow.setAttribute("type", "password");
            changeEye.dataset.clicked = "false";
        }
        });
}else if (window.location.href.endsWith("index.html") || window.location.href.endsWith("/") || window.location.href.endsWith("home.html")) {
    
    
    const data = [
        {
        judul: "Black Widow",
        genre: "Action, Adventure, Sci-Fi",
        link: "detail-movie.html",
        img: "assets/img/film2.png",
        },
        {
        judul: "The Witches",
        genre: "Adventure, Comedi, Family",
        link: "detail-movie.html",
        img: "assets/img/film6.png",
        },
        {
        judul: "Tenet",
        genre: "Action, Sci-Fi",
        link: "detail-movie.html",
        img: "assets/img/film5.png",
        },
        {
        judul: "Spider-Man",
        genre: "Action, Marvel, Sci-Fi",
        link: "detail-movie.html",
        img: "assets/img/film1.png",
        },
        {
        judul: "The Lion King",
        genre: "Adventure, Animation, Family",
        link: "detail-movie.html",
        img: "assets/img/film4.png",
        },
        {
        judul: "Jhon Wick 3",
        genre: "Action, Marvel, Sci-Fi",
        link: "detail-movie.html?id2",
        img: "assets/img/film3.png",
        },
    ];

    data.forEach((data) => {
        const cardwrapper = document.getElementById("card2");

        const crdBr = document.createElement("div");
        crdBr.className = "crd-br";
        cardwrapper.appendChild(crdBr);

        const imgS = document.createElement("div");
        imgS.className = "img-s";
        crdBr.appendChild(imgS);
        const img = document.createElement("img");
        img.src = data.img;
        imgS.appendChild(img);

        const text = document.createElement("div");
        text.className = "text";
        crdBr.appendChild(text);
        const judul = document.createElement("h4");
        judul.innerHTML = data.judul;
        text.appendChild(judul);
        const genre = document.createElement("p");
        genre.innerHTML = data.genre;
        text.appendChild(genre);
        const link = document.createElement("div");
        link.className = "btn";
        const aLink = document.createElement("a");
        aLink.textContent = "Details";
        aLink.setAttribute("href", "movie-detail.html");
        link.appendChild(aLink);
        text.appendChild(link);
    });

    data.forEach((data) => {
        const cardtop = document.getElementById("card");

        const cardInside = document.createElement("div");
        const img = document.createElement("img");
        img.src = data.img;
        cardInside.appendChild(img);

        cardtop.appendChild(cardInside);
    });


}else if (window.location.href.endsWith("sing-up.html") || window.location.href.endsWith("reset-password.html")) {

    const hideShow = document.getElementsByName("password")[0];
    const changeEye = document.getElementById("i-eye");
    changeEye.addEventListener("click", () => {
        if (changeEye.dataset.clicked === "false") {
            changeEye.innerHTML = feather.icons["eye-off"].toSvg();
            hideShow.setAttribute("type", "text");
            changeEye.dataset.clicked = "true";
        } else {
            changeEye.innerHTML = feather.icons["eye"].toSvg();
            hideShow.setAttribute("type", "password");
            changeEye.dataset.clicked = "false";
        }
        });

    const hideShow2 = document.getElementsByName("password2")[0];
    const changeEye2 = document.getElementById("i-eye2");
    changeEye2.addEventListener("click", () => {
        if (changeEye2.dataset.clicked === "false") {
            changeEye2.innerHTML = feather.icons["eye-off"].toSvg();
            hideShow2.setAttribute("type", "text");
            changeEye2.dataset.clicked = "true";
        } else {
            changeEye2.innerHTML = feather.icons["eye"].toSvg();
            hideShow2.setAttribute("type", "password");
            changeEye2.dataset.clicked = "false";
        }
        });

}