const sendMail = document.getElementById('sendMail');
sendMail.addEventListener('click', function () {
  const email = document.getElementById('email').value.trim();
  let status_message = document.getElementById('status_message');

  // check if email is valid
  if (!validateEmail(email)) {
    status_message.classList.remove('sent');
    status_message.classList.add('invalid');
    document.querySelector('.invalid').innerHTML = 'Email is not valid.';
  }else{
    // send email with emailJS
    let params = {
      from_name: document.getElementById("fullName").value,
      email_id: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    }
    emailjs.send("service_g7o7kzv", "template_7lh3d93", params).then(function (res) {
      status_message.classList.remove('invalid');
      status_message.classList.add('sent');
      document.querySelector('.sent').innerHTML = 'Message Send!';
    });
    document.getElementById("fullName").value = '';
    document.getElementById("email").value = '';
    document.getElementById("subject").value = '';
    document.getElementById("message").value = '';
  }

});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(String(email).toLowerCase());
}

function showSidebar(toggle){
  const frontbarElement = document.querySelector('.links2');
  const menu_button = document.querySelector('.menu_button');
  if(toggle === 'open'){
    frontbarElement.style.display = 'flex';
    menu_button.style.display = 'none';

  } else if(toggle === 'close'){
    frontbarElement.style.display = 'none';
    menu_button.style.display = 'flex';
  }
}