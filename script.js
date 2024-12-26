const imageDisplay = document.querySelector(".img");
const msgDisplay = document.querySelector(".msg-div");
const nameDisplay = document.querySelector(".member-name");

console.log(imageDisplay);
let cat11 = "Cat11.jpg";
let cat12 = "Cat12.jpg";
let cat13 = "Cat14.jpg";

let dataArray = [
  {
    img: "",
    msg: `Consectetur adipisicing elit. Commodi,
        veniam, deleniti delectus cumque, recusandae hic saepe possimus laborum
        praesentium officiis distinctio!`,
    name: "ABC",
  },
  {
    img: "",
    msg: `Celeniti delectus cumque, recusandaeLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        veniam, deleniti delectus cumque, recusandae hic saepe possimus laborum
        praesentium officiis distinctio!`,
    name: "OneTwoThree",
  },
  {
    img: "",
    msg: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        veniam, deleniti delectus cumque, recusandae hic saepe possimus laborum
        praesentium officiis distinctio!`,
    name: "XYZ",
  },
];

let i = 0;
let imgCount = 11;
displayTestimonial();

function displayTestimonial() {
  let { img, msg, name } = dataArray[i];

  imageDisplay.setAttribute("src", `cat${imgCount}.jpg`);
  msgDisplay.innerHTML = msg;
  nameDisplay.innerHTML = name;
  i++;
  imgCount++;
  if (i === dataArray.length) {
    i = 0;
  }
  if (imgCount === 14) {
    imgCount = 11;
  }

  setInterval(() => {
    displayTestimonial();
  }, 3000);
}
