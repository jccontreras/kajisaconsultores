<template>
  <div id="carouselExampleIndicators"
       class="carousel slide carousel-fade carouselsize shadow-lg"
       data-ride="carousel" style="min-height: 100%">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/publicidad/pub31.jpeg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub30.jpeg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pubjim.png" class="d-block w-100">
        <div class="my-2" style="text-align: center">
          <router-link :to="{name: 'news'}" style="color: #821518">
            Quiero saber más...
          </router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub29.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub28.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub27.jpeg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub26.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub25.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub22.jpeg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub20.png" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub1-1.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub1-2.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub1-3.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub17.jpeg" class="d-block w-100">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
       data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
       data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Content1Home',
};
</script>

<style lang="scss" type="text/css" ref="style"/>
