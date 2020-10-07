function validate(){
    let name = document.getElementById("name").value;

if(name.length <5){
    alert("name should contain aleast 5 letters");
}

}

function validate1(){
    let id = document.getElementById("id").value;
    if(id!=(isNaN)){
            alert("enter number only")
        }
        return false
}