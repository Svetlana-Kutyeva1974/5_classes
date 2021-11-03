import Magician from '../Bowman.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Magician('hero', 'Magician');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Magician('hero', 'Magician');
  expect(result0.defence).toBe(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Magician('hero2', 'Magician');
  const result2 = new Character('hero2', 'Magician');
  expect(result2).not.toMatchObject(result1);
});
