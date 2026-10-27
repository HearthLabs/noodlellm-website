import type { Strings } from "./en";

export const de: Strings = {
  meta: {
    tagline: "Private KI auf deinem eigenen Computer",
    description:
      "Eine Desktop-App, die KI-Modelle auf deinem eigenen Computer ausführt. Sie prüft, was dein Rechner wirklich schafft, installiert mit einem Klick und schickt deine Gespräche nirgendwohin.",
    pricingTitle: "Preise",
    pricingDescription: (app) =>
      `Was ${app} kostet: 14 Tage zum Ausprobieren, danach ein Abo. Gründerpreis für die ersten 100.`,
    catalogTitle: "Modellkatalog",
    catalogDescription: (app) => `Alle KI-Modelle, die Sie in ${app} installieren können: wofür sie gut sind und wie viel Arbeitsspeicher sie brauchen.`,
  },

  nav: {
    pricing: "Preise",
    catalog: "Katalog",
    download: "Herunterladen",
    language: "Sprache",
    alsoIn: (language) => `Diese Seite gibt es auch auf ${language}.`,
    switchTo: (language) => `Auf ${language} lesen`,
    dismiss: "Nein danke",
    smartscreen: "Windows warnt dich beim ersten Mal vielleicht. Klicke auf Weitere Informationen und dann auf Trotzdem ausführen.",
  },

  footer: {
    blurb: (tagline) => `${tagline}. Die Modelle laufen auf deinem Rechner, nicht in unserer Cloud.`,
    product: "Produkt",
    legal: "Rechtliches",
    pricing: "Preise",
    catalog: "Katalog",
    privacy: "Datenschutz",
    terms: "AGB",
    rights: (year, company) => `© ${year} ${company}`,
  },

  home: {
    heroBadge: "100 % auf deinem Computer · Funktioniert auch ohne Internet",
    heroTitle: "Private KI, die auf deinem Computer lebt, nicht in der Cloud.",
    heroBody: (app) =>
      `Entwirf E-Mails, fass Berichte zusammen und stell Fragen zu deinen vertraulichen Dokumenten – ohne ein einziges Wort auf die Server anderer hochzuladen. ${app} prüft, was dein Computer schafft, richtet sich mit einem Klick ein und begrenzt nie, wie viel du es nutzt.`,
    download: "Für Windows herunterladen",
    macSoon: "Mac: kommt bald",
    trial: "14 Tage kostenlos (keine Karte nötig), danach",
    fromPrice: "8 $ im Monat",
    requires: "Für Windows 10 oder 11. Wählt automatisch das beste KI-Modell für deine Hardware.",
    installHelp: "Zum ersten Mal geöffnet? So kommst du an der Windows-Sicherheitsabfrage vorbei →",

    preview: [
      {
        tab: "Ein-Klick-Installation",
        title: "Ein Modell mit einem Klick installieren",
        body: (app) =>
          `Nichts einzurichten, keine Einstellungen zu lernen. Wähl ein Modell, sieh, ob es auf deinem Computer gut läuft, und klick auf Installieren: ${app} lädt die richtige Version für deine Hardware herunter, bereit zum Chatten.`,
        alt: (app) =>
          `Der Store von ${app} mit drei Modellen, die auf diesem Computer als „Läuft super“ markiert sind`,
      },
      {
        tab: "Modell-Store",
        title: "Wählt automatisch die richtige KI für deinen Computer",
        body: (app) =>
          `${app} prüft Arbeitsspeicher und Grafikkarte deines Computers, markiert passende Modelle mit einem grünen „Läuft super“ und installiert sie mit einem Klick.`,
        alt: (app) =>
          `Eine Modellseite in ${app} mit „Läuft super auf deinem PC“ und einer einzigen Schaltfläche zum Installieren`,
      },
      {
        tab: "Chat mit deinen Dateien",
        title: "Es schreibt wie du, aus deinen eigenen Dateien",
        body: (app) =>
          `Schalte deine Dateien und eine Fähigkeit ein, die du ihm beigebracht hast, und es entwirft die Antwort so, wie du sie schreiben würdest, mit den Dokumenten, aus denen jeder Teil stammt. Modell, Fähigkeit und Dateien verlassen nie deinen Computer.`,
        alt: (app) =>
          `Ein Chat in ${app}, der aus den eigenen Rechnungen und dem Mandatsschreiben eine Antwort an eine Kundin entwirft, mit eingeschalteter Fähigkeit „My writing style“`,
      },
      {
        tab: "Dein Stil",
        title: "Bring ihm deinen Schreibstil bei",
        body: (app) =>
          `Gib ${app} Ordner mit deinen eigenen Texten, und es lernt, wie du zu klingen – gespeichert als Stil, den du im Chat einschaltest. Zum Beibringen brauchst du eine NVIDIA-Grafikkarte; es kommt bald mit einem Update.`,
        alt: (app) =>
          `Die Seite „Beibringen“ in ${app} mit einem Stil namens „Sam’s formal letters“ und der Schaltfläche für einen neuen Stil`,
      },
      {
        tab: "Handy-Fernbedienung",
        title: "Am Handy weitermachen",
        body: (app) =>
          `Koppel dein Handy einmal per Code-Scan und frag dann vom Sofa aus. ${app} antwortet auf deinem Computer, aus deinen eigenen Dateien, verschlüsselt über dein WLAN.`,
        alt: (app) =>
          `Die Handy-App von ${app} beantwortet eine Frage aus den Besprechungsnotizen, mit eingeschaltetem „Meine Dateien nutzen“`,
      },
    ],

    individualTitle: "Was es für dich tut",
    individualIntro: "Gemacht für alltägliches Schreiben, Lesen und Verwaltungsarbeit – ganz ohne Informatikstudium.",
    soon: "Kommt bald",
    individual: [
      {
        t: "Beantwortet Fragen aus deinen Dateien",
        b: "Klicke auf „Ordner hinzufügen“, damit Noodle in deine Word-Dokumente, PDFs, Tabellen, Präsentationen oder Notizen schauen kann. Bevor es losgeht, sagt es dir, was darin ist und wie lange das Einlesen ungefähr dauert – und jede Antwort nennt die Datei, aus der sie stammt.",
      },
      {
        t: "Merkt sich, wer du bist",
        b: "Erzähl ihm einmal von deinem Beruf und wie du Texte magst, und jeder neue Chat beginnt dort. Noodles Gedächtnis kannst du jederzeit lesen, ändern oder leeren.",
      },
      {
        t: "Ein Klick für Routinearbeit",
        b: "Speichere Aufgaben, die du immer wieder machst – etwa Anfragen beantworten oder grobe Notizen in ein Protokoll verwandeln. Text einfügen, auf Ausführen klicken. Sechs fertige Aufgaben sind dabei, die du mit eigenen Beispielen anpassen kannst.",
      },
      {
        t: "Behält lange Projekte im Blick",
        b: "In langen Gesprächen vergessen andere Werkzeuge, was am Anfang vereinbart wurde. Noodle fasst frühere Nachrichten still zu einer laufenden Zusammenfassung zusammen – die du jederzeit lesen kannst –, damit Namen, Zahlen und Entscheidungen bleiben.",
      },
      {
        t: "Am Handy weitermachen",
        b: "Scanne einmal einen Code, um dein Handy über das WLAN zu Hause zu koppeln. Führe deine Chats weiter und durchsuche die Dateien deines Computers vom Sofa aus – direkt zwischen Handy und Schreibtisch verschlüsselt.",
      },
      {
        t: "Lernt deinen persönlichen Schreibstil",
        b: "Gib ihm einen Ordner mit deinen früheren E-Mails oder Artikeln, und es lernt, in deinem natürlichen Ton zu schreiben – und warnt dich vorher, wenn Texte anderer Leute dabei sind. (Erfordert Windows mit NVIDIA-Grafik.)",
        soon: true,
      },
    ],

    whyTitle: "Warum es auf deinem eigenen Computer laufen lassen",
    whyIntro: "Cloud-KI wie ChatGPT ist großartig für öffentliche Recherche oder aufwendiges Programmieren. Noodle ist für die Arbeit gemacht, die du nie in eine öffentliche Website einfügen würdest: Mandantenverträge, Finanztabellen, ärztliche Briefe und persönliche Notizen.",
    why: [
      {
        t: "Deine Dateien verlassen nie den Raum.",
        b: "Nichts, was du tippst oder öffnest, wird je hochgeladen. Es gibt nichts, was durchsickern kann, kein Training eines Konzerns mit deinen Dokumenten und keine fremde Datenschutzerklärung, der du blind vertrauen musst.",
      },
      {
        t: "Nie mitten im Projekt ausgebremst.",
        b: "Gutes Schreiben heißt umformulieren und neu versuchen. Cloud-Dienste drosseln dich oder sperren dich nach ein paar Dutzend Nachrichten aus. Auf deinem eigenen Computer ist der hundertste Versuch so frei wie der erste.",
      },
      {
        t: "Klug genug für 90 % der täglichen Arbeit.",
        b: "Für einen Brief, die Zusammenfassung eines 40-seitigen PDFs oder eine Klausel im Vertrag brauchst du kein riesiges Rechenzentrum. Die kompakten Modelle von heute erledigen die Alltagsarbeit gut.",
      },
      {
        t: "Sie machen die Regeln. Du musst damit leben.",
        b: "Cloud-KI-Anbieter bestimmen Preis, Grenzen und welches Modell du bekommst, und ändern das, wann es ihnen passt. Auf deinem Computer ändert sich nichts, solange du es nicht änderst.",
      },
      {
        t: "Du mietest kein Modell. Der Rechner gehört dir.",
        b: "Ein Modell ist nur eine Datei. Kommt ein besseres heraus, lädst du es herunter: derselbe Computer, kein neuer Vertrag. Das Modell, das du hast, ändert sich nie und verschwindet nie, es sei denn, du entscheidest es.",
      },
      {
        t: "Jedes Jahr passt mehr auf deinen PC.",
        b: "Vor ein paar Jahren konnte ein Heimcomputer kaum etwas Nützliches ausführen. Heute läuft auf einer gewöhnlichen Grafikkarte ein Modell, das den größten Teil der Alltagsarbeit erledigt, und jede neue Veröffentlichung holt mehr über diese Linie.",
      },
    ],
  },


  subscribeSuccess: {
    title: "Du bist abonniert",
    body: "Geh zurück zu Noodle LLM: Es übernimmt dein Abo innerhalb weniger Sekunden von selbst. Falls nicht, öffne nach einer Minute Einstellungen, dann Konto, und wähle „Schon abonniert? Nutze die E-Mail, mit der du bezahlt hast“.",
    manageBody: "Um deine Karte zu aktualisieren oder später zu kündigen, nutze „Abo verwalten“ im Konto-Bereich der App.",
    backHome: "Zurück zur Startseite",
  },
  pricing: {
    tryItButton: "Herunterladen",
    title: "Was es kostet",
    money: (n) => `${n.toLocaleString("de-DE")} $`,
    lead: "Vierzehn Tage, um alles auszuprobieren, danach ein Abo. Die Modelle selbst sind kostenlos: Lade sie in der App herunter oder lege Modelle, die du schon hast, in den Modellordner der App. Das Abo ist für die App, ohne Gebühren pro Nachricht.",
    lifetime: (p: string) => `oder einmalig ${p}, für immer deins`,
    yearly: (p: string, save: string) => `oder ${p} pro Jahr, du sparst ${save}`,
    plans: [
      {
        name: "Ausprobieren",
        price: "Kostenlos",
        per: "für 14 Tage",
        blurb: "Alles, 14 Tage lang. Keine Karte nötig.",
        points: ["Endet nach 14 Tagen"],
      },
      {
        name: "Gründungsmitglied",
        price: "",
        per: "pro Monat",
        blurb: "Der Tarif für Privatpersonen zum Gründungspreis, fest, solange dein Abo läuft.",
        points: ["Eine Person", "Bis zu 2 Computer", "Nur für die ersten 100"],
      },
      {
        name: "Privatpersonen",
        price: "",
        per: "pro Monat",
        blurb: "Für eine Person auf ihren eigenen Computern.",
        points: ["Eine Person", "Bis zu 2 Computer"],
      },
      {
        name: "Kanzleien & Praxen",
        price: "",
        per: "pro Monat",
        blurb: "Für eine Kanzlei, Praxis oder Steuerberatung.",
        points: ["Ein Standort", "Bis zu 15 Computer"],
      },
    ],
    faqTitle: "Häufige Fragen",
    faq: [
      ["Gibt es eine Grenze, wie viel ich es nutzen kann?", "Nein. Es läuft auf deinem eigenen Computer, also gibt es keine Kosten pro Nachricht und kein Tageslimit. Nutze es, so viel du willst."],
      ["Wird etwas, das ich eingebe, an euch geschickt?", "Nein. Deine Fragen, Antworten und Dateien verlassen nie deinen Computer. Die App geht nur online, um Modelle herunterzuladen und dein Abo zu prüfen."],
      ["Was passiert nach den 14 Tagen?", "Die App pausiert, bis du ein Abo abschließt. Deine Modelle und Gespräche bleiben auf deinem Computer, und nichts wird gelöscht."],
      ["Kann ich es auf mehreren Computern nutzen?", "Ja, auf bis zu 2 deiner Computer. Auf einem neuen öffnest du Konto und gibst die E-Mail-Adresse an, mit der du bezahlt hast; wir schicken dir einen 6-stelligen Code. Ist das Limit erreicht, zeigt die App deine Computer, damit du einen abmelden kannst. Ein Computer, der 60 Tage nicht genutzt wird, gibt seinen Platz von selbst frei."],
      ["Funktioniert es offline?", "Ja. Deine Lizenz wird auf deinem Computer geprüft, ohne Internet. Sie erneuert sich, sobald du online bist. Nur ein Computer, der länger als etwa 35 Tage offline bleibt, muss einmal online gehen."],
      ["Steigen meine 8 $ später?", "Für die ersten 100 Mitglieder bleibt es bei 8 $ im Monat, solange das Abo läuft, auch wenn der Preis für neue Mitglieder steigt. Oder einmalig 100 $ für eine lebenslange Lizenz, danach nie wieder zahlen."],
      ["Kann ich kündigen?", "Ja, jederzeit, im Bereich Konto der App."],
      ["Wir sind eine Kanzlei. Braucht jede Person ein Abo?", "Nein. Der Tarif für Kanzleien & Praxen gilt für bis zu 15 Computer an einem Standort, zu einem Preis."],
    ],
    ctaDownload: "Herunterladen und die 14 Tage starten",
  },

  catalog: {
    title: "Modellkatalog",
    lead: "Alle Modelle, die Sie im Store der App installieren können. Jedes läuft vollständig auf Ihrem Computer. Die App prüft, welche Ihr Rechner ausführen kann, bevor Sie etwas herunterladen.",
    by: (creator) => `von ${creator}`,
    size: "Downloadgröße",
    ram: "Benötigter Arbeitsspeicher",
    gb: (n) => `${n} GB`,
    gbRange: (a, b) => `${a}–${b} GB`,
    ramAtLeast: (n) => `ab ${n} GB`,
    vision: "Kann Bilder und Screenshots lesen",
    note: "Die Größen reichen von der kleinsten bis zur genauesten Version jedes Modells; die App wählt die passende für Ihren Computer. Der Arbeitsspeicher gilt für die kleinste Version. Eine Grafikkarte macht sie schneller, ist aber nicht nötig.",
    cta: "App herunterladen",
  },

  notFound: {
    title: "Seite nicht gefunden",
    body: "Dieser Link führt nirgendwohin, das wir kennen.",
    browse: "Zur Startseite",
  },

};
