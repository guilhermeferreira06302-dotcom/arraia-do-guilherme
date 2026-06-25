
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
            height: 100%;
            overflow: hidden; /* Não permitir scroll */
            background-color: #000;
          }

          .landing-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .landing-image-wrapper {
            position: relative;
            /* Mantém a proporção exata da imagem sem cortar nada (comportamento 'contain') */
            max-width: 100vw;
            max-height: 100vh;
            aspect-ratio: 1080 / 1920; 
            height: 100%;
            width: auto;
          }

          @media (max-aspect-ratio: 1080/1920) {
            .landing-image-wrapper {
              width: 100%;
              height: auto;
            }
          }

          .landing-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            pointer-events: none; /* O restante da imagem não deve ser clicável */
          }

          .landing-clickable-area {
            position: absolute;
            /* Posição da área clicável ajustada para a esquerda */
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
