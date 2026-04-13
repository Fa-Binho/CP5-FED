// Dados completos dos Pokémons com evoluções
const pokemonData = {
    'Charmander': {
        altura: '0.6 m',
        peso: '8.5 kg',
        categoria: 'Lizard',
        habilidades: 'Blaze',
        fraqueza: 'Água',
        tipo: 'fogo',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        evolucoes: [
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',  // Charmander
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',  // Charmeleon
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'   // Charizard
        ]
    },
    'Bulbasaur': {
        altura: '0.7 m',
        peso: '6.9 kg',
        categoria: 'Seed',
        habilidades: 'Overgrow',
        fraqueza: 'Fogo',
        tipo: 'planta',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        evolucoes: [
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',  // Bulbasaur
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',  // Ivysaur
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'   // Venusaur
        ]
    },
    'Squirtle': {
        altura: '0.5 m',
        peso: '9.0 kg',
        categoria: 'Tiny Turtle',
        habilidades: 'Torrent',
        fraqueza: 'Planta',
        tipo: 'agua',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        evolucoes: [
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',  // Squirtle
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',  // Wartortle
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'   // Blastoise
        ]
    },
    'Pikachu': {
        altura: '0.4 m',
        peso: '6.0 kg',
        categoria: 'Mouse',
        habilidades: 'Static',
        fraqueza: 'Terra',
        tipo: 'eletrico',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        evolucoes: [
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png', // Pichu
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',  // Pikachu
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'   // Raichu
        ]
    }
};

// Função para abrir o modal com informações do Pokémon
function abrirModal(nome, altura, peso, categoria, habilidades, fraqueza, imagem) {
    const modal = document.getElementById('modalPokemon');
    const pokemon = pokemonData[nome];
    
    // Preencher informações básicas
    document.getElementById('modalNome').textContent = nome;
    document.getElementById('modalAltura').textContent = pokemon.altura;
    document.getElementById('modalPeso').textContent = pokemon.peso;
    document.getElementById('modalCategoria').textContent = pokemon.categoria;
    document.getElementById('modalHabilidades').textContent = pokemon.habilidades;
    document.getElementById('modalFraqueza').textContent = pokemon.fraqueza;
    document.getElementById('modalImagem').src = pokemon.imagem;
    document.getElementById('modalImagem').alt = nome;
    
    // Criar seção de evoluções
    const modalContent = modal.querySelector('.modal-content');
    const existingEvolution = modalContent.querySelector('.evolucao-container');
    if (existingEvolution) {
        existingEvolution.remove();
    }
    
    const evolucaoContainer = document.createElement('div');
    evolucaoContainer.className = 'evolucao-container';
    
    const evolucaoTitle = document.createElement('h3');
    evolucaoTitle.textContent = 'Evolução';
    evolucaoTitle.style.textAlign = 'center';
    evolucaoTitle.style.marginBottom = '2rem';
    evolucaoTitle.style.fontFamily = "'Press Start 2P', cursive";
    evolucaoTitle.style.fontSize = '1.8rem';
    evolucaoContainer.appendChild(evolucaoTitle);
    
    const evolucaoImages = document.createElement('div');
    evolucaoImages.className = 'evolucao-images';
    evolucaoImages.style.display = 'flex';
    evolucaoImages.style.justifyContent = 'center';
    evolucaoImages.style.alignItems = 'center';
    evolucaoImages.style.gap = '2rem';
    
    pokemon.evolucoes.forEach((evolImg, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.style.textAlign = 'center';
        
        const img = document.createElement('img');
        img.src = evolImg;
        img.alt = `Evolução ${index + 1}`;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.objectFit = 'contain';
        
        imgContainer.appendChild(img);
        
        // Adicionar seta entre evoluções (exceto após a última)
        if (index < pokemon.evolucoes.length - 1) {
            const arrow = document.createElement('div');
            arrow.textContent = '→';
            arrow.style.fontSize = '2rem';
            arrow.style.color = '#333';
            arrow.style.fontWeight = 'bold';
            imgContainer.appendChild(arrow);
        }
        
        evolucaoImages.appendChild(imgContainer);
    });
    
    evolucaoContainer.appendChild(evolucaoImages);
    modalContent.appendChild(evolucaoContainer);
    
    // Mostrar modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Impedir scroll do fundo
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modalPokemon');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restaurar scroll
}

// Fechar modal ao clicar fora do conteúdo
document.getElementById('modalPokemon').addEventListener('click', function(event) {
    if (event.target === this) {
        fecharModal();
    }
});

// Fechar modal com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharModal();
    }
});

// Funcionalidade de filtro dos Pokémons
document.addEventListener('DOMContentLoaded', function() {
    const filtros = document.querySelectorAll('#lista-filtros li');
    const pokemons = document.querySelectorAll('.poke-card');
    
    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            // Remover classe ativo de todos os filtros
            filtros.forEach(f => f.classList.remove('ativo'));
            // Adicionar classe ativo ao filtro clicado
            this.classList.add('ativo');
            
            const filtroSelecionado = this.getAttribute('data-filter');
            
            pokemons.forEach(pokemon => {
                if (filtroSelecionado === 'todos' || pokemon.getAttribute('data-tipo') === filtroSelecionado) {
                    pokemon.style.display = 'block';
                } else {
                    pokemon.style.display = 'none';
                }
            });
        });
    });
});

// Funcionalidade do formulário de cartas
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-carta');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obter valores do formulário
            const nome = document.getElementById('nomeCarta').value;
            const vida = document.getElementById('vidaCarta').value;
            const pokemonImg = document.getElementById('pokemonSelect').value;
            const ataque = document.getElementById('ataqueCarta').value;
            const resistencia = document.getElementById('resistenciaCarta').value;
            const categoria = document.getElementById('categoriaSelect').value;
            
            // Atualizar preview da carta
            document.getElementById('resNome').textContent = nome;
            document.getElementById('resVida').textContent = `HP ${vida}`;
            document.getElementById('resImg').src = pokemonImg;
            document.getElementById('resImg').alt = nome;
            document.getElementById('resAtaque').textContent = ataque;
            document.getElementById('resResistencia').textContent = resistencia;
            
            // Aplicar cor de fundo da categoria
            const cartaResultado = document.getElementById('cartaResultado');
            if (categoria) {
                cartaResultado.style.backgroundColor = categoria;
            }
            
            // Feedback visual
            const btnEnviar = form.querySelector('.btn-enviar');
            const textoOriginal = btnEnviar.textContent;
            btnEnviar.textContent = 'Carta Criada!';
            btnEnviar.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                btnEnviar.textContent = textoOriginal;
                btnEnviar.style.backgroundColor = '#7CAAC9';
            }, 2000);
        });
    }
});

// Rolagem suave para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Considerar altura do menu fixo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
