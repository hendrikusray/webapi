<template>
  <div>
    <section class="forms">
      <div class="backgroundInput">
        <div class="kotakInput">
          <div class="borderForm">
            <!-- Page Header-->

            <form class="form-horizontal">
              <P>
                <b>TRANSAKSI PENJUALAN</b>
              </P>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>ID-PENJUALAN SPAREPART</p>
                </label>
                <div class="col-sm-10">
                  <input
                    disabled
                    v-model="ID_PENJUALAN_SPAREPART"
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
                  <p>ID-SPAREPARTS</p>
                </label>
                <div class="col-sm-10">
                  <input
                    disabled
                    v-model="ID_SPAREPARTS"
                    style="height: 55px;"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>JUMLAH SPAREPARTS</p>
                </label>
                <div class="col-sm-10">
                  <input
                    v-model="JUMLAH_SPAREPART"
                    style="height: 55px;"
                    class="form-control form-control-warning"
                  />
                </div>
                <input @click="proses()" value="cek" class="btn btn-primary" />
              </div>

              <div class="form-group row">
                <label class="col-sm-2">
                  <p>SUB TOTAL SPAREPARTS</p>
                </label>
                <div class="col-sm-10">
                  <input
                    disabled
                    v-model="SUBTOTAL_SPAREPART"
                    style="height: 55px;"
                    class="form-control form-control-warning"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                  <input
                    @click="editransaksisparepart()"
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
      ID_PENJUALAN_SPAREPART: "",
      ID_SPAREPARTS: "",
      JUMLAH_SPAREPART: "",
      SUBTOTAL_SPAREPART: "",
      allsparepart: [],
      DATA: [],
      HARGA_JUAL: "",
      object: "",
      HARGA_TAMPUNG_JUAL: "",
    };
  },
  mounted() {
    this.bindData();
  },

  methods: {
    bindData() {
      this.ID_PENJUALAN_SPAREPART = this.$route.params.ID_PENJUALAN_SPAREPART;
      this.ID_TRANSAKSI = this.$route.params.ID_TRANSAKSI;
      this.ID_SPAREPARTS = this.$route.params.ID_SPAREPARTS;
      this.JUMLAH_SPAREPART = this.$route.params.JUMLAH_SPAREPART;
      this.SUBTOTAL_SPAREPART = this.$route.params.SUBTOTAL_SPAREPART;
    },
    async getallsparepart() {
      try {
        this.allsparepart = await Controller.getallsparepart();
        this.object = this.allsparepart.data.find(
          (Obj) => Obj.ID_SPAREPARTS == this.ID_SPAREPARTS
        );

        console.log(this.object.HARGA_JUAL);
      } catch (err) {
        console.log(err);
      }
    },
    proses() {
      this.SUBTOTAL_SPAREPART = this.JUMLAH_SPAREPART * this.object.HARGA_JUAL;
    },
    async editransaksisparepart() {
      try {
        this.HARGA_TAMPUNG_JUAL = this.SUBTOTAL_SPAREPART;
        console.log(this.HARGA_TAMPUNG_JUAL);
        await Controller.editransaksisparepart(
          this.ID_PENJUALAN_SPAREPART,
          this.ID_TRANSAKSI,
          this.ID_SPAREPARTS,
          this.JUMLAH_SPAREPART,
          this.SUBTOTAL_SPAREPART,
          this.HARGA_TAMPUNG_JUAL
        );
        console.log("berhasil ubah");
        alert("data telah berhasil diubah");
        this.$router.push("/transaksisparepartCS");
        this.$router.go();
      } catch (err) {
        alert("data gagal diubah");
        console.log(err);
      }
    },
  },
  async created() {
    this.getallsparepart();
    //  this.checklogin();
  },
};
</script>



