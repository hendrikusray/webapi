<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="inputpemesanansparepart()" method="POST">
              <P>
                <b>DATA PEMESANAN SPAREPART</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/sales.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="ID_SUPPLIER"
                    style="height: 55px;"
                    placeholder="ID_SUPPLIER"
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
                    v-model="TGL_PEMESANAN"
                    style="height: 55px;"
                    placeholder="TGL PEMESANAN"
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
                    v-model="GRANDTOTAL_PEMESANAN"
                    style="height: 55px;"
                    placeholder="GRANDTOTAL PEMESANAN"
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
                    v-model="STATUS_PEMESANAN"
                    style="height: 55px;"
                    placeholder="STATUS PEMESANAN"
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
      ID_SUPPLIER: "",
      TGL_PEMESANAN: "",
      GRANDTOTAL_PEMESANAN: "",
      STATUS_PEMESANAN: "",
    };
  },
  mounted() {},

  methods: {
    async inputpemesanansparepart() {
      try {
        var formDatasu = new FormData();

        formDatasu.append("ID_SUPPLIER", this.ID_SUPPLIER);
        formDatasu.append("TGL_PEMESANAN", this.TGL_PEMESANAN);
        formDatasu.append("GRANDTOTAL_PEMESANAN", this.GRANDTOTAL_PEMESANAN);
        formDatasu.append("STATUS_PEMESANAN", this.STATUS_PEMESANAN);
        await Controller.inputpemesanansparepart(formDatasu);
        alert("SUKSES MENAMBAH PESANAN SPAREPART");
        this.$router.push("/ownerdatapemesanansparepart");
        this.$router.go();
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH PESANAN SPAREPART");
      }
    },
  },
};
</script>



