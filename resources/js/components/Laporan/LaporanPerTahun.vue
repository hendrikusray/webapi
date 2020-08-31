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
          <strong>LAPORAN PENDAPATAN TAHUNAN</strong>
        </p>

        <table id="tableBulan">
          <thead>
            <th style="width: 50px; text-align: center">No</th>
            <th style="width: 150px; text-align: center">Tahun</th>
            <th style="width: 250px; text-align: center">Cabang</th>
            <th style="width: 200px; text-align: center">Total</th>

            <tr v-for="pendapatan of all" v-bind:key="pendapatan">
              <td>{{count++}}</td>
              <td>{{pendapatan.tahun}}</td>
              <td>{{pendapatan.cabang}}</td>
              <td>{{pendapatan.sub}}</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <p id="judultotal">
          <strong>
            TOTAL
            <span id="total"></span>
          </strong>755000
        </p>
        <br />
        <p id="dicetak" align="right">
          dicetak tanggal
          <span id="tanggal"></span>
          {{gabungan}}
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
      count: -299,
      SPAREPART: "",
      cabang: "",
      jasa: "",
      tahun: "",
      total: "",
      sub: "",
      test: "",
      gabungan: "",
    };
  },

  methods: {
    async pendapatanTahunan() {
      try {
        this.all = await Controller.pendapatanTahunan();
        let date = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
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

        let bulan = bul[month];

        this.gabungan = date + " " + bulan + " " + year;
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
    grafik() {
      this.myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: bul,
          datasets: [
            {
              label: "jasa",
              backgroundColor: "blue",
              data: this.jasa,
            },
            {
              label: "SPAREPART",
              backgroundColor: "red",
              data: this.SPAREPART,
            },
            {
              label: "Total",
              backgroundColor: "grey",
              data: this.total,
            },
          ],
        },
        options: {
          legend: {
            position: "right",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        },
      });
    },
  },

  async created() {
    this.pendapatanTahunan();
  },
};
</script>