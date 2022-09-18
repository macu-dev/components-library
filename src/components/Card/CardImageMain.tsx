import Image from 'next/image';
import { useContext } from 'react';
import { CardCtx } from "@context/Card";
import { CardImage } from '@models/card.interface';

const imageDefault:CardImage = {
    src:'https://picsum.photos/200/300'
};


export const CardImageMain = ( { img }: { img?: CardImage }) => {

    const cardContext = useContext( CardCtx );
    
    let imgToShow: CardImage;

    if ( img ) {
        imgToShow = img;
    } else if ( cardContext?.item?.img ) {
        imgToShow = cardContext?.item?.img;
    } else {
        imgToShow = imageDefault;
    }


    return (
        <>  
            {
                imgToShow.src &&
                <div>
                    <Image 
                        src={imgToShow?.src} 
                        alt={imgToShow?.alt || ''}
                        width={imgToShow?.width || '200'} 
                        height={imgToShow?.height || '300'}
                        layout={imgToShow?.layout || "intrinsic"}
                    />
                </div>
               
            }
            
        </>
    );
}