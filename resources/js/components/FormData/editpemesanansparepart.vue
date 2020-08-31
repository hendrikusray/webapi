<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="editpemesanansparepart" method="POST">
              <P>
                <b>EDIT DATA PEMESANAN SPAREPART</b>
              </P>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/logo-kantor-png-2.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <input
                    v-model="ID_SUPPLIER"
                    placeholder="ID_SUPPLIER"
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
                    v-model="TGL_PEMESANAN"
                    style="height: 55px;"
                    placeholder="TGL_PEMESANAN"
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
                    v-model="GRANDTOTAL_PEMESANAN"
                    style="height: 55px;"
                    placeholder="GRANDTOTAL_PEMESANAN"
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
                    v-model="STATUS_PEMESANAN"
                    style="height: 55px;"
                    placeholder="STATUS_PEMESANAN"
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
      ID_SUPPLIER: "",
      TGL_PEMESANAN: "",
      GRANDTOTAL_PEMESANAN: "",
      STATUS_PEMESANAN: "",
    };
  },
  mounted() {
    this.bindData();
  },

  methods: {
    bindData() {
      this.ID_PEMESANAN = this.$route.params.ID_PEMESANAN;
      this.ID_SUPPLIER = this.$route.params.ID_SUPPLIER;
      this.TGL_PEMESANAN = this.$route.params.TGL_PEMESANAN;
      this.GRANDTOTAL_PEMESANAN = this.$route.params.GRANDTOTAL_PEMESANAN;
      this.STATUS_PEMESANAN = this.$route.params.STATUS_PEMESANAN;
      console.log(this.ID_SUPPLIER);
      console.log(this.TGL_PEMESANAN);
      console.log(this.GRANDTOTAL_PEMESANAN);
      console.log(this.STATUS_PEMESANAN);
    },

    async editpemesanansparepart() {
      try {
        await Controller.editpemesanansparepart(
          this.ID_PEMESANAN,
          this.ID_SUPPLIER,
          this.TGL_PEMESANAN,
          this.GRANDTOTAL_PEMESANAN,
          this.STATUS_PEMESANAN
        );
        console.log("berhasil ubah");
        alert("data telah berhasil diubah");
        this.$router.push("/ownerdatapemesanansparepart");
        this.$router.go();
      } catch (err) {
        alert("data gagal diubah");
        console.log(err);
      }
    },
  },
};
</script>



