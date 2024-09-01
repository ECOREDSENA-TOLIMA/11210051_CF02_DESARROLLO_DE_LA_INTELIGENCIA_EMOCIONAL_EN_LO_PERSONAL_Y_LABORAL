<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
  
    .cajon-b.color-secundario.p-3.mb-3
      p.mb-0 Este componente formativo se enfoca en el desarrollo de la inteligencia emocional y la madurez emocional, abarcando una amplia gama de temas fundamentales para el crecimiento personal y profesional. Busca fomentar una comprensión profunda y la aplicación práctica de conceptos como el autocontrol, la empatía, el trabajo en equipo y la autorrealización. 
        br
        br
        | El objetivo es equipar a los aprendices con las herramientas y habilidades necesarias para gestionar sus emociones de manera efectiva, establecer relaciones interpersonales saludables y enfrentar desafíos emocionales con resiliencia y confianza. Esto promueve el bienestar emocional y el éxito tanto en la vida personal como en el entorno profesional. 
    
    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-12(data-aos="fade-down-right")
            .cajon.color-primario.p-4(style="background-color:#EDD8F5")
              p El desarrollo de la inteligencia emocional y la madurez se logra a través de un enfoque integral que incluye la exploración teórica y práctica de modelos de regulación emocional, técnicas de resolución de conflictos, y el fortalecimiento de la autoestima y el autoconcepto. Cada tema está diseñado para facilitar un aprendizaje reflexivo y aplicable, permitiendo a los participantes desarrollar una madurez emocional sólida y un equilibrio emocional duradero.

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
