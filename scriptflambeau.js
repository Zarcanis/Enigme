// JavaScript
const images = [
  "Pando1.png",
  "Pando2.png",
  "Pando3.png",
  "Pando4.png",
  "Pando5.png",
 
  // ...ajouter des chemins d'accès pour toutes les images du pool
];

const randomIndex = Math.floor(Math.random() * images.length); // Obtenir un index aléatoire
const randomImage = images[randomIndex]; // Obtenir le chemin d'accès de l'image aléatoire

const imageElement = document.getElementById("random-image");
imageElement.setAttribute("src", randomImage); // Mettre à jour l'attribut "src" de l'élément img avec l'image aléatoire
