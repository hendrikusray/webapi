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
          <strong>LAPORAN PENDAPATAN BULANAN</strong>
        </p>
        <p>
          Tahun:
          <span></span>
          {{year}}
        </p>

        <table id="tableBulan">
          <thead>
            <th style="width: 50px; text-align: center">No</th>
            <th style="width: 150px; text-align: center">Bulan</th>
            <th style="width: 150px; text-align: center">Service</th>
            <th style="width: 150px; text-align: center">Spareparts</th>
            <th style="width: 150px; text-align: center">Total</th>

            <tr v-for="pendapatan of all" v-bind:key="pendapatan">
              <td>{{count++}}</td>
              <td>{{pendapatan.bulan}}</td>
              <td>{{pendapatan.service}}</td>
              <td>{{pendapatan.sparepart}}</td>
              <td>{{pendapatan.total}}</td>

              <p id="judultotal">
                <strong>
                  TOTAL
                  <span id="total"></span>
                </strong>
                {{pendapatan.total}}
              </p>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        <br />
        <p id="dicetak" align="right">
          dicetak tanggal
          <span id="tanggal">{{gabungan}}</span>
        </p>
        <a @click="printDong()" class="btn btn-primary">PRINT</a>

        <button @click="back()" type="button" class="btn btn-primary">back</button>
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
      all: [],
      count: 100,
      test: "",
      bulan: "",
      service: "",
      sparepart: "",
      total: "",
      year: "",
      test: "",
    };
  },

  methods: {
    async pendapatanBulanan() {
      try {
        this.year = new Date().getFullYear();
        this.all = await Controller.pendapatanBulanan(this.year);

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
        this.test = bul[this.bulan.padStart(1, "0")];

        this.gabungan = date + " " + tengah + " " + this.year;
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
    this.pendapatanBulanan();
  },
};
</script>