//variabler
//let profilbillede1 = document.querySelector("#profilbillede_1");

//let profilbillede2 = document.querySelector("#profilbillede_2");

//let uddannelsesbillede_1 = document.querySelector("#uddannelsebillede1");
//
//let uddannelsesbillede_2 = document.querySelector("#uddannelsebillede2");

let stilArtSiteBillede1 = document.querySelector("#artsAndCraft1");

let stilArtSiteBillede2 = document.querySelector("#artsAndCraft2");




// loader alt på siden inden man kan komme videre
window.addEventListener("load", startVises);


function startVises() {
    console.log("startVises");
    document.querySelector("#menuknap").addEventListener("click", clickMenuKnap);

    //    profilbillede1.addEventListener("mouseover", MouseOverProfilbillede);

    document.querySelector("#profilbillede_1").addEventListener("mouseover", MouseOverProfilbillede);

    document.querySelector("#uddannelsebillede1").addEventListener("mouseover", MouseOverUddannelsebillede);



}




function MouseOverProfilbillede() {


    document.querySelector("#profilbillede_2").classList.remove("hide");
    document.querySelector("#profilbillede_1").classList.add("hide");
    document.querySelector("#profilbillede_2").classList.add("fade_in");

    document.querySelector("#profilbillede_2").addEventListener("mouseout", MouseOutProfilbillede);

}

function MouseOutProfilbillede() {


    profilbillede_2.classList.add("hide");
    profilbillede_1.classList.remove("hide")
    document.querySelector("#profilbillede_1").classList.add("fade_in");
}

// uddannelsebillede
function MouseOverUddannelsebillede() {
    document.querySelector("#uddannelsesbillede2").classList.remove("hide");
    document.querySelector("#uddannelsebillede1").classList.add("hide");
    document.querySelector("#uddannelsesbillede2").classList.add("fade_in");

    document.querySelector("#uddannelsesbillede2").addEventListener("mouseout", MouseOutUddannelseBillede);

}

function MouseOutUddannelseBillede() {
    document.querySelector("#uddannelsesbillede2").classList.add("hide");
    document.querySelector("#uddannelsebillede1").classList.remove("hide")
    document.querySelector("#uddannelsebillede1").classList.add("fade_in");
}



function MouseOutStilArtSiteBillede() {
    document.querySelector("#artsAndCraft2").classList.add("hide");
    document.querySelector("#artsAndCraft1").classList.remove("hide")
}


function clickMenuKnap() {
    console.log("clickMenuKnap");



    document.querySelector("#menuknap").classList.add("hide");
    document.querySelector("#lukkeknap").classList.remove("hide");
    document.querySelector("#menu").classList.remove("hidden");

    // gør så menuen ikke ligger lige oven i knapperne
    document.querySelector("#menu").classList.remove("menudown");
    document.querySelector("#menu").classList.add("menufit");

    document.querySelector("#lukkeknap").addEventListener("click", clickMenuVoek);


}

function clickMenuVoek() {
    console.log("clickMenuVoek");
    document.querySelector("#lukkeknap").classList.add("hide");
    document.querySelector("#menuknap").classList.remove("hide");
    document.querySelector("#menu").classList.add("hidden");

    // gør så menuen ikke ligger lige oven i knapperne
    document.querySelector("#menu").classList.add("menudown");
    document.querySelector("#menu").classList.remove("menufit");

}
