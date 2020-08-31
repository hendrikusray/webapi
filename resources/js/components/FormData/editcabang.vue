<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="editcabang" method="POST">
              <P>
                <b>EDIT DATA CABANG</b>
              </P>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/logo-kantor-png-2.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <input
                    v-model="NAMA_CABANG"
                    placeholder="NAMA_CABANG"
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
                    v-model="ALAMAT_CABANG"
                    style="height: 55px;"
                    placeholder="ALAMAT CABANG"
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
                    v-model="TELEPON_CABANG"
                    style="height: 55px;"
                    placeholder="TELEPON CABANG"
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
      ID_CABANG: "",
      NAMA_CABANG: "",
      ALAMAT_CABANG: "",
      TELEPON_CABANG: "",
    };
  },
  mounted() {
    this.bindData();
  },

  methods: {
    bindData() {
      this.ID_CABANG = this.$route.params.ID_CABANG;
      this.NAMA_CABANG = this.$route.params.NAMA_CABANG;
      this.ALAMAT_CABANG = this.$route.params.ALAMAT_CABANG;
      this.TELEPON_CABANG = this.$route.params.TELEPON_CABANG;
    },

    async editcabang() {
      try {
        await Controller.editcabang(
          this.ID_CABANG,
          this.NAMA_CABANG,
          this.ALAMAT_CABANG,
          this.TELEPON_CABANG
        );
        console.log("berhasil ubah");
        alert("data telah berhasil diubah");
        this.$router.push("/ownerdatacabang");
        this.$router.go();
      } catch (err) {
        alert("data gagal diubah");
        console.log(err);
      }
    },
  },
};
</script>



