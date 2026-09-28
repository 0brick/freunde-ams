<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import image from '../assets/images/recital/ucuj7080.jpg'
</script>

<template>
  <PageHero
    title="Die Africa Music School"
    text="Ein Ort der Hoffnung und Veränderung in Kampala, Uganda."
    :image="image"
    image-alt="Das Blasorchester der Africa Music School auf der Bühne"
    image-position="center 35%"
    image-position-mobile="78% 40%"
  />

  <section class="ams-section">
    <div class="cui-container">
      <div class="ams-prose">
        <p class="ams-lead">
          Er gibt bedürftigen Kindern sauberes Wasser, eine Mahlzeit, Kleidung, Unterkunft und Fürsorge. Damit sind die Grundbedürfnisse befriedigt. Doch der Weg
          aus der Armut beginnt erst. Denn Bildung und vor allem Musik sind für ihn die entscheidenden Mittel. Das hat er am eigenen Leib erfahren. Heute spendet
          diese Erfahrung ihm die Gewissheit, die Kraft und den Antrieb, die Africa Music School zu seinem Lebensinhalt zu machen.
        </p>
        <p>
          „Er“, das ist Francis Kalema, Gründer und Leiter der Africa Music School (AMS), die in Ugandas Hauptstadt Kampala wirkt. Seit zwei Jahren verbindet die
          AMS und die Jugendmusik Kreuzlingen (JMK) eine Bildungspartnerschaft, die auf Instagram ihren Anfang nahm. Musikschulleiter Kai Kopp erzählt
          begeistert:
        </p>
        <blockquote class="ams-quote">
          <p>
            „In mehreren Videotelefonaten wurde ich von Francis über die Aktivitäten der AMS informiert, konnte mir einen umfassenden Eindruck seiner Arbeit
            verschaffen und der grosse Bedarf – nicht nur – an Instrumenten wurde immer sichtbarer.“
          </p>
          <footer class="ams-quote__source">Kai Kopp, Musikschulleiter der JMK</footer>
        </blockquote>
        <p>
          Um auf die Arbeit der AMS aufmerksam zu machen, weiss Francis Kalema um die Wichtigkeit sozialer Medien und nutzt diese Möglichkeiten intensiv. Sein
          stetes Bemühen um Unterstützung überzeugte nicht nur die JMK und so erhielt er vom Deutsch-Afrikanischen Jugendwerk DAJW 2022 die Einladung, einen
          4-monatigen Stipendienaufenthalt in Deutschland zu verbringen. In diesem Rahmen intensivierte er an der Berufsfachschule für Musik Oberfranken seine
          musikalischen, pädagogischen und sozialpädagogischen Fertigkeiten und besuchte „seine“ Partnerschule in der Schweiz, die Jugendmusik Kreuzlingen.
        </p>
      </div>
    </div>
  </section>

  <section class="ams-section ams-section--ink">
    <div class="cui-container support">
      <div>
        <h2>Möchten Sie die Schule unterstützen?</h2>
        <p>
          Der Verein „Freunde der Africa Music School“ sammelt Spenden und organisiert Unterstützung, um die Arbeit von Francis Kalema und seinem Team zu sichern.
        </p>
      </div>
      <div class="ams-actions">
        <cui-button variant="accent" href="/unterstuetzung">Jetzt unterstützen</cui-button>
        <cui-button variant="outline" href="/projekte/busunju" class="on-dark">Unsere Projekte</cui-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.support {
  display: grid;
  gap: var(--cui-space-5);
  align-items: center;
}

.support p {
  max-width: 60ch;
  margin: 0;
}

@media (min-width: 900px) {
  .support {
    grid-template-columns: 1fr auto;
  }
}

.on-dark {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.5);
}

.on-dark:hover {
  background: #fff;
  color: #16120e;
}
</style>
