// Ogni slide è un oggetto: { field?: bool, content: JSX }
// Modifica qui i testi/numeri della presentazione.
import Media from './Media.jsx'

export const slides = [
  {
    field: true,
    content: (
      <div className="hero">
        <div className="hero-copy">
          <div className="herochips reveal">
            <span className="chip">⚽ Calcetto · Calciotto</span>
            <span className="chip alt">Per campi amatoriali</span>
            <span className="chip alt2">La soluzione definitiva</span>
          </div>
          <h1 className="herotitle reveal d1">
            Porta <span className="gradient-flow">video e performance</span> sul tuo campo.
          </h1>
          <p className="bigline reveal d2">
            Per anni video e statistiche sono stati roba da grandi club. SoccerQ li porta sui
            campi amatoriali: ogni partita diventa un video con highlights automatici e i dati
            di ogni giocatore.
          </p>
          <div className="pillrow reveal d3">
            <div className="pill pulse">🎥 Telecamera 4K</div>
            <div className="pill">🤖 Senza operatore</div>
            <div className="pill">🔥 Highlights automatici</div>
            <div className="pill">📊 Performance</div>
          </div>
        </div>
        <div className="hero-media reveal d2">
          <div className="hero-stage">
            <div className="stage-col">
              <div className="vidcard">
                <Media media={{ type: 'video', src: '/rivivi-partita.mp4' }} />
                <span className="vlabel">▶ Match completo</span>
              </div>
              <div className="perf">
                <div className="perf-head">
                  <b>📊 Performance</b>
                  <span className="ovr">OVR 78</span>
                </div>
                {[
                  ['Velocità', 72],
                  ['Dribbling', 84],
                  ['Resistenza', 70],
                  ['Esplosività', 78],
                  ['Tiri', 64],
                ].map(([label, value]) => (
                  <div className="perfrow" key={label}>
                    <small>{label}</small>
                    <span className="perfbar"><i style={{ '--v': `${value}%` }} /></span>
                    <span className="perfval">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="stage-col phonewrap">
              <div className="hero-phone">
                <Media media={{ type: 'video', src: '/reels.mp4' }} />
                <div className="tag"><span className="live" />Reels dal tuo campo</div>
              </div>
              <img className="fifa" src="/profilo.png" alt="Scheda performance giocatore" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="problem">
        <div className="hero-copy">
          <div className="kicker bad reveal">Il problema</div>
          <h2 className="reveal d1">Oggi il cliente gioca un'ora. Poi sparisce.</h2>
          <p className="reveal d2">
            Per molti impianti l'esperienza è sempre uguale. Se tutti vendono solo ore campo,
            la competizione finisce sul prezzo.
          </p>
          <div className="problist reveal d3">
            <div className="probcard">
              <span className="pi">💸</span>
              <div>
                <b>Prezzo sotto pressione</b>
                <span>Il campo viene percepito come commodity.</span>
              </div>
            </div>
            <div className="probcard">
              <span className="pi">📉</span>
              <div>
                <b>Poca differenziazione</b>
                <span>Strutture diverse, esperienza molto simile.</span>
              </div>
            </div>
            <div className="probcard">
              <span className="pi">🌫️</span>
              <div>
                <b>Nessun post-partita</b>
                <span>Zero video, zero dati, zero contenuti da condividere.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lostwrap reveal d2">
          <div className="lost">
            <Media media={{ type: 'video', src: '/rivivi-partita.mp4' }} />
            <span className="rec"><span className="d" />Nessuna ripresa</span>
            <div className="lost-mid">Segnale perso</div>
            <div className="cap">La partita sparisce. Zero video, zero dati.</div>
          </div>
          <div className="flatline">
            <span className="fstep">Prenoti</span>
            <span className="farrow">→</span>
            <span className="fstep">Giochi</span>
            <span className="farrow">→</span>
            <span className="fstep">Doccia</span>
            <span className="farrow">→</span>
            <span className="fstep">Esci</span>
            <span className="farrow">→</span>
            <span className="fstep void">⬛ Sparisce</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    field: true,
    content: (
      <>
        <div className="kicker reveal">La svolta · Come funziona</div>
        <h2 className="reveal d1">
          La partita continua <span className="gradient">dopo il fischio finale.</span>
        </h2>
        <div className="valuerow reveal d2">
          <span className="vpill g"><span className="vi">🎥</span>Video partita</span>
          <span className="vpill c"><span className="vi">⚡</span>Sensori &amp; dati</span>
          <span className="vpill y"><span className="vi">🏆</span>Ranking &amp; MVP</span>
          <span className="vpill"><span className="vi">🤖</span>Zero operatori</span>
        </div>
        <div className="flow reveal d3">
          <div className="flowcard">
            <div className="stepn">1</div>
            <div className="media-frame">
              <Media media={{ type: 'video', src: '/prepartita.mp4' }} />
            </div>
            <div className="body">
              <strong>Prepara la partita</strong>
              <span>Crei il match e inviti il gruppo con un link. Vedi chi conferma in tempo reale.</span>
            </div>
          </div>
          <div className="flowcard">
            <div className="stepn">2</div>
            <div className="media-frame">
              <Media media={{ type: 'video', src: '/rivivi-partita.mp4' }} />
            </div>
            <div className="body">
              <strong>Rivedi la partita</strong>
              <span>A fine serata trovi la partita completa, pronta da rivedere. Senza operatore.</span>
            </div>
          </div>
          <div className="flowcard">
            <div className="stepn">3</div>
            <div className="media-frame">
              <Media media={{ type: 'video', src: '/reels.mp4' }} />
            </div>
            <div className="body">
              <strong>Reels e highlights</strong>
              <span>Goal, parate e giocate diventano clip verticali pronte da condividere.</span>
            </div>
          </div>
          <div className="flowcard">
            <div className="stepn">4</div>
            <div className="media-frame">
              <Media media={{ type: 'image', src: '/profilo.png', alt: 'Scheda performance giocatore SoccerQ' }} />
            </div>
            <div className="body">
              <strong>Performance individuali</strong>
              <span>Ogni giocatore riceve la sua scheda stile fantacalcio: overall, velocità, dribbling.</span>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <div className="expo">
          <div className="expo-copy">
            <div className="kicker reveal">Esperienza premium</div>
            <h2 className="reveal d1">
              Il sensore cattura. Il match <span className="gradient">finisce in tasca.</span>
            </h2>
            <p className="bigline reveal d2">
              "Andiamo a giocare lì, perché lì ci riprendono, ci danno le statistiche e
              possiamo rivedere le azioni."
            </p>
            <div className="pillrow reveal d3">
              <div className="pill">Highlights</div>
              <div className="pill">Statistiche</div>
              <div className="pill">Gruppo partita</div>
              <div className="pill">Classifiche</div>
            </div>
          </div>
          <div className="expo-visual reveal d2">
            <div className="expo-phone">
              <Media media={{ type: 'video', src: '/rivivi-partita.mp4' }} />
              <div className="phone-stats">
                <b>SoccerQ Match</b>
                <div className="statrow"><span>Velocità max</span><b>28 km/h</b></div>
                <div className="statrow"><span>MVP ranking</span><b>#2</b></div>
              </div>
            </div>
            <div className="expo-sensor">
              <img src="/sensore.png" alt="Sensore SoccerQ" />
              <div className="tag">⚡ Sensore SoccerQ</div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    content: (
      <div className="owner">
        <div className="owner-visual reveal d2">
          <img className="media-el" src="/ambassador-hero.png" alt="Giocatori sul campo SoccerQ" />
          <div className="statstrip">
            <div className="st"><b>4K</b><small>Qualità video sul campo</small></div>
            <div className="st"><b>15+</b><small>Metriche per giocatore</small></div>
            <div className="st"><b>100%</b><small>Azioni catturate dall'AI</small></div>
            <div className="st"><b>1</b><small>Telecamera, zero pensieri</small></div>
          </div>
        </div>
        <div className="owner-copy">
          <div className="kicker reveal">Per il gestore</div>
          <h2 className="reveal d1">
            Un motivo in più per <span className="gradient">scegliere il tuo impianto.</span>
          </h2>
          <div className="ownlist reveal d3">
            <div className="ownrow">
              <span className="oi">🪶</span>
              <div>
                <b>Ingresso leggero</b>
                <span>Partiamo senza stravolgere la gestione: un campo, una serata, un primo momento wow.</span>
              </div>
            </div>
            <div className="ownrow">
              <span className="oi">💬</span>
              <div>
                <b>Effetto WhatsApp</b>
                <span>Il tuo impianto entra nelle chat dei gruppi nel momento più caldo.</span>
              </div>
            </div>
            <div className="ownrow">
              <span className="oi">🏆</span>
              <div>
                <b>Tornei più forti</b>
                <span>Ogni torneo ha una memoria: finali, protagonisti e azioni da rivedere.</span>
              </div>
            </div>
            <div className="ownrow">
              <span className="oi">⚡</span>
              <div>
                <b>Più energia nel centro</b>
                <span>La tecnologia resta dietro le quinte. Davanti: il campo, le persone, la passione.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <>
        <div className="kicker reveal">Modello economico</div>
        <h2 className="reveal d1">
          Il premium si paga <span className="gradient">solo quando viene venduto.</span>
        </h2>
        <div className="econ-top reveal d2">
          <div>
            <div className="econ-flow">
              <div className="ebox"><b>+10€</b><small>il campo li chiede al gruppo</small></div>
              <span className="eop">−</span>
              <div className="ebox"><b>5,90€</b><small>il campo paga a SoccerQ</small></div>
              <span className="eop">=</span>
              <div className="ebox win pulse"><b>4,10€</b><small>restano al campo</small></div>
            </div>
            <p style={{ margin: '14px 0 0', fontSize: 15 }}>
              A SoccerQ vanno <b>solo i 5,90€</b> a partita: i 10€ chiesti al gruppo li incassa
              interamente il campo.
            </p>
          </div>
          <div className="bcast">
            <Media media={{ type: 'video', src: '/broadcast.mp4' }} />
            <span className="vlabel">🔴 La partita premium che vendi</span>
          </div>
        </div>
        <div className="econ-grid reveal d3">
          <div className="ecard">
            <div className="ec-head">📅 Scenario prudente · al mese</div>
            <div className="ec-nums">
              <div><b>25</b><small>partite premium</small></div>
              <div><b>250€</b><small>incassati dal gruppo</small></div>
              <div><b>102,50€</b><small>restano al campo</small></div>
            </div>
            <p>Meno di una partita premium al giorno: 250€ dal gruppo − 147,50€ pagati a SoccerQ. Scenario conservativo, credibile in avvio.</p>
          </div>
          <div className="ecard accent">
            <div className="ec-head">🚀 Rientro investimento</div>
            <div className="payback"><b>~20</b><span>mesi</span></div>
            <p>Setup iniziale <b>1.900€</b>. Aumentando l'adozione delle partite premium, il rientro accelera.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    content: (
      <div className="tornei">
        <div className="owner-copy">
          <div className="kicker reveal">Tornei · Community</div>
          <h2 className="reveal d1">
            Il torneo diventa <span className="gradient">spettacolo e racconto.</span>
          </h2>
          <p className="reveal d2">
            Ogni giornata ha la sua narrazione: classifiche, MVP, migliori azioni e la Gazzetta
            del campo che tiene viva l'attenzione tra una partita e l'altra.
          </p>
          <div className="ownlist reveal d3">
            <div className="ownrow">
              <span className="oi">🥇</span>
              <div>
                <b>Classifiche vive</b>
                <span>Squadre, marcatori, MVP e ranking giocatori sempre aggiornati.</span>
              </div>
            </div>
            <div className="ownrow">
              <span className="oi">🎬</span>
              <div>
                <b>Highlights torneo</b>
                <span>Clip e azioni migliori della giornata, pronte da condividere.</span>
              </div>
            </div>
            <div className="ownrow">
              <span className="oi">📰</span>
              <div>
                <b>Gazzetta del campo</b>
                <span>Il racconto post-giornata in stile quotidiano sportivo.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="gazette-stack reveal d2">
          {/* numero secondario che spunta dietro */}
          <div className="gazzetta back" aria-hidden="true">
            <div className="gz-top"><span>N° 11</span><span>Giovedì sera</span></div>
            <div className="gz-mast">La Gazzetta del Campo</div>
            <div className="gz-sub">Edizione Girone B · Campo 7</div>
            <div className="gz-head">Il derby del giovedì infiamma il girone</div>
          </div>

          {/* prima pagina principale */}
          <div className="gazzetta front">
            <div className="gz-top"><span>N° 12 · Anno I</span><span>Martedì sera · Campo 5</span></div>
            <div className="gz-mast">La Gazzetta del Campo</div>
            <div className="gz-sub">Edizione speciale · Finale del torneo serale</div>
            <div className="gz-head">Rimonta show: 4-3 all'ultimo respiro</div>
            <div className="gz-photo">
              <img src="/ambassador-hero.png" alt="" />
              <div className="gz-cap">L'esultanza sotto i riflettori dopo il gol vittoria al 42'.</div>
            </div>
            <div className="gz-body">
              <p>Partita da incorniciare al Campo 5: sotto di due reti, i Lupi ribaltano tutto nel finale e firmano la rimonta della stagione davanti a un gruppo in delirio.</p>
              <p>Decisivo lo sprint a 28 km/h che ha acceso l'azione del pari, certificato dai dati a bordo campo. Highlights e statistiche già nel telefono di tutti.</p>
            </div>
            <div className="gz-boxes">
              <div className="gz-box">
                <span className="gz-bt">⭐ MVP della serata</span>
                <div className="gz-mvp">Marco R. <small>OVR 84 · 2 gol, 1 assist</small></div>
              </div>
              <div className="gz-box">
                <span className="gz-bt">Classifica girone</span>
                <div className="gz-stand">
                  <div className="r"><span>1. I Lupi</span><b>18</b></div>
                  <div className="r"><span>2. Real Bar</span><b>15</b></div>
                  <div className="r"><span>3. FC Doccia</span><b>13</b></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="spons">
        <div className="owner-copy">
          <div className="kicker reveal">Sponsor locali</div>
          <h2 className="reveal d1">
            Lo sponsor entra <span className="gradient">dentro la partita.</span>
          </h2>
          <p className="bigline reveal d2">
            Non più solo un cartellone: highlight, MVP, classifiche e Reels brandizzati che
            girano nelle chat e sui social del gruppo.
          </p>
          <div className="pillrow reveal d3">
            <div className="pill pulse">🎬 Highlight brandizzati</div>
            <div className="pill">🏆 MVP sponsor</div>
            <div className="pill">📊 Classifiche brandizzate</div>
            <div className="pill">📱 Reels social</div>
          </div>
        </div>

        <div className="spons-visual reveal d2">
          <div className="bcast">
            <Media media={{ type: 'video', src: '/rivivi-partita.mp4' }} />
            <span className="tagtop"><span className="d" />REPLAY</span>
            <span className="logo">Bar Christian</span>
            <div className="lower3">
              <div className="l3-main">
                <b>GOAL OF THE MATCH</b>
                <small>Azione decisiva al 42'</small>
              </div>
              <div className="l3-spon">by Bar Christian</div>
            </div>
          </div>
          <div className="spon-cards">
            <div className="spon-card">
              <span className="by">⭐ MVP della serata</span>
              <div className="big">Marco R.</div>
              <div className="sub">presentato da Pizzeria da Mario</div>
            </div>
            <div className="spon-card">
              <span className="by">📊 Classifica settimanale</span>
              <div className="spon-rank">
                <div className="r"><span>1. I Lupi</span><b>18</b></div>
                <div className="r"><span>2. Real Bar</span><b>15</b></div>
                <div className="r"><span>3. FC Doccia</span><b>13</b></div>
              </div>
              <div className="sub">powered by Bar Christian</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <>
        <div className="kicker reveal">FAQ gestore</div>
        <h2 className="reveal d1">
          Le domande pratiche, <span className="gradient">subito chiare.</span>
        </h2>
        <div className="faqgrid reveal d2">
          <div className="faqcard">
            <div className="q"><span className="fi">💶</span>C'è un costo iniziale?</div>
            <div className="a">Sì, setup e installazione impianto: <b>1.900€</b> una tantum.</div>
          </div>
          <div className="faqcard">
            <div className="q"><span className="fi">🎯</span>Quanto costa ogni partita premium?</div>
            <div className="a">Il gestore paga <b>5,90€</b> solo sulle partite premium vendute.</div>
          </div>
          <div className="faqcard">
            <div className="q"><span className="fi">👥</span>Quanto paga il gruppo?</div>
            <div className="a">Il gruppo paga <b>10€ in più</b> se vuole sensori, camera, video e statistiche.</div>
          </div>
          <div className="faqcard">
            <div className="q"><span className="fi">🔌</span>Cosa serve al campo?</div>
            <div className="a"><b>Corrente a bordo campo</b> e <b>Internet</b> disponibile nell'impianto.</div>
          </div>
          <div className="faqcard">
            <div className="q"><span className="fi">🆓</span>È obbligatorio per tutti?</div>
            <div className="a">No, è un servizio premium <b>opzionale</b>: chi non lo vuole gioca normalmente.</div>
          </div>
          <div className="faqcard">
            <div className="q"><span className="fi">🛠️</span>Serve fare lavori importanti?</div>
            <div className="a">No, va solo verificata la disponibilità di alimentazione e connessione per l'installazione.</div>
          </div>
        </div>
      </>
    ),
  },
  {
    field: true,
    bg: '/ambassador-hero.png',
    content: (
      <div className="promo">
        <span className="promo-badge reveal"><span className="d" />🔥 Promo Estate 2026</span>
        <div className="cta reveal d1">
          Parti <span className="gradient">gratis.</span> Paghi solo quando giochi.
        </div>
        <div className="promo-grid reveal d2">
          <div className="promo-item free">
            <span className="pt">Installazione &amp; setup impianto</span>
            <span className="old">1.900€</span>
            <span className="now">GRATIS</span>
          </div>
          <div className="promo-item free">
            <span className="pt">Telecamera, app, video, highlights &amp; statistiche</span>
            <span className="now word">INCLUSO</span>
          </div>
          <div className="promo-item keep">
            <span className="pt">Costo a partita premium</span>
            <div className="promo-two">
              <div><small>Calcetto</small><b>5,90€</b></div>
              <div><small>Calciotto</small><b>8,90€</b></div>
            </div>
            <span className="note">l'unico costo che resta</span>
          </div>
        </div>
        <p className="reveal d3" style={{ marginTop: 22 }}>
          Con la Promo Estate 2026 <b>non paghi l'impianto di telemetria né l'installazione</b>:
          è tutto gratis. Paghi solo <b>5,90€</b> a partita per il calcetto e <b>8,90€</b> per
          il calciotto, solo sulle partite premium giocate. Nessun costo fisso, nessun rischio.
        </p>
        <div className="promo-limit reveal d4">⏳ Valida fino al <b>30 giugno</b> o per i <b>primi 20 impianti</b></div>
      </div>
    ),
  },
]
