<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") A continuación, se presenta una síntesis del componente formativo “Desarrollo de la inteligencia emocional y madurez”. Este componente cubre temas esenciales como la educación de la inteligencia emocional, incluyendo autocontrol, regulación emocional y manejo de conflictos. También aborda la empatía desde sus dimensiones cognitiva y emocional, la importancia del trabajo en equipo y las relaciones interpersonales. Además, se examinan la autoestima, el autoconcepto y la madurez emocional, destacando su impacto en el crecimiento personal y profesional. Finalmente, se exploran los conceptos de autorrealización, como motivación y necesidad, y su relación con una vida plena y satisfactoria. 

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo “Antropología e inteligencia emocional”, se describe un análisis profundo de las emociones desde múltiples perspectivas, incluyendo la biológica, cognitiva y antropológica.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
