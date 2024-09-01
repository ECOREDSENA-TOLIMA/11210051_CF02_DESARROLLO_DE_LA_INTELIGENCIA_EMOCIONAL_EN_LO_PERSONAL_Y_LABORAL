<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Empatía 

    p.mb-5(data-aos="zoom-in") La empatía es la capacidad de comprender y compartir los sentimientos y experiencias de otra persona, permitiendo a los individuos conectarse emocionalmente con los demás. Esta habilidad se considera fundamental en las relaciones interpersonales y es crucial para la convivencia social y la cooperación. La empatía no solo implica reconocer las emociones de los demás, sino también responder de manera apropiada a esas emociones. Puede manifestarse en formas tanto cognitivas como emocionales, y es esencial en diversos contextos, como en el ámbito familiar, profesional y social. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Existen diversas definiciones de empatía, pero todas coinciden en su papel central en la construcción de relaciones humanas saludables. Daniel Goleman, un destacado autor en inteligencia emocional, define la empatía como la habilidad de entender las emociones de los demás. Según él, esta capacidad es clave para una comunicación efectiva y para la resolución de conflictos. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Empatía como cognición y emoción 

    .row.align-items-center.justify-content-center.mb-4(data-aos="flip-left") 
      .col-md-8.col-12.mb-3.mb-md-0
        p.mb-3(data-aos="flip-left") <b>La empatía se puede dividir en dos componentes principales:</b> el cognitivo y el emocional. <b>La empatía cognitiva</b> se refiere a la capacidad de comprender la perspectiva o el estado mental de otra persona, es decir, saber lo que otra persona siente o piensa. Esto no necesariamente implica compartir esas emociones, sino más bien reconocerlas y entenderlas desde un punto de vista intelectual.
        p.mb-3(data-aos="flip-left") Por otro lado, <b>la empatía emocional</b> implica la capacidad de experimentar las emociones que otra persona está sintiendo. Es una respuesta emocional directa a la experiencia emocional de otra persona, lo que permite no solo entender, sino también sentir junto con el otro. Este tipo de empatía es lo que nos impulsa a ofrecer apoyo a alguien que está pasando por un momento difícil. 
        .cajon.color-primario.p-4.mb-4(style="background-color: #EDD8F5")
          p Ambos tipos de empatía son esenciales para una interacción social efectiva y se complementan para ayudar a las personas a conectarse profundamente con los demás, facilitando una comunicación más efectiva y relaciones interpersonales más saludables. 
      .col-md-4.col-10(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema4/img-02.svg", alt="")

    p.mb-5(data-aos="zoom-in") A continuación, se presentan ejemplos, de cómo estas dos formas de empatía se manifiestan en situaciones cotidianas, subrayando la importancia de ambas en la construcción de relaciones interpersonales saludables y en la facilitación de la comunicación efectiva. 

    .tarjeta--container.row.mb-5(data-aos="fade-up")
      .col-md.tarjeta.color-primario2.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema4/img-03.svg', alt='Imagen decorativa')
        h2.text-center Empatía Cognitiva
        p <b>Comprensión en el lugar de trabajo:</b> Un gerente observa que un empleado está distraído y rinde menos de lo habitual. Al hablar con el empleado, el gerente entiende que la persona está preocupada por problemas familiares. Aunque el gerente no comparte esos mismos problemas, comprende la situación y ofrece flexibilidad en los horarios para que el empleado pueda atender sus asuntos personales.
        p <b>Negociaciones:</b> Durante una negociación, una parte reconoce que la otra parte tiene una visión distinta sobre un contrato. Aunque no comparta la misma perspectiva, puede entender por qué la otra parte está preocupada por ciertas cláusulas. Esta comprensión ayuda a facilitar un acuerdo que beneficie a ambas partes.

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema4/img-04.svg', alt='Imagen decorativa')
        h2.text-center Empatía Emocional
        p <b>Consolación de un amigo:</b> Un amigo recibe una mala noticia y comienza a llorar. Al verlo, otro amigo siente una profunda tristeza y, sin pensarlo mucho, abraza al amigo para ofrecer consuelo. Esta respuesta emocional refleja que la persona está sintiendo el dolor junto con su amigo.
        p <b>Reacción ante una historia triste:</b> Al ver una película que muestra la pérdida de un ser querido, una persona comienza a llorar, aunque nunca haya experimentado esa pérdida directamente. Este llanto es una respuesta emocional a la situación de los personajes, demostrando la capacidad de sentir lo que los personajes están pasando.

    p.mb-5(data-aos="zoom-in") Estos ejemplos exponen cómo la empatía cognitiva implica una comprensión intelectual de las emociones de los demás, mientras que la empatía emocional se refiere a una respuesta emocional compartida. Ambos tipos de empatía son importantes para establecer relaciones humanas profundas y comprensivas. 



</template>

<script>
export default {
  name: 'Tema4',
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
