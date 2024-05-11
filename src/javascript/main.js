let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let foothead = document.querySelector(".foothead");
let header = document.querySelector(".header");
let afterlogin = document.querySelector(".afterlogin");
let otmena = document.querySelector(".otmena");
let input1 = document.querySelector(".input2");
let input2 = document.querySelector(".input4");
let lan = document.querySelector(".btn3");
let lan1 = document.querySelector(".btn4");
let arrow = document.querySelector(".arrow");
let arrow1 = document.querySelector(".arrow1");
let vibor1 = document.querySelector(".vibor1");
let vibor2 = document.querySelector(".vibor2");
let vibor3 = document.querySelector(".vibor3");
let nomer = document.querySelector(".nomer");
let nomerZv= document.querySelector(".nomerZv");
let menuP = document.querySelector(".menuP");
let menusvg = document.querySelector(".menusvg");
let menuP1 = document.querySelector(".menuP1");
let menusvg1= document.querySelector(".menusvg1");
let menu = document.querySelector(".menu");
let menu1 = document.querySelector(".menu1");
let inputpoisk = document.querySelector(".input");
let greeting = document.querySelector(".greeting");
let order = document.querySelector(".order");
let pochta1 = document.querySelector(".pochta1");
let pass1 = document.querySelector(".pass1");
let pafterl = document.querySelector(".pafterl");
let quest = document.querySelector(".quest");
let daxil = document.querySelector(".daxil");
let noakk = document.querySelector(".noakk");
let reges = document.querySelector(".reges");
let menuafterclick = document.querySelector(".menuafterclick");
let btnsentings  = document.querySelector(".btnsentings ");
let sentings  = document.querySelector(".sentings ");
let lighting  = document.querySelector(".lighting");
let svet  = document.querySelector(".svet");
let temn  = document.querySelector(".temn");
let body  = document.querySelector("body");
let X  = document.querySelector("X");
let X1  = document.querySelector("X1");
btnsentings.addEventListener('click', function(){
    sentings.style = "display:block;";
    lighting.style = "display:block;";
    menuafterclick.style = "display:none;";
    
});

lighting.addEventListener('click', function(){
    temn.style = "display:block;";
    svet.style = "display:block;";
    lighting.style = "display:none;";
});
// X.addEventListener('click', function(){
//     menuafterclick.style = "display:none;";
// });
svet.addEventListener('click', function(){
    body.style = "background-color: white;";
    // vibor1.style = "color: #FF0000;";
    // vibor2.style = "color: black;";
    // vibor3.style = "color: black;";
    // nomer.style = "color: black;";
    // nomerZv.style = "color: red;";
    // foothead.style = "border-bottom: 1px solid rgb(226, 226, 226);";
    // header.style = "border-bottom: 1px solid rgb(226, 226, 226);";
});
temn.addEventListener('click', function(){
    body.style = "background-color: #323232;";
    // vibor1.style = "color: white;";
    // vibor2.style = "color: white;";
    // vibor3.style = "color: white;";
    // nomer.style = "color: white;";
    // foothead.style = "border-bottom: 1px solid white;";
    // header.style = "border-bottom: 1px solid white;";
});
btn2.addEventListener('click', function(){
    afterlogin.style = "display: block;";
});
otmena.addEventListener('click', function(){
    afterlogin.style = "display: none;";
    input1.value = "";
    input2.value = "";
}); 
menu.addEventListener('click', function(){
    menu1.style = "display:block;";
    menu.style = "display:none;";
    menu1.style = "display:flex;";
    menuafterclick.style = "display:block;";
    
}); 
menu1.addEventListener('click', function(){
    menu.style = "display:block;";
    menu1.style = "display:none;";
    menu.style = "display:flex;";
    menuafterclick.style = "display:none;";
    sentings.style = "display:none;";
    svet.style = "display:none;";
    temn.style = "display:none;";
}); 
lan.addEventListener('click', function(){
    input1.value = "";
    input2.value = "";
    lan.style = "display: none;";
    lan1.style = "display: block;";
    arrow1.style = "rotate: 180deg; transition: 1s all;";
    vibor1.innerHTML = 'Kampaniya';
    vibor2.innerHTML = 'Mağazalar';
    vibor3.innerHTML = 'Korporativ satışlar';
    btn1.innerHTML = 'Aylıq Ödəniş';
    btn2.innerHTML = 'Daxil ol';
    menuP.innerHTML = 'Katalog';
    greeting.innerHTML = 'Xoş gördük! 👋';
    order.innerHTML = 'Üstünlüklərindən faydalanmaq üçün daxil olun!';
    pochta1.innerHTML = 'Elektron poçt';
    pass1.innerHTML = 'Şifrə';
    pafterl.innerHTML = 'Yadda saxla';
    pafterl.style = "margin: 0 25px 0 0; display:flex; width:100px;";
    quest.innerHTML = 'Şifrənizi unutmusuz?';
    daxil.innerHTML = 'Daxil ol';
    noakk.innerHTML = 'Hesabınız yoxdur?';
    reges.innerHTML = 'Qeydiyyatdan keçin';
});
lan1.addEventListener('click', function(){
    input1.value = "";
    input2.value = "";
    lan.style = "display: block;";
    lan1.style = "display: none;";
    arrow1.style = "rotate: 180deg; transition: 1s all;";
    vibor1.innerHTML = 'Кампания';
    vibor2.innerHTML = 'Магазины';
    vibor3.innerHTML = 'Корпоративные продажи';
    btn1.innerHTML = 'Ежемесячный платеж';
    btn2.innerHTML = 'Войти';
    menuP.innerHTML = 'Меню';
    greeting.innerHTML = 'Привет 👋';
    order.innerHTML = 'Авторизируйтесь чтобы воспользоваться удобствами личного кабинета!';
    pochta1.innerHTML = 'Электронная почта';
    pass1.innerHTML = 'Пароль';
    pafterl.innerHTML = 'Запомнить';
    quest.innerHTML = 'Забыли Ваш пароль?';
    daxil.innerHTML = 'Войти';
    noakk.innerHTML = 'Нет аккаунта?';
    reges.innerHTML = 'Зарегистрируйтусь';
});