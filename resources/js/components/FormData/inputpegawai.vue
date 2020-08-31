<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="inputpegawai" method="POST">
              <P>
                <b>DATA PEGAWAI</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/logo-kantor-png-2.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <v-select
                    v-model="ID_CABANG"
                    :items="CABANG.data"
                    item-text="ID_CABANG"
                    item-value="ID_CABANG"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/pegawai.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="NAMA_PEGAWAI"
                    style="height: 55px;"
                    placeholder="NAMA PEGAWAI"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/rumah.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="ALAMAT_PEGAWAI"
                    style="height: 55px;"
                    placeholder="ALAMAT PEGAWAI"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/telpon.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    v-model="TELEPON_PEGAWAI"
                    style="height: 55px;"
                    placeholder="TELEPON PEGAWAI"
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
                    v-model="GAJI_PEGAWAI"
                    style="height: 55px;"
                    placeholder="GAJI PEGAWAI"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/sales.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="ROLE"
                    style="height: 55px;"
                    placeholder="ROLE"
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
      ID_CABANG: "",
      NAMA_PEGAWAI: "",
      ALAMAT_PEGAWAI: "",
      TELEPON_PEGAWAI: "",
      GAJI_PEGAWAI: "",
      CABANG: [],

      ROLE: "",
    };
  },
  mounted() {
    this.getallcabang();
  },
  methods: {
    async getallcabang() {
      try {
        this.CABANG = await Controller.getallcabang();
        console.log(this.CABANG);
      } catch (err) {
        console.log(err);
      }
    },
    async inputpegawai() {
      try {
        var formDatasu = new FormData();
        console.log(this.ID_CABANG);
        console.log(this.NAMA_PEGAWAI);
        console.log(this.ALAMAT_PEGAWAI);
        console.log(this.GAJI_PEGAWAI);
        console.log(this.ROLE);

        formDatasu.append("ID_CABANG", this.ID_CABANG);
        formDatasu.append("NAMA_PEGAWAI", this.NAMA_PEGAWAI);
        formDatasu.append("TELEPON_PEGAWAI", this.TELEPON_PEGAWAI);
        formDatasu.append("ALAMAT_PEGAWAI", this.ALAMAT_PEGAWAI);
        formDatasu.append("GAJI_PEGAWAI", this.GAJI_PEGAWAI);
        if (
          this.ROLE == "CS" ||
          this.ROLE == "KASIR" ||
          this.ROLE == "MONTIR"
        ) {
          formDatasu.append("ROLE", this.ROLE);

          await Controller.inputpegawai(formDatasu);
          alert("SUKSES MENAMBAH PEGAWAI");

          this.$router.push("/ownerdatapegawai");
          this.$router.go();
        } else {
          alert("role harus CS, KASIR, ATAU MONTIR");
          this.$router.push("/inputpegawai");
          this.$router.go();
        }
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH SUPPLIER");
      }
    },
  },
};
</script>



