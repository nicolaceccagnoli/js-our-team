/*

    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
        -- Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    
    1)  Creare l'array di oggetti con le informazioni fornite. OK
    2)  Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto OK
    3)  Stampare le stesse informazioni su DOM sottoforma di stringhe OK

*/

// Dichiaro una Variabile contenente un Array
const ourTeam = [];
console.log('Il nostro Team', ourTeam, typeof ourTeam);

// Richiamo la funzione per aggiungere i membri al Team
ourTeam.push(createMemberObject('Wayne', 'Barnett', 'Founder & CEO', `wayne-barnett-founder-ceo.jpg`));
ourTeam.push(createMemberObject('Angela', 'Carroll', 'Chief Editor', `angela-caroll-chief-editor.jpg`));
ourTeam.push(createMemberObject('Walter', 'Gordon', 'Office Manager', `walter-gordon-office-manager.jpg`));
ourTeam.push(createMemberObject('Angela', 'Lopez', 'Social Media Manager', `angela-lopez-social-media-manager.jpg`));
ourTeam.push(createMemberObject('Scott', 'Estrada', 'Developer', `scott-estrada-developer.jpg`));
ourTeam.push(createMemberObject('Barbara', 'Ramos', 'Graphic Designer', `barbara-ramos-graphic-designer.jpg`));

console.log('Il nostro Team', ourTeam, typeof ourTeam);

// Prendo il container per la lista dei membri dal Document
const memberContainer = document.querySelector('#member-container');

const row = document.createElement('div');
row.classList.add('row');


// Stampo la row dentro il container
memberContainer.append(row);
console.log(memberContainer);

// Creo un ciclo che scorra tutti gli oggetti dell'Array
for (let i = 0; i < ourTeam.length; i++) {

    // let arraySecondary = [];

    // Dichiaro una Variabile che indicherà il Membro del team
    let member;
    for (let key in ourTeam[i]) {
        console.log('--' + key + ':', ourTeam[i][key]);
        // arraySecondary.push(ourTeam[i][key]);

        // Faccio "ciclare" il Membro all'interno del for..in e gli assegno l'indice dell'array del Team
        member = ourTeam[i];
    }

    // console.log('Il secondo Array contiene:', arraySecondary, typeof arraySecondary);

    // Stampo sul HTML la Card di ogni membro
    row.innerHTML += `
    <div class="col-4"> 
        <div class="card text-center mb-2 fs-4 bg-dark">
            <div class="card-body">
                <h3 class="bg-primary">${member.surname}, ${member.name}</h3>
                <p class="bg-warning">${member.role}</p>
                <img src="./img/${member.photo}" alt""></img>
            </div>
        </div>
    </div>
    `

}

/* 

    LE MIE FUNZIONI

 */


// Dichiaro una funzione che mi aiuti a creare dei nuovi Membri del Team
function createMemberObject (name, surname, role, image) {
    const newMember = {
        nome: name,
        cognome: surname,
        ruolo: role,
        photo: image,
    };

    return newMember;
};