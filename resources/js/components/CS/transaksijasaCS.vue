<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
      <h1 class="h3 display">Tables</h1>

      <h2 class="kotakCari">
        <div class="input-group">
          <input
            @keyup="searchtransaksijasa()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI TRANSAKSI JASA"
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
          <h4>TABLE TRANSAKSI JASA</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-DETAIL PENJUALAN</th>
                <th>ID-TRANSAKSI</th>
                <th>ID-JASA</th>
                <th>ID-MONTIR ON DUTY</th>
                <th>SUB TOTAL JASA</th>
                <th>STATUS JASA</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="transaksijasa of alltransaksijasa.data"
                v-bind:key="transaksijasa.ID_DETAIL_PENJUALAN_JASA"
              >
                <th scope="row">{{transaksijasa.ID_DETAIL_PENJUALAN_JASA}}</th>

                <td>{{transaksijasa.ID_TRANSAKSI}}</td>
                <td>{{transaksijasa.ID_JASA}}</td>
                <td>{{transaksijasa.ID_MONTIR_ONDUTY}}</td>
                <td>{{transaksijasa.SUBTOTAL_JASA}}</td>
                <td>{{transaksijasa.STATUS_JASA}}</td>

                <router-link
                  :to=" { name:'edittransaksijasa', params:{ ID_DETAIL_PENJUALAN_JASA:transaksijasa.ID_DETAIL_PENJUALAN_JASA,ID_TRANSAKSI:transaksijasa.ID_TRANSAKSI,ID_JASA:transaksijasa.ID_JASA,ID_MONTIR_ONDUTY:transaksijasa.ID_MONTIR_ONDUTY,SUBTOTAL_JASA:transaksijasa.SUBTOTAL_JASA,STATUS_JASA:transaksijasa.STATUS_JASA}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletetransaksijasa(transaksijasa.ID_DETAIL_PENJUALAN_JASA)"
                  >HAPUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <router-link to="/tambahtransaksipenjualan">
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
      alltransaksijasa: [],
      FixData: [],
      ID_DETAIL_PENJUALAN_JASA: "",
      ID_TRANSAKSI: "",
      ID_JASA: "",
      ID_MONTIR_ONDUTY: "",
      SUBTOTAL_JASA: "",
      STATUS_JASA: "",
      JENIS_JASA: "",
    };
  },

  methods: {
    async getalltransaksijasa() {
      try {
        this.alltransaksijasa = await Controller.getalltransaksijasa();
        this.FixData = this.alltransaksijasa.data;
      } catch (err) {
        console.log(err);
      }
    },

    searchtransaksijasa() {
      if (this.SEARCH.trim() === "") {
        this.alltransaksijasa.data = this.FixData;
      } else {
        var vcampaigns = this.alltransaksijasa.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function (el) {
            return el.ID_DETAIL_PENJUALAN_JASA == textse;
          });
        };

        this.alltransaksijasa.data = makeQuery(this.SEARCH);
      }
    },

    async deletetransaksijasa(id) {
      if (confirm("APA INGIN MENGHAPUS TRANSAKSI JASA?")) {
        try {
          console.log(id);
          this.alltransaksijasa = await Controller.deletetransaksijasa(id);
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
    this.getalltransaksijasa();
    //  this.checklogin();
  },
};
</script>

