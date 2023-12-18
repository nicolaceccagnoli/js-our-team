/*

    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
        -- Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    
    1)  Creare l'array di oggetti con le informazioni fornite.
    2)  Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
    3)  Stampare le stesse informazioni su DOM sottoforma di stringhe

*/

// Dichiaro una Variabile contenente un Array
const ourTeam = [];
console.log('Il nostro Team', ourTeam, typeof ourTeam);

// Richiamo la funzione per aggiungere i membri al Team
ourTeam.push(createMemberObject('Wayne', 'Barnett', 'Founder & CEO', `img/wayne-barnett-founder-ceo.jpg`));
ourTeam.push(createMemberObject('Angela', 'Carroll', 'Chief Editor', `img/angela-caroll-chief-editor.jpg`));
ourTeam.push(createMemberObject('Walter', 'Gordon', 'Office Manager', `img/walter-gordon-office-manager.jpg`));
ourTeam.push(createMemberObject('Angela', 'Lopez', 'Social Media Manager', `img/angela-lopez-social-media-manager.jpg`));
ourTeam.push(createMemberObject('Scott', 'Estrada', 'Developer', `img/scott-estrada-developer.jpg`));
ourTeam.push(createMemberObject('Barbara', 'Ramos', 'Graphic Designer', `img/barbara-ramos-graphic-designer.jpg`));

console.log('Il nostro Team', ourTeam, typeof ourTeam);


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