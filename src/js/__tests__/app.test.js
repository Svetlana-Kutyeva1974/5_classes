import * as heroes from '../app.js';

test.each([
  ['hero1', 'Bowman', new heroes.Character('hero1', 'Bowman')],
  ['hero2', 'Bowman', new heroes.Bowman('hero2', 'Bowman')],
  ['hero3', 'Magician', new heroes.Magician('hero3', 'Magician')],
  ['hero4', 'Magician', new heroes.Magician('hero4', 'Magician')],
  ['hero5', 'Magician', new heroes.Magician('hero5', 'Magician')],
  ['hero6', 'Magician', new heroes.Magician('hero6', 'Magician')],
  ['hero7', 'Magician', new heroes.Magician('hero7', 'Magician')],
])(
  'should return a string corresponding to the health level',
  (name, type, createNewObject) => {
    for (const key of Object.values(heroes)) {
      const ClassName = key;
      const result = new ClassName(name, type);
      expect(result).toEqual(createNewObject);
    }
  },
);

/* test('person return value live level :wounded', () => {
  expect(person({ name: 'Маг', health: 45 })).toBe('wounded');
});
test('person return value live level : critical', () => {
  expect(person({ name: 'Лучник', health: 10 })).toBe('critical');
}); */
