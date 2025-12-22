// salutations.js 
const utilisateurs = ["Ali", "Bilal", "Chams", "Dalil"]; 
function saluerUtilisateur(nom) { 
	return `Bonjour ${nom}, bienvenue !`; 
} 
function saluerTous() { 
	console.log("=== SALUTATIONS ==="); 
	utilisateurs.forEach(utilisateur => { 
	console.log(saluerUtilisateur(utilisateur)); 
}); 
console.log("=================="); 
}


// Ajoute cette fonction à la fin de salutations.js 
function ajouterUtilisateur(nom) { 
	Guide clonage  d’un dépôt distant -   DD2web- M. TAIS 
	utilisateurs.push(nom); 
	console.log(`${nom} a été ajouté à la liste !`); 
} 
// Tester la nouvelle fonction 
ajouterUtilisateur("Émilie"); 
saluerTous(); 
// Exécuter 

saluerTous(); 
console.log(`Nombre d'utilisateurs: ${utilisateurs.length}`); 