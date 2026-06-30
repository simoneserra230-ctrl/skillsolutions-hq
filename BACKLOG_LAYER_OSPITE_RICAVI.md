# 🧭 Backlog — Layer "Ospite & Ricavi" (lato FRONT mancante)

> Origine: analisi giu 2026. L'ecosistema copre benissimo il **BACK** (costi/compliance/staff)
> ma è quasi assente sul **FRONT** (ricavi/ospite), dove l'AI 2026 crea più valore e dove il
> piccolo operatore turistico soffre di più (commissioni OTA 18-22%, niente revenue manager/concierge).
> Focus confermato da Simone: **turismo/ospitalità** (il suo mestiere). **In coda — non ancora avviato.**
> NB: "c'è di più ancora" → questo backlog è APERTO, si aggiungono idee in fondo.

## Principio
Restare dove **expertise (HoReCa di Simone) × valore-AI** si sovrappongono: conversazione ospite,
upsell, **esperienze** (Simone È l'esperienza). **NON** costruire PMS/channel manager (campo affollato:
Amenitiz/Lodgify/Octorate = nessun fossato). Costruire il **cervello AI che ci sta sopra**.

## Il flywheel reso reale (perché è suo)
Hotel/B&B propone all'ospite un'esperienza (es. "aperitivo in spiaggia col barman") → **la eroga BAD**
→ **la staffa BarmanMatch** → la struttura gira su BAD360. L'ospite del partner diventa cliente BAD.
Il layer ospite = **canale di distribuzione** per i servizi BAD, non solo un tool.

---

## 🎯 IN CODA — implementazioni (ordine di leva)

### 1. AI Guest Assistant (multilingue) — PRIORITÀ ALTA
Assistente web/WhatsApp che risponde all'ospite, gestisce pre-arrivo e **converte/uppsella**.
- **Riuso diretto:** il **RAG** di BA.IA (`/ai/rag/ask`) → "rispondi all'ospite SOLO dalla knowledge
  base della struttura" (orari, servizi, FAQ, esperienze, regole) + multilingua.
- **Riuso:** multi-tenant BAD360 (hotel_id dal token), pattern AI Studio, `_flag_figures`/disclaimer.
- **Da costruire:** tabella `guest_kb` per struttura (FAQ/info caricabili dall'admin) + endpoint
  `/api/guest/ask` (RAG sulla guest_kb) + widget chat/WhatsApp. Multilingua = istruzione nel prompt.
- KPI: % richieste risolte senza umano, conversione inquiry→prenotazione, upsell generati.

### 2. Upsell Esperienze locali — PRIORITÀ ALTA (è il flywheel)
Catalogo di esperienze che la struttura propone all'ospite → prenotazione → innesco BAD/BarmanMatch.
- **Da costruire:** modulo `esperienze` (catalogo per struttura: titolo, prezzo, tipo, fornitore),
  proposta all'ospite (in-stay/pre-arrivo via Guest Assistant), prenotazione, **ponte a BAD eventi +
  BarmanMatch** per l'erogazione/staff. AI suggerisce l'esperienza giusta per profilo ospite.
- KPI: esperienze vendute/ospite, ricavo ancillare, % che diventano lavori BAD.

### 3. Direct-booking nudge / disintermediazione — PRIORITÀ MEDIA
NON un channel manager. Solo lo strato AI ad alta leva sopra il PMS:
- Assistente che **converte** l'inquiry in prenotazione diretta (web/WhatsApp).
- Automazione **recensione → re-booking diretto** (post-soggiorno) + incentivo "perché prenotare diretto".
- KPI: % diretto vs OTA, commissioni risparmiate.

### 4. Pricing assistant AI (suggerimento tariffe) — PRIORITÀ BASSA
AI che propone tariffe (stagionalità/occupazione/eventi locali). Richiede dati di mercato → dopo.

### 5. (Operations, opzionali, demand-pull)
- Ticket manutenzione + predictive maintenance (IoT) — alto valore hotel, ma effort alto.
- Demand forecast staffing/F&B (collega a turni + eventi).

---

## ➕ Aggiunte future — ricerca avanzata #2 (giu 2026): nuovi "lavori di nicchia" gestibili con l'AI

> Ottica: ogni voce = un RUOLO che il piccolo operatore non può assumere, che l'AI può fare. Ordinati per FIT (expertise Simone × mercato Sardegna × leva AI × spinta normativa).

- **A) AI Event/Wedding Coordinator** 🔥 (è il mestiere BAD): mercato matrimoni ~$70B, +150% adozione AI in 1 anno, 54% coppie già usano AI. L'AI gestisce budget, **coordinamento fornitori**, timeline dinamica, guest list + **diete/allergeni**, task catering auto-innescati. → rende scalabile l'operatività eventi di BAD E si vende a venue/wedding planner. Massimo fit (è la sua attività). Riuso: events CRM + BarmanMatch (staff) + BAD (catering).
- **B) AI Beverage Program** 🔥 (la nicchia PERSONALE di Simone = bar manager/mixologist): "beverage director" gestisce cocktail+vini+birre+spiriti. AI = acceleratore (baseline), non sostituisce il giudizio. Menu engineering bevande, costo, abbinamenti, **cantina/inventario**, schede. Riuso: hotellerie/wine cost di BAD360. Fossato profondo (è letteralmente l'esperto).
- **C) AI ESG / Sostenibilità (CSRD)** 🔥 spinta NORMATIVA: dal 2026 gli hotel devono fornire **dati ESG certificati/audit** (CSRD); l'ESG incide su finanziamenti, eligibilità brand e **ranking sui portali**; chi non documenta è escluso da green financing. È una nuova ondata-compliance come fu l'HACCP. Riuso: `esg_reports` (già in BAD360) + **ponte a BA.IA** (bandi green/finanza agevolata). Rule-based → espandibile.
- **D) STR / Villa & Case Vacanza** (segmento Sardegna enorme, oggi NON servito dall'ecosistema hotel-centrico): adozione AI 61-70%. Pezzi interni ad alto margine ("start internal, not guest-facing"): messaggistica ospite (riuso Guest Assistant), **coordinamento pulizie post-checkout**, **verifica ospite/anti-frode** (party-house, frodi pagamento), dynamic pricing. → estendere il Layer Ospite al segmento case-vacanza/ville.
- **E) Restaurant Intelligence** (clienti ristorazione): **no-show prediction −40%**, table/yield management, **food waste −30-40%** (ROI 3-6 mesi, anche leva normativa anti-spreco), forecast prep/domanda (80-95% accuratezza). Modulo per clienti ristorante di BAD360.
- **F) Scheduling labor-compliant (CCNL)** (enhancement su Turni): rota AI che rispetta riposi/pause/straordinari/CCNL → compliance lavoro + benessere staff. Niche ma concreto.

> Guardrail invariato: 1-2 fronti alla volta. I più on-brand/fossato: **A (eventi/matrimoni) + B (beverage program)**. C (ESG) ha spinta normativa forte e si lega a BA.IA. Fonti: vedi sessione ricerca giu 2026.

## Guardrail
1 fronte alla volta (bus factor 1). Partire da **(1) Guest Assistant + (2) Esperienze** = massima
leva + è il flywheel che fa cassa. Tutto il resto demand-pull.
Vedi [[design-direction-sellability]], `ANALISI_CRITICA_VENDIBILITA_2026.md`, `WHITE_PAPER_SKILLSOLUTIONS_2026.md`.
