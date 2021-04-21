import React from 'react';
import estilos from './ImagemIntro.module.css';

const ImagemIntro = ({ alt, ...props }) => {
    const [skeleton, setSkeleton] = React.useState(true);

    const handleLoading = ({ target }) => {
        setSkeleton(false);
        target.style.opacity = 1;
    };

    return (
        <div className={estilos.imgContainer}>
            { skeleton && <div className={estilos.skeleton}></div> }
            <img onLoad={handleLoading} className={estilos.img} alt={alt}  {...props} />
        </div>
    );
};

export default ImagemIntro;