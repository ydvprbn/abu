// Problem data
const problems = [
  {
    title: "Morning Sickness",
    why: "Caused by hormonal changes, especially high hCG levels.",
    whatToDo: "Eat small frequent meals, stay hydrated, get rest, try ginger or peppermint tea.",
    whenToSee: "If you can't keep any food down for more than a few hours.",
  },
  {
    title: "Back Pain",
    why: "Weight gain and hormonal changes affect posture and spinal alignment.",
    whatToDo: "Maintain good posture, use support pillows, do prenatal yoga, apply warm compress.",
    whenToSee: "If pain is severe or accompanied by other symptoms.",
  },
  {
    title: "Fatigue",
    why: "Increased progesterone and physical demands on your body.",
    whatToDo: "Get adequate rest (8-10 hours), eat balanced meals, stay hydrated, gentle exercise.",
    whenToSee: "If fatigue is extreme and accompanied by shortness of breath.",
  },
  {
    title: "Mood Swings",
    why: "Hormonal fluctuations affect neurotransmitters in the brain.",
    whatToDo: "Practice stress management, connect with loved ones, eat healthy, meditation.",
    whenToSee: "If feelings of depression or anxiety persist for more than 2 weeks.",
  },
  {
    title: "Swelling of Feet",
    why: "Water retention and increased blood volume during pregnancy.",
    whatToDo: "Elevate feet frequently, wear comfortable shoes, reduce sodium, stay hydrated.",
    whenToSee: "If sudden severe swelling occurs or accompanied by vision changes.",
  },
  {
    title: "Headache",
    why: "Hormonal changes, dehydration, or tension.",
    whatToDo: "Rest in a dark quiet room, apply cold compress, stay hydrated, prenatal massage.",
    whenToSee: "If headaches are severe, frequent, or accompanied by vision changes.",
  },
  {
    title: "Heartburn",
    why: "Hormones relax the esophageal sphincter; baby presses on stomach.",
    whatToDo: "Eat small meals, avoid spicy food, sleep with head elevated, milk-based antacids.",
    whenToSee: "If severe pain or difficulty swallowing occurs.",
  },
  {
    title: "Sleep Difficulty",
    why: "Discomfort, hormonal changes, and anxiety about pregnancy.",
    whatToDo: "Use pregnancy pillow, maintain regular sleep schedule, avoid caffeine, relaxation.",
    whenToSee: "If insomnia severely affects your daily functioning.",
  },
  {
    title: "Food Cravings/Aversions",
    why: "Hormonal changes affect taste and smell preferences.",
    whatToDo: "Eat healthy alternatives to cravings, listen to your body's needs.",
    whenToSee: "If cravings for non-food items (pica) develop.",
  },
  {
    title: "Low Energy",
    why: "Increased physical demands and hormonal changes.",
    whatToDo: "Eat iron-rich foods, take prenatal vitamins, exercise gently, rest adequately.",
    whenToSee: "If energy levels severely impact daily activities.",
  },
]

// Month data
const monthData = {
  1: [
    {
      month: "Month 1",
      trimester: "1",
      growth: "Baby is as small as a grain of rice",
      feelings: "You might feel tired, nauseous, or notice mood swings",
      symptoms: "Morning sickness, breast tenderness, fatigue",
      diet: "Take prenatal vitamins, stay hydrated, eat small frequent meals",
      tests: "First prenatal visit, blood tests, ultrasound",
      exercises: "Walking, gentle stretching, prenatal yoga",
      avoid: "Alcohol, smoking, raw foods, high-mercury fish",
      checklist: "Schedule prenatal appointment, confirm pregnancy, discuss health history",
    },
    {
      month: "Month 2",
      trimester: "1",
      growth: "Baby is about 1 inch long, heart is beating",
      feelings: "Continue experiencing pregnancy symptoms",
      symptoms: "Nausea, fatigue, mood changes, frequent urination",
      diet: "Focus on iron, calcium, and folate-rich foods",
      tests: "Dating ultrasound, screening tests may begin",
      exercises: "Swimming, walking, pelvic floor exercises",
      avoid: "Junk food, stress, excessive caffeine",
      checklist: "Attend second prenatal visit, take prenatal vitamins daily",
    },
    {
      month: "Month 3",
      trimester: "1",
      growth: "Baby is about 3 inches long, organs are forming",
      feelings: "Nausea may decrease, energy levels may improve",
      symptoms: "Showing slightly, some symptoms may ease",
      diet: "Continue healthy eating, increase water intake",
      tests: "Nuchal translucency screening, blood tests",
      exercises: "Prenatal yoga, walking, light strength training",
      avoid: "Strenuous exercise, extreme temperature changes",
      checklist: "Complete first trimester screening, discuss risks",
    },
  ],
  2: [
    {
      month: "Month 4",
      trimester: "2",
      growth: "Baby is about 6 inches long, you can feel movement",
      feelings: "You may experience the 'glow', increased energy",
      symptoms: "Visible belly, occasional kicks felt",
      diet: "Increase calories by 300-500 per day",
      tests: "Second trimester screening, anatomy ultrasound",
      exercises: "Walking, pregnancy pilates, swimming",
      avoid: "Lying flat on back for long periods",
      checklist: "Start kick counting, begin maternity wardrobe",
    },
    {
      month: "Month 5",
      trimester: "2",
      growth: "Baby is about 8-9 inches long, weighs about 1 pound",
      feelings: "Increased appetite, more energy, emotional stability",
      symptoms: "Visible kicks, growing belly, back pain may start",
      diet: "Eat frequent snacks, focus on protein and calcium",
      tests: "Glucose tolerance test may be scheduled",
      exercises: "Continue safe exercises, pelvic floor strengthening",
      avoid: "Lying on back, hot tubs, excessive heat",
      checklist: "Prepare for 20-week ultrasound, plan baby shower",
    },
    {
      month: "Month 6",
      trimester: "2",
      growth: "Baby is about 11-12 inches long, weighs 1.5-2 pounds",
      feelings: "Increased Braxton Hicks contractions, possible swelling",
      symptoms: "Regular fetal movement, potential leg cramps",
      diet: "Stay hydrated, limit sodium, eat iron-rich foods",
      tests: "Glucose tolerance test if not done, check blood pressure",
      exercises: "Walking, swimming, prenatal aerobics",
      avoid: "Prolonged standing, heavy lifting, alcohol",
      checklist: "Enroll in childbirth classes, interview pediatricians",
    },
  ],
  3: [
    {
      month: "Month 7",
      trimester: "3",
      growth: "Baby is about 13-14 inches long, weighs 2-3 pounds",
      feelings: "Increased fatigue, discomfort, nesting instinct",
      symptoms: "Braxton Hicks, swelling, heartburn, back pain",
      diet: "Eat small frequent meals, increase iron intake",
      tests: "Blood pressure check, weight check, fetal monitoring",
      exercises: "Gentle walking, pelvic floor exercises, prenatal yoga",
      avoid: "Strenuous exercise, stress, heavy lifting",
      checklist: "Tour birth facility, finalize birth plan, install car seat",
    },
    {
      month: "Month 8",
      trimester: "3",
      growth: "Baby is about 16-17 inches long, weighs 4-5 pounds",
      feelings: "Increased discomfort, anticipation, possible anxiety",
      symptoms: "Frequent urination, swelling, sleep difficulty",
      diet: "Focus on rest and proper nutrition, eat calcium-rich foods",
      tests: "Group B Strep test, fetal monitoring, position check",
      exercises: "Gentle walking, pelvic floor exercises, relaxation",
      avoid: "Long car rides, air travel, strenuous activity",
      checklist: "Pack hospital bag, practice breathing exercises",
    },
    {
      month: "Month 9",
      trimester: "3",
      growth: "Baby is about 18-20 inches long, weighs 6-8+ pounds",
      feelings: "Ready to meet baby, potential anxiety about labor",
      symptoms: "Frequent contractions, baby has dropped, fatigue",
      diet: "Light frequent meals, stay hydrated, eat energy foods",
      tests: "Fetal monitoring, position check, cervical exams",
      exercises: "Walking, pelvic floor exercises, relaxation techniques",
      avoid: "Anything that causes stress, long periods of activity",
      checklist: "Review labor signs, finalize support person, relax",
    },
  ],
}

// Exercise data
const exerciseData = {
  1: [
    { name: "Walking", description: "30 minutes of brisk walking daily helps maintain fitness." },
    { name: "Prenatal Yoga", description: "Gentle yoga improves flexibility and reduces stress." },
    { name: "Swimming", description: "Low-impact exercise that supports your growing body." },
  ],
  2: [
    { name: "Water Aerobics", description: "Excellent low-impact cardio exercise during second trimester." },
    { name: "Pelvic Floor Exercises", description: "Strengthen muscles for labor and postpartum recovery." },
    { name: "Walking & Light Hiking", description: "Continue walking on flat, safe surfaces." },
  ],
  3: [
    { name: "Gentle Walking", description: "Continue light walking to stay active and comfortable." },
    { name: "Pelvic Floor Exercises", description: "Essential preparation for childbirth." },
    { name: "Breathing Exercises", description: "Practice breathing techniques for labor management." },
  ],
}

// DOM Elements
const problemsGrid = document.getElementById("problemsGrid")
const monthsGrid = document.getElementById("monthsGrid")
const exercisesGrid = document.getElementById("exercisesGrid")
const toolModal = document.getElementById("toolModal")
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")

// Populate Problems Section
function populateProblems() {
  problemsGrid.innerHTML = problems
    .map(
      (problem, index) => `
        <div class="problem-card">
            <h3 class="problem-title">${problem.title}</h3>
            <div class="problem-info">
                <strong>Why it happens:</strong>
                <p>${problem.why}</p>
            </div>
            <div class="problem-info">
                <strong>What to do at home:</strong>
                <p>${problem.whatToDo}</p>
            </div>
            <div class="problem-info">
                <strong>When to see a doctor:</strong>
                <p>${problem.whenToSee}</p>
            </div>
        </div>
    `,
    )
    .join("")
}

// Populate Month Guide
function populateMonths(trimester = "1") {
  monthsGrid.innerHTML = ""
  monthData[Number.parseInt(trimester) === 1 ? "1" : Number.parseInt(trimester) === 2 ? "2" : "3"].forEach((month) => {
    monthsGrid.innerHTML += `
            <div class="month-card">
                <h3>${month.month}</h3>
                <p><strong>Baby Growth:</strong> ${month.growth}</p>
                <p><strong>What You Feel:</strong> ${month.feelings}</p>
                <p><strong>Symptoms:</strong> ${month.symptoms}</p>
                <p><strong>Diet Tips:</strong> ${month.diet}</p>
                <p><strong>Required Tests:</strong> ${month.tests}</p>
                <p><strong>Safe Exercises:</strong> ${month.exercises}</p>
                <p><strong>What to Avoid:</strong> ${month.avoid}</p>
                <strong>Doctor Visit Checklist:</strong>
                <ul>
                    ${month.checklist
                      .split(", ")
                      .map((item) => `<li>${item}</li>`)
                      .join("")}
                </ul>
            </div>
        `
  })
}

// Populate Exercises
function populateExercises(trimester = "1") {
  exercisesGrid.innerHTML = exerciseData[trimester]
    .map(
      (exercise) => `
        <div class="exercise-card">
            <h3>${exercise.name}</h3>
            <p>${exercise.description}</p>
        </div>
    `,
    )
    .join("")
}

// Tab functionality for Month Guide
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".tab-button").forEach((b) => b.classList.remove("active"))
    this.classList.add("active")
    populateMonths(this.dataset.trimester)
  })
})

// Tab functionality for Nutrition
document.querySelectorAll(".nutrition-tab").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".nutrition-tab").forEach((b) => b.classList.remove("active"))
    document.querySelectorAll(".nutrition-panel").forEach((p) => p.classList.remove("active"))
    this.classList.add("active")
    document.getElementById(`${this.dataset.type}-panel`).classList.add("active")
  })
})

// Tab functionality for Exercises
document.querySelectorAll(".exercise-tab").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".exercise-tab").forEach((b) => b.classList.remove("active"))
    this.classList.add("active")
    populateExercises(this.dataset.trimester)
  })
})

// FAQ Toggle
function toggleFAQ(button) {
  const faqItem = button.parentElement
  faqItem.classList.toggle("active")
}

// Tool Functions
function openTool(toolName) {
  const toolContent = document.getElementById("toolContent")

  switch (toolName) {
    case "due-date":
      toolContent.innerHTML = `
                <h2>Due Date Calculator</h2>
                <div style="margin-top: 20px;">
                    <label>Last Menstrual Period (LMP):</label>
                    <input type="date" id="lmpDate" style="width: 100%; padding: 10px; margin: 10px 0; border: 2px solid var(--primary-pink); border-radius: 8px;">
                    <button onclick="calculateDueDate()" style="width: 100%; padding: 10px; background-color: var(--accent-pink); color: white; border: none; border-radius: 8px; cursor: pointer; margin-top: 10px;">Calculate Due Date</button>
                    <div id="dueResult" style="margin-top: 20px;"></div>
                </div>
            `
      break
    case "weight":
      toolContent.innerHTML = `
                <h2>Pregnancy Weight Tracker</h2>
                <div style="margin-top: 20px;">
                    <label>Pre-Pregnancy Weight (lbs):</label>
                    <input type="number" id="preWeight" placeholder="e.g., 140" style="width: 100%; padding: 10px; margin: 10px 0; border: 2px solid var(--primary-pink); border-radius: 8px;">
                    <label>Pre-Pregnancy BMI:</label>
                    <input type="text" id="bmiInput" placeholder="e.g., 22" style="width: 100%; padding: 10px; margin: 10px 0; border: 2px solid var(--primary-pink); border-radius: 8px;">
                    <button onclick="calculateWeightGain()" style="width: 100%; padding: 10px; background-color: var(--accent-pink); color: white; border: none; border-radius: 8px; cursor: pointer; margin-top: 10px;">Calculate Healthy Weight Gain</button>
                    <div id="weightResult" style="margin-top: 20px;"></div>
                </div>
            `
      break
    case "kick-counter":
      toolContent.innerHTML = `
                <h2>Kick Counter</h2>
                <div style="margin-top: 20px; text-align: center;">
                    <p style="font-size: 18px; margin-bottom: 20px;">Count your baby's kicks for 1 hour</p>
                    <div id="kickCount" style="font-size: 48px; font-weight: bold; color: var(--accent-pink); margin: 20px 0;">0</div>
                    <button onclick="incrementKicks()" style="width: 100%; padding: 15px; background-color: var(--accent-pink); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; margin-bottom: 10px;">Kick Detected</button>
                    <button onclick="resetKicks()" style="width: 100%; padding: 10px; background-color: #999; color: white; border: none; border-radius: 8px; cursor: pointer;">Reset</button>
                    <p style="margin-top: 15px; font-size: 14px; color: var(--light-text);">Healthy sign: 10+ kicks per hour</p>
                </div>
            `
      break
    case "contraction":
      toolContent.innerHTML = `
                <h2>Contraction Timer</h2>
                <div style="margin-top: 20px; text-align: center;">
                    <div id="contractionTime" style="font-size: 36px; font-weight: bold; color: var(--accent-pink); margin: 20px 0;">00:00</div>
                    <button onclick="startContraction()" id="startBtn" style="width: 100%; padding: 15px; background-color: var(--accent-pink); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; margin-bottom: 10px;">Start Contraction</button>
                    <button onclick="endContraction()" id="endBtn" style="width: 100%; padding: 15px; background-color: #999; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; display: none;">Stop Contraction</button>
                    <div id="contractionLog" style="margin-top: 20px; text-align: left;"></div>
                </div>
            `
      break
    case "mood":
      toolContent.innerHTML = `
                <h2>Mood Tracker</h2>
                <div style="margin-top: 20px;">
                    <p style="margin-bottom: 15px;">How are you feeling today?</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 20px 0;">
                        <button onclick="recordMood('Happy')" style="padding: 20px; background-color: #FFFACD; border: 2px solid #FFD700; border-radius: 8px; cursor: pointer; font-size: 24px;">😊 Happy</button>
                        <button onclick="recordMood('Sad')" style="padding: 20px; background-color: #FFE4E1; border: 2px solid #FF69B4; border-radius: 8px; cursor: pointer; font-size: 24px;">😢 Sad</button>
                        <button onclick="recordMood('Anxious')" style="padding: 20px; background-color: #E0E0E0; border: 2px solid #999; border-radius: 8px; cursor: pointer; font-size: 24px;">😰 Anxious</button>
                        <button onclick="recordMood('Neutral')" style="padding: 20px; background-color: #F0F0F0; border: 2px solid #CCC; border-radius: 8px; cursor: pointer; font-size: 24px;">😐 Neutral</button>
                    </div>
                    <div id="moodResult" style="margin-top: 20px;"></div>
                </div>
            `
      break
    case "water":
      toolContent.innerHTML = `
                <h2>Water Intake Tracker</h2>
                <div style="margin-top: 20px; text-align: center;">
                    <p style="font-size: 18px; margin-bottom: 20px;">Track your daily water intake (8-10 glasses recommended)</p>
                    <div id="waterCount" style="font-size: 48px; font-weight: bold; color: var(--baby-blue); margin: 20px 0;">0</div>
                    <p id="waterGoal" style="color: var(--light-text);">Goal: 8-10 glasses</p>
                    <button onclick="addWater()" style="width: 100%; padding: 15px; background-color: var(--baby-blue); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; margin: 10px 0;">Add Glass of Water</button>
                    <button onclick="resetWater()" style="width: 100%; padding: 10px; background-color: #999; color: white; border: none; border-radius: 8px; cursor: pointer;">Reset</button>
                </div>
            `
      break
  }

  toolModal.style.display = "block"
}

function closeTool() {
  toolModal.style.display = "none"
}

// Tool Calculations
function calculateDueDate() {
  const lmpDate = new Date(document.getElementById("lmpDate").value)
  const dueDate = new Date(lmpDate.getTime() + 280 * 24 * 60 * 60 * 1000)
  const resultDiv = document.getElementById("dueResult")
  resultDiv.innerHTML = `
        <div style="background-color: var(--light-pink); padding: 20px; border-radius: 8px;">
            <h3 style="color: var(--accent-pink);">Your Estimated Due Date</h3>
            <p style="font-size: 20px; color: var(--dark-text); margin-top: 10px;">${dueDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
    `
}

function calculateWeightGain() {
  const bmi = document.getElementById("bmiInput").value
  const bmiNum = Number.parseFloat(bmi)
  let recommendation = ""

  if (bmiNum < 18.5) {
    recommendation = "28-40 lbs (underweight)"
  } else if (bmiNum < 25) {
    recommendation = "25-35 lbs (normal weight)"
  } else if (bmiNum < 30) {
    recommendation = "15-25 lbs (overweight)"
  } else {
    recommendation = "11-20 lbs (obese)"
  }

  const resultDiv = document.getElementById("weightResult")
  resultDiv.innerHTML = `
        <div style="background-color: var(--light-pink); padding: 20px; border-radius: 8px;">
            <h3 style="color: var(--accent-pink);">Recommended Weight Gain</h3>
            <p style="font-size: 18px; color: var(--dark-text); margin-top: 10px;">${recommendation}</p>
        </div>
    `
}

let kickCount = 0
function incrementKicks() {
  kickCount++
  document.getElementById("kickCount").textContent = kickCount
}
function resetKicks() {
  kickCount = 0
  document.getElementById("kickCount").textContent = "0"
}

let contractionStart = null
const contractions = []
function startContraction() {
  contractionStart = Date.now()
  document.getElementById("startBtn").style.display = "none"
  document.getElementById("endBtn").style.display = "block"
  document.getElementById("contractionTime").textContent = "00:00"
}
function endContraction() {
  const contractionDuration = Math.floor((Date.now() - contractionStart) / 1000)
  contractions.push(contractionDuration)
  document.getElementById("startBtn").style.display = "block"
  document.getElementById("endBtn").style.display = "none"
  updateContractionLog()
}
function updateContractionLog() {
  const log = document.getElementById("contractionLog")
  log.innerHTML =
    "<strong>Recent Contractions:</strong>" +
    contractions
      .slice(-5)
      .map((c, i) => `<p>Contraction ${contractions.length - i}: ${Math.floor(c / 60)}m ${c % 60}s</p>`)
      .join("")
}

let waterCount = 0
function addWater() {
  waterCount++
  document.getElementById("waterCount").textContent = waterCount
}
function resetWater() {
  waterCount = 0
  document.getElementById("waterCount").textContent = "0"
}

function recordMood(mood) {
  const resultDiv = document.getElementById("moodResult")
  resultDiv.innerHTML = `
        <div style="background-color: var(--light-pink); padding: 20px; border-radius: 8px; text-align: center;">
            <p>Mood recorded: <strong>${mood}</strong></p>
            <p style="color: var(--light-text); margin-top: 10px;">Keep tracking to understand your emotional patterns during pregnancy.</p>
        </div>
    `
}

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === toolModal) {
    closeTool()
  }
})

// Initialize
populateProblems()
populateMonths("1")
populateExercises("1")
