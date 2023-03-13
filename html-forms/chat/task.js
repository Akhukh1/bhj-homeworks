function getmessege() {
  const messege = [
      'Привет',
      'Здравствуйте',
      'Пока',
      'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
      'Подождите 10 минут',
      'Мы скоро освобоимсә',
    ],
    index = Math.floor(Math.random() * messege.length);

  return messege[index];
}

function robot(robotTextMessege) {

  messages.innerHTML += `
  <div class="message">
    <div class="message__time">09:21</div>
    <div class="message__text">
      
    </div>
  </div>
`;

  messageText = [...messages.querySelectorAll('.message__text')];
  messageText[messageText.length - 1].innerText = robotTextMessege;

  messageTime = [...messages.querySelectorAll('.message__time')];
  messageTime[messageTime.length - 1].innerText = mesTime();

  messages.scrollIntoView(false);

}

function mesTime() {

  return new Date().toLocaleTimeString("ru-Ru", {
    hour: "2-digit",
    minute: "2-digit",
  })

}

const chatWidget = document.querySelector('.chat-widget');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
})

const chatWidgetInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

let intervalTiime = setTimeout(() => {
  robot('Чего молчим?');
}, 30000);

chatWidgetInput.addEventListener('keyup', (e) => {

  if (e.key === 'Enter' && chatWidgetInput.value.trim()) {

    clearTimeout(intervalTiime);

    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">21:10</div>
        <div class="message__text">
 
        </div>
      </div>
  `;

    let messageText = [...messages.querySelectorAll('.message__text')];
    messageText[messageText.length - 1].innerText = chatWidgetInput.value;

    let messageTime = [...messages.querySelectorAll('.message__time')];
    messageTime[messageTime.length - 1].innerText = mesTime();

    robot(getmessege());

    intervalTiime = setTimeout(() => {
      robot('Чего молчим?');
    }, 30000);

    chatWidgetInput.value = '';

  }

})




