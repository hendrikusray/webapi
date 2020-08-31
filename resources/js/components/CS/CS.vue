<template>
  <div>
    <!-- Side Navbar -->
    <nav class="side-navbar">
      <div class="side-navbar-wrapper">
        <!-- Sidebar Header    -->
        <div class="sidenav-header d-flex align-items-center justify-content-center">
          <!-- User Info-->
          <div class="sidenav-header-inner text-center">
            <img src="asset/logo.png" class="logo" />
          </div>
          <!-- Small Brand information, appears on minimized sidebar-->
          <div class="sidenav-header-logo">
            <a href class="brand-small text-center">
              <strong></strong>
              <strong class="text-primary">
                <img src="asset/logo.png " style="width: 60px;height: auto;" alt />
              </strong>
            </a>
          </div>
        </div>
        <!-- Sidebar Navigation Menus-->
        <div class="main-menu">
          <ul id="side-main-menu" class="side-menu list-unstyled">
            <router-link to="/pelangganCS">
              <li>
                <a href="#">
                  <img src="asset/pelanggan.png" class="iconMenu" />
                  <i></i>
                  <b>PELANGGAN</b>
                </a>
              </li>
            </router-link>

            <router-link to="/pelangganmotorCS">
              <li>
                <a href="#">
                  <img src="asset/motor.png" class="iconMenu" />
                  <i></i>KENDARAAN PEL
                </a>
              </li>
            </router-link>

            <li>
              <a href="#">
                <img src="asset/laporan.png" class="iconMenu" />

                <div class="dropdown">
                  <button class="dropbtn">TRANSAKSI</button>
                  <div class="dropdown-content">
                    <router-link to="/transaksijasaCS">
                      <li>
                        <a href="#" style="color:black">TRANSAKSI JASA</a>
                      </li>
                    </router-link>
                    <router-link to="/transaksisparepartCS">
                      <li>
                        <a href="#" style="color:black">TRANSAKSI SPAREPARTS</a>
                      </li>
                    </router-link>
                    <router-link to="/transaksijasadansparepartCS">
                      <li>
                        <a href="#" style="color:black">TRANSAKIS JASA DAN SPAREPARTS</a>
                      </li>
                    </router-link>
                  </div>
                </div>
              </a>
            </li>
            <router-link to="/ownerdatapemesanansparepart">
              <li>
                <a href="#">
                  <img src="asset/laporan.png" class="iconMenu" />
                  <i></i>Pemesanan Sparepart
                </a>
              </li>
            </router-link>

            <router-link to="/ownerdatatransaksi">
              <li>
                <a href="#">
                  <img src="asset/laporan.png" class="iconMenu" />
                  <i></i>Transaksi
                </a>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div class="page">
      <!-- navbar-->
      <header class="header">
        <nav class="navbar">
          <div class="container-fluid">
            <div class="navbar-holder d-flex align-items-center justify-content-between">
              <div class="navbar-header">
                <a id="toggle-btn" href="#" class="menu-btn">
                  <i>CS</i>
                </a>
                <a class="navbar-brand">
                  <div class="brand-text d-none d-md-inline-block">
                    <span></span>
                    <strong class="text-primary"></strong>
                  </div>
                </a>
              </div>
              <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <!-- Log out-->
                <li class="nav-item" style="color:white">
                  <a @click="logout" class="nav-link logout">
                    <span class="d-none d-sm-inline-block">Logout</span>
                    <i class="fa fa-sign-out"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <router-view></router-view>

      <footer class="main-footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <p>ATMA AUTO &copy; 2019</p>
            </div>
            <div class="col-sm-6 text-right"></div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import Controller from "../../httpController.js";
export default {
  methods: {
    logout() {
      this.$auth.logout({
        redirect: "/login",
      });
      this.$router.go();
    },
  },
};
</script>