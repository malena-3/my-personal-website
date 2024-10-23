import React from 'react';
import './Gallery.css';
import inclusiveIden from '../pictures/inclusiveIden.jpeg'; 
import sheCodesClubRush from '../pictures/sheCodesClubRush1.jpeg';
import snapSpeech from '../pictures/snapSpeech.jpeg';
import johnMuir from '../pictures/johnMuir.jpeg';

const Gallery = () => {
    const images = [
        { id: 1, src: inclusiveIden, alt: 'Inclusive Identity Project at Snap Academies', title: '👻 Snap Academies Final Showcase 2024' },
        { id: 2, src: sheCodesClubRush, alt: 'She.Codes Club Rush Event', title: '🌟 She.Codes Club Rush Fall 2024' },
        { id: 3, src: snapSpeech, alt: 'Giving a speech at Snap Academies', title: '🎤 Snap Engineering Academy Closing Remarks (Representing the Engineering Cohort)' },
        { id: 4, src: johnMuir, alt: 'Introducing CS to kids', title: 'Science Fest @ John Muir Highschool w/She.Codes Spring 2024'}
    ];

    return (
        <section id="gallery">
            <h2>Gallery</h2>
            <div id="gallery-grid">
                {images.map(image => (
                    <figure key={image.id}>
                        <img src={image.src} alt={image.alt} id="gallery-image"/>
                        <figcaption>{image.title}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
