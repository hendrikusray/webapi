<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
      <h1 class="h3 display">Tables</h1>

      <h2 class="kotakCari">
        <div class="input-group">
          <input
            @keyup="searchtransaksispareparts()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI TRANSAKSI SPAREPART"
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
          <h4>TABLE TRANSAKSI SPAREPARTS</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-PENJUALAN SPAREPARTS</th>
                <th>ID-TRANSAKSI</th>
                <th>ID-SPAREPARTS</th>
                <th>JUMLAH SPAREPARTS</th>
                <th>SUB TOTAL SPAREPARTS</th>
                <th>HARGA TAMPUNG SPAREPARTS</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="transaksispareparts of alltransaksispareparts.data"
                v-bind:key="transaksispareparts.ID_PENJUALAN_SPAREPART"
              >
                <th scope="row">{{transaksispareparts.ID_PENJUALAN_SPAREPART}}</th>

                <td>{{transaksispareparts.ID_TRANSAKSI}}</td>
                <td>{{transaksispareparts.ID_SPAREPARTS}}</td>
                <td>{{transaksispareparts.JUMLAH_SPAREPART}}</td>
                <td>{{transaksispareparts.SUBTOTAL_SPAREPART}}</td>
                <td>{{transaksispareparts.HARGA_TAMPUNG_JUAL}}</td>

                <router-link
                  :to=" { name:'edittransaksisparepart', params:{ ID_PENJUALAN_SPAREPART:transaksispareparts.ID_PENJUALAN_SPAREPART,ID_TRANSAKSI:transaksispareparts.ID_TRANSAKSI,ID_SPAREPARTS:transaksispareparts.ID_SPAREPARTS,JUMLAH_SPAREPART:transaksispareparts.JUMLAH_SPAREPART,SUBTOTAL_SPAREPART:transaksispareparts.SUBTOTAL_SPAREPART,HARGA_TAMPUNG_JUAL:transaksispareparts.HARGA_TAMPUNG_JUAL}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletetransaksispareparts(transaksispareparts.ID_PENJUALAN_SPAREPART)"
                  >HAPUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <router-link to="/inputtransaksisparepart">
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
      alltransaksispareparts: [],
      FixData: [],
      ID_PENJUALAN_SPAREPART: "",
      ID_TRANSAKSI: "",
      ID_SPAREPARTS: "",
      JUMLAH_SPAREPART: "",
      SUBTOTAL_SPAREPART: "",
      HARGA_TAMPUNG_JUAL: "",
    };
  },

  methods: {
    async getalltransaksispareparts() {
      try {
        this.alltransaksispareparts = await Controller.getalltransaksispareparts();
        this.FixData = this.alltransaksispareparts.data;
      } catch (err) {
        console.log(err);
      }
    },

    searchtransaksispareparts() {
      if (this.SEARCH.trim() === "") {
        this.alltransaksispareparts.data = this.FixData;
      } else {
        var vcampaigns = this.alltransaksispareparts.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function (el) {
            return el.ID_PENJUALAN_SPAREPART == textse;
          });
        };

        this.alltransaksispareparts.data = makeQuery(this.SEARCH);
      }
    },

    async deletetransaksispareparts(id) {
      if (confirm("APA INGIN MENGHAPUS TRANSAKSI SPAREPARTS?")) {
        try {
          this.alltransaksispareparts = await Controller.deletetransaksispareparts(
            id
          );
          alert("sukses menghapus transaksi");
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
    this.getalltransaksispareparts();
    //  this.checklogin();
  },
};
</script>

