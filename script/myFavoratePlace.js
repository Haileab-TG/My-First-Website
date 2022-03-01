// Vitsiting plan and time viewer, trip cost per day calculator and more

for (var i = 0; i < document.querySelectorAll(".nav-link").length; i++)
    
    document.querySelectorAll(".nav-link")[i].addEventListener("click", function(){
       
        var clickedBtn= this.id;
        
        switch (clickedBtn) {
        case '1':
            document.getElementById("v1").classList.toggle("Vis");
            document.getElementById("v2").classList.add("Vis");
            document.getElementById("v3").classList.add("Vis");
            document.getElementById("v4").classList.add("Vis");
            document.getElementById("v5").classList.add("Vis");
            break;

        case '2':
            document.getElementById("v2").classList.toggle("Vis");
            document.getElementById("v1").classList.add("Vis");
            document.getElementById("v3").classList.add("Vis");
            document.getElementById("v4").classList.add("Vis");
            document.getElementById("v5").classList.add("Vis");
        break;

        case '3':
            document.getElementById("v3").classList.toggle("Vis");
            document.getElementById("v1").classList.add("Vis");
            document.getElementById("v2").classList.add("Vis");
            document.getElementById("v4").classList.add("Vis");
            document.getElementById("v5").classList.add("Vis");
        break;

        case '4':
            document.getElementById("v4").classList.toggle("Vis");
            document.getElementById("v1").classList.add("Vis");
            document.getElementById("v3").classList.add("Vis");
            document.getElementById("v2").classList.add("Vis");
            document.getElementById("v5").classList.add("Vis");
            break;

        case '5':
            document.getElementById("v5").classList.toggle("Vis");
            document.getElementById("v1").classList.add("Vis");
            document.getElementById("v3").classList.add("Vis");
            document.getElementById("v4").classList.add("Vis");
            document.getElementById("v2").classList.add("Vis");
            break;
            default:
                break;
        }
      
});

document.getElementById("btnCalcuate").addEventListener("click",function(){
    var days=document.getElementById("days").value;
    var cost= document.getElementById("cost").value;
    var distance=document.getElementById("distance").value;
    if (days === "" || distance ==="" || cost ===""){
        alert("All three fields must be filled ");
    }

    else if(days < 1){
        alert("Days can't be Zero or negative");

    }

    else{
        
        document.getElementById("result").innerHTML= ( distance * cost )/days + " AED";
    }

});