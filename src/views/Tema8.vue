<template lang="pug">
.curso-main-container.pb-3.tema8
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Autoestima 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.col-12(data-aos="zoom-out")
        .row.justify-content-center
          .col-lg-6.col-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema8/img-01.svg', alt='Imagen decorativa')
          .col-lg-6.col-12.mb-3
            .cajon.color-primario.p-4.mb-4(style="background-color: #EDD8F5")
              p La autoestima, un constructo psicológico multifacético, ha sido objeto de numerosas investigaciones. Rosenberg (1965) desarrolló una de las primeras escalas para medir la autoestima global. Sin embargo, investigaciones posteriores, como las de Tafarodi y Swann (1995), han puesto de manifiesto la importancia de considerar dimensiones específicas de la autoestima, como la autoestima explícita e implícita. Comprender estos diferentes tipos de autoestima es esencial para una evaluación más precisa de este complejo constructo.
    
    p.mb-5(data-aos="zoom-in") La autoestima es la valoración que una persona tiene de sí misma, es decir, cómo se percibe, qué piensa de sus capacidades y cómo se siente respecto a su vida. Es un concepto clave en la psicología y tiene un impacto significativo en nuestro bienestar emocional y en nuestra manera de relacionarnos con los demás.

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_8_1 8.1 Tipos de autoestima 

    p.mb-5(data-aos="zoom-in") Según Branden (1994), existen varios tipos de autoestima que pueden clasificarse según su nivel y estabilidad: 

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Autoestima alta y estable")
        h4 Autoestima alta y estable

        .row
          .col-xl-8.mb-4
            p Las personas con este tipo de autoestima tienen una valoración positiva de sí mismas que no fluctúa fácilmente con las circunstancias externas. 
          .col-xl-3
            figure
              img(src='@/assets/curso/temas/tema8/icono-01.svg', alt='Texto que describa la imagen')
              
      .tarjeta.color-acento-botones--borde.p-4(titulo="Autoestima alta e inestable")
        h4 Autoestima alta e inestable

        .row
          .col-xl-8.mb-4
            p Aunque tienen una alta autoestima, esta puede variar significativamente dependiendo de las situaciones y el <i>feedback</i> externo.
          .col-xl-3
            figure
              img(src='@/assets/curso/temas/tema8/icono-02.svg', alt='Texto que describa la imagen')

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Autoestima baja y estable")
        h4 Autoestima baja y estable
        
        .row
          .col-xl-8.mb-4
            p Estas personas tienden a tener una valoración negativa constante de sí mismas, independientemente de las circunstancias. 
          .col-xl-3
            figure
              img(src='@/assets/curso/temas/tema8/icono-03.svg', alt='Texto que describa la imagen')

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Autoestima baja e inestable")
        h4 Autoestima baja e inestable
        
        .row
          .col-xl-8.mb-4
            p La autoestima de estas personas es baja y fluctúa con facilidad, lo que puede llevar a una gran sensibilidad a las críticas y a la aprobación externa.
          .col-xl-3
            figure
              img(src='@/assets/curso/temas/tema8/icono-04.svg', alt='Texto que describa la imagen')

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Autoestima inflada")
        h4 Autoestima inflada
        
        .row
          .col-xl-8.mb-4
            p Las personas con este tipo de autoestima tienen una percepción exagerada de sus capacidades y tienden a menospreciar a los demás. 
          .col-xl-3
            figure
              img(src='@/assets/curso/temas/tema8/icono-05.svg', alt='Texto que describa la imagen')

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      
    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_8_2 8.2 Pilares de la autoestima 

    p.mb-5(data-aos="zoom-in") Según Branden (1994), existen seis pilares fundamentales de la autoestima, los cuales pueden ser aplicados para que las personas tengan una vida armoniosa:

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        ImagenInfografica.color-acento-botones.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema8/img-02-01.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="17.2%" y="19%" numero="1")(style="background-color:#FFFFFF")
            p(style="color:#000") Ser consiente de las acciones , pensamientos y sentimientos en el presente.

          .tarjeta.color-acento-botones.p-3(x="14.5%" y="48%" numero="2")(style="background-color:#FFFFFF")
            p(style="color:#000") Aceptar las fortalezas y debilidades  sin juzgarse severamente.

          .tarjeta.color-acento-botones.p-3(x="17.2%" y="74%" numero="3")(style="background-color:#FFFFFF")
            p(style="color:#000") Asumir la responsabilidad de las acciones y decisiones. 

          .tarjeta.color-acento-botones.p-3(x="84%" y="19%" numero="4")(style="background-color:#FFFFFF")
            p(style="color:#000") Defender los derechos y necesidades  de manera asertiva.

          .tarjeta.color-acento-botones.p-3(x="87%" y="48%" numero="5")(style="background-color:#FFFFFF")
            p(style="color:#000") Tener objetivos claros y trabajar hacia ellos.

          .tarjeta.color-acento-botones.p-3(x="84.2%" y="73%" numero="6")(style="background-color:#FFFFFF")
            p(style="color:#000") Actuar de acuerdo con los valores y principios personales.

        .row.mt-5.mb-3.justify-content-center
          .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema8/img-02-02.svg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="zoom-in") Además, para desarrollar una autoestima sana y duradera, es fundamental trabajar en los siguientes aspectos:

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema8/icono-06.svg' alt='AvatarTop')
        h2.text-center Autoconocimiento
        p.text-center Explorar nuestros pensamientos, emociones, valores y motivaciones. Practicar la introspección y el <i>mindfulness</i> puede ser de gran ayuda.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema8/icono-07.svg' alt='AvatarTop')
        h2.text-center Autoaceptación
        p.text-center Aceptar nuestras fortalezas y debilidades sin juzgarnos. Reconocer que somos seres humanos imperfectos y que todos cometemos errores.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema8/icono-08.svg' alt='AvatarTop')
        h2.text-center Autoconfianza
        p.text-center Creer en nuestras capacidades y en nuestro potencial. Celebrar nuestros logros y aprender de nuestros fracasos.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema8/icono-09.svg' alt='AvatarTop')
        h2.text-center Autoestima emocional
        p.text-center Desarrollar habilidades para gestionar nuestras emociones de manera saludable. Aprender a identificar y expresar nuestras emociones de forma constructiva.

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_8_3 8.3 Elementos de la autoestima  

    p.mb-5(data-aos="zoom-in") Según Rosenberg (1965), existen unos elementos clave que conforman la autoestima: 

    .row.justify-content-center.align-items-center.mb-2
      .col-10(data-aos="fade-down-right")
        ImagenInfografica.color-acento-botones.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema8/img-03-01.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="74%" y="29%" numero="1")(style="background-color:#FFFFFF")
            p(style="color:#000") La percepción y creencias que una persona tiene sobre si misma.

          .tarjeta.color-acento-botones.p-3(x="79.5%" y="45%" numero="2")(style="background-color:#FFFFFF")
            p(style="color:#000") Cómo se ve físicamente  y cómo se siente con su apariencia. 

          .tarjeta.color-acento-botones.p-3(x="84%" y="60%" numero="3")(style="background-color:#FFFFFF")
            p(style="color:#000") La seguridad  en las habilidades y capacidades propias 

          .tarjeta.color-acento-botones.p-3(x="87.5%" y="76%" numero="4")(style="background-color:#FFFFFF")
            p(style="color:#000") La capacidad de valorarse y apreciarse a si mismo.

        .row.mt-5.mb-3.justify-content-center
          .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema8/img-03-02.svg', alt='Texto que describa la imagen')

    p(data-aos="zoom-in") Estos cuatro componentes son interdependientes y se influyen mutuamente. Un autoconcepto positivo puede mejorar la autoimagen, lo que a su vez refuerza la autoconfianza y fomenta una autovaloración saludable. Cuando estos elementos están equilibrados, una persona es más capaz de mantener una autoestima robusta y estable. 
    p.mb-5(data-aos="zoom-in") Para comprender plenamente cómo fortalecer la autoestima, es esencial reconocer que esta se compone de varios elementos interconectados que influyen en nuestra percepción y valoración personal. La autoestima no solo afecta la manera en que nos relacionamos con nosotros mismos, sino también cómo interactuamos con los demás y afrontamos los desafíos de la vida. A continuación, se presentan algunas estrategias clave para mejorar la autoestima y fomentar un bienestar emocional más equilibrado:

    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo1")(data-aos="zoom-in-up")


</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    datosSlyderEjemplo1: [
      {
        titulo: 'Autoafirmaciones positivas',
        texto:
          'Repetir afirmaciones positivas sobre sí mismo puede ayudar a una persona a cambiar su forma de pensar y mejorar su autoestima.',
        imagen: require('@/assets/curso/temas/tema8/img-06.png'),
      },
      {
        titulo: 'Establecimiento de metas realistas',
        texto:
          'Fijar metas alcanzables y celebrar los logros incrementa la confianza y motiva a continuar avanzando.',
        imagen: require('@/assets/curso/temas/tema8/img-07.png'),
      },
      {
        titulo: 'Cuidado personal',
        texto:
          'Dedicar tiempo a actividades que relajen y generen bienestar, como el ejercicio, la meditación o el contacto con la naturaleza, es esencial para mantener una buena autoestima.',
        imagen: require('@/assets/curso/temas/tema8/img-08.png'),
      },
      {
        titulo: 'Búsqueda de apoyo social',
        texto:
          'Rodearse de personas positivas y que brinden apoyo puede tener un impacto muy beneficioso en la autoestima de un individuo.',
        imagen: require('@/assets/curso/temas/tema8/img-09.png'),
      },
      {
        titulo: 'Terapia',
        texto:
          'Consultar con un terapeuta puede ser clave para identificar y superar las causas de una baja autoestima, así como para desarrollar herramientas que permitan mejorarla.',
        imagen: require('@/assets/curso/temas/tema8/img-010.png'),
      },
    ],
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
