import Character from '../app.js';
/*test.each([
  ['hero1', 'Bowman', new Character('hero1', 'Bowman')],
  ['hero2', 'Bowman', new Character('hero2', 'Bowman')],
])(
  'should return a string corresponding to the health level',
  (name, type, createNewObject) => {
      const result = new Character(name, type);
      expect(result).toEqual(createNewObject);
      expect(result.name).toBe(name);
      expect(result.type).toBe(type);
  },
);
*/
test('string length name error', () => {
  const result2 = new Character('hero', 'Magician');
  expect(result2.name).toEqual('hero');
});

test('string length name error', () => {
  const result = new Character('hero', 'Magician');
  expect(result.type).toEqual('Magician');
});

test('string length name error', () => {
  const result2 = new Character('heroismerror', 'Magician');
  expect(result2).not.toThrowError(new Error ('Ошибка, имя должно содержать не менее 2 и не более 10 символов'));
});
test('type error', () => {
  const result3 = new Character('hero5', 'Magiciancheck');
  const err1 = 'Ошибка, недопустимый тип элемента';
  expect(result3).not.toThrowError(err1);
});
