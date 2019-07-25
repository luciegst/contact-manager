/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log('Bienvenue dans le gestionnaire de contacts !');
console.log('1: Lister les contacts');
console.log('2: Ajouter un nouveau contact');
console.log('0: Quitter le programme');

//Create Class Contact//
class Contact {
  constructor(lastname, firstname) {
    this.lastname = lastname;
    this.firstname = firstname;
  }
  describe(){
    return `Nom : ${this.lastname}, Prénom : ${this.firstname}`;
  }
}

//Create first contacts//
const existingContact1 = new Contact('Watson', 'Paul');
const existingContact2 = new Contact('Goodall', 'Jane');

//Define an array with all contacts//
let allContacts = [existingContact1, existingContact2];

//List all contacts//
function listContact() {
 allContacts.forEach(contact => {
   console.log(contact.describe());
 });
}

//Add a new contact//
function addContact(){
  let lastName = prompt('Ajouter un nom');
  let firstName = prompt('Ajouter un prénom');
  let newContact = new Contact(lastName, firstName);
  allContacts.push(newContact);
}

//Choose options//
let option = Number(prompt('Choisissez une option :'));
while (option !== 0) {
  if (option === 1) {
    console.log('Voici la liste de vos contacts :');
    listContact();
    console.log('1: Lister les contacts');
    console.log('2: Ajouter un nouveau contact');
    console.log('0: Quitter le programme');
    option = Number(prompt('Choisissez une nouvelle option :'))
  } else if (option === 2) {
    addContact();
    console.log('Votre contact a été enregistré avec succès.')
    console.log('1: Lister les contacts');
    console.log('2: Ajouter un nouveau contact');
    console.log('0: Quitter le programme');
    option = Number(prompt('Choisissez une nouvelle option :'))
  } else if (option !== 1 || option !== 2 || option !== 0 ) {
    console.log('Choisissez entre 1, 2 ou 0')
    console.log('1: Lister les contacts');
    console.log('2: Ajouter un nouveau contact');
    console.log('0: Quitter le programme');
    option = Number(prompt('Choisissez une nouvelle option :'))
  }
}

if (option === 0) {
  console.log('Au revoir ! Merci de votre participation.')
}






