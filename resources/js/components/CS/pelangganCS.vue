<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
      <h1 class="h3 display">Tables</h1>

      <h2 class="kotakCari">
        <div class="input-group">
          <input
            @keyup="searchpelanggan()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI PELANGGAN"
          />
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
          <h4>TABLE Data Pelanggan</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-PELANGGAN</th>
                <th>NAMA PELANGGAN</th>
                <th>TELEPON PELANGGAN</th>
                <th>ALAMAT PELANGGAN</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="pelanggan of allpelanggan.data"
                v-bind:key="pelanggan.ID_PELANGGAN"
              >
                <th scope="row">{{pelanggan.ID_PELANGGAN}}</th>

                <td>{{pelanggan.NAMA_PELANGGAN}}</td>
                <td>{{pelanggan.ALAMAT_PELANGGAN}}</td>
                <td>{{pelanggan.TELEPON_PELANGGAN}}</td>

                <router-link
                  :to=" { name:'detailmotor', params:{ ID_PELANGGAN:pelanggan.ID_PELANGGAN,NAMA_PELANGGAN:pelanggan.NAMA_PELANGGAN,ALAMAT_PELANGGAN:pelanggan.ALAMAT_PELANGGAN,TELEPON_PELANGGAN:pelanggan.TELEPON_PELANGGAN}}"
                >
                  <td>
                    <button type="button" class="btn btn-warning">DETAIL</button>
                  </td>
                </router-link>

                <router-link
                  :to=" { name:'editpelanggan', params:{ ID_PELANGGAN:pelanggan.ID_PELANGGAN,NAMA_PELANGGAN:pelanggan.NAMA_PELANGGAN,ALAMAT_PELANGGAN:pelanggan.ALAMAT_PELANGGAN,TELEPON_PELANGGAN:pelanggan.TELEPON_PELANGGAN}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletepelanggan(pelanggan.ID_PELANGGAN)"
                  >HAPUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <router-link to="/inputpelanggan">
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
      allpelanggan: [],
      FixData: [],
      ID_PELANGGAN: "",
      NAMA_PELANGGAN: "",
      ALAMAT_PELANGGAN: "",
      TELEPON_PELANGGAN: "",
      SEARCH: "",
    };
  },

  methods: {
    async getallpelanggan() {
      try {
        this.allpelanggan = await Controller.getallpelanggan();
        this.FixData = this.allpelanggan.data;
      } catch (err) {
        console.log(err);
      }
    },

    searchpelanggan() {
      if (this.SEARCH.trim() === "") {
        this.allpelanggan.data = this.FixData;
      } else {
        var vcampaigns = this.allpelanggan.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function (el) {
            return el.ID_PELANGGAN == textse;
          });
        };

        this.allpelanggan.data = makeQuery(this.SEARCH);
      }
    },

    async deletepelanggan(id) {
      if (confirm("APA INGIN MENGHAPUS JASA?")) {
        try {
          this.allpelanggan = await Controller.deletepelanggan(id);
          alert("sukses menghapus pelanggan");
        } catch (err) {
          console.log(err);
        }

        //this.$router.go();
      } else {
        // Do nothing!
      }
    },
    // checklogin(){
    //       if(!this.$auth.check()){
    //           this.$router.replace('/')
    //             alert("LOGIN DULU :) ")
    //       }
    //     },
  },

  async created() {
    this.getallpelanggan();
    //  this.checklogin();
  },
};
</script>

