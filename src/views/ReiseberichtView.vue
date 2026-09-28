<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import ZoomImage from '../components/ZoomImage.vue'
import heroImage from '../assets/images/allgemein/reisebericht-2023.jpg'
import bild1 from '../assets/images/busunju/bild1.jpg'
import bild2 from '../assets/images/busunju/bild2.jpg'
import bild3 from '../assets/images/busunju/bild3.jpg'
import bild4 from '../assets/images/busunju/bild4.jpg'
import bild5 from '../assets/images/busunju/bild5.jpg'
import bild6 from '../assets/images/busunju/bild6.jpg'

const busunju = [bild1, bild2, bild3, bild4, bild5, bild6].map((src, i) => ({ src, alt: `Erste Arbeiten in Busunju, Bild ${i + 1}` }))
</script>

<template>
  <PageHero
    eyebrow="Aktuelles"
    title="Reisebericht 2023"
    text="Ein persönlicher Einblick in die Arbeit der Africa Music School."
    :image="heroImage"
    image-alt="Die Africa Music School empfängt mit Musik und Tanz"
  />

  <article class="ams-section">
    <div class="cui-container ams-prose">
      <p class="ams-lead">
        Angebahnt über soziale Medien besteht die Kooperation der JMK zur Africa Music School (AMS) seit 2019. Drei Jahre später freut sich Francis Kalema, der
        Leiter der Africa Music School, über eine Einladung des Deutsch-Afrikanischen Jugendwerks (DAJW) und des Senior Experten Service (SES).
      </p>
      <p>
        Während seines Studienaufenthalts in Deutschland konnten wir auch einen einwöchigen Besuch in Kreuzlingen realisieren. Die Zeit in der Schweiz nutzt
        Francis, um ein Praktikum beim Instrumentenbauer Blaswerk Haag in Weinfelden zu absolvieren. Die dort erworbenen Kenntnisse zur Reparatur von
        Instrumenten gehören in Uganda zum wichtigsten Handwerk, um die Instrumente in Schuss zu halten. Die vom Blaswerk Haag zur Verfügung gestellten
        Spezialwerkzeuge mussten jedoch ein Jahr warten, um nach Kampala zu gelangen, denn die masslose Korruption verhindert einen Versand per Post (dies gilt
        auch für die Instrumente, die die JMK der AMS zur Verfügung stellt. Diese müssen nach und nach von Privatpersonen nach Uganda transportiert werden).
      </p>
      <p>
        Bepackt mit Instrumenten und Werkzeugen besuchten meine Lebensgefährtin und ich 2023 im Rahmen einer privaten Reise die Africa Music School in Kampala.
        Der Moloch, der sich Ugandas Hauptstadt nennt, erweist sich als von Armut und Elend geprägt – hausgemacht durch u. a. korruptes Regierungshandeln einer
        Elite, die weitaus mehr am Füllen der eigenen Taschen denn am Wohl der Bevölkerung interessiert ist. Wo macht ein Projekt für Strassenkinder, denen über
        Musik ein Ausweg und eine Perspektive geboten wird, mehr Sinn als hier? Nirgendwo!
      </p>
      <p>
        Insgesamt besuchten wir drei Orte, an denen die AMS arbeitet: das gemietete Haupthaus der Musikschule in Kampala, die bereits vor Ort lebenden Kinder am
        neuen Standort in Busunju und die „CEVIC School for the Blind“ in Buwama, nahe des Äquators.
      </p>
      <p>
        An allen Orten wurden wir voller Herzlichkeit und mit viel Musik begrüsst und es war eine Freude, zu sehen, wie motiviert und ernsthaft die Kinder den
        Musikunterricht besuchen.
      </p>

      <h3>CEVIC School for the Blind</h3>
      <p>
        All unsere gewonnenen Eindrücke und Erfahrungen sind geprägt von allerhöchstem Respekt für die Arbeit von Francis Kalema. Er und seine Mitarbeiter und
        Mitarbeiterinnen geben den Strassenkindern nicht nur Wasser, Nahrung und Liebe, sondern vor allem auch Hoffnung. Hoffnung auf ein besseres Leben in einer
        besseren Welt. „Through Music we make Change“ ist deshalb das Leitmotiv der AMS.
      </p>
      <p>
        Am meisten beeindruckt hat uns die persönliche Aufopferungsbereitschaft von Francis. Er gibt alles, um seine Vision einer besseren Welt für die
        Strassenkinder Ugandas zu verwirklichen. Er verzichtet auf fliessendes Wasser in seiner privaten Wohnung, um dafür den Kindern Wasser zu geben. Er
        begnügt sich mit Matoke, einem sättigenden Bananenbrei, damit er für alle etwas zu essen zubereiten kann. Er investiert alle persönlichen Ressourcen in
        sein Projekt, um den Kindern einen besseren Start ins Leben zu ermöglichen.
      </p>

      <h3>Die Africa Music School empfängt mit viel Musik &amp; Tanz</h3>
      <ZoomImage :src="heroImage" alt="Schülerinnen und Schüler der AMS begrüssen die Gäste mit Blasmusik und Tanz" class="ams-photo" />

      <h3>In Busunju entsteht die neue AMS</h3>
      <p>
        Standort Kampala: Da die Miete für die Räumlichkeiten im teuren Kampala nur bis Ende 2023 finanziert werden kann, konnte das „Netzwerk Kreuzlingen
        Kampala“ ihm bereits die finanziellen Mittel für den Kauf eines geeigneten Grundstücks zur Verfügung stellen. Dort ist die Errichtung der Gebäude für die
        neue Africa Music School geplant. Auch für die Wasserversorgung konnten wir eine finanzielle Lösung finden und einen Brunnen spenden. Für die Bauten /
        Gebäude sind wir momentan auf der Suche nach Stiftungen, die sich in diesem Bereich engagieren.
      </p>
    </div>
    <div class="cui-container">
      <PhotoGallery :images="busunju" ratio="4 / 3" min-width="26rem" class="ams-gallery" />
    </div>
    <div class="cui-container ams-prose">
      <h3>Wie kommt Francis zu seinem Engagement?</h3>
      <p>
        Er selbst wurde mit drei Jahren von seiner Mutter ausgesetzt und musste sich ab diesem Zeitpunkt alleine durch die Welt kämpfen. In diesem
        Überlebenskampf lernte er bei Brass Bands die Welt der Musik kennen. Er lief den Musikern so lange hinterher, bis sie sich erbarmten und der kleinen
        neugierigen Nervensäge zeigten, wie man ein Instrument spielt. Diese Erfahrung prägte fortan Francis’ Lebensgeschichte und heute sagt er:
      </p>
      <blockquote class="ams-quote"><p>„Die Musik hat mich gerettet!“</p></blockquote>
      <p>
        Auf dieser Grundlage baut Francis das Projekt AMS auf, dem er seit 2017 sein Leben verschreibt und das mit genau denselben Parametern agiert. Er bietet
        mittellosen Strassenkindern zunächst das Wichtigste im Leben: Liebe!
      </p>
      <p>
        Sie ist auch in Uganda umsonst. Wasser und Nahrung müssen schon bezahlt werden, was er u. a. aus den Spenden des „Netzwerk Kreuzlingen Kampala“
        finanziert. Ein Dach über dem Kopf kann er in der momentanen Situation noch nicht bieten, aber auf dem neuen Gelände ist auch dies Bestandteil. Als für
        die meisten einzige Bildungsmöglichkeit, sinnstiftende Betätigung und für manche sogar Zukunftsperspektive ist das Mittel seiner Wahl die Musik. So wie
        sie ihm „das Leben gerettet hat“, darf sie auch anderen Hoffnung geben.
      </p>
    </div>
  </article>
</template>

<style scoped>
.ams-prose :deep(.zoom) {
  margin: var(--cui-space-4) 0 var(--cui-space-6);
}
</style>
