// segmentasi untuk sign-in.html (untuk validasi form dan hideShow password)
if (window.location.href.endsWith('sing-in.html')) {
    // akses class form-control dan alert untuk membuat validasi form sign-in
    const formLogin = document.getElementsByClassName("form-control")[0];
    const alert = document.getElementsByClassName("alert")[0];

    // memberikan pengkondisian disaat di submit dengan email dan password
    formLogin.addEventListener("submit", (event) => {
        // jika true masuk ke home.html
        if (event.target.email.value === "admin@mail.com" && event.target.password.value === "1") {
            window.location = "home.html";
        } 
        // jika false tampilkan alert dan tidak pindah page
        else {
            alert.style.display = "inline-block";
        }
        // agar tidak ter-refresh
        event.preventDefault();
    });

    // akses input password dan feather icon untuk membuat hide and show password
    const hideShow = document.getElementsByName('password')[0];
    const changeEye = document.getElementById("i-eye");
    // memberikan pengkondisian saat icon di click
    changeEye.addEventListener("click", () => {
        // ubah iconnya dan password terlihat
        if (changeEye.dataset.clicked === "false") {
            changeEye.innerHTML = feather.icons["eye"].toSvg();
            hideShow.setAttribute('type', 'text');
            changeEye.dataset.clicked = "true";
        } 
        // ubah lagi icon dan password kembali tidak terlihat
        else {
            changeEye.innerHTML = feather.icons["eye-off"].toSvg();
            hideShow.setAttribute("type", "password");
            changeEye.dataset.clicked = "false";
        }
        });
}
// segmentasi untuk page index dan home (untuk card dinamis)
else if (window.location.href.endsWith("index.html") || window.location.href.endsWith("/") || window.location.href.endsWith("home.html")) {

    // membuat object untuk isi card film
    const data = [
        {
        judul: "Black",
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

    // menampilkan satu" data yang dibuat di object ke section now showing
    data.forEach((data) => {
        // akses ke pembungkus card
        const cardtop = document.getElementById("card");

        // membuat wadah untuk gambar ke pembukus card
        const cardInside = document.createElement("div");
        cardInside.className = "per-card";
        
        const img = document.createElement("img");
        img.src = data.img;
        // memasukan gambar ke wadah
        cardInside.appendChild(img);

        const text = document.createElement('div');
        text.className = "text";
        cardInside.appendChild(text);

        const judul = document.createElement('h4');
        judul.innerText = data.judul;
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

        // wadah dimasukan ke pembungkus
        cardtop.appendChild(cardInside);
    });


    const getUpcoming = fetch("https://imdb-api.com/en/API/ComingSoon/k_x0h466n8");
    const getData = async () => {

        const response = await getUpcoming;
        const data = await response.json();

        data.items.forEach((value) => {
            const title = value.title
            const image = value.image
            const genres = value.genres
            const cardwrapper = document.getElementById("card2");

            const crdBr = document.createElement("div");
            crdBr.className = "crd-br";
            cardwrapper.appendChild(crdBr);

            const imgS = document.createElement("div");
            imgS.className = "img-s";
            crdBr.appendChild(imgS);
            const img = document.createElement("img");
            img.src = image;
            imgS.appendChild(img);

            const text = document.createElement("div");
            text.className = "text";
            crdBr.appendChild(text);
            
            const judul = document.createElement("h4");
            judul.innerHTML = title;
            text.appendChild(judul);

            const genre = document.createElement("p");
            genre.innerHTML = genres;
            text.appendChild(genre);

            const link = document.createElement("div");
            link.className = "btn";
            const aLink = document.createElement("a");
            aLink.textContent = "Details";
            aLink.setAttribute("href", "movie-detail.html");
            link.appendChild(aLink);
            text.appendChild(link);

        })
    }

    getData()


}
// segmentasi untuk sign-up dan reset password (untuk hideShow password)
else if (window.location.href.endsWith("sing-up.html") || window.location.href.endsWith("reset-password.html")) {

    // akses input password dan feather icon untuk membuat hide and show password
    const hideShow = document.getElementsByName('password')[0];
    const changeEye = document.getElementById("i-eye");
    // memberikan pengkondisian saat icon di click
    changeEye.addEventListener("click", () => {
        // ubah iconnya dan password terlihat
        if (changeEye.dataset.clicked === "false") {
            changeEye.innerHTML = feather.icons["eye"].toSvg();
            hideShow.setAttribute('type', 'text');
            changeEye.dataset.clicked = "true";
        } 
        // ubah lagi icon dan password kembali tidak terlihat
        else {
            changeEye.innerHTML = feather.icons["eye-off"].toSvg();
            hideShow.setAttribute("type", "password");
            changeEye.dataset.clicked = "false";
        }
    });

    // sama juga dengan diatasnya hanya beda id dan class saja
    const hideShow2 = document.getElementsByName("password2")[0];
    const changeEye2 = document.getElementById("i-eye2");
    changeEye2.addEventListener("click", () => {
        if (changeEye2.dataset.clicked === "false") {
            changeEye2.innerHTML = feather.icons["eye"].toSvg();
            hideShow2.setAttribute("type", "text");
            changeEye2.dataset.clicked = "true";
        } else {
            changeEye2.innerHTML = feather.icons["eye-off"].toSvg();
            hideShow2.setAttribute("type", "password");
            changeEye2.dataset.clicked = "false";
        }
        });

}

