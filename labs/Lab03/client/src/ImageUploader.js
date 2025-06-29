
import React, { useState } from 'react';

function ImageUploader() {
  const [images, setImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [dogImage, setDogImage] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    for (const file of images) {
      formData.append('images', file);
    }

    await fetch('http://localhost:3001/upload-multiple', {

  method: 'POST',
  body: formData,
});


    alert('Images uploaded!');
  };

  const getRandomImages = async () => {
    const res = await fetch('http://localhost:5000/random-images');
    const data = await res.json();
    setRandomImages(data);
  };

  const fetchDogImage = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    setDogImage(data.message);
  };

  const uploadDogImage = async () => {
    await fetch('http://localhost:5000/upload-dog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: dogImage }),
    });
    alert('Dog image uploaded!');
  };

  return (
    <div className="section">
  <h2>Upload Multiple Images</h2>
  <input type="file" multiple onChange={e => setImages(e.target.files)} />
  <button onClick={handleUpload}>Upload</button>



      <h2>Get Random Images</h2>
      <button onClick={getRandomImages}>Load Images</button>
      <div style={{ display: 'flex', gap: 10 }}>
        {randomImages.map((img, idx) => (
          <img key={idx} src={img} alt="random" height="100" />
        ))}
      </div>

      <h2>Dog Image</h2>
      <button onClick={fetchDogImage}>Fetch Dog</button>
      {dogImage && (
        <div>
          <img src={dogImage} alt="dog" height="150" />
          <br />
          <button onClick={uploadDogImage}>Upload Dog Image</button>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
