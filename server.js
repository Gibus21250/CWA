const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 25565;

const fs = require('fs');
app.use(cors());
app.use(express.json());

//Charger
app.get('/datas/:theme', (req, res) => {
  const theme = req.params.theme;
  const filePath = path.join(__dirname, 'src', 'datas', `${theme}`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erreur lors de la lecture du fichier JSON.' });
    }

    const tasks = JSON.parse(data);
    res.json(tasks);
  });
});

//Sauvegarder
app.post('/datas/:theme', (req, res) => {
  const theme = req.params.theme;
  const filePath = path.join(__dirname, 'src', 'datas', `${theme}`);

  fs.writeFileSync(filePath, JSON.stringify(req.body), 'utf8');
  res.status(200).json({ message: 'Données mises à jour avec succès.' });
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});