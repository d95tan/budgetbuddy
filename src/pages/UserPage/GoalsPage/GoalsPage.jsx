import React, { useState } from 'react';
import './GoalsPage.css';

const Modal = ({ isOpen, onClose, onSave, cardData, setCardData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <input
          type="text"
          value={cardData.title}
          onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
        />
        <textarea
          value={cardData.description}
          onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
        />
        <button onClick={() => onSave(cardData)}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default function GoalsPage() {
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', description: 'This is card 1' },
    { id: 2, title: 'Card 2', description: 'This is card 2' },
    // Add more cards here
  ]);
  const [cardData, setCardData] = useState({ id: null, title: '', description: '' });

  const handleClickOpen = (card) => {
    setCardData(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (updatedCard) => {
    setCards(cards.map(card => card.id === updatedCard.id ? updatedCard : card));
    setOpen(false);
  };

  return (
    <>
      <h1>Goals Page</h1>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card" onClick={() => handleClickOpen(card)}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={open}
        onClose={handleClose}
        onSave={handleSave}
        cardData={cardData}
        setCardData={setCardData}
      />
    </>
  );
}