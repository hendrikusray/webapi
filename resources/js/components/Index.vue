<template>
  <div>

      <img src="asset/header.jpg" alt="Header" style="width:100%;">
<div class="header">
  <div class="header-right">
  <router-link to="/">
  <a href="" class="active"><b>Beranda</b></a>
  </router-link>

   <router-link to="/produkindex">
  <a href=""><b>Produk</b></a>
    </router-link>
    <router-link to="caririwayat">
    <a href=""><b>Cek Riwayat</b></a>
    </router-link>
  </div><br><br><br><br> </div>
 <div>
 <div class="container"> 
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="asset/ray.jpg" style="width:100%;">
      </div>

      <div class="item">
        <img src="asset/ray1.jpg"  style="width:100%;">
      </div>
    
      <div class="item">
        <img src="asset/ray3.jpg"  style="width:100%;">
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
</div>

<br><br><div align="center">
<section class="w3-container w3-center w3-content" style="max-width:600px">
<img src="asset/logo.png" alt="Random Name" style="width:30%" align="center">
  <h2 class="w3-wide">BENGKEL ATMA AUTO</h2>
  <div>
    <p>
    Bengkel Atma Auto didirikan pada akhir tahun 2015, berlokasi di Jl. Transyogi Cikeas No. 3 Gunung Putri 
    oleh Keluarga Sudjari. Pada awal berdirinyaa Bengkel Tidar Motor hanya terbatas pada pelayanan cuci mobil 
    dengan peralatan fasilitas seadanya. 
    Semangat para pendiri Bengkel Atma Auto telah menjadikan bengkel tersebut secara berangsur-angsur mengalami kemajuan. 
    Di bidang SDM para teknisinya diikutsertakan training di PT. Astra International, dan diskusi-diskusi dengan para ahli di bidangnya.
    Peralatan bengkel juga terus diadakan penambahan-penambahan baik peralatan untuk Engine Repair maupun Body Repair.
    Demikian juga berbagai fasilitas serta perlengkapan pendukung lainnya telah ditambah sehingga menjadi lebih lengkap dan lebih baik.
    Bahkan status perusahaan telah dirubah menjadi Perusahaan Terbatas (PT. Atma Motor). 
    Pada tahun 2010 Bengkel Atma Auto juga ditunjuk sebagai Bengkel Resmi Service dan Suku Cadang dari merk Proton.
    Di samping hal tersebut Bengkel Atma Auto juga menjadi Rekanan Asuransi (Garda Oto, ACA, Raksa Pratika, Pan Pasific, Harta, Samsung Tugu, dsb).
    Bengkel Atma Auto Motor saat ini telah menjadi Bengkel One Stop Service Station dengan produk :</p>
    <p>
      1. Engine Repair <br>
      2. Body Repair<br>
      3. Suku Cadang<br>
      4. Ban, AC, Spooring, Salon<br>
      5. Anti Karat, (TKD)<br>
      6. Power Steering, Dinamo, Radiator, dll
    </p>
  </div>
</section>
</div>

<!-- Band Members -->
<div align="center">
<br><br><br><h2 class="w3-wide">DIMANA BENGKEL ATMA AUTO ?</h2>
<section class="w3-row-padding w3-center w3-light-grey">
  <article class="w3-third">
  <br><p class="w3-opacity"><b>Cabang 1</b></p>
    <p>Jalan Babarsari No. 44 Yogyakarta 55142 Telp (0274) 487711</p><br>
  </article>
  <article class="w3-third">
  <p class="w3-opacity"><b>Cabang 2</b></p>
    <p>Jalan Babarsari No. 44 Yogyakarta 55142 Telp (0274) 487711</p><br>
  </article>
  <article class="w3-third">
  <p class="w3-opacity"><b>Cabang 3</b></p>
    <p>Jalan Babarsari No. 44 Yogyakarta 55142 Telp (0274) 487711</p><br><br><br>
  </article>
</section>
</div>

  <div>
    <div class="footer">
        <p>SIATMO 2019</p>
      </div>
  </div>
 
  </div>
</template>


<style>


\\header

* {box-sizing: border-box;}

body { 
  margin: 0;
 
}

.header {
  overflow: hidden;
  background-color: white;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: #0A618C;
  text-align: center;
  padding: 20px;
  text-decoration: none;
  font-size: 20px; 
  line-height: 10px;
  border-radius: 4px;
}

.header a:hover {
  background-color: #23394C;
  color: white;
}

.header a.active {
  background-color: #23394C;
  color: white;
}

.header-right {
    float: none;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .header-right {
    float: none;
  }
}

.footer {
    padding: 2px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #0A618C;
    color: white;
    text-align: center;
 }

 * {box-sizing: border-box}

/* Set height of body and the document to 100% */
body, html {
    height: 100%;
    margin: 0;
    font-family: Arial;
}

.tabel{

    height: 100%;
}

.content {
    color: white;
}

.link {

    color: black;
}


/* Style tab links */
.tablink {
    background-color: #0A618C;
    color: white;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 17px;
    width: 33%;
}


.tablink:hover {
    background-color: #23394C;
}

/* Style the tab content (and add height:100% for full page content) */
.tabcontent {
    color: white;
    display: none;
    padding: 100px 20px;
    height: 100%;
}

#Pegawai {background-color: white;}
#Sparepart {background-color: white;}
#Supplier {background-color: white;}
#Jasa_Service {background-color: white;}
#Pelanggan {background-color: white;}

/*css-tampilan*/

input{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    }

.pesan {

    padding: 60px 20px;
}

.next {

    color: white;
}


input[type=submit] {
    width: 30%;
    background-color: #50846e;
    color: white;
    padding: 14px 20px;
    margin: 8px 115px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }

.mySlides {
        display:none;
    }

.judul {

    color: #0A618C;
    font-size: 150%;
}

.judul2 {

    color: #0A618C;
    font-size: 100%;
}

.button {
    background-color: #FDD100;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 2px;
    cursor: pointer;
  }
  

input, select, radio{
	width: 20%;
    padding: 8px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #0A618C;
    box-sizing: border-box;
    
	}

input[type=submit] {
    width: 20%;
    background-color: #0A618C;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    float: right;
	}

/*table-isi*/

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    color: black;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }



 

</style>
