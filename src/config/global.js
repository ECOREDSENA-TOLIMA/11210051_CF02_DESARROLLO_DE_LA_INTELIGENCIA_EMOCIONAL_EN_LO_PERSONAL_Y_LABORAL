export default {
  global: {
    componenteFormativo: 'Desarrollo de la inteligencia emocional y madurez',
    descripcionCurso:
      'Este componente formativo proporciona una base sólida para que las personas gestionen sus emociones y relaciones interpersonales, logrando así un equilibrio emocional. A través de temas como el autocontrol, la empatía, el trabajo en equipo y la resolución de conflictos, se profundiza en las competencias necesarias para el crecimiento emocional y la autorrealización. Esta unidad ofrece herramientas clave para desarrollar un autoconcepto saludable y alcanzar una madurez emocional sólida.',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Educación de la inteligencia emocional',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Autocontrol y regulación emocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Modelo de proceso de regulación emocional según Gross y Thompson',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Afecto, emociones y estados de ánimo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Empatía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Empatía como cognición y emoción',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Trabajo en equipo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Propiedades de los equipos de trabajo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Factores que determinan que los equipos de trabajo sean exitosos',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Manejo de conflictos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos de conflictos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas de resolución de conflictos',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Relaciones interpersonales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Autoestima',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Tipos de autoestima',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Pilares de la autoestima',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Elementos de la autoestima ',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Crecimiento emocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Competencias y dominios de la inteligencia emocional',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Estándares de aprendizaje social y emocional ',
            hash: 't_9_2',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Autorrealización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Autorrealización como motivación y necesidad',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Autorrealización como completitud de vida',
            hash: 't_10_2',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Autoconcepto ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Tipos de autoconcepto ',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Autoconcepto y desarrollo personal',
            hash: 't_11_2',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Madurez emocional',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '4. Empatía',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2020). Empatía [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nKDtHPPG9gg',
    },
    {
      tema: '6. Manejo de conflictos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Conflictos en la comunicación y sus soluciones [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=A_qgEONAKhc',
    },
  ],
  glosario: [
    {
      termino: 'Afecto',
      significado:
        'experiencia emocional básica, como alegría, tristeza, miedo o ira.',
    },
    {
      termino: 'Autoconcepto',
      significado:
        'imagen mental que una persona tiene de sí misma, incluyendo sus cualidades, habilidades y valores.',
    },
    {
      termino: 'Autocontrol',
      significado:
        'capacidad de regular nuestras emociones, pensamientos y comportamientos.',
    },
    {
      termino: 'Autoestima',
      significado: 'valoración que tenemos de nosotros mismos.',
    },
    {
      termino: 'Autorrealización',
      significado: 'tendencia innata a alcanzar nuestro máximo potencial.',
    },
    {
      termino: 'Crecimiento emocional',
      significado:
        'proceso continuo de desarrollo de nuestras habilidades emocionales.',
    },
    {
      termino: 'Empatía',
      significado:
        'capacidad de comprender y compartir los sentimientos de otra persona.',
    },
    {
      termino: 'Manejo de conflictos',
      significado:
        'habilidad para resolver desacuerdos de manera constructiva.',
    },
    {
      termino: 'Madurez emocional',
      significado:
        'capacidad de gestionar nuestras emociones de manera saludable y de establecer relaciones interpersonales satisfactorias.',
    },
    {
      termino: 'Relaciones interpersonales',
      significado: 'conexiones y vínculos que establecemos con otras personas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernal, A. (2002). El concepto de “Autorrealización” como identidad personal: una revisión crítica. Cuestiones pedagógicas: Revista de ciencias de la educación, 16, 11-24.',
      link:
        'https://idus.us.es/xmlui/bitstream/handle/11441/51291/art_1.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Bisquerra, R., & Pérez, N. (2007). Las competencias emocionales. Educación XXI, 10, 61-82.',
      link: 'https://www.redalyc.org/articulo.oa?id=70601005',
    },
    {
      referencia:
        'Branden, N. (1994). Los seis pilares de la autoestima. Bantam.',
    },
    {
      referencia:
        'Goñi, E., & Fernández, A. (2007). Los dominios social y personal del autoconcepto. Revista de Psicodidáctica, 12(2), 179-194.',
      link: 'http://www.redalyc.org/pdf/175/17512202.pdf  ',
    },
    {
      referencia:
        'Goleman, D. (1995). Emotional Intelligence: Why It Can Matter More Than IQ. Bantam Books.',
    },
    {
      referencia:
        'Goleman, D. (1995). Inteligencia emocional. Editorial Kairós.',
    },
    {
      referencia:
        'Gross, J. J., & Thompson, R. A. (2007). Regulación emocional: Fundamentos conceptuales. En J. J. Gross (Ed.), Manual de regulación emocional (pp. 3-24). The Guilford Press.',
    },
    {
      referencia:
        'Maslow, A. H. (1943). A Theory of Human Motivation. Psychological Review, 50(4), 370-396.',
    },
    {
      referencia:
        'Maslow, A. H. (1943). La Pirámide de Maslow: Los pasos para alcanzar la autorrealización.',
      link:
        'https://www.pdcahome.com/9546/la-piramide-de-maslow-los-pasos-para-alcanzar-la-autorrealizacion/',
    },
    {
      referencia:
        'Maslow, A. H. (1954). Motivación y personalidad. Harper & Row.',
    },
    {
      referencia:
        'Maslow, A. H. (1971). The Farther Reaches of Human Nature. Viking Press.',
    },
    {
      referencia:
        'Nunes, M., Rigotto, D., Ferrari, H., & Marín, F. (2012). Soporte social, familiar y autoconcepto: relación entre los constructos. Psicología desde el Caribe, 29(1), 1-18.',
      link: 'http://www.redalyc.org/articulo.oa?id=21323171002',
    },
    {
      referencia:
        'Rosenberg, M. (1965). La sociedad y la autoimagen del adolescente. Princeton University Press.',
    },
    {
      referencia:
        'Silva, I., & Mejía, O. (2015). Autoestima, adolescencia y pedagogía. Revista Electrónica Educare, 19(1), 241-256.',
      link: 'http://www.redalyc.org/articulo.oa?id=194132805013',
    },
    {
      referencia:
        'Tafarodi, R. W., & Swann, W. B., Jr. (1995). Autoestima implícita. Journal of Personality and Social Psychology, 68(2), 368-380.',
    },
    {
      referencia:
        'Wilhelm, K., Martin, G., & Miranda, C. (2012). Autoestima profesional: competencia mediadora en el marco de la evaluación docente. Revista Latinoamericana de Ciencias Sociales, Niñez y Juventud, 10(1), 339-350.',
      link: 'http://www.redalyc.org/articulo.oa?id=77323982020',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Experta temática',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Asesor pedagógico',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
