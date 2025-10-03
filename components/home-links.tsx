import Link from "next/link"

const serviceAnchors = [
  { href: "/services#audit", label: "Audit & cadrage" },
  { href: "/services#automatisation-ia", label: "Automatisation IA" },
  { href: "/services#erp-crm-dev", label: "ERP & CRM" },
]

const solutionAnchors = [
  { href: "/solutions#commercial", label: "Solution Commercial" },
  { href: "/solutions#production", label: "Solution Production" },
  { href: "/solutions#logistique", label: "Solution Logistique" },
  { href: "/solutions#finance", label: "Solution Finance" },
]

const discoveryLinks = [
  { href: "/methode", label: "Notre méthode" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/ressources", label: "Ressources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export const HomeLinks = () => {
  return (
    <section className="bg-black/60 border-t border-white/10 py-16">
      <div className="max-w-5xl mx-auto px-6 space-y-8 text-white">
        <div>
          <h2 className="text-3xl font-semibold">Parcours rapides</h2>
          <p className="text-white/70">
            Cette zone réunit les accès essentiels du site en attendant la rédaction finale des contenus.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services clés</h3>
            <ul className="space-y-2 text-white/80">
              {serviceAnchors.map((item) => (
                <li key={item.href}>
                  <Link className="underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Solutions associées</h3>
            <ul className="space-y-2 text-white/80">
              {solutionAnchors.map((item) => (
                <li key={item.href}>
                  <Link className="underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Cap sur la méthode</h3>
            <p className="text-white/70">
              Aperçu placeholder présentant les liens vers les sections structurantes du site.
            </p>
            <ul className="space-y-2 text-white/80">
              {discoveryLinks.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link className="underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Aller plus loin</h3>
            <p className="text-white/70">Bloc provisoire pour orienter vers les prises de contact.</p>
            <ul className="space-y-2 text-white/80">
              {discoveryLinks.slice(3).map((item) => (
                <li key={item.href}>
                  <Link className="underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
