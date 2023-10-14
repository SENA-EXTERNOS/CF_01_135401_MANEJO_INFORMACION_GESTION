<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La estadística

    .row.mb-4.justify-content-center.align-items-center.align-items-lg-stretch
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema2/t2-img1.png", alt="Texto que describa la imagen")
      .col-lg-7
        p.mt-2 La estadística es una disciplina de orden matemático, se centra en #[strong la interpretación de datos cuantitativos]; permite analizar fenómenos reales o experimentales a través de la recolección y ordenamiento de series de datos y así facilitar los procesos de toma de decisiones.

    .row.justify-content-center
      .col-lg-11.mb-5.mb-lg-0
        .bloque-texto-b.color-primario2.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Peña, D. (2015) en #[em Fundamentos de estadística], plantea que “la estadística actual es el resultado de la unión de dos disciplinas que evolucionan independientemente hasta confluir en el siglo XIX: la primera es el cálculo de probabilidades, que nace en el siglo XVII como teoría matemática de los juegos de azar; la segunda es la «estadística» (o ciencia del Estado, del latín Status), que estudia la descripción de datos y tiene unas raíces más antiguas. La integración de ambas líneas de pensamiento da lugar a una ciencia que estudia cómo obtener conclusiones de la investigación empírica mediante el uso de modelos matemáticos.” (p. 21).
            br
            .row.justify-content-end
              p.text-bold.texto-alineado2 Peña, D. (2015)
            i.fas.fa-quote-right

    .row.justify-content-around.align-items-center
      .col-11
        .cajon.cajon.color-secundario2.p-4.mt-2
          p Además plantea el autor que “La estadística actúa como disciplina puente entre los modelos matemáticos y los fenómenos reales. Un modelo matemático es una abstracción simplificada de una realidad más compleja, y siempre existirá cierta discrepancia entre lo observado y lo previsto por el modelo. La estadística proporciona una metodología para evaluar y juzgar estas discrepancias entre la realidad y la teoría”. Es posible dimensionar la importancia de esta disciplina en el contexto actual caracterizado por la masificación de datos y los requerimientos de análisis para la toma de decisiones. 

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta Tipos de estadística
      p La estadística se considera una valiosa herramienta de organización, análisis, comprensión y fluidez para los procesos que conlleven la toma de decisiones, siendo útil y adaptable en el entorno organizacional. Esta disciplina se divide en dos ramas que son la estadística descriptiva y la estadística inferencial que se describen a continuación:

    .tarjeta--container.row.p-3
      .col-md.tarjeta.color-acento-contenido1.p-5
        .row.justify-content-center
          .col-11
            figure
              img(src='@/assets/curso/temas/tema2/t2-img2.png', alt='Texto que describa la imagen')
        h3.mt-3.text-center Estadística descriptiva
        p.text-center Según #[strong Bologna, E. (2018)], la estadística descriptiva provee una serie de procedimientos dirigidos a resumir, sintetizar y volver manejable la información para poder interpretarla y extraer conclusiones a partir del conjunto de datos que, de otra manera, serían ininteligibles. (Métodos estadísticos de investigación, p. 15).
      
      .col-md.tarjeta.color-secundario1.p-5
        .row.justify-content-center
          .col-11
            figure
              img(src='@/assets/curso/temas/tema2/t2-img3.png', alt='Texto que describa la imagen')
        h3.mt-3.text-center Estadística inferencial
        p.text-center #[strong Bologna, E. (2018)], indica que esta estadística proporciona los procedimientos para estudiar un subconjunto de elementos y generalizar las conclusiones obtenidas. Esta estadística analiza unas variables en una muestra, y estima, por inferencia, los valores de la población. Con la aplicación de ella se reducen costos, y disminuye el tiempo necesario para adelantar investigaciones; además, si se respetan los procedimientos de la estadística inferencial el error puede ser conocido y controlado.(p. 15)

    separador

    .row.justify-content-center
      #t_2_1.titulo-segundo.color-acento-botones
        h2 2.1. Métodos estadísticos y técnicas de muestreo
      p Para comenzar a estudiar sobre los métodos estadísticos es importante conocer que el análisis estadístico permite realizar descripciones respecto a los valores de datos de diverso origen (económicos, políticos, sociales, organizacionales, entre otros). Esta herramienta permite predecir, relacionar y analizar la información aportada por estos datos.
      p.mt-3 #[strong La información permite controlar, optimizar, administrar, examinar, investigar, planificar, predecir o tomar decisiones,] y lograrlo requiere de mecanismos para su desarrollo que la estadística los aporta. La efectividad del proceso de análisis y toma de decisiones depende de la disposición suficiente de datos actuales e históricos y, dependiendo del objetivo de análisis, es posible hacer uso de alguno de los siguientes seis métodos:

    .row.justify-content-center.mt-4
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--roja")
        .row(titulo="Análisis descriptivo").p-4
          .col-lg-7
            p Permite hacer descripciones respecto a un conjunto de datos con el fin de distinguir sus características. Este método aporta el análisis de variables como el número de ventas realizadas, cantidad de clientes nuevos, unidades de producto disponibles en el inventario, entre otros.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/t2-img4.png', alt='Texto que describa la imagen')
        .row(titulo="Análisis exploratorio").p-4
          .col-lg-7
            p Reconoce una comprensión básica de los datos al identificar características sobresalientes, inesperadas o con valores atípicos. Este tipo de análisis permite determinar las sucursales con un número superior de ventas, productos con mayor #[i stock], principales discrepancias entre el producto más vendido y el menos vendido, diferencias en aspectos económicos entre dos poblaciones, entre otros. Este método es un proceso descriptivo, por ende, debe realizarse sin ideas preconcebidas sobre la información que aportan los datos. De este modo, en aras de evitar el procesamiento de datos inapropiados, erróneos o inadvertidos lo más aconsejable es que este análisis exploratorio sea utilizado durante la etapa inicial de todo análisis de datos.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/t2-img5.png', alt='Texto que describa la imagen')
        .row(titulo="Análisis inferencial").p-4
          .col-lg-7
            p Confirma o niega hipótesis planteadas permitiendo establecer conclusiones con cierto nivel de confianza, este tipo de métodos no garantizan certeza absoluta porque conservan algún grado de incertidumbre. Este análisis permite formular hipótesis basadas en conclusiones construidas respecto a un conjunto de datos en un entorno específico, por ejemplo: inferir que los clientes que adquieren determinado producto pertenecen a una familia numerosa (lo que los haría clientes potenciales para productos complementarios). Con el fin de garantizar efectividad en el análisis inferencial los datos deben ser diferentes a los empleados para la formulación de la hipótesis así se eliminan sesgos y se aporta validez a las conclusiones.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/t2-img6.png', alt='Texto que describa la imagen')
        .row(titulo="Análisis predictivo").p-4
          .col-lg-7
            p Identifica relaciones entre las variables en eventos pasados, así realizar proyecciones sobre posibles resultados en ocasiones futuras. Este análisis hace posible determinar la cantidad de producto que se debe tener en inventario por referencia o proyectar las principales necesidades de una población específica para los escenarios futuros; además se preocupa por el valor, no tiene como objetivo comprender el sistema o la relación entre variables, haciendo que el análisis sea funcional para estudiar problemas complejos y de amplio número de variables influyentes o de difícil comprensión.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/t2-img7.png', alt='Texto que describa la imagen')
        .row(titulo="Análisis causal").p-4
          .col-lg-7
            p Este tipo de análisis permite establecer relaciones de causa y efecto, identificar la influencia mutua de variables, predecir y reconocer la causa de este tipo de influencia. Además, este análisis determina aspectos como la afectación de las ventas en los productos de un portafolio respecto al día que aumentan las ventas del producto estrella, pero no las causas de este fenómeno; en otras palabras, el análisis inferencial permite identificar la relación, pero para conocer las causas es necesario implementar un análisis causal.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/t2-img8.png', alt='Texto que describa la imagen')
        .row(titulo="Análisis mecanicista").p-4
          .col-lg-7
            p Predice y comprende la influencia entre diferentes variables, siendo este análisis el más complejo porque determina cómo la alteración de los valores de una de las variables, tiene impacto en las demás. Su complejidad lo hace ser poco utilizado, debido a que requiere amplio conocimiento de los procesos a modelar. Un ejemplo de aplicabilidad de este análisis, es el de conocer si el incremento en la inversión en publicidad y un aumento de la plantilla en el departamento de <i>marketing</i>, influye en el incremento de ventas y cómo esta última, influye en las dos anteriores.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/t2-img9.png', alt='Texto que describa la imagen')                                                                      

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta Técnicas de muestreo
      p Para entender un poco más la disciplina de la estadística se debe conocer acerca del muestreo y sus técnicas. El muestreo es un conjunto de procedimientos para la selección de una determinada población y su subconjunto que se conoce como muestra; con el fin de conocer sobre la población escogida se observa, analiza y generaliza las características encontradas y provenientes de la muestra evaluada.
      p.mt-3 A continuación podrá detallar las diferentes técnicas de muestreo que se pueden utilizar:

    .tarjeta.tarjeta--tiempo.p-4(data-aos="fade-right")
      LineaTiempoC.color-primario(text-small).p-3
        .row.justify-content-center.align-items-start(titulo="Muestreos probabilísticos")
          .col-lg-10
            .row
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img10.png', alt='')        
              .col-lg-7
                p.mt-3 Permiten generalizar los resultados obtenidos de la muestra a toda la población de referencia. Para que una muestra sea probabilística sus elementos deben ser elegidos aleatoriamente sin que el investigador decida a quién incluir o excluir de la muestra.
        .row.justify-content-center.align-items-start(titulo="Muestreo aleatorio simple")
          .col-lg-10
            .row              
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img11.png', alt='')        
              .col-lg-7
                p.mt-3 Consiste en realizar un sorteo para seleccionar aleatoriamente a los individuos que participarán en el proceso de recolección de información.
        .row.justify-content-center.align-items-start(titulo="Muestreo sistemático")
          .col-lg-10
            .row        
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img12.png', alt='')        
              .col-lg-7
                p.mt-3 Dividir la población en listas proporcionales y seleccionar una cantidad determinada de individuos de cada lista, de manera aleatoria, hasta completar la muestra.
        .row.justify-content-center.align-items-start(titulo="Muestreo estratificado")
          .col-lg-10
            .row              
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img13.png', alt='')        
              .col-lg-7
                p.mt-3 Consiste en estratificar la población en grupos, de acuerdo con criterios específicos, formando una relación de manera aleatoria hasta completar el tamaño de muestra.
        .row.justify-content-center.align-items-start(titulo="Muestreo en conglomerado")
          .col-lg-10
            .row          
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img14.png', alt='')        
              .col-lg-7
                p.mt-3 Se aplica cuando el tamaño de la población es muy grande y no es posible elaborar un listado de los individuos que la componen. Este muestreo requiere información estadística que estime su tamaño (ej. Último censo poblacional), información sobre la distribución por grupos poblacionales o zonas geográficas, y después seleccionar, de manera aleatoria, los miembros de la muestra.
        .row.justify-content-center.align-items-start(titulo="Muestreos no probabilísticos")
          .col-lg-10
            .row          
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img15.png', alt='')        
              .col-lg-7
                p.mt-3 En estas muestras no se cumple el requisito de aleatoriedad en la selección de los elementos que la componen. Los resultados no se pueden generalizar de manera probabilística más allá de los casos observados. (Bologna, E., 2018). 
                p Este muestreo tiene definida una intencionalidad con los miembros de la muestra seleccionados, así el investigador tiene la posibilidad de establecer los criterios que deben cumplir los participantes.
        .row.justify-content-center.align-items-start(titulo="Muestreo por conveniencia")
          .col-lg-10
            .row              
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img16.png', alt='')        
              .col-lg-7
                p.mt-3 En este muestreo el investigador aplica el principio de oportunidad y selecciona a los miembros de su muestra de acuerdo con la facilidad que tenga para acceder a ellos.
        .row.justify-content-center.align-items-start(titulo="Muestreo por cuotas")
          .col-lg-10
            .row              
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img17.png', alt='')        
              .col-lg-7
                p.mt-3 A través de este tipo de muestreo el investigador establece criterios equitativos y proporcionales para la selección de los individuos que serán seleccionados para ser parte de la muestra.
        .row.justify-content-center.align-items-start(titulo="Muestreo bola de nieve")
          .col-lg-10
            .row              
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img18.png', alt='')        
              .col-lg-7
                p.mt-3 Este muestreo permite al investigador solicitar apoyo de los participantes para identificar a los miembros de la muestra, y se da cuando la selección de la muestra debe cumplir con unas características tan específicas que no son rastreadas fácilmente.
        .row.justify-content-center.align-items-start(titulo="Muestreo discrecional")
          .col-lg-10
            .row              
              .col-lg-5
                img(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/t2-img19.png', alt='')        
              .col-lg-7
                p.mt-3 Esta técnica permite la conformación de un grupo determinado para participar como miembros de la muestra, esta obedece a características específicas y definidas por el investigador, él será quien se encargue de seleccionar con discreción las personas que considere más adecuadas para ser incluidas en la muestra.
    
    separador

    .row.justify-content-center
      #t_2_2.titulo-segundo.color-acento-botones
        h2 2.2. Medidas de dispersión y tipos de variables
      
      p Luego de conocer las diferentes técnicas de muestreo, entraremos a analizar otro aspecto importante: #[strong las medidas de dispersión.]
    
    
    .row.justify-content-center
      .col-lg-10.mb-5.mb-lg-0
        hr.color-linea.my-5.mb-0
        .bloque-texto-b.color-primario2.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Ramos, F. & Guerra, R (2019), definen las medidas de dispersión como “un rasgo principal de los datos es su dispersión o amplitud, que se refiere a su variabilidad, a la evaluación de cuán separados o extendidos están estos datos, o bien cuánto difieren unos de otros”. #[em (Introducción a los métodos estadísticos, p. 45)]. Otro concepto clave en las medidas de dispersión es ‘la variación’ que es el grado en que los datos numéricos tienden a extenderse alrededor de un valor, generalmente el valor medio. (Ramos, F. & Guerra, R (2019).
            br
            br
            .row.justify-content-end
              p.text-bold.texto-alineado3 Ramos, F. & Guerra, R (2019)
            i.fas.fa-quote-right

    .row.justify-content-around.align-items-center.mt-3
      .col-11
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/t2-img27.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Variación y medidas de dispersión.
                  p.text-small Para ampliar más información sobre la variación revise el documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo1-Variacion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-around.align-items-center.mt-3
      p Para tener claridad en las medidas de dispersión, a continuación se mostrarán tres de las más utilizadas:                           

    .row
      .col-md.tarjeta.color-primario3.py-3
        .row.justify-content-center
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/t2-img20.png', alt='Texto que describa la imagen')
          
        h3.mt-2.text-center Rango o recorrido (Amplitud)
        p.text-center Es la distancia entre los valores máximo y mínimo, y mide la dispersión de la totalidad de los datos.
      .col-md.tarjeta.color-primario3.py-3
        .row.justify-content-center
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/t2-img21.png', alt='Texto que describa la imagen')
          
        h3.mt-2.text-center La varianza (S)
        p.text-center Media de las desviaciones cuadráticas entre cada valor de la variable y la media aritmética de la distribución.
      .col-md.tarjeta.color-primario3.py-3
        .row.justify-content-center
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/t2-img22.png', alt='Texto que describa la imagen')
          
        h3.mt-2.text-center Desviación típica
        p.text-center Cuando se utiliza la varianza como medida de dispersión surge el problema de tener que trabajar con distintas dimensiones, por este motivo se define la desviación típica como la raíz cuadrada de la varianza. (Ramos, F. & Guerra, R., 2019).

    .row.justify-content-center.mt-5
      ul.vineta-titulos
        li
          h2.mb-0.h2-vineta Variables cuantitativas y cualitativas
      p Considerando que la naturaleza de las observaciones es de gran importancia a la hora de elegir el método estadístico más apropiado para abordar su análisis, es fundamental tener claro cómo se clasifican las variables. Haciendo énfasis en lo anterior, a continuación conocerá los tipos de variables y sus características:

      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Variables cuantitativas o numéricas").tabs-c.fondo
          .row.p-4
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/t2-img23.png', alt='Texto que describa la imagen')          
            .col-md-6.mb-4.mb-md-0.p-3
              p Son las variables que pueden medirse, cuantificarse o expresarse numéricamente, y pueden clasificarse en dos tipos:
              p.mt-3 #[strong - Variables cuantitativas discretas] no admiten todos los valores intermedios en un rango, pues suelen tomar solamente valores enteros (número de hijos, etc.). Los datos que se obtienen para variables cuantitativas discretas se cuentan.
              p.mt-3 #[strong - Variables cuantitativas continuas] admiten tomar cualquier valor dentro de un intervalo numérico determinado (longitud, peso, etc.). Los datos que se obtienen para variables cuantitativas continuas se miden a través de una escala de intervalo o de una escala proporcional (de razón).
        
        .py-3.py-md-4(titulo="Variables cualitativas").tabs-c.fondo
          .row.p-4
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/t2-img24.png', alt='Texto que describa la imagen')          
            .col-md-6.mb-4.mb-md-0.p-3
              p Representan una cualidad o atributo que clasifica a cada caso en una de varias categorías. Sus valores no se asocian naturalmente a un número, sino a una la situación más sencilla que clasifica cada caso en uno de dos grupos (hombre/mujer). 
              p.mt-3 Son datos dicotómicos o binarios, en muchas ocasiones este tipo de clasificación no es suficiente y se requiere de un mayor número de categorías para su clasificación como nacionalidad, profesión, entre otros.
              p.mt-3 En el proceso de observación de estas variables se pueden utilizar dos escalas nominales u ordinarias, además estas pueden codificarse a través de números para facilitar su procesamiento, pero sin olvidar qué tipo de variables son.
              p.mt-3 Una de las escalas más utilizadas en las variables cualitativas es ‘la escala de Likert’, en ella se establece una codificación ordenada y frecuentemente del 1 al 5 o también se utiliza la escala de Likert modificada con la de ‘la escala Thurstone’ de 10 puntos. La selección de la escala es basada en lo que el investigador desee lograr y las comparaciones que quiera realizar en la propia investigación o con otros trabajos desarrollados anteriormente. (Ramos, F. & Guerra, R, 2019, p. 11).

    separador

    .row.justify-content-center
      #t_2_3.titulo-segundo.color-acento-botones
        h2 2.3. Estructura de datos
    
    p La naturaleza de los datos, su origen y utilidad son de gran diversidad, por ello se han definido diferentes categorías o escalas de medición que se adaptan a las particularidades de los mismos, al requerimiento de organización y al análisis de quien dispone de ellos. Con el fin de comprender las características propias de la estructura de datos es importante explorar las diferentes escalas de medición que se disponen a nivel estadístico para tal fin, las cuales se presentan a continuación:

    .row.justify-content-around.aling-items-center.mt-4
      .col-lg-9
        TabsC.color-acento-contenido
          .tarjeta.p-4.mb-3(style="background-color:#ffebf1" titulo="Escala nominal")
            .row
              p Las observaciones de un carácter nominal se pueden clasificar en varias categorías, excluyentes entre sí, entre las que no es posible establecer ninguna relación de orden u operar matemáticamente. En este tipo de escala se consideran los atributos categóricos como el sexo, estado civil, tipo de contrato laboral, lugar de nacimiento, sector de actividad económica, entre otros.
          .tarjeta.p-4.mb-3(style="background-color:#ffebf1" titulo="Escala ordinal")
            .row
              p Las observaciones en escala ordinal se pueden clasificar en varias categorías, excluyentes entre sí, en ellas es posible establecer alguna relación de orden, pero no operar matemáticamente. Además, estas categorías se pueden ordenar, pero no cuantificar la diferencia entre ellas. En este tipo de escala se encuentran atributos ordinales como el nivel de ingresos, nivel de estudios, grado de satisfacción, entre otros.
          .tarjeta.p-4.mb-3(style="background-color:#ffebf1" titulo="Escala de intervalo")
            .row
              p Las observaciones en escala de intervalo se dan cuando existe una unidad de medida que permite cuantificar la distancia existente entre dos observaciones, siendo el cero arbitrario.
              p.mt-2 En este tipo de escala se consideran algunas variables (caracteres cuantitativos) como la temperatura en grados Celsius o en grados Fahrenheit, fechas, entre otros.

          .tarjeta.p-4.mb-3(style="background-color:#ffebf1" titulo="Escala de razón (proporción o cociente)")
            .row
              p Las observaciones son de escala de razón cuando existe una unidad de medida que permite cuantificar la distancia existente entre dos observaciones y existe un cero absoluto. En este tipo de escala se encuentra la mayoría de las variables (caracteres cuantitativos) como el peso, salario, nivel de inventario, la edad, entre otros.


      .col-lg-3(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/t2-img25.png', alt='Texto que describa la imagen').m-auto
    
    p.mt-3 Así como en la estructura de datos las escalas de medición permiten organizar los datos en orden jerárquico, es importante conocer los diferentes tipos de estructuración de datos, en los cuales se encuentran las tablas de frecuencia, los gráficos estadísticos y los gráficos para datos categóricos. A continuación, se dará una breve explicación de cada uno de ellos:

    .row.justify-content-around.aling-items-center.mt-2
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/t2-img26.png', alt='Texto que describa la imagen').m-auto

      .col-lg-7    
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").p-4
          .row(titulo="Tablas de frecuencia").p-4
            p Cuando la muestra presenta un alto número de datos es necesario organizarlos en una tabla de frecuencia (distribución de frecuencias). Este tipo de tabla es un método para presentar la información resumida por distintas categorías, valores o intervalos de carácter x y, por las siguientes frecuencias: absoluta (f), relativa (h), absoluta acumulada (H) y relativa acumulada (F). Para conocer más acerca de los tipos de frecuencia puede revisar el documento, Tipos de frecuencia.
            a.anexo.mb-0(:href="obtenerLink('/downloads/Anexo2-Frecuencia.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Tipos de frecuencia.
          .row(titulo="Gráficos estadísticos").p-4
            p Son recursos visuales que permiten comunicar la información, se considera un instrumento estadístico para analizar los datos en forma eficiente y desde diferentes niveles de lectura.

          .row(titulo="Gráficos para datos categóricos").p-4
            p De acuerdo con el tipo de frecuencia se pueden encontrar gráficos que ayudan a visualizar y a categorizar los datos. En este tipo de esquemas se encuentran los que son de tipo barra, torta, arañas, barras acumuladas, pictogramas, anillos, entre otros.

    .row.justify-content-around.align-items-center
      .col-9
        .cajon.cajon.color-secundario.p-4.mt-3
          p Para construir una tabla de frecuencia se tienen varias herramientas y una de las más usadas es el programa Excel. Este programa permite construir tablas que facilita el conteo y proceso de construcción; ya que permite crear en otras celdas la frecuencia deseada con el uso de fórmulas, además replica la información de forma rápida obteniendo resultados exactos y sencillos.

    .row.justify-content-around.align-items-center.mt-5
      p A continuación podrá estudiar los tipos de gráficos para datos categóricos propuestos por Castellanos, M. & Obando, J. (2021),  los cuales serán citados textualmente, (p. 13 – 16):

    .row.justify-content-around.align-items-center
      .col-lg-6.mt-3
        .tarjeta.tarjeta-slide.arriba.color-primario4(@mouseover="indicadorTarjetaSlide = false").tarjeta-Hoover1
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5
              p Permite representar los elementos de la variable de estudio con los valores obtenidos en la frecuencia absoluta o relativa. En el eje X están las variables y en el eje Y el valor de las frecuencias. 
            .tarjeta-slide__img.color-primario4(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-img28.png')})`}")

      .col-lg-6.mt-3
        .tarjeta.tarjeta-slide.arriba.color-primario4(@mouseover="indicadorTarjetaSlide = false").tarjeta-Hoover1
          .tarjeta-slide__contenedor
            .tarjeta-slide__img.color-primario4(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-img29.png')})`}")
            .tarjeta-slide__contenido.p-5
              p Denominado también “tartas” #[i (pie)], consiste en un círculo dividido en tantas partes o porciones como valores de frecuencia relativa existan, a cada valor de frecuencias relativas le corresponde en forma proporcional un arco de círculo.
              p.mt-2 La lectura de estos gráficos es directa, se lo hace teniendo en cuenta el valor del porcentaje propuesto en cada unidad de variable. Una interpretación más general estará amarrada al objetivo de la investigación que generó la pregunta.

    .row.justify-content-around.align-items-center
      .col-lg-6.mt-3
        .tarjeta.tarjeta-slide.abajo.color-primario4(@mouseover="indicadorTarjetaSlide = false").tarjeta-Hoover1
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5
              p Una gráfica de radar, también conocida como un “diagrama de araña”, es una herramienta muy útil para mostrar visualmente los valores de una frecuencia relativa o absoluta. Proporciona la misma información de un diagrama de barras o de una torta. Es una excelente alternativa para representar la información de los datos propuestos en las frecuencias relativas, brinda la misma información, pero desde otra visualización.
            .tarjeta-slide__img.color-primario4(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-img30.png')})`}")

      .col-lg-6.mt-3
        .tarjeta.tarjeta-slide.abajo.color-primario4(@mouseover="indicadorTarjetaSlide = false").tarjeta-Hoover1
          .tarjeta-slide__contenedor
            .tarjeta-slide__img.color-primario4(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-img31.png')})`}")
            .tarjeta-slide__contenido.p-5
              p Otra de las formas de representar las frecuencias relativas en variables categorías lo constituyen los anillos o los sectores. Son pequeños sectores en forma de un aro o anillo, divido en forma proporcional de acuerdo con el valor de dicha frecuencia.
              p.mt-2 Los diagramas para las frecuencias absolutas acumuladas, denominados “diagramas integrales”, no tienen sentido para las variables categóricas, se observarán en el contexto de variables numéricas, enteras y continuas.

</template>

<script>
export default {
  name: 'Tema2',
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
