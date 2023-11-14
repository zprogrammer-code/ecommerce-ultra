

function Products(fail) {
    new Promise((resolve, reject) => {
        setTimeout (() => {
            if (fail) {
                reject("epic fail");
            } else {
                resolve({
                    products: [
                        {id: 0, name: "nike shox", summary: "premiere classic look and model. PRICE: $125", pic: "holder.js/100px160" },
                        {id: 1, name: "nike jordan", summary: "premiere classic look and model. PRICE: $125", pic: "holder.js/100px160" },
                        {id: 2, name: "nike running", summary: "premiere classic look and model. PRICE: $125", pic: "holder.js/100px160" },
                        {id: 3, name: "nike chilling", summary: "premiere classic look and model. PRICE: $125", pic: "holder.js/100px160" }
                    ]
                });
            }
        }, 2000)
    });
};

export default Products;