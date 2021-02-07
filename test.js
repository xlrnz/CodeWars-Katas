const TEST = require("ava");

const midtown_nav = require("./midtown-nav"); //https://www.codewars.com/kata/59665001dc23af735700092b
const alphabet_wars = require("./alphabet-wars"); //https://www.codewars.com/kata/59377c53e66267c8f6000027

// midtown-nav test
TEST("midtown-nav-0", (t) => {
  t.pass(
    midtown_nav("5th Ave and W 46th St", "7th Ave and E 58th St"),
    "Walk 12 blocks north, and 2 blocks west"
  );
});

TEST("midtown-nav-1", (t) => {
  t.pass(
    midtown_nav("8th Ave and W 38th St", "7th Ave and W 36th St"),
    "Walk 12 blocks north, and 2 blocks west"
  );
});

TEST("alphabet-wars", (t) => {
  t.pass(alphabet_wars("z"), "Right side wins!");
  t.pass(alphabet_wars("zdqmwpbs"), "Right side wins!");
  t.pass(alphabet_wars("zzzzs"), "Right side wins!");
  t.pass(alphabet_wars("wwwwwwz"), "Right side wins!");
});
