import type { Serviciu, BlogPost, Recenzie, FAQItem } from '@/types'

export const SERVICII: Serviciu[] = [
  {
    id: '1',
    slug: 'excavatii-fundatii',
    titlu: 'Excavații Fundații',
    descriere: 'Săpături de precizie pentru fundații rezidențiale și industriale, cu respectarea strictă a proiectului tehnic.',
    continut: `<h2>Servicii profesionale de excavații pentru fundații</h2>
<p>Fundația este inima oricărei construcții. Oferim excavații de precizie pentru orice tip de fundație: izolată, continuă, radier general sau piloți. Echipa noastră utilizează utilaje moderne pentru a asigura dimensiunile exacte ale săpăturii.</p>
<h3>Ce includem</h3>
<ul>
<li>Analiză teren și proiect tehnic</li>
<li>Excavație la adâncimea specificată</li>
<li>Nivelare și compactare fund săpătură</li>
<li>Evacuare pământ excedentar</li>
<li>Sprijinire maluri acolo unde este necesar</li>
</ul>
<h3>Tipuri de fundații</h3>
<p>Lucrăm atât pentru case individuale, cât și pentru blocuri, hale industriale sau infrastructuri mari. Fiecare proiect este tratat cu atenție maximă.</p>`,
    imagine: '/69a69f5c-b132-4d7a-98a7-60e6182ef69d.png',
    iconita: 'Building',
    metaTitle: 'Excavații Fundații | ExcavPro',
    metaDesc: 'Servicii profesionale de excavații pentru fundații. Precizie, viteză și siguranță garantate.',
    featured: true,
    ordine: 1,
    creatLa: new Date('2024-01-01'),
    actualizatLa: new Date('2024-01-01'),
  },
  {
    id: '2',
    slug: 'terasamente-nivelari',
    titlu: 'Terasamente și Nivelări',
    descriere: 'Modelare teren, nivelări, umpleri și compactări pentru platforme industriale, parcări sau zone rezidențiale.',
    continut: `<h2>Terasamente profesionale</h2>
<p>Terasamentele reprezintă lucrările de pregătire a terenului pentru orice tip de construcție. Oferim servicii complete de modelare a terenului, de la decopertare la compactare finală.</p>
<h3>Servicii incluse</h3>
<ul>
<li>Decopertare strat vegetal</li>
<li>Săpături și umpluturi</li>
<li>Nivelare mecanică cu greder</li>
<li>Compactare cu compactor vibrodinamic</li>
<li>Realizare pante și rigole</li>
</ul>`,
    imagine: '/23e43a1d-759f-40d4-b028-4be0b69d179e.png',
    iconita: 'Layers',
    metaTitle: 'Terasamente și Nivelări | ExcavPro',
    metaDesc: 'Terasamente și nivelări profesionale.',
    featured: true,
    ordine: 2,
    creatLa: new Date('2024-01-01'),
    actualizatLa: new Date('2024-01-01'),
  },
  {
    id: '3',
    slug: 'sapaturi-canalizare-utilitati',
    titlu: 'Săpături Canalizare & Utilități',
    descriere: 'Șanțuri pentru canalizare, conducte de apă, gaze, electricitate sau telecomunicații, cu acuratețe maximă.',
    continut: `<h2>Săpături pentru rețele de utilități</h2>
<p>Rețelele de utilități subterane necesită săpături precise și cu impact minim asupra infrastructurii existente.</p>
<h3>Ce facem</h3>
<ul>
<li>Săpături șanțuri canalizare</li>
<li>Pozare conducte apă-canal</li>
<li>Șanțuri pentru gaze naturale</li>
<li>Canale tehnice pentru electricitate</li>
<li>Refacere carosabil după lucrări</li>
</ul>`,
    imagine: '/0bda5123-2b0d-4d04-b9a4-3062fecc8559.png',
    iconita: 'GitBranch',
    metaTitle: 'Săpături Canalizare | ExcavPro',
    metaDesc: 'Săpături pentru rețele de canalizare, apă, gaze și electricitate.',
    featured: false,
    ordine: 3,
    creatLa: new Date('2024-01-01'),
    actualizatLa: new Date('2024-01-01'),
  },
  {
    id: '4',
    slug: 'demolari-controlate',
    titlu: 'Demolări Controlate',
    descriere: 'Demolări parțiale sau totale ale construcțiilor, cu gestionarea deșeurilor și respectarea normelor de mediu.',
    continut: `<h2>Demolări controlate și profesionale</h2>
<p>Demolările necesită planificare atentă și echipamente specializate.</p>
<h3>Tipuri de demolări</h3>
<ul>
<li>Demolări totale clădiri rezidențiale</li>
<li>Demolări parțiale și selective</li>
<li>Spargere betoane armate</li>
<li>Demolare fundații vechi</li>
<li>Evacuare moloz și deșeuri</li>
</ul>`,
    imagine: '/6e6489a2-df4e-4e06-a54b-0dcedb041cab.png',
    iconita: 'Hammer',
    metaTitle: 'Demolări Controlate | ExcavPro',
    metaDesc: 'Servicii de demolare profesionale.',
    featured: false,
    ordine: 4,
    creatLa: new Date('2024-01-01'),
    actualizatLa: new Date('2024-01-01'),
  },
  {
    id: '5',
    slug: 'amenajari-peisagistice',
    titlu: 'Amenajări Peisagistice',
    descriere: 'Modelare teren pentru grădini, parcuri, zone verzi, piscine sau lacuri decorative.',
    continut: `<h2>Amenajări peisagistice mecanizate</h2>
<p>De la grădina privată la parcuri publice, oferim servicii complete de modelare a terenului.</p>
<h3>Servicii</h3>
<ul>
<li>Modelare teren și cote</li>
<li>Săpături pentru piscine și iazuri</li>
<li>Pregătire teren pentru gazon</li>
<li>Creare alei și platforme</li>
<li>Drenaje și sisteme de irigații</li>
</ul>`,
    imagine: '/af850a14-57d6-46bf-a968-d6ccbdff48a1.png',
    iconita: 'Leaf',
    metaTitle: 'Amenajări Peisagistice | ExcavPro',
    metaDesc: 'Modelare teren pentru grădini, parcuri, piscine și zone verzi.',
    featured: false,
    ordine: 5,
    creatLa: new Date('2024-01-01'),
    actualizatLa: new Date('2024-01-01'),
  },
  {
    id: '6',
    slug: 'transport-pamant-deseuri',
    titlu: 'Transport Pământ & Deșeuri',
    descriere: 'Servicii de transport pământ excavat, moloz, deșeuri de construcții și materiale de umplutură.',
    continut: `<h2>Transport și evacuare materiale</h2>
<p>Deținem flotă proprie de camioane basculante pentru transport rapid și eficient.</p>
<h3>Ce transportăm</h3>
<ul>
<li>Pământ excavat și humus</li>
<li>Moloz și deșeuri demolări</li>
<li>Balast, pietriș, nisip</li>
<li>Materiale de umplutură</li>
</ul>`,
    imagine: '/c5d56c1a-0f66-46f8-8a98-1e5e87391fd4.png',
    iconita: 'Truck',
    metaTitle: 'Transport Pământ | ExcavPro',
    metaDesc: 'Transport rapid și eficient de pământ, moloz și materiale de construcții.',
    featured: false,
    ordine: 6,
    creatLa: new Date('2024-01-01'),
    actualizatLa: new Date('2024-01-01'),
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'ghid-excavatii-fundatii-case',
    titlu: 'Ghid complet: Excavații pentru fundații de case',
    excerpt: 'Tot ce trebuie să știi despre pregătirea terenului și excavațiile necesare pentru o fundație solidă.',
    continut: `<h2>De ce sunt importante excavațiile corecte?</h2>
<p>O fundație solidă începe cu excavații precise. Orice eroare în această etapă poate compromite întreaga construcție.</p>
<h3>Etapele excavației</h3>
<p>Procesul de excavare pentru o fundație tipică implică mai multe etape: studiu geotehnic, proiectare, săpătură propriu-zisă, sprijinire maluri și pregătire suprafață.</p>`,
    imagine: '/c91ddcf3-ac8d-4d00-9bb9-075fae7c7055.png',
    autor: 'Ing. Alexandru Marin',
    categorie: 'Ghiduri',
    serviciu: 'excavatii-fundatii',
    metaTitle: 'Ghid Excavații Fundații | ExcavPro Blog',
    metaDesc: 'Ghid complet despre excavații pentru fundații.',
    publicat: true,
    creatLa: new Date('2024-03-15'),
    actualizatLa: new Date('2024-03-15'),
  },
  {
    id: '2',
    slug: 'terasamente-platforma-industriala',
    titlu: 'Cum se realizează o platformă industrială: de la teren la pavaj',
    excerpt: 'Procesul complet de realizare a unei platforme industriale, de la studiul terenului la compactarea finală.',
    continut: `<h2>Platforma industrială — pași esențiali</h2>
<p>Realizarea unei platforme industriale este un proiect complex care necesită planificare atentă și echipamente specializate.</p>
<h3>Studiul preliminar</h3>
<p>Înainte de orice intervenție mecanică, este esențial un studiu geotehnic pentru a cunoaște capacitatea portantă a terenului.</p>`,
    imagine: '/2ec5e41b-a733-4957-9aa4-6b30d14e090c.png',
    autor: 'Ing. Maria Ionescu',
    categorie: 'Proiecte',
    serviciu: 'terasamente-nivelari',
    metaTitle: 'Platformă Industrială | ExcavPro Blog',
    metaDesc: 'Cum se realizează o platformă industrială.',
    publicat: true,
    creatLa: new Date('2024-02-20'),
    actualizatLa: new Date('2024-02-20'),
  },
  {
    id: '3',
    slug: 'canalizare-retele-subterane-sfaturi',
    titlu: '5 greșeli frecvente la pozarea rețelelor subterane',
    excerpt: 'Evită aceste erori comune care pot duce la avarii costisitoare la rețelele de canalizare și utilități.',
    continut: `<h2>Greșeli care costă scump</h2>
<p>Lucrările de pozare a rețelelor subterane par simple, dar implică o serie de riscuri dacă nu sunt executate corect.</p>
<h3>1. Adâncimea insuficientă</h3>
<p>Una dintre cele mai comune erori este pozarea conductelor la o adâncime insuficientă, ceea ce le expune la deteriorare.</p>`,
    imagine: '/c35e99d2-ffa9-4dee-93a3-b359059e485b.png',
    autor: 'Ing. Alexandru Marin',
    categorie: 'Sfaturi',
    serviciu: 'sapaturi-canalizare-utilitati',
    metaTitle: 'Greșeli Rețele Subterane | ExcavPro Blog',
    metaDesc: '5 greșeli frecvente la pozarea rețelelor subterane.',
    publicat: true,
    creatLa: new Date('2024-01-10'),
    actualizatLa: new Date('2024-01-10'),
  },
  {
    id: '4',
    slug: 'demolare-cladire-veche-pasi',
    titlu: 'Cum demolezi o clădire veche în siguranță: ghid pas cu pas',
    excerpt: 'Procesul legal și tehnic de demolare a unei construcții, de la autorizații la evacuarea deșeurilor.',
    continut: `<h2>Demolarea — un proces complex</h2>
<p>Demolarea unei clădiri nu înseamnă doar doborârea zidurilor. Este un proces complex care implică autorizații, planificare și securizare.</p>
<h3>Pasul 1: Autorizații</h3>
<p>Orice demolare necesită autorizație de demolare de la Primărie.</p>`,
    imagine: '/54d3611d-b87d-407f-805e-018f8e1bdfe9.png',
    autor: 'Ing. Radu Constantin',
    categorie: 'Ghiduri',
    serviciu: 'demolari-controlate',
    metaTitle: 'Ghid Demolare Clădire | ExcavPro Blog',
    metaDesc: 'Ghid complet pentru demolarea în siguranță a unei construcții.',
    publicat: true,
    creatLa: new Date('2023-12-05'),
    actualizatLa: new Date('2023-12-05'),
  },
  {
    id: '5',
    slug: 'amenajare-gradina-modelare-teren',
    titlu: 'Modelarea terenului pentru grădina perfectă',
    excerpt: 'Cum să pregătești terenul pentru o grădină frumoasă: nivelare, drenaj și pregătire sol.',
    continut: `<h2>Grădina de vis începe cu terenul potrivit</h2>
<p>O grădină frumoasă necesită mult mai mult decât plante. Fundamentul oricărei grădini reușite este pregătirea corectă a terenului.</p>`,
    imagine: '/bdf3e5b7-9887-4c60-bfc0-41ae1eef5831.png',
    autor: 'Ing. Maria Ionescu',
    categorie: 'Sfaturi',
    serviciu: 'amenajari-peisagistice',
    metaTitle: 'Modelare Teren Grădină | ExcavPro Blog',
    metaDesc: 'Cum să pregătești terenul pentru grădina perfectă.',
    publicat: true,
    creatLa: new Date('2023-11-18'),
    actualizatLa: new Date('2023-11-18'),
  },
  {
    id: '6',
    slug: 'transport-pamant-optimizare-costuri',
    titlu: 'Cum optimizezi costurile de transport pământ la construcție',
    excerpt: 'Strategii practice pentru reducerea costurilor de evacuare a pământului excedentar de pe șantier.',
    continut: `<h2>Costurile de transport — un factor major</h2>
<p>La orice șantier de construcții, transportul pământului excavat reprezintă un cost semnificativ.</p>`,
    imagine: '/81051567-ba2d-4b5b-9c54-df360f13b679.png',
    autor: 'Ing. Radu Constantin',
    categorie: 'Sfaturi',
    serviciu: 'transport-pamant-deseuri',
    metaTitle: 'Optimizare Transport Pământ | ExcavPro Blog',
    metaDesc: 'Strategii pentru reducerea costurilor de transport pământ.',
    publicat: true,
    creatLa: new Date('2023-10-22'),
    actualizatLa: new Date('2023-10-22'),
  },
]

export const RECENZII: Recenzie[] = [
  {
    id: '1',
    nume: 'Andrei Popescu',
    functie: 'Proprietar casă individuală',
    text: 'Echipă extrem de profesionistă. Au finalizat excavațiile pentru fundația casei mele cu 2 zile înainte de termen. Precizie perfectă și prețuri corecte. Recomand cu mare încredere!',
    rating: 5,
    avatarUrl: null,
    afisata: true,
    creatLa: new Date('2024-03-01'),
  },
  {
    id: '2',
    nume: 'SC Construct SRL',
    functie: 'Director General',
    text: 'Colaborăm cu ExcavPro de 3 ani pentru toate proiectele noastre industriale. Calitate constantă, termene respectate și comunicare excelentă. Un partener de nădejde.',
    rating: 5,
    avatarUrl: null,
    afisata: true,
    creatLa: new Date('2024-02-15'),
  },
  {
    id: '3',
    nume: 'Elena Dumitrescu',
    functie: 'Arhitect',
    text: 'Am recomandat ExcavPro mai multor clienți ai biroului meu de arhitectură. Niciodată nu m-au dezamăgit. Lucrează exact după proiect și sunt mereu disponibili pentru consultații.',
    rating: 5,
    avatarUrl: null,
    afisata: true,
    creatLa: new Date('2024-01-20'),
  },
  {
    id: '4',
    nume: 'Municipiul Ploiești',
    functie: 'Serviciul Tehnic',
    text: 'Am contractat ExcavPro pentru extinderea rețelei de canalizare în cartierul nou. Lucrările au fost realizate exemplar, cu minimum de deranj pentru locuitorii din zonă.',
    rating: 5,
    avatarUrl: null,
    afisata: true,
    creatLa: new Date('2023-12-10'),
  },
  {
    id: '5',
    nume: 'Bogdan Gheorghe',
    functie: 'Investitor imobiliar',
    text: 'Am lucrat cu ei pentru un proiect rezidențial de 20 de apartamente. Terasamentele și excavațiile au fost finalizate în timp record. Prețuri competitive și calitate superioară.',
    rating: 4,
    avatarUrl: null,
    afisata: true,
    creatLa: new Date('2023-11-05'),
  },
  {
    id: '6',
    nume: 'Ioana Marinescu',
    functie: 'Proprietară grădină',
    text: 'Au amenajat terenul pentru grădina mea de 2000 mp. Rezultatul final a depășit așteptările. Profesioniști adevărați, curați și punctuali. Voi apela din nou la ei.',
    rating: 5,
    avatarUrl: null,
    afisata: true,
    creatLa: new Date('2023-10-18'),
  },
]

export const FAQS: FAQItem[] = [
  {
    id: '1',
    intrebare: 'Cât costă o excavație pentru fundație?',
    raspuns: 'Costul variază în funcție de volumul de pământ de excavat, adâncimea necesară și accesibilitatea terenului. Prețul mediu este între 15-35 lei/mc pentru terenuri normale. Contactați-ne pentru o ofertă personalizată gratuită.',
    ordine: 1,
    activ: true,
  },
  {
    id: '2',
    intrebare: 'În câte zile se finalizează o excavație pentru o casă?',
    raspuns: 'Pentru o casă individuală de dimensiuni medii (100-200 mp), excavațiile durează de obicei 1-3 zile lucrătoare, în funcție de tipul solului și adâncimea necesară.',
    ordine: 2,
    activ: true,
  },
  {
    id: '3',
    intrebare: 'Ce tipuri de utilaje folosiți?',
    raspuns: 'Dispunem de o flotă diversificată: excavatoare pe șenile (0.3-1.2 mc cupă), buldozere, gredere, compactoare vibrodinamice și camioane basculante.',
    ordine: 3,
    activ: true,
  },
  {
    id: '4',
    intrebare: 'Lucrați în weekend sau în afara programului normal?',
    raspuns: 'Da, suntem disponibili 7 zile din 7, inclusiv în weekend. Pentru urgențe putem mobiliza echipa în 24 de ore.',
    ordine: 4,
    activ: true,
  },
  {
    id: '5',
    intrebare: 'Oferiți și servicii de transport al pământului?',
    raspuns: 'Da, oferim servicii complete de evacuare și transport al pământului excavat. Dispunem de flotă proprie de camioane basculante de 10-20 tone.',
    ordine: 5,
    activ: true,
  },
  {
    id: '6',
    intrebare: 'În ce zone din țară activați?',
    raspuns: 'Suntem bazați în județul Prahova și acoperim întreaga regiune: Prahova, Dâmbovița, Ilfov, Ialomița și București.',
    ordine: 6,
    activ: true,
  },
  {
    id: '7',
    intrebare: 'Aveți asigurare pentru lucrări și utilaje?',
    raspuns: 'Da, suntem pe deplin asigurați. Deținem asigurare de răspundere civilă profesională și asigurare pentru utilaje.',
    ordine: 7,
    activ: true,
  },
  {
    id: '8',
    intrebare: 'Cum pot obține o ofertă de preț?',
    raspuns: 'Puteți obține o ofertă gratuită completând formularul de contact de pe site, sunând la numărul nostru de telefon sau trimițând un email. Răspundem în maxim 4 ore în zilele lucrătoare.',
    ordine: 8,
    activ: true,
  },
]
