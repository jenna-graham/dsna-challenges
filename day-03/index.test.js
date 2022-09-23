const { BinaryTreeNode } = require('./BinaryTreeNode');
const PersonTreeNode = require('./PersonTreeNode');

describe('node based data structures', () => {
  it('example test', () => {
    expect(1).toBe(1);
  });
  it('creates a new tree', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    B.add(A);
    B.add(C)
    console.log('A', A);
    expect(B.value).toEqual('B');
    expect(B.left.value).toEqual('A');
  })

});

it('creates a person tree', () => {
  const Austin = new PersonTreeNode({
    name: 'Austin',
    city: 'Portland',
  });
  const Colter = new PersonTreeNode({
    name: 'Colter',
    city: 'Corvalis',
  });
  const Mariah = new PersonTreeNode({
    name: 'Mariah',
    city: 'Sherwood',
  });
  const Aaron = new PersonTreeNode({
    name: 'Aaron',
    city: 'Austin',
  });
  const Jenna = new PersonTreeNode({
    name: 'Jenna',
    city: 'Tigard',
  });
  Austin.add(Colter);
  Austin.add(Mariah);
  Austin.add(Aaron);
  Austin.add(Jenna)
  expect(Austin.value).toEqual('Austin');
  expect(Austin.left.value).toEqual('Aaron');
  expect(Austin.right.value).toEqual('Colter');
  expect(Austin.right.right.value).toEqual('Mariah');
  expect(Austin.right.left).toEqual(null);
  expect(Austin.right.right.left.value).toEqual('Jenna');

expect(Austin.findPerson('Jenna')).toEqual({
  name: 'Jenna',
  city: 'Tigard',
});
expect(Austin.findPerson('Katie')).toEqual(null);

});
