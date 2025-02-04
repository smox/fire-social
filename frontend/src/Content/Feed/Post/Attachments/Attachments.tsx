import { IAttachment } from '../../../../interfaces/Models';
import './Attachments.css';
import { useRef, useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface IAttachmentsProps {
    attachments: IAttachment[];
}


export function Attachments ({ attachments }: IAttachmentsProps) {

    const attachmentsRef = useRef<HTMLDivElement>(null);

    const [ showArrows, setShowArrows ] = useState(false);
    const [isAtLeftEdge, setIsAtLeftEdge] = useState(true);
    const [isAtRightEdge, setIsAtRightEdge] = useState(false);


    const scrollLeft = () => {
        attachmentsRef.current?.scrollBy({
          left: -200,    // wie viele Pixel du scrollen möchtest
          behavior: 'smooth'
        });
    };
      
    const scrollRight = () => {
        attachmentsRef.current?.scrollBy({
          left: 200,
          behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (!attachmentsRef.current) return;
        
        const el = attachmentsRef.current;
        const { scrollLeft, scrollWidth, clientWidth } = el;
      
        // Links?
        // Wenn scrollLeft <= 0 (ggf. Toleranz: <= 1), dann sind wir ganz links:
        setIsAtLeftEdge(scrollLeft <= 0);
      
        // Rechts?
        // Wenn scrollLeft + clientWidth >= scrollWidth (ggf. Toleranz: -1),
        // sind wir ganz rechts:
        setIsAtRightEdge(scrollLeft + clientWidth >= scrollWidth);
    }


    // Damit wird jedes Scroll-Ereignis verarbeitet, und wir aktualisieren laufend isAtLeftEdge und isAtRightEdge.
    useEffect(() => {
        const el = attachmentsRef.current;
        if (!el) return;
      
        // Listener hinzufügen
        el.addEventListener('scroll', handleScroll);
      
        // Direkt beim ersten Render einmal ausführen, 
        // damit der State korrekt gesetzt wird:
        handleScroll();
      
        // Cleanup beim Unmount
        return () => {
          el.removeEventListener('scroll', handleScroll);
        };
      }, []);
      

    return (
        <div className="attachment-wrapper">
            <h3 className="attachments-title">Bilder / Videos</h3>
            <div className="attachments-container" onMouseEnter={ () => setShowArrows(true) } onMouseLeave={ () => setShowArrows(false) } >
                <button className={ `scroll-button scroll-button-left ${ showArrows && !isAtLeftEdge ? 'visible' : '' }` } onClick={ scrollLeft }>
                    <ArrowBackIosNewIcon fontSize="large" />
                </button>
                <div className="attachments" ref={ attachmentsRef }>
                    { attachments.map((attachment: IAttachment, index: number, array: IAttachment[]) => {
                        return (
                            <img key={ attachment.id } className="attachment" src={ attachment.url } alt={ attachment.altText } 
                                onLoad={ array.length-1 === index ? handleScroll : undefined } />
                        );
                    }) }
                </div>
                <button className={`scroll-button scroll-button-right ${showArrows && !isAtRightEdge ? 'visible' : ''}`} onClick={ scrollRight }>
                    <ArrowForwardIosIcon fontSize="large" />
                </button>
            </div>
        </div>
    );
}
