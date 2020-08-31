<template>
  <div class="container-fluid">
    <!-- Page Header-->
    <header>
      <h1 class="h3 display">Tables</h1>

      <h2 class="kotakCari">
        <div class="input-group">
          <input
            @keyup="searchmotor()"
            v-model="SEARCH"
            class="form-control py-2 border-right-0 border"
            type="search"
            placeholder="CARI TIPE MOTOR"
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
          <h4>TABLE Data Motor</h4>
        </div>
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>ID-MOTOR</th>
                <th>MERK MOTOR</th>
                <th>TIPE MOTOR</th>
            
                
              </tr>
            </thead>

            <tbody>
              <tr
                class="table-primary"
                v-for="motor of allmotor.data"
                v-bind:key="motor.ID_MOTOR"
              >
                <th scope="row">{{motor.ID_MOTOR}}</th>

                <td>{{motor.MERK_MOTOR}}</td>
                <td>{{motor.TIPE_MOTOR}}</td>
                
        
                <router-link
                  :to=" { name:'edittipemotor', params:{ ID_MOTOR:motor.ID_MOTOR,MERK_MOTOR:motor.MERK_MOTOR,TIPE_MOTOR:motor.TIPE_MOTOR}}"
                >
                  <td>
                    <button type="button" class="btn btn-primary">EDIT</button>
                  </td>
                </router-link>

                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deletemotor(motor.ID_MOTOR)"
                  >HAPUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <router-link to="/inputtipemotor">
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
      allmotor: [],
      FixData:[],
      ID_MOTOR: "",
      MERK_MOTOR: "",
      TIPE_MOTOR: "",
      SEARCH:""
    };
  },

  methods: {
    async getallmotor() {
      try {
        this.allmotor = await Controller.getallmotor();
        this.FixData = this.allmotor.data;
      } catch (err) {
        console.log(err);
      }
    },

    searchmotor() {
      if (this.SEARCH.trim() === "") {
        this.allmotor.data = this.FixData;
      } else {
        var vcampaigns = this.allmotor.data;
        var textse = this.SEARCH;
        var makeQuery = function filterItems(query) {
          return vcampaigns.filter(function(el) {
            return el.ID_MOTOR == textse;
          });
        };

        this.allmotor.data = makeQuery(this.SEARCH);
      }
    },

    async deletemotor(id) {
      if (confirm("APA INGIN MENGHAPUS JASA?")) {
        try {
          this.allmotor = await Controller.deletemotor(id);
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
    // checklogin(){
    //       if(!this.$auth.check()){
    //           this.$router.replace('/')
    //             alert("LOGIN DULU :) ")
    //       }
    //     },
  },
  

  async created() {
    this.getallmotor();
    //  this.checklogin();
  }
};
</script>

