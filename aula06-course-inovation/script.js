document.addEventListener('DOMContentLoaded', function()
{
    // lista de produtos
    const products = 
    [
        {
            id:  1,
            name: "Smartphone",
            category: "eletronics",
            price: 1500
        },
        {
            id: 2,
            name: "Laptop",
            category: "eletronics",
            price: 3000
        },
        {
            id: 3,
            name: "Boof of javascript",
            category: "books",
            price: 100
        },
        {
            id: 4,
            name: "t-shirt",
            category: "clothing",
            price: 50
        }
    ];

    let cart = [];

    const filterCategory = document.getElementById('filterCategory');
    const list = document.getElementById('listProducts');
    const totalCart = document.querySelector('#totalCart');

    function listProducts(category)
    {
    // const productsMutate = products.forEach(product => {}); // void
    // console.log("======== FOR EACH: ========")
    // console.log(productsMutate);
    // const productsMutate2 = products.map(products => 
    //     {
    //         return products;
    //     }); // ELE PERCORRE E RETORNA TODOS OS ITENS
    // console.log("======== MAP: =========")
    // console.log(productsMutate2);
    const productsToCategory = products.filter((product) => 
    {
    if (category === 'all')
    {
        return product;
    }
    else if (product.category === category)
    {
        return product;
    }
    }); // ELE FILTRA O QUE ATENDER A VALIDAÇÃO
    productsToCategory.forEach((productBLA) => 
    {
        console.log("product: ", productBLA);
    });
            

    }
    listProducts('all');
}
);
