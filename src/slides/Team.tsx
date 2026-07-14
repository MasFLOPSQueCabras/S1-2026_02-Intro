import { Slide } from '@revealjs/react'

export function Team() {
  return (
    <Slide>
      <section>
        <h2>El Equipo</h2>
        <h3>Mas FLOPS que Cabras 🐐</h3>
      </section>

      <section>
        <h2 style={{ marginBottom: '10px' }}>Dinámica de Presentación</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left', marginTop: '10px' }}>
          <div className="fragment fade-up" style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#42b883', fontSize: '1.2em' }}>1. Nombre y Rol</h3>
            <p style={{ margin: 0, fontSize: '0.75em' }}>¿Cómo te llamas y qué rol te gustaría tomar en el clúster?</p>
          </div>
          
          <div className="fragment fade-up" style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#61dafb', fontSize: '1.2em' }}>2. Intereses en HPC</h3>
            <p style={{ margin: 0, fontSize: '0.75em' }}>¿Qué área te llama más la atención? (Redes, Compilación, Automatización, Hardware...)</p>
          </div>

          <div className="fragment fade-up" style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#ffb86c', fontSize: '1.2em' }}>3. Pregunta Rompehielos 🧊</h3>
            <p style={{ margin: 0, fontSize: '0.75em' }}>Si tuvieras acceso ilimitado a un supercomputador por un día, ¿qué calcularías o simularías?</p>
          </div>
        </div>
      </section>
      
      {/* Puedes duplicar esta sección para cada integrante si quieres tener una slide dedicada por persona */}
      <section>
        <h2>Conozcamos al equipo...</h2>
        <p className="fragment">¡Turno libre para presentarse!</p>
      </section>
    </Slide>
  )
}
