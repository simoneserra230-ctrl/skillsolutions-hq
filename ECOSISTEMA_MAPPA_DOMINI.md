# 🌐 Ecosistema SkillSolutions — Mappa Prodotti → Domini

> Stato acquisti (giu 2026): **BAD = `www.barmanadomiciliosardegna.com` ✅ ACQUISTATO**.
> Gli altri 4 (Hub, BA.IA, BAD360, BarmanMatch) sono **ancora da comprare**.
> Appena arrivano, aggiorno `ss-nav.js` (barra ecosistema) e i cross-link con gli URL
> assoluti di produzione. Finché mancano, quei link restano **relativi** (solo locale).

## Albero (stato attuale dei collegamenti)

```
SKILLSOLUTIONS.COM  ◀── RADICE / HUB
│   • porta a TUTTI i prodotti · barra ecosistema condivisa: ss-nav.js
│
├─ BA.IA  (cartella BA.IA.SKILLSOLUTIONS.COM)
│   ├─ index.html ........................ landing            ✅ barra
│   └─ BAIA_SAAS_B2C (OPEX)/frontend/app.html  SPA            ⛔ manca link → Hub
│
├─ BAD360  (cartella BAD360.SKILLSOLUTIONS.COM)
│   ├─ index.html ........................ landing            ✅ barra
│   └─ BAD360_SPLIT/
│       ├─ hub.html ...................... suite home         ✅ barra
│       └─ ~24 moduli (haccp, shelflife, …) interni           ⛔ manca link → Hub
│
├─ BAD.S  (cartella BAD.SKILLSOLUTIONS.COM)
│   ├─ index.html ........................ sito BAD Events    ✅ barra
│   └─ consultancy/  ◀── BAD Consultancy
│       ├─ index.html
│       ├─ metodo-bar-pro.html  (gestionali navigabili ↗)     ✅ barra
│       ├─ metodo-hotel-pro.html (gestionali navigabili ↗)    ✅ barra
│       └─ percorso.html                                      ✅ barra
│
├─ BarmanMatch  (cartella BARMANMATCH.SKILLSOLUTIONS.COM)
│   ├─ BARMANMATCH.SKILLSOLUTIONS.COM.html  landing           ✅ barra  ← target della barra
│   ├─ barman_network.html ............... concept            ✅ barra
│   └─ BARMANMATCH_APP/frontend/app.html .. SPA (login)       ⛔ link → Hub (accesso da Hub: pagati + admin)
│
└─ SSFormazione ............................ DA REALIZZARE     ⛔ (fuori dalla barra finché non esiste)
```

## Tabella domini (COMPILA QUI)

| Prodotto | Cartella locale | DOMINIO REALE (compila) |
|---|---|---|
| Hub | SKILLSOLUTIONS.COM | ⛔ da comprare |
| BA.IA | BA.IA.SKILLSOLUTIONS.COM | ⛔ da comprare |
| BAD360 | BAD360.SKILLSOLUTIONS.COM | ⛔ da comprare |
| **BAD.S (Events)** | BAD.SKILLSOLUTIONS.COM | **https://www.barmanadomiciliosardegna.com ✅ ACQUISTATO** |
| BAD Consultancy | …/BAD.SKILLSOLUTIONS.COM/consultancy/ | https://www.barmanadomiciliosardegna.com/consultancy/ (stesso dominio) |
| BarmanMatch (landing) | BARMANMATCH.SKILLSOLUTIONS.COM/index.html | ⛔ da comprare |
| BarmanMatch (app) | …/BARMANMATCH_APP/frontend/app.html | ⛔ da comprare |
| SSFormazione | (da realizzare) | ⛔ da comprare |

## Blocco pronto per `ss-nav.js` (lo compilo io con i tuoi domini)

```js
// Da passare a SSNav.init({ current:'…', urls: SS_URLS })
const SS_URLS = {
  skillsolutions: 'https://__________________',   // Hub — da comprare
  baia:           'https://__________________',   // da comprare
  bad360:         'https://__________________',   // da comprare
  bads:           'https://www.barmanadomiciliosardegna.com',   // ✅ BAD.S — acquistato
  barmanmatch:    'https://__________________',   // → landing BarmanMatch — da comprare
};
```

## Cosa farò appena mi dai i domini
1. Inserisco `SS_URLS` in `ss-nav.js` e attivo `opts.urls` → la barra usa URL assoluti in PROD (e resta relativa in locale).
2. Aggiungo il link **"✦ Hub"** dentro le SPA (BA.IA app, BarmanMatch app) e nei moduli interni BAD360.
3. Allineo i link "gestionali navigabili" dei Metodi Bar/Hotel Pro agli URL BAD360 di produzione.
4. (Se vorrai) sposto BAD Consultancy su un eventuale sottodominio dedicato.

> Nota: BarmanMatch nella **barra ecosistema** punta alla **landing** (pubblica). L'**app** (con login) è
> accessibile dall'**Hub** per gli utenti paganti e per te admin — vedi paywall/accesso da definire.
