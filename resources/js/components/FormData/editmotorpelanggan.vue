<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="editmotorpelanggan" method="POST">
              <P>
                <b>EDIT DATA MOTOR PELANGGAN</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/telpon.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="ID_KENDARAAN_PEL"
                    style="height: 55px;"
                    placeholder="NO PLAT"
                    class="form-control form-control-warning"
                    disabled
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/telpon.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="ID_MOTOR"
                    style="height: 55px;"
                    placeholder="NO PLAT"
                    class="form-control form-control-warning"
                    disabled
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/telpon.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="ID_PELANGGAN"
                    style="height: 55px;"
                    placeholder="NO PLAT"
                    class="form-control form-control-warning"
                    disabled
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/telpon.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="NO_PLAT"
                    style="height: 55px;"
                    placeholder="NO PLAT"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <input type="submit" value="edit" class="btn btn-primary" />
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
      ID_KENDARAAN_PEL: "",
      ID_MOTOR: "",
      ID_PELANGGAN: "",
      NO_PLAT: "",
    };
  },
  mounted() {
    this.bindData();
  },

  methods: {
    bindData() {
      this.ID_KENDARAAN_PEL = this.$route.params.ID_KENDARAAN_PEL;
      this.ID_MOTOR = this.$route.params.ID_MOTOR;
      this.ID_PELANGGAN = this.$route.params.ID_PELANGGAN;
      this.NO_PLAT = this.$route.params.NO_PLAT;
    },

    async editmotorpelanggan() {
      try {
        await Controller.editmotorpelanggan(
          this.ID_KENDARAAN_PEL,
          this.ID_MOTOR,
          this.ID_PELANGGAN,
          this.NO_PLAT
        );
        console.log("berhasil ubah");
        alert("data telah berhasil diubah");
        this.$router.push("/pelangganmotorCS");
        this.$router.go();
      } catch (err) {
        alert("data gagal diubah");
        console.log(err);
      }
    },
  },
};
</script>



