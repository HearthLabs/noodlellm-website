/**
 * Every word the site shows, in English. The other four languages are typed against this,
 * so a page cannot build with a sentence missing in one of them.
 *
 * Written for someone who has never heard of a quantization: bookkeepers and solicitors
 * rather than developers. Raw values stay on the model pages, and even there are explained.
 */

export const en = {
  meta: {
    tagline: "Private AI that runs on your own computer",
    description:
      "A desktop app that runs AI on your own computer. It checks what your machine can run, installs in one click, and never sends your files or conversations anywhere.",
    pricingTitle: "Pricing",
    pricingDescription: (app: string) =>
      `What ${app} costs: 14 days to try it, then a subscription. Founding rate for the first 100.`,
    catalogTitle: "Model catalog",
    catalogDescription: (app: string) => `Every AI model you can install in ${app}, what each is good at, and how much memory it needs.`,
  },

  nav: {
    pricing: "Pricing",
    catalog: "Catalog",
    download: "Download",
    language: "Language",
    alsoIn: (language: string) => `This page is also in ${language}.`,
    switchTo: (language: string) => `Read it in ${language}`,
    dismiss: "No thanks",
    smartscreen: "Windows may warn you the first time. Click More info, then Run anyway.",
  },

  footer: {
    blurb: (tagline: string) => `${tagline}. Models run on your machine, not in our cloud.`,
    product: "Product",
    legal: "Legal",
    pricing: "Pricing",
    catalog: "Catalog",
    privacy: "Privacy",
    terms: "Terms",
    rights: (year: number, company: string) => `© ${year} ${company}`,
  },

  home: {
    heroBadge: "100% on your computer · Works with the internet off",
    heroTitle: "Private AI that lives on your computer, not in the cloud.",
    heroBody: (app: string) =>
      `Draft emails, summarise reports, and ask questions about your confidential documents—without uploading a single word to someone else’s servers. ${app} checks what your computer can run, sets itself up in one click, and never caps how much you use it.`,
    download: "Download for Windows",
    macSoon: "Mac: coming soon",
    trial: "Free for 14 days (no card needed), then",
    fromPrice: "$8 a month",
    requires: "For Windows 10 or 11. Automatically picks the best AI model for your hardware.",
    installHelp: "First time opening? How to click past the Windows security prompt →",

    // The five screenshots under the download, one tab each, in the order of PREVIEW_SHOTS.
    preview: [
      {
        tab: "One-Click Install",
        title: "Install a model with one button",
        body: (app: string) =>
          `Nothing to set up and no settings to learn. Pick a model, see whether it runs well on your computer, and press Install: ${app} downloads the right version for your hardware, ready to chat.`,
        alt: (app: string) =>
          `A model page in ${app} saying “Runs great on your PC”, with one Install button`,
      },
      {
        tab: "Model Store",
        title: "Picks the right AI for your computer automatically",
        body: (app: string) =>
          `${app} checks your computer’s memory and graphics card, marks the models that fit with a green “Runs great” badge, and installs them in one click.`,
        alt: (app: string) =>
          `The ${app} store with three models marked “Runs great” for this computer`,
      },
      {
        tab: "Chat With Your Files",
        title: "It writes like you, from your own files",
        body: (app: string) =>
          `Turn on your files and a skill you taught it, and it drafts the reply the way you would, naming the documents each part came from. The model, the skill and your files never leave your computer.`,
        alt: (app: string) =>
          `A chat in ${app} drafting a reply to a client from the user’s own invoices and engagement letter, with the skill “My writing style” switched on`,
      },
      {
        tab: "Your Style",
        title: "Teach it your writing style",
        body: (app: string) =>
          `Give ${app} folders of your own writing and it learns to sound like you, kept as a style you switch on in Chat. Teaching needs an NVIDIA graphics card and arrives in an update soon.`,
        alt: (app: string) =>
          `The Teach page in ${app}, with a style called “Sam’s formal letters” and a Teach a new style button`,
      },
      {
        tab: "Phone Remote",
        title: "Carry on from your phone",
        body: (app: string) =>
          `Pair your phone once by scanning a code, then ask from the sofa. ${app} answers on your computer, from your own files, encrypted over your Wi-Fi.`,
        alt: (app: string) =>
          `The ${app} phone app answering a question from the user’s meeting notes, with “Use my files” switched on`,
      },
    ],

    individualTitle: "What it does for you",
    individualIntro: "Built for everyday writing, reading, and admin—without needing a degree in computer science.",
    soon: "Coming soon",
    individual: [
      {
        t: "Answers questions from your files",
        b: "Click “Add a folder” to let Noodle look inside your Word documents, PDFs, spreadsheets, slides, or notes. Before anything starts, it tells you what is inside and roughly how long reading will take—and every answer names the file it came from.",
      },
      {
        t: "Remembers who you are",
        b: "Tell it once about your job and how you like things written, and every new chat starts from there. Noodle’s Memory is something you can read, edit, or clear at any time.",
      },
      {
        t: "One-click buttons for routine jobs",
        b: "Save tasks you repeat—like replying to inquiries or turning rough notes into meeting minutes. Paste in your text and press Run. Comes with six ready-made tasks you can customise with your own examples.",
      },
      {
        t: "Keeps track of long projects",
        b: "In long conversations, other tools forget what you agreed at the start. Noodle quietly condenses earlier messages into a running summary—which you can read anytime—so names, numbers, and decisions stick.",
      },
      {
        t: "Continue from your phone",
        b: "Scan a code once to pair your phone over home Wi-Fi. Carry on your chats and search your computer’s files from the sofa—encrypted directly between your phone and your desk.",
      },
      {
        t: "Learns your personal writing voice",
        b: "Give it a folder of your past emails or articles and it learns to write in your natural tone—warning you first if other people’s writing is mixed in. (Requires Windows with NVIDIA graphics.)",
        soon: true,
      },
    ],

    whyTitle: "Why run it on your own computer",
    whyIntro: "Cloud AI like ChatGPT is great for public research or heavy coding. Noodle is built for the work you wouldn’t paste into a public website: client contracts, financial spreadsheets, medical letters, and personal notes.",
    why: [
      {
        t: "Your files never leave the room.",
        b: "Nothing you type or open is ever uploaded. There is nothing to leak, no corporate training on your documents, and nobody else’s privacy policy to take on faith.",
      },
      {
        t: "Never get cut off mid-project.",
        b: "Good writing takes rewording and retrying. Cloud services throttle you or lock you out after a few dozen messages. On your own computer, the hundredth try is as free as the first.",
      },
      {
        t: "Smart enough for 90% of daily work.",
        b: "You don’t need a massive data centre to draft a letter, summarise a 40-page PDF, or spot a clause in a contract. Today’s compact models handle everyday work well.",
      },
      {
        t: "They set the terms. You live with them.",
        b: "Cloud AI companies decide the price, the limits and which model you get, and change them when it suits them. On your computer nothing changes unless you change it.",
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

  catalog: {
    title: "Model catalog",
    lead: "Every model you can install from the app's store. Each one runs entirely on your computer. The app checks which ones your machine can run before you download anything.",
    by: (creator: string) => `by ${creator}`,
    size: "Download size",
    ram: "Memory needed",
    gb: (n: number) => `${n} GB`,
    gbRange: (a: number, b: number) => `${a}–${b} GB`,
    ramAtLeast: (n: number) => `${n} GB or more`,
    vision: "Can read images and screenshots",
    note: "Sizes go from the smallest to the most precise version of each model; the app picks the one that suits your computer. Memory is for the smallest version. A graphics card makes them faster but is not required.",
    cta: "Download the app",
  },

  notFound: {
    title: "Page not found",
    body: "That link does not point anywhere we recognise.",
    browse: "Go to the homepage",
  },

};

export type Strings = typeof en;
