<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
</script>

<template>
  <PageHero eyebrow="Patenschaften" title="Nazifahs Geschichte" text="Ein Beispiel, wie Patenschaften Leben verändern." />

  <article class="ams-section">
    <div class="cui-container ams-grid ams-grid--aside">
      <div class="ams-prose">
        <h2>Der Traum vom Klavierspielen</h2>
        <p class="ams-lead">
          Nazifah lebt in einer Blechhütte am Rande des ugandischen Hauptstadtmolochs Kampala. Ihre Eltern können sich weder Nahrung noch Kleidung, geschweige
          denn das Schulgeld für ihre insgesamt sieben Kinder leisten.
        </p>
        <p>
          Offiziell ist der Besuch der obligatorischen 9-jährigen Volksschule zwar kostenfrei. In Wahrheit aber existieren keine staatlichen Schulen, die eine
          obligatorische Bildung unentgeltlich zur Verfügung stellen.
        </p>
        <p>
          2020 hört die Familie von der Africa Music School. Und da Nazifah bereits mit vier Jahren Musik liebt, voller Freude singt, auf allem trommelt, was ihr
          in die Finger kommt, und auf einer selbstgemalten Tastatur „Klavier spielt“, wissen die Eltern, was zu tun ist: Nazifah kostenfreien Musikunterricht
          ermöglichen!
        </p>

        <h3>Eine Stunde Fussmarsch</h3>
        <p>
          Der einstündige Fussmarsch zur AMS hindert Nazifah nicht. Er spornt sie eher an, denn endlich kann sie Klavierspielen lernen auf einem echten Klavier.
          Schnell freundet sie sich mit den 88 Tönen an, die – anders als bei einer selbstgemalten Tastatur – beim Spiel ihren Ohren schmeicheln. All die Töne, die
          bisher nur in ihrer Phantasie erstrahlten, sind nun hörbar – für sie, ihre MitschülerInnen, ihre Eltern und alle, die ihr beim Spielen zuhören.
        </p>
        <p>
          Fasziniert von der Welt der Musik ist der kostenfreie Musikunterricht für Nazifah ebenso Lebenselixier wie die Mahlzeiten und die Kleidung, die sie von
          der AMS erhält. Denn mit leerem Magen übt es sich nicht gut.
        </p>

        <h3>Selbstvertrauen und Lebensfreude</h3>
        <p>
          Gesättigt und voller Stolz tritt sie abends den Heimweg an und freut sich schon auf den nächsten Tag. Denn nun darf sie sogar die allgemeinbildende
          Schule besuchen. Nicht durchgehend, dafür reichen der AMS die Spendengelder nicht, aber ein unregelmässiger Schulbesuch ist deutlich besser als gar
          keiner.
        </p>
        <p>
          Das kleine schüchterne Mädchen mit den ernsten Augen strahlt vor Freude, wenn sie beim nächsten Besuch der AMS erzählt, was sie in der Schule alles
          gelernt hat. Dass sie an Selbstvertrauen und Lebensfreude gewonnen hat, nehmen zwar erstmal die Erwachsenen wahr, aber eines Tages wird sie diese zwei
          Worte an die Tafel schreiben, da sind sich alle sicher.
        </p>
      </div>
      <aside class="ams-grid facts-aside">
        <div class="ams-card">
          <dl class="ams-facts">
            <dt>Name</dt>
            <dd>Nazifah</dd>
            <dt>Alter</dt>
            <dd>7 Jahre</dd>
            <dt>Instrument</dt>
            <dd>Klavier</dd>
          </dl>
        </div>
        <cui-button variant="accent" href="/unterstuetzung/patenschaften">Patenschaft übernehmen</cui-button>
      </aside>
    </div>
  </article>
</template>

<style scoped>
.facts-aside {
  position: sticky;
  top: 10rem;
  justify-items: start;
}
</style>
