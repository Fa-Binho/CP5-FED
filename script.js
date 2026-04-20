
const pokemonData = {

    // --- FOGO ---
    'Charmander': {
        altura: '0.6 m', peso: '8.5 kg', categoria: 'Lizard',
        habilidades: 'Blaze', tipo: 'fogo', fraqueza: 'agua',
        imagem: 'images/pokemons/Charmander.png',
        evolucoes: [
            'images/pokemons/Charmander.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
        ]
    },
    'Growlithe': {
        altura: '0.7 m', peso: '19.0 kg', categoria: 'Puppy',
        habilidades: 'Flash Fire', tipo: 'fogo', fraqueza: 'agua',
        imagem: 'images/pokemons/Growlithe.png',
        evolucoes: [
            'images/pokemons/Growlithe.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png'
        ]
    },
    'Ponyta': {
        altura: '1.0 m', peso: '30.0 kg', categoria: 'Fire Horse',
        habilidades: 'Flash Fire', tipo: 'fogo', fraqueza: 'agua',
        imagem: 'images/pokemons/Ponyta.png',
        evolucoes: [
            'images/pokemons/Ponyta.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png'
        ]
    },

    // --- ÁGUA ---
    'Squirtle': {
        altura: '0.5 m', peso: '9.0 kg', categoria: 'Tiny Turtle',
        habilidades: 'Torrent', tipo: 'agua', fraqueza: 'eletrico',
        imagem: 'images/pokemons/Squirtle.png',
        evolucoes: [
            'images/pokemons/Squirtle.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'
        ]
    },
    'Goldeen': {
        altura: '0.6 m', peso: '15.0 kg', categoria: 'Goldfish',
        habilidades: 'Water Veil', tipo: 'agua', fraqueza: 'eletrico',
        imagem: 'images/pokemons/Goldeen.png',
        evolucoes: ['images/pokemons/Goldeen.png']
    },
    'Krabby': {
        altura: '0.4 m', peso: '6.5 kg', categoria: 'River Crab',
        habilidades: 'Hyper Cutter', tipo: 'agua', fraqueza: 'eletrico',
        imagem: 'images/pokemons/Krabby.png',
        evolucoes: ['images/pokemons/Krabby.png']
    },

    // --- PLANTA ---
    'Bulbasaur': {
        altura: '0.7 m', peso: '6.9 kg', categoria: 'Seed',
        habilidades: 'Overgrow', tipo: 'planta', fraqueza: 'fogo',
        imagem: 'images/pokemons/Bulbasaur.png',
        // Usa as imagens locais de evolução disponíveis na pasta
        evolucoes: [
            'images/pokemons/Bulbasaur.png',
            'images/pokemons/Bulbasaur-ev2.png',
            'images/pokemons/Bulbasaur-ev3.png'
        ]
    },
    'Bellsprout': {
        altura: '0.7 m', peso: '4.0 kg', categoria: 'Flower',
        habilidades: 'Chlorophyll', tipo: 'planta', fraqueza: 'fogo',
        imagem: 'images/pokemons/Bellsprout.png',
        evolucoes: [
            'images/pokemons/Bellsprout.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png'
        ]
    },
    'Caterpie': {
        altura: '0.3 m', peso: '2.9 kg', categoria: 'Worm',
        habilidades: 'Shield Dust', tipo: 'planta', fraqueza: 'fogo',
        imagem: 'images/pokemons/Caterpie.png',
        evolucoes: [
            'images/pokemons/Caterpie.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png'
        ]
    },

    // --- ELÉTRICO ---
    'Pikachu': {
        altura: '0.4 m', peso: '6.0 kg', categoria: 'Mouse',
        habilidades: 'Static', tipo: 'eletrico', fraqueza: 'terra',
        imagem: 'images/pokemons/Pikachu.png',
        evolucoes: [
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png',
            'images/pokemons/Pikachu.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png'
        ]
    },
    'Abra': {
        altura: '0.9 m', peso: '19.5 kg', categoria: 'Psi',
        habilidades: 'Synchronize', tipo: 'eletrico', fraqueza: 'terra',
        imagem: 'images/pokemons/Abra.png',
        evolucoes: [
            'images/pokemons/Abra.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png'
        ]
    },
    'Eevee': {
        altura: '0.3 m', peso: '6.5 kg', categoria: 'Evolution',
        habilidades: 'Adaptability', tipo: 'eletrico', fraqueza: 'terra',
        imagem: 'images/pokemons/Eevee.png',
        evolucoes: ['images/pokemons/Eevee.png']
    },

    // --- GELO ---
    'Lapras': {
        altura: '2.5 m', peso: '220.0 kg', categoria: 'Transport',
        habilidades: 'Water Absorb', tipo: 'gelo', fraqueza: 'fogo',
        imagem: 'images/pokemons/Lapras.png',
        evolucoes: ['images/pokemons/Lapras.png']
    },
    'Jigglypuff': {
        altura: '0.5 m', peso: '5.5 kg', categoria: 'Balloon',
        habilidades: 'Cute Charm', tipo: 'gelo', fraqueza: 'fogo',
        imagem: 'images/pokemons/Jigglypuff.png',
        evolucoes: [
            'images/pokemons/Jigglypuff.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png'
        ]
    },
    'Clefairy': {
        altura: '0.6 m', peso: '7.5 kg', categoria: 'Fairy',
        habilidades: 'Cute Charm', tipo: 'gelo', fraqueza: 'fogo',
        imagem: 'images/pokemons/Clefairy.png',
        evolucoes: [
            'images/pokemons/Clefairy.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png'
        ]
    },
    'Snorlax': {
        altura: '2.1 m', peso: '460.0 kg', categoria: 'Sleeping',
        habilidades: 'Immunity', tipo: 'gelo', fraqueza: 'fogo',
        imagem: 'images/pokemons/Snorlax.png',
        evolucoes: ['images/pokemons/Snorlax.png']
    },
    'Pidgey': {
        altura: '0.3 m', peso: '1.8 kg', categoria: 'Tiny Bird',
        habilidades: 'Keen Eye', tipo: 'gelo', fraqueza: 'fogo',
        imagem: 'images/pokemons/Pidgey.png',
        evolucoes: [
            'images/pokemons/Pidgey.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png'
        ]
    }
};


const tipoIcones = {
    'fogo':   'images/icons/fogo.png',
    'planta': 'images/icons/planta.png'
};

const tipoTexto = {
    'fogo':    'Fogo',
    'planta':  'Planta',
    'agua':    '💧 Água',
    'eletrico':'⚡ Elétrico',
    'gelo':    '❄️ Gelo',
    'terra':   '🌍 Terra'
};


function getTipoHTML(tipo) {
    if (tipoIcones[tipo]) {
        return `<img src="${tipoIcones[tipo]}" class="tipo-icon" alt="${tipo}"> ${tipoTexto[tipo]}`;
    }
    return tipoTexto[tipo] || tipo;
}


function abrirModal(nome) {
    const pokemon = pokemonData[nome];
    if (!pokemon) return;

    document.getElementById('modalNome').textContent = nome;
    document.getElementById('modalAltura').textContent = pokemon.altura;
    document.getElementById('modalPeso').textContent = pokemon.peso;
    document.getElementById('modalCategoria').textContent = pokemon.categoria;
    document.getElementById('modalHabilidades').textContent = pokemon.habilidades;
    document.getElementById('modalTipo').innerHTML = getTipoHTML(pokemon.tipo);
    document.getElementById('modalFraqueza').innerHTML = getTipoHTML(pokemon.fraqueza);


    const container = document.getElementById('evolucaoImages');
    container.innerHTML = '';

    pokemon.evolucoes.forEach((imgSrc, index) => {
        const step = document.createElement('div');
        step.className = 'evo-step';

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `Evolução ${index + 1}`;
        img.className = 'evo-img';
        step.appendChild(img);


        if (index < pokemon.evolucoes.length - 1) {
            const seta = document.createElement('span');
            seta.className = 'evo-arrow';
            seta.innerHTML = '&#9658;';
            step.appendChild(seta);
        }

        container.appendChild(step);
    });

    document.getElementById('modalPokemon').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    document.getElementById('modalPokemon').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Fechar ao clicar fora do conteúdo
document.getElementById('modalPokemon').addEventListener('click', function (e) {
    if (e.target === this) fecharModal();
});

// Fechar com ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') fecharModal();
});

document.addEventListener('DOMContentLoaded', function () {
    const filtros = document.querySelectorAll('#lista-filtros li');
    const cards   = document.querySelectorAll('.poke-card');

    filtros.forEach(filtro => {
        filtro.addEventListener('click', function () {
            filtros.forEach(f => f.classList.remove('ativo'));
            this.classList.add('ativo');

            const sel = this.getAttribute('data-filter');

            cards.forEach(card => {
                const visivel = sel === 'todos' || card.getAttribute('data-tipo') === sel;
                card.style.display = visivel ? 'flex' : 'none';
            });
        });
    });
});

// =========================================
// FORMULÁRIO DE CARTAS
// =========================================
const categoriaCores = {
    'eletrico': '#f8d030',
    'planta':   '#78c850',
    'fogo':     '#f08030',
    'agua':     '#6890f0',
    'gelo':     '#98d8d8'
};

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-carta');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome       = document.getElementById('nomeCarta').value.trim();
        const vida       = document.getElementById('vidaCarta').value.trim();
        const pokNome    = document.getElementById('pokemonSelect').value;
        const ataque     = document.getElementById('ataqueCarta').value.trim();
        const resistencia= document.getElementById('resistenciaCarta').value.trim();
        const categoria  = document.getElementById('categoriaSelect').value;

        // Atualizar informações na carta
        document.getElementById('resNome').textContent = nome || 'Nome da Carta';
        document.getElementById('resVida').textContent = vida ? `HP ${vida}` : 'HP 0';
        document.getElementById('resAtaque').textContent = ataque || '-';
        document.getElementById('resResistencia').textContent = resistencia || '-';

        // Imagem do Pokémon selecionado
        if (pokNome && pokemonData[pokNome]) {
            const img = document.getElementById('resImg');
            img.src = pokemonData[pokNome].imagem;
            img.alt = pokNome;
        }

        // Cor da categoria como overlay
        const overlay = document.getElementById('cartaOverlay');
        if (overlay && categoria && categoriaCores[categoria]) {
            overlay.style.backgroundColor = categoriaCores[categoria];
        }

        // Feedback visual no botão
        const btn = form.querySelector('.btn-enviar');
        btn.textContent = 'Carta Criada! ✓';
        btn.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            btn.textContent = 'Enviar';
            btn.style.backgroundColor = '#7CAAC9';
        }, 2000);
    });
});
