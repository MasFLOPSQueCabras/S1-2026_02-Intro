import { Slide } from '@revealjs/react'

export function QA() {
  return (
    <Slide>
      <h2>Preguntas y Respuestas 💬</h2>
      <div style={{ marginTop: '2em', padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
        <h3 style={{ color: '#50fa7b', marginBottom: '20px' }}>¿Dudas?</h3>
        <p style={{ fontSize: '0.9em' }}>¡Este es el momento de preguntar cualquier cosa sobre los talleres, el equipo o la competencia!</p>
        
        <div className="fragment fade-up" style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '30px' }}>
          <h4 style={{ color: '#8be9fd', margin: '0 0 10px 0', fontSize: '0.8em', textTransform: 'uppercase', letterSpacing: '2px' }}>Contacto</h4>
          <p style={{ fontSize: '1.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', margin: 0 }}>
            ✉️ <a href="mailto:i.bermudezl@uniandes.edu.co" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>i.bermudezl@uniandes.edu.co</a>
          </p>
        </div>
      </div>
    </Slide>
  )
}
