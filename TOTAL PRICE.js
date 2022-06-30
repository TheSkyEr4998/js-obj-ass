var e_commerce = {
    products : ["earphone","headphone","earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
    
  };

 var total_price = (e_commerce.price[0]*e_commerce.quantity[0]) + (e_commerce.price[1]*e_commerce.quantity[1])
  + (e_commerce.quantity[2]*e_commerce.price[2]);

 console.log(total_price);