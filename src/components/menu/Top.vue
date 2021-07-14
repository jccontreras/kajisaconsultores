<template>
  <div class="licolor container-fluid">
    <router-link class="nav-link" :to="{name: 'home'}">
      <img src="@/assets/logo/kajlogo.png" style="max-height: 100%; max-width: 130%">
    </router-link>
    <ul class="list-group list-group-flush">
      <li class="list-group-item licolor">
        <router-link class="nav-link linkcolor" :to="{name: 'about'}">
          Nosotros
        </router-link>
      </li>
      <li class="list-group-item licolor">
        <a class="nav-link linkcolor" href="#" @click="openSubMenu">
          Servicios
          <img src="@/assets/menu/arrowdown.png" style="max-height: 10%; max-width: 10%">
        </a>
      </li>
      <li id="submenu" class="list-group-item licolor">
        <ul class="list-group list-group-flush">
          <li class="list-group-item licolor">
            <router-link class="nav-link linkcolor" :to="{name: 'taxes'}">
              Impuestos
            </router-link>
          </li>
          <li class="list-group-item licolor">
            <router-link class="nav-link linkcolor" :to="{name: 'review'}">
              Revisoria
            </router-link>
          </li>
          <li class="list-group-item licolor">
            <router-link class="nav-link linkcolor" :to="{name: 'audit'}">
              Auditoria
            </router-link>
          </li>
          <li class="list-group-item licolor">
            <router-link class="nav-link linkcolor" :to="{name: 'outsourcing'}">
              Outsorcing
            </router-link>
          </li>
        </ul>
      </li>
      <li class="list-group-item licolor">
        <router-link class="nav-link linkcolor" :to="{name: 'map'}">
          Encuentranos
        </router-link>
      </li>
      <li class="list-group-item licolor">
        <router-link class="nav-link linkcolor" :to="{name: 'news'}">
          Actualidades
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
const jq = require('jquery');

export default {
  name: 'Top',
  data() {
    return {
      subisclose: false,
    };
  },
  methods: {
    openSubMenu() {
      if (this.subisclose === true) {
        jq('#submenu')
          .show(500);
        this.subisclose = false;
      } else {
        jq('#submenu')
          .hide(500);
        this.subisclose = true;
      }
    },
  },
  mounted() {
    jq('#submenu')
      .hide(500);
  },
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
  background-color: #dbd1d1;
}

.linkcolor {
  text-decoration: none;
  color: black;
}
</style>
