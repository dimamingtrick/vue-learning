import image from "../assets/cart.jpg";

export const animateAddedCartItem = e => {
  const cart = document.getElementById("productCart");

  const item = document.createElement("IMG");
  item.src = image;
  item.className = "addedItem";

  item.style.top = e.pageY + "px";
  item.style.left = e.pageX + "px";

  const app = document.getElementById("app");
  app.appendChild(item);

  function itemCoords(pos) {
    return Number(item.style[pos].replace("px", ""));
  }

  function xSpeed() {
    return (xKatet / hipot) * 3;
  }

  function ySpeed() {
    return (yKatet / hipot) * 3;
  }

  const cartCoords = cart.getBoundingClientRect();

  const cartX = cartCoords.left;
  const cartY = cartCoords.top;
  const xKatet = cartX - itemCoords("left");
  const yKatet = itemCoords("top") - cartY;
  const hipot = Math.pow(Math.pow(yKatet, 2) + Math.pow(xKatet, 2), 1 / 2);

  function animateItem() {
    if (itemCoords("top") >= cartY || itemCoords("left") <= cartX) {
      setTimeout(() => {
        if (itemCoords("top") >= cartY) {
          item.style.top = itemCoords("top") - ySpeed() + "px";
        }
        if (itemCoords("left") <= cartX) {
          item.style.left = itemCoords("left") + xSpeed() + "px";
        }
        animateItem();
      }, 0);
    } else {
      item.remove();
    }
  }
  animateItem();
};
