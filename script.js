const userInput = parseInt(prompt("Enter your number:"));

for (let i = 1; i <= userInput; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log("Fizz-Buzz")
    }


    if (i % 3 === 0){
        console.log("Fizz");
    }

    else if(i % 5 === 0){
        console.log("Buzz");
    }

    else{
        console.log(i)
    }
}