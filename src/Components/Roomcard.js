import React from 'react';

const RoomCard = ({ imageUrl, description, onClickSee }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt="Room" style={styles.image} />
      <div style={styles.content}>
        <p>{description}</p>
        <button style={styles.seeButton} onClick={onClickSee}>See</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    marginLeft:'10%',
    width: '80%',
    height:'30%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    

  },
  image: {
    width: '20%',
    height: '15%',
    objectFit: 'cover',
  },
  content: {
    padding: '10px',
  },
  seeButton: {
    padding: '8px 25px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    float: 'right',
  },
};

export default RoomCard;
