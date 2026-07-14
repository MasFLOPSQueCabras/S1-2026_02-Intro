import { Deck } from '@revealjs/react'
import { Title } from './slides/Title'
import { Team } from './slides/Team';
import { CARLA_SCC } from './slides/CARLA_SCC';
import { Workshops } from './slides/Workshops';
import { FunCover } from './slides/FunCover';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

export function Presentation() {
    return (
        <Deck>
            <Title />
            <FunCover />
            <Team />
            <Workshops/>
            <CARLA_SCC />
        </Deck>
    )
}