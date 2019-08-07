import image from "../assets/cart.png";

function removeItem({ animationName, target: item }) {
  if (animationName === "removeItemAnimation") item.remove();
}

export const animateAddedCartItem = e => {
  return new Promise(resolve => {
    const cart = document.getElementById("productCart");

    const item = document.createElement("IMG");
    item.src = image;
    item.className = "addedItem";

    item.style.top = e.pageY + "px";
    item.style.left = e.pageX + "px";

    const app = document.getElementById("app");
    app.appendChild(item);

    const cartCoords = cart.getBoundingClientRect();

    const cartX = cartCoords.left;
    const cartY = cartCoords.top;

    function itemCoords(pos) {
      return Number(item.style[pos].replace("px", ""));
    }

    const xKatet = cartX - itemCoords("left");
    const yKatet = itemCoords("top") - cartY;
    const hipot = Math.pow(Math.pow(yKatet, 2) + Math.pow(xKatet, 2), 1 / 2);

    function xSpeed() {
      return (xKatet / hipot) * 7;
    }

    function ySpeed() {
      return (yKatet / hipot) * 7;
    }

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
        });
      } else {
        item.classList.add("removeItem");
        item.addEventListener("animationend", removeItem);
        resolve(true);
      }
    }
    animateItem();
  });
};
