# ANALISI STRATEGICA ECOSISTEMA SKILLSOLUTIONS — Giugno 2026
# Documento di riferimento. Aggiornare a ogni cambio di stato significativo.

---

## 1. LA MAPPA

### Anima A — Lavoro Ambiente Impresa (genera reddito oggi)
- CORSI FORMAZIONE ELEARNING (macchina corsi e-learning, repo `formazione`) —
  **progetto COMMISSIONATO: verrà consegnato al committente e rimosso da questa
  cartella a fine lavoro.** Fino ad allora è l'upstream di SSFormazione: ogni
  aggiornamento va portato su SSFormazione PRIMA della consegna/rimozione.
- Edilcassa/CTPR, dashboard AIF/SOGAER, materiali Bitrix24/HACCP

### Anima B — Ecosistema personale SkillSolutions (genera futuro)
| Progetto | Stato | Prontezza mercato |
|---|---|---|
| BA.IA SaaS B2C | funzionante | ★★★★☆ il cuneo |
| BAD360 | front maturo (22 moduli, 8 agenti AI) | ★★★☆☆ |
| SSFormazione | creato, IN SOSPESO | ★★☆☆☆ |
| BarmanMatch | skeleton | ★☆☆☆☆ |
| BA.IA B2B/NAS/RAG | pianificate | ★☆☆☆☆ |
| BAD.S Evolution | visione (cartelle vuote) | ☆☆☆☆☆ |
| Nido Agenti | pool agenti trasversale | asset interno |
| Libro SCM, NFC token, 3D Menu | asset pronti mai lanciati | one-shot |

---

## 2. IL FLYWHEEL (tesi strategica)

```
BA.IA trova il bando ──→ i bandi FINANZIANO la formazione ──→ SSFormazione eroga i corsi
        ↑                                                              │
        │                                                              ▼
  il locale cresce ←── BAD360 gestisce l'operatività ←── BarmanMatch trova lo staff
```

Cliente unico: il ristoratore/albergatore. Ogni prodotto crea il bisogno del successivo.
I bandi spesso finanziano la formazione → BA.IA può pagare i corsi SSFormazione ai
clienti con fondi pubblici. Questo è il vantaggio competitivo non copiabile.

---

## 3. PUNTI DEBOLI (analisi onesta — giugno 2026)

### STRATEGICI (i più gravi)
1. **Dispersione**: 6 brand, 10+ prodotti, ZERO clienti paganti. Ogni ora su un
   progetto nuovo è un'ora tolta al primo euro di fatturato.
2. **Zero validazione di mercato**: nessun prodotto ha mai incontrato un cliente
   vero. Tutte le ipotesi (prezzo, bisogno, canale) sono non testate.
3. **Bus factor = 1**: tutto dipende da Simone + Claude. Nessun collaboratore,
   nessuna documentazione di processo per terzi.
4. **Confine IP Ambiente Impresa ↔ personale non formalizzato**: la KB Formazione
   nasce da documenti del datore di lavoro; SSFormazione deve avere contenuti
   propri prima di vendere. Rischio contestazione.
5. **Tempo frazionato**: il lavoro dipendente assorbe le ore migliori; i progetti
   personali avanzano a sprint serali — incompatibile con il supporto clienti
   di un SaaS live.

### TECNICI
6. **Nessun deploy completato end-to-end**: Render a metà, Vercel mai partito,
   nessuna URL di produzione collaudata.
7. **Stack frammentato**: FastAPI+vanilla JS oggi vs target Next.js dichiarato;
   2 provider DB (Neon + Supabase); repo GitHub solo per `formazione`.
   BAD360, BarmanMatch, BA.IA non versionati su remoto = rischio perdita totale.
8. **Sicurezza**: `recovery-codes.txt` e `BA.IA - SS KEY.txt` in chiaro sul
   Desktop; password SHA-256 senza salt nel backend; chiave Anthropic compromessa
   non ancora revocata (verificare!); `.env` sparsi in cartelle multiple.
9. **Zero test automatici, zero CI/CD, zero monitoring**: un bug in produzione
   verrebbe scoperto dal cliente, non da te.
10. **API key AIFormazione non finanziata** (solo quel progetto): il committente
    di AIFormazione non ha ancora attivato la propria chiave Anthropic — blocca
    la consegna di QUEL prodotto. Gli altri progetti (BA.IA, BAD360...) hanno
    chiavi proprie e finanziate, 1 per progetto. Resta il tema generale: definire
    un budget API per cliente nei prodotti SkillSolutions (unit economics).

### COMMERCIALI
11. **Nessun pricing definito** su nessun prodotto. Nessun listino, nessuna landing
    con CTA d'acquisto attiva, nessun funnel.
12. **Nessuna presenza social attiva**: gli agenti marketing esistono come
    istruzioni, ma pagine/account/Zapier non sono collegati.
13. **Nessun processo di vendita**: chi risponde a un lead? Con che contratto?
    Fatturazione? Stripe configurato ma mai usato.

### LEGALI/COMPLIANCE
14. **GDPR**: nessuna privacy policy, T&C, DPA sui prodotti.
15. **Formazione normata**: i corsi sicurezza hanno requisiti di legge
    (Accordo Stato-Regioni, soggetto formatore qualificato, attestati) —
    venderli senza compliance = danno reputazionale e legale irreversibile.

---

## 4. INFRASTRUTTURA

### AS-IS (oggi — giugno 2026)

```
                    ┌──────────────────────────────────────────┐
                    │   PC WINDOWS (unico punto di lavoro)     │
                    │   Claude Code + repo locali              │
                    │   ⚠ chiavi in txt sul Desktop            │
                    └───────────────┬──────────────────────────┘
                                    │ git push (solo formazione)
                          ┌─────────▼─────────┐
                          │  GITHUB (privato) │ ← solo repo `formazione`
                          └─────────┬─────────┘   BAD360/BA.IA/BM non versionati ⚠
                                    │ autodeploy (configurato, mai collaudato)
        ┌───────────────────────────┼────────────────────────────┐
        ▼                           ▼                            ▼
┌───────────────┐         ┌──────────────────┐         ┌────────────────┐
│ RENDER        │         │ VERCEL           │         │ LEARNWORLDS    │
│ FastAPI       │         │ frontend React   │         │ erogazione     │
│ (deploy a     │         │ (mai deployato)  │         │ corsi (manuale)│
│  metà) ⚠      │         └──────────────────┘         └────────────────┘
└───────┬───────┘
        │
   ┌────▼─────┐   ┌────────────┐   ┌─────────────────────────────────┐
   │ NEON PG  │   │ SUPABASE   │   │ SERVIZI AI                      │
   │ KB 81/08 │   │ BAD360     │   │ Anthropic (1 key/progetto;      │
   │  ⚠ solo key AIFormazione KO)    │
   │ 2.858 arg│   │ BarmanMatch│   │ HeyGen (Creator, 20 cred/mese)  │
   │ condiviso│   │ Edilcassa  │   │ Canva / Zapier / Make (MCP,     │
   │ Form.+SS │   └────────────┘   │  non autenticati)               │
   └──────────┘                    └─────────────────────────────────┘
```

### TO-BE (target 6-12 mesi)

```
                   ┌─────────────────────────────────────────┐
                   │  GITHUB ORG "skillsolutions"            │
                   │  1 repo per prodotto + CI (test+deploy) │
                   │  Secrets SOLO in env dei provider       │
                   └──────────────┬──────────────────────────┘
                                  │
        ┌─────────────────────────┼──────────────────────────┐
        ▼                         ▼                          ▼
┌──────────────┐        ┌──────────────────┐       ┌──────────────────┐
│ RENDER/Fly   │        │ VERCEL           │       │ STRIPE           │
│ API FastAPI  │◄──────►│ Next.js (v2)     │──────►│ abbonamenti      │
│ (BA.IA,      │        │ landing + app    │       │ + fatturazione   │
│  BAD360 API) │        │ per ogni brand   │       └──────────────────┘
└──────┬───────┘        └────────┬─────────┘
       │                         │
┌──────▼──────────────┐  ┌───────▼─────────┐    ┌──────────────────────┐
│ SUPABASE (unico DB) │  │ POSTHOG         │    │ AI LAYER             │
│ auth+storage+pg     │  │ analytics       │    │ Anthropic API (key   │
│ schema per prodotto │  │ + Sentry errori │    │ per prodotto, budget)│
│ (migrare Neon qui   │  └─────────────────┘    │ HeyGen Team          │
│  quando conviene)   │                         │ Nido Agenti (pool)   │
└─────────────────────┘                         └──────────────────────┘
        │ FLUSSI DATI CHIAVE (il flywheel tecnico):
        │ BA.IA.cliente ──→ SSFormazione.iscrizione (API LearnWorlds: enroll)
        │ BAD360.modulo_bandi ──→ BA.IA.api (stesso motore, white-label)
        │ BarmanMatch.profili ──→ BAD360.shift_manager
        └ UTM unificati ──→ PostHog ──→ decisioni marketing
```

Principi TO-BE: 1 solo provider DB, secrets mai su disco, ogni prodotto ha repo+
CI+URL+prezzo, analytics dal giorno zero, l'AI ha budget e rate limit per prodotto.

---

## 5. MODALITÀ DI VENDITA

| Asset | Modello | Canale |
|---|---|---|
| BA.IA B2C | abbonamento €/mese | self-service, content marketing bandi |
| BA.IA B2B | licenza + canone | vendita diretta, consulenti |
| BAD360 | abbonamento suite | upsell da BA.IA, demo |
| SSFormazione | corso B2B per locale | finanziato dai bandi (via BA.IA) |
| Suite Finanza (AGENTI_FINANZA/) | servizio a pratica €500-2.500 | i clienti BA.IA che vincono bandi hanno bisogno di BP + previsionale |
| Consulenza | a progetto | network personale, LinkedIn |
| Libro/NFC/3D | one-shot | e-commerce, eventi settore |

---

## 6. ROADMAP CONSIGLIATA

1. **Sicurezza** (1 giorno): chiavi nel password manager, repo GitHub per tutto
2. **Chiudere Formazione AI** (lavoro pagato, collauda la macchina)
3. **Lanciare BA.IA B2C** = IL CUNEO: deploy, prezzo, landing, 10 clienti paganti
4. **BAD360 secondo atto**: upsell ai clienti BA.IA
5. **SSFormazione** si sblocca coi bandi formazione vinti dai clienti BA.IA
6. **Congelati ufficialmente**: BAD.S, BarmanMatch, Capital-Serra, NAS/B2B
   (finché i primi due non fatturano)

Regola: nessun progetto nuovo finché BA.IA non ha 10 clienti paganti.
