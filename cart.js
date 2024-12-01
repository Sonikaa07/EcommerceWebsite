let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let checkOut = document.querySelector('.checkOut');
let quantity = document.querySelector(".quantity");
let cart = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

let AddProducts = [
    {
        "id": 1,
        "name": "Nothing Phone (2a) 5G",
        "price": 55500,
        "image": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_137706907?x=536&y=402&format=jpg&quality=80"
    },
    {
        "id": 2,
        "name": "Realme Narzo N61",
        "price": 21820,
        "image": "https://m.media-amazon.com/images/I/71r0Ysx+oVL._SX679_.jpg"
    },
    {
        "id": 3,
        "name": "Apple iPhone 15",
        "price": 92000,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70"
    },
    {
        "id": 4,
        "name": "Motorola G85 5G",
        "price": 42199,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/y/g/-original-imah4qtgjtzprg3g.jpeg?q=70"
    },
    {
        "id": 5,
        "name": "Redmi 13C",
        "price": 12600,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/e/a/-original-imahfk4xuk7ntphs.jpeg?q=70"
    },
    {
        "id": 6,
        "name": "Samsung Galaxy F05",
        "price": 33000,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70"
    },
    {
        "id": 7,
        "name": "Smart Washing Machine (7kg, Front Load)",
        "price": 32000,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/2/b/h/-original-imagx7qh8qzppe3s.jpeg?q=70"
    },
    {
        "id": 8,
        "name": "Automatic Washing Machine (8kg, Top Load)",
        "price": 28000,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/r/l/p/-original-imah3cw6nzunnedd.jpeg?q=70"
    },
    {
        "id": 9,
        "name": "High-Efficiency Washing Machine (6kg)",
        "price": 20000,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/r/k/6/-original-imahfeswzjhsfzbn.jpeg?q=70"
    },
    {
        "id": 10,
        "name": "Compact Washing Machine (5kg)",
        "price": 15000,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/h/l/x/-original-imagq68cjvcaaxk4.jpeg?q=70"
    },
    {
        "id": 11,
        "name": "Apple Watch Series 8",
        "price": 41900,
        "image": "https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg"
    },
    {
        "id": 12,
        "name": "Samsung Galaxy Watch 5",
        "price": 29999,
        "image": "https://tse2.mm.bing.net/th?id=OIP.quq4WzDpXPh7XwD0qAEHQAHaIx&pid=Api&P=0&h=180"
    },
    {
        "id": 13,
        "name": "Fitbit Versa 4",
        "price": 20999,
        "image": "https://tse2.mm.bing.net/th?id=OIP.mYfJhc5T-9_HFwdli7IMqQHaHt&pid=Api&P=0&h=180"
    },
    {
        "id": 14,
        "name": "Garmin Venu Sq",
        "price": 24990,
        "image": "https://tse3.mm.bing.net/th?id=OIP.E0YIHtXs3OJmE5R_A6PXJQHaHa&pid=Api&P=0&h=180"
    },
    {
        "id": 15,
        "name": "Fossil Gen 5 Smartwatch",
        "price": 21995,
        "image": "https://tse1.mm.bing.net/th?id=OIP.w-QKgX7-rx-AvTcsQurpXQHaHa&pid=Api&P=0&h=180"
    },
    {
        "id": 16,
        "name": "Amazfit GTS 2",
        "price": 13999,
        "image": "https://tse2.mm.bing.net/th?id=OIP.mYfJhc5T-9_HFwdli7IMqQHaHt&pid=Api&P=0&h=180"
    },
    {
        "id": 17,
        "name": "Samsung 253L Double Door Refrigerator",
        "price": 25990,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/p/q/m/-original-imahyjqgjemkx98g.jpeg?q=70"
    },
    {
        "id": 18,
        "name": "LG 260L Double Door Refrigerator",
        "price": 29490,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/s/f/g/-original-imagzzzbpjgszrz4.jpeg?q=70"
    },
    {
        "id": 19,
        "name": "Samsung 253L Double Door Refrigerator",
        "price": 25990,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/p/q/m/-original-imahyjqgjemkx98g.jpeg?q=70"
    },
    {
        "id": 20,
        "name": "LG 260L Double Door Refrigerator",
        "price": 29490,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/s/f/g/-original-imagzzzbpjgszrz4.jpeg?q=70"
    },
    {
        "id": 21,
        "name": "Smart Curved TV (55 inch)",
        "price": 50200,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/television/j/n/t/-original-imah5c5ze7kzgbcr.jpeg?q=70"
    },
    {
        "id": 22,
        "name": "Smart HD Ready TV (32 inch)",
        "price": 44444,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/television/i/a/s/-original-imah2uzafqztmtcm.jpeg?q=70"
    },
    {
        "id": 23,
        "name": "Smart LED TV (50 inch)",
        "price": 15990,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/television/5/c/q/-original-imah2uzbadwy7rhe.jpeg?q=70"
    },
    {
        "id": 24,
        "name": "OLED TV (55 inch)",
        "price": 55000,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/television/p/i/8/-original-imahfu6wtsgdpws9.jpeg?q=70"
    },
    {
        "id": 25,
        "name": "QLED TV (65 inch)",
        "price": 99999,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/television/9/w/t/-original-imah4kwzh9hhtzzz.jpeg?q=70"
    },
    {
        "id": 26,
        "name": "4K Ultra HD TV (75 inch)",
        "price": 35500,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/television/p/k/n/-original-imah2uzbscfxgwfj.jpeg?q=70"
    },
    {
        "id": 27,
        "name": "Sony WH-1000XM4 Wireless Headphones",
        "price": 29990,
        "image": "https://tse3.mm.bing.net/th?id=OIP.vDwS90k6VPr9UaGjYfWkRgHaHa&pid=Api&P=0&h=180"
    },
    {
        "id": 28,
        "name": "Bose QuietComfort 35 II",
        "price": 29500,
        "image": "https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_mhdm2am_a_studio_wireless_over_ear_headphones_gold_1098356.jpg"
    },
    {
        "id": 29,
        "name": "Apple AirPods Pro",
        "price": 24900,
        "image": "http://www.bhphotovideo.com/images/images2500x2500/skullcandy_s6hbgy_374_hesh_2_bluetooth_headphones_1085703.jpg"
    },
    {
        "id": 30,
        "name": "Jabra Elite 85h Wireless Headphones",
        "price": 22999,
        "image": "https://tse3.mm.bing.net/th?id=OIP.VmGumCiGengPdK6OCFme5QHaHa&pid=Api&P=0&h=180"
    },
    {
        "id": 31,
        "name": "Sennheiser HD 450BT",
        "price": 15990,
        "image": "https://tse4.mm.bing.net/th?id=OIP.Np5Jh_TIExoTCnjSY5CofQHaKM&pid=Api&P=0&h=180"
    },
    {
        "id": 32,
        "name": "Anker Soundcore Life Q20",
        "price": 8999,
        "image": "https://www.bhphotovideo.com/images/images2000x2000/Sennheiser_HD598_HD_598_Open_Back_Around_Ear_751989.jpg"
    },
    {
        "id": 33,
        "name": "Beats Studio3 Wireless",
        "price": 24999,
        "image": "https://tse4.mm.bing.net/th?id=OIP.w-QKgX7-rx-AvTcsQurpXQHaHa&pid=Api&P=0&h=180"
    },
    {
        "id": 34,
        "name": "Beyerdynamic DT 770 PRO",
        "price": 12000,
        "image": "https://i5.walmartimages.com/asr/40574581-c031-46c2-b658-9852a105d4db.f85a635c47c0f4c690846cb146d4bc26.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
    }
];
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}
function addToCart(id) {
    const product = AddProducts.find(p => p.id === id);
    if (!product) return; 

    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    reloadCart();
    saveCartToLocalStorage();
    updateCheckoutTotals();
}

function reloadCart() {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;

        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.dataset.id = item.id;
        newItem.innerHTML = `
            <div class="image">
                <img src="${item.image}">
            </div>
            <div class="name">${item.name}</div>
            <div class="totalPrice">₹${item.price * item.quantity}</div>
            <div class="quantity">
                <button class="minus" onclick="changeQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button class="plus" onclick="changeQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
        `;
        listCartHTML.appendChild(newItem);
    });

    checkOut.innerHTML = `Check Out (₹${totalPrice})`;
    quantity.innerHTML = totalQuantity;
    updateCheckoutTotals();
}

function changeQuantity(id, newQuantity) {
    const cartItem = cart.find(item => item.id === id);
    if (newQuantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    } else {
        cartItem.quantity = newQuantity;
    }
    reloadCart(); saveCartToLocalStorage();
    updateCheckoutTotals();  
}
loadCartFromLocalStorage();
function calculateCartTotals() {
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    return { totalQuantity, totalPrice };
}
function updateCheckoutTotals() {
    const { totalQuantity, totalPrice } = calculateCartTotals();
    const totalQuantityElem = document.getElementById('totalQuantity');
    const totalPriceElem = document.getElementById('totalPrice');

    
    if (totalQuantityElem && totalPriceElem) {
        totalQuantityElem.innerText = totalQuantity;
        totalPriceElem.innerText = `₹${totalPrice}`;
    }
}
function placeOrder() {
    let nameInput = document.getElementById('fullName'); // Get the specific form field by ID
    if (nameInput && nameInput.value !== "") {
        localStorage.removeItem('cart');
        window.open("placeorder.html");
    } else {
        alert("Please enter your full name before placing the order.");
    }
}
