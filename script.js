const questions = [
    ["1. 사람들과 함께 있는 것이 더 편안하다. (A: 예 / B: 아니오)", 'E', 'I'],
    ["2. 새로운 경험을 시도하는 것을 좋아한다. (A: 예 / B: 아니오)", 'S', 'N'],
    ["3. 감정이 중요한 결정을 내릴 때 영향을 미친다. (A: 예 / B: 아니오)", 'F', 'T'],
    ["4. 계획을 세우는 것이 더 좋다. (A: 예 / B: 아니오)", 'J', 'P'],
    ["5. 조용한 환경에서 더 잘 집중할 수 있다. (A: 예 / B: 아니오)", 'I', 'E'],
    ["6. 세부 사항보다 전체적인 그림을 더 중요하게 생각한다. (A: 예 / B: 아니오)", 'N', 'S'],
    ["7. 대화를 이끌어 가는 것을 좋아한다. (A: 예 / B: 아니오)", 'E', 'I'],
    ["8. 논리적인 분석이 결정을 내리는 데 중요하다. (A: 예 / B: 아니오)", 'T', 'F'],
    ["9. 새로운 아이디어를 생각하는 것을 즐긴다. (A: 예 / B: 아니오)", 'N', 'S'],
    ["10. 사람들과의 관계를 중시한다. (A: 예 / B: 아니오)", 'F', 'T'],
    ["11. 즉흥적으로 행동하는 것을 더 좋아한다. (A: 예 / B: 아니오)", 'P', 'J'],
    ["12. 혼자 있는 시간을 즐긴다. (A: 예 / B: 아니오)", 'I', 'E'],
    ["13. 감정적으로 반응하는 것을 잘한다. (A: 예 / B: 아니오)", 'F', 'T'],
    ["14. 계획한 대로 일을 진행하는 것을 선호한다. (A: 예 / B: 아니오)", 'J', 'P'],
    ["15. 다른 사람의 의견을 쉽게 수용한다. (A: 예 / B: 아니오)", 'F', 'T'],
    ["16. 문제를 해결할 때 창의적인 접근을 선호한다. (A: 예 / B: 아니오)", 'N', 'S'],
];

function loadQuestions() {
    const questionsDiv = document.getElementById('questions');
    questions.forEach((question, index) => {
        const questionHTML = `
            <p>${question[0]}</p>
            <label><input type="radio" name="question${index}" value="A" required> A</label>
            <label><input type="radio" name="question${index}" value="B"> B</label>
        `;
        questionsDiv.innerHTML += questionHTML;
    });
}

document.getElementById('mbtiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const score = {'E': 0, 'I': 0, 'S': 0, 'N': 0, 'F': 0, 'T': 0, 'P': 0, 'J': 0};
    
    questions.forEach((_, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`).value;
        if (answer === 'A') {
            score[questions[index][1]] += 1;
        } else {
            score[questions[index][2]] += 1;
        }
    });

    const mbtiType = [
        score['E'] >= score['I'] ? 'E' : 'I',
        score['S'] >= score['N'] ? 'S' : 'N',
        score['F'] >= score['T'] ? 'F' : 'T',
        score['J'] >= score['P'] ? 'J' : 'P'
    ].join('');

    document.getElementById('mbtiType').innerText = `당신의 MBTI 성격 유형의 첫 글자는: ${mbtiType}`;
    document.getElementById('mbtiForm').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});

function restart() {
    document.getElementById('mbtiForm').reset();
    document.getElementById('mbtiForm').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
}

loadQuestions();
