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
          <strong>LAPORAN PENGELUARAN BULANAN</strong>
        </p>
        <p>
          Tahun:
          <span id="tahun"></span>
        </p>

        <table id="tableBulan">
          <thead>
            <th style="width: 50px; text-align: center">No</th>
            <th style="width: 200px; text-align: left">Bulan</th>
            <th style="width: 240px; text-align: center">Jumlah Pengeluaran</th>
          </thead>
          <tr
            v-for="transaksipenjualan of TRANSAKSIPENJUALAN.data"
            v-bind:key="transaksipenjualan.ID_TRANSAKSI"
          >
            <td>{{counter++}}</td>
            <td>{{transaksipenjualan.TGL_TRANSAKSI}}</td>
            <td>{{transaksipenjualan.GRANDTOTAL}}</td>
          </tr>
          <tbody></tbody>
        </table>
        <p id="judultotal">
          <strong>
            TOTAL
            <span id="total"></span>
          </strong>
          {{GRANDTOTAL}}
        </p>
        <a @click="printDong()" class="btn btn-primary">PRINT</a>
        <button @click="back()" type="button" class="btn btn-primary">back</button>
        <br />
        <p id="dicetak" align="right">
          dicetak tanggal
          <span id="tanggal"></span>
          {{gabungan}}
        </p>
      </div>
      <br />
      <br />
      <div id="container2">
        <canvas id="chart"></canvas>
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

table tr td:nth-child(1) {
  text-align: center;
}

table tr td:nth-child(3) {
  text-align: right;
}

#container {
  width: 1020px;
  margin: auto;
  border: 3px solid black;
  border-collapse: collapse;
  padding: 30px 40px;
}

img {
  float: left;
  width: 150px;
  height: 150px;
  margin-left: 0px;
  margin-right: -70px;
}

#judultotal {
  text-align: right;
}

#container2 {
  margin: auto;
  width: 500px;
  border: 1px solid black;
  border-collapse: collapse;
  padding: 20px;
}

#header {
  margin: auto;
  text-align: center;
}

#tableBulan {
  margin: auto;
}
</style>


<script>
import Controller from "../../httpController";

export default {
  data() {
    return {
      myChart: "",
      counter: -499,
      TGL_TRANSAKSI: "",
      GRAND_TOTAL: "",
      TRANSAKSIPENJUALAN: [],
      gabungan: "",
    };
  },

  methods: {
    printDong() {
      window.print();
    },
    back() {
      this.$router.push("/ownerdatasupplier");
      this.$router.go();
    },

    async gettransaksipenjualan() {
      try {
        this.TRANSAKSIPENJUALAN = await Controller.gettransaksipenjualan();
        let year = new Date().getFullYear();
        let date = new Date().getDate();
        let month = new Date().getMonth();

        let bul = [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
        ];

        let tengah = bul[month];

        this.gabungan = date + " " + tengah + " " + year;
      } catch (err) {
        console.log(err);
      }
    },
  },

  async created() {
    this.gettransaksipenjualan();
  },
};
</script>