export const NAP = {
  name: "Aegens",
  phone: "07 45 10 30 15",
  phoneLink: "tel:+33745103015",
  email: "contact@aegens.com",
  address: "18 Rue Ampère – ZI La Folie Sud",
  postalCode: "85310",
  city: "La Chaize-le-Vicomte",
  fullAddress: "18 Rue Ampère – ZI La Folie Sud, 85310 La Chaize-le-Vicomte",
  areaServed: ["Vendée", "La Roche-sur-Yon", "La Rochelle", "Niort", "Nantes", "Poitiers", "Angoulême"],
} as const

export const companyInfo = {
  name: NAP.name,
  phone: NAP.phone,
  phoneLink: NAP.phoneLink,
  email: NAP.email,
  address: {
    street: NAP.address,
    postalCode: NAP.postalCode,
    city: NAP.city,
    full: NAP.fullAddress,
  },
  areaServed: NAP.areaServed,
} as const
