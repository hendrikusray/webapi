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
            <form class="form-horizontal">
              <P>
                <b>DATA SPAREPART</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>NAMA SPAREPART</p>
                </label>
                <div class="col-sm-10">
                  <v-select
                    v-model="ID_SPAREPARTS"
                    :items="SPAREPART.data"
                    item-text="NAMA_SPAREPART"
                    item-value="ID_SPAREPARTS"
                    @change="getsparepart()"
                  ></v-select>
                  <input
                    type="number"
                    v-model.number="JUMLAH_SPAREPART"
                    style="height: 55px;"
                    placeholder="JUMLAH SPAREPART"
                    class="form-control form-control-warning"
                  />
                  <!-- <button @click="perulanganbutton()">Add</button> -->
                  <input value="Add" class="btn btn-primary" @click="perulanganbutton()" />
                </div>

                <div class="col-sm-10" v-for="(obj,index) of ulang" v-bind:key="index">
                  <input
                    v-model="ulang[index]"
                    :items="SPAREPART.data"
                    item-text="NAMA_SPAREPART"
                    item-value="ID_SPAREPARTS"
                    style="height: 55px;"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>SUB TOTAL HARGA</p>
                </label>
                <div class="col-sm-10">
                  <input
                    disabled
                    type="text"
                    v-model.number="TOTALSEMUA"
                    style="height: 55px;"
                    placeholder="JUMLAH SPAREPART"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <input
                    type="button"
                    @click="inputtransaksisparepart()"
                    value="tambah transaksi"
                    class="btn btn-primary"
                  />
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
      ID_SPAREPARTS: "",
      NAMA_SPAREPART: "",
      JUMLAH_SPAREPART: "",
      SUBTOTAL_SPAREPART: 0,
      HARGA_TAMPUNG_JUAL: 0,
      HARGA_JUAL: 0,
      STATUS_TRANSAKSI: "Not Paid",
      JENIS_TRANSAKSI: "SS",
      SUBTOTAL: 0,
      DISKON: 0,
      GRANDTOTAL: 0,
      TRANSAKSIPENJUALAN: [],
      CABANG: [],
      tampung: "",
      PELANGGAN: [],
      SPAREPART: [],
      ulang: [],
      object: "",
      TOTALSEMUA: 0,
      count: 0,
      gabungan: "",
    };
  },
  mounted() {
    this.getallcabang();
    this.getallpelanggan();
    this.getallsparepart();
    this.gettransaksipenjualan();
  },
  methods: {
    perulanganbutton() {
      this.ulang.push(this.ID_SPAREPARTS);
    },
    getsparepart() {
      this.object = this.SPAREPART.data.find(
        (Obj) => Obj.ID_SPAREPARTS == this.ID_SPAREPARTS
      );
      this.TOTALSEMUA =
        (this.TOTALSEMUA + this.object.HARGA_JUAL) * this.JUMLAH_SPAREPART;
      console.log(this.TOTALSEMUA);
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
    async getallsparepart() {
      try {
        this.SPAREPART = await Controller.getallsparepart();
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
    async getallpelanggan() {
      try {
        this.PELANGGAN = await Controller.getallpelanggan();
        console.log(this.PELANGGAN);
      } catch (err) {
        console.log(err);
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
        this.gabungan = day + month + year + "-" + tambah;
        console.log(this.gabungan);

        formDatasu.append("ID_TRANSAKSI", this.gabungan);
        console.log(this.ID_CABANG);
        formDatasu.append("ID_CABANG", this.ID_CABANG);
        console.log(this.ID_PELANGGAN);
        formDatasu.append("ID_PELANGGAN", this.ID_PELANGGAN);
        formDatasu.append("TGL_TRANSAKSI", this.TGL_TRANSAKSI);

        formDatasu.append("SUBTOTAL", this.SUBTOTAL);
        formDatasu.append("DISKON", this.DISKON);
        formDatasu.append("GRANDTOTAL", this.TOTALSEMUA);
        formDatasu.append("STATUS_TRANSAKSI", this.STATUS_TRANSAKSI);
        formDatasu.append("JENIS_TRANSAKSI", this.JENIS_TRANSAKSI);

        let response = await Controller.inputtransaksiinduk(formDatasu);
        this.tampung = response.data;

        alert("SUKSES MEMPROSES");
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH SUPPLIER");
      }
    },
    async inputtransaksisparepart() {
      try {
        var formDatasu = new FormData();
        this.SUBTOTAL_SPAREPART =
          this.JUMLAH_SPAREPART * this.object.HARGA_JUAL;

        console.log(this.tampung.ID_TRANSAKSI);

        formDatasu.append("ID_TRANSAKSI", this.tampung.ID_TRANSAKSI);

        console.log(this.ID_SPAREPARTS);
        formDatasu.append("ID_SPAREPARTS", this.ID_SPAREPARTS);
        console.log(this.JUMLAH_SPAREPART);
        formDatasu.append("JUMLAH_SPAREPART", this.JUMLAH_SPAREPART);
        console.log(this.SUBTOTAL_SPAREPART);
        formDatasu.append("SUBTOTAL_SPAREPART", this.SUBTOTAL_SPAREPART);
        console.log(this.HARGA_TAMPUNG_JUAL);
        formDatasu.append("HARGA_TAMPUNG_JUAL", this.HARGA_TAMPUNG_JUAL);

        await Controller.inputtransaksisparepart(formDatasu);
        alert("SUKSES MENAMBAH TRANSAKSI");
        this.$router.push("/transaksisparepartCS");
      } catch (err) {
        alert("GAGAL MENAMBAH SUPPLIER");
      }
    },
  },
};
</script>



