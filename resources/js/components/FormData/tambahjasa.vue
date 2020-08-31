<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="inputmontironduty" method="POST">
              <P>
                <b>DATA JASA YANG DIPILIH</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p></p>
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
      ID_PEGAWAI: "",
      ROLE: "",
      NAMA_PEGAWAI: "",
      ID_KENDARAAN_PEL: "",
      NO_PLAT: "",
      PEGAWAI: [],
      MOTORPELANGGAN: [],
    };
  },
  mounted() {
    this.getallpegawai();
    this.getallmotorpelanggan();
  },
  methods: {
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
    async inputmontironduty() {
      try {
        var formDatasu = new FormData();

        formDatasu.append("ID_PEGAWAI", this.ID_PEGAWAI);
        formDatasu.append("ID_KENDARAAN_PEL", this.ID_KENDARAAN_PEL);

        alert("SUKSES MENAMBAH JASA SERVICE");
        this.$router.push("/ownerdatacabang");
        this.$router.go();

        await Controller.inputmontironduty(formDatasu);
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH SUPPLIER");
      }
    },
  },
};
</script>



