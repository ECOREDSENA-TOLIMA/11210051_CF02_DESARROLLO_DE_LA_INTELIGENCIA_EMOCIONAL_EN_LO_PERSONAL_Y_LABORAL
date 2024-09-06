<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Educación de la inteligencia emocional 

    p.mb-5(data-aos="zoom-in") La educación de la inteligencia emocional es un proceso que va más allá del simple manejo de emociones; implica un desarrollo integral que abarca la conciencia emocional, la regulación y la aplicación de emociones en diversos contextos. Este tipo de educación se enfoca en cultivar competencias emocionales que son esenciales para el bienestar personal y la eficacia social, como el autocontrol, la empatía y la capacidad para establecer relaciones interpersonales saludables. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-left") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En un contexto educativo, la inteligencia emocional se integra en el currículo a través de programas específicos diseñados para desarrollar habilidades socioemocionales desde una edad temprana. Estos programas incluyen actividades que fomentan la autoobservación, la identificación de emociones propias y ajenas, y la práctica de respuestas emocionales adecuadas en situaciones cotidianas. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left") 
      .col-lg-8.order-lg-1.order-2
        p.mb-0(data-aos="flip-left") Además, la educación emocional es crucial en el ámbito profesional, donde la capacidad de gestionar las emociones propias y entender las de los demás puede influir significativamente en el liderazgo, la toma de decisiones y el trabajo en equipo. En este sentido, la inteligencia emocional se convierte en un factor determinante para el éxito en diversas áreas de la vida. 
        .cajon.color-secundario.p-4.mb-4(style="background-color: #FFF4D6")
          p La educación de la inteligencia emocional también tiene un componente preventivo, ayudando a las personas a enfrentar situaciones estresantes y a reducir el riesgo de conflictos y malentendidos. Esto se logra mediante la enseñanza de técnicas de manejo del estrés, la mejora de la comunicación interpersonal y el fortalecimiento de la resiliencia emocional. 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        img(src="@/assets/curso/temas/tema1/img-02.svg", alt="")

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
