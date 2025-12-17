// JavaScript untuk efek dan interaktivitas
let cart = [];
let total = 0;

// Fungsi tambah ke keranjang
function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

// Update tampilan keranjang
function updateCart() {
    document.getElementById('cartItems').textContent = cart.length + ' item';
    document.getElementById('totalPrice').textContent = total.toLocaleString();
}

// Validasi dan submit form
document.getElementById('orderForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;
    if (name && phone && product && quantity && address) {
        document.getElementById('modal').style.display = 'flex';
        // Reset form
        this.reset();
        cart = [];
        total = 0;
        updateCart();
    } else {
        alert('Harap isi semua field!');
    }
});

// Tutup modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Efek fade-in saat scroll (untuk produk)
window.addEventListener('scroll', function() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const rect = product.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            product.style.animationDelay = '0s';
        }
    });
});