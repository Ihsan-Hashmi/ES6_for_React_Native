//                                   {Lecture 01}
//                                 let and const keyword
// what is let 
// let vs var
// define 2let with same name
// hoisting with let
// let with loop
// when we use let this scope is block level
// when we use var this scope is function level or global level

// block level example
// there is two blocks in this program
//    let  a=10;
//    if(true){
//      console.log("the value of a is = " ,a)
//    }else{

//     console.log("there is no value")

//    }

// golbal level example

    // let b=10;
    // if(true){
    //     let b=20
    //     console.log(b)
    // }
    // console.log(b)

    // let does not work with hoisting
    // hoisting work with var keyword
    // example

            // console.log(a)
            // let a=10;

            // console.log(a)
            // var a=10;

            // problem with loop using var examples

            // for(var i=0; i<=10; i++){
            //     console.log(i)
            // }

            // in below code loop final result print 10 times
            // we can solve this using replace by Let keyword
            // for(var i=0; i<=9;i++){
            //     setTimeout(()=>{
            //         console.log(i)
            //     },2000)
            // }



            //                   {Lecuture 02}

    // What is default parameter
    // make fucntion 
    // use default parameter
    // pass function as parameter
    // interview question

    //  simple function
//     function addValue(){
//         return 10+10;
//     }
//    console.log(addValue())

// we can made dynamic and use many times for diff values

//    function addValue(a,b){
//     return  a+b;
//    }
//    console.log(addValue(5,5))
//    console.log(addValue(10,5))
//    console.log(addValue(15,5))

// if we have just single value we can add default parameter

//   function addValue(a,b=10,c=9){
//   return a+b+c
//   }
//   console.log(addValue(5))


// can we pass function in default parameter in another function
// yes we can
// this is called high order function

//  function addSome(){
//     return 10
//  }

//     function addValue(a,b,c=addSome()){
//         return a+b+c
//     }
//     console.log(addValue(10,10))


//                          {Lecture 03}
// what is template literals
// how to use it
// use function and some operation with it
// interview question
// to use lengthy string we can imporve using ``

//  let quote="Either you run code or code runs you"
//  let by="ihsan_hashmi"

//  console.log(`${quote} BY ${by}`)



//                       {lecture 04}
// why we use find
// why we use findindex
// example with array 
// example with array of object
// example with function

// how  to find min or max value using condition
// using find method we can find value 
// using findindex method we find position
// we can also find using arrow function

//  let num=[23,34,3,67,88,99]
  // let result=num.find((min)=>{
  //   return min<67
  // })

  // let result=num.findIndex((min)=>{
  //   return min<67
  // })

  // console.log(result)


  // let age=[34,45,23,4,99,105]
  
  //   let result=age.find((item)=>
  //   item>50 && item<100)
  //   console.log(result)


  // we can pass fucntion parameter

  // let age=[23,3,45,56,67,109]
  
  // function custom(item){
  // return  item<67
  // }

  //   let result=age.find(custom)
  //   console.log(result)

  
  // we can find value using objects in array
  // if we use {}brakets in arrow funciton must return  use keyword

  // let result=[
  //   {id:34,
  //     name:"ishan",
  //   },
  //   {id:23,
  //   name:"hashmi"},
  //   {id:56,
  //   name:"ahmed"},
  //   {id:454,
  //   name:"yasir"},
  //   {id:343,
  //   name:"aslam"},]

  //   let min=result.find((item)=>{
  //     return  item.id>56
  //   })
  //   console.log(min)


//                          {Lecture 05}
// Arrow fucntion in detail
// why we use arrow function
// complex example
// This  keyword in arrow function
// arrow vs normal function
// methods to write function
// these below two methods are annonymus funciton

// function test1(){
//   return 1;
// }

  
//  let test2=function(){
//   return 2;
//  }

// this is arrow funciton
// these are simple 
// if we do not use bracket then no need return
// in this method there is this keyword concept

  // const addValue=()=>{
  //   return 3
  // }

  // let age=[23,2,3,5,6]
  // let result=age.map((item)=>item*2)

  // console.log(result)

  // use this keyword

  // let person={
  //   name:"ihsan",

  //  getName:function(){
  //     console.log(this)
  //  }
  // }
  // person.getName();
  

  //                      {Lecture 06}   
  // what is classes 
  // how to make classes and call it 
  // define constructor,properties and function
  // make class instance

  // class fruits{

  //   a="apple"
     
    // how to acces value in constructor
    // constructor(){
    //   console.log(this.a)
    // }

    // we write just function name it will understand automatically
  //   addValue(a,b){
  //     return a+b
  //   }


  // }
  // let result= new fruits
  // console.log(result.addValue(5,5))


  //                     {Lecture 07} 
  // what is inheritance 
  // make parent and child class
  // inheritance parent class?
  // complete example 
  // interview questions


  // class category{
  //   getdry(){
  //     return "almond is a dry fruit"
  //   }
  
  //   getpome(){
  //     return "apple is a pome fruit"
  //   }

  // }

  // class  fruits extends category{

  //    a="apple"

  //    constructor(){
  //     super()
  //     console.log(this.a)
  //    }
     
  //    getcate(){
  //     return "which kind of category is apple"
  //    }

  // }
  //   let result=new fruits;
  //      console.log(result.getcate())
  //    console.log(result.getpome())



  //                          {Lecture 08}
  // lexical scope for this keyword
  // how much limit of this keyword

  // let person={
  //   name:"friends",
  //    list:["ihsan","hashmi","Aslam","waheed"],

  //    getname:function(){
  //     console.table(this.list)
  //    }
  // }
  // person.getname()



  //                   {Lecture 09}
  // what is Rest Operator
  // Make a function
  // use Rest Operator
  // complete example 
  // interview question
  // (...) this is rest operator to add multiple parameter

  // function letpara(...a){

  //   console.log("lIST OF FURITS",a)

  // }

  // letpara("apple","Banna","kiwi",)



  //                                 {Lecture 10}
  // whY Promise use in ES6
  // understand promise with example
  // complete example
  
// console.log("this is our first statement")
// console.log("this is our Second statement")

//   setTimeout(function(){
//     console.log("this  asynce await code running after 5 seconds")
//   },3000)




// callback and promises are important in there
// HOF high order funtion when pass function as parameter
// total code run after 5seconds



// function register(callback){

//     setTimeout(()=>{

//         console.log("register user")
//         callback()

//     },5000)
   
  
// }
// function loign(){
//     console.log("login end")
// }
// function getuser(){
//     console.log("get user data ")
// }
// function showdata(){
//     console.log("show data in db ")
// }
// function displydata(){
//     console.log("display data  end")
// }



// register(function(){
//     loign()
// getuser()
// showdata()
// displydata()

// })


// console.log("other Application work !")



// we can use for better perfmacne pormises .then() mthod


        //  function register(){

        //     return new Promise((resolve,reject)=>{
        //         setTimeout(()=>{
        //             console.log("this is our call new handler 3mins")
        //                 resolve()
        //         },3000)

        //     })
        //  }

        //  function login(){
        //     console.log("this function revoke after 5seconds login")
        //  }

        //  function getdata(){
        //     console.log("get data from user")
        //  }

        //  function showdata(){
        //     console.log("display data in screen")
        //  }

        //  register()
        //  .then(login)
        //  .then(getdata)
        //  .then(showdata);

//         we can build better using async await method  lets use this

      //  async  function aunth(){
      //       await register();
      //       await login();
      //       await getdata();
      //       await showdata();
      //    }


      //      aunth().then(()=>{
      //       console.log("All Done")
      //      })


      //                                 {Lecture 11}
// New global function 
// isFinit
// inNan
// both function with example
// if return a  number is isfinit funciton give true otherwise false
// if return a string is isNan fucntion give true otherwise false


// undefined,null,false
  // console.log(isFinite(10))

  // console.log(isNaN("abb"))


  //                      {Lecture 12}

  // Destructing have two types like array and object
  // destructing with restoperator
  // defaul value and skip value
// now destructing in array

// let fruits=['apple','mango','bnanna','kiwi']

// let [f1,f2,f3,f4]=fruits;

// let [f1,,f4]=fruits;

// let [f1,...f4]=fruits;
// console.log(f4)


// console.log(f1,f2,f3,f4)
// console.log(f1,f4)

// let fruits =["apple","banna","mango","kiwi"]

// let[f1,f2,f3,f4="unkown value"]=fruits;

// console.log(f4)



//                        {Lecture 13}
// Destructing have two types like array and object
  // destructing with restoperator
  // defaul value and skip value
// now destructing in Object
// we use key value pairs in object destructring

// let inform={
//   name:"ihsan",
//   lastname:"hashmi",
//   email:"wordhash0gmail.com"
// }

//    let{mobile,...name}=user;
//    console.log(name)

//        let{name,lastname,mob="1122"}=inform;
//        console.log(name,lastname,mob)


//           {Lecture 14}
// what is spread operator
// send parameter in function
// copy array
// merge array
// break reference
// interview quesiton


// let person=["naeem","khalil","rahim"]

//     function printAll(a,b,c){
       
//       console.log(a,b,c)
//     }
//    printAll(...person)




//                     {Lecture 15}
// Exponention operator
// alternative of math.pow(2,3)
// how to use it
// some example
// interview question

      //  console.log(3*3)
      //  console.log(3**3)


      //                       {Lecture 16}
      // why we need it
      // import and export function
      // what is default export and normal export
      // import class with differet way
      // interview question

      // module will allow to use some code of file of another library

      // export default function user(){
      //   console.log("this is user fucntion from outside file")
      // }

      // export function other(){
      //   return "this another user from outside files"
      // }

      // // export class

      //  export class fic{
      //   test(){
      //     console.log("class from outside file")
      //   }
      //  }

      //  we can export another class using diff method

      // export class ooth{
      //   testt(){
      //     console.log("this is another method to import class")
      //   }
      // }

      // export let f2=new ooth();
      // f2.testt()



      //           {Lecture 17}
      // what is Generators
      // how to make generator fucntion
      // how to use it

      // <button onclick="getstep()">go to step by step</button>




      // function* steps() {
      //    a =5;
      //    b =10;

      //    console.log(5+10)
      //    yield 'step 1 completed',

      //    console.log(5-10)
      //    yield 'step 2 completed',

      //    console.log(5*10)
      //    yield 'step 3 completed',

        
      // }
      // let stp= steps();

      // function getstep(){
      //   console.log(stp.next());
      // }