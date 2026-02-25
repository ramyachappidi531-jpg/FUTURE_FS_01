(function(){
    emailjs.init("FzdSBdzwX9o0kCefV");
})();

const form = document.getElementById("contactForm");
const msg  = document.getElementById("msg");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_27ev0x5",
        "template_dktig0q",
        this
    ).then(function(){

        msg.style.color = "#6cf2d6";
        msg.textContent = "Message sent successfully!";
        form.reset();

    }, function(error){

        msg.style.color = "salmon";
        msg.textContent = "Failed to send message!";
        console.log(error);

    });

}); 
