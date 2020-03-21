

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

//Обработка скрола
  
// let avgHeight = 0;
// const SECTIONs = document.querySelectorAll('section');
// SECTIONs.forEach(el => {
//     avgHeight += el.offsetHeight; 
// });

// let ScrollOffset = document.documentElement.clientHeight - parseInt(avgHeight / SECTIONs.length);
// ScrollOffset = (ScrollOffset < 30) ? document.querySelector('header').offsetHeight : ScrollOffset;

// document.addEventListener('scroll', event => {
//     let curPos = window.scrollY + ScrollOffset;
//     const elList = document.querySelectorAll('section');
//     console.log(elList)
  
//     const menuList =  MENU.querySelectorAll('.navigation__link');
//     console.log( menuList)
//     elList.forEach(el => {
//         if ((el.offsetTop) <= curPos && (el.offsetTop + el.offsetHeight - 60) > curPos) {
//             menuList.forEach(li => {
//                 li.classList.remove('navigation__link_bordered');
//                 if (el.getAttribute('id') === li.querySelector('a').getAttribute('href').substring(1)) {
//                     li.classList.add('navigation__link_bordered');
//                 }
//             });
//         }
//     });
 

// });




// document.addEventLissener('scroll', function scrollHandler (){

// })

// function scrollHandler() {
//     let menu =document.querySelector('header');

// };

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
//табы
const AddPortfolioClicHendler = document.getElementById('portfolio__tags');
AddPortfolioClicHendler.addEventListener('click', function(event){
    const tablistBord = AddPortfolioClicHendler.querySelectorAll('.layout-tags__tag');
    for (let i = 0;i < tablistBord.length;i++) {
        tablistBord[i].classList.remove('layout-tags_bordered');    
    };
    event.target.classList.add('layout-tags_bordered');

    //цикл для переммешивания картинок

    let a = document.querySelectorAll('.layoyt-4-column__image');
    let arr = [].slice.call(a)   //возводим a в мвссив
    function compareRandom() {
        
        return Math.random() - 0.5;    
    };
       arr.sort(compareRandom);
       
        for (let i = 0; i < arr.length; i++) {
            document.querySelector('#potfolio__image').append(arr[i]);
        };    
});

//рамка

const borderImg = document.getElementById('potfolio__image');
borderImg.addEventListener('click', function(event){
    const borderList = borderImg.querySelectorAll('.layoyt-4-column__image'); 
    for (let i = 0;i < borderList.length;i++) {
        borderList[i].classList.remove('portfolio__bordered');       
    };
    event.target.classList.add('portfolio__bordered');
   
});   


// let a = document.querySelectorAll('.layoyt-4-column__image');
// let arr = [].slice.call(a)


// function compareRandom() {
    
//     return Math.random() - 0.5;
  
// };
//    arr.sort(compareRandom);
   
//     for (let i = 0; i < arr.length; i++) {
//         document.querySelector('#potfolio__image').append(arr[i]);
//     };









    // function shuffle() {
    //     return a.sort(function() {return 0.5 - Math.random()});



// function shuffle() {
//         return arr.sort(function() {return 0.5 - Math.random()});
// };














    
        
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

