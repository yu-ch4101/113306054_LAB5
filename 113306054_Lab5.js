
const gradesTable = document.getElementById('gradesTable').querySelector('tbody');
let mathGrades = [];
let englishGrades = [];

function submitGrades() {
    const mathInput = document.getElementById('mathInput');
    const englishInput = document.getElementById('englishInput');

    const math = parseFloat(mathInput.value);
    const english = parseFloat(englishInput.value);

    if (isNaN(math) || isNaN(english)) {
        alert('Please enter valid numbers for both grades.');
        return;
    }

    mathGrades.push(math);
    englishGrades.push(english);

    const average = ((math + english) / 2).toFixed(2);

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${mathGrades.length}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${average}</td>
    `;
    gradesTable.appendChild(row);

    updateAverages();

    mathInput.value = '';
    englishInput.value = '';
}

function updateAverages() {
    const mathSum = mathGrades.reduce((a, b) => a + b, 0);
    const englishSum = englishGrades.reduce((a, b) => a + b, 0);
    const totalGrades = mathGrades.length;

    const mathAvg = (mathSum / totalGrades).toFixed(2);
    const englishAvg = (englishSum / totalGrades).toFixed(2);
    const overallAvg = ((mathSum + englishSum) / (totalGrades * 2)).toFixed(2);

    document.getElementById('mathAverage').textContent = mathAvg;
    document.getElementById('englishAverage').textContent = englishAvg;
    document.getElementById('overallAverage').textContent = overallAvg;
}
