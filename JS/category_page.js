const urlParams = new URLSearchParams(window.location.search);
const currentCategory = urlParams.get('type') || 'meta_frames';

const pageTitle = document.getElementById('page-title');
if (currentCategory === 'metal_frames') {
    pageTitle.innerText = 'شنابر معدن ';
} else if (currentCategory === 'plastic_frames') {
    pageTitle.innerText = 'شنابر بلاستيك';
} else if (currentCategory === 'metal_fashion') {
    pageTitle.innerText = 'شنابر معدن فاشون';
} else if (currentCategory === 'children_frames') {
    pageTitle.innerText = 'شنابر اطفال';
} else if (currentCategory === 'lenses_glasses') {
    pageTitle.innerText = 'عدسات (طبية-شمسية)';
} else if (currentCategory === 'lenses') {
    pageTitle.innerText = 'عدسات طبية لاصقة (لينسيز)';
} else if (currentCategory === 'sunglasses') {
    pageTitle.innerText = 'نظارات شمسية';
} else if (currentCategory === 'clipon_frames') {
     pageTitle.innerText = 'شنابر كلبسات';
}


fetch('products.json')
.then(response => response.json())
.then(data => {
    const productsGrid = document.getElementById("category-products-grid");

    const filteredProducts = data.filter(product => product.category === currentCategory);

    filteredProducts.forEach(product => {
        let discountHTML = '';
        if (product.old_price) {
            let percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
            discountHTML = `<span class="sale_present">${percent_disc}%</span>`;
        }

        productsGrid.innerHTML += `
        <div class="child-card">
                        ${discountHTML}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt="${product.name}"></a>
                        </div>

                        <div 

                        <div class="child-titl-box">
                            <h4>${product.name}</h4>
                        </div>


                            <div class="stars" style="color: #ffcc00; margin-bottom: 8px; font-size: 14px;">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <div class="price" style="margin-bottom: 12px; display: block;">
                                <span class="current-price" style="font-weight: bold; color: #ee1e33; font-size: 28px;">${product.price} جنية</span>
                                ${product.old_price ?`<del class="old=price" style="color: #999; margin-right: 10px; text-decoration: line-through; opacity: 0.8;">${product.old_price} جنية</del>` : ""}
                            </div>

                            <div class="actions-container" style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-top: 15px; padding: 10px;">
                                <button class="add-to-cart-btn" data-id="${product.id}" style="background-color: #0B3954; color: #fff; border: none; padding: 10px 20px; border-radius: 25px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: 0.3s;">
                                    <i class="fa-solid fa-cart-shopping" style="color: #fff; font-size: 16px;"></i> إضافة للعربة
                                </button>
                                <button class="wishlist-btn" style="background: #fff; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s;">
                                    <i class="fa-regular fa-heart" style="color: #000; font-size: 16px;"></i>
                                 </button>
                            </div>
                        </div>
        </div>`;

    });
});




document.getElementById("category-products-grid").addEventListener("click", (e) => {
    const button = e.target.closest(".add-to-cart-btn");
    if (button) {
        const productId = button.dataset.id;
        
        // جلب المنتج من البيانات التي تم عمل fetch لها بالأعلى ومشاركته مع الدالة العامة
        const selectedProduct = data.find(product => product.id == productId); 
        if (selectedProduct) {
            addToCart(selectedProduct); // هذه الدالة ستأتي من ملف main.js المشترك
        }
    }
});