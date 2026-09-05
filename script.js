// const vowels = [
//     "अ", "आ", "इ", "ई", "उ", "ऊ",
//     "ऋ", "ए", "ऐ", "ओ", "औ"
// ];

// const consonants = [
//     "क", "ख", "ग", "घ", "ङ",
//     "च", "छ", "ज", "झ", "ञ",
//     "ट", "ठ", "ड", "ढ", "ण",
//     "त", "थ", "द", "ध", "न",
//     "प", "फ", "ब", "भ", "म"
// ];

// function createSoundCards(list, containerId) {

//     const container = document.getElementById(containerId);

//     list.forEach(sound => {

//         const card = document.createElement("div");

//         card.className = "sound-card";

//         card.innerHTML = `
//             <div class="sound">${sound}</div>
//             <button onclick="speak('${sound}')">
//                 🔊 Pronounce
//             </button>
//         `;

//         container.appendChild(card);
//     });
// }

// function speak(sound) {

//     const speech = new SpeechSynthesisUtterance(sound);

//     speech.lang = "hi-IN";

//     speech.rate = 0.7;

//     speechSynthesis.speak(speech);
// }

// function showSection(sectionId) {

//     const sections = document.querySelectorAll(".section");

//     sections.forEach(section => {
//         section.classList.remove("active");
//     });

//     document.getElementById(sectionId).classList.add("active");
// }

// createSoundCards(vowels, "vowelContainer");

// createSoundCards(consonants, "consonantContainer");

// const questions = [
//     {
//         question: "Which group contains क ख ग घ ङ?",
//         answers: ["Ka-varga", "Cha-varga", "Ta-varga", "Pa-varga"],
//         correct: "Ka-varga"
//     },

//     {
//         question: "Which Sanskrit sounds are vowels?",
//         answers: ["अ आ इ", "क ख ग", "त थ द", "प फ ब"],
//         correct: "अ आ इ"
//     },

//     {
//         question: "Where are Pa-varga sounds mainly articulated?",
//         answers: ["Throat", "Palate", "Teeth", "Lips"],
//         correct: "Lips"
//     }
// ];

// let currentQuestion = 0;

// function loadQuestion() {

//     const q = questions[currentQuestion];

//     document.getElementById("question").innerText = q.question;

//     const answers = document.getElementById("answers");

//     answers.innerHTML = "";

//     q.answers.forEach(answer => {

//         const button = document.createElement("button");

//         button.innerText = answer;

//         button.style.margin = "5px";

//         button.onclick = () => {

//             if (answer === q.correct) {
//                 document.getElementById("result").innerText =
//                     "✓ Correct Answer!";
//             } else {
//                 document.getElementById("result").innerText =
//                     "✗ Incorrect. Try again.";
//             }
//         };

//         answers.appendChild(button);
//     });
// }

// function nextQuestion() {

//     currentQuestion++;

//     if (currentQuestion >= questions.length) {
//         currentQuestion = 0;
//     }

//     document.getElementById("result").innerText = "";

//     loadQuestion();
// }

// loadQuestion();
const dictionary = {

    "रामः": {
        iast: "rāmaḥ",
        meaning: "Rama",
        root: "राम",
        grammar: "Nominative singular, masculine"
    },

    "गच्छति": {
        iast: "gacchati",
        meaning: "goes",
        root: "गम्",
        grammar: "Third person singular, present tense"
    },

    "पठति": {
        iast: "paṭhati",
        meaning: "reads / studies",
        root: "पठ्",
        grammar: "Third person singular, present tense"
    },

    "जलम्": {
        iast: "jalam",
        meaning: "water",
        root: "जल",
        grammar: "Accusative/Nominative singular, neuter"
    },

    "सूर्यः": {
        iast: "sūryaḥ",
        meaning: "Sun",
        root: "सूर्य",
        grammar: "Nominative singular, masculine"
    },

    "नमः": {
        iast: "namaḥ",
        meaning: "salutation / bow",
        root: "नम्",
        grammar: "Indeclinable expression"
    },

    "विद्या": {
        iast: "vidyā",
        meaning: "knowledge",
        root: "विद्",
        grammar: "Nominative singular, feminine"
    },

    "गुरुः": {
        iast: "guruḥ",
        meaning: "teacher",
        root: "गुरु",
        grammar: "Nominative singular, masculine"
    }

};

const vowels = [
    "अ", "आ", "इ", "ई", "उ", "ऊ",
    "ऋ", "ए", "ऐ", "ओ", "औ"
];

const consonants = [
    "क", "ख", "ग", "घ", "ङ",
    "च", "छ", "ज", "झ", "ञ",
    "ट", "ठ", "ड", "ढ", "ण",
    "त", "थ", "द", "ध", "न",
    "प", "फ", "ब", "भ", "म"
];

function createSoundCards(list, containerId) {

    const container = document.getElementById(containerId);

    list.forEach(sound => {

        const card = document.createElement("div");

        card.className = "sound-card";

        card.innerHTML = `
            <div class="sound">${sound}</div>
            <button onclick="speak('${sound}')">
                🔊 Pronounce
            </button>
        `;

        container.appendChild(card);
    });
}

function speak(sound) {

    const speech = new SpeechSynthesisUtterance(sound);

    speech.lang = "hi-IN";

    speech.rate = 0.7;

    speechSynthesis.speak(speech);
}

function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}

createSoundCards(vowels, "vowelContainer");

createSoundCards(consonants, "consonantContainer");


/* ------------------------------------------------------------------ */
/*  Articulation group data (same 5 groups shown in the Groups tab)   */
/* ------------------------------------------------------------------ */

const consonantGroups = {
    "क": { key: "ka",  name: "क-वर्ग", place: "Throat" },
    "ख": { key: "ka",  name: "क-वर्ग", place: "Throat" },
    "ग": { key: "ka",  name: "क-वर्ग", place: "Throat" },
    "घ": { key: "ka",  name: "क-वर्ग", place: "Throat" },
    "ङ": { key: "ka",  name: "क-वर्ग", place: "Throat" },

    "च": { key: "cha", name: "च-वर्ग", place: "Palate" },
    "छ": { key: "cha", name: "च-वर्ग", place: "Palate" },
    "ज": { key: "cha", name: "च-वर्ग", place: "Palate" },
    "झ": { key: "cha", name: "च-वर्ग", place: "Palate" },
    "ञ": { key: "cha", name: "च-वर्ग", place: "Palate" },

    "ट": { key: "tta", name: "ट-वर्ग", place: "Retroflex" },
    "ठ": { key: "tta", name: "ट-वर्ग", place: "Retroflex" },
    "ड": { key: "tta", name: "ट-वर्ग", place: "Retroflex" },
    "ढ": { key: "tta", name: "ट-वर्ग", place: "Retroflex" },
    "ण": { key: "tta", name: "ट-वर्ग", place: "Retroflex" },

    "त": { key: "ta",  name: "त-वर्ग", place: "Teeth" },
    "थ": { key: "ta",  name: "त-वर्ग", place: "Teeth" },
    "द": { key: "ta",  name: "त-वर्ग", place: "Teeth" },
    "ध": { key: "ta",  name: "त-वर्ग", place: "Teeth" },
    "न": { key: "ta",  name: "त-वर्ग", place: "Teeth" },

    "प": { key: "pa",  name: "प-वर्ग", place: "Lips" },
    "फ": { key: "pa",  name: "प-वर्ग", place: "Lips" },
    "ब": { key: "pa",  name: "प-वर्ग", place: "Lips" },
    "भ": { key: "pa",  name: "प-वर्ग", place: "Lips" },
    "म": { key: "pa",  name: "प-वर्ग", place: "Lips" }
};

/* Romanized fallback, used only if no Devanagari character is found
   in the recognized speech. Capital T / D / N are the conventional
   way to mark the retroflex (ट-वर्ग) sounds so they don't collide
   with the dental (त-वर्ग) sounds, which share the same plain
   lowercase spelling in everyday Roman transliteration. */
const aliases = {
    "क": ["ka", "k"],
    "ख": ["kha"],
    "ग": ["ga"],
    "घ": ["gha"],
    "ङ": ["nga"],

    "च": ["cha"],
    "छ": ["chha"],
    "ज": ["ja"],
    "झ": ["jha"],
    "ञ": ["nya"],

    "ट": ["T", "Ta", "tta"],
    "ठ": ["Th", "Tha", "ttha"],
    "ड": ["D", "Da", "dda"],
    "ढ": ["Dh", "Dha", "ddha"],
    "ण": ["N", "Na", "nna"],

    "त": ["ta"],
    "थ": ["tha"],
    "द": ["da"],
    "ध": ["dha"],
    "न": ["na"],

    "प": ["pa"],
    "फ": ["pha", "fa"],
    "ब": ["ba"],
    "भ": ["bha"],
    "म": ["ma"]
};


/* ------------------------------------------------------------------ */
/*  Matching a raw transcript / typed string to a known consonant     */
/* ------------------------------------------------------------------ */

function matchConsonant(rawText) {

    const text = rawText.trim();

    if (!text) return null;

    // 1) look for a direct Devanagari consonant character
    const devMatches = Object.keys(consonantGroups)
        .filter(c => text.includes(c));

    if (devMatches.length) {
        devMatches.sort((a, b) => text.indexOf(a) - text.indexOf(b));
        return devMatches[0];
    }

    // 2) capitalised retroflex aliases (word-boundary, case sensitive)
    for (const consonant in aliases) {
        const group = consonantGroups[consonant];
        if (group.key !== "tta") continue;

        for (const alias of aliases[consonant]) {
            const pattern = new RegExp("\\b" + alias + "\\b");
            if (pattern.test(text)) return consonant;
        }
    }

    // 3) plain lowercase alias matching, longest alias wins
    const lower = text.toLowerCase().replace(/[^a-z]/g, "");

    let best = null;
    let bestLength = 0;

    for (const consonant in aliases) {
        aliases[consonant].forEach(alias => {
            const a = alias.toLowerCase();
            if (lower.includes(a) && a.length > bestLength) {
                best = consonant;
                bestLength = a.length;
            }
        });
    }

    return best;
}


/* ------------------------------------------------------------------ */
/*  Result rendering                                                   */
/* ------------------------------------------------------------------ */

const identifyResult = document.getElementById("identifyResult");
const micStatus = document.getElementById("micStatus");
const micBtn = document.getElementById("micBtn");

function showIdentifyResult(heardText, consonant) {

    if (!consonant) {
        identifyResult.innerHTML = `
            <p class="heard">Heard: <span>${heardText || "—"}</span></p>
            <p class="placeholder">
                Couldn't match that to a known consonant.
                Try again, or type it in the box above.
            </p>
        `;
        return;
    }

    const group = consonantGroups[consonant];

    identifyResult.innerHTML = `
        <p class="heard">Heard: <span>${heardText}</span></p>
        <div class="identify-consonant">${consonant}</div>
        <p class="identify-group">${group.name}</p>
        <p class="identify-place"><strong>Place:</strong> ${group.place}</p>
        <button class="view-group-btn" onclick="jumpToGroup('${group.key}')">
            View in Articulation Groups
        </button>
    `;
}

function classifyText(text) {
    const match = matchConsonant(text);
    showIdentifyResult(text, match);
}

function classifyManual() {
    const value = document.getElementById("manualInput").value;
    classifyText(value);
}

document.getElementById("manualInput").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        classifyText(event.target.value);
    }
});

function jumpToGroup(key) {

    showSection("groups");

    document.querySelectorAll(".group").forEach(g => g.classList.remove("highlight"));

    const target = document.querySelector(`.group[data-group="${key}"]`);

    if (target) {
        target.classList.add("highlight");
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => target.classList.remove("highlight"), 2500);
    }
}


/* ------------------------------------------------------------------ */
/*  Voice input via the Web Speech API                                 */
/* ------------------------------------------------------------------ */

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognizing = false;
let recognizer = null;

if (SpeechRecognition) {

    recognizer = new SpeechRecognition();
    recognizer.lang = "hi-IN";
    recognizer.interimResults = false;
    recognizer.maxAlternatives = 3;

    recognizer.onstart = () => {
        recognizing = true;
        micBtn.classList.add("listening");
        micStatus.innerText = "Listening... say one consonant sound.";
    };

    recognizer.onresult = event => {

        const alternatives = Array.from(event.results[0]).map(r => r.transcript);

        let heard = alternatives[0];
        let matched = null;

        for (const alt of alternatives) {
            const m = matchConsonant(alt);
            if (m) {
                matched = m;
                heard = alt;
                break;
            }
        }

        showIdentifyResult(heard, matched);
    };

    recognizer.onerror = event => {
        micStatus.innerText = `Mic error: ${event.error}. You can type it instead.`;
    };

    recognizer.onend = () => {
        recognizing = false;
        micBtn.classList.remove("listening");
        micStatus.innerText = "Tap and say a consonant, e.g. क, ट, म";
    };

    micBtn.addEventListener("click", () => {
        if (recognizing) {
            recognizer.stop();
            return;
        }
        try {
            recognizer.start();
        } catch (e) {
            // recognition already starting
        }
    });

} else {
    micBtn.disabled = true;
    micStatus.innerText = "Voice input isn't supported in this browser (try Chrome). Use the text box instead.";
}

function searchWord() {

    const input = document.getElementById("wordInput");

    const word = input.value.trim();

    const result = document.getElementById("dictionaryResult");

    if (word === "") {

        result.innerHTML = `
            <p>Please enter a Sanskrit word.</p>
        `;

        return;
    }

    const data = dictionary[word];

    if (data) {

        result.innerHTML = `

            <h3>${word}</h3>

            <p>
                <strong>IAST:</strong>
                ${data.iast}
            </p>

            <p>
                <strong>Meaning:</strong>
                ${data.meaning}
            </p>

            <p>
                <strong>Root:</strong>
                ${data.root}
            </p>

            <p>
                <strong>Grammar:</strong>
                ${data.grammar}
            </p>

        `;

    } else {

        result.innerHTML = `

            <h3>${word}</h3>

            <p>
                Word not available in the basic dictionary.
            </p>

            <p>
                You can still use the Transliterate button
                to obtain a Roman transliteration.
            </p>

        `;
    }
}

function setWord(word) {

    document.getElementById("wordInput").value = word;

    searchWord();
}

function transliterateInput() {

    const input = document.getElementById("wordInput");

    const word = input.value.trim();

    const result = document.getElementById("dictionaryResult");

    if (word === "") {

        result.innerHTML = `
            <p>Please enter a Sanskrit word.</p>
        `;

        return;
    }

    if (dictionary[word]) {

        result.innerHTML = `

            <h3>${word}</h3>

            <p>
                <strong>Transliteration:</strong>
                ${dictionary[word].iast}
            </p>

            <p>
                <strong>Meaning:</strong>
                ${dictionary[word].meaning}
            </p>

        `;

    } else {

        result.innerHTML = `

            <h3>${word}</h3>

            <p>
                <strong>Transliteration:</strong>
                ${basicTransliterate(word)}
            </p>

            <p>
                This word is not available in the basic dictionary.
            </p>

        `;
    }
}

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