<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="inputpelanggan" method="POST">
              <P>
                <b>DATA PELANGGAN</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/sales.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="NAMA_PELANGGAN"
                    style="height: 55px;"
                    placeholder="NAMA PELANGGAN"
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
                    v-model="ALAMAT_PELANGGAN"
                    style="height: 55px;"
                    placeholder="ALAMAT PELANGGAN"
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
                    v-model="TELEPON_PELANGGAN"
                    style="height: 55px;"
                    placeholder="TELEPON PELANGGAN"
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
    };
  },
  methods: {
    async inputpelanggan() {
      try {
        var formDatasu = new FormData();

        formDatasu.append("NAMA_PELANGGAN", this.NAMA_PELANGGAN);
        formDatasu.append("ALAMAT_PELANGGAN", this.ALAMAT_PELANGGAN);
        formDatasu.append("TELEPON_PELANGGAN", this.TELEPON_PELANGGAN);

        alert("SUKSES MENAMBAH PELANGGAN");
        this.$router.push("/pelangganCS");
        this.$router.go();

        await Controller.inputpelanggan(formDatasu);
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH SUPPLIER");
      }
    },
  },
};
</script>



