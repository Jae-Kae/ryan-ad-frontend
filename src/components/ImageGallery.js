import React, { useState } from 'react'

const ImageGallery = () => {
  const [images, setImages] = useState([])

  // Handle file upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files)

    const newImages = files.map((file) => {
      return {
        id: URL.createObjectURL(file), // Generate a temporary URL for preview
        name: file.name,
      }
    })

    setImages((prevImages) => [...prevImages, ...newImages])
  }

  const handleRemoveImage = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id))
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Image Gallery</h2>

      {/* Upload Section */}
      <input
        type='file'
        multiple
        accept='image/*'
        onChange={handleImageUpload}
        style={{ marginBottom: '20px' }}
      />

      {/* Gallery */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '10px',
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            style={{
              position: 'relative',
              border: '1px solid #ccc',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <img
              src={image.id}
              alt={image.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <button
              onClick={() => handleRemoveImage(image.id)}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                padding: '5px',
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
