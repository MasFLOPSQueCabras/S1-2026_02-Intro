import { Slide } from '@revealjs/react'

export function WhatIsHPC() {
  return (
    <Slide>
      <section>
        <h2 style={{ margin: '0 0 20px 0' }}>¿Qué es un clúster HPC? 🖥️</h2>
        <div style={{ textAlign: 'left', marginTop: '0.5em', fontSize: '0.85em' }}>
          <p style={{ marginBottom: '15px', lineHeight: '1.3' }}>Es una red de computadoras (<strong>nodos</strong>) trabajando juntas para resolver problemas complejos a alta velocidad.</p>
          <ul style={{ margin: 0, paddingLeft: '1.5em' }}>
            <li className="fragment fade-up" style={{ marginBottom: '8px' }}><strong>Nodos de Cómputo:</strong> Servidores densos con múltiples CPUs y GPUs.</li>
            <li className="fragment fade-up" style={{ marginBottom: '8px' }}><strong>Interconexión:</strong> Redes de bajísima latencia y altísimo ancho de banda (ej. InfiniBand).</li>
            <li className="fragment fade-up" style={{ marginBottom: '8px' }}><strong>Almacenamiento Paralelo:</strong> Sistemas (Lustre, GPFS) capaces de manejar petabytes.</li>
            <li className="fragment fade-up"><strong>Scheduler:</strong> El "cerebro" que administra quién corre qué y cuándo (ej. Slurm).</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 style={{ margin: '0 0 20px 0' }}>Los Titanes del HPC ⚡</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '1em' }}>
          <div className="fragment fade-up" style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', borderTop: '4px solid #005A9C' }}>
            <h3 style={{ fontSize: '1em', color: '#8be9fd', margin: '0 0 5px 0' }}>Aurora</h3>
            <p style={{ fontSize: '0.7em', margin: '0', color: '#ccc' }}>Argonne National Lab</p>
            <ul style={{ fontSize: '0.65em', marginTop: '10px', textAlign: 'left', paddingLeft: '1.2em' }}>
              <li style={{ marginBottom: '5px' }}>Rendimiento exaescala (&gt;1 ExaFLOP).</li>
              <li>Arquitectura basada en procesadores y GPUs de Intel.</li>
            </ul>
          </div>
          <div className="fragment fade-up" style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', borderTop: '4px solid #E31837' }}>
            <h3 style={{ fontSize: '1em', color: '#ffb86c', margin: '0 0 5px 0' }}>El Capitan</h3>
            <p style={{ fontSize: '0.7em', margin: '0', color: '#ccc' }}>Lawrence Livermore Lab</p>
            <ul style={{ fontSize: '0.65em', marginTop: '10px', textAlign: 'left', paddingLeft: '1.2em' }}>
              <li style={{ marginBottom: '5px' }}>Líder mundial en Exaescala.</li>
              <li>Acelerado por APUs AMD Instinct MI300A.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ margin: '0 0 20px 0' }}>¿Cómo se programa? 🧑‍💻</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '0.5em', textAlign: 'left' }}>
          <div className="fragment fade-right" style={{ padding: '10px 15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '0.85em', color: '#50fa7b' }}>1. Memoria Distribuida (Nodos)</h3>
            <p style={{ margin: 0, fontSize: '0.65em', lineHeight: '1.3' }}><strong>MPI (Message Passing Interface):</strong> El estándar. Los procesos se envían mensajes entre sí a través de la red para coordinar el cálculo.</p>
          </div>
          <div className="fragment fade-right" style={{ padding: '10px 15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '0.85em', color: '#ff79c6' }}>2. Aceleradores (GPUs)</h3>
            <p style={{ margin: 0, fontSize: '0.65em', lineHeight: '1.3' }}>
              <strong>CUDA:</strong> Propietario de NVIDIA. <br/>
              <strong>SYCL / DPC++:</strong> Estándar abierto para programar hardware heterogéneo (CPUs/GPUs de distintas marcas).
            </p>
          </div>
          <div className="fragment fade-right" style={{ padding: '10px 15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '0.85em', color: '#f1fa8c' }}>3. Memoria Compartida (Interna)</h3>
            <p style={{ margin: 0, fontSize: '0.65em', lineHeight: '1.3' }}><strong>OpenMP:</strong> Directivas en C/C++/Fortran para paralelizar en múltiples núcleos, y delegar (offload) a GPUs.</p>
          </div>
        </div>
      </section>
    </Slide>
  )
}
