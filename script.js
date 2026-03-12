function showTab(tabId) {
  let tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.style.display = "none";
  });

  document.getElementById(tabId).style.display = "block";
}

showTab("home");

function analyzeText() {
  let text = document.getElementById("inputText").value.toLowerCase();

  let keywords = [
    "war",
    "attack",
    "terror",
    "bomb",
    "fake",
    "propaganda",
    "conflict",
  ];

  let score = 0;

  keywords.forEach((word) => {
    if (text.includes(word)) {
      score++;
    }
  });

  if (score >= 2) {
    document.getElementById("result").innerText =
      "⚠ HIGH RISK: Possible Malign AI Content";
  } else if (score == 1) {
    document.getElementById("result").innerText = "⚠ MEDIUM RISK";
  } else {
    document.getElementById("result").innerText = "✅ LOW RISK";
  }
}

function submitFeedback() {
  alert("Thank you for helping improve national security!");
}

function submitReport() {
  let url = document.getElementById("reportURL").value;

  let desc = document.getElementById("reportDesc").value;

  let list = document.getElementById("reportList");

  let item = document.createElement("li");

  item.innerText = url + " - " + desc + " (Status: Under Review)";

  list.appendChild(item);

  alert("Report submitted successfully");
}

/* LOAD DASHBOARD */

window.onload = function () {
  createChart();
  createWordCloud();
};

/* CHART */

function createChart() {
  let ctx = document.getElementById("threatChart");

  new Chart(ctx, {
    type: "bar",

    data: {
      labels: ["Fake News", "Propaganda", "AI Bots", "Deepfakes"],

      datasets: [
        {
          label: "Detected Threats",

          data: [120, 90, 60, 30],
        },
      ],
    },
  });
}

/* WORD CLOUD */

function createWordCloud() {
  let element = document.getElementById("wordcloud");

  let words = [
    ["war", 40],
    ["fake news", 35],
    ["propaganda", 30],
    ["attack", 25],
    ["ai bot", 20],
    ["misinformation", 45],
    ["deepfake", 28],
    ["security", 22],
  ];

  WordCloud(element, {
    list: words,
    gridSize: 8,
    weightFactor: 10,
  });
}
