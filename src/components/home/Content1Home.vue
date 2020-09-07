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
      <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/publicidad/gif/gif1.gif" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub11.jpeg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub10.jpeg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub8.jpeg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub9.jpeg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub5.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub1.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub2.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="@/assets/publicidad/pub3.jpg" class="d-block w-100">
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
