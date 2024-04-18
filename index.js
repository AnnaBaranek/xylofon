const audioFiles = {
    'C': new Audio('tony/C.mp3'),
    'D': new Audio('tony/D.mp3'),
    'E': new Audio('tony/E.mp3'),
    'F': new Audio('tony/F.mp3'),
    'G': new Audio('tony/G.mp3'),
    'A': new Audio('tony/A.mp3'),
    'B': new Audio('tony/B.mp3')
};

const nadpis =  document.querySelector('h1')

const playAudio = (fileName) => {
    const audio = audioFiles[fileName];
    audio.play();
    nadpis.textContent = fileName;
};


document.querySelectorAll('.kamen').forEach(element => {
    element.addEventListener('click', () => {
        const fileName = element.textContent;
        playAudio(fileName);
    });
});

