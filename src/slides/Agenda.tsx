import { Slide } from '@revealjs/react'

export function Agenda() {
  return (
    <Slide>
      <h2>Ruta de Hoy 🗺️</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '1em', textAlign: 'left' }}>
        <div className="fragment fade-right" style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderLeft: '4px solid #61dafb', borderRadius: '5px' }}>
          <h3 style={{ margin: 0, fontSize: '1.1em' }}>1. Rompehielos y Equipo</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.75em', color: '#ccc' }}>Conociendo a las futuras leyendas del HPC.</p>
        </div>
        <div className="fragment fade-right" style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderLeft: '4px solid #ffb86c', borderRadius: '5px' }}>
          <h3 style={{ margin: 0, fontSize: '1.1em' }}>2. Talleres y Práctica</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.75em', color: '#ccc' }}>HPL, STREAM y donde encontrar la información.</p>
        </div>
        <div className="fragment fade-right" style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', borderLeft: '4px solid #ff79c6', borderRadius: '5px' }}>
          <h3 style={{ margin: 0, fontSize: '1.1em' }}>3. El Reto: CARLA SCC 2026</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '0.75em', color: '#ccc' }}>Reglas, entregables y recomendaciones técnicas.</p>
        </div>
      </div>
    </Slide>
  )
}
