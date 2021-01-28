<template>
  <div id="carouselExampleIndicators" class="carousel slide carousel-fade carouselsize"
       data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/publicidad/pub22.jpeg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub21.jpg" class="d-block w-100">
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
