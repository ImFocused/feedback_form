(function initEmailJS(){
    emailjs.init("7dqE0pElodweHavIv")
})();

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let phone = document.getElementById("phone_no").value;
    if(phone.length!=10 || isNaN(phone)){
        alert("Please enter a valid 10 digit phone number!");
        document.getElementById("form").reset();
        return;
    }
    else{
        emailjs.sendForm("service_q6w4olk", "template_46k2o8o", this).then(function(){
        alert("Message Sent Successfully!")
        document.getElementById("form").reset();
        },
        function(error){
            alert("Failed to send message!");
            document.getElementById("form").reset();
            console.log(error);
        })
    }
    
    
    
    
})