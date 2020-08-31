<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
      <h1 class="h3 display">Tables</h1>

      <h2 class="kotakCari">
        <div class="input-group">
          <input
            @keyup="ShowFilter()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI SPAREPART"
          >
          <span class="input-group-append">
            <div class="input-group-text bg-transparent">
              <i class="fa fa-search"></i>
            </div>
          </span>
        </div>
      </h2>
    </header>


    <div class="row">
      <div class="card">
        <div class="card-header">
          <h4>TABLE Data Spareparts</h4>
        </div>

            
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-SPAREPART</th>
                <th>KODE_PENEMPATAN</th>
                <th>NAMA SPAREPART</th>
                <th>HARGA BELI</th>
                <th>HARGA JUAL</th>
                <th>STOK MINIMAL</th>
                <th>STOK BARANG</th>
                <th>GAMBAR</th>
                <th>TIPE</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="sparepart of allsparepart.data"
                v-bind:key="sparepart.ID_SPAREPARTS"
              >
                <th scope="row">{{sparepart.ID_SPAREPARTS}}</th>

                <td>{{sparepart.KODE_PENEMPATAN}}</td>
                <td>{{sparepart.NAMA_SPAREPART}}</td>
                <td>{{sparepart.HARGA_BELI}}</td>
                <td>{{sparepart.HARGA_JUAL}}</td>
                <td>{{sparepart.STOK_MINIMAL}}</td>
                <td>{{sparepart.STOK_BARANG}}</td>
                <td>
                  <img
                    class="card-img-top"
                    style="height:100px;width:100px"
                    v-bind:src="'' + sparepart.GAMBAR"
                    alt
                  >
                </td>
                <td>{{sparepart.TIPE}}</td>

                <router-link
                  :to=" { name:'editsparepart', params:{ ID_SPAREPARTS:sparepart.ID_SPAREPARTS, KODE_PENEMPATAN:sparepart.KODE_PENEMPATAN, NAMA_SPAREPART:sparepart.NAMA_SPAREPART, HARGA_BELI:sparepart.HARGA_BELI  , HARGA_JUAL:sparepart.HARGA_JUAL,   STOK_MINIMAL:sparepart.STOK_MINIMAL,STOK_BARANG:sparepart.STOK_BARANG,GAMBAR:sparepart.GAMBAR, TIPE:sparepart.TIPE}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletesparepart(sparepart.ID_SPAREPARTS)"
                  >HAPUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

        <router-link to="/inputsparepart">
      <button class="rounded-circle btn btn-success" type="button" id="btnTambah">
        <i class="material-icons pmd-sm">add</i>
      </button>
    </router-link>


    

    <div class="row">
      <div class="card">
        <div class="card-header">
          <h4>Tampil data sparepart dengan stok minimum</h4>
          <h4></h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID SPAREPARTS</th>
                <th>NAMA SPAREPART</th>
                <th>STOK MINIMAL</th>
                <th>STOK BARANG</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="sparepartkurang of allsparepartkurang.data.filter(obj=>obj.STOK_BARANG < obj.STOK_MINIMAL)"
                v-bind:key="sparepartkurang.ID_SPAREPARTS"
              >
                <th scope="row">{{sparepartkurang.ID_SPAREPARTS}}</th>

                <td>{{sparepartkurang.NAMA_SPAREPART}}</td>
                <td>{{sparepartkurang.STOK_MINIMAL}}</td>
                <td>{{sparepartkurang.STOK_BARANG}}</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import Controller from "../../httpController";

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
      allsparepartkurang: [],
    };
  },

  methods: {

    async getallsparepartkurang(){
      try{
        this.allsparepartkurang = await Controller.getallsparepartkurang();
        this.filterData = this.allsparepartkurang.data;
      }catch(err){
        console.log(err);
      }
    },

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
        this.allsparepart.data = this.filterData;
      } else {
        var vcampaigns = this.allsparepart.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function(el) {
            return el.ID_SPAREPARTS.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        };

        this.allsparepart.data = makeQuery(this.SEARCH);
      }
    },

    async deletesparepart(id) {
      if (confirm("APA INGIN MENGHAPUS SPAREPART?")) {
        try {
          this.allsparepart = await Controller.deletesparepart(id);
            alert('data berhasil dihapus')

          // this.allmotor.data = this.allevent.data.reverse()
          // console.log(this.eventbyuser)
        } catch (err) {
          console.log(err);
        }

        this.$router.go();
      } else {
        // Do nothing!
      }
    }
    ,
    checklogin(){
          if(!this.$auth.check()){
              this.$router.replace('/')
                alert("LOGIN DULU :) ")
          }
        },
  },
  async created() {
      this.checklogin();
     this.getallsparepart();
     this.getallsparepartkurang();
  }
};
</script>
