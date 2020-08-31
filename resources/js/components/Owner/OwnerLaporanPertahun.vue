<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
     <h1 class="h3 display"></h1>

      <h2 class="kotakCari">
        <div class="input-group">
          <input
            @keyup="searchsupplier()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI PEGAWAI"
          >
          <span class="input-group-append">
            <div class="input-group-text bg-transparent">
              <i class="fa fa-search"></i>
            </div>
          </span>
        </div>
      </h2>
    </header>
    <div class="row">
      <div class="card">
        <div class="card-header">
          <h4>TABLE Data Supplier</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-SUPPLIER</th>
                <th>NAMA SUPPLIER</th>
                <th>ALAMAT SUPPLIER</th>
                <th>TELPON SUPPLIER</th>
                <th>NAMA SALES</th>
                <th>TELPON SALES</th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="supplier of allsupplier.data"
                v-bind:key="supplier.ID_SUPPLIER"
              >
                <th scope="row">{{supplier.ID_SUPPLIER}}</th>

                <td>{{supplier.NAMA_SUPPLIER}}</td>
                <td>{{supplier.ALAMAT_SUPPLIER}}</td>
                <td>{{supplier.TELEPON_SUPPLIER}}</td>
                <td>{{supplier.NAMA_SALES}}</td>
                <td>{{supplier.TELEPON_SALES}}</td>

                <router-link
                  :to=" { name:'editsupplier', params:{ ID_SUPPLIER:supplier.ID_SUPPLIER,NAMA_SUPPLIER:supplier.NAMA_SUPPLIER,ALAMAT_SUPPLIER:supplier.ALAMAT_SUPPLIER,TELEPON_SUPPLIER:supplier.TELEPON_SUPPLIER  ,NAMA_SALES:supplier.NAMA_SALES,   TELEPON_SALES:supplier.TELEPON_SALES}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletesupplier(supplier.ID_SUPPLIER)"
                  >HAPUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <router-link to="/inputsupplier">
      <button class="rounded-circle btn btn-success" type="button">
        <i class="material-icons pmd-sm">add</i>
      </button>
    </router-link>
  </div>
</template>


<script>
import Controller from "../../httpController";

export default {
  data() {
    return {
      allsupplier: [],
      FixData:[],
      ID_SUPPLIER: "",
      NAMA_SUPPLIER: "",
      ALAMAT_SUPPLIER: "",
      TELEPON_SUPPLIER: "",
      NAMA_SALES: "",
      TELEPON_SALES: "",
      SEARCH:""
    };
  },
  

  methods: {
    async getallsupplier() {
      try {
        this.allsupplier = await Controller.getallsupplier();
         console.log(this.$auth.user().id)
         console.log(this.allsupplier.data);
        this.FixData = this.allsupplier.data;
        
      } catch (err) {
        console.log(err);
      }
    },

    searchsupplier() {
      if (this.SEARCH.trim() === "") {
        this.allsupplier.data = this.FixData;
      } else {
        var vcampaigns = this.allsupplier.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function(el) {
            return el.ID_SUPPLIER == textse;
          });
        };

        this.allsupplier.data = makeQuery(this.SEARCH);
      }
    },

    async deletesupplier(id) {
      if (confirm("APA INGIN MENGHAPUS SUPPLIER?")) {
        try {
          this.allsupplier = await Controller.deletesupplier(id);
        alert('data berhasil dihapus')
          // this.allmotor.data = this.allevent.data.reverse()
          // console.log(this.eventbyuser)
        } catch (err) {
          console.log(err);
        }

        this.$router.go();
      } else {
        // Do nothing!
      }
    },

     bindData(){
       console.log(this.$auth.user().id)
       this.id=this.$auth.user().id
       this.username=this.$auth.user().username
     },
    checklogin(){
          if(!this.$auth.check()){
              this.$router.replace('/login')
                alert("LOGIN DULU :) ")
          }
        },
  },
  async editsupplier() {
    try {
      await Controller.editsupplier(
        this.ID_SUPPLIER,
        this.NAMA_SUPPLIER,
        this.ALAMAT_SUPPLIER,
        this.TELEPON_SUPPLIER,
        this.NAMA_SALES,
        this.TELEPON_SALES
      );
      console.log("berhasil ubah");
      alert("data telah berhasl diubah");
      this.$router.push("/ownerdatasupplier");
      this.$router.go();
    } catch (err) {
      alert("data gagal diubah");
      console.log(err);
    }
  },

  async created() {
    this.getallsupplier();
     this.checklogin();
      await this.bindData()
  }
};
</script>

