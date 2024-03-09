function validateForm(e) {
    e.preventDefault()
    let score=0
    let question1 = document.quiz.qst1.value 
    let question2 = document.quiz.qst2.value 

    if (question1 == 3) {score++}
    if (question2 == 36) {score++}

    alert(`your score is: ${score}hp and you did very well`)
}