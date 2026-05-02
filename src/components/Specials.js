import React from 'react';
import './Specials.css';

function DishCard({ name, price, description, image }) {
  return (
    <article className="dish-card" aria-label={`${name} - ${price}`}>
      <div className="dish-card__image">
        <img src={image} alt={name} className="dish-card__photo" />
      </div>

      <div className="dish-card__info">
        <div className="dish-card__header">
          <h3 className="dish-card__name">{name}</h3>
          <span className="dish-card__price" aria-label={`Price: ${price}`}>{price}</span>
        </div>
        <p className="dish-card__description">{description}</p>
        <button className="dish-card__button" aria-label={`Order ${name} online`}>
          Order a delivery
        </button>
      </div>
    </article>
  );
}

function Specials() {
  const dishes = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.',
      image: '/food/images.jpg',
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: '$5.99',
      description: 'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: '/food/burger.jpg',
    },
    {
      id: 3,
      name: 'Pasta Bake',
      price: '$13.50',
      description: 'Chorizo and mozzarella gnocchi bake — a hearty Italian-inspired dish straight from our kitchen.',
      image: '/food/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    },
  ];

  return (
    <section className="specials" id="menu" aria-labelledby="specials-heading">
      <div className="specials__inner container">

        <div className="specials__header">
          <h2 id="specials-heading" className="specials__title">This week's specials!</h2>
          <button className="specials__menu-button" aria-label="View full online menu">
            Online Menu
          </button>
        </div>

        <div className="specials__grid" role="list" aria-label="Weekly specials">
          {dishes.map((dish) => (
            <div key={dish.id} role="listitem">
              <DishCard
                name={dish.name}
                price={dish.price}
                description={dish.description}
                image={dish.image}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Specials;
