<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 ¿Qué es una base de datos?

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema3/t3-img1.png", alt="Texto que describa la imagen")
      .col-lg-7
        p.mt-2 Una base de datos (BD) es un repositorio de información que se encuentra organizado de tal forma que permite al usuario acceder, gestionar y actualizar los datos de forma sencilla. Para conocer más acerca de las bases de datos lo invitamos a ver el siguiente video:

    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/U8hJwMXfI1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta Tipos de bases de datos
      p Una vez abordados los conceptos más representativos en relación con las bases de datos, su funcionalidad y nivel de aporte para el entorno organizacional, es necesario contar con elementos de valor que permitan identificarlas, y sacar el máximo provecho de la información que estas contienen. A continuación, se presentan las tres categorías que definen cómo clasifican las bases de datos, esta clasificación no obedece a su nivel de importancia o utilidad, sino son definidas teniendo en cuenta el tipo de datos que en ellas se albergan y el objetivo de su uso. Los siguientes criterios son citados según Pulido et al.(2019, p. 20 - 21):
      p.mt-2 Estos son los tres criterios en los que se clasifican las bases de datos:

    .row.justify-content-around.align-items-center
      ImagenInfograficaB.color-acento-botones.bkg.img-infografica-b.p-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema3/t3-img2.png', alt='Texto que describa la imagen')

        div(x="28%" y="8%" tooltip="Según la variabilidad" numero="1")
          .h5.mb-2 Según la variabilidad:
          p #[strong ● Estáticas:] son bases de datos diseñadas en exclusiva para lectura y la cual almacena datos históricos para analizar su comportamiento a través del tiempo para hacer proyecciones, tomar decisiones y realizar inteligencia empresarial.
          p.mt-2 #[strong ● Dinámicas:] almacenan información que se puede modificar con el tiempo. Permiten actualizar, borrar y editar los datos, además de hacer operaciones fundamentales de consulta. Un ejemplo de este tipo de base de datos es la que utiliza el sistema de información de un supermercado.

        div(x="70%" y="5.5%" tooltip="Según el Contenido" numero="2")
          .h5.mb-2 Según el Contenido
          p #[strong ● Bibliográficas:] contienen una fuente primaria que permite localizarla. Un registro típico de una base de datos bibliográfica contiene información sobre el autor, fecha de publicación, editorial, título, edición, de una determinada publicación, entre otras. Además  pueden contener un resumen o extracto de la publicación original.
          p.mt-2 #[strong ● De texto completo:] almacenan las fuentes primarias, como ejemplo se encuentran las guías telefónicas en formato electrónico.
          p.mt-2 #[strong ● Bibliotecas de información:] son bases de datos que almacenan diferente tipo de información relacionada con disciplinas científicas como química, ciencias de la vida o medicina, mismas que a su vez se dividen en varios subtipos. (Pulido et al.2019, p. 21).

        div(x="65.5%" y="70%" tooltip="Según su modelo de base de datos" numero="3")
          .h5.mb-2 Según su modelo de base de datos
          p #[strong ● Jerárquica:] los datos se organizan en forma de árbol invertido (conocido como raíz), en donde un nodo padre de información puede tener varios hijos. 
          p.mt-2 #[strong ● De red:] es un modelo similar al jerárquico, pero se diferencia de este porque permite que un mismo nodo tenga varios padres, ofreciendo una solución eficiente al problema de la redundancia de datos.
          p.mt-2 #[strong ● Transaccionales:] son bases de datos cuyo único fin es el envío y recepción de datos a grandes velocidades, estas bases son poco comunes y están dirigidas, por lo general, al entorno de análisis de calidad, producción o industrial. Su propósito es recolectar y recuperar datos a la mayor velocidad posible, en este modelo la redundancia o duplicación no representa un problema.
          p.mt-2 #[strong ● Relacionales:] se utiliza para representar problemas reales y administrar datos de manera dinámica. Se fundamenta en el uso de relaciones que pueden considerarse en forma lógica como los conjuntos de datos llamados tuplas.
          p.mt-2 #[strong ● Multidimensionales:] permiten desarrollar aplicaciones muy concretas como Cubos OLAP. Son muy similares a las bases de datos relacionales, pero se diferencian de estas  porque presentan campos o atributos de dos tipos, es decir, pueden representar las diferentes dimensiones de la tabla e incluso las métricas que se desea aprender.
          p.mt-2 #[strong ● Orientada a objetos:] este modelo es de reciente creación y es propio de los modelos informáticos. Tiene como propósito almacenar en la base de datos los objetos completos en cuanto a su estado y comportamiento.
          p.mt-2 #[strong ● Documentales:] consienten en la indexación de texto completo y en líneas generales. Este método permite realizar búsquedas más potentes ya que almacenan grandes volúmenes de información entre las cuales se encuentran registros históricos.
          p.mt-2 #[strong ● Deductivas:] permite hacer deducciones a través de inferencias, y principalmente se basa en reglas y hechos almacenados en la base de datos. Son llamadas bases de datos lógicas porque se basan en la lógica matemática.

    separador

    #t_3_1.titulo-segundo.color-acento-botones
      h2 3.1. Estructura y elementos de las bases de datos

    .row.justify-content-around
      p Agregado a lo anterior, las bases de datos pueden ser estructuradas en niveles arquitectónicos de tres o cuatro niveles, estos guardan estrecha relación con la manera en que se almacenan y articulan los datos, teniendo en cuenta la estructura definida, y el modo en que los datos interactúan con los usuarios que tienen acceso a la BD.
      p.mt-2 Las bases de datos pueden tener dos arquitecturas y serán citadas según lo expuesto por Pulido et al.(2019, p.22), a continuación:

    .row.justify-content-center.mt-5
      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Arquitectura de tres niveles").tabs-c.fondo
          .row.p-4
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/t3-img3.png', alt='Texto que describa la imagen')          
            .col-md-6.mb-4.mb-md-0.p-3
              p #[strong 1. Nivel interno o físico:] es el más cercano al almacenamiento físico. Describe los detalles de cómo se almacenan físicamente los datos: los archivos que contienen la información, su organización, los métodos de acceso a los registros, los tipos de registros, la longitud y los campos que los componen.
              p.mt-2 #[strong 2. Nivel externo o de visión:] es el más cercano a los usuarios. Cada esquema describe la parte de la BD que es de interés para un determinado grupo de usuarios, en este nivel se representa la visión individual de un usuario o de un grupo.
              p.mt-2 #[strong 3. Nivel conceptual:] describe la estructura de toda la BD para un grupo de usuarios mediante un esquema conceptual. Este esquema describe las entidades, atributos, relaciones y operaciones de los usuarios, así como las restricciones, ocultando los detalles de las estructuras físicas de almacenamiento.
        
        .py-3.py-md-4(titulo="Arquitectura de cuatro niveles").tabs-c.fondo
          .row.p-4
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/t3-img4.png', alt='Texto que describa la imagen')          
            .col-md-6.mb-4.mb-md-0.p-3
              p #[strong 1. Nivel conceptual o visión:] se describe la información de la organización (objetos y relaciones) desde un punto de vista no informático. 
              p.mt-2 #[strong 2. Nivel lógico o visión:] se representan las entidades y relaciones de acuerdo con las características de dicho modelo sin entrar en el espacio de la representación física.
              p.mt-2 #[strong 3. Nivel interno:] descripción de la representación en la memoria externa de la computadora de los datos del esquema lógico, sus interrelaciones y los instrumentos para acceder a ellos.
              p.mt-2 #[strong 4. Niveles externos:] cada uno describe los datos y relaciones que entre ellos son de interés para una aplicación dada. Estos esquemas pueden verse como subconjuntos del modelo lógico de la BD. 

    .row.justify-content-center.mt-5
      p Como otro punto a tener en cuenta es que las bases de datos se componen por diversos elementos, entre los cuales se destacan cuatro que corresponden a tablas, formularios, informes y consultas; estos se explican a continuación:
      p.mt-2 Elementos de una base de datos

    .row.justify-content-center.mt-3
      .col-lg-9
        .row.justify-content-around.align-items-center
          ImagenInfograficaB.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/t3-img5.png', alt='Texto que describa la imagen')

            div(x="13%" y="8%" tooltip="" numero="1")
              h2 Tablas
              p Es similar a la apariencia de una hoja de cálculo, pues los datos se almacenan en filas y columnas. Para lograr la máxima flexibilidad la información debe estar organizada en tablas, para que no se tenga redundancia.
              p.mt-2 Cada fila de una tabla es un ‘registro’ donde se almacena cada información individual, este consta de campos (al menos uno). Los ‘campos’ corresponden a las columnas de la tabla y se deben configurar con un determinado tipo de dato, bien sea de texto, fecha, hora, numérico, o cualquier otro.

            div(x="34%" y="60%" tooltip="" numero="2")
              h2 Formularios
              p Se conocen como las pantallas de entrada de datos. Los formularios se utilizan para trabajar con los datos y contienen botones que ejecutan diversos comandos. Se puede crear una base de datos sin usar formularios solo editando los datos de las tablas en las hojas. No obstante, es ideal usar formularios para ver, escribir y editar datos en las tablas.
            
            div(x="98%" y="75%" tooltip="" numero="3")
              h2 Informes
              p Son ‘reportes’ que permiten resumir y presentar los datos de las tablas. Se pueden ejecutar en cualquier momento y siempre reflejarán los datos actualizados de la base de datos. En estos informes es posible consultar los datos en la pantalla, exportarlos en el computador o enviarlos por correo electrónico.
            
            div(x="87.5%" y="23%" tooltip="" numero="4")
              h2 Consultas
              p Pueden realizar varias funciones, pero la más común es la de recuperar datos específicos de las tablas. Las consultas permiten agregar criterios para filtrar los datos hasta obtener los registros que desee.

    separador

    #t_3_2.titulo-segundo.color-acento-botones
      h2 3.2. La tabulación
    p Durante el procesamiento se usan los datos brutos como elemento de entrada una vez ingresados, estos deben converger para producir un elemento de salida como informes u otras herramientas de análisis.
    p.mt-2 A continuación, se indican los pasos a seguir para realizar el procesamiento de la información:

    .tarjeta.tarjeta--tiempo.p-4(data-aos="fade-right")
      LineaTiempoC.color-primario(text-small).p-3
        .row.justify-content-center.align-items-start(titulo="Recopilación<br> de datos ").p-3
          .col-lg-10
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/t3-img6.png', alt='')        
              .col-lg-7
                p Este es el primer paso en el procesamiento de datos y consiste en extraer los datos de diferentes fuentes, pueden ser formatos de texto, almacenes de datos, tablas y matrices generadas por fuentes externas.
        
        .row.justify-content-center.align-items-start(titulo="Preparación<br> de datos").p-3
          .col-lg-10
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/t3-img7.png', alt='')        
              .col-lg-7
                p Los datos sin procesar deben ser depurados, organizados y verificados de manera minuciosa para identificar posibles errores, eliminando los datos incorrectos (redundantes, incompletos o incorrectos), de esta forma tener datos de alta calidad, y con una mayor inteligencia empresarial.
        
        .row.justify-content-center.align-items-start(titulo="Entrada de datos")
          .col-lg-10
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/t3-img8.png', alt='')        
              .col-lg-7
                p La entrada de datos es la primera etapa en que los datos sin procesar comienzan a convertirse en información utilizable, estos deben ser traducidos a un idioma comprensible. De este modo, los datos quedarán limpios y se ingresan a un destino específico que puede ser un CRM o un almacén de datos para su tratamiento.
        
        .row.justify-content-center.align-items-start(titulo="Procesamiento")
          .col-lg-10
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/t3-img9.png', alt='')        
              .col-lg-7
                p El procesamiento se puede realizar mediante técnicas de filtrado, análisis y visualización, e incluso con algoritmos de aprendizaje automático. El proceso puede variar dependiendo la fuente de los datos (base de datos, redes sociales, entre otros), y su uso previsto (examen de patrones de publicidad, determinar las necesidades del cliente, entre otros).
        
        .row.justify-content-center.align-items-start(titulo="Interpretación<br> de los datos")
          .col-lg-10
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/t3-img17.png', alt='')        
              .col-lg-7
                p Es la etapa en que los datos son utilizables para los usuarios. Al traducir los datos se pueden leer en forma de gráficos, videos, imágenes, texto sin formato, entre otros.
                p.mt-2 En este punto es posible comenzar a administrar los datos para los proyectos de análisis de información.

        .row.justify-content-center.align-items-start(titulo="Almacenamiento<br> de datos")
          .col-lg-10
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/t3-img18.png', alt='')        
              .col-lg-7
                p Una vez se procesan todos los datos son almacenados para su uso. Si bien, es posible que alguna información se use de inmediato o tenga un propósito más adelante.                                                                                

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta Matrices
      p La matriz de datos permite ordenar un conjunto de observaciones dentro de un esquema de filas y columnas; es un instrumento que tiene una serie de elementos y puede tratarse de distintos objetos matemáticos y numéricos. Cada observación corresponde a la intersección de una fila con una columna, de este modo el ordenamiento permite apreciar aspectos como las características de una muestra o de una población estadística.
      p.mt-2 Una matriz está compuesta por tres elementos: variables, casos y valores; cada uno de ellos se detallará a continuación:
      p.mt-3 Elementos de una matriz de datos

    .row.justify-content-around.aling-items-center.mt-4
      .col-lg-9
        TabsA.color-acento-contenido
          .tarjeta.p-3(style="background-color:#ffebf1" titulo="Variables")
            .row
              p Son las características de una muestra o población, pueden ser cuantitativas  o cualitativas. Las primeras son expresadas en números como la altura o el ingreso mensual, y las segundas indican una calidad como la profesión o el estado civil
          .tarjeta.p-3(style="background-color:#ffebf1" titulo="Casos")
            .row
              p Se encuentran en las filas y son elementos indivisibles que forman parte de un grupo sujeto a investigación. Sobre cada caso se analizan variables pertinentes al estudio realizado. Además, los casos pueden ser individuos, familias, grupos u otro, lo anterior dependerá de la estructura del trabajo estadístico.
          .tarjeta.p-3(style="background-color:#ffebf1" titulo="Valores")
            .row
              p Es el objeto matemático que corresponde a la coincidencia de una variable y un caso.

      .col-lg-3(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/t3-img10.png', alt='Texto que describa la imagen').m-auto

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta Técnicas de codificación

    .row.justify-content-center
      .col-lg-10.mb-5.mb-lg-0
        hr.color-linea.my-5.mb-0
        .bloque-texto-b.color-primario3.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Guillermo, P. (s.f), en #[em Noción y estructura del dato] citando a Comboni, S. & Juárez, J. #[em (Introducción a las técnicas de investigación)], afirman que “La codificación es un procedimiento técnico mediante el cual, los datos obtenidos se clasifican en categorías y se traducen en símbolos, ya sean cifras o letras; es decir, se asigna a cada opción de respuestas un número o una letra que permita tabularla rápidamente.” (p. 5).
            br
            .row.justify-content-end
              p.text-bold.texto-alineado4 Guillermo, P. (s.f.)
            i.fas.fa-quote-right

    .row.justify-content-center.mt-2
      p Dado lo anterior, se puede decir que la elaboración de un sistema de categorías y la codificación se puede hacer de forma simultánea, pues la codificación depende del sistema de categorías que adopte la variable o las alternativas que presente la pregunta.           

    .row.justify-content-around.align-items-center
      .col-10
        .cajon.cajon.color-secundario.p-4.mt-3
          p Asimismo, desde una perspectiva cualitativa, la codificación es un modo sistemático de desarrollar y refinar las interpretaciones de los datos. El proceso de codificación incluye la reunión y análisis de todos los datos que se refieren a temas, ideas, conceptos, interpretaciones y proposiciones. Durante esta etapa del análisis, lo que inicialmente fueron ideas e intuiciones vagas se refinan, expanden, descartan o desarrollan por completo.

    .row.justify-content-center.mt-4
      p.mb-5 Para desarrollar ese sistema de categorías y codificación se pueden aplicar diversas técnicas. A continuación, se explicarán las cinco fases para codificar datos cualitativos:

    .row.justify-content-center.pe-5.mb-5
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema3/t3-img11.png", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/t3-img12.png", alt="alt").numero
            .col
              p Desarrollo de  las categorías de codificación, empezando por redactar una lista de todos los temas, conceptos e interpretaciones y tipologías.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/t3-img13.png", alt="alt").numero
            .col
              p Codificación de todos los datos, escribiendo en el margen el número asignado o la letra correspondiente a cada categoría.
        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/t3-img14.png", alt="alt").numero
            .col
              p Separación de los datos según las diferentes categorías de codificación.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/t3-img15.png", alt="alt").numero
            .col
              p Revisión de qué datos han sobrado, estos se pueden ajustar a las categorías de codificación existentes o plantear unas nuevas.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/t3-img16.png", alt="alt").numero
            .col
              p Perfeccionamiento del análisis y comparación de los diferentes fragmentos relacionados con cada tema, concepto y propósito.

    .row.justify-content-center.mt-4
      p Una vez realizada la codificación de los datos se puede proceder a la confección de la matriz de datos, la cual no es más que el ordenamiento de los datos para su posterior análisis.

</template>

<script>
export default {
  name: 'Tema3',
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
