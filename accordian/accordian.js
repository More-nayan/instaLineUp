// select accordian buttons
const accordians = document.querySelectorAll('.accordian');

// iterate accordian 
accordians.forEach(accordian => {
  accordian.addEventListener('click',() => {

    //toggle with active class
    accordian.classList.toggle('active');

    //selecting and manupulate display property of panel
    let panel = accordian.nextElementSibling;
    if(panel.style.display == "block"){
      panel.style.display = "none"; 
    }else{
      panel.style.display = "block";
    }
    
  })
})