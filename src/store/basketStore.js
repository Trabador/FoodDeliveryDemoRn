import create from 'zustand';

const changeDishQty = (dishes, title, price, add = true) => {
  let result = [...dishes];
  const isPresent = dishes.filter(dish => dish.title === title);
  if (isPresent.length > 0) {
    result = result.map(dish =>
      dish.title === title
        ? {...dish, qty: add ? dish.qty + 1 : dish.qty - 1}
        : dish,
    );
  } else {
    result = [...dishes, {title, qty: 1, price}];
  }
  console.log(JSON.stringify(result));
  return result;
};

const useBasketStore = create(set => ({
  basket: [],
  addItem: (id, title, price) =>
    set(state => {
      let items = [...state.basket];
      const isPresent = items.filter(item => item.id === id);
      if (isPresent.length > 0) {
        items = items.map(item =>
          item.id === id
            ? {...item, dishes: changeDishQty(item.dishes, title, price)}
            : item,
        );
      } else {
        items = [...items, {id, dishes: [{title, qty: 1, price}]}];
      }

      return {basket: items};
    }),
  removeItem: (id, title, price) =>
    set(state => {
      let items = [...state.basket];
      items = items.map(item =>
        item.id === id
          ? {...item, dishes: changeDishQty(item.dishes, title, price, false)}
          : item,
      );
      return {basket: items};
    }),
}));

const selectRestaurant = (id, state) =>
  state.basket.filter(item => item.id === id);

export const selectQuantity = (id, title, state) => {
  const restaurant = selectRestaurant(id, state);
  if (restaurant.length < 1) return 0;
  const dish = restaurant[0].dishes.filter(dish => dish.title === title);
  if (dish.length < 1) return 0;
  return dish[0].qty;
};

export const selectQuantityTotal = (id, state) => {
  const restaurant = selectRestaurant(id, state);
  if (restaurant.length < 1) return 0;
  return restaurant[0].dishes.reduce((total, dish) => {
    return (total += dish.qty);
  }, 0);
};

export const selectTotal = (id, state) => {
  const restaurant = selectRestaurant(id, state);
  if (restaurant.length < 1) return 0;
  return restaurant[0].dishes
    .reduce((total, dish) => {
      return (total += dish.price * dish.qty);
    }, 0)
    .toFixed(2);
};

export default useBasketStore;
