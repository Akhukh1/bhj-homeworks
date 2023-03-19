function viewResult(questionResult) {

  const statQuestion = JSON.parse(questionResult).stat
  const pollStat = document.querySelector('.poll__title');

  for (let i in statQuestion) {
    pollStat.innerHTML += '<div>' + statQuestion[i].answer + ': ' + statQuestion[i].votes + '%' + '</div>';
  }

}

function clickAnsver(j, pollAnswer, questionId) {

  alert('Спасибо, ваш голос засчитан!');

  for (let i in pollAnswer) {
    pollAnswer[i].remove();
  }

  const xhr = new XMLHttpRequest;
  xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
  xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
  xhr.send( 'vote=' + questionId +  '&answer=' + j);

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      let questionResult = xhr.responseText;
      viewResult(questionResult);
    }
  });  
  
}

function getQuestion(question) {

  const pollTitle = document.querySelector('.poll__title');
  const pollAnswers = document.querySelector('.poll__answers');

  const answers = JSON.parse(question).data.answers;
  const questionId = JSON.parse(question).id;

  pollTitle.textContent = JSON.parse(question).data.title;

  for (let i in answers) {
    pollAnswers.innerHTML += '<button class="poll__answer">' + answers[i] + '</button>';
  }

  const pollAnswer = [...pollAnswers.querySelectorAll('.poll__answer')];

  for (let j in pollAnswer) {
    pollAnswer[j].addEventListener('click', () => {
      clickAnsver(j, pollAnswer, questionId);
    });
  }

}


const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    let question = xhr.responseText
    getQuestion(question);
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

