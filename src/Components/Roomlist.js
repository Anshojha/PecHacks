import React from 'react';
import RoomCard from './Roomcard';
import image1 from '../assets/newLogo.jpeg';
import image2 from '../assets/newLogo.jpeg';
import image3 from '../assets/newLogo.jpeg';
const RoomList = () => {
  const rooms = [
    {
      id: 1,
      imageUrl: image1,
      description: 'Spacious room with a beautiful view.',
    },
    {
      id: 2,
      imageUrl: image2,
      description: 'Cozy room perfect for couples.',
    },
    {
      id: 3,
      imageUrl: image3,
      description: 'Cozy room perfect for couples.',
    },
    // Add more rooms as needed
  ];

  const handleSeeButtonClick = (roomId) => {
    // Handle what happens when the "See" button is clicked
    console.log(`See button clicked for room ${roomId}`);
  };

  return (
    <div>
      {rooms.map(room => (
        <RoomCard
          key={room.id}
          imageUrl={room.imageUrl}
          description={room.description}
          onClickSee={() => handleSeeButtonClick(room.id)}
        />
      ))}
    </div>
  );
};

export default RoomList;
