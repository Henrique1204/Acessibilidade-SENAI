import React from 'react';

const Head = ({ title, description }) => {
    React.useEffect(() => {
        document.title = `Acessibilidade SENAI | ${title}`;

        document.querySelector("meta[name='description'")
        .setAttribute(
            "content",
            `Acessibilidade SENAI | ${title}, ${description}` || ""
        );
    }, [title, description]);
    
    return <></>;
};

export default Head;
