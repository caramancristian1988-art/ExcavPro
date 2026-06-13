import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  await prisma.serviciu.deleteMany()
  await prisma.blogPost.deleteMany()
  await prisma.recenzie.deleteMany()
  await prisma.contactMesaj.deleteMany()
  await prisma.fAQ.deleteMany()

  const servicii = await Promise.all([
    prisma.serviciu.create({
      data: {
        slug: 'excavatii-fundatii',
        titlu: 'Excavații Fundații',
        descriere: 'Săpături de precizie pentru fundații rezidențiale și industriale, cu respectarea strictă a proiectului tehnic.',
        continut: `<h2>Servicii profesionale de excavații pentru fundații</h2>
<p>Fundația este inima oricărei construcții. Oferim excavații de precizie pentru orice tip de fundație: izolată, continua, radier general sau piloți. Echipa noastră utilizează utilaje moderne pentru a asigura dimensiunile exacte ale săpăturii.</p>
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
        imagine: 'https://picsum.photos/seed/foundation/1200/800',
        iconita: 'Building',
        metaTitle: 'Excavații Fundații | ExcavPro',
        metaDesc: 'Servicii profesionale de excavații pentru fundații. Precizie, viteză și siguranță garantate.',
        featured: true,
        ordine: 1,
      },
    }),
    prisma.serviciu.create({
      data: {
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
</ul>
<h3>Aplicații</h3>
<p>Parcări, platforme industriale, curți interioare, terenuri de sport, grădini, zone rezidențiale.</p>`,
        imagine: 'https://picsum.photos/seed/earthwork/1200/800',
        iconita: 'Layers',
        metaTitle: 'Terasamente și Nivelări | ExcavPro',
        metaDesc: 'Terasamente și nivelări profesionale. Platforme industriale, parcări, zone rezidențiale.',
        featured: true,
        ordine: 2,
      },
    }),
    prisma.serviciu.create({
      data: {
        slug: 'sapaturi-canalizare-utilitati',
        titlu: 'Săpături Canalizare & Utilități',
        descriere: 'Șanțuri pentru canalizare, conducte de apă, gaze, electricitate sau telecomunicații, cu acuratețe maximă.',
        continut: `<h2>Săpături pentru rețele de utilități</h2>
<p>Rețelele de utilități subterane necesită săpături precise și cu impact minim asupra infrastructurii existente. Utilizăm tehnici moderne de săpat și sondare pentru a evita deteriorarea rețelelor existente.</p>
<h3>Ce facem</h3>
<ul>
<li>Săpături șanțuri canalizare</li>
<li>Pozare conducte apă-canal</li>
<li>Șanțuri pentru gaze naturale</li>
<li>Canale tehnice pentru electricitate</li>
<li>Refacere carosabil după lucrări</li>
</ul>`,
        imagine: 'https://picsum.photos/seed/pipes/1200/800',
        iconita: 'GitBranch',
        metaTitle: 'Săpături Canalizare | ExcavPro',
        metaDesc: 'Săpături pentru rețele de canalizare, apă, gaze și electricitate.',
        featured: false,
        ordine: 3,
      },
    }),
    prisma.serviciu.create({
      data: {
        slug: 'demolari-controlate',
        titlu: 'Demolări Controlate',
        descriere: 'Demolări parțiale sau totale ale construcțiilor, cu gestionarea deșeurilor și respectarea normelor de mediu.',
        continut: `<h2>Demolări controlate și profesionale</h2>
<p>Demolările necesită planificare atentă și echipamente specializate. Oferim servicii complete de demolare, de la evaluarea structurii la evacuarea deșeurilor.</p>
<h3>Tipuri de demolări</h3>
<ul>
<li>Demolări totale clădiri rezidențiale</li>
<li>Demolări parțiale și selective</li>
<li>Spargere betoane armate</li>
<li>Demolare fundații vechi</li>
<li>Evacuare moloz și deșeuri</li>
</ul>`,
        imagine: 'https://picsum.photos/seed/demolition/1200/800',
        iconita: 'Hammer',
        metaTitle: 'Demolări Controlate | ExcavPro',
        metaDesc: 'Servicii de demolare profesionale, cu gestionarea completă a deșeurilor.',
        featured: false,
        ordine: 4,
      },
    }),
    prisma.serviciu.create({
      data: {
        slug: 'amenajari-peisagistice',
        titlu: 'Amenajări Peisagistice',
        descriere: 'Modelare teren pentru grădini, parcuri, zone verzi, piscine sau lacuri decorative.',
        continut: `<h2>Amenajări peisagistice mecanizate</h2>
<p>De la gradina privată la parcuri publice, oferim servicii complete de modelare a terenului pentru amenajări peisagistice de orice amploare.</p>
<h3>Servicii</h3>
<ul>
<li>Modelare teren și cote</li>
<li>Săpături pentru piscine și iazuri</li>
<li>Pregătire teren pentru gazon</li>
<li>Creare alei și platforme</li>
<li>Drenaje și sisteme de irigații</li>
</ul>`,
        imagine: 'https://picsum.photos/seed/landscape/1200/800',
        iconita: 'Leaf',
        metaTitle: 'Amenajări Peisagistice | ExcavPro',
        metaDesc: 'Modelare teren pentru grădini, parcuri, piscine și zone verzi.',
        featured: false,
        ordine: 5,
      },
    }),
    prisma.serviciu.create({
      data: {
        slug: 'transport-pamant-deseuri',
        titlu: 'Transport Pământ & Deșeuri',
        descriere: 'Servicii de transport pământ excavat, moloz, deșeuri de construcții și materiale de umplutură.',
        continut: `<h2>Transport și evacuare materiale</h2>
<p>Deținem flotă proprie de camioane basculante pentru transport rapid și eficient al pământului excavat, molozului și deșeurilor de construcții.</p>
<h3>Ce transportăm</h3>
<ul>
<li>Pământ excavat și humus</li>
<li>Moloz și deșeuri demolări</li>
<li>Balast, pietriș, nisip</li>
<li>Materiale de umplutură</li>
</ul>`,
        imagine: 'https://picsum.photos/seed/truck/1200/800',
        iconita: 'Truck',
        metaTitle: 'Transport Pământ | ExcavPro',
        metaDesc: 'Transport rapid și eficient de pământ, moloz și materiale de construcții.',
        featured: false,
        ordine: 6,
      },
    }),
  ])

  console.log(`✅ Created ${servicii.length} servicii`)

  const blogPosts = await Promise.all([
    prisma.blogPost.create({
      data: {
        slug: 'ghid-excavatii-fundatii-case',
        titlu: 'Ghid complet: Excavații pentru fundații de case',
        excerpt: 'Tot ce trebuie să știi despre pregătirea terenului și excavațiile necesare pentru o fundație solidă.',
        continut: `<h2>De ce sunt importante excavațiile corecte?</h2>
<p>O fundație solidă începe cu excavații precise. Orice eroare în această etapă poate compromite întreaga construcție. În acest ghid, explorăm toate aspectele importante ale excavațiilor pentru fundații rezidențiale.</p>
<h3>Etapele excavației</h3>
<p>Procesul de excavare pentru o fundație tipică implică mai multe etape: studiu geotehnic, proiectare, săpătură propriu-zisă, sprijinire maluri și pregătire suprafață.</p>`,
        imagine: 'https://picsum.photos/seed/blogfundatie/800/500',
        autor: 'Ing. Alexandru Marin',
        categorie: 'Ghiduri',
        serviciu: 'excavatii-fundatii',
        metaTitle: 'Ghid Excavații Fundații Case | ExcavPro Blog',
        metaDesc: 'Ghid complet despre excavații pentru fundații. Etape, costuri și sfaturi de la experți.',
        publicat: true,
      },
    }),
    prisma.blogPost.create({
      data: {
        slug: 'terasamente-platforma-industriala',
        titlu: 'Cum se realizează o platformă industrială: de la teren la pavaj',
        excerpt: 'Procesul complet de realizare a unei platforme industriale, de la studiul terenului la compactarea finală.',
        continut: `<h2>Platforma industrială — pași esențiali</h2>
<p>Realizarea unei platforme industriale este un proiect complex care necesită planificare atentă și echipamente specializate. Vom detalia fiecare etapă a procesului.</p>
<h3>Studiul preliminar</h3>
<p>Înainte de orice intervenție mecanică, este esențial un studiu geotehnic pentru a cunoaște capacitatea portantă a terenului. Acesta determină grosimea straturilor necesare.</p>`,
        imagine: 'https://picsum.photos/seed/blogplatforma/800/500',
        autor: 'Ing. Maria Ionescu',
        categorie: 'Proiecte',
        serviciu: 'terasamente-nivelari',
        metaTitle: 'Platformă Industrială | ExcavPro Blog',
        metaDesc: 'Cum se realizează o platformă industrială. Proces complet de la teren brut la pavaj finit.',
        publicat: true,
      },
    }),
    prisma.blogPost.create({
      data: {
        slug: 'canalizare-retele-subterane-sfaturi',
        titlu: '5 greșeli frecvente la pozarea rețelelor subterane',
        excerpt: 'Evită aceste erori comune care pot duce la avarii costisitoare la rețelele de canalizare și utilități.',
        continut: `<h2>Greșeli care costă scump</h2>
<p>Lucrările de pozare a rețelelor subterane par simple, dar implică o serie de riscuri dacă nu sunt executate corect. Iată cele mai frecvente greșeli și cum să le eviți.</p>
<h3>1. Adâncimea insuficientă</h3>
<p>Una dintre cele mai comune erori este pozarea conductelor la o adâncime insuficientă, ceea ce le expune la deteriorare din cauza înghețului sau traficului greu.</p>`,
        imagine: 'https://picsum.photos/seed/blogcanal/800/500',
        autor: 'Ing. Alexandru Marin',
        categorie: 'Sfaturi',
        serviciu: 'sapaturi-canalizare-utilitati',
        metaTitle: 'Greșeli Rețele Subterane | ExcavPro Blog',
        metaDesc: '5 greșeli frecvente la pozarea rețelelor subterane și cum să le eviți.',
        publicat: true,
      },
    }),
    prisma.blogPost.create({
      data: {
        slug: 'demolare-cladire-veche-pasi',
        titlu: 'Cum demolezi o clădire veche în siguranță: ghid pas cu pas',
        excerpt: 'Procesul legal și tehnic de demolare a unei construcții, de la autorizații la evacuarea deșeurilor.',
        continut: `<h2>Demolarea — un proces complex</h2>
<p>Demolarea unei clădiri nu înseamnă doar doborârea zidurilor. Este un proces complex care implică autorizații, planificare, securizare perimetru și gestionarea deșeurilor.</p>
<h3>Pasul 1: Autorizații</h3>
<p>Orice demolare necesită autorizație de demolare de la Primărie. Dosarul trebuie să conțină planuri ale construcției, memoriu tehnic și avize de la utilitari.</p>`,
        imagine: 'https://picsum.photos/seed/blogdemolare/800/500',
        autor: 'Ing. Radu Constantin',
        categorie: 'Ghiduri',
        serviciu: 'demolari-controlate',
        metaTitle: 'Ghid Demolare Clădire | ExcavPro Blog',
        metaDesc: 'Ghid complet pentru demolarea în siguranță a unei construcții. Autorizații, tehnici și deșeuri.',
        publicat: true,
      },
    }),
    prisma.blogPost.create({
      data: {
        slug: 'amenajare-gradina-modelare-teren',
        titlu: 'Modelarea terenului pentru grădina perfectă',
        excerpt: 'Cum să pregătești terenul pentru o grădină frumoasă: nivelare, drenaj și pregătire sol.',
        continut: `<h2>Grădina de vis începe cu terenul potrivit</h2>
<p>O grădină frumoasă necesită mult mai mult decât plante. Fundamentul oricărei grădini reușite este pregătirea corectă a terenului: nivelare, drenaj și îmbunătățire sol.</p>
<h3>Evaluarea terenului</h3>
<p>Primul pas este evaluarea terenului existent: panta naturală, compoziția solului, sursele de apă subterană și zonele cu probleme de drenaj.</p>`,
        imagine: 'https://picsum.photos/seed/bloggradina/800/500',
        autor: 'Ing. Maria Ionescu',
        categorie: 'Sfaturi',
        serviciu: 'amenajari-peisagistice',
        metaTitle: 'Modelare Teren Grădină | ExcavPro Blog',
        metaDesc: 'Cum să pregătești terenul pentru grădina perfectă. Nivelare, drenaj și sol.',
        publicat: true,
      },
    }),
    prisma.blogPost.create({
      data: {
        slug: 'transport-pamant-optimizare-costuri',
        titlu: 'Cum optimizezi costurile de transport pământ la construcție',
        excerpt: 'Strategii practice pentru reducerea costurilor de evacuare a pământului excedentar de pe șantier.',
        continut: `<h2>Costurile de transport — un factor major</h2>
<p>La orice șantier de construcții, transportul pământului excavat reprezintă un cost semnificativ. Iată cum să optimizezi acest cost fără a compromite calitatea lucrărilor.</p>
<h3>Calcularea volumului corect</h3>
<p>Primul pas este calcularea precisă a volumului de pământ ce trebuie evacuat. Un calcul greșit poate duce la curse inutile sau la depozitare temporară costisitoare.</p>`,
        imagine: 'https://picsum.photos/seed/blogtransport/800/500',
        autor: 'Ing. Radu Constantin',
        categorie: 'Sfaturi',
        serviciu: 'transport-pamant-deseuri',
        metaTitle: 'Optimizare Transport Pământ | ExcavPro Blog',
        metaDesc: 'Strategii pentru reducerea costurilor de transport pământ la construcții.',
        publicat: true,
      },
    }),
  ])

  console.log(`✅ Created ${blogPosts.length} blog posts`)

  const recenzii = await Promise.all([
    prisma.recenzie.create({
      data: {
        nume: 'Andrei Popescu',
        functie: 'Proprietar casă individuală',
        text: 'Echipă extrem de profesionistă. Au finalizat excavațiile pentru fundația casei mele cu 2 zile înainte de termen. Precizie perfectă și prețuri corecte. Recomand cu mare încredere!',
        rating: 5,
        afisata: true,
      },
    }),
    prisma.recenzie.create({
      data: {
        nume: 'SC Construct SRL',
        functie: 'Director General',
        text: 'Colaborăm cu ExcavPro de 3 ani pentru toate proiectele noastre industriale. Calitate constantă, termene respectate și comunicare excelentă. Un partener de nădejde.',
        rating: 5,
        afisata: true,
      },
    }),
    prisma.recenzie.create({
      data: {
        nume: 'Elena Dumitrescu',
        functie: 'Arhitect',
        text: 'Am recomandat ExcavPro mai multor clienți ai biroului meu de arhitectură. Niciodată nu m-au dezamăgit. Lucrează exact după proiect și sunt mereu disponibili pentru consultații.',
        rating: 5,
        afisata: true,
      },
    }),
    prisma.recenzie.create({
      data: {
        nume: 'Municipiul Ploiești',
        functie: 'Serviciul Tehnic',
        text: 'Am contractat ExcavPro pentru extinderea rețelei de canalizare în cartierul nou. Lucrările au fost realizate exemplar, cu minimum de deranj pentru locuitorii din zonă.',
        rating: 5,
        afisata: true,
      },
    }),
    prisma.recenzie.create({
      data: {
        nume: 'Bogdan Gheorghe',
        functie: 'Investitor imobiliar',
        text: 'Am lucrat cu ei pentru un proiect rezidențial de 20 de apartamente. Terasamentele și excavațiile au fost finalizate în timp record. Prețuri competitive și calitate superioară.',
        rating: 4,
        afisata: true,
      },
    }),
    prisma.recenzie.create({
      data: {
        nume: 'Ioana Marinescu',
        functie: 'Proprietară grădină',
        text: 'Au amenajat terenul pentru grădina mea de 2000 mp. Rezultatul final a depășit așteptările. Profesioniști adevărați, curați și punctuali. Voi apela din nou la ei.',
        rating: 5,
        afisata: true,
      },
    }),
  ])

  console.log(`✅ Created ${recenzii.length} recenzii`)

  const faqs = await Promise.all([
    prisma.fAQ.create({
      data: {
        intrebare: 'Cât costă o excavație pentru fundație?',
        raspuns: 'Costul variază în funcție de volumul de pământ de excavat, adâncimea necesară și accesibilitatea terenului. Prețul mediu este între 15-35 lei/mc pentru terenuri normale. Contactați-ne pentru o ofertă personalizată gratuită.',
        ordine: 1,
        activ: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        intrebare: 'În câte zile se finalizează o excavație pentru o casă?',
        raspuns: 'Pentru o casă individuală de dimensiuni medii (100-200 mp), excavațiile durează de obicei 1-3 zile lucrătoare, în funcție de tipul solului și adâncimea necesară. Proiectele mai mari pot dura mai mult.',
        ordine: 2,
        activ: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        intrebare: 'Ce tipuri de utilaje folosiți?',
        raspuns: 'Dispunem de o flotă diversificată: excavatoare pe șenile (0.3-1.2 mc cupă), buldozere, gredere, compactoare vibrodinamice și camioane basculante. Alegem utilajul potrivit în funcție de specificul lucrării.',
        ordine: 3,
        activ: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        intrebare: 'Lucrați în weekend sau în afara programului normal?',
        raspuns: 'Da, suntem disponibili 7 zile din 7, inclusiv în weekend. Pentru urgențe putem mobiliza echipa în 24 de ore. Contactați-ne la numărul de telefon disponibil 24/7 pentru situații urgente.',
        ordine: 4,
        activ: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        intrebare: 'Oferiți și servicii de transport al pământului?',
        raspuns: 'Da, oferim servicii complete de evacuare și transport al pământului excavat. Dispunem de flotă proprie de camioane basculante de 10-20 tone. Pământul poate fi transportat la depozit autorizat sau pe locațiile indicate de client.',
        ordine: 5,
        activ: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        intrebare: 'În ce zone din țară activați?',
        raspuns: 'Suntem bazați în județul Prahova și acoperim întreaga regiune: Prahova, Dâmbovița, Ilfov, Ialomița și București. Pentru proiecte mari putem deplasa echipele la distanțe mai mari.',
        ordine: 6,
        activ: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        intrebare: 'Aveți asigurare pentru lucrări și utilaje?',
        raspuns: 'Da, suntem pe deplin asigurați. Deținem asigurare de răspundere civilă profesională și asigurare pentru utilaje. La cerere, putem pune la dispoziție documentele de asigurare.',
        ordine: 7,
        activ: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        intrebare: 'Cum pot obține o ofertă de preț?',
        raspuns: 'Puteți obține o ofertă gratuită completând formularul de contact de pe site, sunând la numărul nostru de telefon sau trimițând un email cu detaliile proiectului. Răspundem în maxim 4 ore în zilele lucrătoare.',
        ordine: 8,
        activ: true,
      },
    }),
  ])

  console.log(`✅ Created ${faqs.length} FAQs`)
  console.log('🎉 Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
