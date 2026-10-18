/**
 * Every word the site shows, in English. The other four languages are typed against this,
 * so a page cannot build with a sentence missing in one of them.
 *
 * Written for someone who has never heard of a quantization: bookkeepers and solicitors
 * rather than developers. Raw values stay on the model pages, and even there are explained.
 */

export const en = {
  meta: {
    tagline: "Run AI on your own machine",
    description:
      "A desktop app that runs AI models on your own computer. It checks what your machine can actually run, installs in one click, and never sends your conversations anywhere.",
    pricingTitle: "Pricing",
    pricingDescription: (app: string) =>
      `What ${app} costs: 14 days to try it, then a subscription. Founding rate for the first 100.`,
  },

  nav: {
    pricing: "Pricing",
    download: "Download",
    language: "Language",
    alsoIn: (language: string) => `This page is also in ${language}.`,
    switchTo: (language: string) => `Read it in ${language}`,
    dismiss: "No thanks",
    smartscreen: "Windows may warn you the first time. Click More info, then Run anyway.",
    gatekeeper: "Your Mac may refuse the first time. Open System Settings, then Privacy & Security, and click Open Anyway.",
  },

  footer: {
    blurb: (tagline: string) => `${tagline}. Models run on your machine, not in our cloud.`,
    product: "Product",
    legal: "Legal",
    pricing: "Pricing",
    privacy: "Privacy",
    terms: "Terms",
    rights: (year: number, company: string) => `© ${year} ${company}`,
  },

  home: {
    heroTitle: "Private, offline, no usage limits. This local AI is only yours.",
    heroBody: (app: string) =>
      `${app} runs AI models on your own computer instead of someone else's servers. Nothing you type leaves your machine, it keeps working with the internet off, and there is no meter on how much you use it. Write with it, summarise with it, and ask it about your own documents.`,
    download: "Download for Windows",
    downloadMac: "Download for Mac",
    requires: "Windows 10 or 11, or a Mac with Apple Silicon (M1 or newer). Best with a graphics card with 6 GB or more; without one it still runs, slowly.",
    trial: "14 days to try it, then",
    fromPrice: "from $8 a month",

    whyTitle: "Why run it yourself",
    whyIntro: "The cloud is smarter, but that was never the debate. Use both. Keep a cloud AI such as ChatGPT for complex problems. Do the everyday, private and repetitive tasks here: drafting a letter, summarising a report, finding the clause in a contract.",
    why: [
      {
        t: "They set the terms. You live with them.",
        b: "Cloud AI companies decide the price, the limits and which model you get, and change them when it suits them. On your computer nothing changes unless you change it.",
      },
      {
        t: "Clever enough is a line, not a ranking.",
        b: "Some jobs need the cleverest model there is. Most do not: drafting a letter, summarising a report, finding the clause in a contract. Once a model clears the bar for the job, being cleverer stops mattering, and what matters is cost, privacy and who is in charge.",
      },
      {
        t: "Try again as often as you like.",
        b: "Good results come from rewording, retrying and refining. When you pay for every attempt, you hold back. On your own computer the tenth try costs the same as the first: nothing extra.",
      },
      {
        t: "Your files never leave the room.",
        b: "Nothing you type or open is uploaded, so there is nothing to leak and nobody else's privacy policy to trust. Once a model is installed it does not need the internet at all.",
      },
      {
        t: "You are not renting a model. You own the machine.",
        b: "A model is just a file. When a better one comes out, download it: same computer, no new contract. The one you have never changes or disappears unless you decide it should.",
      },
      {
        t: "Every year, more of it fits on your PC.",
        b: "A few years ago a home computer could run little that was useful. Today an ordinary graphics card runs models that handle most everyday work, and every new release moves more across the line.",
      },
    ],

    shotTitle: "It writes like you, from your own files",
    shotBody: "Turn on your files and a skill you taught it, and it drafts the reply the way you would, naming the documents each part came from. The model, the skill and your files never leave your computer.",
    shotAlt: (app: string) => `A chat in ${app} drafting a reply to a client from the user's own invoices and engagement letter, with the skill “My writing style” switched on`,

    individualTitle: "What it does for you",
    individualIntro: "The app speaks English, German, Spanish, Japanese and Chinese, and most models answer in whichever language you write in.",
    individual: [
      {
        t: "It reads your own files",
        b: "Point it at a folder of Word documents, PDFs, spreadsheets, slides or notes and ask about them. Before reading, it tells you how long it will take and which files it has to skip, and every answer names the file it came from.",
      },
      {
        t: "It remembers you",
        b: "Tell it once who you are and how you like answers written, and every conversation starts from there. It is a box you can read, edit and empty, and starting a message with \"remember:\" adds to it.",
      },
      {
        t: "Long conversations do not fall apart",
        b: "When a chat grows longer than the model can hold, it condenses the earlier messages into a summary instead of forgetting them, so names, figures and decisions from the start still count. You can read that summary at any time.",
      },
      {
        t: "Tasks for jobs you repeat",
        b: "Save a job you do often, like answering an email or turning notes into minutes, with its own instructions. Then paste in what you have and press Run. Six ready-made tasks are there to start from, and each one can be taught from examples of your own: what went in and the result you kept.",
      },
      {
        t: "Teach it your style",
        b: "Give it folders or files of your own writing and it learns to sound like you. It reads them first and warns you if they mix other people's writing in. Every task then runs in your style, and switching to another model teaches it your style again on its own. Teaching needs a Windows PC with an NVIDIA graphics card, and arrives in an update soon.",
      },
      {
        t: "Use it from your phone",
        b: "Pair your phone once by scanning a code, then carry on your conversations from the sofa or the next room, with your files included. It works through Wi-Fi and everything is encrypted between the two, so nothing gets out.",
      },
    ],

  },


  subscribeSuccess: {
    title: "You're subscribed",
    body: "Go back to Noodle LLM: it adds your subscription on its own within a few seconds. If it has not after a minute, open Settings, then Account, and choose “Already subscribed? Use the email you paid with”.",
    manageBody: "To update your card or cancel later, use Manage subscription in the app's Account section.",
    backHome: "Back to the homepage",
  },
  pricing: {
    tryItButton: "Download",
    title: "What it costs",
    money: (n: number) => `$${n.toLocaleString("en-US")}`,
    lead: "Fourteen days to try everything, then a subscription. The models themselves are free: download them in the app, or put models you already have in the app's models folder. The subscription is for the app, with no charge per message.",
    lifetime: (p: string) => `or ${p} once, yours for life`,
    yearly: (p: string, save: string) => `or ${p} a year, save ${save}`,
    plans: [
      {
        name: "Try it",
        price: "Free",
        per: "for 14 days",
        blurb: "Everything, for 14 days. No card needed.",
        points: ["Ends after 14 days"],
      },
      {
        name: "Founding member",
        price: "",
        per: "per month",
        blurb: "The Individuals plan at a founding price, kept for as long as you stay subscribed.",
        points: ["One person", "Up to 2 computers", "First 100 members only"],
      },
      {
        name: "Individuals",
        price: "",
        per: "per month",
        blurb: "For one person on their own computers.",
        points: ["One person", "Up to 2 computers"],
      },
      {
        name: "Practices",
        price: "",
        per: "per month",
        blurb: "For a law firm, clinic or accountancy.",
        points: ["One office", "Up to 15 computers"],
      },
    ],
    faqTitle: "Common questions",
    faq: [
      ["Is there a limit on how much I can use it?", "No. It runs on your own computer, so there is no charge per message and no daily cap. Use it as much as you like."],
      ["Does anything I type get sent to you?", "No. Your questions, answers and files never leave your computer. The app only goes online to download models and check your subscription."],
      ["What happens after the 14 days?", "The app pauses until you subscribe. Your models and conversations stay on your computer, and nothing is deleted."],
      ["Can I use it on more than one computer?", "Yes, on up to 2 of your computers. On a new one, open Account and use the email you paid with; we send you a 6-digit code. At the limit, the app lists your computers so you can sign one out. A computer unused for 60 days frees its place by itself."],
      ["Does it work offline?", "Yes. Your licence is checked on your computer, without the internet. It renews itself whenever you are online, so only a computer kept offline for more than about 35 days needs to go online once."],
      ["Will my $8 go up later?", "For the first 100 members, you keep $8 a month for as long as you stay subscribed, even after the price for new members rises. Or pay $100 once for a lifetime licence and never pay again."],
      ["Can I cancel?", "Yes, at any time, from the Account section of the app."],
      ["We are a firm. Do we each need a subscription?", "No. The Practices plan covers up to 15 computers in one office for one price."],
    ],
    ctaDownload: "Download it and start the 14 days",
  },

  notFound: {
    title: "Page not found",
    body: "That link does not point anywhere we recognise.",
    browse: "Go to the homepage",
  },

};

export type Strings = typeof en;
