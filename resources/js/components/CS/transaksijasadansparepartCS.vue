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
            placeholder="CARI JASA DAN SPAREPART"
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
          <h4>TABLE TRANSAKSI JASA dan SPAREPARTS</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-DETAIL PENJUALAN JASA</th>
                <th>ID-DETAIL PENJUALAN SPAREPARTS</th>
                <th>ID SPAREPARTS</th>
                <th>JUMLAH SPAREPART</th>
                <th>ID JASA</th>
                <th>ID MONTIR</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="transaksijasa of TAMPUNG && TAMPUNG2"
                v-bind:key="transaksijasa.ID_DETAIL_PENJUALAN_JASA && transaksisparepart.ID_PENJUALAN_SPAREPART"
              >
                <th scope="row">{{transaksijasa.ID_DETAIL_PENJUALAN_JASA}}</th>

                <td>{{transaksijasa.ID_TRANSAKSI}}</td>
                <td>{{transaksijasa.ID_PENJUALAN_SPAREPART}}</td>
                <td>{{transaksijasa.JUMLAH_SPAREPART}}</td>
                <td>{{transaksijasa.ID_JASA}}</td>
                <td>{{transaksijasa.ID_MONTIR_ONDUTY}}</td>

                <td>
                  <button type="button" class="btn btn-primary">EDIT</button>
                </td>

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
      alltransaksispareparts: [],
      FixData: [],
      ID_DETAIL_PENJUALAN_JASA: "",
      ID_TRANSAKSI: "",
      ID_JASA: "",
      ID_MONTIR_ONDUTY: "",
      SUBTOTAL_JASA: "",
      STATUS_JASA: "",
      JENIS_JASA: "",
      ID_PENJUALAN_SPAREPART: "",
      ID_TRANSAKSI: "",
      ID_SPAREPARTS: "",
      JUMLAH_SPAREPART: "",
      SUBTOTAL_SPAREPART: "",
      HARGA_TAMPUNG_JUAL: "",
      TAMPUNG: "",
      TAMPUNG2: "",
    };
  },

  methods: {
    async getalltransaksijasa() {
      try {
        this.alltransaksijasa = await Controller.getalltransaksijasa();
        this.alltransaksispareparts = await Controller.getalltransaksispareparts();
        this.TAMPUNG = this.alltransaksijasa.data;
        this.TAMPUNG2 = this.alltransaksispareparts.data;

        console.log(this.TAMPUNG);
        console.log(this.TAMPUNG2);
      } catch (err) {
        console.log(err);
      }
    },
    async getalltransaksispareparts() {
      try {
        this.alltransaksispareparts = await Controller.getalltransaksispareparts();
        this.FixData = this.alltransaksispareparts.data;
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

    // checklogin(){
    //       if(!this.$auth.check()){
    //           this.$router.replace('/')
    //             alert("LOGIN DULU :) ")
    //       }
    //     },
  },

  async created() {
    this.getalltransaksijasa();
    this.getalltransaksispareparts();
    //  this.checklogin();
  },
};
</script>

