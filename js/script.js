$(document).ready(function () {

        
     $("#submit").click(function(event){
        event.preventDefault();
        var result = 0;
           $("input[type='checkbox']:checked").each(function(){
             result += parseInt($(this).val());
        });
           $("#total").html(result);  
    });

})