$(document).ready(function(){

   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
   // hide button / show button
   $(".extra-works").hide()

   $(".show-more").click(function(){
            $(".extra-works").toggle()
   });





});

