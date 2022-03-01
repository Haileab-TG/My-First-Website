
// theme changing
function theme(){
            
    var theme= localStorage.getItem("theme");
    if (theme != null){
        if (theme == dark){
            dark();
        }
    else{
    light()
        
    }
    
}
}
function dark(){
    $("body").css("background-color","white").css("color","black");
    localStorage.setItem("theme",dark);
   }
function light(){
    $("body").css("background-color","black").css("color","white");
       localStorage.setItem("theme", light);}