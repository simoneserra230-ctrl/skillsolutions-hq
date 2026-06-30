# 📄 White Paper — Ecosistema SkillSolutions (giugno 2026)

> **Autore:** Simone Serra · **Stato:** documento strategico interno · **Data:** giugno 2026
> **Metodo & disclaimer:** questo documento descrive lo stato reale dell'ecosistema e ne
> proietta lo sviluppo. **Tutti i valori economici (ricavi, conversioni, prezzi, %) sono
> IPOTESI ILLUSTRATIVE da validare con dati operativi reali** — sono marcati `🔶 DA VALIDARE`.
> Nessun numero qui va comunicato a terzi come dato consuntivo. La parte tecnica è invece
> verificata sul codice (giugno 2026).

---

## 1. Executive Summary

**SkillSolutions** è un ecosistema AI-first per l'hospitality italiana, costruito da **Simone
Serra** (bar manager con 15+ anni nel luxury hospitality, Sardegna) interamente con sviluppo
assistito da AI. Un solo "cliente-mondo" — il locale, l'evento, il professionista del banco —
e cinque prodotti collegati.

**Dove siamo davvero (senza sconti):**
- **Tecnologia: matura.** 5 prodotti costruiti, di cui il gestionale BAD360 con ~11 moduli
  operativi persistenti e multi-tenant blindati, una piattaforma bandi (BA.IA) e un marketplace
  (BarmanMatch) funzionante end-to-end. Raro per un fondatore solo.
- **Mercato: pre-fatturato.** **Zero clienti SaaS paganti, zero deploy monetizzato, zero
  transazioni live.** L'unico flusso di cassa reale è il **servizio BAD** (bar catering eventi),
  erogato da Simone con le proprie mani.
- **Rischio dominante:** **bus factor = 1.** Cinque fronti, un paio di mani.

**Tesi centrale del documento:**
> Vendere il **SERVIZIO** (BAD eventi + consulenza) come motore di cassa **oggi**, e usare il
> **software come arma di acquisizione, differenziazione e retention** — non tentare di vendere
> 5 SaaS a freddo. Il software trasforma un servizio artigianale in un servizio scalabile e
> difendibile; non è (ancora) il prodotto da vendere standalone.

---

## 2. Visione & architettura dell'ecosistema

**Hub:** `SKILLSOLUTIONS.COM` — porta d'ingresso, racconta i 5 prodotti e il "volano".

| # | Prodotto | Cos'è | Ruolo nell'ecosistema |
|---|----------|-------|----------------------|
| 1 | **BAD** (Barman A Domicilio Sardegna) | Servizio bar-catering per eventi + **BAD Consultancy** (Metodo Bar Pro / Hotel Pro) | **Motore di cassa** e di brand; dominio reale `www.barmanadomiciliosardegna.com` |
| 2 | **BAD360** | Gestionale SaaS hospitality (HACCP, food/drink cost, turni, eventi, NC, recensioni, certificazioni, quality manager…) | Tool della consulenza + SaaS B2B |
| 3 | **BA.IA** | Piattaforma AI di matching bandi/finanza agevolata | SaaS B2B + lead generation |
| 4 | **BarmanMatch** | Marketplace a 2 lati: professionisti ↔ eventi | "Servizio principale" nella narrazione; il più ambizioso |
| 5 | **SSFormazione** | E-learning sicurezza D.Lgs. 81/08 adattato HoReCa | Upsell formativo |

**Il "volano" dichiarato:** BarmanMatch connette → BAD organizza eventi → BAD360 gestisce i
locali → BA.IA finanzia la crescita → la formazione SSFormazione → i professionisti tornano su
BarmanMatch.

**⚠️ Lettura critica del volano:** oggi è **aspirazionale, non operativo**. Presuppone liquidità
(professionisti, eventi, hotel onboardati) che non esiste ancora. Un flywheel senza spinta
iniziale è un diagramma. La spinta iniziale realistica è **BAD eventi**, che genera i primi
professionisti e i primi casi per seminare gli altri prodotti.

---

## 3. Stato tecnico verificato (giugno 2026)

| Prodotto | Maturità tecnica | Deploy | Sicurezza/note |
|----------|------------------|--------|----------------|
| **Hub** | Alta (redesign good-vibes con foto) | Repo pronto, **dominio da comprare** | — |
| **BAD (sito+blog)** | **Alta** | **Pronto al deploy** (Vercel, dominio reale) | Blog 80 articoli ora **indicizzabili** (80 pagine statiche + sitemap) |
| **BAD360** | **Alta** (~11 moduli persistenti) | Live (Render+Vercel+Supabase) | Multi-tenant blindato (hotel_id da token); **RBAC per 5 ruoli**; RLS tabelle ok |
| **BA.IA** | Media-alta | Live (vercel.app) | Auth propria (asyncpg); **RLS 14 tabelle messo in sicurezza** |
| **BarmanMatch** | Media-alta (E2E verde) | **Non deployato** | Manca Stripe (subscription+Connect) e modello legale APL |
| **SSFormazione** | Bassa-media | Non deployato | Manca API key; landing dentro app React |

**Debito/limiti tecnici noti:**
- BarmanMatch non monetizzabile finché manca Stripe Connect + modello legale (APL/somministrazione).
- SSFormazione bloccata su API key e non differenziata.
- Cross-link ecosistema relativi (gli altri 4 domini non esistono ancora).
- BAD360: enforcement RBAC server-side da estendere a tutti i router sensibili (primitiva pronta).

---

## 4. Analisi prodotto per prodotto (forze / debolezze)

### 4.1 BAD — eventi & consulenza
**Forze:** servizio reale erogato da Simone, margine alto, zero dipendenza da deploy, brand
proprio con dominio, sito ricco (foto, prezzi) + **blog SEO da 80 articoli** (asset organico).
Conoscenza del mestiere = vantaggio non copiabile.
**Debolezze:** dipende al 100% dal tempo di una persona (non scala oltre le sue ore); manca prova
sociale strutturata (case study, recensioni, numeri); ecommerce "in arrivo" non attivo.

### 4.2 BAD360 — gestionale
**Forze:** ampiezza moduli, multi-tenant sicuro, AI integrata, RBAC per ruoli (raro nei
competitor verticali), già live.
**Debolezze:** 0 clienti; compete con gestionali HoReCa affermati; manca cockpit "cosa va a
fuoco oggi" per ruolo, onboarding guidato, esperienza mobile; vendita a freddo difficile.

### 4.3 BA.IA — finanza agevolata
**Forze:** motore di matching bandi + AI Studio reale, verticale HoReCa, principio
human-in-the-loop (output sempre bozza, € e % da verificare su fonte ufficiale).
**Debolezze:** mercato affollato (consulenti + portali); l'AI-matching è feature, non fossato;
la fiducia è tutto e va resa visibile; vendita B2B lunga.

### 4.4 BarmanMatch — marketplace
**Forze:** potenziale più alto (network effect), E2E funzionante, anti-disintermediazione +
chat + KYC, prelazione eventi BAD come innesco.
**Debolezze:** **cold-start a 2 lati** (il problema più duro in assoluto); non deployato;
Stripe + modello legale mancanti; rischio disintermediazione strutturale.

### 4.5 SSFormazione — e-learning 81/08
**Forze:** mercato obbligatorio per legge, angolo HoReCa + avatar AI.
**Debolezze:** **commodity** con incumbent forti, meno differenziato, non deployato, bloccato su
key. **Candidato n.1 alla pausa** finché gli altri non fanno cassa.

### 4.6 Hub
**Forze:** struttura premium, palette coerente, ora con calore fotografico.
**Debolezze:** vende 5 cose a un visitatore solo (manca ingresso per pubblico); rischio
diluizione del messaggio.

---

## 5. SWOT complessivo

**Strengths**
- Fondatore con dominio operativo HoReCa raro + capacità di costruire prodotto con AI.
- Stack moderno, sicuro, multi-tenant; velocità di esecuzione altissima.
- Un asset di brand con cassa reale (BAD) + asset SEO (blog).

**Weaknesses**
- Bus factor 1; nessun cliente pagante; nessun deploy monetizzato.
- Dispersione su 5 prodotti; volano non ancora reale.
- Marketing/vendita e prova sociale assenti.

**Opportunities**
- Sardegna come beachhead a bassa concorrenza tech; stagione eventi.
- Bundle servizio+software (consulenza con gestionale incluso) difendibile.
- SEO blog → traffico organico → lead BAD a costo ~0.
- Eventi BAD come seme per il marketplace.

**Threats**
- Incumbent gestionali/e-learning; piattaforme staffing nazionali.
- Disintermediazione su BarmanMatch.
- Rischio normativo (somministrazione lavoro, GDPR/AI Act) e IP (confine col committente storico).
- Burnout del fondatore (fronte unico).

---

## 6. Mercato & posizionamento

**Funnel di mercato (logica, non claim):**
- **TAM** — HoReCa Italia: ~300–330k esercizi (bar/ristoranti) `🔶 DA VALIDARE con fonte ISTAT/FIPE`.
- **SAM** — strutture che adotterebbero gestionale+consulenza HoReCa AI-first: sottoinsieme. `🔶`
- **SOM (realistico 12–24 mesi)** — **Sardegna**, rete personale + passaparola + organico:
  ordine di **decine** di clienti servizio/consulenza, non migliaia. `🔶`

**Posizionamento:** non "un altro gestionale" né "un altro portale bandi", ma **"il barman che
ti porta il servizio e il software che lo rende serio"** — credibilità da operatore + tecnologia.

**Concorrenza (sintesi):** gestionali HoReCa affermati (BAD360 deve differenziare su AI + ruoli +
bundle consulenza); portali bandi/consulenti (BA.IA su verticale + human-in-the-loop); piattaforme
staffing (BarmanMatch su nicchia Sardegna + qualità verificata); e-learning 81/08 (SSFormazione
debole → pausa).

---

## 7. Modello di business & pricing (ipotesi)

| Stream | Modello | Prezzo ipotetico `🔶 DA VALIDARE` |
|--------|---------|-----------------------------------|
| BAD eventi | Servizio a evento | ticket medio €€ per evento |
| BAD Consultancy | Retainer mensile | fee/mese per cliente (Bar Pro / Hotel Pro) |
| BAD360 | SaaS abbonamento | €/mese per struttura (tier per moduli) |
| BA.IA | SaaS + success fee | €/mese + % su bando vinto |
| BarmanMatch | Take rate + subscription | % su transazione (lato locale paga) + abbonamento venue; lavoratori gratis |
| SSFormazione | Pay-per-corso | € per corso/utente |

**Principio di prezzo:** ancorare al **valore** (una multa HACCP evitata, un bando vinto, un
evento salvato), non al costo. Il bundle "consulenza + BAD360 incluso" alza il valore percepito
e riduce il churn.

---

## 8. KPI framework

**North Star:** **cassa mensile generata** (servizi) + **MRR** (SaaS) — perché il rischio è la
monetizzazione, non la tecnologia.

**Baseline attuale (onesta):**

| Area | KPI | Valore oggi |
|------|-----|-------------|
| Tutti | Clienti SaaS paganti | **0** |
| Tutti | MRR | **0** |
| BAD | Eventi/mese, ticket medio, margine | `🔶 (dati reali di Simone)` |
| Web | Traffico organico blog | ~0 (pagine appena indicizzabili) |
| BarmanMatch | Pro/locali registrati, fill rate | 0 / non live |

**KPI da attivare per prodotto:**
- **BAD eventi:** lead→preventivo→chiuso (%), ticket medio, margine %, tasso di ripetizione.
- **BAD Consultancy:** clienti attivi, MRR retainer, churn, durata media contratto.
- **BAD360:** signup→attivazione (hotel che inserisce dati reali), free→paid %, MRR, churn, NRR.
- **BA.IA:** signup→paid %, bandi-match→domande presentate, success fee incassate.
- **BarmanMatch:** liquidità (eventi pubblicati/mese, **fill rate**), GMV, take rate, tempo-al-match.
- **SEO/Web:** sessioni organiche, articoli→lead WhatsApp, posizionamento keyword bar/eventi Sardegna.
- **Salute fondatore (sì, è un KPI):** ore/settimana, # fronti attivi contemporaneamente.

---

## 9. Forecast 12 mesi (parametrico, `🔶 IPOTESI DA VALIDARE`)

> **Non sono previsioni: sono un MODELLO.** Sostituisci i driver con i tuoi numeri reali (li hai
> per BAD). Le 3 colonne sono scenari, non promesse.

**Driver (compila con dati reali):**

| Driver | Conservativo | Base | Ottimistico |
|--------|-------------|------|-------------|
| BAD eventi/mese | a | b | c |
| Ticket medio evento (€) | — | — | — |
| Clienti Consultancy (fine anno) | 1–2 | 3–5 | 6–10 |
| Clienti BAD360 paganti (fine anno) | 0–2 | 3–8 | 10–20 |
| Clienti BA.IA paganti (fine anno) | 0–1 | 2–5 | 6–12 |
| BarmanMatch live? | no | sì (pilota Sardegna) | sì + GMV |

**Run-rate di uscita (mese 12) = Σ stream.** Esempio di **struttura** del calcolo (numeri da inserire):
`MRR_uscita = (Consultancy × fee) + (BAD360 × ARPU) + (BA.IA × ARPU) + (BarmanMatch take+sub)`
`Cassa_servizi = BAD eventi/mese × ticket × margine%`

**Lettura realistica:** nel **conservativo/base**, il grosso della cassa a 12 mesi viene da
**BAD eventi + Consultancy** (servizio), con SaaS in rampa lenta (primi clienti pilota). Il SaaS
diventa la quota dominante solo se si dedica tempo a vendita/onboarding — che oggi è il collo di
bottiglia (bus factor). **Il forecast è guidato dal tempo del fondatore, non dalla tecnologia.**

---

## 10. Rischi & mitigazioni

| Rischio | Sev. | Mitigazione |
|---------|------|-------------|
| **Bus factor 1** | 🔴 Alta | Focalizzare su 1–2 punte (BAD+BAD360); mettere SSFormazione in pausa; documentare processi; primo collaboratore part-time quando la cassa lo consente |
| Nessun cliente pagante | 🔴 Alta | Un **pilota** BAD360 (anche su un cliente di consulenza) prima di vendere ad altri; lead-with-service |
| Cold-start BarmanMatch | 🟠 Media | Seminare dagli eventi BAD su Sardegna; non lanciare nazionale |
| Monetizzazione bloccata | 🟠 Media | Stripe su BarmanMatch; pricing semplice su BAD360 |
| Normativo (APL, GDPR, AI Act) | 🟠 Media | Modello legale BarmanMatch; privacy/dati legali BAD reali; human-in-the-loop su BA.IA |
| Diluizione messaggio | 🟡 Bassa | Hub con ingressi per pubblico; vetrina coerente (non marketare come "live" ciò che non lo è) |

---

## 11. Roadmap & Go-to-Market (priorità)

**Ora → 3 mesi (cassa + prova):**
1. **Deploy BAD** (dominio + Vercel) → sito + blog SEO live = lead organici a costo ~0.
2. **Vendere eventi + consulenza** (canali: WhatsApp, passaparola, organico Sardegna).
3. **1 pilota BAD360** documentato come case study.
4. **SSFormazione in pausa** esplicita.

**3 → 9 mesi (scalare ciò che funziona):**
5. Bundle "Consulenza + BAD360" come offerta principale B2B.
6. BA.IA: outreach mirato PMI + commercialisti partner.
7. Cockpit per ruolo + onboarding + mobile su BAD360 (riduce attrito adozione).

**9 → 18 mesi (network):**
8. BarmanMatch: deploy + Stripe + pilota Sardegna alimentato dagli eventi BAD.
9. Primi URL assoluti ecosistema (domini) + barra ecosistema riattivata.
10. Valutare primo collaboratore.

---

## 12. Fabbisogno risorse
- **Tempo:** la risorsa più scarsa. Serve proteggere ore per **vendita** (non solo build).
- **Capitale:** minimo (stack low-cost: Vercel/Render/Supabase free-tier; domini). Il vero
  investimento è tempo.
- **Persone:** valutare 1 supporto part-time (operativo eventi o sales) quando la cassa regge.
- **Sblocchi pendenti:** domini (4), API key SSFormazione, dati legali BAD, Stripe BarmanMatch.

---

## 13. Conclusione
SkillSolutions ha **fondamenta tecniche solide e rare** per un fondatore solo. Il valore, però,
non si realizza finché non c'è **un cliente che paga**. Da qui in avanti il lavoro è **vendita e
focus**, non altre feature. La strada a minor rischio: **monetizzare il servizio (BAD) oggi, usare
il software come arma**, e far crescere il SaaS sui clienti che il servizio porta — non l'opposto.

> *"La tecnologia è già avanti. Ora deve incontrare il mercato."*

---
*Documento interno. I valori marcati `🔶 DA VALIDARE` vanno sostituiti con dati operativi reali
prima di qualunque uso esterno (pitch, investitori, clienti). Vedi anche
`ANALISI_CRITICA_VENDIBILITA_2026.md` per la versione "ufficio vendite".*
