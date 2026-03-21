export const homepageConfig = {
  hero: {
    badges: [{ text: "Accompagnement stratégique", icon: "Sparkles" }],
    title: {
      line1: "Prenez le virage",
      line2: "de l'IA",
    },
    subtitle: {
      line1: "avec méthode",
      line2: "et accompagnement terrain",
    },
    description: {
      title: "Vision, pilotage, automatisation",
      subtitle: "accompagnement terrain",
      text: "AEGENS aide les entreprises à clarifier leurs priorités, construire leur cockpit de pilotage et déployer des solutions concrètes, sur le terrain.",
    },
    cta: {
      main: "Organiser un premier échange sur site",
      secondary: "Découvrir notre approche",
    },
  },
  positioning: {
    title: "Une approche plus utile que le simple déploiement d'outils.",
    text: "Nous aidons les entreprises à comprendre ce qui change, à faire les bons choix, à structurer leur pilotage et à mettre en place des solutions réellement utiles.",
  },
  pillars: {
    title: "Notre approche",
    subtitle: "AEGENS accompagne les entreprises sur quatre niveaux complémentaires.",
    items: [
      {
        title: "Vision & décisions",
        desc: "Clarifier les enjeux, prioriser les bons sujets, éviter les effets de mode et définir une trajectoire cohérente.",
        icon: "Eye",
      },
      {
        title: "Cockpit & architecture de pilotage",
        desc: "Construire un système de pilotage plus clair, avec des KPI fiables, des données mieux structurées et des vues utiles pour la direction.",
        icon: "LineChart",
      },
      {
        title: "IA, automatisation & déploiement",
        desc: "Mettre en place des assistants IA, des automatisations ciblées et des flux plus fluides, sans complexité inutile.",
        icon: "Zap",
      },
      {
        title: "Transformation, sourcing & accompagnement terrain",
        desc: "Accompagner les projets plus larges : sourcing, formation, gestion de projet, audits, mise en place clé en main et accompagnement opérationnel.",
        icon: "Users",
      },
    ],
  },
  services: {
    title: "Ce que nous déployons",
    subtitle:
      "Des solutions concrètes, adaptées à votre structure, vos outils et vos équipes",
    items: [
      {
        title: "Automatisation & fluidité opérationnelle",
        subtitle:
          "Nous simplifions les flux répétitifs et les tâches à faible valeur pour rendre l'exécution plus fluide, plus fiable et moins dépendante des habitudes internes.",
        link: "/services/automatisation",
        icon: "Zap",
      },
      {
        title: "Assistants IA & accès intelligent à l'information",
        subtitle:
          "Nous donnons aux équipes un accès plus rapide, plus structuré et plus utile à l'information, dans le respect de vos règles, de vos documents et de votre fonctionnement.",
        link: "/services/assistant-ia-metier",
        icon: "Brain",
      },
      {
        title: "Cockpit & pilotage de direction",
        subtitle: "Nous concevons des outils de pilotage clairs, fiables et réellement utiles pour suivre l'activité, consolider les données et accélérer les décisions.",
        link: "/services/analyse-reporting",
        icon: "LineChart",
      },
      {
        title: "Diagnostic, cartographie & audit",
        subtitle:
          "Nous analysons vos flux, vos processus, vos points de friction et votre organisation pour identifier les priorités utiles avant tout déploiement.",
        link: "/services/audit",
        icon: "Eye",
      },
    ],
    cta: "Découvrir notre approche complète",
    footnote: "Chaque solution est construite sur mesure, orientée résultats",
  },
  onsite: {
    title: "Les vrais sujets se voient rarement depuis un formulaire.",
    text: "Les problèmes de pilotage, de coordination, de flux ou d'organisation apparaissent souvent dans la réalité du terrain, pas dans un brief théorique. C'est pour cela que nous privilégions les échanges sur site, au plus près des équipes, des outils et des usages réels.",
    points: [
      "Voir les flux tels qu'ils existent vraiment",
      "Comprendre les frictions opérationnelles",
      "Identifier les gains utiles plus vite",
      "Éviter les projets mal cadrés",
    ],
    cta: "Prévoir une visite courte",
  },
  kpis: {
    title: "Quelques constats clés",
    items: [
      {
        stat: "20-35%",
        label: "Temps absorbé",
        desc: "du temps d'un collaborateur peut être absorbé par des tâches répétitives ou de coordination à faible valeur.",
      },
      {
        stat: "+30%",
        label: "Gain de vitesse",
        desc: "de gain de vitesse est souvent possible sur certaines tâches à forte valeur quand les outils, les données et les usages sont mieux structurés.",
      },
      {
        stat: "1 sur 2",
        label: "Dirigeants",
        desc: "dirigeants considèrent que leur entreprise devra se transformer en profondeur pour rester compétitive dans les années à venir.",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Quand faire appel à AEGENS ?",
        answer: "Quand une entreprise veut clarifier sa trajectoire IA et numérique, mieux piloter son activité, structurer ses données ou déployer des solutions concrètes sans ajouter de complexité inutile.",
      },
      {
        question: "AEGENS intervient-il uniquement sur l'IA ?",
        answer: "Non. AEGENS intervient aussi sur le pilotage, les flux, les processus, les audits, le sourcing, la gestion de projet et l'accompagnement opérationnel.",
      },
      {
        question: "Pourquoi commencer par un échange sur site ?",
        answer: "Parce que les vrais points de friction se comprennent beaucoup mieux dans le contexte réel de l'entreprise, au contact des équipes, des outils et des usages.",
      },
    ],
  },
  finalCta: {
    title: "Parlons de votre contexte directement sur place.",
    subtitle: "Un premier échange court permet souvent d'identifier très vite les vrais sujets : pilotage, circulation de l'information, automatisation, data, organisation ou priorités de transformation.",
    primaryCta: "Organiser un rendez-vous physique",
    secondaryCta: "Nous contacter",
    phone: {
      number: "+33745103015",
      display: "07 45 10 30 15",
    },
  },
}

export const styleConfig = {
  colors: {
    primary: "white",
    secondary: "white/80",
    accent: "white",
    background: "black",
    cardBg: "white/5",
    border: "white/20",
  },
  fonts: {
    hero: {
      badge: "text-xs sm:text-sm",
      titleLine1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
      titleLine2: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
      solutionsTitle: "text-xs sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
      solutionsSubtitle: "text-base sm:text-lg md:text-xl lg:text-2xl",
      roiText: "text-base sm:text-lg md:text-xl lg:text-2xl",
      roiPills: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
      diagnosticText: "text-xs sm:text-sm md:text-base lg:text-lg",
      diagnosticPills: "text-base sm:text-lg md:text-xl lg:text-2xl",
      diagnosticPlus: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
      diagnostic48h: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
      ctaButton: "text-sm sm:text-base md:text-lg",
      title: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
      subtitle: "text-2xl sm:text-3xl md:text-4xl",
      description: "text-lg sm:text-xl md:text-2xl",
      descriptionTitle: "text-2xl sm:text-3xl md:text-4xl",
      descriptionSubtitle: "text-lg sm:text-xl md:text-2xl",
      descriptionText: "text-base sm:text-lg md:text-xl",
    },
    section: {
      title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
      subtitle: "text-lg sm:text-xl md:text-2xl",
      body: "text-sm sm:text-base md:text-lg",
    },
    card: {
      title: "text-base sm:text-lg md:text-xl lg:text-2xl",
      subtitle: "text-sm sm:text-base md:text-lg",
      body: "text-xs sm:text-sm md:text-base",
    },
    kpi: {
      stat: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
      label: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
      desc: "text-sm sm:text-base md:text-lg",
    },
  },
}
