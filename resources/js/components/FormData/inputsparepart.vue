<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="inputsparepart" method="POST">
              <P>
                <b>DATA SPAREPART</b>
              </P>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/motor.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="ID_SPAREPARTS"
                    placeholder="ID SPAREPARTS"
                    id="ID_SPAREPARTS"
                    style="height: 55px;"
                    class="form-control form-control-success"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/laci.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <v-select
                    v-model="KODE_PENEMPATAN"
                    :items="PENEMPATAN"
                    item-text="KODE_PENEMPATAN"
                    item-value="KODE_PENEMPATAN"
                    id="KODE_PENEMPATAN"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/ruji.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="NAMA_SPAREPART"
                    id="NAMA_SPAREPART"
                    style="height: 55px;"
                    placeholder="NAMA SPAREPART"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/uang.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model.number="HARGA_BELI"
                    id="HARGA_BELI"
                    style="height: 55px;"
                    placeholder="HARGA BELI"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/uang.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model.number="HARGA_JUAL"
                    id="HARGA_JUAL"
                    style="height: 55px;"
                    placeholder="HARGA JUAL"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/stok.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    v-model.number="STOK_MINIMAL"
                    id="STOK_MINIMAL"
                    style="height: 55px;"
                    placeholder="STOK MINIMAL"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/barang1.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    v-model.number="STOK_BARANG"
                    id="STOK_BARANG"
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
                  <input type="file" id="GAMBAR" name="berkas" v-on:change="onFileChange" />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/tipe.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    id="TIPE"
                    v-model="TIPE"
                    style="height: 55px;"
                    placeholder="TIPE"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <input type="submit" id="TAMBAH" value="TAMBAH" class="btn btn-primary" />

                  <input type="submit" id="KEMBALI" value="KEMBALI" class="btn btn-warning" />
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
      TIPE: "",
    };
  },
  mounted() {
    this.getposisisparepart();
  },
  methods: {
    async inputsparepart() {
      try {
        var formDatasu = new FormData();

        formDatasu.append("ID_SPAREPARTS", this.ID_SPAREPARTS);
        formDatasu.append("KODE_PENEMPATAN", this.KODE_PENEMPATAN);
        formDatasu.append("NAMA_SPAREPART", this.NAMA_SPAREPART);
        formDatasu.append("HARGA_BELI", this.HARGA_BELI);
        formDatasu.append("HARGA_JUAL", this.HARGA_JUAL);
        formDatasu.append("STOK_MINIMAL", this.STOK_MINIMAL);
        formDatasu.append("STOK_BARANG", this.STOK_BARANG);
        formDatasu.append("GAMBAR", this.GAMBAR);
        formDatasu.append("TIPE", this.TIPE);
        alert("SUKSES MENAMBAH SPAREPART");
        this.$router.push("/ownerdatasparepart");
        this.$router.go();

        await Controller.inputsparepart(formDatasu);
      } catch (err) {
        alert("GAGAL MENAMBAH SUPPLIER");
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



