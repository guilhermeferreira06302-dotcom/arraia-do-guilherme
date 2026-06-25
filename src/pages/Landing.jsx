
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          html, body, #root {
            margin: 0;
            padding: 0;
            width: 100%;
            background-color: #000;
            /* Permite scroll na página de Landing */
            overflow: auto !important; 
            height: auto;
            min-height: 100%;
          }

          .landing-container {
            position: relative;
            width: 100vw;
            min-height: 100vh;
            display: flex;
            justify-content: center; /* Centraliza no PC se colocar max-width */
            align-items: flex-start;
          }
          
          .landing-image-wrapper {
            position: relative;
            width: 100%;
            max-width: 600px; /* Limite opcional para não estourar muito no Desktop */
            height: auto;
          }

          .landing-image {
            width: 100%;
            height: auto;
            display: block;
            pointer-events: none; /* O restante da imagem não deve ser clicável */
          }

          .landing-clickable-area {
            position: absolute;
            /* Posição da área clicável baseada na porcentagem da imagem original */
            bottom: 8%;
            left: 5%;
            width: 50%;
            height: 14%;
            cursor: pointer;
            z-index: 10;
            -webkit-tap-highlight-color: transparent;
          }
        `}
      </style>
      <div className="landing-container">
        <div className="landing-image-wrapper">
          <img 
            src="/landing-bg.png" 
            alt="Comece por aqui" 
            className="landing-image"
          />
          <div 
            onClick={() => navigate('/cadastro')}
            className="landing-clickable-area"
            role="button"
            tabIndex={0}
            aria-label="Comece por aqui!"
          />
        </div>
      </div>
    </>
  );
};
