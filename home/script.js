const searchBtn = document.getElementById('searchBtn');
const wordInput = document.getElementById('wordInput');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', async () => {
    const word = wordInput.value;
    if (word) {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();
            displayResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            resultDiv.innerHTML = 'An error occurred. Please try again.';
        }
    } else {
        resultDiv.innerHTML = 'Please enter a word to search.';
    }
});

function displayResults(data) {
    resultDiv.innerHTML = '';

    data.forEach(entry => {
        const { word, meanings } = entry;

        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');

        const wordHeader = document.createElement('h2');
        wordHeader.textContent = word;
        entryDiv.appendChild(wordHeader);

        meanings.forEach(meaning => {
            const { partOfSpeech, definitions } = meaning;

            const partOfSpeechPara = document.createElement('h3');
            partOfSpeechPara.textContent = `Part of Speech: ${partOfSpeech}`;
            entryDiv.appendChild(partOfSpeechPara);

            definitions.forEach(definition => {
                const { definition: def, example } = definition;

                const defPara = document.createElement('p');
                defPara.textContent = `Definition: ${def}`;
                entryDiv.appendChild(defPara);

                if (example) {
                    const examplePara = document.createElement('p');
                    examplePara.textContent = `Example: ${example}`;
                    entryDiv.appendChild(examplePara);
                }
                const spacing = document.createElement('br');
                entryDiv.appendChild(spacing);
            });
        });

        resultDiv.appendChild(entryDiv);
    });
}
