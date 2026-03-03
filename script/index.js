
const loadLessons = ()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(data => displayLesson(data.data));
}

const loadLevelWord = (id) =>{
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWords(data.data));
}

const displayLevelWords = (words) =>{
   const wordContainer = document.getElementById('word-container');
   wordContainer.innerHTML = '';

   words.forEach(word => {
     console.log(word);
     const card = document.createElement('div');
     card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center px-5 py-10 space-y-4">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning / Pronounciation</p>
            <div class="text-2xl font-medium font-bangla">${word.meaning} / ${word.pronunciation}</div>
            <div class="flex justify-between items-center">
                <button class="bg-sky-100 btn hover:bg-sky-300"><i class="fa-solid fa-circle-info"></i></button>
                <button class="bg-sky-100 btn hover:bg-sky-300"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
     `
     wordContainer.append(card);
   });
    
    
}

const displayLesson = (lessons)=>{
   
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    for(let lesson of lessons){
        const divButton= document.createElement('div');
        divButton.innerHTML = `
            <button onclick="loadLevelWord(${lesson.level_no} )" class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i>  Lesson - ${lesson.level_no} </button>
        `
        levelContainer.append(divButton);
    }

   
   

    
}

loadLessons();

