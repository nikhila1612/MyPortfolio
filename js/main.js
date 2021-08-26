window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

 
function message(){
    var name = document.getElementById("name").value  
    var email = document.getElementById("email").value 
    if(name === '' && email ==='')
    {
        console.log('form');
    }
    else{
    alert("Message has been sent");
}
}

