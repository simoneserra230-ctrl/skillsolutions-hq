# 🗂️ Scaletta prossima sessione — handoff

> Aggiornato a fine sessione (giu 2026). Questo file = punto di ripartenza.
> Leggimi per primo: contiene il task immediato + la "ricetta" che fa partire veloce.

---

## ✅ Fatto in questa sessione (tutto committato + testato)
- **BarmanMatch**: entitlement (venue paga/worker gratis/admin bypass), **fix auth ES256/JWKS**, anti-disintermediazione + chat + KYC, file deploy (non pubblicati). 59 test verdi.
- **DAPC2 consolidato**: Email Generator→BA.IA (`/ai/email/outreach`); agenti finanza (merge engine in `_WORKSPACE/_AGENTI_AI/Nido Agenti`, backup zip); corso-gen cherry-pick→SSFormazione.
- **Branding/email**: brand del committente rimosso ovunque (resta solo nella CV). Email: `simoneserra230@gmail.com` default; `barmanadomiciliosardegna@gmail.com` per BAD bar/catering.
- **Redeploy prep** BA.IA + BAD360 (REDEPLOY.md, non pubblicato).
- **SSFormazione**: config normativa + regole redazione tessute nel CLAUDE_PROJECT.
- **BAD360 Certificazioni**: modulo rifatto reale multi-tenant (3 aree, 15/15 test).
- **BAD360 Recensioni**: completato AI-reply mancante.

---

## 🔴 TASK IMMEDIATO — Non Conformità (NC): messa in sicurezza
**Problema trovato**: il backend NC è **insicuro** — `hotel_id` arriva **dal client** (param URL), **niente `require_user`**, e `hotel_id` è **UUID legacy** (il token usa TEXT `hotel-ss-001`). NC è l'ULTIMO modulo sul pattern vecchio (Housekeeping/HACCP/SCM/Tracciabilità già sicuri).

**Fix (pattern collaudato, vedi `backend/housekeeping_api.py` + `backend/cert_api.py`):**
1. Tabelle nuove `hotel_id TEXT` (o ALTER delle esistenti `non_conformita`/`nc_log`/`nc_azioni_5why`).
2. `user: UserProfile = Depends(require_user)` su TUTTI gli ~11 endpoint; `hotel_id` SEMPRE da `user.hotel_id`, mai dal client; ogni query `.eq("hotel_id", user.hotel_id)`.
3. Frontend `BAD360_SPLIT/nc.html`: passare a `B360.authFetch` (oggi usa `fetch` + `BADS_HID_NC` da localStorage) + fallback demo.
4. Migration su Supabase BAD360 (`iajffojwiabfiuevainv`) + test isolato.
File: `backend/non_conformita.py` (router `/api/nc`, già registrato in `main.py`), `BAD360_SPLIT/nc.html`, `supabase/` nuovo schema. NB: NC è complesso (ciclo CAPA + 5-Why + root-cause AI `_ask_claude` + sotto-tabelle).

---

## 🟡 Backlog moduli BAD360 (uno alla volta — metodo: io propongo struttura + 2-3 domande dominio HoReCa, niente screenshot)
- **Eventi / CRM** (backend presente) · **Menu Engineering / Food cost** (sottile, 232 righe) · **Hotellerie** · **Academy** (può linkare SSFormazione).
- Vetrine statiche (NON toccare): barman, consulenze, network, norme, menu3d, bandi (doppione BA.IA), barmanmatch.

## 🟢 DOPO i moduli operativi — Layer "Quality Manager / multi-cliente" (deciso: dopo)
Account **Consulente/Quality Manager** collegato a N strutture + **dashboard portfolio** compliance (aggrega cert + HACCP + NC di tutti i clienti). Oggi BAD360 = 1 account ↔ 1 hotel; serve il link consulente↔molti hotel_id + vista aggregata.

## ⛔ Bloccati su di TE (serve tuo input/azione)
- **Domini**: comprali → poi URL assoluti ecosistema (`ECOSISTEMA_MAPPA_DOMINI.md`) + **deploy reale** (file già pronti: BarmanMatch, redeploy BA.IA/BAD360).
- **SSFormazione**: nuova ANTHROPIC_API_KEY dedicata + brand kit HeyGen + deploy.
- **Dati legali reali**: privacy policy BAD (`barman.html`) ha P.IVA/indirizzo finti (12345678901, Via Roma 123) → mettere quelli veri.

---

## ⚡ RICETTA (per farmi partire veloce — leggi questo)

**Dove committare (repo map):**
- Umbrella `PROGETTO WEB-APP` = `skillsolutions-hq.git` (traccia SKILLSOLUTIONS.COM, BAD.SKILLSOLUTIONS.COM, doc root).
- **BA.IA** = `baia-saas.git` nella **sottocartella** `BA.IA.SKILLSOLUTIONS.COM/BAIA_SAAS_B2C (OPEX)/` (la cartella top NON ha .git!).
- **BAD360** = `BAD360.SKILLSOLUTIONS.COM/.git` · **BarmanMatch** = `BARMANMATCH.SKILLSOLUTIONS.COM/.git` · **SSFormazione** = `ssformazione.git`.
- Commit message multi-riga: usa `git commit -F <file>` (le here-string PowerShell con emoji si rompono).

**BAD360 (backend live = root `main.py`, Docker `uvicorn main:app`):**
- Auth: `from backend.auth import require_user, UserProfile` → `user.hotel_id` (TEXT). `get_supabase()` da `backend.database` (service-role, bypassa RLS).
- AI: `from backend.ai_agents import _ask_claude` (async, usa `ANTHROPIC_API_KEY`).
- Frontend moduli: SDK `bad360-sdk.js` → `B360.getToken()`, `B360.authFetch(path,{method,body})`, `B360.modal({title,confirmLabel,fields:[{id,label,type:'select'|'textarea'|'date'|'text',options}],onConfirm:(v)=>{}})`. Pattern dati: se loggato `authFetch` real, altrimenti demo fallback + badge demo.
- Multi-tenant SICURO: `hotel_id` SEMPRE da `user.hotel_id`, ogni query `.eq("hotel_id", user.hotel_id)`. Tabelle nuove `hotel_id TEXT`.

**Supabase project ids:** BAD360 = `iajffojwiabfiuevainv` · BarmanMatch = `gxapswdsxdhgdjuucrae` · BA.IA = `gtrjepxrnvptkqpezvba` (INACTIVE). Migration via MCP `apply_migration`.

**Test (Windows):** `PYTHONUTF8=1`. Backend isolato: stub `sys.modules['backend.database'|'backend.auth']` + FakeSB chainable + `TestClient(app)` + `app.dependency_overrides[require_user]=lambda:UserProfile('h1')`. Syntax: `python -m py_compile`; JS inline: `node -e "new Function(code)"`. Esempio funzionante: `scratchpad/test_cert.py`.

**Vincoli fissi:** ANTHROPIC_API_KEY solo backend/env, mai frontend/chat. Mai `git add -A` (path espliciti). DEMO/ e storico/ mai committare. Output AI = BOZZA (human-in-the-loop) su cifre/norme.
