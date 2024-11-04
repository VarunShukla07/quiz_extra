const questions = [
  {
    question: "Sustainable harvest of resources falls under the category of:",
    answeers: [
      { text: "conservation", correct: true },
      { text: "preservation", correct: false },
      { text: "environmentalism", correct: false },
      { text: "none of the above", correct: false }
    ]
  },
  {
    question: "The regular, seasonal movement of animals, often along fixed routes is called",
    answeers: [
      { text: "translocation", correct: false },
      { text: "migration", correct: true },
      { text: "dispersal", correct: false },
      { text: "drifting", correct: false }
    ]
  },
  {
    question: "The systematic approach to Geography was developed by:",
    answeers: [
      { text: "Alexander von Humboldt", correct: true },
      { text: "Karl Ritter", correct: false },
      { text: "Rene Descartes", correct: false },
      { text: "Eratosthenes", correct: false }
    ]
  },
  {
    question: "The regional approach to Geography was developed by:",
    answeers: [
      { text: "Alexander von Humboldt", correct: false },
      { text: "Karl Ritter", correct: true },
      { text: "Rene Descartes", correct: false },
      { text: "Eratosthenes", correct: false }
    ]
  },
  {
    question: "The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.",
    answeers: [
      { text: "Liebig's law of the minimum", correct: false },
      { text: "Liebig's law of the maximum", correct: false },
      { text: "Shelford's law of tolerance", correct: true },
      { text: "Shelford's law of intolerance", correct: false }
    ]
  },
  {
    question: "Science of relationships between organisms and their environments is the definition of:",
    answeers: [
      { text: "conservation", correct: false },
      { text: "preservation", correct: false },
      { text: "environmentalism", correct: false },
      { text: "ecology", correct: true }
    ]
  },
  {
    question: "Mount Vesuvius is an example of",
    answeers: [
      { text: "Shield volcano", correct: false },
      { text: "Composite volcano", correct: true },
      { text: "Caldera", correct: false },
      { text: "Flood basalt province", correct: false }
    ]
  },
  {
    question: "Moho discontinuity occurs between",
    answeers: [
      { text: "Crust and mantle", correct: true },
      { text: "Mantle and outer core", correct: false },
      { text: "Outer core and inner core", correct: false },
      { text: "Oceanic crust and continental crust", correct: false }
    ]
  },
  {
    question: "Deformation events (e.g. folds, faults, igneous intrusions) that cut across rocks are younger than the rocks themselves. This is known as",
    answeers: [
      { text: "Principle of fossil succession", correct: false },
      { text: "Principle of original horizontality", correct: false },
      { text: "Principle of superposition", correct: false },
      { text: "Principle of cross-cutting relationships", correct: true }
    ]
  },
  {
    question: "Hawaiian volcanoes are an example of",
    answeers: [
      { text: "Shield volcano", correct: true },
      { text: "Stratovolcano", correct: false },
      { text: "Caldera", correct: false },
      { text: "Flood basalt province", correct: false }
    ]
  },
  {
    question: "A naturally occurring inorganic solid, with a definite chemical composition, and an ordered atomic arrangement is the definition of",
    answeers: [
      { text: "rock", correct: false },
      { text: "mineral", correct: true },
      { text: "element", correct: false },
      { text: "compound", correct: false }
    ]
  },
  {
    question: "Stratified and assorted deposits comprised of fine matter with rounded edges is the definition of",
    answeers: [
      { text: "glacial till", correct: false },
      { text: "outwash deposit", correct: true },
      { text: "esker", correct: false },
      { text: "drumlin", correct: false }
    ]
  },
  {
    question: "Sandstone is an example of",
    answeers: [
      { text: "siliciclastic rock", correct: true },
      { text: "carbonate rock", correct: false },
      { text: "evaporite rock", correct: false },
      { text: "phosphatic rock", correct: false }
    ]
  },
  {
    question: "Deep, long and wide troughs or basins with very steep concave to vertically dropping high walls as its head and sides is the definition of",
    answeers: [
      { text: "cirque", correct: true },
      { text: "arete", correct: false },
      { text: "horn", correct: false },
      { text: "hanging valley", correct: false }
    ]
  },
  {
    question: "The points where three or more cirques meet is the definition of",
    answeers: [
      { text: "cirque", correct: false },
      { text: "arete", correct: false },
      { text: "horn", correct: true },
      { text: "hanging valley", correct: false }
    ]
  },
  {
    question: "Which of these is correct?",
    answeers: [
      { text: "Intrusive rocks: formed outside crust, often fine grained", correct: false },
      { text: "Intrusive rocks: formed inside crust, often coarse grained", correct: true },
      { text: "Extrusive rocks: formed outside crust, often coarse grained", correct: false },
      { text: "Extrusive rocks: formed inside crust, often fine grained", correct: false }
    ]
  },
  {
    question: "Sinuous ridge formed by coarse materials deposited by streams flowing below the glaciers is the definition of",
    answeers: [
      { text: "glacial till", correct: false },
      { text: "outwash deposit", correct: false },
      { text: "esker", correct: true },
      { text: "drumlin", correct: false }
    ]
  },
  {
    question: "Which of these is correct?",
    answeers: [
      { text: "Intrusive rocks: formed outside crust, often coarse grained", correct: false },
      { text: "Intrusive rocks: formed inside crust, often fine grained", correct: false },
      { text: "Extrusive rocks: formed outside crust, often fine grained", correct: true },
      { text: "Extrusive rocks: formed inside crust, often coarse grained", correct: false }
    ]
  },
  {
    question: "Which of these air masses is generally cool and moist?",
    answeers: [
      { text: "CP", correct: false },
      { text: "CT", correct: false },
      { text: "mP", correct: true },
      { text: "mT", correct: false }
    ]
  },
  {
    question: "Which of these create the best suited conditions for atmosphere on a planet?",
    answeers: [
      { text: "high gravity, high temperature", correct: false },
      { text: "low gravity, high temperature", correct: false },
      { text: "low gravity, low temperature", correct: false },
      { text: "high gravity, low temperature", correct: true }
    ]
  },
  {
    question: "Which of these air masses is generally cold and dry?",
    answeers: [
      { text: "CP", correct: true },
      { text: "CT", correct: false },
      { text: "mP", correct: false },
      { text: "mT", correct: false }
    ]
  },
  {
    question: "The ISS orbits in which layer?",
    answeers: [
      { text: "Troposphere", correct: false },
      { text: "Stratosphere", correct: false },
      { text: "Mesosphere", correct: false },
      { text: "Thermosphere", correct: true }
    ]
  },
  {
    question: "Which of these is home to the ozone layer?",
    answeers: [
      { text: "Troposphere", correct: false },
      { text: "Stratosphere", correct: true },
      { text: "Mesosphere", correct: false },
      { text: "Thermosphere", correct: false }
    ]
  },
  {
    question: "Most meteors burn in which layer?",
    answeers: [
      { text: "Troposphere", correct: false },
      { text: "Stratosphere", correct: false },
      { text: "Mesosphere", correct: true },
      { text: "Thermosphere", correct: false }
    ]
  },
  {
    question: "Most of the weather phenomena occur in",
    answeers: [
      { text: "Troposphere", correct: true },
      { text: "Stratosphere", correct: false },
      { text: "Mesosphere", correct: false },
      { text: "Thermosphere", correct: false }
    ]
  },
  {
    question: "Which of these air masses is generally warm and moist?",
    answeers: [
      { text: "CP", correct: false },
      { text: "CT", correct: false },
      { text: "mP", correct: false },
      { text: "mT", correct: true }
    ]
  },
  {
    question: "In the sea, a layer where the temperature decreases rapidly from the mixed upper layer to the cold deeper layer is called",
    answeers: [
      { text: "isopycnal", correct: false },
      { text: "thermophil", correct: false },
      { text: "thermohaline", correct: false },
      { text: "thermocline", correct: true }
    ]
  },
  {
    question: "Continental shelf has a gradient of",
    answeers: [
      { text: "0-1 degree", correct: true },
      { text: "1-2 degree", correct: false },
      { text: "2-5 degree", correct: false },
      { text: "5-10 degree", correct: false }
    ]
  },
  {
    question: "In Koeppen classification, which is snow climate?",
    answeers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true }
    ]
  },
  {
    question: "In Koeppen classification, which is warm temperate climate?",
    answeers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false }
    ]
  },
  {
    question: "In Koeppen classification, which is hot arid temperature?",
    answeers: [
      { text: "h", correct: true },
      { text: "k", correct: false },
      { text: "a", correct: false },
      { text: "b", correct: false }
    ]
  },
  {
    question: "In Koeppen classification, which is fully humid precipitation?",
    answeers: [
      { text: "W", correct: false },
      { text: "S", correct: false },
      { text: "f", correct: true },
      { text: "s", correct: false }
    ]
  },
  {
    question: "In Koeppen classification, which is extremely continental temperature?",
    answeers: [
      { text: "C", correct: false },
      { text: "d", correct: true },
      { text: "F", correct: false },
      { text: "T", correct: false }
    ]
  },
  {
    question: "For more biodiversity, the level of disturbance should be",
    answeers: [
      { text: "less", correct: false },
      { text: "intermediate", correct: true },
      { text: "more", correct: false },
      { text: "none of these", correct: false }
    ]
  },
  {
    question: "Cryofracturing is an example of",
    answeers: [
      { text: "chemical weathering", correct: false },
      { text: "physical weathering", correct: true },
      { text: "biological weathering", correct: false },
      { text: "none of the above", correct: false }
    ]
  },
  {
    question: "Bangar is a type of",
    answeers: [
      { text: "black cotton soil", correct: false },
      { text: "alluvial soil", correct: true },
      { text: "saline soil", correct: false },
      { text: "red and yellow soil", correct: false }
    ]
  },
  {
    question: "Carbonation is an example of",
    answeers: [
      { text: "chemical weathering", correct: true },
      { text: "physical weathering", correct: false },
      { text: "biological weathering", correct: false },
      { text: "none of the above", correct: false }
    ]
  },
  {
    question: "Soil formation is dependent upon",
    answeers: [
      { text: "vegetation", correct: false },
      { text: "time", correct: false },
      { text: "climate", correct: false },
      { text: "all of the above", correct: true }
    ]
  },
  {
    question: "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
    answeers: [
      { text: "climatic climax", correct: false },
      { text: "edaphic climax", correct: false },
      { text: "disclimax", correct: true },
      { text: "catastrophic climax", correct: false }
    ]
  },
  {
    question: "The diversity that exists within an ecosystem is",
    answeers: [
      { text: "alpha (a) biodiversity", correct: true },
      { text: "beta (β) biodiversity", correct: false },
      { text: "gamma (γ) biodiversity", correct: false },
      { text: "delta (δ) biodiversity", correct: false }
    ]
  },
  {
    question: "Which of these is a stochastic factor?",
    answeers: [
      { text: "birth rate", correct: false },
      { text: "death rate", correct: false },
      { text: "population structure", correct: false },
      { text: "environmental fluctuation", correct: true }
    ]
  },
  {
    question: "Which of these correctly represents the process of habitat fragmentation and loss?",
    answeers: [
      { text: "Original forest Dissection Perforation Fragmentation Attrition", correct: true },
      { text: "Original forest - Dissection Attrition Fragmentation Perforation", correct: false },
      { text: "Original forest Dissection Perforation Attrition Fragmentation", correct: false },
      { text: "Original forest Dissection Fragmentation Perforation Attrition", correct: false }
    ]
  },
  {
    question: "Nutrient cycling is an example of",
    answeers: [
      { text: "provisioning service", correct: false },
      { text: "regulating service", correct: false },
      { text: "supporting service", correct: true },
      { text: "cultural service", correct: false }
    ]
  },
  {
    question: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
    answeers: [
      { text: "least concern species", correct: false },
      { text: "keystone species", correct: true },
      { text: "flagship species", correct: false },
      { text: "extinct species", correct: false }
    ]
  },
  {
    question: "The acronym HIPPO does not include",
    answeers: [
      { text: "habitat loss", correct: false },
      { text: "invasive species", correct: false },
      { text: "pollination", correct: true },
      { text: "pollution", correct: false }
    ]
  },
  {
    question: "Low concentration ores come in the category of",
    answeers: [
      { text: "potential resources", correct: false },
      { text: "actual resources", correct: false },
      { text: "reserve resources", correct: true },
      { text: "stock resources", correct: false }
    ]
  },
  {
    question: "Which of these is the largest source of nitrogen oxides in the atmosphere?",
    answeers: [
      { "text": "electricity generation", "correct": false },
      { "text": "mobile sources", "correct": true },
      { "text": "industrial processes", "correct": false },
      { "text": "waste disposal", "correct": false }
    ]
  },
  {
    question: "Mhow can best be categorised as",
    answeers: [
      { "text": "mining town", "correct": false },
      { "text": "garrison town", "correct": true },
      { "text": "educational town", "correct": false },
      { "text": "religious town", "correct": false }
    ]
  },
  {
    question: "Which of these is/are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
    answeers: [
      { "text": "land bridges", "correct": false },
      { "text": "canopy bridges", "correct": false },
      { "text": "glider poles", "correct": false },
      { "text": "all of these", "correct": true }
    ]
  },
  {
    question: "The ability to produce a good at a lower opportunity cost than another producer is a definition of",
    answeers: [
      { "text": "real advantage", "correct": false },
      { "text": "monetary advantage", "correct": false },
      { "text": "comparative advantage", "correct": true },
      { "text": "opportunity advantage", "correct": false }
    ]
  },
  {
    question: "Which of these uses expressed willingness to pay?",
    answeers: [
      { "text": "market price method", "correct": false },
      { "text": "replacement cost method", "correct": false },
      { "text": "damage cost avoided method", "correct": false },
      { "text": "contingent valuation method", "correct": true }
    ]
  },
  {
    question: "Bathymetric LiDAR uses",
    answeers: [
      { "text": "far infrared light", "correct": false },
      { "text": "near infrared light", "correct": false },
      { "text": "orange light", "correct": false },
      { "text": "green light", "correct": true }
    ]
  },
  {
    question: "Which of these uses revealed willingness to pay?",
    answeers: [
      { "text": "market price method", "correct": true },
      { "text": "replacement cost method", "correct": false },
      { "text": "damage cost avoided method", "correct": false },
      { "text": "contingent valuation method", "correct": false }
    ]
  }
];

const quesElement = document.getElementById("question");
const ansBtn = document.getElementById("ans-btn");
const nextBtn = document.getElementById("next-btn");

let crntQuesIdx = 0;
let score = 0;

function startQuiz() {
  crntQuesIdx = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQues();
}

function showQues() {
  resetState();
  let crntQues = questions[crntQuesIdx];
  let quesNo = crntQuesIdx + 1;
  quesElement.innerHTML = quesNo + ". " + crntQues.question;

  crntQues.answeers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansBtn.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


function resetState() {
  nextBtn.style.display = "none";
  while (ansBtn.firstChild) {
    ansBtn.removeChild(ansBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  let isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  Array.from(ansBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  quesElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again!";
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  crntQuesIdx++;
  if (crntQuesIdx < questions.length) {
    showQues();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (crntQuesIdx < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
