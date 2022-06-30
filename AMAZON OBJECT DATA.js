var amazon = [
    {name:"Speakers", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation",price:20000, rating:5}
];
console.log("Name of the products and rating");
console.log(amazon[0].name +" "+ amazon[0].rating);
console.log(amazon[1].name +" "+ amazon[1].rating);
console.log(amazon[2].name +" "+ amazon[2].rating);

console.log("Average of Rating");

console.log( (amazon[0].rating + amazon[1].rating + amazon[2].rating)/amazon.length );

console.log("Minimum Price");

var min = 100000000;
for(var i=0;i<amazon.length;i++){
min = Math.min(min, amazon[i].price);
}
console.log(min);