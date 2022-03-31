$(document).ready(function(e){
    $("#step1").show();
    $("#step2").hide();
    $("#step3").hide();

$("#fullname").keypress(function(){
    $("#nameerror").hide(250);
    $("#fullname").removeClass("error-label");
    $("#fullname").addClass("area");
});
$("#mail").keypress(function(){
    $("#mailerror").hide(250);
    $("#mail").removeClass("error-label");
    $("#mail").addClass("area");
});
$("#mob").keypress(function(){
    $("#moberror").hide(250);
    $("#mob").removeClass("error-label");
    $("#mob").addClass("area");
});
$("#age").keypress(function(){
    $("#ageerror").hide(250);
    $("#age").removeClass("error-label");
    $("#age").addClass("area");
});
$("#pswd").keypress(function(){
    $("#pswderror").hide(250);
    $("#pswd").removeClass("error-label");
    $("#pswd").addClass("area");
});
$("#cnfrmpswd").keypress(function(){
    $("#cp-error").hide(250);
    $("#cnfrmpswd").removeClass("error-label");
    $("#cnfrmpswd").addClass("area");
});
$("#nxt-btn1").click(function(){
    
    let fullname=$("#fullname").val();
    let mail=$("#mail").val();
    if(fullname=="")
    {
        $("#fullname").addClass("error-label");
        $("#fullname").removeClass("area");
        $("#nameerror").show(250);
    }
    else if(mail=="")
    {
        $("#mail").addClass("error-label");
        $("#mail").removeClass("area");
        $("#mailerror").show(250);
    }
    else
    {
        $("#step1").hide(250);
        $("#step2").show(250);
        $("#step3").hide();
    }
});
$("#prev-btn1").click(function(){
    $("#step2").hide(250);
    $("#step1").show(250);
    // $("#step3").hide();
});
$("#prev-btn2").click(function(){
    $("#step1").hide();
    $("#step3").hide(250);
    $("#step2").show(250);
});
$("#nxt-btn2").click(function(){
    let age=$("#age").val();
    let mob=$("#mob").val();
        if(age=="" || age > 50 || age < 18)
        {
            $("#age").addClass("error-label");
            $("#age").removeClass("area");
            $("#ageerror").show(250);
        }
        else if(mob=="" || mob.length!=10)
        {
            $("#mob").addClass("error-label");
            $("#mob").removeClass("area");
            $("#moberror").show(250);
        }
        else
        {
            $("#step1").hide(250);
            $("#step2").hide();
            $("#step3").show(250);
        }
});

$("#myform").submit(function(){
    // e.preventDefault();
    let isValid=true; 
    let pswd=$("#pswd").val();
    let cnfrmpswd=$("#cnfrmpswd").val();
    if(pswd=="" || pswd.length < 8)
    {
        $("#pswd").addClass("error-label");
        $("#pswd").removeClass("area");
        $("#pswderror").show(250);
        isValid=false;
    }
    else if(cnfrmpswd=="" || cnfrmpswd != pswd)
    {
        $("#cnfrmpswd").addClass("error-label");
        $("#cnfrmpswd").removeClass("area");
        $("#cp-error").show(250);
        isValid=false;
    }
    
    else{
        // $("#res").show(250);
        // $("#step1").hide();
        // $("#step2").hide();
        // $("#step3").hide();
       isValid=true;
    }
    return isValid;
});
});
