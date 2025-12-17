<?php
include 'config.php';

$name     = $_POST['name'];
$phone    = $_POST['phone'];
$product  = $_POST['product'];
$quantity = $_POST['quantity'];
$address  = $_POST['address'];

$query = "INSERT INTO orders (name, phone, product, quantity, address)
          VALUES ('$name', '$phone', '$product', '$quantity', '$address')";

if (mysqli_query($conn, $query)) {
    // Tampilkan halaman HTML dengan pesan sukses
    echo "
    <!DOCTYPE html>
    <html lang='id'>
    <head>
        <meta charset='UTF-8'>
        <title>Pesanan Berhasil</title>
        <style>
            body { font-family: Arial, sans-serif; background:#fff8e1; text-align:center; padding:50px; }
            .box { background:#fff; border-radius:8px; padding:30px; box-shadow:0 2px 8px rgba(0,0,0,0.2); display:inline-block; }
            h2 { color:#ff9800; }
            a { display:inline-block; margin-top:20px; padding:10px 20px; background:#ff9800; color:#fff; text-decoration:none; border-radius:4px; }
            a:hover { background:#e68900; }
        </style>
    </head>
    <body>
        <div class='box'>
            <h2>✅ Pesanan Berhasil!</h2>
            <p>Terima kasih, $name. Pesanan Anda sudah kami terima.</p>
            <p>Kami akan segera menghubungi nomor <b>$phone</b> untuk konfirmasi.</p>
            <a href='index.html'>Kembali ke Beranda</a>
        </div>
    </body>
    </html>
    ";
} else {
    echo "Terjadi kesalahan: " . mysqli_error($conn);
}
?>