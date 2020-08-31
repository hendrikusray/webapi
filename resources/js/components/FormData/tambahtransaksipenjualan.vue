<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="inputtransaksiinduk" method="POST">
              <P>
                <b>TRANSAKSI PENJUALAN</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>TANGGAL TRANSAKSI</p>
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="TGL_TRANSAKSI"
                    style="height: 55px;"
                    type="date"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>CABANG</p>
                </label>
                <div class="col-sm-10">
                  <v-select
                    v-model="ID_CABANG"
                    :items="CABANG.data"
                    item-text="NAMA_CABANG"
                    item-value="ID_CABANG"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>PELANGGAN</p>
                </label>
                <div class="col-sm-10">
                  <v-select
                    v-model="ID_PELANGGAN"
                    :items="PELANGGAN.data"
                    item-text="NAMA_PELANGGAN"
                    item-value="ID_PELANGGAN"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <input type="submit" value="PROSES PELANGGAN" class="btn btn-primary" />
                </div>
              </div>
            </form>
            <form class="form-horizontal" @submit.prevent="inputmontironduty" method="POST">
              <P>
                <b>DATA MONTIR</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>PEGAWAI</p>
                </label>
                <div class="col-sm-10">
                  <v-select
                    v-model="ID_PEGAWAI"
                    :items="PEGAWAI.data"
                    item-text="NAMA_PEGAWAI"
                    item-value="ID_PEGAWAI"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>KENDARAAN</p>
                </label>
                <div class="col-sm-10">
                  <v-select
                    v-model="ID_KENDARAAN_PEL"
                    :items="MOTORPELANGGAN.data"
                    item-text="NO_PLAT"
                    item-value="ID_KENDARAAN_PEL"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <input type="submit" value="PROSES MONTIR" class="btn btn-primary" />
                </div>
              </div>
            </form>
            <form class="form-horizontal" @submit.prevent="inputmontironduty" method="POST">
              <div class="form-group row">
                <form v-on:submit.prevent="addNewTodo">
                  <label for="new-todo" class="col-sm-2">
                    <p>JASA</p>
                  </label>
                  <v-select
                    v-model="ID_JASA"
                    :items="JASA.data"
                    item-text="NAMA_JASA"
                    item-value="ID_JASA"
                    id="new-todo"
                  ></v-select>
                  <button>Add</button>
                </form>
              </div>

              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <a
                    @click="inputmontironduty()"
                    id="login"
                    class="btn btn-primary"
                  >TAMBAH TRANSAKSI</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Controller from "../../httpController.js";

export default {
  data() {
    return {
      ID_TRANSAKSI: "",
      ID_CABANG: "",
      NAMA_CABANG: "",
      ID_PELANGGAN: "",
      NAMA_PELANGGAN: "",
      TGL_TRANSAKSI: "",
      SUBTOTAL: 0,
      DISKON: 0,
      GRANDTOTAL: 0,
      STATUS_TRANSAKSI: "Not Paid",
      JENIS_TRANSAKSI: "SJ",
      CABANG: [],
      PELANGGAN: [],
      TRANSAKSIPENJUALAN: [],
      count: 0,
      ID_PEGAWAI: "",
      ROLE: "",
      NAMA_PEGAWAI: "",
      ID_KENDARAAN_PEL: "",
      NO_PLAT: "",
      PEGAWAI: [],
      MOTORPELANGGAN: [],
      JASA: [],
      ID_JASA: "",
      NAMA_JASA: "",
      HARGA_JASA: "",
      newText: "",
      text: [],
    };
  },
  mounted() {
    this.getallcabang();
    this.getallpelanggan();
    this.gettransaksipenjualan();
    this.getallpegawai();
    this.getallmotorpelanggan();
    this.getalljasa();
  },
  methods: {
    addnewtext: function () {
      this.text.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
    async getalljasa() {
      try {
        this.JASA = await Controller.getalljasa();
      } catch (err) {
        console.log(err);
      }
    },
    async getallpegawai() {
      try {
        this.PEGAWAI = await Controller.getallpegawai();
      } catch (err) {
        console.log(err);
      }
    },
    async getallmotorpelanggan() {
      try {
        this.MOTORPELANGGAN = await Controller.getallmotorpelanggan();
      } catch (err) {
        console.log(err);
      }
    },
    async getallcabang() {
      try {
        this.CABANG = await Controller.getallcabang();
        console.log(this.CABANG);
      } catch (err) {
        console.log(err);
      }
    },
    async gettransaksipenjualan() {
      try {
        this.TRANSAKSIPENJUALAN = await Controller.gettransaksipenjualan();
        this.TRANSAKSIPENJUALAN = this.TRANSAKSIPENJUALAN.data;

        console.log(this.TRANSAKSIPENJUALAN.length);
      } catch (err) {
        console.log(err);
      }
    },
    async getallpelanggan() {
      try {
        this.PELANGGAN = await Controller.getallpelanggan();
        console.log(this.PELANGGAN);
      } catch (err) {
        console.log(err);
      }
    },
    async inputmontironduty() {
      try {
        var formDatasu = new FormData();

        formDatasu.append("ID_PEGAWAI", this.ID_PEGAWAI);
        formDatasu.append("ID_KENDARAAN_PEL", this.ID_KENDARAAN_PEL);

        alert("SUKSES MEMPROSES MONTIR");

        const respons2 = await Controller.inputmontironduty(formDatasu);
        console.log(respons2);
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH SUPPLIER");
      }
    },
    async inputtransaksiinduk() {
      try {
        var formDatasu = new FormData();
        var str = this.TGL_TRANSAKSI;
        var date = str.split("-");
        var year = date[0].substring(2, 4);
        console.log(year);
        var month = date[1];
        console.log(month);
        var day = date[2];
        console.log(day);
        let tambah = 0;
        this.count = this.TRANSAKSIPENJUALAN.length;
        if (this.count == 0) {
          tambah = 1;
        } else {
          tambah = this.count + 1;
        }
        var gabungan = day + month + year + "-" + tambah;
        console.log(gabungan);

        formDatasu.append("ID_TRANSAKSI", gabungan);
        console.log(this.ID_CABANG);
        formDatasu.append("ID_CABANG", this.ID_CABANG);
        console.log(this.ID_PELANGGAN);
        formDatasu.append("ID_PELANGGAN", this.ID_PELANGGAN);
        formDatasu.append("TGL_TRANSAKSI", this.TGL_TRANSAKSI);

        formDatasu.append("SUBTOTAL", this.SUBTOTAL);
        formDatasu.append("DISKON", this.DISKON);
        formDatasu.append("GRANDTOTAL", this.GRANDTOTAL);
        formDatasu.append("STATUS_TRANSAKSI", this.STATUS_TRANSAKSI);
        formDatasu.append("JENIS_TRANSAKSI", this.JENIS_TRANSAKSI);

        const response = await Controller.inputtransaksiinduk(formDatasu);
        console.log(response.data.ID_TRANSAKSI);
        alert("SUKSES MEMPROSES");
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH SUPPLIER");
      }
    },
  },
};
</script>



