<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Trabajo en equipo 

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema5/img-01.png', alt='')

    p.mb-5(data-aos="zoom-in") El trabajo en equipo es una habilidad crucial tanto en el ámbito personal como profesional. Implica la colaboración de un grupo de personas que trabajan juntas hacia un objetivo común, aprovechando las habilidades y fortalezas individuales para maximizar la eficiencia y efectividad del grupo. El trabajo en equipo bien gestionado puede llevar a la innovación, la resolución de problemas y un aumento en la productividad. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Propiedades de los equipos de trabajo  

    p.mb-5(data-aos="zoom-in") Las propiedades de los equipos de trabajo que los hacen efectivos incluyen: 

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center
            .col-lg-6.col-8.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img-02.svg', alt='Imagen decorativa')
            .col-lg-6
              .col-md-12.mb-5.mb-md-0
                //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
                //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
                LineaTiempoD.color-primario.linea-tiempo-edit
                  .d-block(numero="1" titulo="Diversidad de habilidades y perspectivas")
                    p.text-small.mb-2 Un equipo exitoso está compuesto por individuos con habilidades y perspectivas variadas, lo que permite abordar los problemas desde diferentes ángulos.

                  .d-block(numero="2" titulo="Comunicación efectiva")
                    p.text-small.mb-2 La comunicación abierta y clara es esencial para la coordinación y colaboración dentro del equipo. 

                  .d-block(numero="3" titulo="Cohesión")
                    p.text-small.mb-2 La cohesión entre los miembros del equipo, basada en la confianza mutua y el respeto, es fundamental para mantener un ambiente de trabajo armonioso y productivo.  
                  
                  .d-block(numero="4" titulo="Objetivos compartidos")
                    p.text-small.mb-2 Todos los miembros deben estar alineados en cuanto a los objetivos del equipo, lo que permite una dirección común y evita conflictos innecesarios. 

                  .d-block(numero="5" titulo="Roles bien definidos")
                    p.text-small.mb-2 Cada miembro debe tener un rol claro dentro del equipo, lo que ayuda a evitar duplicación de esfuerzos y garantiza que todas las tareas necesarias sean cubiertas. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Factores que determinan que los equipos de trabajo sean exitosos 

    p.mb-5(data-aos="zoom-in") Varios factores contribuyen al éxito de los equipos de trabajo, entre ellos: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-up")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-03.svg' alt='AvatarTop')
        h4.text-center Liderazgo efectivo
        p Un líder  que puede guiar al equipo, motivar a los miembros y resolver conflictos  es esencial para el éxito del equipo.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-04.svg' alt='AvatarTop')
        h4.text-center Capacidad de resolución de conflictos
        p Los equipos exitosos manejan los conflictos de manera constructiva, utilizando las diferencias como oportunidades para mejorar el rendimiento.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-05.svg' alt='AvatarTop')
        h4.text-center Adaptabilidad
        p Las capacidades de adaptarse a los cambios  y desafíos externos es crucial para que el equipo se mantenga relevante y eficiente.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-06.svg' alt='AvatarTop')
        h4.text-center Compromiso de los miembros 
        p El éxito del equipo depende de  la dedicación  y el compromisos de sus miembros  con el objetivo común. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-07.svg' alt='AvatarTop')
        h4.text-center Recursos adecuados
        p Tener acceso a los recursos necesarios, ya sean materiales, información o tiempo, es fundamental para que ele equipo pueda cumplir  con sus objetivos.
     
    p.mb-5(data-aos="zoom-in") Estas propiedades y factores son esenciales para que los equipos de trabajo no solo alcancen sus objetivos, sino que también fomenten un ambiente de colaboración, aprendizaje continuo y éxito sostenido. 



</template>

<script>
export default {
  name: 'Tema5',
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
