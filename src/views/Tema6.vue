<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Manejo de conflictos 

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema6/img-01.png', alt='')

    p.mb-5(data-aos="zoom-in") El manejo de conflictos es una habilidad fundamental en cualquier entorno donde interactúen personas, ya sea en el ámbito personal, profesional o educativo. Los conflictos son inevitables, pero cuando se gestionan de manera adecuada, pueden convertirse en oportunidades para el crecimiento y el fortalecimiento de las relaciones. La capacidad para resolver conflictos de manera constructiva es esencial para mantener la cohesión y la efectividad en cualquier grupo o equipo. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_6_1 6.1 Tipos de conflictos 

    p.mb-5(data-aos="zoom-in") Los conflictos pueden clasificarse de varias maneras, dependiendo del contexto y la naturaleza del desacuerdo. A continuación, se describen algunos de los tipos más comunes:  

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Conflictos interpersonales" :icono="require('@/assets/curso/temas/tema6/icono-1.svg')")
        .row.p-4
          .col-md-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema6/img-02.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.mb-3
            p Surgen entre individuos debido a diferencias de personalidad, valores, o intereses. Estos conflictos son comunes en equipos de trabajo y pueden afectar la dinámica del grupo si no se abordan correctamente. 

      .py-4.py-md-5(titulo="Conflictos intragrupales" :icono="require('@/assets/curso/temas/tema6/icono-2.svg')")
        .row.p-4
          .col-md-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema6/img-03.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.mb-3
            p Ocurren dentro de un grupo o equipo, a menudo debido a la competencia por recursos limitados, desacuerdos sobre la dirección del grupo, o problemas de comunicación.

      .py-4.py-md-5(titulo="Conflictos intergrupales" :icono="require('@/assets/curso/temas/tema6/icono-3.svg')")
        .row.p-4
          .col-md-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema6/img-04.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.mb-3
            p Surgen entre diferentes grupos o departamentos dentro de una organización, generalmente debido a objetivos o intereses que compiten entre sí.

      .py-4.py-md-5(titulo="Conflictos funcionales" :icono="require('@/assets/curso/temas/tema6/icono-4.svg')")
        .row.p-4
          .col-md-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema6/img-05.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.mb-3
            p Aunque pueden parecer negativos, estos conflictos pueden ser beneficiosos si se manejan adecuadamente, ya que pueden impulsar la innovación y la mejora de procesos.

      .py-4.py-md-5(titulo="Conflictos disfuncionales" :icono="require('@/assets/curso/temas/tema6/icono-5.svg')")
        .row.p-4
          .col-md-4.mb-3
            figure
              img(src='@/assets/curso/temas/tema6/img-06.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.mb-3
            p Estos son destructivos y perjudican la productividad y las relaciones dentro del grupo. Si no se manejan adecuadamente, pueden llevar a un ambiente de trabajo tóxico. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_6_2 6.2 Técnicas de resolución de conflictos 
    
    p.mb-5(data-aos="zoom-in") Existen diversas técnicas para resolver conflictos de manera efectiva, algunas de las más utilizadas incluyen:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-up")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-07.svg' alt='AvatarTop')
        h2.text-center Negociación
        p Es una técnica donde las partes involucradas en el conflicto intentan llegar a un acuerdo mutuo a través de la discusión y el compromiso. Es útil cuando ambas partes están dispuestas a ceder en algunos aspectos para lograr una solución que beneficie a todos.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-08.svg' alt='AvatarTop')
        h2.text-center Mediación
        p Involucra a un tercero neutral que ayuda a las partes en conflicto a comunicarse y encontrar una solución aceptable para ambos. El mediador no impone una solución, sino que facilita el diálogo.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-09.svg' alt='AvatarTop')
        h2.text-center Arbitraje
        p Similar a la mediación, pero en este caso, el tercero (el árbitro) tiene la autoridad para tomar una decisión que las partes deben acatar. Es común en disputas legales o laborales.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-010.svg' alt='AvatarTop')
        h2.text-center Colaboración 
        p Las partes trabajan juntas para encontrar una solución creativa que satisfaga las necesidades de todos los involucrados. Es una técnica eficaz, pero requiere un alto nivel de confianza y cooperación.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-011.svg' alt='AvatarTop')
        h2.text-center Evitación
        p En algunos casos, las partes pueden optar por evitar el conflicto, ya sea porque no es significativo o porque la confrontación podría ser más perjudicial que beneficiosa. Sin embargo, esta técnica no resuelve el conflicto subyacente.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-012.svg' alt='AvatarTop')
        h2.text-center Compromiso
        p Las partes acuerdan hacer concesiones mutuas, renunciando a algunas de sus demandas para llegar a una solución aceptable para todos. Es una técnica rápida, pero no siempre satisface plenamente a todas las partes.

    p.mb-5(data-aos="zoom-in") El manejo efectivo de conflictos no solo resuelve el desacuerdo, sino que también puede fortalecer las relaciones y mejorar el ambiente de trabajo. Cada conflicto es único, por lo que la selección de la técnica adecuada depende de las circunstancias específicas y las personalidades involucradas. 


</template>

<script>
export default {
  name: 'Tema6',
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
