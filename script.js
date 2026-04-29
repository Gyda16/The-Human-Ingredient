const questions = {
    openness: [
        "Me gusta explorar ideas nuevas y poco convencionales.",
        "Disfruto de la belleza de la naturaleza y el arte.",
        "Soy curioso sobre muchas cosas diferentes.",
        "Prefiero rutinas predecibles a situaciones impredecibles.",
        "Me interesan las teorías abstractas y filosóficas.",
        "Soy creativo y original en mi pensamiento.",
        "Evito actividades que requieren imaginación.",
        "Me gusta reflexionar sobre mi vida interior."
    ],
    conscientiousness: [
        "Soy organizado y metódico en mi trabajo.",
        "Cumplo con mis promesas y compromisos.",
        "Soy disciplinado y me esfuerzo por lograr mis metas.",
        "A menudo dejo las cosas para último momento.",
        "Presto atención a los detalles.",
        "Soy responsable y confiable.",
        "Me cuesta mantener el orden en mi entorno.",
        "Planeo mis actividades con anticipación."
    ],
    extraversion: [
        "Me siento cómodo en situaciones sociales.",
        "Soy hablador y expresivo.",
        "Prefiero actividades en grupo a estar solo.",
        "Soy tímido y reservado.",
        "Me energiza interactuar con otras personas.",
        "Disfruto de ser el centro de atención.",
        "Me siento incómodo en fiestas grandes.",
        "Hago amigos fácilmente."
    ],
    agreeableness: [
        "Soy compasivo y empático con los demás.",
        "Ayudo a los demás cuando lo necesitan.",
        "Soy cooperativo y evito conflictos.",
        "Puedo ser crítico con los demás.",
        "Me preocupo por el bienestar de los otros.",
        "Soy generoso y altruista.",
        "A veces soy egoísta en mis acciones.",
        "Perdono fácilmente a quienes me ofenden."
    ],
    neuroticism: [
        "Me preocupo mucho por cosas pequeñas.",
        "Me siento ansioso en situaciones estresantes.",
        "Soy emocionalmente inestable.",
        "Me recupero rápidamente de las emociones negativas.",
        "A menudo me siento triste o deprimido.",
        "Soy irritable y me enojo fácilmente.",
        "Me siento seguro de mí mismo.",
        "Experimento cambios de humor frecuentes."
    ]
};

const sections = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'];
const sectionNames = {
    openness: 'Apertura',
    conscientiousness: 'Responsabilidad',
    extraversion: 'Extraversión',
    agreeableness: 'Amabilidad',
    neuroticism: 'Neuroticismo'
};

let currentSection = 0;
let answers = {};

document.getElementById('start-btn').addEventListener('click', startTest);
document.getElementById('next-btn').addEventListener('click', nextSection);
document.getElementById('restart-btn').addEventListener('click', restartTest);

function startTest() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('test').style.display = 'block';
    loadSection();
}

function loadSection() {
    const section = sections[currentSection];
    const sectionQuestions = questions[section];
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';
    document.getElementById('progress').textContent = `Sección ${currentSection + 1} de ${sections.length}: ${sectionNames[section]}`;

    sectionQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <p>${q}</p>
            <div class="options">
                <label class="option"><input type="radio" name="q${index}" value="1"> 1</label>
                <label class="option"><input type="radio" name="q${index}" value="2"> 2</label>
                <label class="option"><input type="radio" name="q${index}" value="3"> 3</label>
                <label class="option"><input type="radio" name="q${index}" value="4"> 4</label>
                <label class="option"><input type="radio" name="q${index}" value="5"> 5</label>
            </div>
        `;
        questionsDiv.appendChild(questionDiv);
    });

    document.getElementById('next-btn').style.display = 'block';
}

function nextSection() {
    const section = sections[currentSection];
    const sectionQuestions = questions[section];
    answers[section] = [];
    let allAnswered = true;

    sectionQuestions.forEach((_, index) => {
        const radios = document.querySelectorAll(`input[name="q${index}"]:checked`);
        if (radios.length > 0) {
            answers[section].push(parseInt(radios[0].value));
        } else {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        alert('Por favor, responde todas las preguntas antes de continuar.');
        return;
    }

    currentSection++;
    if (currentSection < sections.length) {
        loadSection();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('test').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = '';

    sections.forEach(section => {
        const scores = answers[section];
        const average = scores.reduce((a, b) => a + b, 0) / scores.length;
        let level = '';
        if (average < 2.5) level = 'Bajo';
        else if (average < 3.5) level = 'Medio';
        else level = 'Alto';

        const traitDiv = document.createElement('div');
        traitDiv.className = 'trait';
        traitDiv.innerHTML = `
            <h3>${sectionNames[section]}: ${level}</h3>
            <p>Puntuación promedio: ${average.toFixed(2)}</p>
            <p>${getDescription(section, level)}</p>
        `;
        profileDiv.appendChild(traitDiv);
    });
}

function getDescription(section, level) {
    const descriptions = {
        openness: {
            Bajo: 'Prefieres lo familiar y práctico. Te sientes cómodo con rutinas y tradiciones.',
            Medio: 'Tienes un equilibrio entre lo nuevo y lo conocido. Eres curioso pero no excesivamente.',
            Alto: 'Eres abierto a nuevas experiencias, creativo e imaginativo.'
        },
        conscientiousness: {
            Bajo: 'Eres flexible y espontáneo, pero a veces procrastinas.',
            Medio: 'Eres organizado en general, pero no obsesivo.',
            Alto: 'Eres disciplinado, responsable y planeas con anticipación.'
        },
        extraversion: {
            Bajo: 'Prefieres la soledad y eres introspectivo.',
            Medio: 'Te sientes cómodo tanto solo como en grupo.',
            Alto: 'Eres sociable, energético y disfrutas de la compañía.'
        },
        agreeableness: {
            Bajo: 'Eres directo y competitivo, a veces crítico.',
            Medio: 'Eres amable en general, pero defiendes tus opiniones.',
            Alto: 'Eres compasivo, cooperativo y generoso.'
        },
        neuroticism: {
            Bajo: 'Eres emocionalmente estable y tranquilo.',
            Medio: 'Experimentas emociones moderadas, pero te recuperas bien.',
            Alto: 'Eres sensible a emociones negativas como ansiedad o ira.'
        }
    };
    return descriptions[section][level];
}

function restartTest() {
    currentSection = 0;
    answers = {};
    document.getElementById('results').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
}
