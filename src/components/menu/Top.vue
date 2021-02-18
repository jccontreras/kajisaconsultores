<template>
  <div class="container-fluid">
    <router-link class="nav-link" :to="{name: 'home'}">
      <img src="@/assets/logo/kajlogo.png" style="max-height: 100px; max-width: 200px">
    </router-link>
    <ul class="list-group list-group-flush">
      <li class="list-group-item licolor">
        <router-link class="nav-link linkcolor" :to="{name: 'about'}">
          Nosotros
        </router-link>
      </li>
      <li class="list-group-item dropdown licolor">
        <a class="dropdown-toggle linkcolor" href="#"
           id="navbarDropdownMenuLink" role="button"
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Servicios
        </a>
        <div class="dropdown-menu licolor">
          <router-link class="nav-link linkcolor" :to="{name: 'taxes'}">
            Impuestos
          </router-link>
          <router-link class="nav-link linkcolor" :to="{name: 'review'}">
            Revisoria
          </router-link>
          <router-link class="nav-link linkcolor" :to="{name: 'audit'}">
            Auditoria
          </router-link>
          <router-link class="nav-link linkcolor" :to="{name: 'outsourcing'}">
            Outsorcing
          </router-link>
        </div>
      </li>
      <li class="list-group-item licolor">
        <router-link class="nav-link linkcolor" :to="{name: 'map'}">
          Encuentranos
        </router-link>
      </li>
    </ul>
  </div>
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
  .vertical-nav {
    min-width: 17rem;
    width: 17rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.4s;
  }

  .page-content {
    width: calc(100% - 17rem);
    margin-left: 17rem;
    transition: all 0.4s;
  }

  .licolor {
    background-color: #e0d9d9;
  }
  .linkcolor {
    text-decoration:none;
    color:black;
  }
</style>
