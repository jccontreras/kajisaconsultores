<template>
  <nav class="navbar navbar-expand-lg navbar-light colorttop">
    <router-link class="nav-link" :to="{name: 'home'}">
      <img src="@/assets/logo/LogoOriginal.png" style="max-height: 100px; max-width: 150px">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{name: 'about'}">
            Nosotros
          </router-link>
        </li>
        <li class="nav-item active dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Servicios
          </a>
          <div class="dropdown-menu">
            <router-link class="nav-link" :to="{name: 'taxes'}">
              Impuestos
            </router-link>
            <router-link class="nav-link" :to="{name: 'review'}">
              Revisoria
            </router-link>
            <router-link class="nav-link" :to="{name: 'audit'}">
              Auditoria
            </router-link>
            <router-link class="nav-link" :to="{name: 'outsourcing'}">
              Outsorcing
            </router-link>
          </div>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" :to="{name: 'map'}">
            Encuentranos
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <a class="navbar-brand" href="https://www.facebook.com/kajisaconsultores/" target="_blank">
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
      <a class="navbar-brand" href="https://www.youtube.com/channel/UCFjbIJsqnmMAseB-vX8wGvg" target="_blank">
        <img src="@/assets/logo/Youtube.png" width="24" height="24" alt="">
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Top',
};
</script>

<style lang="scss">
  .dropcolor {
    background-color: #787575;
  }
</style>
