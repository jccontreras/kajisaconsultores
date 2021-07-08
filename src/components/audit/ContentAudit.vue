<template>
  <div class="container">
    <div class="card cardsize" style="background-color: #dbd1d1">
      <img src="@/assets/img/Auditoria.png" class="card-img-top imgsize">
      <div class="card-body cardsize" >
        <div class="accordion" id="accordionExample">
          <div class="card cardcolor" style="background-color: #dbd1d1">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                  <p>AUDITORIA</p>
                </button>
              </h2>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                 data-parent="#accordionExample">
              <div class="card-body">
                A través de este servicio se evalúa la información financiera de nuestros clientes y
                se emite
                una opinión profesional e independiente sobre la razonabilidad de las partidas que
                componen
                dichos estados e identificación oportuna de riesgos, lo que representa un insumo
                para la toma de
                decisiones de la dirección.
                Se ofrecen, además, servicios de revisión especial con el fin de emitir informes
                para usuarios
                específicos de dichos datos.
              </div>
            </div>
          </div>
          <div class="card" style="background-color: #dbd1d1">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                  <p>AUDITORIA TRIBUTARIA</p>
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
              <div class="card-body">
                La observación imparcial y objetiva de la actividad económica de las empresas
                permite al auditor
                hacer una evaluación de su desempeño a partir de las fuentes de información
                contables y
                financieras, así como verificar el cumplimiento de los requisitos contables y
                tributarios.

                Con base en las pruebas practicadas, KAJISA CONSULTORES SAS presenta a los
                directivos de la
                organización informes objetivos sobre el resultado de la evaluación, la
                razonabilidad en el
                desempeño de la organización respecto de las fuentes y usos de sus recursos
                económicos y un plan
                de mejoramiento propuesto que se ajuste con las políticas de la compañía y con las
                normas que
                rigen las materias contables y tributarias.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentAudit',
};
</script>

<style lang="scss" type="text/css" ref="styles"/>
