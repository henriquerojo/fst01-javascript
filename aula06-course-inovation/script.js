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
            name: "Book of javascript",
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
    const renderListProducts = document.getElementById('listProducts');
    const totalCart = document.querySelector('#totalCart');

    /**
     * Função que renderiza a lista de produtos
     * @param category - nome da categoria selecionada na função
     */

    function listProducts(categorySelected)
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
    if (categorySelected === 'all')
    {
        return product;
    }
    else if (product.category === categorySelected)
    {
        return product;
    }
    }); // ELE FILTRA O QUE ATENDER A VALIDAÇÃO
    productsToCategory.forEach((product) => 
    {
        // console.log("product: ", product);
        const itemLI  = document.createElement("li");
        itemLI.textContent = `${product.name} - US$ ${product.price}`;
        itemLI.classList.add('teste');
        // itemLI.setAttribute('id', product.name);

        const buttonAddCard = document.createElement("button");
        buttonAddCard.textContent = "Add to Cart";
        buttonAddCard.onclick = function()
        {
            addProductToCart(product);
            console.log("cart: ", cart);
            calculateTotalCart();
        }
        itemLI.appendChild(buttonAddCard);
        renderListProducts.appendChild(itemLI);
    });
            

    }
    // função que adiciona um produto ao carrinho
    function addProductToCart(product)
    {
        // cart.push()
        cart.push(product);
    }
    // função que calcula o total do carrinho
    function calculateTotalCart()
    {
        // soma o preço de todos os produtos do carrinho
        const total = cart.reduce((accumalator, current) => accumalator + current.price, 0);
        totalCart.textContent = `${total}`;
    }
    listProducts('all');
}
);
