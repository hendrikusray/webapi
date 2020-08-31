<template>
  <div>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Laporan Pendapatan Tahunan</title>
    <router-view></router-view>
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