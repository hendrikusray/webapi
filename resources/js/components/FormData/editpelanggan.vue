<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="editpelanggan" method="POST">
              <P>
                <b>EDIT DATA PELANGGAN</b>
              </P>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/sales.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <input
                    v-model="NAMA_PELANGGAN"
                    placeholder="NAMA PELANGGAN"
                    style="height: 55px;"
                    class="form-control form-control-success"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/rumah.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="ALAMAT_PELANGGAN"
                    style="height: 55px;"
                    placeholder="ALAMAT PELANGGAN"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/telpon.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="TELEPON_PELANGGAN"
                    style="height: 55px;"
                    placeholder="TELEPON PELANGGAN"
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
      ID_PELANGGAN: "",
      NAMA_PELANGGAN: "",
      ALAMAT_PELANGGAN: "",
      TELEPON_PELANGGAN: "",
    };
  },
  mounted() {
    this.bindData();
  },

  methods: {
    bindData() {
      this.ID_PELANGGAN = this.$route.params.ID_PELANGGAN;
      this.NAMA_PELANGGAN = this.$route.params.NAMA_PELANGGAN;
      this.ALAMAT_PELANGGAN = this.$route.params.ALAMAT_PELANGGAN;
      this.TELEPON_PELANGGAN = this.$route.params.TELEPON_PELANGGAN;
    },

    async editpelanggan() {
      try {
        await Controller.editpelanggan(
          this.ID_PELANGGAN,
          this.NAMA_PELANGGAN,
          this.ALAMAT_PELANGGAN,
          this.TELEPON_PELANGGAN
        );
        console.log("berhasil ubah");
        alert("data telah berhasil diubah");
        this.$router.push("/pelangganCS");
        this.$router.go();
      } catch (err) {
        alert("data gagal diubah");
        console.log(err);
      }
    },
  },
};
</script>



