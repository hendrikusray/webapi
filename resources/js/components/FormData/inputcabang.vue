<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="inputcabang" method="POST">
              <P>
                <b>DATA CABANG</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="asset/logo-kantor-png-2.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="NAMA_CABANG"
                    style="height: 55px;"
                    placeholder="NAMA CABANG"
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
                    v-model="ALAMAT_CABANG"
                    style="height: 55px;"
                    placeholder="ALAMAT CABANG"
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
                    v-model="TELEPON_CABANG"
                    style="height: 55px;"
                    placeholder="TELEPON CABANG"
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
      ID_CABANG: "",
      NAMA_CABANG: "",
      ALAMAT_CABANG: "",
      TELEPON_CABANG: "",
    };
  },
  methods: {
    async inputcabang() {
      try {
        var formDatasu = new FormData();

        formDatasu.append("NAMA_CABANG", this.NAMA_CABANG);
        formDatasu.append("ALAMAT_CABANG", this.ALAMAT_CABANG);
        formDatasu.append("TELEPON_CABANG", this.TELEPON_CABANG);

        alert("SUKSES MENAMBAH JASA SERVICE");
        this.$router.push("/ownerdatacabang");
        this.$router.go();

        await Controller.inputcabang(formDatasu);
      } catch (err) {
        console.log(err);
        alert("GAGAL MENAMBAH SUPPLIER");
      }
    },
  },
};
</script>



