<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal">
              <P>
                <b>TRANSAKSI PENJUALAN JASA</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>ID-PENJUALAN JASA</p>
                </label>
                <div class="col-sm-10">
                  <input
                    disabled
                    v-model="ID_DETAIL_PENJUALAN_JASA"
                    style="height: 55px;"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>ID-TRANSAKSI</p>
                </label>
                <div class="col-sm-10">
                  <input
                    disabled
                    v-model="ID_TRANSAKSI"
                    style="height: 55px;"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>NAMA JASA</p>
                </label>
                <div class="col-sm-10">
                  <v-select
                    v-model="ID_JASA"
                    :items="alljasa.data"
                    item-text="NAMA_JASA"
                    item-value="ID_JASA"
                    @change="getjasa()"
                  ></v-select>
                  <!-- <button @click="perulanganbutton()">Add</button> -->
                  <input value="Add" class="btn btn-primary" @click="perulanganbutton()" />
                </div>

                <div class="col-sm-10" v-for="(obj,index) of ulang" v-bind:key="index">
                  <input
                    v-model="ulang[index]"
                    :items="alljasa.data"
                    item-text="NAMA_JASA"
                    item-value="NAMA_JASA"
                    style="height: 55px;"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>ID-MONTIR-ONDUTY</p>
                </label>
                <div class="col-sm-10">
                  <input
                    disabled
                    v-model="ID_MONTIR_ONDUTY"
                    style="height: 55px;"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>SUB TOTAL JASA</p>
                </label>
                <div class="col-sm-10">
                  <input
                    disabled
                    v-model="SUBTOTAL_JASA"
                    style="height: 55px;"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <input
                    @click="edittransaksijasa()"
                    value="PROSES PELANGGAN"
                    class="btn btn-primary"
                  />
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
      ID_TRANSAKSI: "",
      ID_DETAIL_PENJUALAN_JASA: "",
      ID_JASA: "",
      ID_MONTIR_ONDUTY: "",
      SUBTOTAL_JASA: "",
      alljasa: [],
      DATA: [],
      HARGA_JASA: "",
      object: "",
      STATUS_JASA: "",
      ulang: [],
      totaljasasemua: 0,
    };
  },
  mounted() {
    this.bindData();
    this.getalljasa();
  },

  methods: {
    bindData() {
      this.ID_DETAIL_PENJUALAN_JASA = this.$route.params.ID_DETAIL_PENJUALAN_JASA;
      this.ID_TRANSAKSI = this.$route.params.ID_TRANSAKSI;
      this.ID_JASA = this.$route.params.ID_JASA;
      this.ID_MONTIR_ONDUTY = this.$route.params.ID_MONTIR_ONDUTY;
      this.SUBTOTAL_JASA = this.$route.params.SUBTOTAL_JASA;
      this.STATUS_JASA = this.$route.params.STATUS_JASA;
    },
    perulanganbutton() {
      this.ulang.push(this.ID_JASA);
    },
    getjasa() {
      this.object = this.alljasa.data.find(
        (Obj) => Obj.ID_JASA == this.ID_JASA
      );
      this.totaljasasemua = this.totaljasasemua + this.object.HARGA_JASA;
      this.SUBTOTAL_JASA = this.totaljasasemua;
      console.log(this.SUBTOTAL_JASA);
    },
    async getalljasa() {
      try {
        this.alljasa = await Controller.getalljasa();
      } catch (err) {
        console.log(err);
      }
    },

    async edittransaksijasa() {
      try {
        await Controller.edittransaksijasa(
          this.ID_DETAIL_PENJUALAN_JASA,
          this.ID_TRANSAKSI,
          this.ID_JASA,
          this.ID_MONTIR_ONDUTY,
          this.SUBTOTAL_JASA,
          this.STATUS_JASA
        );
        console.log("berhasil ubah");
        alert("data telah berhasil diubah");
        this.$router.push("/transaksijasaCS");
        this.$router.go();
      } catch (err) {
        alert("data gagal diubah");
        console.log(err);
      }
    },
  },
  async created() {
    this.getalljasa();
    //  this.checklogin();
  },
};
</script>



