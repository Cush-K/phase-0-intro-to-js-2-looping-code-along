//for loop

function writeCards(names, events){
    const messages = [];
    for (let i = 0; i < names.length; i++){
       const greeting = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
       messages.push(greeting);
    }
    return messages;
}
console.log(writeCards([`Guadalupe`, `Ollie`, `Aki`], `surprise`));


//while loop

function countDown(){
let count = 10;
while (count>=0){
    console.log(count--);
}
}
console.log(10);