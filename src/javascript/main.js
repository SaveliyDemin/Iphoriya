let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
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
let menuP = document.querySelector(".menuP");
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
btn2.addEventListener('click', function(){
    afterlogin.style = "display: block;";
});
otmena.addEventListener('click', function(){
    afterlogin.style = "display: none;";
    input1.value = "";
    input2.value = "";
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