(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
              form.addEventListener('submit', function (event) {
                  var pass = $('#psw').val().trim();
                  //para coger un dato igualo la variable con dolar y el name
                  var pass2 = $('#pswtwo').val().trim();
                  console.log(pass)
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  if (pass !== pass2) {
                      $('.container').append('<p>Contrasenya repetida</p>');
                      //apend anyade a la clase container la <p>
                    event.preventDefault();
                    event.stopPropagation();
                    return;
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