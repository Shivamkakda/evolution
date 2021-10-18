
    var timerid;

    let newss_div = document.getElementById("newss")

    async function searchnews(news_name){

        try{
        let res = await fetch(`https://newsapi.org/v2/everything?q=india&from=2021-09-18&sortBy=publishedAt&apiKey=58c6e916637340c19f07e094ae3f4f9b`)

        let data = await res.json();
        return data
        }catch(e){
            console.log("e:",e)
        }
    }
    function appendnewss(newss){

        if(newss === undefined){
            return false
        }
        newss_div.innerHTML = null;

        newss.forEach(function(news){
            let p = document.createElement("p")
            p.innerText = news.Title

            newss_div.append(p)
        })

    }

 async function main(){

    let name = document.getElementById("news").value;

    //get Search newss
    if(name.length <3){
        return false
    }

  let res = await searchnews(name);

    let newss_data = res.Search;
    appendnewss(newss_data)

  console.log("res:", res)
 }

function debounce( func, delay){

    if(timerid){
    clearTimeout(timerid)
    }

    timerid = setTimeout(function(){
        
        func();

    }, delay)
}
