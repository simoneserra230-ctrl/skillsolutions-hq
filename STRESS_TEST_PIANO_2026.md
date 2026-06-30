# 🔧 Stress-test del piano — critica diretta prima di presentarlo

> Richiesto da Simone: "dimmi dove il piano è debole o ottimistico, senza sconti, prima che lo
> presenti a qualcuno." Questo documento NON è positivo di proposito: è il lavoro dell'avvocato
> del diavolo. Ogni buco ha: **gravità**, **perché è un problema**, **cosa misurare per chiuderlo**.

---

## ⚠️ Il buco strutturale: il forecast non è falsificabile
Il white paper (sez. 9) ha driver di volume ma **zero metriche di conversione, zero CAC, zero
churn**. Significa che il forecast **non si può sbagliare** — e ciò che non si può sbagliare non
si può nemmeno credere. Un investitore (o tu stesso fra 6 mesi) non ha modo di dire "stiamo
sopra o sotto piano". È il difetto #1.

**Cosa misurare per chiuderlo:** i 3 numeri del funnel (lead → preventivo → chiuso) + ARPU +
churn. Bastano questi per trasformare il sogno in piano. (Sono nel modello Excel, foglio Input.)

---

## I 7 punti deboli, in ordine di pericolosità

### 1. 🔴 Acquisizione "gratis" che non scala (CAC nascosto = 0)
Tutto il go-to-market poggia su **passaparola + organico**. È ottimo per i primi clienti, ma
**il passaparola non è un canale: è un colpo di fortuna ripetuto.** Non ha un rubinetto che apri.
Nel momento in cui serviranno più clienti dei tuoi contatti, dovrai fare outreach/ads → e lì il
**CAC sale da 0 a qualcosa**, e il forecast cambia faccia.
**Misura:** da dove arriva ogni lead (sorgente). Quando il passaparola si esaurisce, lo vedi nei dati.

### 2. 🔴 Churn ignorato = secchio bucato
Il modello somma clienti SaaS come se restassero per sempre. Senza onboarding, il **churn dei
primi mesi su un gestionale è alto** (il cliente non inserisce i dati → non vede valore → molla).
Se il churn mensile è 8-10%, un cliente dura ~10-12 mesi: cambia completamente l'LTV.
**Misura:** % clienti persi/mese e a che punto mollano (giorno 7? mese 2?).

### 3. 🔴 Lo scenario "Ottimistico" contraddice il rischio #1 (bus factor)
L'ottimistico assume progresso simultaneo su BAD + BAD360 + BA.IA + BarmanMatch. Ma il vincolo
dichiarato è **un paio di mani**. **Non puoi spingere 4 fronti insieme.** L'ottimistico, così, non
è ottimistico: è irrealistico. La crescita è limitata dalle tue ore, non dal mercato — e le ore
non sono nel modello.
**Misura:** ore/settimana per fronte. Se sforzi >1-2 fronti, qualcosa si rompe (di solito tu).

### 4. 🟠 BAD eventi ha un soffitto fisico
È la cassa di oggi, ma è **lavoro-per-ore**: c'è un numero massimo di eventi che una persona fa
in un weekend. Oltre quel tetto, per crescere servono staff (→ margine diverso) o prezzo più alto.
Il forecast non mostra il tetto.
**Misura:** eventi/mese a saturazione + % del tuo tempo già occupato.

### 5. 🟠 Niente payback / unit economics
Manca la domanda chiave: **un cliente è in profitto?** Senza CAC e churn non puoi calcolare
LTV/CAC né il mese di payback. Potresti "crescere" perdendo soldi su ogni cliente e non accorgertene.
**Misura:** (ARPU × margine × mesi di vita) ÷ CAC. Se < 3, il modello di crescita non regge.

### 6. 🟠 Mercato top-down (vanity)
"330k esercizi in Italia" è un numero da slide, non da piano. Conta solo il **bottom-up**: quanti
clienti puoi realisticamente chiudere in Sardegna nei prossimi 12 mesi col tuo tempo e i tuoi
canali → **decine, non migliaia**. Presentare il TAM a un investitore senza il bottom-up suona ingenuo.
**Misura:** lista nominativa reale di prospect raggiungibili (TAM personale).

### 7. 🟡 Dipendenze esterne come ipotesi implicite
BarmanMatch nel piano "parte", ma dipende da **Stripe Connect + modello legale APL** non risolti.
SSFormazione "esiste" ma è bloccata su API key. Sono rischi messi come se fossero fatti.
**Misura:** stato binario di ogni blocco (fatto/non fatto), non "in arrivo".

---

## "Cosa dovrebbe essere vero" (test di ogni scenario)
Prima di crederci, scrivi accanto a ogni scenario le condizioni necessarie. Esempi:
- **Base credibile SE:** chiudi X% dei preventivi (da misurare), il churn è < Y%, dedichi Z ore/sett a vendita, resti su 2 fronti (BAD + BAD360).
- **Ottimistico credibile SOLO SE:** entra una seconda persona (sales o operativo). Altrimenti taglialo.

Se non sai riempire questi "SE", lo scenario è una speranza, non una previsione.

---

## Cosa NON è debole (per equilibrio)
- La **base tecnica** è reale e difendibile (lo dico io che ho guardato il codice).
- La **tesi "vendi il servizio, software come arma"** è corretta e riduce il rischio.
- Il **blog SEO** è un canale di acquisizione vero e a costo marginale ~0 (se indicizza).
- Partire dalla **Sardegna** è la mossa giusta (beachhead).

---

## Verdetto in una riga
Il piano è **forte sulla tecnologia e sulla tesi, debole su tutto ciò che riguarda la
conversione e la capacità.** Prima di presentarlo: **misura il funnel BAD reale** (3 numeri),
**aggiungi churn e CAC**, e **taglia l'ottimistico** o condizionalo a una seconda persona.
Con questi fix passi da "racconto" a "piano che un investitore può interrogare".
