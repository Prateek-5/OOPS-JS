/*
    Prototypes

*/

function userDetails(){
    this.name="Prateek";
    this.age=26;
}

let x=new userDetails();
//console.log(x.display());
userDetails.prototype.display=function(){
    console.log("This is the display function");
    return 5;
}
console.log(x.display());
/*
    This is how we can add a method after creating an instance of the object

*/