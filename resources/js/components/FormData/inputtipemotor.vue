<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="inputmotor" method="POST">
              <P>
                <b>DATA MOTOR</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/motor.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="MERK_MOTOR"
                    style="height: 55px;"
                    placeholder="MERK MOTOR"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/tipemotor.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="TIPE_MOTOR"
                    style="height: 55px;"
                    placeholder="TIPE MOTOR"
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
      ID_MOTOR: "",
      MERK_MOTOR: "",
      TIPE_MOTOR: "",
    };
  },
  methods: {
    async inputmotor() {
      try {
        var formDatasu = new FormData();

        formDatasu.append("MERK_MOTOR", this.MERK_MOTOR);
        formDatasu.append("TIPE_MOTOR", this.TIPE_MOTOR);

        alert("SUKSES MENAMBAH TIPE MOTOR");
        this.$router.push("/ownerdatatipemotor");
        this.$router.go();

        await Controller.inputmotor(formDatasu);
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH MOTOR");
      }
    },
  },
};
</script>



