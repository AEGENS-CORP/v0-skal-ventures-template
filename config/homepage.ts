export const homepageConfig = {
  hero: {
    badges: [{ text: "Accompagnement stratégique et opérationnel", icon: "Sparkles" }],
    title: {
      line1: "Prenez le virage",
      line2: "de l'IA et des nouvelles technologies",
    },
    subtitle: {
      line1: "avec méthode",
      line2: "et accompagnement terrain",
    },
    description: {
      title: "Vision, pilotage, automatisation",
      subtitle: "accompagnement terrain",
      text: "AEGENS aide les entreprises à clarifier leurs priorités, mieux piloter leur activité et mettre en place des solutions concrètes, directement dans leur réalité terrain.",
    },
    cta: {
      main: "Organiser un premier échange sur site",
      secondary: "Découvrir notre méthode",
    },
  },
  pillars: {
    title: "Ce que nous aidons à faire évoluer",
    subtitle: "AEGENS intervient là où se jouent les vraies transformations : les arbitrages, le pilotage, les flux et l'exécution.",
    items: [
      {
        title: "Clarifier les vraies priorités",
        desc: "Nous aidons la direction à identifier les sujets qui créent réellement de la valeur et à éviter les initiatives qui consomment du temps, du budget et de l'énergie sans impact durable.",
        icon: "Eye",
      },
      {
        title: "Reprendre la main sur le pilotage",
        desc: "Nous construisons un cockpit de direction clair, fiable et exploitable pour suivre l'activité, consolider les données utiles et accélérer les bonnes décisions.",
        icon: "LineChart",
      },
      {
        title: "Éliminer les frictions opérationnelles",
        desc: "Nous auditons les flux, les processus et les points de rupture pour simplifier l'exécution, réduire les pertes invisibles et mieux faire circuler l'information.",
        icon: "Zap",
      },
      {
        title: "Transformer avec méthode, jusqu'au terrain",
        desc: "Nous accompagnons les projets de transformation dans leur réalité concrète : audits approfondis, sourcing, coordination, formation, mise en place clé en main et pilotage opérationnel.",
        icon: "Users",
      },
    ],
  },
  method: {
    title: "Notre méthode, du terrain à la mise en place",
    subtitle: "Nous partons du réel : les flux, les équipes, les outils, les points de friction. Puis nous structurons, pilotons et mettons en place ce qui compte.",
    items: [
      {
        title: "Observer et cartographier",
        subtitle: "Nous analysons les flux, les processus, les points de friction et les priorités réelles avant tout choix d'outil ou de déploiement.",
        link: "/services/audit",
        icon: "Eye",
      },
      {
        title: "Structurer le pilotage",
        subtitle: "Nous construisons un cockpit clair pour suivre l'activité, consolider les données et aider la direction à décider plus vite.",
        link: "/services/analyse-reporting",
        icon: "LineChart",
      },
      {
        title: "Fluidifier les flux",
        subtitle: "Nous mettons en place des automatisations ciblées sur les tâches qui ralentissent vraiment l'activité : ressaisies, relances, validations, circulation d'information, suivi opérationnel et reporting. L'objectif est simple : moins de temps perdu, moins d'erreurs, une exécution plus fluide au quotidien.",
        link: "/services/automatisation",
        icon: "Zap",
      },
      {
        title: "Rendre l'information exploitable",
        subtitle: "Nous donnons aux équipes un accès plus rapide et plus utile à l'information, à partir de vos documents, de vos règles et de vos usages réels.",
        link: "/services/assistant-ia-metier",
        icon: "Brain",
      },
    ],
  },
  onsite: {
    title: "Les vrais sujets se voient rarement depuis un formulaire.",
    text: "Les problèmes de pilotage, de coordination, de flux ou d'organisation apparaissent souvent dans la réalité du terrain, pas dans un brief théorique. C'est pour cela que nous privilégions les échanges sur site, au plus près des équipes, des outils et des usages réels.",
    points: [
      "Voir les flux réels",
      "Comprendre les frictions",
      "Identifier les gains utiles plus vite",
      "Éviter les projets mal cadrés",
    ],
    cta: "Prévoir une visite courte",
  },
  kpis: {
    title: "Quelques constats clés",
    items: [
      {
        stat: "1 sur 2",
        label: "",
        desc: "dirigeants estime que son entreprise devra se transformer en profondeur pour rester compétitive dans les années à venir.",
      },
      {
        stat: "20 à 35%",
        label: "",
        desc: "du temps d'un collaborateur peut être absorbé par des tâches répétitives ou de coordination à faible valeur.",
      },
      {
        stat: "+30%",
        label: "",
        desc: "de gain de vitesse peut être obtenu sur certaines tâches à forte valeur lorsque les outils, les données et les usages sont mieux structurés.",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Quand faire appel à AEGENS ?",
        answer: "Quand une entreprise veut clarifier sa trajectoire IA et numérique, mieux piloter son activité, structurer ses données ou mettre en place des solutions utiles sans ajouter de complexité.",
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
    subtitle: "Un premier échange court suffit souvent à faire ressortir les vrais sujets : pilotage, circulation de l'information, automatisation, data, organisation ou priorités de transformation.",
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
