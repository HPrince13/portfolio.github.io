let menu= document.querySelector('.menu-icon');

menu.onclick = () => {

    menu.classList.toggle("move");
}


// swipper JS

      var swiper = new Swiper(".review-content", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


// Email js

function validData(){
  let name =  document.querySelector(".name")
  let email =  document.querySelector(".email")
  let message =  document.querySelector(".message")
  let send =  document.querySelector(".send-btn")

  send.addEventListener('click',(e) => {
  
    e.preventDefault();

    if(name.value == "" || email.value == "" || message.value == ""){

      emptyError();

    }
    else{
      sendmail(name.value,email.value,message.value);
        success();
    }
  })
}

validData();

function sendmail(name,email,message){
  emailjs.send("service_fyomijz","template_jfuaunm",{
    to_name: name,
    from_name: email,
    message: message,
    });
}


function emptyError(){
  swal({
    title: "Oh No....",
    text: "Filled cannot be empty ",
    icon: "error",
  });
}


function success(){
  swal({
    title: "Good",
    text: "I try to reply in 24 hours",
    icon: "success",
  });
}

