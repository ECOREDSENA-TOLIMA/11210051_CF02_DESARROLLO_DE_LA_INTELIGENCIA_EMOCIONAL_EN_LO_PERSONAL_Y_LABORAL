<template lang="pug">
.curso-main-container.pb-3.tema10
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Autorrealización 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema10/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La autorrealización es un concepto que trasciende la mera satisfacción de necesidades básicas, proponiéndose como la meta última del desarrollo personal. Este proceso se asocia con la búsqueda de un propósito más elevado y el descubrimiento de uno mismo, impulsando a las personas a alcanzar su máximo potencial tanto en la vida personal como profesional. Según la psicología humanista, especialmente en la obra de Abraham Maslow, la autorrealización es la cúspide de la pirámide de necesidades, representando la realización plena de las capacidades y talentos individuales. 

    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_10_1 10.1 Autorrealización como motivación y necesidad 

    p(data-aos="zoom-in") La autorrealización, según Maslow, representa la madurez personal y es vista como una necesidad de crecimiento que trasciende las necesidades básicas o de deficiencia. En su jerarquía de necesidades, Maslow posiciona las necesidades de crecimiento (como la perfección, la justicia, la belleza, y la verdad) por encima de las necesidades fisiológicas y de seguridad, amor, pertenencia y atención. Estas necesidades superiores conducen al individuo hacia la autorrealización, un estado en el que se busca cumplir con el propio potencial y vivir en coherencia con los valores más elevados.
    p.mb-5(data-aos="zoom-in") Maslow también identificó una serie de rasgos característicos en las personas autorrealizadas, tales como: 

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center
            .col-lg-5.col-12.mb-3
              figure
                img(src='@/assets/curso/temas/tema10/img-02.svg', alt='Imagen decorativa')
            .col-lg-7.col-12.mb-3
              .col-md-12.mb-5.mb-md-0
                ul.lista-ul--color.ms-3.mb-0
                  li.mb-2
                    i.fas.fa-check 
                    | Percepción más precisa de la realidad. 
                  li.mb-2
                    i.fas.fa-check 
                    | Aceptación de uno mismo, de los demás y del mundo natural. 
                  li.mb-2
                    i.fas.fa-check 
                    | Espontaneidad, sencillez y autenticidad en el comportamiento. 
                  li.mb-2
                    i.fas.fa-check  
                    | Enfoque en la resolución de problemas. 
                  li.mb-2
                    i.fas.fa-check 
                    | Necesidad de privacidad. 
                  li.mb-2
                    i.fas.fa-check 
                    | Autonomía e independencia cultural y relacional. 
                  li.mb-2
                    i.fas.fa-check  
                    | Apreciación de la vida con frescura. 
                  li.mb-2
                    i.fas.fa-check 
                    | Capacidad para experimentar momentos de éxtasis o trascendencia. 
                  li.mb-2
                    i.fas.fa-check 
                    | Profundo sentido de comunidad y relaciones interpersonales selectivas. 
                  li.mb-2
                    i.fas.fa-check 
                    | Estructura firme de carácter. 
                  li.mb-2
                    i.fas.fa-check 
                    | Diferenciación clara entre medios y fines con una base ética. 
                  li.mb-2
                    i.fas.fa-check  
                    | Sentido del humor filosófico.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_10_2 10.2 Autorrealización como completitud de vida 

    p(data-aos="zoom-in") Alcanzar la autorrealización implica vivir en armonía consigo mismo y con el mundo, logrando un estado de completitud y satisfacción profunda. Este estado se caracteriza por la capacidad de vivir de acuerdo con los propios valores y principios, logrando una vida que no solo es exitosa en términos externos, sino también en términos internos. La autorrealización es un proceso continuo, en el cual la persona no solo alcanza metas, sino que también encuentra paz interior, satisfacción emocional y un profundo sentido de bienestar. 
    p.mb-5(data-aos="zoom-in") Esta perspectiva integradora subraya la importancia de alinear las aspiraciones personales con la experiencia diaria, creando una vida plena y significativa. Maslow define la autorrealización como la necesidad más elevada en su Pirámide de Necesidades Humanas, la cual establece cinco etapas que cubren desde las necesidades más básicas hasta la autorrealización: 

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Pirámide de necesidades humanas de Maslow</i>
        figure.mb-5
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema10/img-03-01.svg', alt='En la figura 1 se representa la pirámide de necesidades humanas desarrollada por Maslow. Esta pirámide ilustra los cinco niveles de necesidades que los seres humanos buscan satisfacer: necesidades biológicas, seguridad, afiliación, reconocimiento y, en la cúspide, la autorrealización.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema10/img-03-02.svg', alt='En la figura 1 se representa la pirámide de necesidades humanas desarrollada por Maslow. Esta pirámide ilustra los cinco niveles de necesidades que los seres humanos buscan satisfacer: necesidades biológicas, seguridad, afiliación, reconocimiento y, en la cúspide, la autorrealización.') 
          figcaption Nota: <i>tomada de Maslow (1943).</i> 

    p.mb-5(data-aos="zoom-in") A continuación, se presenta la explicación de cada etapa, según sus necesidades: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-12
        .row.justify-content-center.align-items-center
          .col-12.px-0
            AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-out-up")
              .row(titulo="Necesidades biológicas básicas")
                .col-md-12.mb-4.mb-md-0
                  p Implican lo esencial para la supervivencia, como la salud, el alimento, el descanso y la reproducción. 

              .row(titulo="Necesidades de seguridad")
                .col-md-12.mb-4.mb-md-0
                  p Involucran la protección física, estabilidad económica, y la seguridad emocional, incluyendo tener un hogar y empleo.

              .row(titulo="Necesidades de afiliación (sociales)")
                .col-md-12.mb-4.mb-md-0
                  p Se refieren al sentido de pertenencia y amor, lo que incluye relaciones afectivas y sociales. 

              .row(titulo="Necesidades de reconocimiento y autoestima")
                .col-md-12.mb-4.mb-md-0
                  p Comprenden la necesidad de respeto, reconocimiento, éxito y autoconfianza. 

              .row(titulo="Necesidades de autorrealización")
                .col-md-12.mb-4.mb-md-0
                  p En la cúspide de la pirámide, se encuentran necesidades como la creatividad, la moralidad, y el desarrollo del potencial humano, lo cual culmina en la autorrealización.

      .col-lg-4.col-12.mb-5(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema10/img-04.png', alt='Rutinas de limpieza')

      p.mb-5(data-aos="zoom-in") En esta última etapa, las personas buscan trascender sus necesidades de deficiencia para concentrarse en el crecimiento personal y la satisfacción profunda, logrando una vida que es tanto significativa como plena.




</template>

<script>
export default {
  name: 'Tema10',
  data: () => ({}),
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
