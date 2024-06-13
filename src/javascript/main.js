const btnsearch = document.querySelector(".btnsearch");
const btnsearchxmark = document.querySelector(".btnsearchxmark");
const btnmenu = document.querySelector(".btnmenu");
const btnshop = document.querySelector(".btnshop");
const afterclickbtnsearch = document.querySelector(".afterclickbtnsearch");
const infarmation = document.querySelector(".infarmation");
const search = document.querySelector("input");


btnsearch.addEventListener('click', function(){
    btnsearchxmark.style = "display:block;"
    afterclickbtnsearch.style = "display:block;display:flex;"
    infarmation.style = "display:none;"
    btnsearch.style = "display:none;"

});
btnsearchxmark.addEventListener('click', function(){
    btnsearchxmark.style = "display:none;"
    btnsearch.style = "display:block;"
    afterclickbtnsearch.style = "display:none;"
    infarmation.style = "display:block;display:flex;"
    search.value = "";
});

topbtn.addEventListener('click', tophand );
function tophand(){
    if (window.pageYOffset > 0) {
        window.scrollBy(0,-10)
        setTimeout(tophand, 5)
    }
    
}; 


