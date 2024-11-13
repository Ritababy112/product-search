// get element

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const productList = document.getElementById('productList');
const products = document.querySelectorAll('.product');


// function to filter product base on category
const filterProducts = () => {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    products.forEach(product=>{
        const productName = product.querySelector('h3').innerHTML.toLowerCase();
        const productCategory = product.getAttribute('data-category');

        // check if the product matches search query and category
        const matchSearch = productName.includes(searchQuery);
        const matchCategory = selectedCategory === 'all' || selectedCategory === productCategory;
        
        if (matchSearch && matchCategory){
            product.style.display = "block";
        }else{
            product.style.display ="none";
        }
        
    });
}
// add event listener for filtering
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);