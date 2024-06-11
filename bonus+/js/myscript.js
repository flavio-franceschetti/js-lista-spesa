// creo il mio array con la spesa
const shopList = [
  "Pane Magico",
  "Latte Arcobaleno",
  "Formaggio di Luna",
  "Biscotti Alati",
  "Frutta di Cristallo",
  "Zucchero delle Fate",
  "Caffè Galattico",
  "Uova di Drago",
];
// recuper il mio contenitore dove mettere gli elemtni in questo caso una lista
let list = document.getElementById("shopping-list");
// dichiaro la variabile che mi serve per il cilo while
let i = 0;
//creo il ciclo while
while (i < shopList.length) {
  // creo l'elemento da inserire nella lista
  let listItem = `<li>${shopList[i]}</li>`;
  // lo inserisco nella lista html
  list.innerHTML += listItem;
  // aggiungo 1 alla variabile e ripeto il ciclo
  i++;
}
