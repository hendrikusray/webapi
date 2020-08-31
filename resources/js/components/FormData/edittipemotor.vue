<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="editmotor" method="POST">
              <P>
                <b>EDIT DATA MOTOR</b>
              </P>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/motor.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <input
                    v-model="MERK_MOTOR"
                    placeholder="MERK MOTOR"
                    style="height: 55px;"
                    class="form-control form-control-success"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/tipemotor.png" class="logoicon" alt />
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
      ID_MOTOR: "",
      MERK_MOTOR: "",
      TIPE_MOTOR: "",
    };
  },
  mounted() {
    this.bindData();
  },

  methods: {
    bindData() {
      this.ID_MOTOR = this.$route.params.ID_MOTOR;
      this.MERK_MOTOR = this.$route.params.MERK_MOTOR;
      this.TIPE_MOTOR = this.$route.params.TIPE_MOTOR;
    },

    async editmotor() {
      try {
        await Controller.editmotor(
          this.ID_MOTOR,
          this.MERK_MOTOR,
          this.TIPE_MOTOR
        );
        console.log("berhasil ubah");
        alert("data telah berhasil diubah");
        this.$router.push("/ownerdatatipemotor");
        this.$router.go();
      } catch (err) {
        alert("data gagal diubah");
        console.log(err);
      }
    },
  },
};
</script>



