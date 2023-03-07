//cek nama pengujung website
// var nameVis = prompt("Hallo, Siapa Nama Kamu?");
// document.getElementById("name-visitor").innerHTML = nameVis;

// slide gambar
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 2000);


// Form Validasi
function validasi() {
		
    var nama    = document.getElementById("nama").value;
    var jk      = document.forms["message-form"]["jk"].value;
    var email   = document.getElementById("email").value;
    var minati  = document.getElementById("minati").value;
    
    if (nama == "") {
        alert('Nama Lengkap Harus Diisi !');
    } else if (jk == "") {
        alert('Jenis Kelamin Harus Dipilih !');
    } else if (email == "") {
        alert('Alamat Email Harus Diisi !');
    } else if (minati == "") {
        alert('Apa Yang Anda Minati Harus Dipilih !');
    }
}