let order = {
    contact: {
            firstName: "Rossignol",
            lastName: "kevin",
            address: "3 place de la liberté",
            city: "Saint_Branchs",
            email: "loursenrage36@gmail.com"
        },
     products: ["5be9c8541c9d440000665243"] 
}

fetch('http://localhost:3000/api/teddies/order', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(order)
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
            alert(data.orderId);
        });
    



