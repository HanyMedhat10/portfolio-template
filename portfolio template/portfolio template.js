$(document).ready(function () {
    $(window).on('scroll',function () {
        var scroll =$(window).scrollTop();
        console.log(scroll);
        if (scroll>=50) {
            $('.sticky').addClass('stickyadd');
            $('.nav-link').css('color','black');
            $('.nav-link').css('color','black');
            $('body').removeClass('navbar-dark');
            $('body').addClass('navbar-light');
        }
        else{
            $('.sticky').removeClass('stickyadd');
            $('.nav-link').css('color',' rgba(255,255,255,.55)');
            $('.nav-link.active').css('color','white');
            $('body').removeClass('navbar-light');
            $('body').addClass('navbar-dark');

        }
      })
      var typed=new Typed(".element" ,{
          strings:["Hany Medhat","a Developer", "an Engineer", "a Designer"],
          smartBackspace:true,
          tybeSpeed:100,
          backSpeed:100,
          loop:true,
          loopCount:Infinity,
          startDelay:1000
      });
      var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            var p =document.querySelectorAll('.progress-bar');
            p[0].setAttribute('style','width:95%;transition:1s all');
            p[1].setAttribute('style','width:75%;transition:1.5s all');
            p[2].setAttribute('style','width:80%;transition:1.7s all');
            p[3].setAttribute('style','width:90%;transition:1.9s all');
            p[4].setAttribute('style','width:95%;transition:2.1s all');
            p[5].setAttribute('style','width:85%;transition:2.3s all');
        },
        offset:'90%'
      })
    //  progress bars
    // var p =document.querySelectorAll('.progress-bar');
    // p[0].setAttribute('style','width:95%;transition:1s all');
    // p[1].setAttribute('style','width:75%;transition:1.5s all');
    // p[2].setAttribute('style','width:80%;transition:1.7s all');
    // p[3].setAttribute('style','width:90%;transition:1.9s all');
    // p[4].setAttribute('style','width:95%;transition:2.1s all');
    // p[5].setAttribute('style','width:85%;transition:2.3s all');
})
// document.querySelector('.navbar-toggler').addEventListener('click', function(){ 
//     if(this.getAttribute('aria-expanded')) { 
//       this.classList.toggle('bg-secondary');
//     };
//   });
// $(document).ready(function () {
//     $(window).on('scroll',function () {
//         var scroll =$(window).scrollTop();
//         console.log(scroll);
//         if (scroll>=50) {
//             $('body').addClass('navbar-light');
//             $('body').removeClass('navbar-dark');
//         }
//         else{
//             $('body').addClass('navbar-dark');
//             $('body').removeClass('navbar-light');

//         }
//       })
// })