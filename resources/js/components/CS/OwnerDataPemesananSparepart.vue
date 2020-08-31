<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
      <h1 class="h3 display">Tables</h1>

      <h2 class="kotakCari">
        <div class="input-group">
          <input
            @keyup="searchpemesanansparepart()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI PEMESANAN"
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
          <h4>Histori Masuk Barang</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID PEMESANAN</th>
                <th>ID SUPPLIER</th>
                <th>TGL PEMESANAN</th>
                <th>GRANDTOTAL PEMESANAN</th>
                <th>STATUS PEMESANAN</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="historipemesanan of allhistori.filter(obj=>obj.STATUS_PEMESANAN == 'Done')"
                v-bind:key="historipemesanan.ID_PEMESANAN"
              >
                <th scope="row">{{historipemesanan.ID_PEMESANAN}}</th>

                <td>{{historipemesanan.ID_SUPPLIER}}</td>
                <td>{{historipemesanan.TGL_PEMESANAN}}</td>
                <td>{{historipemesanan.GRANDTOTAL_PEMESANAN}}</td>
                <td>{{historipemesanan.STATUS_PEMESANAN}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card">
        <div class="card-header">
          <h4>Pemesanan Sparepart</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID PEMESANAN</th>
                <th>ID SUPPLIER</th>
                <th>TGL PEMESANAN</th>
                <th>GRANDTOTAL PEMESANAN</th>
                <th>STATUS PEMESANAN</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="pemesanan of allpemesanan"
                v-bind:key="pemesanan.ID_PEMESANAN"
              >
                <th scope="row">{{pemesanan.ID_PEMESANAN}}</th>

                <td>{{pemesanan.ID_SUPPLIER}}</td>
                <td>{{pemesanan.TGL_PEMESANAN}}</td>
                <td>{{pemesanan.GRANDTOTAL_PEMESANAN}}</td>
                <td>{{pemesanan.STATUS_PEMESANAN}}</td>

                <router-link
                  :to=" { name:'editpemesanansparepart', 
                  params:{ ID_PEMESANAN:pemesanan.ID_PEMESANAN,ID_SUPPLIER:pemesanan.ID_SUPPLIER,
                  TGL_PEMESANAN:pemesanan.TGL_PEMESANAN,
                  GRANDTOTAL_PEMESANAN:pemesanan.GRANDTOTAL_PEMESANAN,
                  STATUS_PEMESANAN:pemesanan.STATUS_PEMESANAN}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletepemesanansparepart(pemesanan.ID_PEMESANAN)"
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
          <h4>Verifikasi Sparepart</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID PEMESANAN</th>
                <th>ID SUPPLIER</th>
                <th>TGL PEMESANAN</th>
                <th>GRANDTOTAL PEMESANAN</th>
                <th>STATUS PEMESANAN</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="pemesanan of allpemesanan"
                v-bind:key="pemesanan.ID_PEMESANAN"
              >
                <th scope="row">{{pemesanan.ID_PEMESANAN}}</th>

                <td>{{pemesanan.ID_SUPPLIER}}</td>
                <td>{{pemesanan.TGL_PEMESANAN}}</td>
                <td>{{pemesanan.GRANDTOTAL_PEMESANAN}}</td>
                <td>{{pemesanan.STATUS_PEMESANAN}}</td>

                <router-link
                  :to=" { name:'editpemesanansparepart', 
                  params:{ ID_PEMESANAN:pemesanan.ID_PEMESANAN,ID_SUPPLIER:pemesanan.ID_SUPPLIER,
                  TGL_PEMESANAN:pemesanan.TGL_PEMESANAN,
                  GRANDTOTAL_PEMESANAN:pemesanan.GRANDTOTAL_PEMESANAN,
                  STATUS_PEMESANAN:pemesanan.STATUS_PEMESANAN}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletepemesanansparepart(pemesanan.ID_PEMESANAN)"
                  >HAPUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <router-link to="/inputpemesanansparepart">
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
      allhistori: [],
      allpemesanan: [],
      ID_PEMESANAN: "",
      FixData: [],
    };
  },

  methods: {
    async getallpemesanan() {
      try {
        this.allpemesanan = await Controller.getallpemesanan();
        this.filterData = this.allpemesanan.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getallhistori() {
      try {
        this.allhistori = await Controller.getallhistori();
        this.filterData2 = this.allhistori.data;
      } catch (err) {
        console.log(err);
      }
    },

    searchpemesanansparepart() {
      if (this.SEARCH.trim() === "") {
        this.allpemesanan.data = this.FixData;
      } else {
        var vcampaigns = this.allpemesanan.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function (el) {
            return el.ID_PEMESANAN == textse;
          });
        };

        this.allpemesanan.data = makeQuery(this.SEARCH);
      }
    },

    async deletepemesanansparepart(id) {
      if (confirm("APA INGIN MENGHAPUS PESANAN SPAREPART?")) {
        try {
          this.allpemesanan = await Controller.deletepemesanansparepart(id);
          alert("data berhasil dihapus");

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

    // checklogin(){
    //       if(!this.$auth.check()){
    //           this.$router.replace('/')
    //             alert("LOGIN DULU :) ")
    //       }
    //     },
  },

  async created() {
    this.getallhistori();
    this.getallpemesanan();
    //  this.checklogin();
  },
};
</script>

