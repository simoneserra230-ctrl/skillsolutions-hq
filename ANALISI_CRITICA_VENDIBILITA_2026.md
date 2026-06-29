# 🔬 Analisi critica & vendibilità — SkillSolutions (giugno 2026)

> Richiesta da Simone: guardare i progetti **in modo critico, non positivo**, anche se siamo a buon punto.
> Quattro lenti: **direttore d'hotel** (utente), **commerciale** (landing), **ufficio vendite** (cosa si vende davvero), **revisione progetti senza sconti**.
> Niente cheerleading: sotto c'è solo ciò che frena le vendite.

---

## 0. La verità in una riga
**Hai costruito 5 prodotti e venduto 0. La parte difficile (distribuzione + incasso) non è ancora iniziata.** Il codice non è il collo di bottiglia: lo sono deploy, posizionamento e un solo paio di mani.

---

## 1. I 4 rischi strutturali (validi per TUTTO l'ecosistema)

1. **Bus factor = 1.** Cinque prodotti, un fondatore. Ognuno vuole supporto, vendita, manutenzione, aggiornamenti normativi. Da solo non reggi 5 fronti: o ne scegli 1-2 come punta, o l'ecosistema ti mangia il tempo senza generare cassa. **Questo è il rischio #1.**
2. **Zero clienti paganti, zero transazioni live.** Nessun pagamento Stripe configurato in prod, nessun onboarding reale. Finché non c'è 1 cliente che paga, ogni "è pronto" è un'ipotesi non testata.
3. **Il "volano" è una slide, non un fatto.** La narrazione BarmanMatch→BAD→BAD360→BA.IA→loop presuppone liquidità (professionisti, eventi, hotel) che **non esiste ancora**. Un flywheel senza spinta iniziale è un diagramma. Bello per un investitore, pericoloso come strategia operativa.
4. **Gap deploy/narrazione.** L'hub vende **BarmanMatch come "servizio principale"** → ma BarmanMatch **non è deployato** e la sua landing è uno **stub di 25 righe**. Chi clicca trova il vuoto. Stai mettendo in vetrina il prodotto meno pronto.

---

## 2. Revisione progetto per progetto (senza sconti)

### BAD — eventi & catering (`BAD.SKILLSOLUTIONS.COM`)
- ✅ **È l'unica cosa che vende DAVVERO oggi.** Landing ricca (2398 righe, 116 immagini, prezzi presenti), è un servizio che eroghi con le tue mani, margine alto, zero dipendenza da piattaforma.
- 🔴 È anche l'unico asset con immagini/“good vibes” → **gli altri dovrebbero copiare QUESTO**, non l'hub.
- 🔴 Manca la prova sociale strutturata (case study eventi reali, recensioni clienti, numeri: quanti eventi/anno, pax serviti).

### BAD360 — gestionale (`BAD360.SKILLSOLUTIONS.COM`)
- ✅ Enorme lavoro fatto: ~11 moduli ora persistenti + multi-tenant blindati (NC incluso), appena deployato.
- 🔴 **Era un guscio bellissimo e vuoto; ora ha le fondamenta ma 0 clienti.** Competere coi gestionali HoReCa esistenti richiede una *sales motion*, non solo features.
- 🔴 **Manca la home-cockpit per ruolo**: oggi chi entra vede 25 moduli a pari livello. Un direttore non vuole 25 tab, vuole "cosa va a fuoco oggi". (→ collegato a RBAC + morning briefing).
- 🔴 Nessun onboarding: gestionale vuoto = intimidatorio. Demo data ≠ dati miei.
- 🔴 Desktop-heavy: un capo-sala vive sul telefono.

### BA.IA — finanza agevolata (`BA.IA.SKILLSOLUTIONS.COM`)
- ✅ Attivo, motore di matching bandi + AI Studio reali. Landing snella ma funzionale (“I bandi giusti”).
- 🔴 **Mercato affollato** (mille consulenti e portali bandi). L'AI-matching è una *feature*, non un fossato difendibile.
- 🔴 La fiducia è tutto: € e % sbagliati = cliente perso. Il principio human-in-the-loop c'è — va reso **visibile** al cliente (è un argomento di vendita, non solo tecnico).
- 🔴 Landing 0 immagini: fredda per un imprenditore che deve fidarsi.

### BarmanMatch — marketplace (`BARMANMATCH.SKILLSOLUTIONS.COM`)
- ✅ Codice completo, E2E verde, anti-disintermediazione/chat/KYC fatti.
- 🔴 **Marketplace a 2 lati = il più difficile da avviare** (chicken-egg: niente professionisti → niente eventi → niente professionisti).
- 🔴 **Non deployato, landing = stub 25 righe, Stripe assente.** Eppure è marketato come "il principale". **Contraddizione narrativa più grave dell'ecosistema.**
- 🔴 Va avviato a freddo SU UNA NICCHIA (Sardegna) **alimentato dagli eventi BAD**, non lanciato come piattaforma nazionale.

### SSFormazione — e-learning 81/08 (`SSFormazione`)
- 🔴 **Il meno differenziato + non deployato + stub 19 righe + manca API key.** Mercato commodity con incumbent forti. L'angolo HoReCa + avatar AI è carino ma debole come unico vantaggio.
- 🔴 **Candidato n.1 a essere messo in pausa** finché gli altri non generano cassa.

### Hub SkillSolutions (`SKILLSOLUTIONS.COM/index.html`)
- ✅ Tipografia premium, DS gold coerente, struttura buona (hero/ecosistema/flywheel/about/contatto).
- 🔴 **Zero foto, zero facce, zero prova.** L'ospitalità è emozione e sensorialità: una landing gold-su-nero con emoji è fredda. Hai ragione: **simone-serra.html e BAD vendono di più** perché hanno immagini e calore.
- 🔴 **Vende 5 cose a un visitatore solo** → non capisce se è un locale, un barman o un'azienda. Manca l'ingresso per pubblico ("Sei un locale? / un professionista? / cerchi staff?").
- 🔴 Metriche da fondatore ("330k esercizi target", "AI in ogni prodotto") invece di benefici per il cliente.

---

## 3. Cosa è VENDIBILE davvero (lente ufficio vendite)

Ordinati per **chiudibilità OGGI**, non per potenziale:

| # | Cosa | Chiudibile | Perché | Motion |
|---|------|-----------|--------|--------|
| 1 | **BAD eventi + BAD Consultancy** | **ORA** | Servizio erogato da te, margine alto, 0 dipendenza da deploy, mercato che già conosci | Vendita diretta (WhatsApp, passaparola, Sardegna) |
| 2 | **BAD360** (come tool della consulenza) | 1-3 mesi | Deployato; ma serve cockpit per ruolo + onboarding + 1 cliente pilota | Bundle con la consulenza, non SaaS a freddo |
| 3 | **BA.IA** | 1-3 mesi | Attivo; B2B, serve trust + casi | Outreach mirato PMI + commercialisti partner |
| 4 | **BarmanMatch** | 6+ mesi | 2-sided, cold-start duro | Seed via eventi BAD su Sardegna, poi allarga |
| 5 | **SSFormazione** | quando c'è cassa | Commodity, non deployato | Pausa / upsell ai clienti consulenza |

**Tesi di vendita (la cosa più importante del documento):**
> **Vendi il SERVIZIO (BAD eventi + consulenza), usa il software come arma di acquisizione e retention — non provare a vendere 5 SaaS a freddo.**
> Il cliente compra *te* e il risultato; il gestionale è ciò che ti rende difendibile e scalabile. Lead with service, software as wedge.

---

## 4. Direttore d'hotel — i pain reali (lente utente)
Se domani un direttore usa BAD360:
1. **"Non ho un cruscotto del mattino."** Voglio una sola schermata: NC critiche, SLA scaduti, certificati in scadenza, anomalie food cost, coperti/eventi di oggi, buchi di turno. Non 25 moduli pari livello. *(Il morning briefing c'è nel backend — manca la home per ruolo.)*
2. **"Chi vede cosa?"** Il lavapiatti non deve vedere i margini; l'F&B manager non deve vedere il P&L; il consulente esterno solo la compliance. **Oggi: chiunque ha il token vede tutto l'hotel.** Problema di sicurezza *e* di usabilità. → **è esattamente il tuo punto RBAC.**
3. **"Chi inserisce i dati e perché dovrebbe?"** Un gestionale è utile solo se popolato. Serve attrito minimo (mobile, scansione, voce) e un motivo immediato (un alert che salva una multa HACCP, non un report da compilare).
4. **"Da dove inizio?"** Nessun wizard di setup. Gestionale vuoto = abbandono.
5. **"Sono al piano, non in ufficio."** Manca l'esperienza mobile-first.

---

## 5. Landing — revisione da commerciale (concreta)
| Landing | Stato reale | Verdetto commerciale |
|---|---|---|
| BAD | 116 img, prezzi, ricca | ✅ La migliore. Manca solo prova sociale strutturata |
| Hub | 0 img, premium ma freddo | 🟠 Ridisegnare in stile simone-serra (foto, facce, calore) + ingressi per pubblico |
| BA.IA | 161 righe, 0 img | 🟠 Aggiungere immagini/visi + casi + rendere visibile l'"AI verificata da umano" |
| BarmanMatch | **stub 25 righe** | 🔴 Inesistente. È il "principale" a vetrina: o lo costruisci o smetti di chiamarlo principale |
| SSFormazione | **stub 19 righe** | 🔴 Inesistente. Coerente col metterlo in pausa |

**Regole commerciali trasversali da applicare nel redesign:**
- Una CTA chiara per pubblico (non "scopri tutto").
- Foto reali (bar, eventi, Sardegna, la tua faccia) > emoji e gradienti.
- Benefici e numeri-cliente, non metriche-fondatore.
- Prova sociale (anche 1-2 casi/recensioni) in alto.
- Coerenza degli stati: non marketare come "principale/attivo" ciò che non è live.

---

## 6. Raccomandazione operativa (priorità)
1. **FOCUS**: tratta BAD (servizio) come motore di cassa; BAD360 e BA.IA come strumenti di quel servizio. Metti SSFormazione in pausa esplicita.
2. **Coerenza vetrina**: o deployi BarmanMatch + landing vera, o smetti di chiamarlo "principale" sull'hub. Oggi è un autogol.
3. **Un cliente pilota** su BAD360 (anche il tuo stesso contesto operativo) prima di vendere ad altri.
4. **RBAC + cockpit per ruolo**: sblocca sia sicurezza sia adozione (il pain #1 del direttore). → prossimo build.
5. **Redesign in stile "good vibes"** (foto/calore di simone-serra.html e BAD) su hub + landing snelle.

> Nota onesta: il lavoro tecnico fatto è notevole e raro per un solo fondatore. Ma il valore non si realizza finché non c'è un cliente che paga. Da qui in poi il lavoro è **vendita e fuoco su poche cose**, non altre feature.
