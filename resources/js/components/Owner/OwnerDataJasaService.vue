<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
      <h1 class="h3 display">Tables</h1>

      <h2 class="kotakCari">
        <div class="input-group">
          <input
            @keyup="searchjasa()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI JASA SERVICE"
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
          <h4>TABLE Data Jasa Service</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-JASA</th>
                <th>NAMA JASA</th>
                <th>HARGA JASA</th>
                
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="jasa of alljasa.data"
                v-bind:key="jasa.ID_JASA"
              >
                <th scope="row">{{jasa.ID_JASA}}</th>

                <td>{{jasa.NAMA_JASA}}</td>
                <td>{{jasa.HARGA_JASA}}</td>
        
                <router-link
                  :to=" { name:'editjasaservice', params:{ ID_JASA:jasa.ID_JASA,NAMA_JASA:jasa.NAMA_JASA,HARGA_JASA:jasa.HARGA_JASA}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletejasa(jasa.ID_JASA)"
                  >HAPUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card">
        <div class="card-header">
          <h4>Status Pengerjaan Selesai Jasa Service</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID DETAIL PENJUALAN JASA</th>
                <th>ID TRANSAKSI</th>
                <th>ID JASA</th>
                <th>ID MONTIR ONDUTY</th>
                <th>SUBTOTAL JASA</th>
                <th>STATUS JASA</th>
                
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="detailjasa of alldetailjasa.data.filter(obj=>obj.STATUS_JASA =='Done')"
                v-bind:key="detailjasa.ID_DETAIL_PENJUALAN_JASA"
              >
                <th scope="row">{{detailjasa.ID_DETAIL_PENJUALAN_JASA}}</th>

                <td>{{detailjasa.ID_TRANSAKSI}}</td>
                <td>{{detailjasa.ID_JASA}}</td>
                <td>{{detailjasa.ID_MONTIR_ONDUTY}}</td>
                <td>{{detailjasa.SUBTOTAL_JASA}}</td>
                <td>{{detailjasa.STATUS_JASA}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card">
        <div class="card-header">
          <h4>Status Pengerjaan Selesai Jasa Service</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID DETAIL PENJUALAN JASA</th>
                <th>ID TRANSAKSI</th>
                <th>ID JASA</th>
                <th>ID MONTIR ONDUTY</th>
                <th>SUBTOTAL JASA</th>
                <th>STATUS JASA</th>
                
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="detailjasa of alldetailjasa.data.filter(obj=>obj.STATUS_JASA =='On Proccess')"
                v-bind:key="detailjasa.ID_DETAIL_PENJUALAN_JASA"
              >
                <th scope="row">{{detailjasa.ID_DETAIL_PENJUALAN_JASA}}</th>

                <td>{{detailjasa.ID_TRANSAKSI}}</td>
                <td>{{detailjasa.ID_JASA}}</td>
                <td>{{detailjasa.ID_MONTIR_ONDUTY}}</td>
                <td>{{detailjasa.SUBTOTAL_JASA}}</td>
                <td>{{detailjasa.STATUS_JASA}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <router-link to="/inputjasaservice">
      <button class="rounded-circle btn btn-success" type="button">
        <i class="material-icons pmd-sm">add</i>
      </button>
    </router-link>
  </div>
</template>


<script>
import Controller from "../../httpController";

export default {
  data() {
    return {
      alljasa: [],
      FixData:[],
      ID_JASA: "",
      NAMA_JASA: "",
      HARGA_JASA: "",
      SEARCH:"",
      alldetailjasa: []
    };
  },

  methods: {

    async getalldetailjasa(){
      try{
        this.alldetailjasa = await Controller.getalldetailjasa();
        this.FixData2 = this.alldetailjasa.data;
      }catch(err){
        console.log(err);
      }
    },

    async getalljasa() {
      try {
        this.alljasa = await Controller.getalljasa();
        this.FixData = this.alljasa.data;
      } catch (err) {
        console.log(err);
      }
    },

    searchjasa() {
      if (this.SEARCH.trim() === "") {
        this.alljasa.data = this.FixData;
      } else {
        var vcampaigns = this.alljasa.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function(el) {
            return el.NAMA_JASA.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        };

        this.alljasa.data = makeQuery(this.SEARCH);
      }
    },

    async deletejasa(id) {
      if (confirm("APA INGIN MENGHAPUS JASA?")) {
        try {
          this.alljasa = await Controller.deletejasa(id);
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
    },
    checklogin(){
          if(!this.$auth.check()){
              this.$router.replace('/')
                alert("LOGIN DULU :) ")
          }
        },
  },
  

  async created() {
    this.getalljasa();
    this.getalldetailjasa();
     this.checklogin();
  }
};
</script>

