/* =====================================================
   SANSKRIT SOUND EXPLORER
   Experiment 7 + Experiment 11
   ===================================================== */


/* ================= VOWELS ================= */

const vowels = [
    "अ",
    "आ",
    "इ",
    "ई",
    "उ",
    "ऊ",
    "ऋ",
    "ए",
    "ऐ",
    "ओ",
    "औ"
];


/* ================= CONSONANTS ================= */

const consonants = [
    "क", "ख", "ग", "घ", "ङ",
    "च", "छ", "ज", "झ", "ञ",
    "ट", "ठ", "ड", "ढ", "ण",
    "त", "थ", "द", "ध", "न",
    "प", "फ", "ब", "भ", "म",
    "य", "र", "ल", "व",
    "श", "ष", "स", "ह"
];


/* ================= DICTIONARY ================= */

const dictionary = {

    "रामः": {
        iast: "rāmaḥ",
        meaning: "Rama",
        root: "राम",
        grammar: "Nominative singular, masculine",
        type: "Noun"
    },

    "गच्छति": {
        iast: "gacchati",
        meaning: "goes",
        root: "गम्",
        grammar: "Third person singular, present tense",
        type: "Verb"
    },

    "पठति": {
        iast: "paṭhati",
        meaning: "reads / studies",
        root: "पठ्",
        grammar: "Third person singular, present tense",
        type: "Verb"
    },

    "जलम्": {
        iast: "jalam",
        meaning: "water",
        root: "जल",
        grammar: "Nominative/accusative singular, neuter",
        type: "Noun"
    },

    "सूर्यः": {
        iast: "sūryaḥ",
        meaning: "Sun",
        root: "सूर्य",
        grammar: "Nominative singular, masculine",
        type: "Noun"
    },

    "नमः": {
        iast: "namaḥ",
        meaning: "salutation / bow",
        root: "नम्",
        grammar: "Indeclinable expression",
        type: "Expression"
    },

    "विद्या": {
        iast: "vidyā",
        meaning: "knowledge",
        root: "विद्",
        grammar: "Nominative singular, feminine",
        type: "Noun"
    },

    "गुरुः": {
        iast: "guruḥ",
        meaning: "teacher",
        root: "गुरु",
        grammar: "Nominative singular, masculine",
        type: "Noun"
    },

    "मित्रम्": {
        iast: "mitram",
        meaning: "friend",
        root: "मित्र",
        grammar: "Nominative/accusative singular, neuter",
        type: "Noun"
    },

    "पुस्तकम्": {
        iast: "pustakam",
        meaning: "book",
        root: "पुस्तक",
        grammar: "Nominative/accusative singular, neuter",
        type: "Noun"
    }

};


/* =====================================================
   SECTION NAVIGATION
   ===================================================== */

function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   CREATE SOUND CARDS
   ===================================================== */

function createSoundCards(sounds, containerId) {

    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    container.innerHTML = "";

    sounds.forEach(sound => {

        const card = document.createElement("div");

        card.className = "sound-card";

        card.innerHTML = `

            <div class="sound">
                ${sound}
            </div>

            <button onclick="speak('${sound}')">
                🔊 Hear
            </button>

        `;

        container.appendChild(card);

    });
}


/* =====================================================
   PRONUNCIATION
   ===================================================== */

function speak(text) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Speech synthesis is not supported in this browser."
        );

        return;
    }

    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "hi-IN";

    speech.rate = 0.7;

    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}


/* =====================================================
   DICTIONARY SEARCH
   ===================================================== */

function searchWord() {

    const input =
        document.getElementById("wordInput");

    const result =
        document.getElementById("dictionaryResult");

    const word =
        input.value.trim();


    if (word === "") {

        result.innerHTML = `

            <div class="empty-result">

                <div class="empty-icon">⚠️</div>

                <h3>Please enter a word</h3>

                <p>
                    Enter a Sanskrit word such as रामः or सूर्यः.
                </p>

            </div>

        `;

        return;
    }


    const entry = dictionary[word];


    if (entry) {

        displayDictionaryResult(word, entry);

        addToHistory(word);

    } else {

        const transliteration =
            basicTransliterate(word);

        result.innerHTML = `

            <div class="word-title">

                <h3>${word}</h3>

                <button onclick="speak('${word}')">
                    🔊 Pronounce
                </button>

            </div>

            <div class="transliteration">
                ${transliteration}
            </div>

            <div class="meaning">

                <strong>ℹ️ Dictionary:</strong>

                This word is not available in the
                basic offline dictionary.

            </div>

            <div class="analysis-grid">

                <div class="analysis-card">
                    <span>Transliteration</span>
                    <strong>${transliteration}</strong>
                </div>

                <div class="analysis-card">
                    <span>Meaning</span>
                    <strong>Not available</strong>
                </div>

                <div class="analysis-card">
                    <span>Grammar</span>
                    <strong>Not available</strong>
                </div>

            </div>

        `;

        addToHistory(word);
    }
}


/* =====================================================
   DISPLAY DICTIONARY RESULT
   ===================================================== */

function displayDictionaryResult(word, entry) {

    const result =
        document.getElementById("dictionaryResult");


    result.innerHTML = `

        <div class="word-title">

            <h3>${word}</h3>

            <button onclick="speak('${word}')">
                🔊 Pronounce
            </button>

        </div>


        <div class="transliteration">
            ${entry.iast}
        </div>


        <div class="meaning">

            <strong>Meaning:</strong>

            ${entry.meaning}

        </div>


        <div class="analysis-grid">


            <div class="analysis-card">

                <span>🔤 Transliteration</span>

                <strong>
                    ${entry.iast}
                </strong>

            </div>


            <div class="analysis-card">

                <span>🌱 Root</span>

                <strong>
                    ${entry.root}
                </strong>

            </div>


            <div class="analysis-card">

                <span>📚 Word Type</span>

                <strong>
                    ${entry.type}
                </strong>

            </div>


            <div class="analysis-card">

                <span>🧠 Meaning</span>

                <strong>
                    ${entry.meaning}
                </strong>

            </div>


            <div class="analysis-card">

                <span>📖 Grammar</span>

                <strong>
                    ${entry.grammar}
                </strong>

            </div>


            <div class="analysis-card">

                <span>🔊 Pronunciation</span>

                <strong>
                    Available
                </strong>

            </div>


        </div>

    `;
}


/* =====================================================
   SET QUICK WORD
   ===================================================== */

function setWord(word) {

    const input =
        document.getElementById("wordInput");

    input.value = word;

    searchWord();
}


/* =====================================================
   TRANSLITERATION BUTTON
   ===================================================== */

function transliterateInput() {

    const input =
        document.getElementById("wordInput");

    const result =
        document.getElementById("dictionaryResult");

    const word =
        input.value.trim();


    if (word === "") {

        alert("Please enter a Sanskrit word.");

        return;
    }


    let transliteration;


    if (dictionary[word]) {

        transliteration =
            dictionary[word].iast;

    } else {

        transliteration =
            basicTransliterate(word);
    }


    result.innerHTML = `

        <div class="word-title">

            <h3>${word}</h3>

            <button onclick="speak('${word}')">
                🔊 Pronounce
            </button>

        </div>


        <div class="transliteration">

            ${transliteration}

        </div>


        <div class="meaning">

            <strong>IAST Transliteration</strong>

            <p>
                The Sanskrit word has been converted
                into Roman/IAST notation.
            </p>

        </div>

    `;

    addToHistory(word);
}


/* =====================================================
   BASIC SANSKRIT → IAST TRANSLITERATION
   ===================================================== */

function basicTransliterate(text) {

    const map = {

        "अ": "a",
        "आ": "ā",
        "इ": "i",
        "ई": "ī",
        "उ": "u",
        "ऊ": "ū",
        "ऋ": "ṛ",
        "ए": "e",
        "ऐ": "ai",
        "ओ": "o",
        "औ": "au",

        "क": "ka",
        "ख": "kha",
        "ग": "ga",
        "घ": "gha",
        "ङ": "ṅa",

        "च": "ca",
        "छ": "cha",
        "ज": "ja",
        "झ": "jha",
        "ञ": "ña",

        "ट": "ṭa",
        "ठ": "ṭha",
        "ड": "ḍa",
        "ढ": "ḍha",
        "ण": "ṇa",

        "त": "ta",
        "थ": "tha",
        "द": "da",
        "ध": "dha",
        "न": "na",

        "प": "pa",
        "फ": "pha",
        "ब": "ba",
        "भ": "bha",
        "म": "ma",

        "य": "ya",
        "र": "ra",
        "ल": "la",
        "व": "va",

        "श": "śa",
        "ष": "ṣa",
        "स": "sa",
        "ह": "ha",

        "ं": "ṃ",
        "ः": "ḥ"
    };


    let output = "";


    for (let char of text) {

        if (map[char]) {

            output += map[char];

        } else {

            output += char;

        }

    }


    return output;
}


/* =====================================================
   SEARCH HISTORY
   ===================================================== */

let searchHistory =
    JSON.parse(
        localStorage.getItem("sanskritHistory")
    ) || [];


function addToHistory(word) {

    searchHistory =
        searchHistory.filter(
            item => item !== word
        );


    searchHistory.unshift(word);


    if (searchHistory.length > 5) {

        searchHistory =
            searchHistory.slice(0, 5);

    }


    localStorage.setItem(
        "sanskritHistory",
        JSON.stringify(searchHistory)
    );


    displayHistory();
}


function displayHistory() {

    const container =
        document.getElementById("historyContainer");


    if (!container) {
        return;
    }


    if (searchHistory.length === 0) {

        container.innerHTML = `
            <p class="no-history">
                No recent searches.
            </p>
        `;

        return;
    }


    container.innerHTML = "";


    searchHistory.forEach(word => {

        const item =
            document.createElement("span");

        item.className = "history-item";

        item.textContent = word;

        item.onclick = function() {

            setWord(word);

        };


        container.appendChild(item);

    });
}


function clearHistory() {

    searchHistory = [];

    localStorage.removeItem(
        "sanskritHistory"
    );

    displayHistory();
}


/* =====================================================
   ENTER KEY SEARCH
   ===================================================== */

function handleEnter(event) {

    if (event.key === "Enter") {

        searchWord();

    }
}


/* =====================================================
   QUIZ
   ===================================================== */

const questions = [

    {
        question:
            "Which group contains क ख ग घ ङ?",

        options: [
            "क-वर्ग",
            "च-वर्ग",
            "त-वर्ग",
            "प-वर्ग"
        ],

        answer: "क-वर्ग"
    },


    {
        question:
            "Which of these is a Sanskrit vowel?",

        options: [
            "अ",
            "क",
            "त",
            "प"
        ],

        answer: "अ"
    },


    {
        question:
            "Where are प-वर्ग sounds mainly articulated?",

        options: [
            "Throat",
            "Palate",
            "Teeth",
            "Lips"
        ],

        answer: "Lips"
    },


    {
        question:
            "What is the IAST transliteration of सूर्यः?",

        options: [
            "sūryaḥ",
            "suryam",
            "sari",
            "sūrya"
        ],

        answer: "sūryaḥ"
    }

];


let currentQuestion = 0;


/* =====================================================
   LOAD QUIZ QUESTION
   ===================================================== */

function loadQuestion() {

    const question =
        document.getElementById("question");

    const options =
        document.getElementById("options");

    const result =
        document.getElementById("quizResult");


    if (!question || !options) {
        return;
    }


    const q =
        questions[currentQuestion];


    question.textContent =
        q.question;


    options.innerHTML = "";


    result.textContent = "";


    q.options.forEach(option => {

        const button =
            document.createElement("button");

        button.className =
            "quiz-option";

        button.textContent =
            option;


        button.onclick = function() {

            checkAnswer(option);

        };


        options.appendChild(button);

    });
}


/* =====================================================
   CHECK ANSWER
   ===================================================== */

function checkAnswer(answer) {

    const result =
        document.getElementById("quizResult");


    const correct =
        questions[currentQuestion].answer;


    if (answer === correct) {

        result.textContent =
            "✅ Correct!";

    } else {

        result.textContent =
            "❌ Incorrect. Correct answer: "
            + correct;

    }
}


/* =====================================================
   NEXT QUESTION
   ===================================================== */

function nextQuestion() {

    currentQuestion++;


    if (currentQuestion >= questions.length) {

        currentQuestion = 0;

    }


    loadQuestion();
}


/* =====================================================
   INITIALIZE APPLICATION
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createSoundCards(
            vowels,
            "vowelContainer"
        );


        createSoundCards(
            consonants,
            "consonantContainer"
        );


        displayHistory();


        loadQuestion();

    }
);