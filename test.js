// test.js - Pour tester toutes les fonctions 
console.log("=== TESTS COMPLETS ==="); 
// Tester la calculatrice 
Guide clonage  d’un dépôt distant -   DD2web- M. TAIS 
const calc = require('./calculatrice.js'); 
console.log("Test calculatrice:"); 
console.log("8 + 2 =", calc.addition(8, 2)); 
console.log("8 - 2 =", calc.soustraction(8, 2)); 
// Tester les salutations 
const salut = require('./salutations.js'); 
salut.saluerTous(); 

