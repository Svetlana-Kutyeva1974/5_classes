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

test('string length name error', () => {
  const result2 = new heroes.Magician('heroismerror', 'Magician');
  expect(result2).toThrowError('Ошибка, имя должно содержать не менее 2 и не более 10 символов');
});
test('type error', () => {
  const result3 = new heroes.Character('hero5', 'Magiciancheck');
  const err1 = 'Ошибка, недопустимый тип элемента';
  console.log(result3, err1);
  expect(result3).toThrowError(err1);
});
