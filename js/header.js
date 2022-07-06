// function navMenu() {
//     var headerLinks = document.getElementsByClassName("header__links");
//     var headerCTA = document.getElementsByClassName("header__cta")

//     if (headerLinks.style.display === "none") {
//         headerLinks.style.display = "none";
//     } else {
//       ;
//     }
// }

// Sticky Header
$(window).scroll(function() {
    if ($(this).scrollTop() > 20){  
        $("header").addClass("stickyHeader");
        }
        else{
        $("header").removeClass("stickyHeader");
        }
})


function navMenu() {
    const navs = document.querySelectorAll('.header__links');
    const headerCTA = document.querySelectorAll('.header__cta');

    navs.forEach(nav => nav.classList.toggle('responsive'));
    headerCTA.forEach(cta => cta.classList.toggle('responsive'));
}
  
document.querySelector('.header__icon')
        .addEventListener('click', navMenu);