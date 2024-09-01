<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Autocontrol y regulación emocional 

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/img-01.png', alt='')

    p.mb-5(data-aos="zoom-in") El autocontrol y regulación emocional se refiere a la capacidad de una persona para manejar y modificar sus propias emociones de manera consciente y eficaz, especialmente en situaciones de estrés o conflicto. Este proceso incluye la habilidad de identificar y comprender las emociones, así como el uso de estrategias para moderarlas, asegurando que las reacciones emocionales sean apropiadas y adaptativas en diferentes contextos. 
    
    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Modelo de proceso de regulación emocional según Gross y Thompson 

    p.mb-5(data-aos="zoom-in") El modelo de proceso de regulación emocional según Gross y Thompson (2007) es una teoría fundamental que detalla cómo las personas pueden regular sus emociones en cinco etapas distintas: 

    .tarjeta.p-4.tarjeta--gris1.px-4.px-md-5.pt-4.mb-5
      PasosB.color-acento-botones
        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h6.mb-4 Selección de la situación
            p.mb-0 Elegir entrar o evitar situaciones que pueden  desencadenar ciertas emociones. 

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img-02.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h6.mb-4 Modificación de la situación 
            p Cambiar aspectos de la situación para alternar su impacto emocional.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img-03.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h6.mb-4 Despliegue atencional 
            p Enfocar o desviar  la atención para influir en las emociones.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img-04.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h6.mb-4 Cambio Cognitivo
            p Alterar como se interpreta una situación para modificar su impacto emocional.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img-05.png', alt='Imagen decorativa')

        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6.order-lg-1.order-2
            h6.mb-4 Modulación de la respuesta 
            p Regular las respuestas emocionales una vez que han sido generadas.

          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img-06.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        p Este modelo proporciona un marco útil para entender cómo las emociones pueden ser gestionadas de manera proactiva y efectiva, y es clave en el desarrollo de estrategias de autocontrol. 


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
