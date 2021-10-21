function home(){
    window.location.href = "home.html";
}
async function makeSearch(query){
    // let query = document.getElementById("searchBox").value;

    let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2021-10-18&sortBy=popularity&apiKey=a763c91642a9436fbfca86d0e7e81c99`);
    let data = await res.json();
    console.log("Data: ", data.articles);
    showFullResult(data.articles)
    showResult(data.articles);
}
if(localStorage.getItem("news") === null){
    localStorage.setItem("news", JSON.stringify([]));
}
else{
    localStorage.setItem("news", JSON.stringify([]));
}

let arr = JSON.parse(localStorage.getItem("news"));
makeSearch("ipl");

let searchInterval = null;

function searchString(delay){
    let query = document.getElementById("searchBox").value;

    let searchResults = document.getElementById ("searchResults");
    if(query.length < 1){
        searchResults.style.display = "none";
    }
    else{
        searchResults.style.display = "flex";
    }
    if(searchInterval !== null){
        clearTimeout(searchInterval);
    }

    searchInterval = setTimeout(function(){
        makeSearch(query);
    }, delay)
}

function showResult(articles){
    let parrent = document.getElementById("searchResults");
    parrent.innerHTML = null;

    articles.forEach(({title}) => {
        let div = document.createElement("div");
        div.setAttribute("class", "searchWrapper");
        let titleName = document.createElement("p");
        titleName.textContent = title;
        div.append(titleName);
        div.onclick = function(){
            showFullResult(articles);
        }
        parrent.append(div);
    });
}

function showFullResult(articles){
    let parrent = document.getElementById("container");
    parrent.innerHTML = null;

    articles.forEach( ({title, urlToImage, description, author, publishedAt}, element)  => {
        // console.log(articles[element]);
        let wrapper = document.createElement("div");
        wrapper.onclick = function(){
            changePageToNewsDet(articles[element]);
        }
        wrapper.setAttribute("class", "wrapper");

        let div = document.createElement("div");
        let img  = document.createElement("img");
        img.src = urlToImage;
        div.append(img);

        let div2 = document.createElement("div");
        // div.setAttribute("class", "searchWrapper");

        let heading = document.createElement("h3");
        heading.textContent = title;
        let discription = document.createElement("p");
        discription.textContent = description;

        let authorName = document.createElement("p");
        authorName.textContent = author;

        let date = document.createElement("p");
        date.textContent = publishedAt;

        div2.append(heading, discription, authorName, date);

        wrapper.append(div, div2);

        parrent.append(wrapper);
    });
}

function changePageToNewsDet(element){
    // console.log(element);
    if(localStorage.getItem("news") === null){
        localStorage.setItem("news", JSON.stringify([]));
    }
    else{
        localStorage.setItem("news", JSON.stringify([]));
    }

    let arr = JSON.parse(localStorage.getItem("news"));

    arr.push(element);

    // console.log(arr);

    localStorage.setItem("news", JSON.stringify(arr));

    window.location.href = "news.html";
}
function home(){
    window.location.href = "home.html";
}