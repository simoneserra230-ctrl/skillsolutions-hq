# 🌐 ECOSISTEMA SKILLSOLUTIONS — Mappa Master
# Single source of truth di tutto. Creato: 12 giugno 2026.
# Se cerchi "dove sta / a che punto è / come si lega" una cosa, parti da qui.

> Founder: Simone Serra · Sardegna · HoReCa practitioner (15+ anni) + AI builder
> Visione: l'ecosistema AI-first per l'hospitality italiana (330k esercizi, bassa digitalizzazione)

---

## 🎯 IL FLYWHEEL (perché i prodotti si tengono insieme)

Il cliente è sempre lo stesso — il ristoratore/albergatore — e ogni prodotto
crea il bisogno del successivo. Questo è il vantaggio non copiabile.

```
        ┌─────────────────────────────────────────────────────────┐
        │                                                         │
        ▼                                                         │
  ┌──────────┐   trova i bandi    ┌────────────────┐             │
  │  BA.IA   │ ─────────────────► │ AGENTI FINANZA │             │
  │ (cuneo)  │                    │ pratica+BP+    │             │
  └──────────┘                    │ previsionale   │             │
        ▲                         └───────┬────────┘             │
        │                                 │ i bandi FINANZIANO   │
        │ il locale cresce                ▼                       │
  ┌──────────┐   gestisce         ┌────────────────┐            │
  │ BARMAN   │ ◄───── staff ──────│  SSFORMAZIONE  │            │
  │  MATCH   │                    │ corsi sicurezza│            │
  └──────────┘                    │ HoReCa (LMS)   │            │
        │                         └───────┬────────┘            │
        │  staffa i turni                 │ forma il personale  │
        ▼                                 ▼                      │
  ┌─────────────────────────────────────────────┐              │
  │              BAD360                          │ ─────────────┘
  │  gestionale completo bar/hotel (23 moduli)   │
  │  Staff Match · Menu Engineering · HACCP...   │
  └─────────────────────────────────────────────┘
```

**La frase chiave**: BA.IA trova un bando per la formazione → gli AGENTI FINANZA
compilano la pratica → il bando vinto paga i corsi SSFormazione al cliente →
BAD360 gestisce il locale → BarmanMatch trova lo staff. Fondi pubblici che
alimentano tutto l'ecosistema.

---

## 📦 I PRODOTTI E SERVIZI

| # | Nome | Cosa è | Stato | Repo GitHub | Cartella |
|---|------|--------|-------|-------------|----------|
| 1 | **BA.IA** ⭐ | SaaS analisi bandi HoReCa (IL CUNEO) | ~80% | `baia-saas` | `BA.IA.SKILLSOLUTIONS.COM/BAIA_SAAS_B2C (OPEX)/` |
| 2 | **BAD360** | Suite gestionale bar/hotel — 23 moduli, 11 agenti AI | ~70% | `BAD360_SAAS_B2C` | `BAD360.SKILLSOLUTIONS.COM/` |
| 3 | **AGENTI FINANZA** | 5 agenti: pratica bando, bilancio, analisi, forecast, BP | pronti (prompt) | `skillsolutions-hq` | `AGENTI_FINANZA/` |
| 4 | **SSFormazione** | Generatore corsi sicurezza HoReCa (LMS) | ~60% ⏸️ | `ssformazione` (da creare) | `SSFormazione/` |
| 5 | **BarmanMatch** | Marketplace staff HoReCa (lato worker) | ~40% ⏸️ | `barmanmatch` (da creare) | `BARMANMATCH.SKILLSOLUTIONS.COM/` |
| 6 | **BAD.S Events** | Barman/catering eventi Sardegna (servizio) | landing | in `skillsolutions-hq` | `BAD.SKILLSOLUTIONS.COM/` |
| — | **Hub SkillSolutions** | Sito vetrina ecosistema + ss-nav condiviso | live-ready | `skillsolutions-hq` | `SKILLSOLUTIONS.COM/` |

⏸️ = congelato per scelta (strategia del cuneo: niente di nuovo finché BA.IA non fattura)

### Asset secondari
- **Libro SCM Hotellerie** (Simone Serra) — asset editoriale, `_WORKSPACE/_SIDE_PROJECTS/PROGETTO LIBRO EBOOK/`
- **NFC Token 3D phygital** — biglietto da visita fisico → personal page
- **Menu 3D** — ora modulo BAD360 (`menu3d.html`), nato da `_WORKSPACE/_MARKETING/3D_MENU/`
- **Nido Agenti** — pool centralizzato agenti AI, `_WORKSPACE/_AGENTI_AI/`

### Progetti commissionati (NON ecosistema — in uscita)
- **CORSI FORMAZIONE ELEARNING** (`formazione`) — commissionato da Ambiente Impresa,
  verrà consegnato e rimosso. È l'upstream di SSFormazione (sync prima della consegna).
  ⚠️ La chiave API "non pagata" riguarda SOLO questo progetto.

---

## 🤖 AGENTI AI DELL'ECOSISTEMA

### Codice eseguibile (girano nell'app BAD360)
| ID | Nome | File |
|----|------|------|
| S3.3 | Review Manager | `backend/ai_agents.py` |
| C7.1 | Event Planner | `backend/ai_agents.py` |
| C7.4 | AI Inventory | `backend/ai_agents.py` |
| C7.5 | AI Shift Planner | `backend/ai_agents.py` |
| C7.6 | **AI Staff Rescue** (SOS sostituzioni) | `backend/staff_match.py` |
| C7.7 | **AI Menu Optimizer** | `backend/menu_engineering.py` |
| C7.8 | **AI Menu Designer** (menu 3D) | `backend/menu_3d.py` |
| C9.4 | AI Tutor | `backend/ai_agents.py` |
| D3.4 | Training Tracker | `backend/ai_agents.py` |
| B2.8 | SOP Generator | `backend/ai_agents.py` |
| L2.1 | AI Concierge | `backend/ai_agents.py` |

### Prompt/playbook (si caricano in Claude Project o si richiamano in sessione)
- `AGENTI_FINANZA/AGENTE_PRATICA_BANDO.md` — consulente universale bandi (7 fasi)
- `AGENTI_FINANZA/AGENTE_BILANCIO|ANALISI_BILANCIO|FORECAST|BUSINESS_PLAN.md`
- `SSFormazione/CLAUDE_PROJECT_SSFORMAZIONE.md` — generatore corsi HoReCa
- `SSFormazione/AGENTE_LEZIONE_LEARNWORLDS.md` — lezioni formato LMS
- `SSFormazione/AGENTE_HEYGEN.md` — video avatar
- `SSFormazione/AGENTE_SOCIAL_MARKETING.md` — pipeline 5 agenti social
- `PROMPT_BUSINESS_PLAN.md` — business plan SkillSolutions

---

## 🏗️ INFRASTRUTTURA

| Layer | Tecnologia |
|-------|-----------|
| AI | Anthropic API (1 chiave per progetto, finanziate; eccetto progetto commissionato) |
| Backend | FastAPI (Python 3.11/3.12) |
| Frontend | Vanilla JS + HTML (oggi) → target Next.js (v2) |
| DB | Supabase (BAD360, BarmanMatch) · Neon (Formazione/SSFormazione) |
| Hosting | Render (API) + Vercel (frontend) |
| Video AI | HeyGen (avatar Aria, voce Violetta) |
| LMS | LearnWorlds (erogazione corsi) |
| Pagamenti | Stripe (da configurare) |
| Design | Gold system `#C9A84C` — vedi `SKILLSOLUTIONS.COM/ss-ds.css` |

Diagrammi AS-IS / TO-BE completi: `ANALISI_STRATEGICA_2026.md`.

---

## 🗂️ STRUTTURA CARTELLE (e perché è così)

```
PROGETTO WEB-APP/                    ← repo HQ (skillsolutions-hq)
├── ECOSISTEMA.md                    ← QUESTO FILE (mappa master)
├── ANALISI_STRATEGICA_2026.md       ← punti deboli, infrastruttura, roadmap
├── PIANO_FINALIZZAZIONE.md          ← checklist azioni umane (deploy, repo, chiavi)
├── PROMPT_BUSINESS_PLAN.md
├── AGENTI_FINANZA/                  ← suite 5 agenti finanza/bandi
├── SKILLSOLUTIONS.COM/              ← hub vetrina + ss-nav.js + ss-ds.css
├── BA.IA.SKILLSOLUTIONS.COM/        ← repo indipendente (baia-saas)
├── BAD360.SKILLSOLUTIONS.COM/       ← repo indipendente (BAD360_SAAS_B2C)
├── BAD.SKILLSOLUTIONS.COM/          ← landing servizi eventi
├── BARMANMATCH.SKILLSOLUTIONS.COM/  ← repo indipendente (barmanmatch)
├── SSFormazione/                    ← repo indipendente (ssformazione) ⏸️
├── CORSI FORMAZIONE ELEARNING/      ← commissionato, in uscita (formazione)
└── _WORKSPACE/                      ← materiali, side project, asset (gitignored)
```

**Convenzione**: i brand web hanno suffisso `.SKILLSOLUTIONS.COM`; il lavoro
interno/non-brand ha prefisso `_`. Le cartelle NON si spostano: ogni brand è un
repo git con percorsi relativi cablati (deploy, nav, cross-link).

---

## 🚦 PROSSIMI PASSI (in ordine — vedi PIANO_FINALIZZAZIONE.md)

1. Sicurezza: chiavi (`recovery-codes.txt`, `BA.IA - SS KEY.txt`) in password manager
2. Creare repo GitHub: `ssformazione`, `barmanmatch`, `skillsolutions-hq` → push
3. **Lanciare BA.IA** (il cuneo): deploy Render+Vercel, prezzo, Stripe, 10 clienti
4. BAD360 secondo atto (upsell ai clienti BA.IA)
5. Servizio bandi con AGENTI FINANZA (primo cash, prima del SaaS)
6. Tutto il resto resta congelato finché BA.IA non fattura

**Regola d'oro**: nessun progetto nuovo finché BA.IA non ha 10 clienti paganti.
