import { Slide } from '@revealjs/react'

export function CARLA_SCC() {
  return (
    <Slide>
      <section>
        <h2>CARLA SCC 2026</h2>
        <h3>Preparación y Objetivos</h3>
      </section>

      <section>
        <h2>Objetivo Principal</h2>
        <ul>
          <li><strong>Misión:</strong> Configurar y optimizar un clúster para maximizar el puntaje en <strong>HPL (High Performance Linpack)</strong>.</li>
          <li><strong>Recursos:</strong> Al menos 3 nodos por equipo, provistos por UNC Supercómputo.</li>
          <li><strong>Reglas HPL:</strong> ❌ No se permiten binarios de proveedores ni versiones de precisión mixta.</li>
        </ul>
      </section>

      <section>
        <h2>Entregables y Práctica</h2>
        <ul>
          <li><strong>Póster de Diseño:</strong> Presentación del equipo, estrategias de optimización HPL y decisiones de diseño del clúster.</li>
          <li><strong>Entorno de Práctica:</strong> Comenzar con hardware propio. Habrá acceso anticipado al hardware de competencia más adelante.</li>
        </ul>
      </section>

      <section>
        <h2>Requerimientos Base</h2>
        <ul>
          <li><strong>Sistema Operativo:</strong> Distribución de Linux.</li>
          <li><strong>Redes:</strong> Controladores para interconexiones <strong>InfiniBand</strong>.</li>
          <li><strong>Dependencias HPL:</strong>
            <ul>
              <li>Implementación BLAS (OpenBLAS, AMD BLIS, Intel MKL, etc.)</li>
              <li>Implementación MPI (OpenMPI, MPICH, etc.)</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Componentes Recomendados</h2>
        <ul>
          <li><strong>Sistema de Archivos Compartido:</strong> (NFS, BeeGFS, Lustre) para evitar replicar datos manualmente.</li>
          <li><strong>Gestor de Trabajos (Scheduler):</strong> (Slurm, Flux) para facilitar la colaboración y encolar tareas.</li>
        </ul>
      </section>

      <section>
        <h2>Herramientas Útiles</h2>
        <ul>
          <li><strong>Automatización:</strong> Ansible, Puppet, etc.</li>
          <li><strong>Gestores de Paquetes:</strong> EasyBuild, Spack, etc.</li>
          <li><strong>Módulos de Entorno:</strong> Lmod, Environment Modules, etc.</li>
        </ul>
      </section>

      <section>
        <h2>Recomendación</h2>
        <blockquote>
          "Minimizar los pasos de configuración manual. La configuración manual es propensa a errores y difícil de gestionar al aumentar los nodos. <strong>Apunten a entornos reproducibles</strong>."
        </blockquote>
      </section>
    </Slide>
  )
}