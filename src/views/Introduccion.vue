<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.aling-items-center
      .col-lg-11
        .bloque-texto-g.color-secundario.p-2.p-sm-4.p-md-5
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/introduccion.png')})`}")
          .bloque-texto-g__texto.p-4
            p Apreciado aprendiz en este componente se familiarizará con los conceptos relacionados con la ciencia de datos y conocerá los procesos para su identificación, recolección, tabulación y análisis en diversos entornos, en especial los organizacionales. De esta forma, se pretende establecer condiciones para la comprensión de su significado, y se abordará la importancia que tiene el uso del manejo de bases de datos en procesos donde se deba tomar decisiones.

        .row.justify-content-center
          p.mt-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://youtu.be/yXIzRPDgE54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO          
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
