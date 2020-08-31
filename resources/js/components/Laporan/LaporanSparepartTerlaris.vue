<template>
  <div>
    <div id="fullcontainer">
      <div id="container">
        <div id="header">
          <img src="asset/laporanlogo.png" alt="Logo" />
          <p>ATMA AUTO</p>
          <p>MOTORCYCLE SPAREPARTS AND SERVICES</p>
          <p>Jl. Babarsari No. 43 Yogyakarta 552181</p>
          <p>Telp. (0274) 487711</p>
          <p>http://atmaauto.com</p>
        </div>

        <hr />
        <p style="text-align: center">
          <strong>LAPORAN SPAREPART TERLARIS</strong>
        </p>
        <p>
          Tahun:
          <span id="tahun"></span>
        </p>

        <table id="tableBulan">
          <thead>
            <th style="width: 50px; text-align: center">No</th>
            <th style="width: 150px; text-align: center">Bulan</th>
            <th style="width: 180px; text-align: center">Nama Barang</th>
            <th style="width: 180px; text-align: center">Tipe Barang</th>
            <th style="width: 180px; text-align: center">Jumlah Penjualan</th>

            <tr
              v-for="transaksipenjualan of detailpenjualansparepart.data"
              v-bind:key="transaksipenjualan.ID_PENJUALAN_SPAREPART"
            >
              <td>{{counter++}}</td>
              <td>{{transaksipenjualan.TGL_TRANSAKSI}}</td>
              <td>{{transaksipenjualan.NAMA_SPAREPART}}</td>
              <td>{{transaksipenjualan.TIPE}}</td>
              <td>{{transaksipenjualan.JUMLAH_SPAREPART}}</td>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
        <a @click="printDong()" class="btn btn-primary">PRINT</a>

        <button @click="back()" type="button" class="btn btn-primary">back</button>
        <p id="dicetak" align="right" style="display: none">
          dicetak tanggal
          <span id="tanggal"></span>
        </p>
      </div>
      <br />
      <br />
      <div id="container2">
        <canvas></canvas>
      </div>
    </div>
  </div>
</template>
<style>
table,
th,
td {
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
      myChart: "",
      detailpenjualansparepart: [],
      NAMA_SPAREPART: "",
      TIPE: "",
      counter: -299,
      ID_PENJUALAN_SPAREPART: "",
      JUMLAH_SPAREPART: "",
      TGL_TRANSAKSI: "",
    };
  },

  methods: {
    async getalltransaksispareparts() {
      try {
        this.detailpenjualansparepart = await Controller.getalltransaksispareparts();
      } catch (err) {
        console.log(err);
      }
    },
    printDong() {
      window.print();
    },
    back() {
      this.$router.push("/ownerdatasupplier");
      this.$router.go();
    },
  },

  async created() {
    this.getalltransaksispareparts();
  },
};
</script>