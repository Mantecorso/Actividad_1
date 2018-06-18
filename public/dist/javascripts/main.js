(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
              form.addEventListener('submit', function (event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
              //    let psw = $('psw').value().trim();
              //    let pswtwo = $('pswtwo').value().trim();
              //    if (psw !== pswtwo) {
              //      $('.container').append('<p>Las contraseñas son distintas, mentecato</p>');
              //      form.checkValidity() = false;
              //      event.preventDefault();
              //      event.stopPropagation();
              //    } else {
                    form.classList.add('was-validated');

                  
                },false);
              });
          },
          false);
        
    })();