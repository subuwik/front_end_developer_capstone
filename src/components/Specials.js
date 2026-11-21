import React, { useState } from 'react';
import './Specials.css';

const dishes = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description: 'Crispy lettuce, peppers, olives and Chicago-style feta cheese with olive oil dressing.',
    image: '/food/images.jpg',
  },
  {
    id: 2,
    name: 'Mediterranean Burger',
    price: '$14.50',
    description: 'Grilled beef patty with melted cheese, fresh vegetables and house sauce on a toasted bun.',
    image: '/food/burger.jpg',
  },
  {
    id: 3,
    name: 'Pasta Bake',
    price: '$13.50',
    description: 'Chorizo and mozzarella gnocchi bake, baked fresh in our kitchen.',
    image: '/food/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
];

function DishCard({ name, price, description, image, onOrder }) {
  return (
    <article className="dish-card">
      <div className="dish-card__image">
        <img src={image} alt={name} className="dish-card__photo" />
      </div>

      <div className="dish-card__info">
        <div className="dish-card__header">
          <h3 className="dish-card__name">{name}</h3>
          <span className="dish-card__price">{price}</span>
        </div>
        <p className="dish-card__description">{description}</p>
        <button
          type="button"
          className="dish-card__button"
          onClick={() => onOrder(name)}
        >
          Order a delivery
        </button>
      </div>
    </article>
  );
}

function Specials() {
  const [notice, setNotice] = useState('');

  const handleOrder = (dishName) => {
    setNotice(`Online delivery for "${dishName}" is coming soon. You can reserve a table below!`);
  };

  return (
    <section className="specials" id="menu" aria-labelledby="specials-heading">
      <div className="specials__inner container">
        <div className="specials__header">
          <h2 id="specials-heading" className="specials__title">This week's specials!</h2>
          <a href="#reservations" className="specials__menu-button">
            Book a Table
          </a>
        </div>

        {notice && (
          <p role="status" style={{ marginBottom: '20px', color: '#495E57', fontWeight: 500 }}>
            {notice}
          </p>
        )}

        <div className="specials__grid">
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              name={dish.name}
              price={dish.price}
              description={dish.description}
              image={dish.image}
              onOrder={handleOrder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
