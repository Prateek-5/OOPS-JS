/*
    Constructor are a bit different in JS as compared to c++ and Java



 */
/*
class Products{
    discount=10;

    constructor(productName,productPrice){
        //This is how we create a constructor function in JS unlike c++ and JAVA where constructor have same name as 
        //class name here we use the word constructor to create real life instances
        //When we create an object this is the first keyword that gets called
        this.n=productName;
        this.price=productPrice;
        

    }
    //Member function
    buyProduct(){
        //This is how we defin the member function in JS where we are not required to use the function keyword
        console.log(this.n,this.price,this.discount);
    }
    sellProduct(){

    }

    


}


    let macbook=new Products("M11",799);
    let iphone=new Products("X10",599);
    macbook.buyProduct();
*/    
    // console.log(macbook);
    // console.log(iphone);
    // console.log(typeof macbook);

    /*
        The new key word here referes to the a new object been created on the calling side 
        this refers to the calling object
    
    
    
    */


    function abc(a,b){
        this.airLine=a;
        this.destName=b;

    }

    let x=new abc("Airindia","Lko");
    console.log(x);
    /*
        In the above case the following function is acting as a class based function where we are able to us it like the class above
        but if we remove the new keyword then the following function will act like a normal function and return the normal return
        type of the function if not specified then undefined 
    
    
    */
   let y=abc("JetAirways","BOM");
   console.log(y);
   /*
        abc { airLine: 'Airindia', destName: 'Lko' }
        undefined

        but if new keyword is specified then always the calling object will be returned 
   
   */

   
    obj1={
        namePerson:"Sarthak",
        display:function(){
            console.log(this,"is an a normal function");
        }
    }
    obj2={
        namePerson:"Sanket",
        display:()=>{
            console.log(this,"is an a normal function");
        }
    }
    obj1.display();
    obj2.display();

    /*
        { namePerson: 'Sarthak', display: [Function: display] } is an a normal function
        {} is an a normal function
        This is the output difference,this in an arrow function cannot refer to the correct
        calling side object as shown in the above figure

    
    */
