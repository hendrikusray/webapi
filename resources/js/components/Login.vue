<template>
  <div>
    <div class="page login-page">
      <div class="container">
        <div class="form-outer text-center d-flex align-items-center">
          <div class="form-inner">
            <div class="logo text-uppercase">
              <span>
                <img src="asset/logo.png" class="logologin">
              </span>
              <strong class="text-primary"></strong>
            </div>
            <p>
              <b>SELAMAT DATANG DI ATMA AUTO</b>
            </p>

            <div class="form-group-material">
              <input
                v-model="username"
                id="login-username"
                type="text"
                name="loginUsername"
                required
                data-msg="Please enter your username"
                class="input-material"
              >
              <label for="login-username"  class="label-material">Username</label>
            </div>
            <div class="form-group-material">
              <input
                v-model="password"
                id="login-password"
                type="password"
                name="loginPassword"
                required
                data-msg="Please enter your password"
                class="input-material"
              >
              <label for="login-password" class="label-material">Password</label>
            </div>
            <div class="form-group text-center">
              <a @click="login()" id="login" class="btn btn-primary">Login</a>
              <!-- This should be submit button but I replaced it with <a> for demo purposes-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Controller from ".././httpController";

export default {
  data() {
    return {
      username: "",
      password: "",
      pegawaiData: []
    };
  },

  mounted() {
    this.loadPegawai();
    this.checklogin();
    
    
  },

  methods: {
    login() {
      var app = this;
      if (this.username == "owner" && this.password=="owner") {
         this.$router.push("/ownerdatasupplier");
        alert('selamat datang owner :)')
       
      } else {

        this.$auth.login({
        params: {
          username: app.username,
          password: app.password
        },

        success: function() {
          console.log("masuk");
            alert('LOGIN BERHASIL !')
        },
        error: function(err) {
          console.log("err");
          alert('CEK KEMBALI INPUTAN ANDA !')
        },
        
        rememberMe: true,
        redirect: "/pelangganCS",
        fetchUser: true
      });
        
      }
      
    },
    checklogin() {
      if (this.$auth.check()) {
        console.log("lalla");
        console.log(this.$auth.check());
        this.checkrole();
      }
    },
    async loadPegawai() {
      try {
        console.log("cek");
        this.pegawaiData = await Controller.getallpegawai();
        this.pegawaiData = this.pegawaiData.data;
      } catch (err) {
        console.log(err);
      }
    },

    checkrole() {
      var found = null;

      this.pegawaiData.forEach(function(pegawai, index) {
        if (pegawai.id == this.$auth.user().id) {
         return found = pegawai.ROLE;
        }
      });

      console.log(found);

      if (found == "OWNER") {
        this.$router.replace("/ownerdatasupplier");
      } else if (found == "CS") {
        this.$router.replace("/pelangganCS");
      }
    }
  }
};
</script>
