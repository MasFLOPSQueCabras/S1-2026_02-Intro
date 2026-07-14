import { Deck } from '@revealjs/react'
import { Title } from './slides/Title'
import { CARLA_SCC } from './slides/CARLA_SCC';
import { Workshops } from './slides/Workshops';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

export function Presentation() {
    return (
        <Deck>
            <Title />
            <Workshops/>
            <CARLA_SCC />
        </Deck>
    )
}