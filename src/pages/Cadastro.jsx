import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const MENU_CATEGORIES = [
  {
    title: "🌽 Pratos de Milho",
    items: [
      { id: 'pamonha-doce', name: "Pamonha Doce", desc: "Clássica e docinha." },
      { id: 'pamonha-salgada', name: "Pamonha Salgada", desc: "Com queijo derretido." },
      { id: 'curau', name: "Curau", desc: "Cremoso e com canela." },
      { id: 'milho-cozido', name: "Milho Cozido", desc: "Quentinho com manteiga." },
      { id: 'bolo-milho', name: "Bolo de Milho", desc: "Fofinho e tradicional." },
      { id: 'cuscuz', name: "Cuscuz de Milho", desc: "Temperado no capricho." },
      { id: 'creme-milho', name: "Creme de Milho", desc: "Acompanhamento perfeito." },
    ]
  },
  {
    title: "🍬 Doces Típicos",
    items: [
      { id: 'canjica', name: "Canjica", desc: "Doce e quentinha com amendoim." },
      { id: 'arroz-doce', name: "Arroz Doce", desc: "Feito com muito carinho." },
      { id: 'pacoca', name: "Paçoca", desc: "A favorita da criançada." },
      { id: 'pe-de-moleque', name: "Pé de Moleque", desc: "Crocante com amendoim." },
      { id: 'cocada-branca', name: "Cocada Branca", desc: "Tradicional de coco." },
      { id: 'cocada-queimada', name: "Cocada Queimada", desc: "Com gostinho de caramelo." },
      { id: 'maca-amor', name: "Maçã do Amor", desc: "Vermelhinha e brilhante." },
      { id: 'doce-abobora', name: "Doce de Abóbora", desc: "Com formato de coração." },
      { id: 'maria-mole', name: "Maria Mole", desc: "Super macia que derrete na boca." },
      { id: 'quebra-queixo', name: "Quebra-Queixo", desc: "Para testar a força dos dentes!" },
      { id: 'pe-de-moca', name: "Pé de Moça", desc: "A versão mais macia com leite condensado." },
      { id: 'suspiro', name: "Suspiro", desc: "Levinho como as nuvens." },
    ]
  },
  {
    title: "🎂 Bolos",
    items: [
      { id: 'bolo-fuba', name: "Bolo de Fubá", desc: "Simples e delicioso." },
      { id: 'bolo-fuba-goiabada', name: "Bolo de Fubá com Goiabada", desc: "Aquele toque especial." },
      { id: 'bolo-aipim', name: "Bolo de Aipim", desc: "Com coco ralado." },
      { id: 'bolo-mandioca', name: "Bolo de Mandioca", desc: "Cremoso, o famoso Mané Pelado." },
      { id: 'bolo-cenoura', name: "Bolo de Cenoura", desc: "Com calda de chocolate." },
      { id: 'bolo-chocolate', name: "Bolo de Chocolate", desc: "Alegria da criançada." },
      { id: 'bolo-amendoim', name: "Bolo de Amendoim", desc: "Saboroso e fofinho." },
    ]
  },
  {
    title: "🥜 Amendoim e Derivados",
    items: [
      { id: 'amendoim-cozido', name: "Amendoim Cozido", desc: "Quentinho, na casca." },
      { id: 'amendoim-torrado', name: "Amendoim Torrado", desc: "Salgadinho e crocante." },
      { id: 'pacoca-caseira', name: "Paçoca Caseira", desc: "Feita no pilão." },
      { id: 'pe-moleque-2', name: "Pé de Moleque", desc: "Clássico com muito amendoim." },
      { id: 'cajuzinho', name: "Cajuzinho", desc: "Docinho inesquecível." },
    ]
  },
  {
    title: "🌭 Salgados",
    items: [
      { id: 'cachorro-quente', name: "Cachorro-Quente", desc: "Com batata palha." },
      { id: 'espetinho-carne', name: "Espetinho de Carne", desc: "Suculento no palito." },
      { id: 'espetinho-frango', name: "Espetinho de Frango", desc: "Tempero especial." },
      { id: 'pastel', name: "Pastel", desc: "Frito na hora, bem recheado." },
      { id: 'mini-pizza', name: "Mini Pizza", desc: "Queijo derretido e orégano." },
      { id: 'pao-linguica', name: "Pão com Linguiça", desc: "O clássico choripán junino." },
      { id: 'caldo-verde', name: "Caldo Verde", desc: "Com couve e calabresa." },
      { id: 'caldo-mandioca', name: "Caldo de Mandioca", desc: "Bem cremoso e quentinho." },
      { id: 'caldo-feijao', name: "Caldo de Feijão", desc: "Sabor de comida de roça." },
    ]
  },
  {
    title: "🍿 Lanches e Petiscos",
    items: [
      { id: 'pipoca-salgada', name: "Pipoca Salgada", desc: "Com manteiga derretida." },
      { id: 'pipoca-doce', name: "Pipoca Doce", desc: "Caramelizada e crocante." },
      { id: 'batata-frita', name: "Batata Frita", desc: "Porção bem servida." },
      { id: 'mandioca-frita', name: "Mandioca Frita", desc: "Sequinha e crocante." },
      { id: 'torresmo', name: "Torresmo", desc: "Para quem gosta de crocância." },
    ]
  },
  {
    title: "🍎 Extras",
    items: [
      { id: 'churros', name: "Churros", desc: "Com doce de leite." },
      { id: 'algodao-doce', name: "Algodão Doce", desc: "Alegria no palito." },
      { id: 'bombom', name: "Bombom", desc: "Chocolate para a festa." },
      { id: 'trufa', name: "Trufa", desc: "Recheios variados." },
    ]
  }
];

export const Cadastro = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState('');
  
  // Cardápio state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);

  const handleTelefoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 11) value = value.slice(0, 11); 
    
    let formattedValue = value;
    if (value.length > 2) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 7) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }
    
    setTelefone(formattedValue);
  };

  const handleContinuar = (e) => {
    e.preventDefault();
    
    if (!nome.trim() || telefone.replace(/\D/g, '').length < 10) {
      setError('Por favor, preencha um nome e um telefone válido.');
      return;
    }
    
    setError('');
    // Avança para o cardápio
    setStep(2);
  };

  // Filtra as categorias com base na pesquisa
  const filteredMenu = useMemo(() => {
    if (!searchTerm.trim()) return MENU_CATEGORIES;
    
    const lowerSearch = searchTerm.toLowerCase();
    
    return MENU_CATEGORIES.map(category => {
      const filteredItems = category.items.filter(item => 
        item.name.toLowerCase().includes(lowerSearch) || 
        item.desc.toLowerCase().includes(lowerSearch)
      );
      return { ...category, items: filteredItems };
    }).filter(category => category.items.length > 0);
  }, [searchTerm]);

  const getInitialsEmoji = (name) => {
    return "😋"; // Emoji genérico fofo para comida
  };

  return (
    <>
      <style>
        {`
          html, body, #root {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden; 
            background-color: #000;
            font-family: 'Inter', system-ui, sans-serif;
          }

          .cadastro-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .cadastro-image-wrapper {
            position: relative;
            max-width: 100vw;
            max-height: 100vh;
            aspect-ratio: 1080 / 1920; 
            height: 100%;
            width: auto;
            background-color: #000;
          }

          @media (max-aspect-ratio: 1080/1920) {
            .cadastro-image-wrapper {
              width: 100%;
              height: auto;
            }
          }

          .cadastro-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            pointer-events: none;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            z-index: 5;
            pointer-events: none; /* Para não bloquear cliques se ficar por cima sem querer */
          }

          .voltar-btn {
            position: absolute;
            top: 4%;
            left: 4%;
            padding: 8px 16px;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 20px;
            color: white;
            cursor: pointer;
            z-index: 20;
            font-weight: 600;
            font-size: 0.9rem;
            transition: background 0.3s;
          }
          .voltar-btn:hover { background: rgba(0, 0, 0, 0.6); }

          /* =======================================
             STEP 1: CARD CADASTRO
             ======================================= */
          .glass-card {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 85%;
            max-width: 400px;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 24px;
            padding: 32px 24px;
            z-index: 10;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
            color: #fff;
            text-align: center;
          }

          .card-title {
            font-size: 1.5rem;
            font-weight: 800;
            margin-bottom: 12px;
            line-height: 1.2;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
            color: #ffffff;
          }

          .card-text {
            font-size: 0.95rem;
            line-height: 1.4;
            margin-bottom: 24px;
            color: rgba(255, 255, 255, 0.95);
          }

          .form-group {
            margin-bottom: 16px;
            text-align: left;
          }
          .form-label {
            display: block;
            font-size: 0.85rem;
            margin-bottom: 6px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.95);
          }
          .form-input {
            width: 100%;
            padding: 14px 16px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            background: rgba(255, 255, 255, 0.2);
            color: #fff;
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
            box-sizing: border-box;
          }
          .form-input::placeholder { color: rgba(255, 255, 255, 0.7); }
          .form-input:focus {
            background: rgba(255, 255, 255, 0.3);
            border-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
          }

          .error-msg {
            color: #ff6b6b;
            font-size: 0.85rem;
            margin-top: 8px;
            margin-bottom: 16px;
            font-weight: 600;
            background: rgba(255, 0, 0, 0.1);
            padding: 8px;
            border-radius: 8px;
          }

          .btn-continuar {
            width: 100%;
            padding: 16px;
            border-radius: 12px;
            border: none;
            background: #ff5722;
            color: white;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.2s, background 0.3s;
            margin-top: 8px;
            box-shadow: 0 4px 15px rgba(255, 87, 34, 0.4);
          }
          .btn-continuar:active { transform: scale(0.96); }
          .btn-continuar:hover { background: #f4511e; }

          /* =======================================
             STEP 2: CARDÁPIO SCROLL
             ======================================= */
          .menu-scroll-area {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            z-index: 10;
            padding: 90px 20px 40px; /* Top padding para escapar do botão voltar */
            box-sizing: border-box;
            
            /* Esconde a scrollbar default para visual mais limpo */
            -ms-overflow-style: none;  
            scrollbar-width: none;  
          }
          .menu-scroll-area::-webkit-scrollbar {
            display: none;
          }

          .menu-header {
            text-align: center;
            color: white;
            margin-bottom: 24px;
            animation: fadeInDown 0.5s ease;
          }
          .menu-header h2 {
            font-size: 1.8rem;
            margin-bottom: 8px;
            margin-top: 0;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
            color: #ffffff; /* Força cor branca */
          }
          .menu-header p {
            font-size: 0.95rem;
            color: rgba(255,255,255,0.95); /* Força quase branco */
            margin: 0;
          }
          
          .search-bar {
            width: 100%;
            padding: 14px 20px;
            border-radius: 24px;
            border: 1px solid rgba(255,255,255,0.4);
            background: rgba(255,255,255,0.25);
            color: white;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            margin-top: 20px;
            font-size: 1rem;
            box-sizing: border-box;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            outline: none;
            transition: all 0.3s ease;
          }
          .search-bar::placeholder { color: rgba(255,255,255,0.8); }
          .search-bar:focus {
            background: rgba(255,255,255,0.35);
            border-color: rgba(255,255,255,0.8);
          }

          .category-section {
            margin-bottom: 32px;
            animation: fadeIn 0.5s ease;
          }
          .category-title {
            font-size: 1.4rem;
            color: #fff;
            font-weight: 800;
            margin-bottom: 16px;
            text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
            border-bottom: 2px solid rgba(255,255,255,0.2);
            padding-bottom: 8px;
          }

          .food-card {
            display: flex;
            align-items: stretch; /* Stretch para o conteúdo ocupar a altura toda */
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            padding: 14px;
            margin-bottom: 12px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          
          /* Estado de Selecionado */
          .food-card.selected {
            background: rgba(255, 255, 255, 0.35);
            border: 2px solid #ffcc00; /* Amarelo ouro para destacar */
            box-shadow: 0 0 15px rgba(255, 204, 0, 0.5);
            transform: scale(1.02);
          }

          .food-img-container {
            width: 70px;
            height: 70px;
            border-radius: 12px;
            background-color: #ffdab9; /* Cor de fundo amigável de comida */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            margin-right: 14px;
            flex-shrink: 0;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
          }

          .food-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-width: 0; /* Permite truncar o texto corretamente */
          }

          .food-info {
            color: #ffffff;
            margin-bottom: 10px;
          }
          .food-name {
            font-weight: 800;
            font-size: 1.1rem;
            margin-bottom: 4px;
            margin-top: 0;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
            color: #ffffff; /* Força branco */
            white-space: nowrap; /* Título na horizontal, sem quebrar linha */
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .food-desc {
            font-size: 0.85rem;
            color: rgba(255,255,255,0.95); /* Força branco */
            line-height: 1.3;
            margin: 0;
          }

          .food-btn {
            background: #ff5722;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.2s;
            align-self: flex-end; /* Move o botão para a direita, embaixo */
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }
          .food-btn:active { transform: scale(0.95); }
          
          .food-card.selected .food-btn {
            background: #4caf50; /* Verde sucesso */
            box-shadow: 0 2px 10px rgba(76, 175, 80, 0.4);
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-15px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      
      <div className="cadastro-container">
        <div className="cadastro-image-wrapper">
          <img 
            src="/cadastro-bg.png" 
            alt="Fundo do Cadastro" 
            className="cadastro-image"
          />
          
          <div className="overlay" />

          {/* Botão de voltar global para toda a tela */}
          <button 
            onClick={() => {
              if(step === 2) setStep(1); // Volta pro form se estiver no menu
              else navigate('/'); // Volta pra landing se estiver no form
            }} 
            className="voltar-btn"
          >
            ← Voltar
          </button>

          {/* ==================================================== */}
          {/* STEP 1: FORMULÁRIO DE CADASTRO                      */}
          {/* ==================================================== */}
          {step === 1 && (
            <div className="glass-card">
              <h1 className="card-title">🎉 Bem-vindo ao Arraiá do Guilherme!</h1>
              <p className="card-text">
                Antes de escolher seu prato favorito da festa, preencha seus dados abaixo.
              </p>

              <form onSubmit={handleContinuar}>
                <div className="form-group">
                  <label className="form-label">Nome completo</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Ex: João da Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Telefone</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="(11) 99999-9999"
                    value={telefone}
                    onChange={handleTelefoneChange}
                    maxLength={15}
                  />
                </div>

                {error && <div className="error-msg">{error}</div>}

                <button type="submit" className="btn-continuar">
                  Continuar
                </button>
              </form>
            </div>
          )}

          {/* ==================================================== */}
          {/* STEP 2: CARDÁPIO JUNINO                             */}
          {/* ==================================================== */}
          {step === 2 && (
            <div className="menu-scroll-area">
              <div className="menu-header">
                <h2>🎉 Arraiá do Guilherme</h2>
                <p>Selecione a opção que você gostaria de levar para o Arraiá.</p>
                <input 
                  type="text" 
                  className="search-bar"
                  placeholder="Pesquisar por comidas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {filteredMenu.length === 0 && (
                <p style={{textAlign: 'center', color: 'white', marginTop: '20px'}}>Nenhum prato encontrado :(</p>
              )}

              {filteredMenu.map((category, catIdx) => (
                <div key={catIdx} className="category-section">
                  <h3 className="category-title">{category.title}</h3>
                  
                  {category.items.map((item) => {
                    const isSelected = selectedFood === item.id;
                    
                    return (
                      <div 
                        key={item.id} 
                        className={`food-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => setSelectedFood(item.id)}
                      >
                        {/* Imagem real/placeholder da comida */}
                        <div className="food-img-container">
                          {getInitialsEmoji(item.name)}
                        </div>
                        
                        <div className="food-content">
                          <div className="food-info">
                            <h4 className="food-name">{item.name}</h4>
                          </div>
                          
                          <button 
                            className="food-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedFood(item.id);
                            }}
                          >
                            {isSelected ? 'Escolhido ✅' : 'Escolho esse!'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
              
              {/* Espaçamento extra no fim do scroll para não ficar colado embaixo */}
              <div style={{height: '40px'}}></div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};
