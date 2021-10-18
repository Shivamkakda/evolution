// 58c6e916637340c19f07e094ae3f4f9b
//GET https://newsapi.org/v2/everything?q=Apple&from=2021-10-18&sortBy=popularity&apiKey=API_KEY
let maincontainer = document.getElementById("main")

async function newsDataAPI(){
    let res = await fetch(`https://newsapi.org/v2/everything?q=india&from=2021-09-18&sortBy=publishedAt&apiKey=58c6e916637340c19f07e094ae3f4f9b`);
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
               location.href = newsdata.html;
              }
      
        maincontainer.append(div)
    })
}
let cont = document.getElementById("searchbar")
async function newssearch(){
    var title = document.getElementById("title")
    let res = await fetch(`https://newsapi.org/v2/everything?q=${title}&apiKey=58c6e916637340c19f07e094ae3f4f9b`);
    let data = await res.json();
    console.log(data);
    showSearch(data);
}
newssearch();

function showSearch(data1){
    cont.innerHTML = null;
    
    data1.articles.forEach((newsdata2 ) =>{
        let div = document.createElement("div");
        div.setAttribute("class","divss")
        let name = document.createElement("p")
            name.innerHTML= newsdata.title
        div.append(name);
        cont.append(div)
    });
}
