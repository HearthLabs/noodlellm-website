import type { Strings } from "./en";

export const es: Strings = {
  meta: {
    tagline: "IA privada en tu propio ordenador",
    description:
      "Una aplicación de escritorio que ejecuta modelos de IA en tu propio ordenador. Comprueba qué puede ejecutar de verdad tu equipo, se instala con un clic y nunca envía tus conversaciones a ninguna parte.",
    pricingTitle: "Precios",
    pricingDescription: (app) =>
      `Lo que cuesta ${app}: 14 días para probarlo y después una suscripción. Precio de fundador para los 100 primeros.`,
    catalogTitle: "Catálogo de modelos",
    catalogDescription: (app) => `Todos los modelos de IA que puede instalar en ${app}, para qué sirve cada uno y cuánta memoria necesita.`,
  },

  nav: {
    pricing: "Precios",
    catalog: "Catálogo",
    download: "Descargar",
    language: "Idioma",
    alsoIn: (language) => `Esta página también está en ${language}.`,
    switchTo: (language) => `Leerla en ${language}`,
    dismiss: "No, gracias",
    smartscreen: "Puede que Windows te avise la primera vez. Haz clic en Más información y luego en Ejecutar de todas formas.",
  },

  footer: {
    blurb: (tagline) => `${tagline}. Los modelos funcionan en tu equipo, no en nuestra nube.`,
    product: "Producto",
    legal: "Legal",
    pricing: "Precios",
    catalog: "Catálogo",
    privacy: "Privacidad",
    terms: "Condiciones",
    rights: (year, company) => `© ${year} ${company}`,
  },

  home: {
    heroBadge: "100 % en tu ordenador · Funciona sin internet",
    heroTitle: "IA privada que vive en tu ordenador, no en la nube.",
    heroBody: (app) =>
      `Redacta correos, resume informes y haz preguntas sobre tus documentos confidenciales, sin subir ni una sola palabra a los servidores de otros. ${app} comprueba qué puede ejecutar tu ordenador, se instala con un clic y nunca limita cuánto lo usas.`,
    download: "Descargar para Windows",
    macSoon: "Mac: próximamente",
    trial: "Gratis durante 14 días (sin tarjeta), luego",
    fromPrice: "8 $ al mes",
    requires: "Para Windows 10 u 11. Elige automáticamente el mejor modelo de IA para tu equipo.",
    installHelp: "¿Lo abres por primera vez? Cómo pasar el aviso de seguridad de Windows →",

    preview: [
      {
        tab: "Tienda de modelos",
        title: "Elige automáticamente la IA adecuada para tu ordenador",
        body: (app) =>
          `${app} comprueba la memoria y la tarjeta gráfica de tu ordenador, marca los modelos que caben con una etiqueta verde de «Va genial» y los instala con un clic.`,
        alt: (app) => `La tienda de ${app} con tres modelos marcados como «Va genial» en este ordenador`,
      },
      {
        tab: "Chat privado",
        title: "Escribe a partir de tus archivos, en tu propio escritorio",
        body: (app) =>
          `Pide una respuesta y ${app} la redacta a partir de tus propios documentos, indicando de qué archivo sale cada parte. Cada palabra se escribe en tu ordenador y no se envía nada a ningún sitio.`,
        alt: (app) =>
          `Un chat en ${app} que redacta una respuesta a una clienta a partir de las facturas y la carta de encargo del usuario`,
      },
      {
        tab: "Pregunta a tus archivos",
        title: "Haz preguntas sobre tus propios documentos",
        body: (app) =>
          `Haz clic en «Añadir una carpeta» y ${app} lee una vez los documentos que contiene, aquí en tu ordenador. Nunca se suben ni se modifican.`,
        alt: (app) => `La sección «Documentos que puede leer» de ${app}, con su botón Añadir una carpeta`,
      },
    ],

    individualTitle: "Lo que hace por ti",
    individualIntro: "Hecho para escribir, leer y hacer gestiones del día a día, sin necesidad de ser informático.",
    soon: "Próximamente",
    individual: [
      {
        t: "Responde a partir de tus archivos",
        b: "Haz clic en «Añadir una carpeta» para que Noodle mire dentro de tus documentos de Word, PDF, hojas de cálculo, presentaciones o notas. Antes de empezar te dice qué hay dentro y cuánto tardará más o menos en leerlo, y cada respuesta indica el archivo del que salió.",
      },
      {
        t: "Recuerda quién eres",
        b: "Cuéntale una vez a qué te dedicas y cómo te gusta que se escriban las cosas, y cada chat nuevo empieza desde ahí. La memoria de Noodle es algo que puedes leer, editar o borrar cuando quieras.",
      },
      {
        t: "Botones de un clic para tareas rutinarias",
        b: "Guarda las tareas que repites, como responder consultas o convertir notas sueltas en un acta. Pega tu texto y pulsa Ejecutar. Incluye seis tareas listas que puedes adaptar con tus propios ejemplos.",
      },
      {
        t: "No pierde el hilo de los proyectos largos",
        b: "En las conversaciones largas, otras herramientas olvidan lo que acordasteis al principio. Noodle condensa en silencio los mensajes anteriores en un resumen continuo, que puedes leer cuando quieras, para que los nombres, las cifras y las decisiones no se pierdan.",
      },
      {
        t: "Sigue desde el móvil",
        b: "Escanea un código una vez para vincular tu móvil por la wifi de casa. Sigue tus chats y busca en los archivos de tu ordenador desde el sofá, con todo cifrado directamente entre el móvil y tu escritorio.",
      },
      {
        t: "Aprende tu forma de escribir",
        b: "Dale una carpeta con tus correos o artículos antiguos y aprende a escribir con tu tono natural, avisándote antes si se mezclan textos de otras personas. (Requiere Windows con gráfica NVIDIA).",
        soon: true,
      },
    ],

    whyTitle: "Por qué usarlo en tu propio ordenador",
    whyIntro: "La IA en la nube como ChatGPT es genial para investigar temas públicos o programar a fondo. Noodle está hecho para el trabajo que nunca pegarías en una web pública: contratos de clientes, hojas de cálculo financieras, cartas médicas y notas personales.",
    why: [
      {
        t: "Tus archivos no salen de la habitación.",
        b: "Nunca se sube nada de lo que escribes o abres. No hay nada que filtrar, ninguna empresa entrena con tus documentos y no tienes que fiarte de la política de privacidad de nadie.",
      },
      {
        t: "Nunca te cortan a mitad de proyecto.",
        b: "Escribir bien exige reformular y reintentar. Los servicios en la nube te limitan o te bloquean tras unas pocas docenas de mensajes. En tu propio ordenador, el intento número cien es tan libre como el primero.",
      },
      {
        t: "Lo bastante lista para el 90 % del trabajo diario.",
        b: "No necesitas un enorme centro de datos para redactar una carta, resumir un PDF de 40 páginas o encontrar una cláusula en un contrato. Los modelos compactos de hoy resuelven bien el trabajo diario.",
      },
      {
        t: "Ellos ponen las reglas. Tú te aguantas.",
        b: "Las empresas de IA en la nube deciden el precio, los límites y qué modelo te toca, y lo cambian cuando les conviene. En tu ordenador nada cambia a menos que lo cambies tú.",
      },
      {
        t: "No alquilas un modelo. El ordenador es tuyo.",
        b: "Un modelo es solo un archivo. Cuando sale uno mejor, lo descargas: el mismo ordenador, sin contrato nuevo. El que tienes nunca cambia ni desaparece a menos que tú lo decidas.",
      },
      {
        t: "Cada año cabe más en tu PC.",
        b: "Hace unos años un ordenador doméstico apenas podía ejecutar nada útil. Hoy una tarjeta gráfica normal ejecuta modelos que resuelven casi todo el trabajo diario, y cada nueva versión hace que más tareas crucen esa línea.",
      },
    ],
  },


  subscribeSuccess: {
    title: "Ya estás suscrito",
    body: "Vuelve a Noodle LLM: añade tu suscripción por sí solo en unos segundos. Si al cabo de un minuto no lo ha hecho, abre Ajustes, luego Cuenta, y elige «¿Ya estás suscrito? Usa el correo con el que pagaste».",
    manageBody: "Para actualizar tu tarjeta o cancelar más adelante, usa Gestionar suscripción en la sección Cuenta de la aplicación.",
    backHome: "Volver al inicio",
  },
  pricing: {
    tryItButton: "Descargar",
    title: "Lo que cuesta",
    // es-ES leaves 2000 ungrouped; the de-DE form gives the "2.000" Spanish prices use.
    money: (n) => `${n.toLocaleString("de-DE")} $`,
    lead: "Catorce días para probarlo todo y después una suscripción. Los modelos son gratis: descárgalos desde la aplicación o pon los que ya tengas en la carpeta de modelos de la aplicación. La suscripción es por la aplicación, sin cargos por mensaje.",
    lifetime: (p: string) => `o ${p} una sola vez, tuyo para siempre`,
    yearly: (p: string, save: string) => `o ${p} al año, ahorras ${save}`,
    plans: [
      {
        name: "Pruébalo",
        price: "Gratis",
        per: "durante 14 días",
        blurb: "Todo, durante 14 días. Sin tarjeta.",
        points: ["Termina a los 14 días"],
      },
      {
        name: "Miembro fundador",
        price: "",
        per: "al mes",
        blurb: "El plan Particulares a precio de fundador, fijo mientras sigas suscrito.",
        points: ["Una persona", "Hasta 2 ordenadores", "Solo los 100 primeros"],
      },
      {
        name: "Particulares",
        price: "",
        per: "al mes",
        blurb: "Para una persona en sus propios ordenadores.",
        points: ["Una persona", "Hasta 2 ordenadores"],
      },
      {
        name: "Despachos",
        price: "",
        per: "al mes",
        blurb: "Para un despacho de abogados, una clínica o una asesoría.",
        points: ["Una oficina", "Hasta 15 ordenadores"],
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      ["¿Hay un límite de uso?", "No. Funciona en tu propio ordenador, así que no se cobra por mensaje ni hay tope diario. Úsalo todo lo que quieras."],
      ["¿Os llega algo de lo que escribo?", "No. Tus preguntas, respuestas y archivos nunca salen de tu ordenador. La aplicación solo se conecta para descargar modelos y comprobar tu suscripción."],
      ["¿Qué pasa después de los 14 días?", "La aplicación se pausa hasta que te suscribas. Tus modelos y conversaciones se quedan en tu ordenador y no se borra nada."],
      ["¿Puedo usarlo en más de un ordenador?", "Sí, en hasta 2 de tus ordenadores. En uno nuevo, abre Cuenta y usa el correo con el que pagaste; te enviamos un código de 6 dígitos. Al llegar al límite, la aplicación muestra tus ordenadores para que cierres la sesión en uno. Un ordenador que no se usa durante 60 días libera su plaza solo."],
      ["¿Funciona sin conexión?", "Sí. Tu licencia se comprueba en tu ordenador, sin internet. Se renueva sola cuando estás conectado, así que solo un ordenador que pase más de unos 35 días sin conexión tendrá que conectarse una vez."],
      ["¿Subirán mis 8 $ más adelante?", "Para los 100 primeros miembros, se mantienen los 8 $ al mes mientras sigan suscritos, aunque suba el precio para los nuevos miembros. O paga 100 $ una sola vez por una licencia de por vida y no vuelvas a pagar."],
      ["¿Puedo cancelar?", "Sí, cuando quieras, desde la sección Cuenta de la aplicación."],
      ["Somos un despacho. ¿Necesitamos una suscripción cada uno?", "No. El plan Despachos cubre hasta 15 ordenadores de una oficina por un solo precio."],
    ],
    ctaDownload: "Descárgalo y empieza los 14 días",
  },

  catalog: {
    title: "Catálogo de modelos",
    lead: "Todos los modelos que puede instalar desde la tienda de la aplicación. Todos funcionan por completo en su ordenador. La aplicación comprueba cuáles puede ejecutar su equipo antes de que descargue nada.",
    by: (creator) => `de ${creator}`,
    size: "Tamaño de descarga",
    ram: "Memoria necesaria",
    gb: (n) => `${n} GB`,
    gbRange: (a, b) => `${a}–${b} GB`,
    ramAtLeast: (n) => `${n} GB o más`,
    vision: "Puede leer imágenes y capturas de pantalla",
    note: "Los tamaños van de la versión más pequeña a la más precisa de cada modelo; la aplicación elige la que mejor se adapta a su ordenador. La memoria corresponde a la versión más pequeña. Una tarjeta gráfica los hace más rápidos, pero no es necesaria.",
    cta: "Descargar la aplicación",
  },

  notFound: {
    title: "Página no encontrada",
    body: "Ese enlace no lleva a ningún sitio que reconozcamos.",
    browse: "Ir a la página de inicio",
  },

};
