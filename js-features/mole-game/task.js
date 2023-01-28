let countDead = 0;
let countLos = 0;

const countDeadOut = document.getElementById("dead");
const countLostOut = document.getElementById("lost");

for (let i = 0; i < 9; i++) {
  let varName = 'hole' + (i + 1);
  let clickIdHole = document.getElementById(varName);
  clickIdHole.onclick = () => {

    if (clickIdHole.className.includes( 'hole_has-mole' )) {
      countDead = countDead + 1;
      countDeadOut.textContent = countDead;
    } else {
      countLos = countLos + 1;
      countLostOut.textContent = countLos;
    }

    if (countDead === 10) {
      alert('Победа');
      location.reload()
    }

    if (countLos === 5) {
      alert('Поражение');
      location.reload()
    }

  }
}