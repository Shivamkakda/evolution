// 58c6e916637340c19f07e094ae3f4f9b
//GET https://newsapi.org/v2/everything?q=Apple&from=2021-10-18&sortBy=popularity&apiKey=API_KEY

function home(){
    window.location.href = "home.html";
}
let maincontainer = document.getElementById("mainBox")

async function newsDataAPI(){
    let res = await fetch(`https://newsapi.org/v2/everything?q=us&apiKey=58c6e916637340c19f07e094ae3f4f9b`);
    let data = await res.json();
    console.log(data);
    showNews(data);
}
newsDataAPI();
function showNews(data1){
    maincontainer.innerHTML = null;
    
    data1.articles.forEach((newsdata ) =>{
        let div = document.createElement("div");
        div.setAttribute("class","divss")

        let div2 = document.createElement("div")

            let  des = document.createElement("p")
            des.innerHTML =  newsdata.description
            des.setAttribute("class","text1")

            let date = document.createElement("p")
            date.innerHTML = newsdata.publishedAt

            div2.append(des,date)

        let div1 = document.createElement("div");
       
         let img = document.createElement("img")
         img.src = newsdata.urlToImage;
         img.setAttribute("class","abs")

         let name = document.createElement("p")
            name.innerHTML= newsdata.title

            div1.append(img,name);
            div.append(div2,div1)
            div.onclick = function(){
                showFullResult(data1)
                window.location.href="news.html"
              }
      
        maincontainer.append(div)
    })
}

async function makeSearch(query){
    // query = document.getElementById("searchBox").value;
    let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2021-10-18&sortBy=popularity&apiKey=58c6e916637340c19f07e094ae3f4f9b`);
    let data = await res.json();
    console.log("Data: ", data.articles);
    showResult(data.articles, query);
}

// makeSearch();
var modal = document.getElementById("searchResults")
var span = document.getElementsByClassName("close")[0]

function searrch(){
        modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
  }

let searchInterval = null;

function searchString(delay){
    let  query = document.getElementById("searchBox").value;
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

function showResult(articles, query){
    let parrent = document.getElementById("searchResults");
    parrent.innerHTML = null;

    articles.forEach(({title}, ele) => {
        let div = document.createElement("div");
        div.setAttribute("class", "searchWrapper");
        let titleName = document.createElement("p");
        titleName.textContent = title;
        div.append(titleName);
        div.onclick = function(){
            showFullResult(query);
        }
        parrent.append(div);
    });
}

function showFullResult(query){
    console.log("hi");
    if(localStorage.getItem("news") === null){
        localStorage.setItem("news", JSON.stringify([]));
    }
    else{
        localStorage.setItem("news", JSON.stringify([]));
    }

    let arr = JSON.parse(localStorage.getItem("news"));

    arr.push(query);

    // console.log(arr);

    localStorage.setItem("news", JSON.stringify(arr));

    window.location.href = "search.html";
}
