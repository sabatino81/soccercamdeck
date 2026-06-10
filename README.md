# SoccerQ — Deck Impianti (React)

Presentazione commerciale animata per impianti calcetto/calciotto, riscritta in React + Vite.

## Avvio

```bash
npm install
npm run dev      # sviluppo (http://localhost:5173)
npm run build    # build di produzione in /dist
npm run preview  # anteprima della build
```

## Navigazione

- **Tastiera**: `→` / `Spazio` avanti · `←` indietro · `Home` / `End` prima/ultima slide
- **Touch**: swipe orizzontale, oppure tap sulla metà destra (avanti) / sinistra (indietro)
- **Mouse**: frecce laterali `‹ ›` e i pallini in basso

## Modificare i contenuti

Tutte le 11 slide sono dati in [`src/slides.jsx`](src/slides.jsx): testi, numeri, card,
tabella sponsor e FAQ. Lo stile e le animazioni sono in [`src/styles.css`](src/styles.css);
la logica di navigazione in [`src/App.jsx`](src/App.jsx).

## Deploy

Progetto Vite statico: deployabile su Vercel senza configurazione (`vercel` oppure
collegando il repo). Output build in `dist/`.
