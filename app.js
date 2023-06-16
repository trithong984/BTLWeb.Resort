//----------------SLIDE SHOW---------------------
$(document).ready(function () {
  $(".listst6").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 769.98,
        settings: {
          slidesToShow: 4,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 650.98,
        settings: {
          slidesToShow: 3,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 479.98,
        settings: {
          slidesToShow: 2,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".contentst4_").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
  });
});
//----------------END SLIDE SHOW---------------------




// ----------SCRIPT HEART---------------
var favoriteButtons = document.querySelectorAll('.favorite-button');
var notification = document.querySelector('.notification');
favoriteButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var heartIcon = this.querySelector('i');
        if (this.classList.contains('favorited')) {
            this.classList.remove('favorited');
            heartIcon.classList.add('far');
            showNotification('Thông báo\nBạn vừa xóa một sản phẩm khỏi danh sách yêu thích');
        } else {
            this.classList.add('favorited');
            heartIcon.classList.remove('far');
            showNotification('Tuyệt vời\nBạn vừa thêm một sản phẩm vào yêu thích');
        }
    });
});

function showNotification(message) {
    var notificationMessage = document.querySelector('.notification-message');
    notificationMessage.innerHTML = message.replace(/\n/g, "<br>");

    notification.classList.add('show');
    setTimeout(function () {
        notification.classList.remove('show');
    }, 3000);
}
//------------END SCRIPT HEART----------------



//--------------SCRIPT NAV-BAR-----------------
const back_color_menu = document.querySelector('.header');
const slider = document.querySelector('.background_img');

window.addEventListener('scroll', function() {
const sliderRect = slider.getBoundingClientRect();
const windowHeight = window.innerHeight;
const scrollPosition = window.scrollY;
const logo1=document.getElementById('logo1');
const logo2=document.getElementById('logo2');
const menubar1=document.getElementById('menubar1');
const menubar2=document.getElementById('menubar2');

if (sliderRect.bottom <= windowHeight && scrollPosition >= sliderRect.top) {
  down();
} else {
up();
}
});

function down() {
back_color_menu.classList.add('menu-scroll-down');
document.getElementById('logo1').style.display='none';
document.getElementById('logo2').style.display='block';
document.getElementById('menubar1').style.display='none';
document.getElementById('menubar2').style.display='block';
}
function up() {
back_color_menu.classList.remove('menu-scroll-down');
document.getElementById('logo2').style.display='none';
document.getElementById('logo1').style.display='block';
document.getElementById('menubar2').style.display='none';
document.getElementById('menubar1').style.display='block';
}
//--------------END SCRIPT NAV-BAR-----------------





//----------------BACK TO TOP---------------------
let mybutton = document.getElementById("back-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
//----------------END BACK TO TOP---------------------