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
            placeholder="CARI MOTOR PELANGGAN"
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
          <h4>TABLE Data motor pelanggan</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-KENDARAAN-PELANGGAN</th>
                <th>ID-MOTOR</th>
                <th>ID-PELANGGAN</th>
                <th>NO-PLAT</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="motorpelanggan of allmotorpelanggan.data"
                v-bind:key="motorpelanggan.ID_KENDARAAN_PEL"
              >
                <th scope="row">{{motorpelanggan.ID_KENDARAAN_PEL}}</th>

                <td>{{motorpelanggan.ID_MOTOR}}</td>
                <td>{{motorpelanggan.ID_PELANGGAN}}</td>
                <td>{{motorpelanggan.NO_PLAT}}</td>

                <router-link
                  :to=" { name:'editmotorpelanggan', params:{ ID_KENDARAAN_PEL:motorpelanggan.ID_KENDARAAN_PEL,ID_MOTOR:motorpelanggan.ID_MOTOR,ID_PELANGGAN:motorpelanggan.ID_PELANGGAN,NO_PLAT:motorpelanggan.NO_PLAT}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletemotorpelanggan(motorpelanggan.ID_KENDARAAN_PEL)"
                  >HAPUS</button>
                </td>
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
      allmotorpelanggan: [],
      FixData: [],
      ID_KENDARAAN_PEL: "",
      ID_MOTOR: "",
      ID_PELANGGAN: "",
      NO_PLAT: "",
      SEARCH: "",
    };
  },

  methods: {
    async getallmotorpelanggan() {
      try {
        this.allmotorpelanggan = await Controller.getallmotorpelanggan();
        this.FixData = this.allmotorpelanggan.data;
      } catch (err) {
        console.log(err);
      }
    },

    searchpelanggan() {
      if (this.SEARCH.trim() === "") {
        this.allmotorpelanggan.data = this.FixData;
      } else {
        var vcampaigns = this.allmotorpelanggan.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function (el) {
            return el.ID_KENDARAAN_PEL == textse;
          });
        };

        this.allmotorpelanggan.data = makeQuery(this.SEARCH);
      }
    },

    async deletemotorpelanggan(id) {
      if (confirm("APA INGIN MENGHAPUS MOTOR PELANGGAN?")) {
        try {
          this.allmotorpelanggan = await Controller.deletemotorpelanggan(id);
          alert("sukses menghapus motor pelanggan");
        } catch (err) {
          console.log(err);
        }

        this.$router.go();
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
    this.getallmotorpelanggan();
    //  this.checklogin();
  },
};
</script>

