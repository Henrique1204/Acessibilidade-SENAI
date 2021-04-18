import React from 'react';
import Icone from '../Util/Icone';
import estilos from './ModalContainer.module.css';

const ModalContainer = ({ setAtivo, children, classe }) => {
    const fundoRef = React.useRef();
  
    const fecharModal = ({ target }) => {
      if (target === fundoRef.current) setAtivo(false);
    }
  
    React.useEffect(() => {
      const fecharModalEsc = ({ key }) => {
        if (key === 'Escape') setAtivo(false);
      };

      window.addEventListener('keydown', fecharModalEsc);

      return () => {
        window.removeEventListener('keydown', fecharModalEsc);
      };
    }, [setAtivo]);
  
    return (
      <section className={estilos.Modal} onClick={fecharModal} ref={fundoRef}>
        <div className={`${estilos.CardModal} ${(classe) ? classe : ''}`}>
          <button className={estilos.ModalFechar} onClick={() => setAtivo(false)}>
            <Icone tipo="fa" nome="times" />
          </button>

            { children }
        </div>
      </section>
    );
  };

export default ModalContainer;