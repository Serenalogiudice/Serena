

const restoDellaStoria = 
    'Tutto è iniziato con nonno Michele. Era un uomo con le mani grandi e il cuore ancora più grande, un vero maestro nell\'arte di impastare. Cresciuto tra i vicoli della vecchia Catania, Michele aveva imparato i segreti della pizza da suo padre, che a sua volta li aveva appresi dai suoi antenati. Per lui, la pizza non era solo cibo, ma un rito, un modo per riunire le persone, per condividere risate e momenti semplici.\n\nPer anni, la pizza di nonno Michele era un tesoro gelosamente custodito, preparata solo per la famiglia e gli amici più stretti, spesso in occasione delle grandi feste. Il profumo che si sprigionava dalla sua cucina era un richiamo irresistibile, e presto, il passaparola iniziò a diffondersi: "Hai assaggiato la pizza di Michele? È un\'altra cosa!"\n\nFu allora che i figli di Michele, cresciuti con l\'odore inebriante dell\'impasto lievitato e il suono scoppiettante del forno, decisero che quel tesoro non poteva rimanere solo un segreto di famiglia. Nel 2023, con il benestare e la supervisione amorevole del nonno (che ancora oggi ama dare i suoi preziosi consigli), aprirono le porte della loro pizzeria, chiamandola semplicemente "Da Michele" in suo onore.\n\nNonostante il successo, l\'anima della pizzeria "Da Michele" è rimasta la stessa: autenticità, ingredienti di prima qualità e quella passione contagiosa tramandata di generazione in generazione. Ogni pizza che esce dal forno a legna porta con sé la storia di nonno Michele, la sua sapienza e il calore di una famiglia che ha scelto di condividere un pezzo della propria tradizione con tutti.\n\nOggi, "Da Michele" è un punto di riferimento per chi cerca il vero sapore della pizza catanese, un luogo dove ogni morso racconta una storia di amore, famiglia e, naturalmente, un pizzico di magia.';



const storiaToggleButton = document.getElementById('storia-toggle-button'); 
const storiaAggiuntivaDiv = document.getElementById('storia-aggiuntiva'); 

if (storiaAggiuntivaDiv) { 
    storiaAggiuntivaDiv.innerHTML = restoDellaStoria.replace(/\n\n/g, '<br><br>');
}



if (storiaToggleButton) { 
    storiaToggleButton.addEventListener('click', () => {
        if (storiaAggiuntivaDiv.classList.contains('storia-aggiuntiva--hidden')) {
            storiaAggiuntivaDiv.classList.remove('storia-aggiuntiva--hidden');
            storiaToggleButton.textContent = 'Mostra meno'; 
        } else {
            storiaAggiuntivaDiv.classList.add('storia-aggiuntiva--hidden');
            storiaToggleButton.textContent = 'Continua a leggere...'; 
        }
    });
}

const toggleButton = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

const menuPizze =[
    { nome: "margherita:",
        prezzo: "6 €"
    },
    { nome: "romana:",
        prezzo: '8 €'
    },
    {nome: "capricciosa:",
        prezzo: '14 €'
    },
    {nome: "diavola:",
        prezzo: '1000 €'
    },
    {nome: "pistacchiosa:",
        prezzo: '9 €'
    }
    ];

    menuPizze.forEach(pizza => {
        const item = document.createElement('div');
        item.classList.add('menu__item');
        item.innerHTML = `
          <h3>${pizza.nome}</h3>
          <p><strong>Prezzo:</strong> ${pizza.prezzo}</p>
        `;
        menu.appendChild(item);
      });
      
      toggleButton.addEventListener('click', () => {
        menu.classList.toggle('menu--hidden');
      
        if (menu.classList.contains('menu--hidden')) {
          toggleButton.textContent = 'Mostra Menu';
        } else {
          toggleButton.textContent = 'Chiudi Menu';
    }
      }); 

      

  
     