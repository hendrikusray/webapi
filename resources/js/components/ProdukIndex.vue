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

        
   
        <p  align="center" ><b>DATA SPAREPART</b></p>
     
    <br>

      <table  class="table table-borderless">
             <input
            @keyup="ShowFilter()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI TRANSAKSI"
          >
          <tr>
          <th><p align="center"><b>GAMBAR</b></p></th>
            <th><p align="center"><b>NAMA SPAREPART</b></p></th>
            <th><p align="center"><b>HARGA</b></p></th>
            <th><p align="center"><b>STOK TERSEDIA</b></p></th>
         
            
          </tr>
         <tr
                class="table-primary"
                v-for="sparepartkurang of allsparepart.data"
                v-bind:key="sparepartkurang.ID_SPAREPARTS"
              >
               <td>
                  <img
                    class="card-img-top"
                    style="height:100px;width:100px"
                    v-bind:src="'' + sparepartkurang.GAMBAR"
                    alt
                  >
                </td>

                <td>{{sparepartkurang.NAMA_SPAREPART}}</td>
                <td>{{sparepartkurang.HARGA_JUAL}}</td>
                <td>{{sparepartkurang.STOK_BARANG}}</td>

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
      allsparepart: [],
      filterData: [],
      ID_SPAREPARTS: "",
      KODE_PENEMPATAN: "",
      NAMA_SPAREPART: "",
      HARGA_BELI: "",
      HARGA_JUAL: "",
      STOK_MINIMAL: "",
      STOK_BARANG: "",
      GAMBAR: "",
      TIPE: "",
      SEARCH:"",
    };
  },

  methods: {

    async getallsparepart() {
      try {
        this.allsparepart = await Controller.getallsparepart();
          this.filterData3 = this.allsparepart.data;
      } catch (err) {
        console.log(err);
      }
    },

    ShowFilter() {
      if (this.SEARCH.trim() === "") {
        this.allsparepart.data = this.filterData3;
      } else {
        var vcampaigns = this.allsparepart.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function(el) {
            return el.NAMA_SPAREPART.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        };

        this.allsparepart.data = makeQuery(this.SEARCH);
      }
    },

  },
  async created() {
    this.getallsparepart();
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
