<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal" @submit.prevent="editsupplier" method="POST">
              <P>
                <b>EDIT DATA SUPPLIER</b>
              </P>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/data supplier.png" class="logoicon" alt />
                </label>

                <div class="col-sm-10">
                  <input
                    v-model="NAMA_SUPPLIER"
                    placeholder="Nama Supplier"
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
                    v-model="ALAMAT_SUPPLIER"
                    style="height: 55px;"
                    placeholder="Alamat Supplier"
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
                    v-model="TELEPON_SUPPLIER"
                    style="height: 55px;"
                    placeholder="Telepon Supplier"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/sales.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="NAMA_SALES"
                    style="height: 55px;"
                    placeholder="Nama Sales"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2">
                  <img src="http://localhost:8080/asset/telpon_sales.png" class="logoicon" alt />
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="TELEPON_SALES"
                    style="height: 55px;"
                    placeholder="Telpon Sales"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <input type="submit" value="edit" @click="editsupplier" class="btn btn-primary" />
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
      NAMA_SUPPLIER: "",
      ALAMAT_SUPPLIER: "",
      TELEPON_SUPPLIER: "",
      NAMA_SALES: "",
      TELEPON_SALES: "",
    };
  },
  mounted() {
    this.bindData();
  },

  methods: {
    bindData() {
      this.ID_SUPPLIER = this.$route.params.ID_SUPPLIER;
      this.NAMA_SUPPLIER = this.$route.params.NAMA_SUPPLIER;
      this.ALAMAT_SUPPLIER = this.$route.params.ALAMAT_SUPPLIER;
      this.TELEPON_SUPPLIER = this.$route.params.TELEPON_SUPPLIER;
      this.NAMA_SALES = this.$route.params.NAMA_SALES;
      this.TELEPON_SALES = this.$route.params.TELEPON_SALES;
    },

    async editsupplier() {
      try {
        console.log(this.NAMA_SUPPLIER);
        await Controller.editsupplier(
          this.ID_SUPPLIER,
          this.NAMA_SUPPLIER,
          this.ALAMAT_SUPPLIER,
          this.TELEPON_SUPPLIER,
          this.NAMA_SALES,
          this.TELEPON_SALES
        );
        console.log("berhasil ubah");
        alert("data telah berhasil diubah");
        this.$router.push("/ownerdatasupplier");
        this.$router.go();
      } catch (err) {
        alert("data gagal diubah");
        console.log(err);
      }
    },
  },
};
</script>



