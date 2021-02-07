//https://www.codewars.com/kata/59377c53e66267c8f6000027

function alphabetWar(fight) {
  var rPoints = 0;
  var lPoints = 0;

  // Build the left side soldier
  const leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  // Build the right side soldier
  const rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  function spillSomeBlood() {
    const soldier = fight.split("");
    soldier.map((s) => {
      return s in rightSide
        ? (rPoints += rightSide[s])
        : s in leftSide
        ? (lPoints += leftSide[s])
        : null;
    });
  }

  spillSomeBlood();
  return rPoints == lPoints
    ? "Let's fight again!"
    : rPoints > lPoints
    ? "Right side wins!"
    : "Left side wins!";
}

module.exports = alphabetWar;
