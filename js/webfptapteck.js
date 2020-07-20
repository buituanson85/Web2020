
    function isEmail(inputEmail) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(inputEmail);
    }
function validatePassword(inputPassword) {
    return inputPassword.length > 4;
}

$(document).ready(function(){
    $('#email').change(function(){
        var email = $(this).val().trim();
        // alert(`email = ${JSON.stringify(email)}`)
        if(!isEmail(email)) {
            //Error ?
            $(".emailError").html("Email is not valid format");
        } else {
            $(".emailError").html("");
        }
    });
    $('#password').change(function(){
        var password = $(this).val();
        if(!validatePassword(password)) {
            $(".passwordError").html("Password must be at least 5 characters");
        } else {
            $(".passwordError").html("");
        }
    });
});

$(document).ready(function() {
    $('.noi-dung').slideUp(); /*ẩn nội dung*/

    $('.khoi h3').on('click', function(event) {
        // ngăn chặn mặc định
        event.preventDefault();
        // đóng/ mở
        $(this).next().slideToggle();

        // $(this).offset().top lấy vị trí của phần tử this

        $('html, body').animate({scrollTop:$(this).offset().top},400);
    });

// quay về đầu trang
    $('#btn-top').click(function(event) {
        /* Act on the event */
        $('html, body').animate({scrollTop:0},400);
    });
});
