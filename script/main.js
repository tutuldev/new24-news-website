// owl carosul 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav: false, 
    dots: true,
    responsive:{
        0:{
            items:2,

            
        },
        600:{
            items:3,
            

        },
        1000:{
            items:4,


        }
    }
})

// owl carosul end

// tabs section 
// Get button elements by their IDs
const tab_btn1 = document.getElementById("tab_btn_1");
const tab_btn2 = document.getElementById("tab_btn_2");

const tab_con1 = document.getElementById("tab_con_1");
const tab_con2 = document.getElementById("tab_con_2");

// Add event listener for btn-1
tab_btn1.addEventListener("click", function() {
  // Remove the border class from btn-1 and add it to btn-2
  tab_btn1.classList.add("border-b-4");
  tab_btn2.classList.remove("border-b-4");

  tab_con2.classList.add("hidden");
  tab_con1.classList.remove("hidden");
});

// Add event listener for btn-2
tab_btn2.addEventListener("click", function() {
  // Remove the border class from btn-2 and add it to btn-1

  tab_btn1.classList.remove("border-b-4");
  tab_btn2.classList.add("border-b-4");
  
  tab_con2.classList.remove("hidden");
  tab_con1.classList.add("hidden");

});

// tabs section end






