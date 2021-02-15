export const cartCount = (props) => {
  let sum = 0;
  props.cart.map((item) => {
    return (sum += item.quantity);
  });
  return sum;
};
