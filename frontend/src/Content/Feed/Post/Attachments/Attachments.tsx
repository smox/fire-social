import { IAttachment } from '../../../../interfaces/Models';
import './Attachments.css';
import { useRef, useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Lightbox, { ViewCallbackProps } from 'yet-another-react-lightbox';
import { Fullscreen, Counter, Zoom, Slideshow, Captions } from "yet-another-react-lightbox/plugins";

import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";

export interface IAttachmentsProps {
    attachments: IAttachment[];
}


export function Attachments ({ attachments }: IAttachmentsProps) {

    const attachmentsRef = useRef<HTMLDivElement>(null);

    const [ showArrows, setShowArrows ] = useState(false);
    const [isAtLeftEdge, setIsAtLeftEdge] = useState(true);
    const [isAtRightEdge, setIsAtRightEdge] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);



    // Bild anklicken -> Lightbox öffnen:
    const handleImageClick = (index: number) => {
        setPhotoIndex(index);
        setLightboxOpen(true);
    };

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
    
    //let slides = undefined;

    //useEffect(() => {
    const slides = attachments.map((attachment) => ({
            src: attachment.url,
            alt: attachment.altText,
            title: "test titel",
            description: "Hier kommt eine Beschreibung des Bilds hinein"
        }));
    //},[attachments]);

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
                                onLoad={ array.length-1 === index ? handleScroll : undefined } onClick={ () => handleImageClick(index) }/>
                        );
                    }) }
                </div>
                <button className={`scroll-button scroll-button-right ${showArrows && !isAtRightEdge ? 'visible' : ''}`} onClick={ scrollRight }>
                    <ArrowForwardIosIcon fontSize="large" />
                </button>
            </div>
            {lightboxOpen && (
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={slides}
                    index={photoIndex}
                    // optional: Event, um den Index zu aktualisieren
                    on={{
                        view: ({ index }: ViewCallbackProps) => setPhotoIndex(index),
                    }}
                    // Plugins (optional)
                    plugins={[ Fullscreen, Counter, Zoom, Slideshow, Captions ]}
                    captions={{ showToggle: true, descriptionTextAlign: "center" }}
                    counter={{ container: { style: { top: "unset", bottom: 0, fontSize: "larger" } } }}
                    />
                )}
        </div>
    );
}
