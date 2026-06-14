import type { CampsiteConfig } from "../types";

const IMG = "/campsites/wohnmobilstellplatz-leogang";

const wohnmobilstellplatzLeogang: CampsiteConfig = {
  name: "Camperplatzl Leogang",
  shortName: "Camperplatzl",
  slug: "wohnmobilstellplatz-leogang",
  ort: "Leogang",
  region: "Salzburger Land",
  brandKind: "Wohnmobilstellplatz am Bauernhof",
  regionLong: "Pinzgau · Salzburger Land · Österreich",

  heroVariant: "center",

  claim: "Fünf Plätze vor den Leoganger Steinbergen",
  claimEmphasis: "Leoganger Steinbergen",
  intro:
    "Auf dem Pöchtlhof in Leogang warten nur fünf all-inclusive Stellplätze auf dich — eingezäunt, mit Strom und WLAN, und vor dem Vorzelt das Panorama der Leoganger Steinberge und des Steinernen Meeres.",

  logo: { src: `${IMG}/logo-d1b65bacea.png`, alt: "Camperplatzl Leogang Logo" },

  statement: {
    text: "Hier stehst du nicht in Reihe drei, sondern mit fünf Plätzen mitten in der Bergwiese.",
    emphasis: "fünf Plätzen",
  },

  pillars: [
    {
      title: "Nur fünf Plätze",
      text: "Fünf all-inclusive Stellplätze in der ruhigen Hofwiese — viel Platz, viel Abstand und ein freier Blick auf die Berge.",
      image: { src: `${IMG}/amenity-006745feb7.webp`, alt: "Eingezäunte Stellplätze am Camperplatzl mit Blick auf die Leoganger Steinberge" },
    },
    {
      title: "Dein Bergpanorama",
      text: "Umringt von Bergen, darüber der blaue Himmel: der Blick auf die Leoganger Steinberge und das Steinerne Meer gehört zum Platz dazu.",
      image: { src: `${IMG}/amenity-69707fc43b.webp`, alt: "Panoramablick auf die Leoganger Steinberge vom Camperplatzl" },
    },
    {
      title: "Sanitär in der Stube",
      text: "Geheizter Sanitärbereich im Bauernhaus, liebevoll mit Altholz und Naturstein gestaltet — Kalt- und Warmwasser inklusive.",
      image: { src: `${IMG}/amenity-e8679a8d0a.webp`, alt: "Waschtische aus Naturstein im geheizten Sanitärbereich des Camperplatzl" },
    },
  ],

  usps: [
    "Nur 5 Stellplätze",
    "70–100 m² pro Platz",
    "Strom, TV & WLAN",
    "Hunde erlaubt",
    "Leogang Card gratis",
    "Ganzjährig geöffnet",
  ],

  trust: {
    heading: "Darauf ist am Camperplatzl Verlass",
    headingEmphasis: "Verlass",
    intro:
      "Michael und Bettina empfangen dich persönlich am Pöchtlhof: fünf gepflegte All-inclusive-Plätze, ein geheizter Sanitärbereich in der Bauernstube und die Saalfelden Leogang Card gratis dazu.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/amenity-152d1d366f.webp`, alt: "Sonnenterrasse des Pöchtlhofs in Leogang mit Bergblick und Blumenschmuck" },
  },

  breather: {
    image: { src: `${IMG}/amenity-435bdcd6b1.webp`, alt: "Winterliche Landschaft rund um Leogang im Salzburger Land" },
    line: "Vier Jahreszeiten — und der Bauernherbst als fünfte.",
  },

  camping: {
    heading: "Camping am Pöchtlhof",
    intro:
      "Fünf eingezäunte Parzellen mit 70–100 m², Strom, TV-Anschluss und WLAN — dazu ein geheizter Sanitärbereich im Bauernhaus. Alles inklusive, alles nah.",
    features: [
      {
        title: "Eingezäunte Parzellen",
        text: "Jeder der fünf Plätze ist einzeln eingezäunt und liegt in der Hofwiese — viel Abstand zum Nachbarn inklusive.",
        image: { src: `${IMG}/amenity-9c83c413a3.webp`, alt: "Eingezäunte Stellplätze mit Stromsäulen am Camperplatzl in Leogang" },
      },
      {
        title: "Geheizte Duschen & WC",
        text: "Im geheizten Sanitärbereich gibt es Dusche, Waschtisch und WC für Damen und Herren — Warmwasser ist im Preis dabei.",
        image: { src: `${IMG}/amenity-6923a581a4.webp`, alt: "Geheizte Dusche im Sanitärbereich des Camperplatzl Leogang" },
      },
      {
        title: "Strom, TV & WLAN am Platz",
        text: "Jede Parzelle hat 12-Ampere-Strom, TV-Anschluss, Brauchwasser und kostenloses WLAN — alles sofort verfügbar.",
        image: { src: `${IMG}/amenity-6bf33b2012.webp`, alt: "Hölzerne Stromsäule mit Anschluss an einer Parzelle am Camperplatzl" },
      },
      {
        title: "Liegewiese mit Panorama",
        text: "Die Liegewiese mit Blick auf die Leoganger Steinberge lädt zum Energietanken ein — ein Kraftplatz für Körper und Geist.",
        image: { src: `${IMG}/amenity-9a172052a4.webp`, alt: "Liegewiese mit Panoramablick über das Tal von Leogang" },
      },
      {
        title: "Bad Stube im Bauernhof",
        text: "Der Sanitärbereich liegt 40 Meter von den Parzellen entfernt — Grauwasser, Chemie-WC und Müll entsorgst du kostenlos.",
        image: { src: `${IMG}/amenity-e81dc5db2b.webp`, alt: "Eingang zur Bad Stube im Bauernhaus des Camperplatzl" },
      },
      {
        title: "Ruhige Alleinlage",
        text: "Am Ortsrand von Leogang verbringst du ruhige, windgeschützte Nächte — das Ortszentrum liegt rund zehn Gehminuten entfernt.",
        image: { src: `${IMG}/amenity-5b6ade849c.webp`, alt: "Ruhige Zufahrt zum Camperplatzl mit Bergpanorama" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Leogang vor der Tür",
    intro:
      "Bikepark, Wanderwege, Sommerrodelbahn und der Skicircus liegen direkt vor dem Platz — mit der gratis Saalfelden Leogang Card oft zum Nulltarif.",
    items: [
      {
        title: "Epic Bikepark Leogang",
        text: "Den weltbekannten Bikepark und unzählige MTB-Touren erreichst du direkt mit dem Rad — der Skicircus-Einstieg ist 2,5 km entfernt.",
        image: { src: `${IMG}/activity-cc5291f6cb.webp`, alt: "Mountainbiker auf einer Bergtour in der Region Saalfelden Leogang" },
      },
      {
        title: "Wandern in den Steinbergen",
        text: "Rund um Leogang starten unzählige Wanderwege — zur nächsten Alm mit regionalen Schmankerln sind es rund 30 Gehminuten.",
        image: { src: `${IMG}/activity-45da7fb0f9.webp`, alt: "Familie beim Wandern mit Bergblick in der Region Leogang" },
      },
      {
        title: "Sommerrodeln am Biberg",
        text: "Mit der Leogang Card fährst du gratis zur Sommerrodelbahn, auf die Berge und in die Erlebnisbäder.",
        image: { src: `${IMG}/amenity-6d6218b71d.webp`, alt: "Sommerrodelbahn am Biberg in der Region Saalfelden Leogang" },
      },
      {
        title: "Kräuter & Bauernherbst",
        text: "Der Bauernherbst von Ende August bis November bringt Almabtriebe, Handwerk und Kräuterworkshops in die Region.",
        image: { src: `${IMG}/amenity-f804f7f966.webp`, alt: "Kräuterworkshop im Freien in der Region Leogang" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt zum Pöchtlhof",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 bis Bischofshofen, dann auf B311 und B164 nach Saalfelden — Leogang und der Pöchtlhof in Hirnreit liegen nur 4 km weiter.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Leogang-Steinberge an der Linie Salzburg–Innsbruck liegt wenige Fahrminuten entfernt — Abholung nach Absprache.",
      },
      {
        title: "Flughafen Salzburg",
        text: "Vom Flughafen Salzburg bist du in rund einer Fahrstunde am Camperplatzl.",
      },
    ],
  },

  galerie: {
    heading: "Camperplatzl in Bildern",
    headingEmphasis: "Bildern",
    intro:
      "Stellplätze, Bergblick und handgemachte Details — ein paar Eindrücke vom Camperplatzl in Leogang.",
    tag: "Sommer in Leogang",
    moreCount: 20,
    images: [
      { src: `${IMG}/amenity-e84c261ce7.webp`, alt: "Stellplätze mit Blick auf das Steinerne Meer am Camperplatzl" },
      { src: `${IMG}/amenity-29264cbce1.webp`, alt: "Zufahrt zum Camperplatzl mit Findling und Bergpanorama" },
      { src: `${IMG}/amenity-6e4e9e698b.webp`, alt: "Handgeschnitztes Bad-Stube-Schild des Camperplatzl Leogang" },
      { src: `${IMG}/amenity-c991400fd5.webp`, alt: "Geräumige Holzkabinen mit geschnitztem Herz im Sanitärbereich des Camperplatzl" },
    ],
  },

  booking: {
    heading: "Sichere dir einen der fünf Plätze",
    headingEmphasis: "fünf Plätze",
    intro:
      "Sag uns Zeitraum, Fahrzeug und Personenzahl — Michael und Bettina melden sich persönlich mit deinem unverbindlichen Angebot.",
    pricesArePlaceholder: false,
    priceNote:
      "Preis 2025: € 60–100 pro Nacht je nach Fahrzeug und Personenzahl — all inclusive inkl. Saalfelden Leogang Card. Nur mit Voranmeldung. Juli–August Mindestaufenthalt 7 Nächte.",
    highlight: {
      title: "All inclusive",
      text: "Bergfahrten, Erlebnisbäder, Sauna und die Saalfelden Leogang Card sind im Preis dabei.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz all inclusive", perNight: 60 },
    ],
  },

  kontakt: {
    coords: { lat: 47.436633, lng: 12.768538 },
    tel: "+43 650 97 81 117",
    telHref: "tel:+436509781117",
    mail: "info@wohnmobilstellplatz-leogang.com",
    adresse: "Hirnreit 9 · 5771 Leogang · Salzburg",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Stellplatz",
      href: "#camping",
      children: [
        { label: "Ausstattung", href: "#camping" },
        { label: "Sanitär", href: "#camping" },
      ],
    },
    { label: "Region", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anfahrt",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default wohnmobilstellplatzLeogang;
