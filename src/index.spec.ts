import { Person, greeting } from './index';

describe('Greeting function ', () => {
  it('work with argument: ', () => {
    const person = new Person('Jason', 'Park', 100);
    const result = greeting(person);
    expect(result).toBe('Greeting! Jason Park,\nYou are 100 old.');
  });
});
