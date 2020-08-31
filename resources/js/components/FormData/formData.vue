<template>
<div>
  <body class="backgroundInput">
    <header class="header">
      <nav class="navbar" style="background-color: black">
        <div class="container-fluid">
          <div class="navbar-holder d-flex align-items-center justify-content-between">
            <div class="navbar-header">
              <a class="navbar-brand">
                <div class="sidenav-header-inner text-center">
                  <img src="http://localhost:8080/asset/logo.png" class="logoInput" />
                </div>
                <div class="brand-text d-none d-md-inline-block">
                  <span></span>
                  <strong class="text-primary"></strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <router-view></router-view>
  </body>
</div>
</template>


