import create from 'zustand';

const changeDishQty = (dishes, dishData, add = true) => {
  let result = [...dishes];
  const isPresent = dishes.filter(dish => dish.title === dishData.title);
  if (isPresent.length > 0) {
    result = result.map(dish =>
      dish.title === dishData.title
        ? {...dish, qty: add ? dish.qty + 1 : dish.qty - 1}
        : dish,
    );
  } else {
    result = [...dishes, {...dishData, qty: 1}];
  }
  return result;
};

const useBasketStore = create(set => ({
  basket: [],
  addItem: (id, name, dishData) =>
    set(state => {
      let items = [...state.basket];
      const isPresent = items.filter(item => item.id === id);
      if (isPresent.length > 0) {
        items = items.map(item =>
          item.id === id
            ? {
                ...item,
                dishes: changeDishQty(item.dishes, dishData),
              }
            : item,
        );
      } else {
        items = [...items, {id, name, dishes: [{...dishData, qty: 1}]}];
      }

      return {basket: items};
    }),
  removeItem: (id, dishData) =>
    set(state => {
      let items = [...state.basket];
      items = items.map(item =>
        item.id === id
          ? {...item, dishes: changeDishQty(item.dishes, dishData, 0, false)}
          : item,
      );
      return {basket: items};
    }),
  removeRow: (id, title) =>
    set(state => {
      let items = [...state.basket];
      const index = items.findIndex(item => item.id === id);

      if (index >= 0) {
        const newDishes = items[index].dishes.filter(
          dish => dish.title !== title,
        );
        items[index].dishes = newDishes;
      }
      return {basket: items};
    }),
  removeOrder: id =>
    set(state => {
      let items = [...state.basket];
      items = items.filter(item => item.id !== id);
      return {basket: items};
    }),
}));

export const selectRestaurant = (id, state) =>
  state.basket.filter(item => item.id === id);

export const selectQuantity = (id, title, state) => {
  const restaurant = selectRestaurant(id, state);
  if (restaurant.length < 1) return 0;
  const dish = restaurant[0].dishes.filter(dish => dish.title === title);
  if (dish.length < 1) return 0;
  return dish[0].qty;
};

export const selectQuantityTotal = (id, state) => {
  if (state.basket.length < 0) return 0;
  const restaurant = selectRestaurant(id, state)[0];
  if (!restaurant) return 0;
  if (restaurant.dishes.length === 0) return 0;
  return restaurant.dishes.reduce(
    (totalQty, dish) => (totalQty += dish.qty),
    0,
  );
};

export const selectTotal = (id, state) => {
  if (state.basket.length < 0) return 0;
  const restaurant = selectRestaurant(id, state)[0];
  if (!restaurant) return parseFloat(0).toFixed(2);
  if (restaurant.dishes.length === 0) return parseFloat(0).toFixed(2);
  return parseFloat(
    restaurant.dishes
      .reduce((totalAmt, dish) => (totalAmt += dish.qty * dish.price), 0)
      .toFixed(2),
  );
};

export default useBasketStore;
