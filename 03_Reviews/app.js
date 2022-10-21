const reviews = [
  {
    id: 1,
    name: "고용남",
    job: "백수",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "안녕? 나는 매일 놀고, 먹고, 자고, 싸고 하는 고용남이야! 만나서 반가워"
  },
  {
    id: 2,
    name: "김모모",
    job: "바리스타",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "커피는 말이지..."
  },
  {
    id: 3,
    name: "에단",
    job: "작가",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "이번달 책 600권 읽고 책 한 권 집필할거야!"
  },
  {
    id: 4,
    name: "도니돈",
    job: "사진가",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "드디어 내 적성을 찾았어 얘두라 나는 사진작가야"
  }
];


const img = document.getElementById("my-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
      currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
    console.log("hi");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})