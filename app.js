// "require" indique à node.js d'aller chercher la dépendance "express" dans le dossier "node_modules"
const express = require("express");

// création d'une instance d'une application "express" grâce à la méthode du même nom. Il s'agit du serveur web sur lequel va fonctionner mon "API rest".
const app = express();
const port = 3000;

// Définition du point de terminaison (end point): ".get" est la méthode de la requête, il prend en paramètre deux arguments.
// 1_ le chemin de la requête qui va permettre de traiter ce point de terminaison, (ici c'est un / ), c'e à d la route par défaut, (vide) de mon API rest.
// 2_ Une fonction qui fournit une réponse au client lorsque mon point de terminaison est appelé. Son premier argument "req" permet de récupérer un objet request correspondant à la requête reçue en entrée par mon point de terminaison. "res" correspond à la response, donc l'objet que je dois renvoyer depuis express à mon client.
app.get("/", (req, res) => res.send("Hello, Express !"));

app.get("/api/pokemons/:id/:name", (req, res) => {
  const id = req.params.id
  const name = req.params.name
  res.send(`Vous avez demandé le mokémon N${id} ${name}`);
});

// Je démarre l'API rest sur le port 3000, et j'affiche un message de confirmation dna sle terminal grace à la méthode listen fournie par express.
app.listen(port, () =>
  console.log(
    `Notre application Node est démarée sur : http://localhost:${port}`
  )
);
