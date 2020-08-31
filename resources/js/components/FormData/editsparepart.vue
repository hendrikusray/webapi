<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="updateGambar" method="POST">
              <P>
                <b>DATA SPAREPART</b>
              </P>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/motor.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="ID_SPAREPARTS"
                    placeholder="ID SPAREPARTS"
                    style="height: 55px;"
                    class="form-control form-control-success"
                    disabled
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/laci.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <v-select
                    v-model="KODE_PENEMPATAN"
                    :items="PENEMPATAN"
                    item-text="KODE_PENEMPATAN"
                    item-value="KODE_PENEMPATAN"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/ruji.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="NAMA_SPAREPART"
                    style="height: 55px;"
                    placeholder="NAMA SPAREPART"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/uang.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="HARGA_BELI"
                    style="height: 55px;"
                    placeholder="HARGA BELI"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/uang.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="HARGA_JUAL"
                    style="height: 55px;"
                    placeholder="HARGA JUAL"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/stok.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="STOK_MINIMAL"
                    style="height: 55px;"
                    placeholder="STOK MINIMAL"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/barang1.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="STOK_BARANG"
                    style="height: 55px;"
                    placeholder="STOK BARANG"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>GAMBAR</p>
                </label>
                <div class="col-sm-10">
                  <input type="file" name="berkas" v-on:change="onFileChange" />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://127.0.0.1:8080/asset/tipe.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="TIPE"
                    style="height: 55px;"
                    placeholder="TIPE"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <input type="submit" value="TAMBAH" class="btn btn-primary" />

                  <input type="submit" value="KEMBALI" class="btn btn-warning" />
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
      ID_SPAREPARTS: "",
      KODE_PENEMPATAN: "",
      PENEMPATAN: [],
      NAMA_SPAREPART: "",
      HARGA_BELI: "",
      HARGA_JUAL: "",
      STOK_MINIMAL: "",
      STOK_BARANG: "",
      GAMBAR: "",
      GAMBAR2: "",
      TIPE: "",
    };
  },
  mounted() {
    this.getposisisparepart();
    this.bindData();
  },
  methods: {
    bindData() {
      this.ID_SPAREPARTS = this.$route.params.ID_SPAREPARTS;
      this.KODE_PENEMPATAN = this.$route.params.KODE_PENEMPATAN;
      this.NAMA_SPAREPART = this.$route.params.NAMA_SPAREPART;
      this.HARGA_BELI = this.$route.params.HARGA_BELI;
      this.HARGA_JUAL = this.$route.params.HARGA_JUAL;
      this.STOK_MINIMAL = this.$route.params.STOK_MINIMAL;
      this.STOK_BARANG = this.$route.params.STOK_BARANG;
      this.GAMBAR = this.$route.params.GAMBAR;
      this.TIPE = this.$route.params.TIPE;
    },
    async updateGambar() {
      try {
        console.log(this.ID_SPAREPARTS);
        console.log(this.GAMBAR);
        await Controller.updateGambar(
          this.ID_SPAREPARTS,
          this.KODE_PENEMPATAN,
          this.NAMA_SPAREPART,
          this.HARGA_BELI,
          this.HARGA_JUAL,
          this.STOK_MINIMAL,
          this.STOK_BARANG,
          this.GAMBAR,
          this.TIPE
        );

        alert("sukses mengedit");
        this.$router.push("/ownerdatasparepart");
        this.$router.go();
      } catch (err) {
        alert("GAGAL MENAMBAH SUPPLIER");
        Console.log(err);
      }
    },
    onFileChange(e) {
      this.GAMBAR = e.target.files[0];

      console.log(this.GAMBAR);
    },
    async getposisisparepart() {
      try {
        this.PENEMPATAN = await Controller.getposisisparepart();
        console.log(this.PENEMPATAN);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



