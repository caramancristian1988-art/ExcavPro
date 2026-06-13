export type Serviciu = {
  id: string
  slug: string
  titlu: string
  descriere: string
  continut: string
  imagine: string
  iconita: string
  metaTitle: string | null
  metaDesc: string | null
  featured: boolean
  ordine: number
  creatLa: Date
  actualizatLa: Date
}

export type BlogPost = {
  id: string
  slug: string
  titlu: string
  excerpt: string
  continut: string
  imagine: string
  autor: string
  categorie: string | null
  serviciu: string | null
  metaTitle: string | null
  metaDesc: string | null
  publicat: boolean
  creatLa: Date
  actualizatLa: Date
}

export type Recenzie = {
  id: string
  nume: string
  functie: string | null
  text: string
  rating: number
  avatarUrl: string | null
  afisata: boolean
  creatLa: Date
}

export type FAQItem = {
  id: string
  intrebare: string
  raspuns: string
  ordine: number
  activ: boolean
}

export type ContactFormValues = {
  nume: string
  email: string
  telefon?: string
  serviciu?: string
  mesaj: string
}
