function home(){
    window.location.href = "home.html";
}
function shoeFullNews(){
    let parrent = document.getElementById("container");
    parrent.innerHTML = null;

    let arr = JSON.parse(localStorage.getItem("news"));
        arr.articles.forEach((newsdata ) =>{
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

        parrent.append(div);
    });
        
}

shoeFullNews();