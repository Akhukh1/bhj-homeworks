const hasTooltip = [...document.querySelectorAll('.has-tooltip')];
let activTooltip;

for (let i in hasTooltip) {
  hasTooltip[i].addEventListener('click', (e) => {
    let title = hasTooltip[i].getAttribute('title');
    hasTooltip[i].innerHTML += `
      <div class="tooltip">
        Проверка!
      </div>
    `;
    let tooltip = hasTooltip[i].querySelector('.tooltip');
    if (tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.remove('tooltip_active');
    } else {
      if (activTooltip) {
        activTooltip.classList.remove('tooltip_active');
      }
      let positionTooltip = hasTooltip[i].getBoundingClientRect();
      tooltip.style.top = parseInt(positionTooltip.bottom) + "px";
      tooltip.style.left = parseInt(positionTooltip.left) + "px";
      tooltip.textContent = title;
      tooltip.classList.add('tooltip_active');
      activTooltip = tooltip;
    }
    e.preventDefault();
  })
}
