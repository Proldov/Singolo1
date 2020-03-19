

//slaider

 let slideIndex = 1,
    slides = document.getElementsByClassName('slide__item'),
    left = document.querySelector('.promo__arrow-left'),
    right = document.querySelector('.promo__arrow-right'); 

     showSlides(slideIndex);


    function showSlides(n)  {
        if (n > slides.length) {
            slideIndex = 1;
        };

        if (n < 1) {
            slideIndex = slides.length;
        };

        for (let i = 0 ; i < slides.length; i++) { // скрываем слайды
           slides[i].style.display ='none';                                               
        };

        slides[slideIndex - 1].style.display ='block'; 
    };    

    function plusSlides(n) {
        showSlides(slideIndex+=n);
    }

    left.addEventListener('click', function(){
        plusSlides(-1);    
        slides[slideIndex - 1].classList.remove('.promo__arrow-left');  
        slides[slideIndex - 1].classList.add('.promo__arrow-right');
    })

    right.addEventListener('click', function(){
        plusSlides(1);
        slides[slideIndex - 1].classList.remove('.promo__arrow-right');  
        slides[slideIndex - 1].classList.add('.promo__arrow-left');      
    });



//menu

const MENU = document.getElementById('main__menu');
MENU.addEventListener('click', function(event){
    const menuList = MENU.querySelectorAll('.navigation__link');
    for (let i = 0; i < menuList.length; i++) {
       menuList[i].classList.remove('navigation__link_bordered');
    }
    event.target.classList.add('navigation__link_bordered');
});

//phoneOff

function phonesVertical (){
    document.getElementsByClassName('bcg_vertical')[0].classList.toggle('dispOff');
}
document.getElementById('phone__ver').addEventListener('click', phonesVertical);
document.getElementsByClassName('bcg_vertical')[0].addEventListener('click', phonesVertical);


function phonesHorizontal (){
    document.getElementsByClassName('bcg_horizontal')[0].classList.toggle('dispOff');
}
document.getElementById('phone__hor').addEventListener('click', phonesHorizontal);
document.getElementsByClassName('bcg_horizontal')[0].addEventListener('click', phonesHorizontal);

//Portfolio

const AddPortfolioClicHendler = document.getElementById('portfolio__tags');
AddPortfolioClicHendler.addEventListener('click', function(event){
    const tablistBord = AddPortfolioClicHendler.querySelectorAll('.layout-tags__tag');
    for (let i = 0;i < tablistBord.length;i++) {
        tablistBord[i].classList.remove('layout-tags_bordered');    
    };
    event.target.classList.add('layout-tags_bordered');
    

});


let a = document.querySelectorAll('.layoyt-4-column__image');
let count = 0;
function compareRandom() {
    count++;
    return Math.random() - 0.5;
  
};
    a.sort(compareRandom);
    console.log(a);




















    // function shuffle() {
    //     return a.sort(function() {return 0.5 - Math.random()});
        
    // };
    // console.log(shuffle);
    
// a.sort(compareRandom());
// console.log(a);
// console.log(count);

// let count =0;
// function compareRandom() {
//     count++;
//     return Math.random() - 0.5;
// }
// a.sort(compareRandom());
// console.log(a)
// console.log(count)



// potfolioImage.addEventListener(function() {
//     let portfolioItem = document.querySelectorAll('.layoyt-4-column__image')
//     event.target. Math.floor(Math.random()*100);
//     console.log(event.target)

