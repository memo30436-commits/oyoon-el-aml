fetch('products.json')
.then(response => response.json())
.then(data => {
    
    const cart = JSON.parse(localStorage.getItem('cart')) || []
 
    const swiper_items_sale = document.getElementById("swiper_items_sale");

    const swiper_metal_frames = document.getElementById("swiper_metal_frames");

    const swiper_plastic_frames = document.getElementById("swiper_plastic_frames");

    const swiper_metal_fashion = document.getElementById("swiper_metal_fashion");

    const swiper_children_frames = document.getElementById("swiper_children_frames");

    const swiper_lenses_glasses = document.getElementById("swiper_lenses_glasses");

    const swiper_lenses = document.getElementById("swiper_lenses");

    const swiper_sunglasses = document.getElementById("swiper_sunglasses");

    const swiper_clipon_frames = document.getElementById("swiper_clipon_frames");



    const featuredSale = data.filter(product => product.old_price && Number(product.old_price) > Number(product.price));
    const featuredLensesGlasses = data.filter(product => product.category === 'lenses_glasses' && product.featured === true);
    const featuredLenses = data.filter(product => product.category === 'lenses' && product.featured === true);
    const featuredSunglasses = data.filter(product => product.category === 'sunglasses' && product.featured === true);
    const featuredCliponFrames = data.filter(product => product.category === 'clipon_frames' && product.featured === true);




    if(swiper_items_sale) {
        featuredSale.forEach(product =>  {

        swiper_items_sale.innerHTML += `


       <div class="swiper-slide product">
                        <span class="sale_present">%${Math.round(((product.old_price - product.price) / product.old_price) * 100)}</span>

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>${product.price}جنية</span></p>
                            <p class="old_price">${product.old_price}جنية</p>
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> إضافة للسلة
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
         `
        });

    }

    if(swiper_lenses_glasses) {

      featuredLensesGlasses.forEach(product => {
        
            const old_price_Pargrahp = product.old_price ? `<p class="old_price">${product.old_price}جنية</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";



        swiper_lenses_glasses.innerHTML += `


       <div class="swiper-slide product">

                        ${percent_disc_div}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>${product.price}جنية</span></p>
                            ${old_price_Pargrahp}
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> إضافة للسلة
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
         `
        });
    }

    if(swiper_lenses) {

      featuredLenses.forEach(product => {
        
            const old_price_Pargrahp = product.old_price ? `<p class="old_price">${product.old_price}جنية</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";



        swiper_lenses.innerHTML += `


       <div class="swiper-slide product">

                        ${percent_disc_div}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>${product.price}جنية</span></p>
                            ${old_price_Pargrahp}
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> إضافة للسلة
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
         `
        });
    }
    
    if(swiper_sunglasses) {

      featuredSunglasses.forEach(product => {
        
            const old_price_Pargrahp = product.old_price ? `<p class="old_price">${product.old_price}جنية</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";



        swiper_sunglasses.innerHTML += `


       <div class="swiper-slide product">

                        ${percent_disc_div}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>${product.price}جنية</span></p>
                            ${old_price_Pargrahp}
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> إضافة للسلة
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
         `
        });
    }

    if(swiper_clipon_frames) {

      featuredCliponFrames.forEach(product => {
        
            const old_price_Pargrahp = product.old_price ? `<p class="old_price">${product.old_price}جنية</p>` : "";

            const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";



        swiper_clipon_frames.innerHTML += `


       <div class="swiper-slide product">

                        ${percent_disc_div}

                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="name_product"><a href="#">${product.name}</a></p>

                        <div class="price">
                            <p><span>${product.price}جنية</span></p>
                            ${old_price_Pargrahp}
                        </div>

                        <div class="icons">
                            <span class="btn_add_cart" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> إضافة للسلة
                            </span>
                            <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                        </div>
         `
        });
    }

 });

    