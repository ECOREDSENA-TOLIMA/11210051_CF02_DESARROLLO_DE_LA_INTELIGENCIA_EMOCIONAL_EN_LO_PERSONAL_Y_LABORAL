<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Afecto, emociones y estados de ánimo 

    p.mb-5(data-aos="zoom-in") Esta sección explora cómo las personas experimentan y gestionan sus estados afectivos, abordando las diferencias entre el afecto, las emociones y los estados de ánimo. El afecto es un término general que engloba tanto las emociones como los estados de ánimo, ambos componentes esenciales en la vida emocional de una persona. Las emociones, a menudo desencadenadas por eventos específicos, son intensas y de corta duración, mientras que los estados de ánimo son más sutiles, persistentes y pueden influir en el comportamiento y la percepción de una persona durante un período prolongado. Entender estas diferencias y cómo interactúan es crucial para desarrollar una mayor inteligencia emocional y para mejorar la capacidad de regulación emocional, contribuyendo al bienestar general y al manejo efectivo de las relaciones interpersonales. 

    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              h4 Afecto
              p.mb-0 Se entiende como una categoría amplia que engloba todas las experiencias emocionales, tanto positivas como negativas. Es un término general que se refiere a la disposición emocional de una persona en un momento dado, abarcando tanto emociones concretas como estados de ánimo prolongados. El afecto es una manifestación del estado interno de una persona y puede influir en su comportamiento y percepción del entorno. 
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img-01.png', style="width: 450px" ,alt='').m-auto
          
          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              h4 Emociones
              p.mb-0 Las emociones son respuestas psicofisiológicas inmediatas y específicas ante estímulos externos o internos. Estas respuestas son generalmente intensas, de corta duración, y están directamente vinculadas a un objeto o situación específica. Por ejemplo, el miedo ante una amenaza o la alegría ante una buena noticia. Las emociones desempeñan un papel crucial en la toma de decisiones y en la adaptación al entorno.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img-02.png', style="width: 450px" ,alt='').m-auto
          
          .row.justify-content-center.align-items-center
            .col-lg-7.order-lg-1.order-2
              h4 Estados de ánimo
              p.mb-0 A diferencia de las emociones, los estados de ánimo son menos intensos, más duraderos, y no están necesariamente relacionados con un estímulo específico. Los estados de ánimo, como la melancolía o la euforia, pueden durar horas o días, y afectan de manera general el enfoque de una persona hacia la vida, influyendo en su conducta y en su interpretación de los eventos cotidianos. 
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img-03.png', style="width: 450px" ,alt='').m-auto 

    p.mb-5(data-aos="zoom-in") La comprensión de estos conceptos es esencial para el desarrollo de la inteligencia emocional, ya que permite a los individuos reconocer y gestionar sus experiencias afectivas de manera efectiva, mejorando su bienestar emocional y su interacción con los demás. A continuación, se presentan los ejemplos de cada uno de los conceptos: 

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
      .col-10.col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema3/tj1_1.png' alt="Muestra semillas nativas")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0.text-small Una madre siente un profundo afecto por su hijo, lo que se manifiesta en su constante preocupación y cariño hacia él. Este afecto es un sentimiento duradero que influye en su comportamiento diario, como su disposición a cuidarlo y protegerlo.

      .col-10.col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema3/tj2_2.png' alt="Muestra semillas mejoradas")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0.text-small Tras recibir una noticia inesperada, una persona experimenta una emoción intensa de alegría. Esta emoción es breve pero muy poderosa, y puede llevar a una reacción física inmediata, como sonreír o reír.

      .col-10.col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema3/tj3_3.png' alt="Muestra semillas híbridas ")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0.text-small Una persona que ha tenido una semana difícil en el trabajo puede encontrarse en un estado de ánimo bajo o melancólico. A diferencia de las emociones, este estado de ánimo es más persistente, influye en su perspectiva general durante varios días, y puede hacer que perciba las situaciones cotidianas de manera más negativa.

    //.row.justify-content-center.mb-5
      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-04.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Afecto
            p.text-small.text-center.mb-0 Una madre siente un profundo afecto por su hijo, lo que se manifiesta en su constante preocupación y cariño hacia él. Este afecto es un sentimiento duradero que influye en su comportamiento diario, como su disposición a cuidarlo y protegerlo.

      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-05.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Emociones
            p.text-small.text-center.mb-0 Tras recibir una noticia inesperada, una persona experimenta una emoción intensa de alegría. Esta emoción es breve pero muy poderosa, y puede llevar a una reacción física inmediata, como sonreír o reír.

      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-06.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Estado de ánimo
            p.text-small.text-center.mb-0 Una persona que ha tenido una semana difícil en el trabajo puede encontrarse en un estado de ánimo bajo o melancólico. A diferencia de las emociones, este estado de ánimo es más persistente, influye en su perspectiva general durante varios días, y puede hacer que perciba las situaciones cotidianas de manera más negativa.












</template>

<script>
export default {
  name: 'Tema3',
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
