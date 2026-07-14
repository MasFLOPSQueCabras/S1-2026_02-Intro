import { Slide } from '@revealjs/react'
import senecaFlop from '../assets/SenecaFLOP.png'
import seputo from '../assets/Seputo.png'

export function FunCover() {
  return (
    <Slide>
      <section>
        <img src={senecaFlop} alt="SenecaFLOP" style={{ maxHeight: '80vh', borderRadius: '15px' }} />
      </section>
      
      <section>
        <img src={seputo} alt="Seputo" style={{ maxHeight: '80vh', borderRadius: '15px' }} />
      </section>
    </Slide>
  )
}
