function harga(){
    let produk = document.getElementById("produk").value;
    let nama_produk = [
        "Lenovo Thinkpad",
        "Lenovo Ideapad Slim",
        "Lenovo Legion",
        "Acer Classic",
        "Acer Aspire Touch Screen",
        "Acer Aspire 5",
        "Asus Home",
        "Asus Zephyrus",
        "Asus ROG"
    ]
    let harga_produk = [
        " Rp 7.500.000",
        " Rp 7.000.000",
        " Rp 10.500.000",
        " Rp 6.500.000",
        " Rp 10.500.000",
        " Rp 8.500.000",
        " Rp 6.500.000",
        " Rp. 13.500.000",
        " Rp. 15.500.000"
    ]
    let num;
    for(let i=0 ; i<9 ; i++){
        if(produk==nama_produk[i]){
            num=i;
        }
    }

    let harga = harga_produk[num];
    document.getElementById("hargaP").value = harga;
    document.getElementById("hargaProduk").innerHTML = harga;
}
function invoice(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nama = urlParams.get('nama')
    const alamat = urlParams.get('alamat')
    const produk = urlParams.get('produk')
    const harga = urlParams.get('hargaP')
    const bayar = urlParams.get('bayar')
    const catatan = urlParams.get('catatan')
    console.log(nama);


    document.getElementById("nama-Inv").innerHTML = nama;
    document.getElementById("alamat-Inv").innerHTML = alamat;
    document.getElementById("produk-Inv").innerHTML = produk;
    document.getElementById("harga-Inv").innerHTML = harga;
    document.getElementById("bayar-Inv").innerHTML = bayar;
    document.getElementById("catatan-Inv").innerHTML = catatan;
}