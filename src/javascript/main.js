const ginbtn1 = "Ежемесяцный платеж";
const ginbtn2 = "Регестрация";
const gininput = "Строка поиска";
const ginmenu = "Меню";
const ginmenusen = "Настойки";
const ginmenulig = "Освещение";
const ginmenurev = "Отзыв";
const ginaboutcomp = "О компании";
const ginlan = "Смена языка на Азербайджанский";
const ginlan1 = "Смена языка на Русский";
const dopgl = document.querySelector(".dop-gl");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const foothead = document.querySelector(".foothead");
const header = document.querySelector(".header");
const afterlogin = document.querySelector(".afterlogin");
const otmena = document.querySelector(".otmena");
const input1 = document.querySelector(".input2");
const input2 = document.querySelector(".input4");
const lan = document.querySelector(".btn3");
const lan1 = document.querySelector(".btn4");
const arrow = document.querySelector(".arrow");
const arrow1 = document.querySelector(".arrow1");
const vibor1 = document.querySelector(".vibor1");
const vibor2 = document.querySelector(".vibor2");
const vibor3 = document.querySelector(".vibor3");
const nomer = document.querySelector(".nomer");
const nomerZv= document.querySelector(".nomerZv");
const menuP = document.querySelector(".menuP");
const menusvg = document.querySelector(".menusvg");
const menuP1 = document.querySelector(".menuP1");
const menusvg1= document.querySelector(".menusvg1");
const menu = document.querySelector(".menu");
const menu1 = document.querySelector(".menu1");
const inputpoisk = document.querySelector(".input");
const greeting = document.querySelector(".greeting");
const order = document.querySelector(".order");
const pochta1 = document.querySelector(".pochta1");
const pass1 = document.querySelector(".pass1");
const pafterl = document.querySelector(".pafterl");
const quest = document.querySelector(".quest");
const daxil = document.querySelector(".daxil");
const noakk = document.querySelector(".noakk");
const reges = document.querySelector(".reges");
const menuafterclick = document.querySelector(".menuafterclick");
const btnsentings = document.querySelector(".btnsentings ");
const sentings = document.querySelector(".sentings ");
const lighting = document.querySelector(".lighting");
const svet = document.querySelector(".svet");
const temn = document.querySelector(".temn");
const body = document.querySelector("body");
const X = document.querySelector("X");
const X1 = document.querySelector("X1");
const topbtn = document.querySelector(".topbtn");
const review = document.querySelector(".review");
const afterclickreview = document.querySelector(".afterclickreview");
const btnreview = document.querySelector(".btnreview");
const revemailinp = document.querySelector(".revemailinp");
const reviewinp = document.querySelector(".reviewinp");
const formarev = document.querySelector(".formarev");
const rewiewlookpar = document.querySelector(".rewiewlook1");
const rewiewinpval = document.querySelector(".rewiewinpval");
const reviewlook = document.querySelector(".reviewlook");
const reviewposlook = document.querySelector(".reviewposlook");
const afterclickprice = document.querySelector(".afterclickprice");
const afterclickprice1 = document.querySelector(".afterclickprice1");
const input = document.querySelector(".input");
const otmenaprice = document.querySelector(".otmenaprice");
const container = document.querySelector(".container");
const btninput = document.querySelector(".btninput");
const minifoothead = document.querySelector(".minifoothead");
const main1 = document.querySelector("main");
const company = document.querySelector(".company");
const aboutcompany = document.querySelector(".aboutcompany");
const ktomititle = document.querySelector(".ktomititle");
const aboutcompanyotmena = document.querySelector(".aboutcompanyotmena");


aboutcompanyotmena.addEventListener('click', function(){
    main1.style = "display:none;";
    
});
nomer.addEventListener('click', function(){
    alert("Вы уверены что хотите позвонить нам")
});
company.addEventListener('click', function(){
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya">${ginaboutcomp}</h3>
    `
    menuafterclick.style = "display:none;";
    main1.style = "display:block;display: flex;";
    menu1.style = "display:none;";
    menu.style = "display:block;display:flex;";
});
input.addEventListener('click', function(){
    btninput.style = "display:block;";
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya">${gininput}</h3>
    `
});
btninput.addEventListener('click', function(){
    if (input.value != "" ) {
        let inputpoiskvalue = input.value;
        

        dopgl.innerHTML =
        `
            <h3 class="dop-glavnaya">Результат поиска для "${inputpoiskvalue}"</h3>
        `
        input.value = "";
    }
    else{
        dopgl.innerHTML =
        `
            <h3 class="dop-glavnaya">Не найдено</h3>
        `
    }
    

});
afterclickprice1.addEventListener('click', function(){
    btninput.style = "display:none;";
});
header.addEventListener('click', function(){
    btninput.style = "display:none;";
    
});


btn1.addEventListener('click', function(){
    // minifoothead = "display:block;";
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya">${ginbtn1}</h3>
    `
    topbtn.style = "background-color:rgb(49, 48, 45); color:white; ";
    ktomititle.style = "background-color: whitesmoke;color: #000000;display:flex;";
    aboutcompany.style = "background-color: whitesmoke;color: black;";
    main1.style = "display:none;";
    container.style = "display:block;";
    afterclickprice.style = "display:block;";
    body.style = "background-color: #4b55632d;";
    foothead.style = "background-color: #4b55632d;";
    header.style = "background-color: #4b55632d;";
    menuafterclick.style = "display:none;";
    afterlogin.style = "display:none;";
    sentings.style = "display:none;";
    afterclickreview.style = "display:none;";
    menu.style = "display:block;display:flex;";
    menu1.style = "display: none;";
    afterlogin.style = "display:none;";
    btninput.style = "display:none;";
    minifoothead.style = "background-color: #4b55632d;";
});
otmenaprice.addEventListener('click', function(){
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya"></h3>
    `
    afterclickprice.style = "display:none;";
    body.style = "background-color: white";
    foothead.style = "background-color: rgb(252, 252, 252);";
    header.style = "background-color: rgb(252, 252, 252);";
    container.style = "display:none;";
    minifoothead.style = "background-color: #fafafa;";
});
topbtn.addEventListener('click', tophand );
// window.addEventListener('scroll', namewindow); 
function tophand(){
    if (window.pageYOffset > 0) {
        window.scrollBy(0,-10)
        setTimeout(tophand, 5)
    }
    
};  
// function namewindow(){
//     const offset = window.pageYOffset;
//     const myheight = document.documentElement.clientHeight;
//     if (offset > myheight) {
//         topbtn.classList.add("topbtnblock");
//     }
//     else{
//         topbtn.classList.remove("topbtnblock");
//     };

    
// }; 
if (reviewinp.value != "" || reviewinp.value != " " || reviewinp.value != "  " || reviewinp.value != "   "|| reviewinp.value != "    ") {
    review.addEventListener('click', function(){
        dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya">${ginmenu}</h3>
        <svg class="arrowto9" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M0.739665 0.200408C0.436132 0.48226 0.418556 0.956809 0.700408 1.26034L4.22652 5L0.700408 8.73967C0.418556 9.0432 0.436132 9.51775 0.739665 9.7996C1.0432 10.0815 1.51775 10.0639 1.7996 9.76034L5.7996 5.51034C6.0668 5.22258 6.0668 4.77743 5.7996 4.48966L1.7996 0.239665C1.51775 -0.0638681 1.0432 -0.081444 0.739665 0.200408Z" fill="#323232"></path>
        </svg>
        <h3 class="dop-glavnaya1">${ginmenurev}</h3>

    `
        afterclickreview.style = "display:block;";
        menuafterclick.style = "display:none;";
        sentings.style = "display:none;";
        afterlogin.style = "display: none;";
    });
    
    
    btnreview.addEventListener('click', function(){
        const emailinpval = revemailinp.value;
        const reviewinpval = reviewinp.value;
        revemailinp.value = "";
        reviewinp.value = "";
        formarev.innerHTML = 
        `
            <div class="posle">
                <p>Вы уже отправили письмо!</p>
            </div>
            <div class="reviewlook">
                <p class="rewiewlook1">Вот ваше письмо которое вы отправили</p>
            </div>
            <div class="reviewposlook">
                <p class="rewiewposlook1">${reviewinpval}</p>
            </div>
        `
    
    });
}

// reviewlook.addEventListener('click', function(){
//     reviewposlook.style = "display:block;";
// });
// reviewinpval.addEventListener('click', function(){
//     formarev.innerHTML = 
//     `
//         <p class="reviewinpval">${reviewinpval}</p>
//     `
    
// });
btnsentings.addEventListener('click', function(){
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya">${ginmenu}</h3>
        <svg class="arrowto9" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M0.739665 0.200408C0.436132 0.48226 0.418556 0.956809 0.700408 1.26034L4.22652 5L0.700408 8.73967C0.418556 9.0432 0.436132 9.51775 0.739665 9.7996C1.0432 10.0815 1.51775 10.0639 1.7996 9.76034L5.7996 5.51034C6.0668 5.22258 6.0668 4.77743 5.7996 4.48966L1.7996 0.239665C1.51775 -0.0638681 1.0432 -0.081444 0.739665 0.200408Z" fill="#323232"></path>
        </svg>
        <h3 class="dop-glavnaya1">${ginmenusen}</h3>

    `
    sentings.style = "display:block;";
    lighting.style = "display:block;";
    svet.style = "display:none;";
    temn.style = "display:none;";
    menuafterclick.style = "display:none;";
    afterlogin.style = "display: none;";
    
});

lighting.addEventListener('click', function(){
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya">${ginmenu}</h3>
        <svg class="arrowto9" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M0.739665 0.200408C0.436132 0.48226 0.418556 0.956809 0.700408 1.26034L4.22652 5L0.700408 8.73967C0.418556 9.0432 0.436132 9.51775 0.739665 9.7996C1.0432 10.0815 1.51775 10.0639 1.7996 9.76034L5.7996 5.51034C6.0668 5.22258 6.0668 4.77743 5.7996 4.48966L1.7996 0.239665C1.51775 -0.0638681 1.0432 -0.081444 0.739665 0.200408Z" fill="#323232"></path>
        </svg>
        <h3 class="dop-glavnaya1">${ginmenusen}</h3>
        <svg class="arrowto10" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M0.739665 0.200408C0.436132 0.48226 0.418556 0.956809 0.700408 1.26034L4.22652 5L0.700408 8.73967C0.418556 9.0432 0.436132 9.51775 0.739665 9.7996C1.0432 10.0815 1.51775 10.0639 1.7996 9.76034L5.7996 5.51034C6.0668 5.22258 6.0668 4.77743 5.7996 4.48966L1.7996 0.239665C1.51775 -0.0638681 1.0432 -0.081444 0.739665 0.200408Z" fill="#323232"></path>
        </svg>
        <h3 class="dop-glavnaya2">${ginmenulig}</h3>

    `
    temn.style = "display:block;";
    svet.style = "display:block;";
    lighting.style = "display:none;";
    afterlogin.style = "display: none;";
});
// X.addEventListener('click', function(){
//     menuafterclick.style = "display:none;";
// });
svet.addEventListener('click', function(){
    body.style = "background-color: white;";
    header.style = "background-color: rgb(252, 252, 252);";
    foothead.style = ": background-color: rgb(252, 252, 252);";
    topbtn.style = "background-color:rgb(49, 48, 45); color:white; ";
    ktomititle.style = "background-color: whitesmoke;color: #000000;display:flex;";
    aboutcompany.style = "background-color: whitesmoke;color: #000000;";
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
    header.style = "background-color: #c9c9c9;";
    foothead.style = "background-color: #c9c9c9;";
    topbtn.style = "background-color: white; color:rgb(49, 48, 45);";
    ktomititle.style = "background-color: grey;color: white ;display:flex;";
    aboutcompany.style = "background-color: grey;color: white;";
    // vibor1.style = "color: white;";
    // vibor2.style = "color: white;";
    // vibor3.style = "color: white;";
    // nomer.style = "color: white;";
    // foothead.style = "border-bottom: 1px solid white;";
    // header.style = "border-bottom: 1px solid white;";
});
btn2.addEventListener('click', function(){
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya">${ginbtn2}</h3>
    `
    topbtn.style = "background-color:rgb(49, 48, 45); color:white; ";
    ktomititle.style = "background-color: whitesmoke;color: #000000;display:flex;";
    aboutcompany.style = "background-color: whitesmoke;color: #000000;";
    main1.style = "display:none;";
    afterlogin.style = "display: block;";
    menuafterclick.style = "display: none;";
    sentings.style = "display: none;";
    lighting.style = "display: none;";
    afterclickreview.style = "display: none;";
    menu1.style = "display: none;";
    menu.style = "display: block;";
    menu.style = "display:flex;";
    afterclickprice.style = "display:none;";
    container.style = "display:block;";
    body.style = "background-color: #00000021;";
    btninput.style = "display:none;";
});
otmena.addEventListener('click', function(){
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya"></h3>
    `
    main1.style = "display:none;";
    afterlogin.style = "display: none;";
    container.style = "display:none;";
    body.style = "background-color: white;";
    input1.value = "";
    input2.value = "";
}); 
menu.addEventListener('click', function(){
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya">${ginmenu}</h3>
        <svg class="arrowto9" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M0.739665 0.200408C0.436132 0.48226 0.418556 0.956809 0.700408 1.26034L4.22652 5L0.700408 8.73967C0.418556 9.0432 0.436132 9.51775 0.739665 9.7996C1.0432 10.0815 1.51775 10.0639 1.7996 9.76034L5.7996 5.51034C6.0668 5.22258 6.0668 4.77743 5.7996 4.48966L1.7996 0.239665C1.51775 -0.0638681 1.0432 -0.081444 0.739665 0.200408Z" fill="#323232"></path>
        </svg>
    `
    main1.style = "display:none;";
    menu1.style = "display:block;";
    menu.style = "display:none;";
    menu1.style = "display:flex;";
    menuafterclick.style = "display:block;";
    afterlogin.style = "display: none;";
    afterclickprice.style = "display: none;";
    btninput.style = "display:none;";
}); 
menu1.addEventListener('click', function(){
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya"></h3>
    `
    menu.style = "display:block;";
    menu1.style = "display:none;";
    menu.style = "display:flex;";
    menuafterclick.style = "display:none;";
    sentings.style = "display:none;";
    svet.style = "display:none;";
    temn.style = "display:none;";
    afterclickreview.style = "display:none;";
    btninput.style = "display:none;";
}); 
lan.addEventListener('click', function(){
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya">${ginlan}</h3>
    `
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
    menuP1.innerHTML = 'Katalog';
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
    btninput.style = "display:none;";
});
lan1.addEventListener('click', function(){
    dopgl.innerHTML =
    `
        <h3 class="dop-glavnaya">${ginlan1}</h3>
    `
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
    menuP1.innerHTML = 'Меню';
    greeting.innerHTML = 'Привет 👋';
    order.innerHTML = 'Авторизируйтесь чтобы воспользоваться удобствами личного кабинета!';
    pochta1.innerHTML = 'Электронная почта';
    pass1.innerHTML = 'Пароль';
    pafterl.innerHTML = 'Запомнить';
    quest.innerHTML = 'Забыли Ваш пароль?';
    daxil.innerHTML = 'Войти';
    noakk.innerHTML = 'Нет аккаунта?';
    reges.innerHTML = 'Зарегистрируйтусь';
    btninput.style = "display:none;";
});