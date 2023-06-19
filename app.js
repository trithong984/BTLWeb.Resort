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



        var myButton = document.getElementById("myButton");
        var closeButton = document.getElementById("closeButton");
        var myDiv = document.getElementById("myDiv");
        myButton.addEventListener("click", function () {
            myDiv.style.right = "0";
            myButton.style.display = "none"; 
            closeButton.style.opacity = "1"; 
            closeButton.style.right = "calc(270px)"; 
            window.addEventListener("scroll", adjustDivPosition); 
        });
        closeButton.addEventListener("click", function () {
            myDiv.style.right = "-50%";
            myButton.style.display = "block";
            closeButton.style.opacity = "0"; 
            closeButton.style.right = "calc(270px)"; 
            window.removeEventListener("scroll", adjustDivPosition); 
        });







        function filterProducts() {
            var under2Checkbox = document.getElementById('under2');
            var from2to3Checkbox = document.getElementById('from2to3');
            var above3Checkbox = document.getElementById('above3');

            var function1Checkbox = document.getElementById('function1');
            var function2Checkbox = document.getElementById('function2');
            var function3Checkbox = document.getElementById('function3');
            var function4Checkbox = document.getElementById('function4');
            var function5Checkbox = document.getElementById('function5');


            var productItems = document.getElementsByClassName('pro0');
            var resultsContainer = document.getElementById('resultsContainer');
            var noResultsContainer = document.getElementById('noResultsContainer');

            var hasResults = false;

            for (var i = 0; i < productItems.length; i++) {
                var product = productItems[i];
                var priceElement = product.querySelector('.price');
                var price = parseFloat(priceElement.textContent);

                var functionElement = product.querySelector('.rating');
                var func = parseInt(functionElement.getAttribute('data-rating'));

                var isVisible = true;

                if ((under2Checkbox.checked || from2to3Checkbox.checked || above3Checkbox.checked) && !(
                    (under2Checkbox.checked && price >= 1 && price < 2) ||
                    (from2to3Checkbox.checked && price >= 2 && price <= 3) ||
                    (above3Checkbox.checked && price > 3)
                )) {
                    isVisible = false;
                }

                if ((function1Checkbox.checked || function2Checkbox.checked || function3Checkbox.checked || function4Checkbox.checked || function5Checkbox.checked) && !(
                    (function1Checkbox.checked && func === 1) ||
                    (function2Checkbox.checked && func === 2) ||
                    (function3Checkbox.checked && func === 3) ||
                    (function4Checkbox.checked && func === 4) ||
                    (function5Checkbox.checked && func === 5)
                )) {
                    isVisible = false;
                }

                if (isVisible) {
                    product.style.display = 'block';
                    hasResults = true;
                } else {
                    product.style.display = 'none';
                }
            }

            if (hasResults) {
                resultsContainer.style.display = 'block';
                noResultsContainer.style.display = 'none';
            } else {
                resultsContainer.style.display = 'none';
                noResultsContainer.style.display = 'block';
            }
        }