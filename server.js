const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

const fs = require('fs');
app.use(cors());
app.use(express.json());

// Définir une route pour obtenir les tâches en fonction du thème
app.get('/datas/:theme', (req, res) => {
  const theme = req.params.theme;
  const filePath = path.join(__dirname, 'src', 'datas', `${theme}`);

  // Lire le fichier JSON correspondant au thème
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erreur lors de la lecture du fichier JSON.' });
    }

    const tasks = JSON.parse(data);
    res.json(tasks);
  });
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});