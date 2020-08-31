<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="inputmotorpelanggan" method="POST">
              <P>
                <b>DATA MOTOR PELANGGAN</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>ID MOTOR</p>
                </label>
                <div class="col-sm-10">
                  <v-select
                    v-model="ID_MOTOR"
                    :items="MOTOR.data"
                    item-text="ID_MOTOR"
                    item-value="ID_MOTOR"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>ID PELANGGAN</p>
                </label>
                <div class="col-sm-10">
                  <v-select
                    v-model="ID_PELANGGAN"
                    :items="PELANGGAN.data"
                    item-text="ID_PELANGGAN"
                    item-value="ID_PELANGGAN"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>NO PLAT</p>
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="NO_PLAT"
                    style="height: 55px;"
                    placeholder="NO_PLAT"
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
      ID_PELANGGAN: "",
      NAMA_PELANGGAN: "",
      ALAMAT_PELANGGAN: "",
      TELEPON_PELANGGAN: "",
      ID_MOTOR: "",
      MOTOR: [],
      PELANGGAN: [],
    };
  },
  mounted() {
    this.getallmotor();
    this.getallpelanggan();
  },
  methods: {
    async getallmotor() {
      try {
        this.MOTOR = await Controller.getallmotor();
      } catch (err) {
        console.log(err);
      }
    },
    async getallpelanggan() {
      try {
        this.PELANGGAN = await Controller.getallpelanggan();
      } catch (err) {
        console.log(err);
      }
    },
    async inputmotorpelanggan() {
      try {
        var formDatasu = new FormData();

        formDatasu.append("ID_MOTOR", this.ID_MOTOR);
        formDatasu.append("ID_PELANGGAN", this.ID_PELANGGAN);
        formDatasu.append("NO_PLAT", this.NO_PLAT);

        alert("SUKSES MENAMBAH MOTOR PELANGGAN");
        this.$router.push("/pelangganmotorCS");
        this.$router.go();

        await Controller.inputmotorpelanggan(formDatasu);
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH SUPPLIER");
      }
    },
  },
};
</script>



