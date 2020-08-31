<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="inputjasaservice" method="POST">
              <P>
                <b>DATA JASA SERVICE</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/montir.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="NAMA_JASA"
                    style="height: 55px;"
                    placeholder="NAMA JASA"
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
                    type="number"
                    v-model.number="HARGA_JASA"
                    style="height: 55px;"
                    placeholder="HARGA JASA"
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
      ID_JASA: "",
      NAMA_JASA: "",
      HARGA_JASA: "",
    };
  },
  methods: {
    async inputjasaservice() {
      try {
        var formDatasu = new FormData();

        formDatasu.append("NAMA_JASA", this.NAMA_JASA);
        formDatasu.append("HARGA_JASA", this.HARGA_JASA);
        alert("SUKSES MENAMBAH JASA SERVICE");
        this.$router.push("/ownerdatajasaservice");
        this.$router.go();

        await Controller.inputjasaservice(formDatasu);
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH SUPPLIER");
      }
    },
  },
};
</script>








