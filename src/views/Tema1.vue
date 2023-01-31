<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La recolección de datos

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema1/t1-img1.png", alt="Texto que describa la imagen")
      .col-lg-7
        p.mt-2 Para definir el significado de recolección de datos, es necesario precisar que un dato, según la RAE, es “información sobre algo concreto que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho”. De acuerdo con lo anterior, se puede definir la recolección de datos, como la acción de reunir información sobre algo concreto. A continuación, se conocerán otras definiciones relacionadas con la recolección de datos: 

    .tarjeta.tarjeta--slyder.p-4
      SlyderA(tipo="b")
        .row.p-4
          .col-lg-6.mb-4.mb-md-0
            p El diccionario de la Universidad de Cambridge establece que los datos son “información, especialmente hechos o números, recopilados para ser examinados, considerados y utilizados para ayudar en la toma de decisiones; o información en forma electrónica que puede ser almacenada y utilizada por un computador”. Por lo anterior, se puede concluir que la palabra ‘dato’ está relacionada con el procesamiento al que se puede someter y extraer información para la toma de decisiones. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/t1-img2.png', alt='Texto que describa la imagen')
        .row.p-4
          .col-lg-6.mb-4.mb-md-0
            p Los datos se consideran uno de los activos más importantes para las organizaciones, es frecuente que quien tenga la información tiene el poder, puesto que la información es la base de todo proceso que se quiera realizar en el entorno. El desarrollo de las tecnologías de la información (TIC) han facilitado el acceso a gran cantidad de datos; acción que genera la necesidad de gestionar adecuadamente la información y en especial la denominada ‘sensible’. 

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/t1-img3.png', alt='Texto que describa la imagen')
        .row.p-4
          .col-lg-6.mb-4.mb-md-0
            p Gómez, I et al. (2018), en su libro #[i Calidad de Datos] indica que “la transformación digital está afectando a todos los sectores económicos y sociales. Convirtiendo a los datos en la base para la toma de decisiones y el habilitador más potente para cualquier organización”. (p. 25). Es por ello que las organizaciones deben estar a la vanguardia tecnológica, teniendo como objetivo el uso adecuado y seguro de la información presentada en el entorno.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/t1-img4.png', alt='Texto que describa la imagen')
        .row.p-4
          .col-lg-6.mb-4.mb-md-0
            p Para Harari, Y. (2016), en #[i Homo Deus. Breve historia del mañana], concibe el denominado ‘dataísmo’ como “una religión en la que el valor de cualquier fenómeno o entidad se determina por su capacidad para contribuir al procesamiento de datos” (p. 438), hecho que se ve reflejado en diversos escenarios donde se requiere formalizar procesos para la identificación, recolección y análisis de datos con base en la estructura de la estrategia organizacional.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/t1-img5.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta ¿Para qué sirve la recolección de datos?  

    .row.justify-content-center
      .col-lg-11.mb-5.mb-lg-0
        .bloque-texto-b.color-primario1.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Después de conocer algunos planteamientos de lo que significa la recolección de datos se revisará para qué son útiles. Para ello, Dunstan, J. et al. (2022), en #[em Una mirada a la era de los datos], plantean que “el dato es una representación parcial de un fenómeno, que puede ser registrada, transmitida, almacenada y procesada a fin de obtener información del mismo”. (p. 14)
            br
            br
            .row.justify-content-end
              p.text-bold.texto-alineado1 Dunstan, J. et al. (2022)
            i.fas.fa-quote-right

    .row.mt-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema1/t1-img6.png", alt="Texto que describa la imagen")
      .col-lg-7
        p.mt-2 #[strong Los datos abren la puerta al conocimiento], es por ello que el proceso de identificación, recolección y análisis se ven determinados por la disponibilidad de información y la diversidad de fuentes de consulta. También, es necesario contar con la divulgación de información no verificable, ya que a causa de esta se deben establecer mecanismos que permitan dar respuesta a las siguientes preguntas:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | ¿Qué datos se requieren?
          li 
            .lista-ol--cuadro__vineta
              span b
            | ¿De qué fuentes obtenerlos?
          li 
            .lista-ol--cuadro__vineta
              span c
            | ¿Qué instrumentos de recolección se deben utilizar?  
          li 
            .lista-ol--cuadro__vineta
              span d
            | ¿Cómo procesarlos?
          li 
            .lista-ol--cuadro__vineta
              span e
            | ¿Cómo analizarlos?

    .row.justify-content-around.align-items-center
      .col-10
        .cajon.cajon.color-secundario.p-4.mt-2
          p Es importante tener en cuenta que la calidad del análisis de los datos dependerá de la rigurosidad con que se desarrolle el proceso, de igual manera, es necesario comprender que los datos tienen un ciclo de vida y que de su comprensión dependerá en gran medida del resultado del análisis que se realice.

    .row.justify-content-around.align-items-center
      .titulo-sexto.color-acento-botones.mb-3.mt-4
        h5 Figura 1
        p.mb-0
          em Ciclo de vida del dato

    .row.mt-5.justify-content-center.align-items-center.align-items-lg-stretch
      img(src="@/assets/curso/temas/tema1/t1-img7.png", alt="Texto que describa la imagen")        
      p.mt-4 Por otro lado, algunas de las ventajas que ofrece el proceso de recolección de datos, son las siguientes:


    .row.justify-content-center.mt-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-acento-contenido.p-4.tarjeta-slyder
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/t1-img8.png' alt='AvatarTop')
          p.text-center Facilitar el análisis de datos y comprender el contexto en que fueron obtenidos.

        .tarjeta.color-acento-contenido.p-4.tarjeta-slyder
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/t1-img9.png' alt='AvatarTop')
          p.text-center Definir los criterios de organización que contribuyen a la formulación de estrategias para cada grupo de interés.

        .tarjeta.color-acento-contenido.p-4.tarjeta-slyder
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/t1-img10.png' alt='AvatarTop')
          p.text-center Identificar las oportunidades para la organización.

        .tarjeta.color-acento-contenido.p-4.tarjeta-slyder
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/t1-img11.png' alt='AvatarTop')
          p.text-center Reconocer las debilidades en los procesos internos y formular acciones de mejora.

        .tarjeta.color-acento-contenido.p-4.tarjeta-slyder
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/t1-img12.png' alt='AvatarTop')
          p.text-center Analizar y comprender el comportamiento de los clientes.              

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta Técnicas de recolección de datos 
      p Como se ha visto, la recolección de información permite acceder a los datos y se logra a través de técnicas e instrumentos, cuya selección obedece a aspectos como el objetivo de la recolección, tiempo requerido, recursos disponibles, conocimiento previo, entre otros.
      p A continuación, se presentan algunas de las técnicas utilizadas con mayor frecuencia para la recolección de datos:


    .row.justify-content-around.aling-items-center.mt-2
      .col-lg-9
        TabsA.color-acento-contenido
          .tarjeta.p-4(style="background-color:#ffebf1" titulo="Observación")
            .row
              p Es una técnica simple que pretende reconocer el comportamiento del objeto de estudio de manera directa, y su aplicación no requiere gran disponibilidad de recursos. Un observador puede realizar el proceso partiendo de la definición de las variables a observar y registrándolas en una bitácora. Para realizar esta técnica se puede hacer uso de una herramienta digital así se agiliza el proceso.
          .tarjeta.p-4(style="background-color:#ffebf1" titulo="Cuestionarios o encuestas")
            .row
              p Es un mecanismo de recolección popular que permite obtener datos directamente de los sujetos de interés. Para garantizar de forma correcta su diseño es necesario tener en cuenta las variables requeridas y formular preguntas que permitan cumplir los objetivos. Esta técnica puede incluir preguntas abiertas o cerradas dependiendo de los datos requeridos; la construcción de las preguntas y las opciones de respuesta obedecerán a la calidad de los datos obtenidos. Es por ello que un cuestionario o encuesta debe garantizar un proceso ágil de recolección.
          .tarjeta.p-4(style="background-color:#ffebf1" titulo="Grupos focales")
            .row
              p Consiste en desarrollar una entrevista colectiva que permite contrastar las respuestas de los participantes y fomentar la discusión sobre el tema tratado, de esta manera es posible enriquecer los datos y ver las diversas perspectivas sobre una problemática. Su efectividad depende de la capacidad del moderador para controlar la discusión y evitar que se desvíe o se convierta en un debate; además él será quien genere un ambiente de confianza entre los participantes y observe aspectos concernientes al lenguaje no verbal y a las reacciones de los participantes.
          .tarjeta.p-4(style="background-color:#ffebf1" titulo="Entrevistas")
            .row
              p A diferencia del grupo focal, las entrevistas son un tipo de herramienta que se realiza de manera individual, y consiste en la aplicación de un cuestionario que puede ser estructurado o no. Antes de aplicarse se debe definir las variables a identificar para obtener los datos adecuados. Esta herramienta requiere de empatía e interacción con el entrevistado, así crear un ambiente cómodo que certifique el éxito en su aplicación. 
              p.mt-2 El entrevistador debe garantizar que la conversación con el entrevistado sea amena y fluida para que no se convierta en una indagatoria, deberá estar atento a las manifestaciones del lenguaje no verbal (gestos, acciones, posturas, etc.), ya que de ese diálogo depende la calidad de los datos que se obtengan.
                                          
      .col-lg-3(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/t1-img13.png', alt='Texto que describa la imagen').m-auto

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta Herramientas para la recolección de datos
      p Para realizar el proceso de recolección de datos hay varias herramientas que se encuentran disponibles y dependen del tipo de información, cantidad y el objetivo buscado. Estas herramientas se comparten a continuación:

    
    .row.justify-content-around.aling-items-center.mt-2
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/t1-img14.png', alt='Texto que describa la imagen').m-auto

      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").p-4
          .row(titulo="Reconocimiento Óptico de Caracteres (OCR)").p-4
            p Este método consiste en digitalizar información permitiendo identificar el texto y hacer uso de este a través de herramientas de procesamiento de texto; es aplicado cuando se dispone de grandes cantidades de información de texto impresa o en formato de imagen. 
      
          .row(titulo="Procesamiento Inteligente de Documentos (IDP)").p-4
            p Permite establecer una estructura de datos extraídos desde archivos históricos no estructurados, facilitando la toma de datos, mitigando el desgaste operativo y generando plantillas de datos aptos para el análisis. Esta herramienta basa su solución en el uso de la Inteligencia Artificial (AI).

          .row(titulo="Almacén Operacional de Datos (ODS)").p-4
            p Es un reporteador enlazado a los sistemas de información organizacional el cual garantiza que la información sea centralizada y presentada de acuerdo con las necesidades de análisis y toma de decisiones para los usuarios con acceso.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
