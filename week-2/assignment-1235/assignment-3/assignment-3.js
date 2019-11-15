function avg(data) {
    var price = 0;
    for (var i = 0; i < data.size; i += 1) {
        price += data.products[i].price;
    }
    var average = price / data["size"];
    console.log(average);
}

avg({
    size:3,
    products:[
        {
            name: "Product 1",
            price: 100,
        },
        {
            name: "Product 2",
            price: 700,   
        },
        {
            name: "Product 3",
            price: 250,
        }
    ]    
})
