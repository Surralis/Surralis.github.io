//4th part




$("button").click(() => {
    $("Button").toggleClass ("hidden");
})




//From 1st part to the third
console.log("JavaScript is working");
let colors = ["orange", "blue", "red", "green"]

let post = {
    title: "My post",
    decription: "My first post,awesome",
    likeCount: 12,
    comments: ["cool!", "great one!", "Awesome!"]
};


console.log(post);

let age = 13;
if (age > 18) {
    console.log("You´re an adult");
} else {
    console.log("You´re a kid!"); 
}

for (let i = 0; i<10; i++) {
      console.log(i);
    
}
    
 let posts = [{
     title: "First post",
     likeCount: 12
 },{
    title: "Second post",
    likeCount: 222
}]

console.log(colors);

let myFunction = x =>{ 
console.log(x);
}

let greeter = name => {
    console.log(`Hello, ${name}`);
    if (name === "Adam") {
        console.log("He´s an adult")
    }

}

greeter("Adam");
greeter("Peter");
greeter("Mate");
greeter("Reka");

colors.forEach(color => {console.log(color);
});
