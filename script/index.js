
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
     const div = document.createElement('div');
     
     
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

