<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
      <h1 class="h3 display">Tables</h1>

      <h2 class="kotakCari">
        <div class="input-group">
          <input
            @keyup="searchcabang()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI CABANG"
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
          <h4>TABLE Data Cabang</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-CABANG</th>
                <th>NAMA CABANG</th>
                <th>ALAMAT CABANG</th>
                <th>TELEPON CABANG</th>
                
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="cabang of allcabang.data"
                v-bind:key="cabang.ID_CABANG"
              >
                <th scope="row">{{cabang.ID_CABANG}}</th>

                <td>{{cabang.NAMA_CABANG}}</td>
                <td>{{cabang.ALAMAT_CABANG}}</td>
                <td>{{cabang.TELEPON_CABANG}}</td>
        
                <router-link
                  :to=" { name:'editcabang', params:{ ID_CABANG:cabang.ID_CABANG,NAMA_CABANG:cabang.NAMA_CABANG,ALAMAT_CABANG:cabang.ALAMAT_CABANG,TELEPON_CABANG:cabang.TELEPON_CABANG}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletecabang(cabang.ID_CABANG)"
                  >HAPUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <router-link to="/inputcabang">
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
      allcabang: [],
      FixData:[],
      ID_CABANG: "",
      NAMA_CABANG: "",
      ALAMAT_CABANG: "",
      TELEPON_CABANG: "",
      SEARCH:""
    };
  },

  methods: {
    async getallcabang() {
      try {
        this.allcabang = await Controller.getallcabang();
        this.FixData = this.allcabang.data;
      } catch (err) {
        console.log(err);
      }
    },

    searchcabang() {
      if (this.SEARCH.trim() === "") {
        this.allcabang.data = this.FixData;
      } else {
        var vcampaigns = this.allcabang.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function(el) {
            return el.ID_CABANG == textse;
          });
        };

        this.allcabang.data = makeQuery(this.SEARCH);
      }
    },

    async deletecabang(id) {
      if (confirm("APA INGIN MENGHAPUS JASA?")) {
        try {
         this.allcabang = await Controller.deletecabang(id);
           // alert('data berhasil dihapus')

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
    this.getallcabang();
     this.checklogin();
  }
};
</script>

