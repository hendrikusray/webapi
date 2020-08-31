<template>
    <div>
         <!-- header -->
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

     <table  class="table table-borderless">

        <input
            @keyup="caririwayat()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI TRANSAKSI"
          >
          <tr >
           
          <th ><p align="center"><b>ID TRANSAKSI </b></p></th>
            <th ><p align="center"><b>NAMA PELANGGAN </b></p></th>
            
            <th><p align="center"><b>NO TELEPON</b></p></th>
            <th><p align="center"><b>STATUS PENGERJAAN</b></p></th>
           
          </tr>

          
    
          <tr v-for="transaksipenjualan of TRANSAKSIPENJUALAN.data"
                  v-bind:key="transaksipenjualan.ID_TRANSAKSI">
                <td> {{transaksipenjualan.ID_TRANSAKSI}}</td>
                <td>{{transaksipenjualan.NAMA_PELANGGAN}} </td>
                <td> {{transaksipenjualan.TELEPON_PELANGGAN}}</td>  
                 <td> {{transaksipenjualan.STATUS_TRANSAKSI}}</td>  
                
                </tr>
         
               
        </table>

 <div class="footer">
        <p>SIATMO 2019</p>
      </div>
    </div>

</template>
<script>
import Controller from "../httpController";

export default {
  data() {
    return {

        myChart:"",
       TGL_TRANSAKSI:"",
       NAMA_PELANGGAN:"",
       ID_TRANSAKSI:"",
       GRAND_TOTAL:"",
       TELEPON_PELANGGAN:"",
       TRANSAKSIPENJUALAN:[],
       filterData:[],
       SEARCH:"",
       gabungan:"",
       STATUS_TRANSAKSI:""

     
    };
  },

  methods: {

  async gettransaksipenjualan() {
      try {
        this.TRANSAKSIPENJUALAN = await Controller.gettransaksipenjualan();
        this.FixData = this.TRANSAKSIPENJUALAN.data;
      } catch (err) {
        console.log(err);
      }
    },

    caririwayat() {
      if (this.SEARCH.trim() === "") {
        this.TRANSAKSIPENJUALAN.data = this.FixData;
      } else {
        var vcampaigns = this.TRANSAKSIPENJUALAN.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function(el) {
            return el.NAMA_PELANGGAN.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        };

        this.TRANSAKSIPENJUALAN.data = makeQuery(this.SEARCH);
      }
    },
      
  },
   
    
  async created() {
   this.gettransaksipenjualan();
  }
};
</script>

<style>


\\header

* {box-sizing: border-box;}

body { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
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
