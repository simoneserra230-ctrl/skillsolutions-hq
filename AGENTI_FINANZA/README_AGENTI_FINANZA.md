# SUITE AGENTI FINANZA — SkillSolutions
# 5 agenti collegati in pipeline. Ognuno è autonomo, insieme coprono il ciclo completo:
# dal bando trovato da BA.IA alla pratica presentata e rendicontata.

---

## LA PIPELINE COMPLETA

```
BA.IA trova il bando
        │
        ▼
[5. PRATICA BANDO] ─ Fase 0-2: anatomia bando + ammissibilità + punteggio
        │                      → VERDETTO: si va / non si va
        │ (se si va)
        ├──→ [1. BILANCIO] ────────→ previsionale 3-5 anni
        ├──→ [2. ANALISI BILANCIO] → bancabilità, DSCR, indici per istruttoria
        ├──→ [3. FORECAST] ────────→ proiezioni con stagionalità, scenari
        ├──→ [4. BUSINESS PLAN] ───→ piano d'impresa in modalità BANDO
        │
        ▼
[5. PRATICA BANDO] ─ Fase 3-6: progetto + formulario + allegati + invio
        │
        ▼
   rendicontazione e vincoli post (calendario)
```

## I 5 AGENTI

| File | Cosa fa | Input minimo |
|---|---|---|
| AGENTE_PRATICA_BANDO.md | ★ Consulente universale: smonta QUALSIASI bando col metodo in 7 fasi (anatomia → kill check → punteggio → compilazione → allegati → invio → post) | testo del bando + visura cliente |
| AGENTE_BILANCIO.md | Costruisce bilancio d'esercizio (draft) o previsionale da dati grezzi | ricavi, costi, investimenti, debiti |
| AGENTE_ANALISI_BILANCIO.md | Riclassifica, calcola indici, diagnostica con semafori e benchmark HoReCa | bilancio (anche 1 solo anno) |
| AGENTE_FORECAST.md | Proiezioni ricavi/costi/cassa con stagionalità HoReCa, 3 scenari | storico 12+ mesi o ipotesi |
| AGENTE_BUSINESS_PLAN.md | Business plan completo in 9 sezioni, modalità bando/banca/investitore | output dei 3 agenti sopra + visione |

## DUE MODALITÀ D'USO

**A. Interna (SkillSolutions)**: pianificare i prodotti dell'ecosistema.
Per il business plan SkillSolutions usare il prompt dedicato già esistente:
`PROMPT_BUSINESS_PLAN.md` (root PROGETTO WEB-APP) + ANALISI_STRATEGICA_2026.md.

**B. Servizio per clienti HoReCa (collegamento al flywheel)**: i bandi trovati
da BA.IA richiedono quasi sempre business plan e bilancio previsionale allegati.
Questa suite è il braccio operativo: BA.IA trova il bando → questi agenti
producono la documentazione economico-finanziaria della domanda.
È un servizio vendibile a consulenza (€500-2.500 a pratica, prezzi di mercato).

## REGOLA TRASVERSALE — VALE PER TUTTI E 4

Questi agenti producono BOZZE PROFESSIONALI, non documenti depositabili.
Bilanci civilistici, dichiarazioni e documenti ufficiali richiedono SEMPRE
la validazione di un commercialista. Ogni output lo dichiara in calce.
Mai inventare numeri: se manca un dato, chiederlo o marcarlo [DA FORNIRE].
