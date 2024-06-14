const btnsearch = document.querySelector(".btnsearch");
const btnsearchxmark = document.querySelector(".btnsearchxmark");
const btnmenu = document.querySelector(".btnmenu");
const btnmenuxmark = document.querySelector(".btnmenuxmark");
const btnshop = document.querySelector(".btnshop");
const afterclickbtnsearch = document.querySelector(".afterclickbtnsearch");
const infarmation = document.querySelector(".infarmation");
const search = document.querySelector("input");
const headpart3 = document.querySelector(".headpart3");


btnsearch.addEventListener('click', function(){
    btnsearchxmark.style = "display:block;";
    afterclickbtnsearch.style = "display:block;display:flex;";
    infarmation.style = "display:none;";
    btnsearch.style = "display:none;";

});
btnsearchxmark.addEventListener('click', function(){
    btnsearchxmark.style = "display:none;";
    btnsearch.style = "display:block;";
    afterclickbtnsearch.style = "display:none;";
    infarmation.style = "display:block;display:flex;";
    search.value = "";
});
btnmenu.addEventListener('click', function(){
    btnmenuxmark.style = "display:block;";
    headpart3.style = "display:flex;";
    btnmenu.style = "display:none;";

});
btnmenuxmark.addEventListener('click', function(){
    btnmenu.style = "display:block;";
    btnmenuxmark.style = "display:none;";
    headpart3.style = "display:block;display:none !important;";
});


topbtn.addEventListener('click', tophand );
function tophand(){
    if (window.pageYOffset > 0) {
        window.scrollBy(0,-10)
        setTimeout(tophand, 5)
    }
    
}; 


