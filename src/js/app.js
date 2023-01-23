/* eslint-disable no-console */
import TeamIterator from './TeamIterator';
import TeamGenerator from './TeamGenerator';
import canIterate from './canIterate';
import Character from './Character';

const teamIterator = new TeamIterator(
  new Character('gamer1', 'Boweman', 100),
  new Character('gamer2', 'Magician', 90),
  new Character('gamer3', 'Daemon', 80),
);

const teamGenerator = new TeamGenerator(
  new Character('gamer1', 'Boweman', 100),
  new Character('gamer2', 'Magician', 90),
  new Character('gamer3', 'Daemon', 80),
);

for (const prop of teamIterator) {
  console.log('свойство итератора: ', prop);
}

for (const prop of teamGenerator) {
  console.log('свойство генератора: ', prop);
}

console.log('Выводим свойства');
console.log('Map - true', canIterate(new Map()));
console.log('Set - true', canIterate(new Set()));
console.log('null - false', canIterate(null));
console.log('10 - false', canIterate(10));
console.log('String - true', canIterate('Netology'));
console.log('iter - true', canIterate(teamIterator));
console.log('gen - true', canIterate(teamGenerator));
