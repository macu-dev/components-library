import { Card as CardHOC } from '@context/Card';
import { CardHOCProps } from '@models/card.interface';

import { CardImageMain } from './CardImageMain';
import { CardTitle } from './CardTitle';
import { CardSubtitle } from './CardSubtitle';
import { CardPretitle } from './CardPretitle';

export { CardImageMain } from './CardImageMain';
export { CardTitle } from './CardTitle';
export { CardSubtitle } from './CardSubtitle';
export { CardPretitle } from './CardPretitle';



export const Card: CardHOCProps = Object.assign( CardHOC, {
    Image: CardImageMain,
    Pretitle: CardPretitle,
    Title: CardTitle,
    Subtitle: CardSubtitle
})


export default Card;