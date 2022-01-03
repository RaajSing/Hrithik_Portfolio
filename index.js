// Scroll Effect Working Here......

const scrollBtn = document.getElementById("scrollBtn") ;


window.addEventListener("scroll", () => {

    const header = document.getElementById("header") ;

    if(this.scrollY >= 80){
        header.classList.add("scrollHeader");
    }else{
        header.classList.remove("scrollHeader");
    }
    document.querySelector(".mNavItem").classList.remove("show");




    if(this.scrollY >= 100){
        scrollBtn.classList.add("scrollBtnShow");
    }else{
        scrollBtn.classList.remove("scrollBtnShow") ;
    }


})
scrollBtn.addEventListener("click", () => {

    window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left:0,
        behavior : "smooth",
    })
})








// Preloader Working Here....

const preloader = document.getElementById("preloader") ;

window.addEventListener("load", function(){
    preloader.style.display="none";
})







// Mobile Menu Working Here....
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.querySelector(".mNavItem");
const close = document.getElementById("close");

menuBtn.addEventListener("click", function(){
    
    mobileMenu.classList.add("show");
});


close.addEventListener("click", function(){

    mobileMenu.classList.remove("show");
})





// Main Img Show Working Here......
const bigImg = document.querySelector(".bigImg") ;

for(let x = 0; x < imgBtn.length; x++){

    imgBtn[0].addEventListener("click", function(){

        bigImg.src = "images/groceryD.png" ;
    });


    imgBtn[1].addEventListener("click", function(){

        bigImg.src = "images/travel2D.png" ;
    });


    imgBtn[2].addEventListener("click", function(){

        bigImg.src = "images/hospitalD.png" ;
    });


    imgBtn[3].addEventListener("click", function(){

        bigImg.src = "images/travel1D.png" ;
    });
}





// Big Img Close Working Here....

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {

    console.log("Hello Everyone") ;

    bigImgParent.style.display="none";
})



// Big ImgBox Show Working Here....

const bigImgParent = document.getElementById("bigImgParent") ;

for(let i = 0; i <= 7; i++){

    const imgBtn = document.querySelectorAll("#imgBtn")[i] ;

    imgBtn.addEventListener("click", function(){

    bigImgParent.style.display="flex";
    })

};














//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Website Another Interaction Working Here.......................................




