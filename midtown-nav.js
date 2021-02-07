// https://www.codewars.com/kata/526989a41034285187000de4/

function midtown_nav(start, end) {
  // Use regex to get the digit inside start and end.
  // First number is for the avenue second for the street
  const coordinate = /\d{1,2}/g;

  // Create two object for street and avenue
  let avenue = {
    start: start.match(coordinate)[0],
    end: end.match(coordinate)[0],
    instructions: { dir: "", n_blocks: 0 },
  };

  let street = {
    start: start.match(coordinate)[1],
    end: end.match(coordinate)[1],
    instructions: { dir: "", n_blocks: 0 },
  };

  // Get the parameters and calculate instructions for each object
  const getInstruction = () => {
    avenue.instructions.dir = avenue.start <= avenue.end ? "west" : "east";
    avenue.instructions.n_blocks =
      avenue.start < avenue.end
        ? avenue.end - avenue.start
        : avenue.start - avenue.end;

    street.instructions.dir = street.start <= street.end ? "north" : "south";
    street.instructions.n_blocks =
      street.start < street.end
        ? street.end - street.start
        : street.start - street.end;
  };

  getInstruction();
  return `Walk ${street.instructions.n_blocks} blocks ${street.instructions.dir}, and ${avenue.instructions.n_blocks} blocks ${avenue.instructions.dir}`;
}

module.exports = midtown_nav;
