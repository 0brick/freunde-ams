<script setup lang="ts">
import PageHero from '../components/PageHero.vue'

const sections = [
  { id: 'p1', label: '§1 Name, Sitz, Geschäftsjahr' },
  { id: 'p2', label: '§2 Zweck des Vereins' },
  { id: 'p3', label: '§3 Gemeinnützigkeit' },
  { id: 'p4', label: '§4 Mitgliedschaft' },
  { id: 'p5', label: '§5 Vereinsorgane' },
  { id: 'p6', label: '§6 Die Mitgliederversammlung' },
  { id: 'p7', label: '§7 Der Vorstand' },
  { id: 'p8', label: '§8 Finanzierung des Vereins' },
  { id: 'p9', label: '§9 Auflösung' }
]
</script>

<template>
  <PageHero eyebrow="Der Verein" title="Unsere Vereinssatzung" text="Satzung des Vereins „Freunde der Africa Music School Uganda e. V.“" />

  <section class="ams-section">
    <div class="cui-container satzung">
      <nav class="toc" aria-label="Inhalt der Satzung">
        <p class="toc__title">Inhalt</p>
        <ol>
          <li v-for="s in sections" :key="s.id"><a :href="`#${s.id}`">{{ s.label }}</a></li>
        </ol>
      </nav>

      <div class="ams-prose">
        <h2 class="doc-title">Satzung des Vereins „Freunde der Africa Music School Uganda“</h2>

        <h3 id="p1">§1 Name, Sitz, Geschäftsjahr</h3>
        <ol>
          <li>Der Verein führt den Namen „Freunde der Africa Music School Uganda“ und hat seinen Sitz in Konstanz.</li>
          <li>Der Verein soll nach seiner Gründung in das Vereinsregister beim Amtsgericht Konstanz eingetragen werden und führt danach den Zusatz e. V.</li>
          <li>Das Geschäftsjahr beginnt am 01.01. des laufenden Jahres und endet am 31.12. des gleichen Jahres.</li>
        </ol>
        <cui-alert variant="neutral">Anmerkung: Der Verein wurde am 5.3.2024 beim Amtsgericht Freiburg eingetragen und trägt die Vereinsregister-Nummer 704091</cui-alert>

        <h3 id="p2">§2 Zweck des Vereins</h3>
        <p>
          Die allgemeine und zentrale Aufgabe des Vereins ergibt sich aus der Mitverantwortung aller Menschen für die Entwicklung der Welt. Der Verein bietet Hilfe
          zur Selbsthilfe in Uganda und wird tätig durch ideelle und materielle Unterstützung. Eine zentrale Aufgabe des Vereins ist es, insbesondere durch Sammeln
          von Geld- und Sachspenden die im Folgenden beschriebenen Zwecke zu verwirklichen.
        </p>
        <ol>
          <li>
            <p>
              Primärer Zweck des Vereins ist es, hilfsbedürftigen Kindern und Jugendlichen in Uganda durch die Gewährleistung kontinuierlichen Zugangs zur
              Bildungseinrichtung „Africa Music School“ den Zugang zum Bildungssystem zu ermöglichen, um ihnen eine Chance auf ein selbstbestimmtes,
              eigenverantwortliches und menschenwürdiges Leben zu eröffnen. Diesem Satzungszweck dienen alle Maßnahmen, die unmittelbar oder mittelbar dazu
              geeignet sind, eine dem Lernen und der Bildung förderliche häusliche und schulische Umgebung zu schaffen, in der sich das einzelne Kind gemäß seinen
              individuellen Talenten entfalten kann.
            </p>
            <p>
              Hierzu unterstützt der Verein selbstlos und ohne Gewinnstreben die Africa Music School in Uganda, die zur Förderung des Bildungswesens eine
              Musikschule betreibt, die durch Musikunterricht obdachlose Straßenkinder und andere benachteiligte Kinder/Jugendliche unterstützt und ihnen hilft,
              über den Kontakt mit Musik Lebensfreude und Selbstwirksamkeit zu erfahren, damit allgemein die Persönlichkeitsentwicklung zu fördern und eine
              sinnvolle Lebensperspektive zu erhalten. Dies auch durch die Sicherstellung der Grundbedürfnisse Kleidung, Ernährung, Unterbringung und Gesundheit.
              Damit dient der Verein der Förderung der Kinder- und Jugendhilfe sowie der Förderung der Erziehung und der Volks- und Berufsbildung.
            </p>
          </li>
          <li>
            Darüber hinaus dient der Verein der Förderung des interkulturellen Austauschs und des gegenseitigen voneinander Lernens, um das Verständnis zwischen
            Menschen aus dem afrikanischen und europäischen Kulturkreis zu verbessern. Hier geht es insbesondere um die Förderung der Musik sowie kultureller
            Veranstaltungen wie Konzerte und der Bewahrung musikalischer Kulturwerte. Zu diesem Zweck wird der Verein Kontakte und bei Interesse Partnerschaften u.
            a. zwischen der Africa Music School und Musikschulen in Deutschland und anderen europäischen Ländern vermitteln, die dem Austausch in musikalischer
            Hinsicht befördern sollen. Damit fördert der Verein die internationale Kommunikation und die kulturelle Toleranz im Interesse der
            Völkerverständigung.
          </li>
        </ol>
        <p>Der Verein arbeitet mit bereits bestehenden Einrichtungen, staatlichen und nicht staatlichen Institutionen in Europa und Uganda zusammen.</p>
        <p>Die Arbeit des Vereins soll der Kooperation mit den genannten Ländern dienen und ein besseres Verständnis zwischen den Menschen fördern.</p>

        <h3 id="p3">§3 Gemeinnützigkeit</h3>
        <ol>
          <li>
            <p>
              Der Verein „Freunde der Africa Music School“ mit Sitz in Konstanz verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des
              Abschnitts „Steuerbegünstigte Zwecke“ der Abgabenordnung, insbesondere:
            </p>
            <ul>
              <li>Förderung der Jugendhilfe,</li>
              <li>Förderung der Erziehung und Bildung,</li>
              <li>Förderung der Entwicklungszusammenarbeit,</li>
              <li>Förderung internationaler Gesinnung, der Toleranz auf allen Gebieten der Kultur und des Völkerverständigungsgedankens.</li>
            </ul>
            <p>
              Diese Zwecke sollen erreicht werden durch das Sammeln von Geld- und Sachspenden sowie deren Weiterleitung an die Africa Music School in Uganda bzw.
              durch die ideelle und finanzielle Förderung anderer steuerbegünstigter Körperschaften oder juristischer Personen des öffentlichen Rechts im Sinne des §
              58 Nr. 1 AO. Der Verein wird auch durch Hilfspersonen i.S.v. § 57 Abs. 1 S. 2 AO tätig. Weiter werden Kontakte und Partnerschaften zwischen der Africa
              Music School in Uganda und Musikschulen in Deutschland und anderen europäischen Ländern durch den Verein hergestellt.
            </p>
          </li>
          <li>
            Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke. Alle Mitglieder des Vereins arbeiten ehrenamtlich und
            unentgeltlich.
          </li>
          <li>Mittel des Vereins dürfen nur für satzungsgemäße Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins.</li>
          <li>
            Aus den Mitteln dürfen keinerlei Zuwendungen an die Mitglieder oder den Vorstand geleistet werden. Ausgenommen hiervon sind ausschließlich Auslagen und
            Aufwendungen, die für den Verein geleistet wurden. Das Gebot der Selbstlosigkeit (§55 AO) wird hierbei beachtet. Diese werden ausschließlich gegen Beleg
            zurückerstattet.
          </li>
          <li>Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.</li>
        </ol>

        <h3 id="p4">§4 Mitgliedschaft</h3>
        <p>Der Verein führt als Mitglieder:</p>
        <ul>
          <li>
            Ordentliche Mitglieder, die den Verein regelmäßig mit ihrem Monats- bzw. Jahresbeitrag unterstützen. Wünschenswert ist, dass sich die ordentlichen
            Mitglieder aktiv an den Aufgaben des Vereins beteiligen.
          </li>
          <li>Fördermitglieder, die ein bestimmtes Projekt oder eine spezielle Aufgabe in besonderen Maße unterstützen möchten.</li>
        </ul>
        <p>
          Ordentliches und Fördermitglied kann jede natürliche oder juristische Person werden, die den Vereinszweck anerkennt und bereit ist den Verein aktiv oder
          passiv zu fördern.
        </p>
        <p>Über die Aufnahme eines Mitgliedes entscheidet der Vorstand.</p>
        <p>Die Mitgliedschaft im Verein ist persönlich, nicht stellvertretend oder vererbbar.</p>
        <p><strong>Ende der Mitgliedschaft:</strong></p>
        <p>Die Mitgliedschaft endet mit dem Tod, Austritt oder Ausschluss eines Mitgliedes.</p>
        <p>Der Austritt eines Mitgliedes muss mit einer Frist von 4 Wochen vor Ablauf des Geschäftsjahres dem Vorstand schriftlich mitgeteilt werden.</p>
        <p>Vor Ausschluss eines Mitgliedes ist der oder dem Betroffenen auf Wunsch eine Anhörung in der Mitgliederversammlung zu gewähren.</p>
        <p>
          Nach der Anhörung bzw. bei Verzicht auf die Anhörung kann der Ausschluss durch den Vorstand durch einstimmigen Beschluss vollzogen werden. Der
          Vorstandsbeschluss muss dem betroffenen Mitglied mit einer Begründung schriftlich mitgeteilt werden.
        </p>
        <p>Gründe für einen Ausschluss können u.a. sein:</p>
        <ul>
          <li>negative Äußerungen über die Arbeit des Vereins in der Öffentlichkeit,</li>
          <li>Aussagen die in Gegensatz zu den erklärten Vereinszielen stehen,</li>
          <li>menschenverachtende und rassistische Lebenseinstellung und Äußerungen.</li>
          <li>Nichterreichbarkeit eines Mitgliedes über einen längeren Zeitraum (mind. 6 Monate).</li>
        </ul>

        <h3 id="p5">§5 Vereinsorgane</h3>
        <p>Der Verein besitzt zwei Organe:</p>
        <ol>
          <li>Die Mitgliederversammlung.</li>
          <li>Den Vorstand.</li>
        </ol>

        <h3 id="p6">§6 Die Mitgliederversammlung</h3>
        <ol>
          <li>Die Mitgliederversammlung besteht aus den ordentlichen Mitgliedern des Vereins und ist dessen oberstes Beschlussorgan.</li>
          <li>
            Eine ordentliche Mitgliederversammlung muss mindestens einmal jährlich stattfinden. Sie wird vom Vorstandsvorsitzenden schriftlich elektronisch
            einberufen. Die Tagesordnung muss mit der Einladung an alle Mitglieder übersandt werden.
          </li>
          <li>
            Der Vorstand ist berechtigt, außerordentliche Mitgliederversammlungen einzuberufen, wenn es die Aufgaben des Vereins erfordern. Darüber hinaus ist eine
            außerordentliche Mitgliederversammlung abzuhalten, wenn diese unter Angabe der Gründe und einer Tagesordnung von mindestens 10% der Mitglieder gefordert
            wird.
          </li>
          <li>Die Einladung zur Mitgliederversammlung erfolgt elektronisch mit einer Frist von 14 Tagen zwischen Absendung der Einladung und Versammlungstag.</li>
          <li>Beschlussfähigkeit der Versammlung besteht bei Anwesenheit von zwei Vorstandsmitgliedern und mindestens drei weiteren Mitgliedern.</li>
          <li>Die Mitgliederversammlung beschließt über die vom Vorstand vorgeschlagenen Projekte des Vereins mit einfacher Mehrheit.</li>
          <li>Ein Mitglied kann sich durch schriftliche Vollmacht durch ein anderes Mitglied vertreten lassen.</li>
          <li>Die Mitgliederversammlung wird von vom Vorsitzenden oder seinem Stellvertreter geleitet.</li>
          <li>Der Verlauf und alle Beschlüsse der Mitgliederversammlung werden von einem zu wählenden Protokollführer protokolliert.</li>
          <li>
            Die Aufgaben der Mitgliederversammlung sind:
            <ul>
              <li>Wahl des Protokollführers</li>
              <li>Entgegennahme des Vorstandsberichtes</li>
              <li>Entgegennahme des Finanzberichtes</li>
            </ul>
          </li>
          <li>
            Die Mitgliederversammlung ist für folgende Beschlussfassungen zuständig:
            <ul>
              <li>Entlastung des Vorstandes</li>
              <li>Entlastung des Kassenwartes</li>
              <li>Genehmigung des Haushaltplanes</li>
              <li>
                Wahl des Vorstandes: Der Vorstand wird in offener Abstimmung mit einfacher Mehrheit gewählt. Die Wahl gilt für jeweils 2 Jahre. Wiederwahl ist
                zulässig.
              </li>
              <li>Änderungen der Vereinsatzung: Hierfür ist eine 2/3 Mehrheit der anwesenden Mitglieder erforderlich.</li>
              <li>Festsetzung der Mitgliedsbeiträge</li>
              <li>Beschlussfassung bei Ablehnung oder Ausschluss von Mitgliedern</li>
              <li>Auflösung des Vereins</li>
            </ul>
          </li>
        </ol>

        <h3 id="p7">§7 Der Vorstand</h3>
        <ol>
          <li>Der Vorstand besteht aus einem(r) Vorsitzenden, seinem(r) Stellvertreter(in) und dem(r) Schatzmeister(in).</li>
          <li>Der Vorstand führt die laufenden Geschäfte des Vereins.</li>
          <li>
            Zu diesem Zwecke werden nach Bedarf Vorstandssitzungen abgehalten, um die entsprechenden Entscheidungen und Beschlüsse zu treffen. Die Sitzungen und die
            Beschlussfassungen finden virtuell statt und werden grundsätzlich protokolliert.
          </li>
          <li>
            Der Vorstand ist beschlussfähig, wenn 2/3 seiner Mitglieder anwesend sind. Bei vollständiger Anwesenheit des Vorstandes können Beschlüsse des Vorstandes
            mit einfacher Mehrheit, bei 2/3 Anwesenheit nur einstimmig gefasst werden.
          </li>
          <li>Der Verein wird gerichtlich und außergerichtlich von zwei Vorstandsmitgliedern gemeinsam vertreten.</li>
        </ol>

        <h3 id="p8">§8 Finanzierung des Vereins</h3>
        <p>Der Verein finanziert sich durch:</p>
        <ol>
          <li>Beiträge der ordentlichen Mitglieder. Die Höhe und Fälligkeit der Mindestbeiträge beschließt die Mitgliederversammlung.</li>
          <li>Beiträge der Fördermitglieder. Diese bestimmen bei Eintritt in den Verein die Höhe ihrer finanziellen Unterstützung nach eigenem Ermessen.</li>
          <li>Zuschüsse, Geld- und Sachspenden sowie sonstige Zuwendungen.</li>
        </ol>

        <h3 id="p9">§9 Auflösung</h3>
        <ol>
          <li>
            Die Auflösung des Vereins kann nur in einer ausschließlich zu diesem Zwecke einberufenen Mitgliederversammlung mit einer Mehrheit von ¾ der erschienenen
            Mitglieder erfolgen.
          </li>
          <li>
            Bei Auflösung oder Aufhebung des Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen des Vereins an die gemeinnützige Organisation
            „Terre des hommes Deutschland e. V.; Ruppenkampstraße 11a, Postfach 4126, 49031 Osnabrück“, die es unmittelbar und ausschließlich für gemeinnützige,
            mildtätige oder kirchliche Zwecke zu verwenden hat. Terre des hommes ist durch die Steuernummer 66/270/01407 als gemeinnütziger Verein anerkannt und von
            der Körperschaftssteuer befreit.
          </li>
          <li>
            Beschlüsse über die Verwendung des verbleibenden Vermögens dürfen erst nach Einwilligung des Finanzamtes ausgeführt werden. Auch diese Beschlüsse
            bedürfen darüber hinaus einer Mehrheit von 2/3 der abgegebenen Stimmen der Mitgliederversammlung.
          </li>
        </ol>

        <p class="signature">Konstanz und Wiesbaden, den 18. Februar 2024</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.satzung {
  display: grid;
  gap: var(--cui-space-6);
}

@media (min-width: 1000px) {
  .satzung {
    grid-template-columns: 26rem minmax(0, 1fr);
    align-items: start;
  }

  .toc {
    position: sticky;
    top: 10rem;
  }
}

.toc {
  padding: var(--cui-space-5);
  background: var(--ams-paper);
  border: 1px solid var(--ams-line);
  border-radius: var(--cui-radius-lg);
}

.toc__title {
  margin-bottom: var(--cui-space-3);
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ams-red-dark);
}

.toc ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--cui-space-2);
}

.toc a {
  font-size: 1.5rem;
  color: var(--cui-text);
  text-decoration: none;
}

.toc a:hover {
  color: var(--ams-red-dark);
  text-decoration: underline;
}

.doc-title {
  font-size: var(--cui-fz-h3);
}

.ams-prose h3 {
  scroll-margin-top: 10rem;
  padding-top: var(--cui-space-4);
  border-top: 1px solid var(--ams-line);
}

.signature {
  margin-top: var(--cui-space-6);
  font-style: italic;
  color: var(--cui-text-muted);
}
</style>
