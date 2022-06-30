var data = {
    name: ["Rice","Dal","Salt"],
    quantity: [2,3,1],
    price: [60,50,20]

}


var total = (data.price[0]*data.quantity[0]) +(data.quantity[1]*data.price[1]) + (data.quantity[2]*data.price[2]);
console.log(total);