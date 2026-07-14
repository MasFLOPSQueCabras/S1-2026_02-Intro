import { Deck } from '@revealjs/react'
import { Title } from './slides/Title'
import { Agenda } from './slides/Agenda';
import { Team } from './slides/Team';
import { WhatIsHPC } from './slides/WhatIsHPC';
import { CARLA_SCC } from './slides/CARLA_SCC';
import { Workshops } from './slides/Workshops';
import { FunCover } from './slides/FunCover';
import { QA } from './slides/QA';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

export function Presentation() {
    return (
        <Deck>
            <Title />
            <FunCover />
            <Agenda />
            <Team />
            <WhatIsHPC />
            <Workshops/>
            <CARLA_SCC />
            <QA />
        </Deck>
    )
}