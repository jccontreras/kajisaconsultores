<template>
  <div class="container">
    <div class="card cardout cardsize shadow-lg p-3 mb-5" style="background-color: #dbd1d1">
      <img src="@/assets/img/outsourcing.png" class="card-img-top imgsize">
      <div class="card-body cardsize">
        <div class="accordion" id="accordionExample">
          <div class="card" style="background-color: #dbd1d1">
            <div class="card-header">
              <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                  <p>
                    OUTSORCING CONTABLE
                  </p>
                </button>
              </h2>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                 data-parent="#accordionExample">
              <div class="card-body">
                Asistimos en el manejo del área contable de pequeñas y medianas empresas, para que
                sus
                administradores se dediquen con total tranquilidad a su actividad productora de
                renta.
                Contamos con personal altamente calificado que se encargara de realizar los procesos
                contables,
                teniendo en cuenta las regulaciones de la ley Colombiana, con absoluta
                confidencialidad y
                protección de la información de nuestros clientes:
                <br/>
                <br/>
                <ul>
                  <li>Administración de Propiedad Planta y Equipo.</li>
                  <li>·Administración de Pasivos.</li>
                  <li>Administración de Inventarios.</li>
                  <li>Administración Disponible.</li>
                  <li>Elaboración de Estados Financieros.</li>
                  <li>Informes a Entidades de control.</li>
                  <li>Consolidación de Información Financiera.</li>
                </ul>

                Desarrollamos una propuesta a la medida de cada cliente para que obtenga los mayores
                beneficios.
              </div>
            </div>
          </div>
          <div class="card" style="background-color: #dbd1d1">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                  <p>
                    OUTSORCING DE NOMINA
                  </p>
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
              <div class="card-body">
                Asistimos en la administración de nómina de pequeñas y medianas empresas que estén
                por
                instalarse o se encuentren instaladas en Colombia. Teniendo en cuenta las
                regulaciones de la ley
                Colombiana y con absoluta confidencialidad y protección de la información de
                nuestros clientes.
                <br/>
                <br/>
                Por medio de nuestro servicio, le damos el valor que sus colaboradores representan
                para su
                empresa, teniendo en cuenta que es gracias a ellos que su empresa consigue nuevos
                triunfos,
                además se trata de estar al día con todos las normas legales que exige el país.
                <br/>
                <br/>
                <ul>
                  <li>Liquidación de nómina (parafiscales y seguridad social).</li>
                  <li>Emisión de certificados.</li>
                  <li>Reportes legales.</li>
                  <li>Reportes propios de la actividad.</li>
                  <li>Generación de medios magnéticos para pago electrónico</li>
                </ul>
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
  name: 'ContentOutsourcing',
};
</script>

<style lang="scss" type="text/css" ref="style"/>
