var a = 'abc'
// if (true){
//     console.log(a)
// }

// if(true){
//     if(true){
//         var b = 'i am b variable'
//     }
// }

// console.log(b)


function x() {
    // var a  = 20
    function y(){
        // var a  = 10 
        console.log(a)
    }
    console.log(a)
    y()
}

x()


function test(n){

    function a(){
        return n%3 == 0
    }

    function b(){
        return n%5 == 0
    }

    if(a() && b()){
        console.log(n + ' is divisible by both 3 and 5')
    }else{
        console.log('Not a valid data')
    }
}
test(15)











