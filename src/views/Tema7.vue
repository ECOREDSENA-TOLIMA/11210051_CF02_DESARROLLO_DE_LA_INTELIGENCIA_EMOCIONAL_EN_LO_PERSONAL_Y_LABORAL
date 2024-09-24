<template lang="pug">
.curso-main-container.pb-3.tema7
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Relaciones interpersonales 

    p.mb-5(data-aos="zoom-in") Las relaciones interpersonales son fundamentales en la vida de cualquier individuo, ya que influyen en la forma en que interactuamos con los demás y, en última instancia, en nuestro bienestar emocional y social. Este tema aborda la importancia de establecer y mantener relaciones saludables, basadas en la comunicación efectiva, el respeto mutuo, y la empatía. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las relaciones interpersonales no solo afectan la vida personal, sino que también son cruciales en el entorno laboral y educativo, donde la capacidad para trabajar bien con otros puede determinar el éxito individual y colectivo. Se destacan varias competencias clave que son esenciales para el desarrollo de relaciones interpersonales efectivas, como la escucha activa, la asertividad, y la capacidad para gestionar conflictos de manera constructiva. 

    p.mb-5(data-aos="zoom-in") A continuación, se presentan los elementos clave de las relaciones interpersonales: 

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center
            .col-lg-6.col-8.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema7/img-02.png', alt='Imagen decorativa')
            .col-lg-6
              .col-md-12.mb-5.mb-md-0
                //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
                //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
                LineaTiempoD.color-primario.linea-tiempo-edit
                  .d-block(numero="1" titulo="Comunicación")
                    p.text-small.mb-2 Es el pilar de cualquier relación. Incluye no solo la habilidad de expresarse claramente, sino también la capacidad de escuchar y comprender a los demás. La comunicación efectiva es fundamental para resolver malentendidos y fortalecer los lazos. 

                  .d-block(numero="2" titulo="Empatía")
                    p.text-small.mb-2 La capacidad de entender y compartir los sentimientos de otra persona. Es esencial para construir relaciones basadas en la confianza y el respeto. 

                  .d-block(numero="3" titulo="Confianza")
                    p.text-small.mb-2 Sin confianza, las relaciones son frágiles y susceptibles a la desconfianza y los malentendidos. La confianza se construye con el tiempo a través de la consistencia, la honestidad y la lealtad. 

                  .d-block(numero="4" titulo="Asertividad")
                    p.text-small.mb-2 La habilidad para expresar los propios sentimientos y deseos de manera respetuosa, sin agresividad ni pasividad. La asertividad permite a las personas defender sus derechos sin violar los derechos de los demás.

                  .d-block(numero="5" titulo="Respeto mutuo")
                    p.text-small.mb-2 Reconocer y valorar las diferencias y perspectivas de los demás. El respeto es esencial para mantener la armonía en cualquier relación. 

    p.mb-5(data-aos="zoom-in") El desarrollo de habilidades interpersonales es un proceso continuo que requiere práctica y reflexión. Al mejorar estas habilidades, las personas pueden construir relaciones más sólidas y satisfactorias, tanto en su vida personal como profesional. 



</template>

<script>
export default {
  name: 'Tema7',
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
