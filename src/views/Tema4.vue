<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramientas de trabajo

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema4/t4-img1.png", alt="Texto que describa la imagen")
      .col-lg-7
        p.mt-2 Una vez abordadas las herramientas estadísticas para el análisis de datos y la toma de decisiones, es importante contar con instrumentos que aporten al desarrollo de las acciones encaminadas a la agrupación de los datos con el fin de garantizar su adecuado uso. De igual forma, se requiere el conocimiento de mecanismos que permitan dar fluidez a los procesos de trabajo, garantizando optimización de recursos y eficiencia en el procesamiento de los datos.

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta El sistema de flujo de trabajo
      p Debido a la amplia diversidad de los procesos de negocio y a las necesidades particulares que presentan las organizaciones, los flujos de trabajo son flexibles y se adaptan con facilidad a dichas características. A partir de su utilidad y los objetivos del proceso, es posible establecer y describir los tipos de #[i Work flow] expuestos por la Universidad Militar Nueva Granada (s.f) en #[i Sistemas de  Work Flow]. (p. 5).

    .row.justify-content-center.mt-3
      .col-lg-4.mt-3
        .tarjeta.tarjeta-slide.abajo.color-primario4(@mouseover="indicadorTarjetaSlide = false").tarjeta-Hoover
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5
              p Automatizan procesos de negocios de carácter repetitivo, estructurados y con gran número de datos.
            .tarjeta-slide__img.color-primario4(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-img2.png')})`}")

      .col-lg-4.mt-3
        .tarjeta.tarjeta-slide.abajo.color-primario4(@mouseover="indicadorTarjetaSlide = false").tarjeta-Hoover
          .tarjeta-slide__contenedor
            .tarjeta-slide__img.color-primario4(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-img3.png')})`}")
            .tarjeta-slide__contenido.p-5
              p Estructuran procesos de negocio en el que participan personas con un objetivo común. Involucran documentos denominados contenedores de información y siguen la ruta definida, además de las acciones que se toman sobre estos.

      .col-lg-4.mt-3
        .tarjeta.tarjeta-slide.abajo.color-primario4(@mouseover="indicadorTarjetaSlide = false").tarjeta-Hoover
          .tarjeta-slide__contenedor
            .tarjeta-slide__img.color-primario4(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-img4.png')})`}")
            .tarjeta-slide__contenido.p-5
              p Involucra procesos de administración empresarial como órdenes de compra, reportes de ventas, entre otros. Se emplean cuando existe una gran cantidad de procesos administrativos dentro de la empresa.

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta La tabulación de datos

    .row.justify-content-around.align-items-center
      .col-10
        .cajon.cajon.color-secundario2.p-4.mt-2
          p Al momento de realizar un estudio es necesario determinar las condiciones del entorno en el cual se obtendrán datos, pues el entorno es muy grande, y es complejo abarcar todos los individuos que lo componen. La estadística plantea la posibilidad de definir un tamaño de muestra que es representativa de toda población; es debido aclarar que la población es el conglomerado de los individuos de interés para un estudio en particular y la muestra es el subconjunto de la población. Para conocer y calcular el tamaño de la muestra se invita a revisar el documento Tamaño de la muestra y cómo calcularlo.

    .row.justify-content-around.align-items-center.mt-4
      .col-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema4/img-6.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tamaño de la muestra y cómo calcularlo 
                  p.text-small Para conocer y calcular el tamaño de la muestra se invita a revisar el documento Tamaño de la muestra y cómo calcularlo.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo3-TamanoMuestra.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta Herramientas de tabulación
      p.mt-3 La tabulación es un proceso estadístico que permite agrupar los datos recolectados y presentarlos de una forma gráfica, así se facilita el análisis. Existen diversas herramientas que permiten realizar dicha acción, entre las que se destacan:

    .row.justify-content-center.mb-5.mt-5
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema4/t4-img5.png", alt="alt").imgTema4
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img7.png", alt="alt").numero
            .col
              h2 Excel
              p.mt-2 Es una herramienta básica para el desarrollo de este tipo de actividades, permite calcular variables, realizar tablas y hacer gráficos.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img8.png", alt="alt").numero
            .col
              h2 #[i Power BI]
              p.mt-2 Es una herramienta que permite importar datos y visualizarlos de manera dinámica, se caracteriza por ser un #[i software] amigable e interactivo y contribuye al análisis de datos. Esta herramienta incluye botones de comando que facilitan el proceso de visualización y segmentación de datos.
        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img9.png", alt="alt").numero
            .col
              h2 SPSS
              p.mt-2 Es un aplicativo de análisis estadístico que permite organizar y depurar los datos. Sin embargo, no es una herramienta intuitiva ni amigable, lo que genera que el uso sea más complejo.
        .crd.crd--avatarHorizontal.crd--last2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-img10.png", alt="alt").numero
            .col
              h2 #[i Mintab]
              p.mt-2 Permite realizar pruebas y análisis estadísticos, es de fácil manejo y compatible con Excel ya que permite copiar datos directamente de dicho aplicativo.

      .row.justify-content-around.align-items-center
        .col-10
          .cajon.cajon.color-secundario3.p-4.mt-5
            p Los aplicativos mencionados permiten tabular y visualizar la información estadística, facilitando su sistematización y análisis; además automatizan los procesos, y se pueden articular con los sistemas de información organizacional contribuyendo al flujo de información.  La elección del tipo de aplicativo depende de diversos criterios y dentro de los cuales se encuentran los requerimientos de manejo de la información a nivel de la organización, tecnología básica disponible, capacitación de los colaboradores y disponibilidad presupuestal.

      .row.justify-content-around.align-items-center
        .col-10
          .cajon.cajon.color-secundario2.p-4.mt-4
            p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
