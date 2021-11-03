import Swordsman from '../Swordsman.js';
import Character from '../app.js';

test('string length name error', () => {
  const result = new Swordsman('hero', 'Swordsman');
  expect(result.attack).toBe(Character.TYPES[`${result.type}`][0]);
});

test('string length name error', () => {
  const result0 = new Swordsman('hero', 'Swordsman');
  expect(result0.defence).toBe(Character.TYPES[`${result0.type}`][1]);
});

test('string length name error', () => {
  const result1 = new Swordsman('hero', 'Swordsman');
  const result2 = new Character('hero', 'Swordsman');
  expect(result2).not.toMatchObject(result1);
});
