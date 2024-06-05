import React, { useState, useEffect, useCallback } from 'react';

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000);

    return () => clearInterval(intervalId);
  }, [goToNext]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  return (
    <div style={{ position: 'relative', maxWidth: '20%', maxHeight: '400px', margin: '0 auto', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '80%', overflow: 'hidden' }}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <button onClick={goToPrev} style={styles.prevButton}>◀</button>
        <button onClick={goToNext} style={styles.nextButton}>▶</button>
      </div>
    </div>
  );
};

const styles = {
  prevButton: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '24px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s',
  },
  nextButton: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '24px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s',
  },
};

export default SlideShow;
