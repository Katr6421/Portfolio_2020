//variabler

let stilArtSiteBillede1 = document.querySelector("#artsAndCraft1");

let stilArtSiteBillede2 = document.querySelector("#artsAndCraft2");

let text1 = document.querySelector("#text_web");
let textDropDown1 = document.querySelector("#text_dropdown_web");

//ux

let text_knap2 = document.querySelector("#text_knap2");
let textDropDown2 = document.querySelector("#text_dropdown2");

//ux prototype
let text_knap3 = document.querySelector("#text_knap3");
let textDropDown3 = document.querySelector("#text_dropdown3");

// ux designsprint

let text_knap4 = document.querySelector("#text_knap4");
let textDropDown4 = document.querySelector("#text_dropdown4");

//animation assetliste
let text_knap5 = document.querySelector("#text_knap5");
let textDropDown5 = document.querySelector("#text_dropdown5");

// animation shakeit

let text_knap6 = document.querySelector("#text_knap6");
let textDropDown6 = document.querySelector("#text_dropdown6");

//
let text_knap7 = document.querySelector("#text_knap7");
let textDropDown7 = document.querySelector("#text_dropdown7");

//
let text_knap8 = document.querySelector("#text_knap8");
let textDropDown8 = document.querySelector("#text_dropdown8");

//
let text_knap9 = document.querySelector("#text_knap9");
let textDropDown9 = document.querySelector("#text_dropdown9");

let text_knap11 = document.querySelector("#text_knap11");
let textDropDown11 = document.querySelector("#text_dropdown11");

// vis mere knap
let text_knap10 = document.querySelector("#text_knap10");





// loader alt på siden inden man kan komme videre
window.addEventListener("load", startVises);


function startVises() {
    console.log("startVises");
    document.querySelector("#menuknap").addEventListener("click", clickMenuKnap);

    stilArtSiteBillede1.addEventListener("mouseover", MouseOverStilSite);

    //    document.querySelector(".text").addEventListener("click", clickText);

    text1.addEventListener("click", clickText1);

    //ux

    text_knap2.addEventListener("click", clickText2);

    //ux prototype
    text_knap3.addEventListener("click", clickText3);

    //ux design sprint

    text_knap4.addEventListener("click", clickText4);

    //animation
    text_knap5.addEventListener("click", clickText5);

    //
    text_knap6.addEventListener("click", clickText6);

    //
    text_knap7.addEventListener("click", clickText7);

    //
    text_knap8.addEventListener("click", clickText8);

    //
    text_knap9.addEventListener("click", clickText9);

    text_knap11.addEventListener("click", clickText10);

    text_knap10.addEventListener("click", clickVisMere);







}


function clickVisMere() {
    console.log("clickVisMere");

    document.querySelector("#grundloeggende_content_vismere").classList.remove("hide")

    text_knap10.addEventListener("click", clickVisMereVoek);

    text_knap10.removeEventListener("click", clickVisMere);



}

function clickVisMereVoek() {
    console.log("clickVisMereVoek");
    document.querySelector("#grundloeggende_content_vismere").classList.add("hide")
    text_knap10.addEventListener("click", clickVisMere);

}

//textDropDown2.classList.add("hide");
//text_knap2.addEventListener("click", clickText);


function clickText1() {
    console.log("clickText1");

    //web knap
    textDropDown1.classList.remove("hide");

    text1.addEventListener("click", clickTextVoek);

    text1.removeEventListener("click", clickText1);

}

function clickText2() {
    console.log("clickText2");

    // ux knap

    textDropDown2.classList.remove("hide");

    text_knap2.addEventListener("click", clickTextVoek);

    text_knap2.removeEventListener("click", clickText2);

}

function clickText3() {
    console.log("clickText3");

    //ux prototype

    textDropDown3.classList.remove("hide");

    text_knap3.addEventListener("click", clickTextVoek);

    text_knap3.removeEventListener("click", clickText3);

}

function clickText4() {
    console.log("clickText4");

    //ux design sprint

    textDropDown4.classList.remove("hide");
    text_knap4.addEventListener("click", clickTextVoek);
    text_knap4.removeEventListener("click", clickText4);

}

function clickText5() {
    console.log("clickText5");

    //animation assetliste
    textDropDown5.classList.remove("hide");
    text_knap5.addEventListener("click", clickTextVoek);
    text_knap5.removeEventListener("click", clickText5);

}

function clickText6() {
    console.log("clickText6");

    //
    textDropDown6.classList.remove("hide");
    text_knap6.addEventListener("click", clickTextVoek);
    text_knap6.removeEventListener("click", clickText6);

}

function clickText7() {
    console.log("clickText7");

    //
    textDropDown7.classList.remove("hide");
    text_knap7.addEventListener("click", clickTextVoek);
    text_knap7.removeEventListener("click", clickText7);

}

function clickText8() {
    console.log("clickText8");

    //
    textDropDown8.classList.remove("hide");
    text_knap8.addEventListener("click", clickTextVoek);
    text_knap8.removeEventListener("click", clickText8);

}

function clickText9() {
    console.log("clickText9");

    //
    textDropDown9.classList.remove("hide");
    text_knap9.addEventListener("click", clickTextVoek);
    text_knap9.removeEventListener("click", clickText9);

}

function clickText10() {
    console.log("clickText10");

    //
    textDropDown11.classList.remove("hide");
    text_knap11.addEventListener("click", clickTextVoek);
    text_knap11.removeEventListener("click", clickText10);


}



function clickTextVoek() {
    console.log("clickTextVoek");
    document.querySelector(".text_dropdown").classList.add("hide")

    document.querySelector(".text").addEventListener("click", clickText1);

    //ux knap
    textDropDown2.classList.add("hide");
    text_knap2.addEventListener("click", clickText2);

    //ux prototype
    textDropDown3.classList.add("hide");
    text_knap3.addEventListener("click", clickText3);

    //ux design sprint
    textDropDown4.classList.add("hide");
    text_knap4.addEventListener("click", clickText4);

    //animation assetliste
    textDropDown5.classList.add("hide");
    text_knap5.addEventListener("click", clickText5);

    //
    textDropDown6.classList.add("hide");
    text_knap6.addEventListener("click", clickText6);

    //
    textDropDown7.classList.add("hide");
    text_knap7.addEventListener("click", clickText7);

    //
    textDropDown8.classList.add("hide");
    text_knap8.addEventListener("click", clickText8);

    //
    textDropDown9.classList.add("hide");
    text_knap9.addEventListener("click", clickText9);

    textDropDown11.classList.add("hide");
    text_knap11.addEventListener("click", clickText10);


}


function MouseOverStilSite() {
    console.log("MouseOverProfilbillede");
    stilArtSiteBillede2.classList.remove("hide");
    stilArtSiteBillede2.classList.add("fade_in");
    stilArtSiteBillede1.classList.add("hide");

    stilArtSiteBillede2.addEventListener("mouseout", MouseOutStilSite);

}

function MouseOutStilSite() {
    stilArtSiteBillede1.classList.add("fade_in");
    stilArtSiteBillede2.classList.add("hide");
    stilArtSiteBillede1.classList.remove("hide")
}









function clickMenuKnap() {
    console.log("clickMenuKnap");



    document.querySelector("#menuknap").classList.add("hide");
    document.querySelector("#lukkeknap").classList.remove("hide");
    document.querySelector("#menu").classList.remove("hidden");


    document.querySelector("#lukkeknap").addEventListener("click", clickMenuVoek);


}

function clickMenuVoek() {
    console.log("clickMenuVoek");
    document.querySelector("#lukkeknap").classList.add("hide");
    document.querySelector("#menuknap").classList.remove("hide");
    document.querySelector("#menu").classList.add("hidden");


}
