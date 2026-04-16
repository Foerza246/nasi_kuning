// Keranjang belanja
let cart = [];
let totalPrice = 0;

// Tambah produk ke keranjang
function addToCart(productName, price) {
    cart.push({ productName, price });
    totalPrice += price;
    updateCart();
}

// Update tampilan keranjang
function updateCart() {
    document.getElementById('cartItems').textContent = `${cart.length} item`;
    document.getElementById('totalPrice').textContent = totalPrice.toLocaleString();
}

// Reset keranjang setelah pesanan berhasil
function resetCart() {
    cart = [];
    totalPrice = 0;
    updateCart();
}

// Validasi dan submit form
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value.trim();

    if (name && phone && product && quantity && address) {
        document.getElementById('modal').style.display = 'flex';
        this.reset();
        resetCart(); // gunakan fungsi modular
    } else {
        alert('Harap isi semua field!');
    }
});

// Tutup modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Efek fade-in saat scroll
window.addEventListener('scroll', function() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.style.animationDelay = '0s';
        }
    });
});
