<template>
  <div class="d-flex bd-highlight">
    <div class="p-2 flex-grow-1 bd-highlight">
      <router-link class="navbar-brand" :to="{name: 'home'}" v-if="isclose" title="Home">
        <img src="@/assets/logo/kajlogo.png" style="max-height: 70px; max-width: 200px">
      </router-link>
    </div>
    <div class="p-2">
      <div class="col align-self-end" style="text-align: end">
        <a class="navbar-brand" href="https://www.facebook.com/kajisaconsultores/"
           target="_blank">
          <img src="@/assets/logo/Facebook.png" width="24" height="24" alt="">
        </a>
        <a class="navbar-brand"
           href="https://www.instagram.com/kajisaconsultores/?igshid=cojsssbm4k6h&fbclid=IwAR31-v3BbD6XKuAxnWIJcic_zzKQ4n1ZB6eiXGgRjWbtY_BvvVX_36EE4fY"
           target="_blank">
          <img src="@/assets/logo/Instagram.png" width="24" height="24" alt="">
        </a>
        <a class="navbar-brand"
           href="https://twitter.com/KajisaConsultor?s=08&fbclid=IwAR3wptceW3-GToO2nzQTyl0BoAhhXsmvkGJez5g0_j9X-BrwvzlWFN1nskY"
           target="_blank">
          <img src="@/assets/logo/Twitter.png" width="24" height="24" alt="">
        </a>
        <a class="navbar-brand"
           href="https://www.linkedin.com/company/kajisa-consultores"
           target="_blank">
          <img src="@/assets/logo/Linckedin.png" width="24" height="24" alt="">
        </a>
        <a class="navbar-brand" href="https://www.youtube.com/channel/UCFjbIJsqnmMAseB-vX8wGvg"
           target="_blank">
          <img src="@/assets/logo/Youtube.png" width="24" height="24" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarComponent',
  props: {
    isclose: Boolean,
  },
};
</script>
