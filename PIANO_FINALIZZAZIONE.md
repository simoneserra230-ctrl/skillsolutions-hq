# PIANO FINALIZZAZIONE — Tutti i Progetti
# Creato: 12 giugno 2026 | Stato dopo il passaggio di consolidamento
# Ogni progetto: cosa è stato fatto OGGI, cosa resta, chi lo fa (tu o Claude)

---

## STATO DOPO IL CONSOLIDAMENTO (12/6/2026)

| Progetto | % | Versionato | Pushato | README_STATO | Prossimo passo |
|---|---|---|---|---|---|
| Formazione (AI) | 85 | ✅ `formazione` | ✅ | STATO_PROGETTO_v12 | deploy + 51 lezioni |
| BA.IA SaaS B2C | 80 | ✅ `baia-saas` | ✅ oggi | ✅ oggi | DEPLOY → LANCIO ★ |
| BAD360 | 70 | ✅ `BAD360_SAAS_B2C` | ✅ oggi | ✅ oggi | fine rebuild gold |
| SSFormazione | 60 | ✅ locale | ⬜ repo da creare | STATO v1 | ⏸️ sospeso (upstream) |
| BarmanMatch | 40 | ✅ locale (oggi) | ⬜ repo da creare | ✅ oggi | ⏸️ congelato |
| HQ (strategia+finanza+siti) | — | ✅ locale (oggi) | ⬜ repo da creare | questo file | — |
| BAD.S Evolution | 10 | in HQ | — | — | ⏸️ congelato (visione) |

---

## AZIONI CHE SOLO TU PUOI FARE (in ordine di urgenza)

### Subito (15 minuti)
1. [ ] **Sposta `recovery-codes.txt` e `BA.IA - SS KEY.txt`** dal Desktop a un
   password manager (Bitwarden/1Password) e cancellali dal disco
2. [ ] **Crea 3 repo private su GitHub** (github.com/new, account simoneserra230-ctrl):
   `ssformazione`, `barmanmatch`, `skillsolutions-hq` — poi dimmi "pusha" e penso io
3. [ ] **Verifica revoca chiave Anthropic compromessa** su console.anthropic.com
   (quella del progetto Formazione segnalata nei giorni scorsi)

### Questa settimana
4. [ ] **Deploy BA.IA**: dashboard Render → collega repo `baia-saas` (env da
   .env.render locale) + Vercel per il frontend. Posso guidarti passo-passo
5. [ ] **Deploy Formazione**: completare il servizio Render già configurato
   (render.yaml a posto dal fix rootDir) + Vercel
6. [ ] **Decidi il prezzo BA.IA** (proposta nel README_STATO: €29-49/mese) e
   crea uno Stripe Payment Link (5 minuti, niente codice)

### Poi (con me)
7. [ ] Smoke test produzione BA.IA → correzioni → si vende
8. [ ] Generazione batch 51 lezioni Formazione (sessioni dedicate)
9. [ ] Prima pratica bando completa con AGENTE_PRATICA_BANDO (serve un bando vero)
10. [ ] Quando riprende SSFormazione: sync da Formazione PRIMA della consegna/rimozione

---

## COSA È STATO FATTO OGGI (consolidamento)

- **BA.IA**: protetto `.env.render` nel gitignore; committati e pushati i moduli
  nuovi (ai_advisor, regulatory_monitor, report_generator, report.html,
  docker-compose, skill Claude); README_STATO con percorso lancio
- **BAD360**: gitignore esteso (esclusi `file input/` 386MB, STORICO, credenziali
  demo); committato e pushato il rebuild gold (20 pagine, -127k righe di bloat,
  +sdk +bandi +login +recensioni + BAD360_ALL legacy); README_STATO
- **BarmanMatch**: repo git creato, primo commit (31 file), gitignore,
  README_STATO con piano di scongelamento
- **HQ**: repo alla root per ANALISI_STRATEGICA, PROMPT_BUSINESS_PLAN,
  AGENTI_FINANZA (5 agenti), siti SKILLSOLUTIONS.COM e BAD.S, questo piano
- Corretta l'analisi strategica: BA.IA e BAD360 ERANO già versionati con
  remote GitHub (il rischio reale era il lavoro non committato — ora risolto)

---

## REGOLE PERMANENTI

- Mai committare: .env*, chiavi, credenziali demo, `file input/`, dati clienti
- Ogni sessione di lavoro su un progetto chiude con commit (+ push se c'è remote)
- La strategia non cambia: BA.IA è il cuneo. Tutto il resto aspetta i suoi
  primi 10 clienti paganti.
