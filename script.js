let noCount = 0;
let yesSize = 18; // saiz font asal butang YES

const phrases = [
  "Wait... are you sure? 🥺",
  "nah that's not right... 😭",
  "try again 🥺",
  "be serious... 💔",
  "okay now you're just playing...",
  "okay last chance..."
];

function handleNoClick() {
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
  const question = document.getElementById("question");

  // Tukar teks soalan
  if (noCount < phrases.length) {
    question.innerText = phrases[noCount];
  } else {
    question.innerText = phrases[phrases.length - 1];
  }

  // Besarkan butang YES
  yesSize += 25;
  yesBtn.style.fontSize = yesSize + "px";
  yesBtn.style.padding = (12 + noCount * 5) + "px " + (25 + noCount * 10) + "px";

  noCount++;
}

function acceptProposal() {
  document.getElementById("proposal-screen").classList.add("hidden");
  document.getElementById("gift-screen").classList.remove("hidden");
}

function showSection(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}