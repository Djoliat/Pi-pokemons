const Validation = (input) => {
  let error = {};

  if (!input.name) {
    error.name = 'Name is necessary';
}

if (input.hp > 255 || !input.hp) {
    error.hp = 'Life is necessary and less than 255';
}

if (input.attack > 255 || !input.attack ) {
    error.attack = 'Attack is necessary and less than 255';
}

if (input.defense > 255 || !input.defense) {
    error.defense = 'Defense is necessary and less than 255';
}

if (input.speed > 255 || !input.speed) {
    error.speed = 'Speed is necessary and less than 255';
}

if (!input.height) {
    error.height = 'Height is necessary';
};

if (!input.weight || input.weight < 0) {
    error.weight = 'Weight is necessary or must be postive';
}

  return error;
};

export default Validation;
