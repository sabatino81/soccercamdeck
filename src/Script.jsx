import { scriptData } from './scriptData.js'

const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

export default function Script({ onBack }) {
  const totalSec = scriptData.reduce((a, s) => a + (s.sec || 0), 0)

  return (
    <div className="script-page">
      <div className="script-inner">
        <div className="kicker" style={{ marginBottom: 14 }}>Script di presentazione</div>
        <h1 className="script-h">Cosa dire, slide per slide.</h1>
        <p className="script-sub">
          Traccia per la presentazione commerciale SoccerQ. Le frasi tra virgolette sono pronte
          da dire; i punti sotto sono i concetti chiave da toccare. Durata totale indicativa:{' '}
          <b>~{fmt(totalSec)}</b> ({scriptData.length} slide).
        </p>

        {scriptData.map((s, i) => (
          <div className="scard" key={i}>
            <div className="sn">
              <span className="snum">{i + 1}</span>
              <h3>{s.title}</h3>
              {s.sec ? <span className="sdur">⏱ {fmt(s.sec)}</span> : null}
            </div>
            {s.say && <p className="say">{s.say}</p>}
            <ul>
              {s.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="script-actions">
          <button className="sbtn" onClick={onBack}>← Torna alle slide</button>
          <button className="sbtn ghost" onClick={() => window.print()}>🖨️ Stampa / PDF</button>
        </div>
      </div>
    </div>
  )
}
