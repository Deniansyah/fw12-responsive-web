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
}else if (window.location.href.endsWith("index.html") || window.location.href.endsWith("/") || window.location.href.endsWith("home.html")) {
    const data = [
        {
        judul: "Spider-Man",
        genre: "Action, Adventure, Sci-Fi",
        link: "detail-movie.html?id1",
        },
        {
        judul: "Black Widow",
        genre: "Action, Marvel, Sci-Fi",
        link: "detail-movie.html?id2",
        },
        {
        judul: "Spider-Man",
        genre: "Action, Adventure, Sci-Fi",
        link: "detail-movie.html?id1",
        },
        {
        judul: "Black Widow",
        genre: "Action, Marvel, Sci-Fi",
        link: "detail-movie.html?id2",
        },
        {
        judul: "Spider-Man",
        genre: "Action, Adventure, Sci-Fi",
        link: "detail-movie.html?id1",
        },
        {
        judul: "Black Widow",
        genre: "Action, Marvel, Sci-Fi",
        link: "detail-movie.html?id2",
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
        img.src = "assets/img/film1.png";
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
        img.src = "assets/img/film1.png";
        cardInside.appendChild(img);

        cardtop.appendChild(cardInside);
    });

}