<template>
  <div class="container">
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
              <p>Quién es Kajisa</p>
            </button>
          </h2>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
             data-parent="#accordionExample">
          <div class="card-body">
            Somos una empresa que se especializa en el aseguramiento y control de los procesos
            financieros,
            administrativos y de auditoría en diferentes tipos de industrias.
            <br/><br/>
            Respaldados por un equipo interdisciplinario de profesionales que está en permanente
            proceso de
            actualización y conocimiento de las mejores prácticas de la industria.
            <br/><br/>
            Kajisa Consultores SAS firma inscrita ante la Junta Central de Contadores, lleva
            trabajando en
            el sector de prestación de servicios de Contaduría, Revisoría Fiscal, auditoría
            financiera y la
            consultoría desde el año 2014. Establecida desde su creación en Bogotá, cuenta con
            clientes de
            diferentes sectores y tamaños, distribuidos por toda la geografía nacional.

          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <p>Nuestra Misión</p>
            </button>
          </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
             data-parent="#accordionExample">
          <div class="card-body">
            Satisfacer las necesidades de nuestros clientes ofreciendo soluciones en los procesos
            integrales
            de la función contable para organizaciones empresariales en crecimiento con un equipo
            humano
            idóneo, innovador, ético, eficaz y con vocación y compromiso de servicio.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                    data-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
              <p>Nuestra Visión</p>
            </button>
          </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
             data-parent="#accordionExample">
          <div class="card-body">
            En el año 2025 seremos una empresa consolidada como una Organización Moderna y Modelo, a
            nivel
            Nacional e Internacional, brindando nuestros Servicios profesionales con el mayor grado
            de
            excelencia, enfocándonos a ser siempre una empresa Innovadora, Visionaria y Altamente
            Confiable,
            constituyendo la primera opción para nuestros clientes en los servicios requeridos y en
            la
            solución a sus necesidades, basados en la aplicación de las mejores prácticas en los
            procesos
            contables regidos por la normatividad vigente.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentAbout',
};
</script>

<style lang="scss">
  p {
    font: small-caps 100%/200% serif;
    color: darkred;
  }
</style>
