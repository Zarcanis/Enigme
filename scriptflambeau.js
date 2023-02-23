// JavaScript
const images = [
  "pando1.png",
  "pando2.png",
  "pando3.png",
  "pando4.png",
  "pando5.png",
  "pando6.png",
  "pando7.png",
  // ...ajouter des chemins d'accès pour toutes les images du pool
];

const randomIndex = Math.floor(Math.random() * images.length); // Obtenir un index aléatoire
const randomImage = images[randomIndex]; // Obtenir le chemin d'accès de l'image aléatoire

const imageElement = document.getElementById("random-image");
imageElement.setAttribute("src", randomImage); // Mettre à jour l'attribut "src" de l'élément img avec l'image aléatoire
