<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="editjasaservice" method="POST">
              <P>
                <b>EDIT DATA JASA SERVICE</b>
              </P>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/montir.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <input
                    v-model="NAMA_JASA"
                    placeholder="NAMA_JASA"
                    style="height: 55px;"
                    class="form-control form-control-success"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/uang.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="HARGA_JASA"
                    style="height: 55px;"
                    placeholder="HARGA JASA"
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
      ID_JASA: "",
      NAMA_JASA: "",
      HARGA_JASA: "",
    };
  },
  mounted() {
    this.bindData();
  },

  methods: {
    bindData() {
      this.ID_JASA = this.$route.params.ID_JASA;
      this.NAMA_JASA = this.$route.params.NAMA_JASA;
      this.HARGA_JASA = this.$route.params.HARGA_JASA;
    },

    async editjasaservice() {
      try {
        await Controller.editjasaservice(
          this.ID_JASA,
          this.NAMA_JASA,
          this.HARGA_JASA
        );
        console.log("berhasil ubah");
        alert("data telah berhasil diubah");
        this.$router.push("/ownerdatajasaservice");
        this.$router.go();
      } catch (err) {
        alert("data gagal diubah");
        console.log(err);
      }
    },
  },
};
</script>



