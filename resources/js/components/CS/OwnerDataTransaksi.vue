<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
      <h1 class="h3 display">Tables</h1>
    </header>
    <div class="row">
      <div class="card">
        <div class="card-header">
          <h4>TABLE Transaksi Yang Belum Lunas</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID TRANSAKSI</th>
                <th>ID CABANG</th>
                <th>ID PELANGGAN</th>
                <th>TGL TRANSAKSI</th>
                <th>SUBTOTAL</th>
                <th>DISKON</th>
                <th>GRANDTOTAL</th>
                <th>STATUS TRANSAKSI</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="transaksibelumlunas of alltransaksi.data.filter(obj=>obj.STATUS_TRANSAKSI =='Not Paid')"
                v-bind:key="transaksibelumlunas.ID_TRANSAKSI"
              >
                <th scope="row">{{transaksibelumlunas.ID_TRANSAKSI}}</th>

                <td>{{transaksibelumlunas.ID_CABANG}}</td>
                <td>{{transaksibelumlunas.ID_PELANGGAN}}</td>
                <td>{{transaksibelumlunas.TGL_TRANSAKSI}}</td>
                <td>{{transaksibelumlunas.SUBTOTAL}}</td>
                <td>{{transaksibelumlunas.DISKON}}</td>
                <td>{{transaksibelumlunas.GRANDTOTAL}}</td>
                <td>{{transaksibelumlunas.STATUS_TRANSAKSI}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card">
        <div class="card-header">
          <h4>Riwayat Transaksi Konsumen</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID TRANSAKSI</th>
                <th>ID CABANG</th>
                <th>ID PELANGGAN</th>
                <th>TGL TRANSAKSI</th>
                <th>SUBTOTAL</th>
                <th>DISKON</th>
                <th>GRANDTOTAL</th>
                <th>STATUS TRANSAKSI</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="transaksibelumlunas of alltransaksi.data.filter(obj=>obj.STATUS_TRANSAKSI =='Paid')"
                v-bind:key="transaksibelumlunas.ID_TRANSAKSI"
              >
                <th scope="row">{{transaksibelumlunas.ID_TRANSAKSI}}</th>

                <td>{{transaksibelumlunas.ID_CABANG}}</td>
                <td>{{transaksibelumlunas.ID_PELANGGAN}}</td>
                <td>{{transaksibelumlunas.TGL_TRANSAKSI}}</td>
                <td>{{transaksibelumlunas.SUBTOTAL}}</td>
                <td>{{transaksibelumlunas.DISKON}}</td>
                <td>{{transaksibelumlunas.GRANDTOTAL}}</td>
                <td>{{transaksibelumlunas.STATUS_TRANSAKSI}}</td>
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
      alltransaksi: [],
    };
  },

  methods: {
    async getalltransaksibelumlunas() {
      try {
        this.alltransaksi = await Controller.getalltransaksibelumlunas();
        this.FixData = this.alltransaksi.data;
      } catch (err) {
        console.log(err);
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
    this.getalltransaksibelumlunas();
    //  this.checklogin();
  },
};
</script>

