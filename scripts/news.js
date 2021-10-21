function home(){
    window.location.href = "home.html";
}
function shoeFullNews(){
    let parrent = document.getElementById("container");
    parrent.innerHTML = null;

    let data2 = JSON.parse(localStorage.getItem("news"));
    data2.articles.forEach(({title, author, publishedAt, urlToImage, content}) => {
    
        let wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapper");
        
        let div = document.createElement("div");
        let heading = document.createElement("h1");
        heading.textContent = title;
        div.append(heading);

        let div2 = document.createElement("div");
        let authorName = document.createElement("p");
        authorName.style.fontWeight = "bold";
        authorName.textContent = author;

        let date = document.createElement("p");
        date.textContent = publishedAt;
        div2.append(authorName, date);

        let div3 = document.createElement("div");
        let img  = document.createElement("img");
        img.src = urlToImage;
        div3.append(img);

        let div4 = document.createElement("div");
        let discription = document.createElement("p");
        discription.style.fontSize = "20px";
        discription.style.letterSpacing = "1px";
        discription.textContent = content;
        div4.append(discription);

        wrapper.append(div, div2, div3, div4);

        parrent.append(wrapper);
    });
        
}

shoeFullNews();