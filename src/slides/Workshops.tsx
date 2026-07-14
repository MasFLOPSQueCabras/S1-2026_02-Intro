import { Slide } from '@revealjs/react'

export function Workshops() {
  return (
    <Slide>
      <section>
        <h2>Talleres y Práctica 💻</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', margin: '2em 0' }}>
          <div className="fragment fade-up" style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderTop: '4px solid #61dafb', borderRadius: '8px', minWidth: '300px' }}>
            <h3>Taller 1</h3>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>HPL</p>
            <p style={{ fontSize: '0.7em', color: '#ccc' }}>High Performance Linpack</p>
          </div>
          <div className="fragment fade-up" style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderTop: '4px solid #ffb86c', borderRadius: '8px', minWidth: '300px' }}>
            <h3>Taller 2</h3>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>STREAM & Multichase</p>
            <p style={{ fontSize: '0.7em', color: '#ccc' }}>Memoria y Latencia</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Comunicación 📣</h2>
        <div style={{ marginTop: '2em', padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
          <p>El foro y los talleres se encontrarán en el siguiente enlace:</p>
          <a href="https://github.com/MasFLOPSQueCabras/schedule/discussions" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '20px', padding: '15px 30px', background: '#2ea44f', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
            Ver Discussions en GitHub
          </a>
        </div>
      </section>
    </Slide>
  )
}