<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="editpegawai" method="POST">
              <P>
                <b>EDIT DATA PEGAWAI</b>
              </P>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/sales.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <input
                    v-model="ID_CABANG"
                    placeholder="ID CABANG"
                    style="height: 55px;"
                    class="form-control form-control-success"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/sales.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <input
                    v-model="NAMA_PEGAWAI"
                    placeholder="NAMA PEGAWAI"
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
                    v-model="ALAMAT_PEGAWAI"
                    style="height: 55px;"
                    placeholder="ALAMAT PEGAWAI"
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
                    v-model="TELEPON_PEGAWAI"
                    style="height: 55px;"
                    placeholder="TELEPON PEGAWAI"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/uang.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="GAJI_PEGAWAI"
                    style="height: 55px;"
                    placeholder="GAJI PEGAWAI"
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
      ID_PEGAWAI: "",
      ID_CABANG: "",
      NAMA_PEGAWAI: "",
      ALAMAT_PEGAWAI: "",
      TELEPON_PEGAWAI: "",
      GAJI_PEGAWAI: "",
    };
  },
  mounted() {
    this.bindData();
  },

  methods: {
    bindData() {
      this.ID_PEGAWAI = this.$route.params.ID_PEGAWAI;
      this.ID_CABANG = this.$route.params.ID_CABANG;
      this.NAMA_PEGAWAI = this.$route.params.NAMA_PEGAWAI;
      this.ALAMAT_PEGAWAI = this.$route.params.ALAMAT_PEGAWAI;
      this.TELEPON_PEGAWAI = this.$route.params.TELEPON_PEGAWAI;
      this.GAJI_PEGAWAI = this.$route.params.GAJI_PEGAWAI;
    },

    async editpegawai() {
      try {
        await Controller.editpegawai(
          this.ID_PEGAWAI,
          this.ID_CABANG,
          this.NAMA_PEGAWAI,
          this.ALAMAT_PEGAWAI,
          this.TELEPON_PEGAWAI,
          this.GAJI_PEGAWAI
        );
        console.log("berhasil ubah");
        alert("data telah berhasil diubah");
        this.$router.push("/ownerdatapegawai");
        this.$router.go();
      } catch (err) {
        alert("data gagal diubah");
        console.log(err);
      }
    },
  },
};
</script>



