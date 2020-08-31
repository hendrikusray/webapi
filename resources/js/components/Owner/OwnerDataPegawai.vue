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
            placeholder="CARI PEGAWAI"
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
          <h4>TABLE Data Pegawai</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-PEGAWAI</th>
                <th>ID-CABANG</th>
                <th>NAMA PEGAWAI</th>
                <th>ALAMAT PEGAWAI</th>
                <th>TELEPON PEGAWAI</th>
                <th>GAJI PEGAWAI</th>
                <th>NAMA_CABANG</th>
                <th>ROLE</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="pegawai in allpegawai.data"
                v-bind:key="pegawai.ID_PEGAWAI"
              >
                <th scope="row">{{pegawai.ID_PEGAWAI}}</th>

                <td>{{pegawai.ID_CABANG}}</td>
                <td>{{pegawai.NAMA_PEGAWAI}}</td>
                <td>{{pegawai.ALAMAT_PEGAWAI}}</td>
                <td>{{pegawai.TELEPON_PEGAWAI}}</td>
                <td>{{pegawai.GAJI_PEGAWAI}}</td>
                <td>{{pegawai.NAMA_CABANG}}</td>
                <td>{{pegawai.ROLE}}</td>

                <router-link
                  :to=" { name:'editpegawai', params:{ ID_PEGAWAI:pegawai.ID_PEGAWAI, ID_CABANG:pegawai.ID_CABANG, NAMA_PEGAWAI:pegawai.NAMA_PEGAWAI, ALAMAT_PEGAWAI:pegawai.ALAMAT_PEGAWAI  , TELEPON_PEGAWAI:pegawai.TELEPON_PEGAWAI,GAJI_PEGAWAI:pegawai.GAJI_PEGAWAI}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletepegawai(pegawai.ID_PEGAWAI)"
                  >HAPUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <router-link to="/inputpegawai">
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
      allpegawai: [],
      filterData: [],
      ID_PEGAWAI: "",
      NAMA_CABANG: "",
      NAMA_PEGAWAI: "",
      ALAMAT_PEGAWAI: "",
      TELEPON_PEGAWAI: "",
      GAJI_PEGAWAI: "",
      ID_USER:"",
      ROLE: "",
      SEARCH: ""
    };
  },

  computed: {
    // filtered()
    // {
    //     let filter = this.allpegawai.filter( pegawai=>pegawai.ID_PEGAWAI === this.SEARCH)
    //     return filter
    // }
  },

  methods: {
    async getallpegawai() {
      try {
        console.log("cek")
      
        this.allpegawai = await Controller.getallpegawai();
        
        this.filterData = this.allpegawai.data;
        console.log(filterCampaigns);
      } catch (err) {
        console.log(err);
      }
    },

    ShowFilter() {
      if (this.SEARCH.trim() === "") {
        this.allpegawai.data = this.filterData;
      } else {
        var vcampaigns = this.allpegawai.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function(el) {
            return el.ID_PEGAWAI == textse;
          });
        };

        this.allpegawai.data = makeQuery(this.SEARCH);
      }
    },

    async deletepegawai(id) {
      if (confirm("APA INGIN MENGHAPUS PEGAWAI?")) {
        try {
          this.allpegawai = await Controller.deletepegawai(id);
        alert('DATA TELAH TERHAPUS')
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
    // checklogin(){
    //       if(!this.$auth.check()){
    //           this.$router.replace('/')
    //             alert("LOGIN DULU :) ")
    //       }
    //     },
  },

  async created() {
    this.getallpegawai();

    //  this.checklogin();
  }
};
</script>

