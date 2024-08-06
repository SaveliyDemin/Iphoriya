let titlebtn = document.querySelector(".titlebtn");
let titlehome = document.querySelector(".titlehome");
//Блоки слов в начале шапки
let menuword1 = document.querySelector(".menuword1");
let menuword2 = document.querySelector(".menuword2");
let menuword2end = document.querySelector(".menuword2end");
let menuword3 = document.querySelector(".menuword3");
let menuword4 = document.querySelector(".menuword4");
//Слова в начале шапки
let menup1 = document.querySelector(".menup1");
let menup2 = document.querySelector(".menup2");
let menup2end = document.querySelector(".menup2end");
let menup3 = document.querySelector(".menup3");
let menup4 = document.querySelector(".menup4");
//Блоки слов в конце шапки
let endword1 = document.querySelector(".endword1");
let endword2 = document.querySelector(".endword2");
//Слова в конце шапки
let endmenup1 = document.querySelector(".endmenup1");
let endmenup2 = document.querySelector(".endmenup2");

let iconsearch = document.querySelector(".iconsearch");
let xmark = document.querySelector(".xmark");

let afterclickbtnsearch = document.querySelector(".afterclickbtnsearch");
let head = document.querySelector(".head");

let iconregistration = document.querySelector(".iconregistration");
let iconregistration1 = document.querySelector(".iconregistration1");
let afterclickperson = document.querySelector(".afterclickperson");

let dophead1 = document.querySelector(".dophead1");
let block = document.querySelector(".block");

let mainreklamformpart1 = document.querySelector(".mainreklamformpart1");
let mainreklamformpart2 = document.querySelector(".mainreklamformpart2");
let mainreklamformpart3 = document.querySelector(".mainreklamformpart3");
let mainreklamformpart4 = document.querySelector(".mainreklamformpart4");

let arrowright1 = document.querySelector(".arrowright1");
let arrowright2 = document.querySelector(".arrowright2");
let arrowright3 = document.querySelector(".arrowright3");
let arrowright4 = document.querySelector(".arrowright4");
let arrowleft1 = document.querySelector(".arrowleft1");
let arrowleft2 = document.querySelector(".arrowleft2");
let arrowleft3 = document.querySelector(".arrowleft3");
let arrowleft4 = document.querySelector(".arrowleft4");

arrowright1.addEventListener('click', function(){
    mainreklamformpart1.style = "display:none;";
    mainreklamformpart2.style = "display:block;display:flex;";
});
arrowright2.addEventListener('click', function(){
    mainreklamformpart2.style = "display:none;";
    mainreklamformpart3.style = "display:block;display:flex;";
});
arrowright3.addEventListener('click', function(){
    mainreklamformpart3.style = "display:none;";
    mainreklamformpart4.style = "display:block;display:flex;";
});
arrowright4.addEventListener('click', function(){
    mainreklamformpart4.style = "display:none;";
    mainreklamformpart1.style = "display:block;display:flex;";
});

arrowleft1.addEventListener('click', function(){
    mainreklamformpart1.style = "display:none;";
    mainreklamformpart4.style = "display:block;display:flex;";
});
arrowleft2.addEventListener('click', function(){
    mainreklamformpart1.style = "display:block;display:flex;";
    mainreklamformpart2.style = "display:none;";
});
arrowleft3.addEventListener('click', function(){
    mainreklamformpart2.style = "display:block;display:flex;";
    mainreklamformpart3.style = "display:none;";
});
arrowleft4.addEventListener('click', function(){
    mainreklamformpart3.style = "display:block;display:flex;";
    mainreklamformpart4.style = "display:none;";
});

iconregistration1.addEventListener('click', function(){
    afterclickperson.style = "display:none;";
    iconregistration1.style = "display:none;";
    iconregistration.style = "display:block;display:flex;";
    menup2end.style = "color: black;";
    menuword2end.style = "display:none;";
    menuword2.style = "display:block;display:flex;";
    dophead1.style = "display:none;";
});

iconregistration.addEventListener('click', function(){
    afterclickperson.style = "display:block;display:flex;";
    iconregistration1.style = "display:block;display:flex;";
    iconregistration.style = "display:none;";
    menup2end.style = "color: black;";
    menuword2end.style = "display:none;";
    menuword2.style = "display:block;display:flex;";
    dophead1.style = "display:none;";
});

iconsearch.addEventListener('click', function(){
    head.style = "display:none;";
    afterclickbtnsearch.style = "display:block;";
    afterclickperson.style = "display:none;";
    iconregistration1.style = "display:none;";
    iconregistration.style = "display:block;display:flex;";
    menup2end.style = "color: black;";
    menuword2end.style = "display:none;";
    menuword2.style = "display:block;display:flex;";
    dophead1.style = "display:none;";
});

xmark.addEventListener('click', function(){
    head.style = "display:block;display:flex;";
    afterclickbtnsearch.style = "display:none;";

});

endword1.addEventListener('click', function(){
    endmenup1.style = "color: rgb(255, 123, 0);";
    endmenup2.style = "color: black;";
    menup1.style = "color: black;";
    menup2.style = "color: black;";
    menup3.style = "color: black;";
    menup4.style = "color: black;";
    afterclickperson.style = "display:none;";
    iconregistration1.style = "display:none;";
    iconregistration.style = "display:block;display:flex;";
    menup2end.style = "color: black;";
    menuword2end.style = "display:none;";
    menuword2.style = "display:block;display:flex;";
    dophead1.style = "display:none;";
});
endword2.addEventListener('click', function(){
    endmenup1.style = "color: black;";
    endmenup2.style = "color: rgb(255, 123, 0);";
    menup1.style = "color: black;";
    menup2.style = "color: black;";
    menup3.style = "color: black;";
    menup4.style = "color: black;";
    afterclickperson.style = "display:none;";
    iconregistration1.style = "display:none;";
    iconregistration.style = "display:block;display:flex;";
    menup2end.style = "color: black;";
    menuword2end.style = "display:none;";
    menuword2.style = "display:block;display:flex;";
    dophead1.style = "display:none;";
});

titlebtn.addEventListener('click', function(){
    titlehome.style = "display:block;display:flex;";
    titlebtn.style = "display:none;";
});

titlehome.addEventListener('click', function(){
    titlebtn.style = "display:block;display:flex;";
    titlehome.style = "display:none;";
})

menuword1.addEventListener('click', function(){
    menup1.style = "color: rgb(255, 123, 0);";
    menup2.style = "color: black;";
    menup3.style = "color: black;";
    menup4.style = "color: black;";
    endmenup1.style = "color: black;";
    endmenup2.style = "color: black;";
    afterclickperson.style = "display:none;";
    iconregistration1.style = "display:none;";
    iconregistration.style = "display:block;display:flex;";
    menup2end.style = "color: black;";
    menuword2end.style = "display:none;";
    menuword2.style = "display:block;display:flex;";
    dophead1.style = "display:none;";
});
menuword2.addEventListener('click', function(){
    menup1.style = "color: black;";
    menup3.style = "color: black;";
    menup4.style = "color: black;";
    endmenup1.style = "color: black;";
    endmenup2.style = "color: black;";
    afterclickperson.style = "display:none;";
    iconregistration1.style = "display:none;";
    iconregistration.style = "display:block;display:flex;";
    menuword2end.style = "display:block;display:flex;";
    dophead1.style = "display:block;display:flex;";
    menup2end.style = "color: rgb(255, 123, 0);";
    menuword2.style = "display:none;";
});
menuword2end.addEventListener('click', function(){
    menup1.style = "color: black;";
    menup3.style = "color: black;";
    menup4.style = "color: black;";
    endmenup1.style = "color: black;";
    endmenup2.style = "color: black;";
    afterclickperson.style = "display:none;";
    iconregistration1.style = "display:none;";
    iconregistration.style = "display:block;display:flex;";
    menuword2end.style = "display:none;";
    menuword2.style = "display:block;display:flex;";
    dophead1.style = "display:none;";

});
menuword3.addEventListener('click', function(){
    menup1.style = "color: black;";
    menup2.style = "color: black;";
    menup3.style = "color: rgb(255, 123, 0);";
    menup4.style = "color: black;";
    endmenup1.style = "color: black;";
    endmenup2.style = "color: black;";
    afterclickperson.style = "display:none;";
    iconregistration1.style = "display:none;";
    iconregistration.style = "display:block;display:flex;";
    menup2end.style = "color: black;";
    menuword2end.style = "display:none;";
    menuword2.style = "display:block;display:flex;";
    dophead1.style = "display:none;";
});
menuword4.addEventListener('click', function(){
    menup1.style = "color: black;";
    menup2.style = "color: black;";
    menup3.style = "color: black;";
    menup4.style = "color: rgb(255, 123, 0);";
    endmenup1.style = "color: black;";
    endmenup2.style = "color: black;";
    afterclickperson.style = "display:none;";
    iconregistration1.style = "display:none;";
    iconregistration.style = "display:block;display:flex;";
    menup2end.style = "color: black;";
    menuword2end.style = "display:none;";
    menuword2.style = "display:block;display:flex;";
    dophead1.style = "display:none;";
});
