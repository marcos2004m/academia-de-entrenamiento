(function(){
const titleQuestions =[...document.querySelectorAll('.questions__title')];
console.log(titleQuestions)
titleQuestions.forEach(questions =>{
questions.addEventListener('click', ()=>{
    let height =0;
    let answer = questions.nextElementSibling;
    let addpadding = questions.parentElement.
    questions.children[0].classList.toggle('questions__arrow--rotate');

    if(answer.clientHeight === 0){
        height = answer.scrollHeight;
    }

    answer.style.height  =`${height}px`
})
});
})();