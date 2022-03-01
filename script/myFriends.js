
// Language translation, image resize and more


for (var i = 0; i < document.querySelectorAll(".jsbtn").length; i++)
    
    document.querySelectorAll(".jsbtn")[i].addEventListener("click", function(){
       
        var clickedBtn= this.id;
        switch (clickedBtn) {
            case '1':
                document.getElementById("1C").classList.toggle("vis");
                document.getElementById("1I").classList.toggle("enlarge");
                document.getElementById("first").classList.toggle("col-lg-4");
                document.getElementById("second").classList.toggle("col-lg-1");
                document.getElementById("third").classList.toggle("col-lg-1");
            
                break;
            case '2':
                document.getElementById("2C").classList.toggle("vis");
                document.getElementById("2I").classList.toggle("enlarge");
                document.getElementById("second").classList.toggle("col-lg-4");
                document.getElementById("first").classList.toggle("col-lg-1");
                document.getElementById("third").classList.toggle("col-lg-1");
                break;
            case '3':
                document.getElementById("3C").classList.toggle("vis");
                document.getElementById("3I").classList.toggle("enlarge");
                document.getElementById("third").classList.toggle("col-lg-4");
                document.getElementById("second").classList.toggle("col-lg-1");
                document.getElementById("first").classList.toggle("col-lg-1");
                break;
            default:
                break;
        }
      
});

for (var i = 0; i < document.querySelectorAll(".Tbtn").length; i++)
    
    document.querySelectorAll(".Tbtn")[i].addEventListener("click", function(){
       
        var clickedBtn= this.id;
        switch (clickedBtn) {
            case '1T':
                document.getElementById("EPara1").classList.toggle("vis");
                document.getElementById("APara1").classList.toggle("vis");
                break;
            case '2T':
                document.getElementById("EPara2").classList.toggle("vis");
                document.getElementById("APara2").classList.toggle("vis");
                break;
            case '3T':
                document.getElementById("EPara3").classList.toggle("vis");
                document.getElementById("APara3").classList.toggle("vis");
                break;
            default:
                break;
        }
      
});
