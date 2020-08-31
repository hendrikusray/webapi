<template>
    <div>
        <div id="fullcontainer">
        <div id="container">
            <div id="header">
                <img src="asset/laporanlogo.png" alt="Logo">
                <p>ATMA AUTO</p>
                <p>MOTORCYCLE SPAREPARTS AND SERVICES </p>
                <p>Jl. Babarsari No. 43 Yogyakarta 552181 </p>
                <p>Telp. (0274) 487711 </p>
                <p>http://atmaauto.com </p>
            </div>

            <hr>

             <p style="text-align: center"><strong>LAPORAN PENJUALAN JASA</strong></p>
            <p>Tahun: <span id="tahun"></span></p>
            <p>Bulan: <span id="bulan"></span></p>
        
            <table id="tableBulan">
                <thead>
                    
                        <th style="width: 50px; text-align: center">No</th>
                        <th style="width: 150px; text-align: left">Merk</th>
                        <th style="width: 180px; text-align: left">Tipe Motor</th>
                        <th style="width: 200px; text-align: Center">Nama Service</th>
                        <th style="width: 200px; text-align: Center">Jumlah Penjualan</th>

                <tr 
                v-for="transaksijasa of transaksijasa.data"
                v-bind:key="transaksijasa.ID_DETAIL_PENJUALAN_JASA">

                 <td> {{counter++}}</td>
                <td>{{transaksijasa.MERK_MOTOR}}</td>
                <td>{{transaksijasa.TIPE_MOTOR}}</td>
                <td> {{transaksijasa.NAMA_JASA}}</td> 
                <td> {{transaksijasa.SUBTOTAL_JASA}}</td> 
                 </tr>     
                    
                </thead>
                <tbody>
                </tbody>
            </table>

            <p id="dicetak" align="right" style="display: none">dicetak tanggal <span id="tanggal"></span></p>
             <a
                    @click="printDong()"
                    class="btn btn-primary"
                  >PRINT</a>


                  <button @click="back()" type="button" class="btn btn-primary">back</button>
        </div>
        <br>
        <br>
        <div id="container2">
            <canvas></canvas>
        </div>
    </div>

    </div>
</template>
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
}

img {
    float: left;
    width: 150px;
    height: 150px;
    margin-left: 0px;
    margin-right: -70px;
}

#container {
    margin: auto;
    width: 1023px;
    border: 3px solid black;
    border-collapse: collapse;
    padding: 10px 40px;
}

#judultotal {
    text-align: right;
}

#container2 {
    margin: auto;
    width: 600px;
    border: 1px solid black;
    border-collapse: collapse;
    padding: 20px;

}

#header {
    margin: auto;
    text-align: center;
}
</style>


<script>
import Controller from "../../httpController";

export default {
  data() {
    return {

        myChart:"",
        transaksijasa:[],
        ID_DETAIL_PENJUALAN_JASA:"",
        MERK_MOTOR:"",
        TIPE_MOTOR:"",
        counter:-299,
        NAMA_JASA:"",
        SUBTOTAL_JASA:""
        

     
    };
  },

  methods: {
      printDong() {
        window.print();
    },
     back(){
        this.$router.push("/ownerdatasupplier");
        this.$router.go();
   },
       async getalltransaksijasa(){
      try{
        this.transaksijasa = await Controller.getalltransaksijasa();
        this.filterData = this.transaksijasa.data;
      }catch(err){
        console.log(err);
      }
    },
      
  }, 
  

  async created() {
   this.getalltransaksijasa()
  }
};
</script>