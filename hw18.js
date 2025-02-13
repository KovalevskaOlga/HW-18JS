// // task 1
const list1 = document.querySelectorAll(".li-item");
const listLength = list1.length;
console.log(`У списку ${listLength} категорії`);

list1.forEach((category) => {
  const title = category.firstElementChild;
  const liItem = category.querySelectorAll("li");
  console.log(`Категорія: ${title.textContent}`);
  console.log(`Кількість елементів: ${liItem.length}`);
});
// // task 2
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const list = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const createItems = document.createElement("li");
  createItems.textContent = ingredient;
  list.append(createItems);
});
console.log(list);

// task 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesElem = images
  .map(
    (image) =>
      ` <li class="item-img">
        <img src="${image.url}" alt="${image.alt}" class="photo">
      </li>`
  )
  .join("");
const imageList = document.querySelector("#gallery");
imageList.insertAdjacentHTML("beforeend", imagesElem);

// task 4
const buttonDecrement = document.querySelector("[data-action=decrement]");
const spanElem = document.querySelector("#value");
const buttonIncrement = document.querySelector("[data-action=increment]");
let result = 0;

buttonIncrement.addEventListener("click", (event) => {
  return (spanElem.textContent = result += 1);
});

buttonDecrement.addEventListener("click", (event) => {
  return (spanElem.textContent = result -= 1);
});
