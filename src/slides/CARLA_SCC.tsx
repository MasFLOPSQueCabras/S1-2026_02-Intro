import { Slide } from '@revealjs/react'

export function CARLA_SCC() {
  return (
    <Slide>
      <section>
        <h2>CARLA SCC 2026</h2>
        <h3 style={{ color: '#61dafb' }}>Student Cluster Competition</h3>
        <p className="fragment fade-up" style={{ fontSize: '1.2em', margin: '30px 0 10px 0' }}>📅 <strong>Septiembre 21 al 25</strong></p>
        <div className="fragment fade-up">
          <a href="https://carlaconference.org/student-cluster-competition/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', background: 'rgba(97, 218, 251, 0.1)', color: '#8be9fd', textDecoration: 'none', borderRadius: '5px', border: '1px solid #8be9fd', fontSize: '0.8em' }}>
            🌐 carlaconference.org
          </a>
        </div>
      </section>

      <section>
        <h2>Objetivo Principal 🎯</h2>
        <div style={{ textAlign: 'left', marginTop: '2em' }}>
          <ul>
            <li className="fragment fade-up" style={{ marginBottom: '1em' }}><strong>Misión:</strong> Configurar y optimizar un clúster para maximizar el puntaje en <strong style={{color: '#ffb86c'}}>HPL (High Performance Linpack)</strong>.</li>
            <li className="fragment fade-up" style={{ marginBottom: '1em' }}><strong>Recursos:</strong> Al menos 3 nodos por equipo, provistos por UNC Supercómputo.</li>
            <li className="fragment fade-up" style={{ marginBottom: '1em', color: '#ff5555' }}><strong>Reglas HPL:</strong> ❌ No se permiten binarios de proveedores ni versiones de precisión mixta.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Entregables y Práctica 📝</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '2em' }}>
          <div className="fragment fade-right" style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
            <h3 style={{ fontSize: '1.2em', color: '#50fa7b' }}>Póster de Diseño</h3>
            <p style={{ fontSize: '0.8em' }}>Presentación del equipo, estrategias de optimización HPL y decisiones de diseño del clúster.</p>
          </div>
          <div className="fragment fade-left" style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
            <h3 style={{ fontSize: '1.2em', color: '#bd93f9' }}>Entorno de Práctica</h3>
            <p style={{ fontSize: '0.8em' }}>Comenzar con hardware propio. Habrá acceso anticipado al hardware de competencia más adelante.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Requerimientos Base 🛠️</h2>
        <div style={{ textAlign: 'left', marginTop: '1.5em' }}>
          <ul>
            <li className="fragment fade-up"><strong>Sistema Operativo:</strong> Distribución de Linux (ej. Rocky, AlmaLinux, Ubuntu).</li>
            <li className="fragment fade-up"><strong>Redes:</strong> Controladores para interconexiones <strong style={{color: '#8be9fd'}}>InfiniBand</strong>.</li>
            <li className="fragment fade-up"><strong>Dependencias HPL:</strong>
              <ul>
                <li>Implementación BLAS (OpenBLAS, AMD BLIS, Intel MKL, etc.)</li>
                <li>Implementación MPI (OpenMPI, MPICH, etc.)</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Recomendaciones Técnicas 🚀</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '1.5em', textAlign: 'left' }}>
          <div className="fragment fade-up" style={{ borderLeft: '5px solid #f1fa8c', paddingLeft: '15px' }}>
            <strong>Sistema de Archivos Compartido:</strong> (NFS, BeeGFS, Lustre) para evitar replicar datos manualmente.
          </div>
          <div className="fragment fade-up" style={{ borderLeft: '5px solid #ff79c6', paddingLeft: '15px' }}>
            <strong>Gestor de Trabajos (Scheduler):</strong> (Slurm, Flux) para facilitar la colaboración y encolar tareas.
          </div>
          <div className="fragment fade-up" style={{ borderLeft: '5px solid #8be9fd', paddingLeft: '15px' }}>
            <strong>Herramientas Útiles:</strong> Ansible (automatización), Spack/EasyBuild (paquetes), Lmod (módulos).
          </div>
        </div>
      </section>

      <section>
        <h2>Consejo de Oro 🏆</h2>
        <blockquote className="fragment zoom-in" style={{ padding: '30px', background: 'rgba(255,255,255,0.1)', border: '2px dashed #ffb86c', borderRadius: '15px' }}>
          "Minimizar los pasos de configuración manual. La configuración manual es propensa a errores y difícil de gestionar al aumentar los nodos.<br/><br/>
          <strong style={{color: '#ffb86c'}}>Apunten a entornos reproducibles.</strong>"
        </blockquote>
      </section>
    </Slide>
  )
}