$(document).ready(function () {
    $("#image1").show();
    $("#design").hide();
    $("#image2").show();
    $("#dev").hide();
    $("#image3").show();
    $("#prod").hide();

    $("#image1").click(function () {
        $("#design").show();
        $("this").hide();
        $("#image1").hide();
    });
    $("#design").click(function () {
        $("#image1").show();
        $(this).hide();
        $("#design").slideUp();
    })
    $("#image2").click(function () {
        $("#dev").show();
        $("this").hide();
        $("#image2").hide();
    });
    $("#dev").click(function () {
        $("#image2").show();
        $(this).hide();
        $("#dev").slideUp();
    });
    $("#image3").click(function () {
        $("#prod").show();
        $("this").hide();
        $("#image3").hide();
    });
    $("#prod").click(function () {
        $("#image3").show();
        $(this).hide();
        $("#prod").slideUp();
    });
});
$(document).click(function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name === "" && email === "" && message === ""){
        alert("please insert your credentials")
    }
    if (name === "") {
        alert("Please Insert your name")
    } else
    if (email === "") {
        alert("Enter your Email")
    } else
    if (message === "") {
        alert("Please insert your message!")
    } else {
        alert(' Dear ' + name + ' we have received your message successfully. ' + ' Feel free to reach out to us at anytime');
    }
});