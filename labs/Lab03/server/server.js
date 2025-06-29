
const express = require('express');
const app = express();        
const cors = require('cors'); 
app.use(cors());


const multer = require('multer');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const PORT = 3001;
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

// Upload multiple images
app.post('/upload-multiple', upload.array('images', 10), (req, res) => {
  res.json({ files: req.files });
});

// Get up to 3 random images
app.get('/random-images', (req, res) => {
  fs.readdir('uploads', (err, files) => {
    if (err) return res.status(500).send('Error reading uploads');
    const randomImages = _.sampleSize(files, 3);
    res.json(randomImages.map(name => `http://localhost:${PORT}/uploads/${name}`));
  });
});

// Upload random dog image
app.post('/upload-dog', async (req, res) => {
  const { url } = req.body;
  const fileName = `dog-${Date.now()}.jpg`;

  const file = fs.createWriteStream(`uploads/${fileName}`);
  const https = require('https');

  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      res.json({ uploaded: fileName });
    });
  });
});
app.get('/test', (req, res) => {
  res.send('Express server is working!');
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
