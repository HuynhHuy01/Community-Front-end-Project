function Toggle()
{
    var trailer = document.querySelector(".trailer")
    var video = document.querySelector(".video")
    trailer.classList.toggle('active')
    video.pause()
    video.currentTime = 0 
}

// $(document).ready(function(){
//     $(".togglee").click(function(){
//       let $child = $(this).find("i.fa-solid"); 
//       $child.toggleClass("fa-bars")
//       $(".menu").toggle();
//     });
//   });


$(document).ready(function(){
    $('.togglee').click(function(){
        $('.menu-content').slideToggle();
    })
})

$(document).ready(function(){
    $('.toggle-Community').click(function(){
        $('.Community-menu').slideToggle();
    })
})

// function Toggle2()
// {
//   $('.togglee').click(function(){
//     $('.menu-content').slideToggle();
// })
// }