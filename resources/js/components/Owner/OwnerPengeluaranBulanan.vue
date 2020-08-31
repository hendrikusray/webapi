<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
     <h1 class="h3 display"></h1>

      <h2 class="kotakCari">
        <div class="input-group">
        
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
          <h4>LAPORAN PENGELUARAN BULANAN</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>NO</th>
                <th>BULAN </th>
                <th>JUMLAH PENGELUARAN</th>
              
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
               v-for="transaksipenjualan of TRANSAKSIPENJUALAN.data"
                  v-bind:key="transaksipenjualan.ID_TRANSAKSI"
           
              >
                <th scope="row">{{tes=counter+tes-1}}</th>

                <td>{{transaksipenjualan.TGL_TRANSAKSI}}</td>
                <td>{{transaksipenjualan.GRANDTOTAL}}</td>
                <td></td>
                <td></td>
               

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
       ID_TRANSAKSI: "",
       ID_CABANG: "",
       ID_PELANGGAN:"",
        TGL_TRANSAKSI:"",
       TRANSAKSIPENJUALAN:[],
       counter:0,
       tes :300,
       TOTAL_SEMUA:0

 
    };
  },
 
  

  methods: {
  
    async gettransaksipenjualan() {
      try {
        this.TRANSAKSIPENJUALAN = await Controller.gettransaksipenjualan();
       
      } catch (err) {
        console.log(err);
      }
    }
    
  },async created() {
    this.gettransaksipenjualan();
    //  this.checklogin();
  }


};
</script>

