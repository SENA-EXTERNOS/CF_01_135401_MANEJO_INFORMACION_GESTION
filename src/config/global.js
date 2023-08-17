export default {
  global: {
    componenteFormativo: 'Recolección de información y bases de datos',
    descripcionCurso:
      'La recolección de datos ha cobrado gran importancia en la actualidad, gracias a su utilidad para anticipar tendencias, a través del análisis de la información obtenida por diferentes fuentes o métodos. Se hace necesario entonces, comprender lo relacionado con este proceso, su vinculación con las bases de datos y su contribución a los entornos organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La recolección de datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Métodos estadísticos y técnicas de muestreo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medidas de dispersión y tipos de variables',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estructura de datos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '¿Qué es una base de datos?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estructura y elementos de las bases de datos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'La tabulación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas de trabajo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La recolección de datos',
      referencia:
        'Habiaspensado. (2020). <i>¿Qué es el MUESTREO y TIPOS DE MUESTREO?</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3LFDVSuaOkw',
    },
    {
      tema: 'La estadística',
      referencia:
        'Matemóvil. (2019). <i>Medidas de Dispersión o Variabilidad – Introducción </i>[video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Efg6G8vlVUA',
    },
    {
      tema: 'La estadística',
      referencia:
        'Daniel Carreón. (2021). <i>Tabla de Frecuencias </i>[video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JtB2w0QLRZ4',
    },
    {
      tema: 'Herramientas de trabajo',
      referencia:
        'GDX Group. (2020). <i>Que es un Flujo de Trabajo y porque es importante en un Gestor Documental</i> [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Bph3b1t7ByU',
    },
  ],
  glosario: [
    {
      termino: 'Análisis descriptivo',
      significado:
        'proceso que permite hacer una descripción respecto a un conjunto de datos, a partir de su comportamiento y características.',
    },
    {
      termino: 'Base de datos',
      significado:
        'herramienta que permite almacenar gran cantidad de datos, relacionados y estructurados, y pueden ser consultados rápidamente de acuerdo con las características selectivas que se deseen.',
    },
    {
      termino: 'Datos',
      significado:
        'información concreta sobre hechos, elementos, etc., que permiten ser estudiados, analizados o conocidos.',
    },
    {
      termino: 'Documento',
      significado:
        'es un elemento material o digital que alberga información importante para las organizaciones, en el proceso de toma de decisiones.',
    },
    {
      termino: 'Encuesta',
      significado:
        'formulario estructurado que permite indagar a personas de interés, de la organización, sobre temas puntuales.',
    },
    {
      termino: 'Estadística',
      significado:
        'ciencia que utiliza conjuntos de datos numéricos para obtener, a partir de ellos, inferencias basadas en el cálculo de probabilidades.',
    },
    {
      termino: 'Matriz',
      significado:
        'cuadro que permite ordenar, almacenar y visualizar datos para ser graficados y analizados.',
    },
    {
      termino: 'Observación',
      significado:
        'técnica de recolección de datos, que permite reconocer el comportamiento del objeto de estudio, de manera directa.',
    },
    {
      termino: 'Procesamiento',
      significado:
        'manipular un conjunto de datos a organización, depuración y análisis ejecutando herramientas estadísticas.',
    },
    {
      termino: 'Tabulación',
      significado:
        'expresión de valores, magnitudes, conceptos, etc., por medio de tablas o cuadros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bologna, E. (2018). <i>Métodos estadísticos de investigación.</i> Editorial Brujas.',
    },
    {
      referencia:
        'Campos, G. & Lule, N. (2012). <i>La observación, un método para el estudio de la realidad.</i> Revista Xihmai VII.',
    },
    {
      referencia:
        'Castellanos, M. & Obando, J. (2021). <i>Gráficos estadísticos: guía práctica para estadística descriptiva.</i> Ediciones Universidad Cooperativa de Colombia. ',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/36565/3/2021_GP_Graficos%20estadisticos_VF.pdf',
    },
    {
      referencia:
        'Díaz, L., Torruco U., Martínez, M. & Varela, M. (2013). <i>Metodología de investigación en educación médica: La entrevista, recurso flexible y dinámico. </i>Investigación en Educación Médica.',
      link: 'https://www.redalyc.org/pdf/3497/349733228009.pdf',
    },
    {
      referencia:
        'Dunstan, J., Maas, A. & Tobar, F. (2022). <i>Una mirada a la era de los datos.</i> Editorial Universitaria de Chile.',
    },
    {
      referencia:
        'Fernández, L. (2007)<i> ¿Cómo se elabora un cuestionario? </i>Butlletí LaRecerca.',
      link:
        'https://www.ub.edu/idp/web/sites/default/files/fitxes/ficha8-cast.pdf',
    },
    {
      referencia:
        'Gómez, I., Gualo, F., Merino, J., Muñoz-reja, I., Plattini M. & Rivas, B. (2018). Calidad de Datos. RA-MA.',
    },
    {
      referencia: 'Guillermo, P. (s.f.).<i> Noción y estructura del dato. </i>',
      link:
        'https://dokumen.tips/documents/nocion-y-estructura-del-dato-guillermo-pablo-abritta.html?page=35',
    },
    {
      referencia:
        'Hamui, A. & Varela, M. (2013). <i>La técnica de grupos focales Investigación en Educación Médica: La técnica de grupos focales.</i> Investigación en Educación Médica.',
      link: 'https://www.scielo.org.mx/pdf/iem/v2n5/v2n5a9.pdf',
    },
    {
      referencia:
        'Harari, Y. (2016). <i>Homo Deus. Breve historia del mañana.</i> Debate.',
      link: 'http://www.pratec.org/wpress/pdfs-pratec/Homo-Deus.pdf',
    },
    {
      referencia:
        'Hernández, Z. (2012). <i>Métodos de análisis de datos: apuntes.</i> Universidad de La Rioja.',
      link:
        'https://www.unirioja.es/cu/zehernan/docencia/MAD_710/Lib489791.pdf',
    },
    {
      referencia:
        'Peña, D. (2015). <i>Fundamentos de estadística.</i> Alianza.',
    },
    {
      referencia:
        'Pulido, E., Escobar, Ó. & Núñez, J. (2019). <i>Base de datos.</i> Patria Educación.',
    },
    {
      referencia:
        'Ramos, F. & Guerra, R. (2019). <i>Introducción a los métodos estadísticos. </i>Editorial Universitaria.',
    },
    {
      referencia:
        'Universidad Militar Nueva Granada. (s.f.). <i>Sistemas de Work Flow. </i>',
      link:
        'http://virtual.umng.edu.co/distancia/ecosistema/ovas/ingenieria_industrial/sistemas_de_informacion_industrial/unidad_4/DM.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
