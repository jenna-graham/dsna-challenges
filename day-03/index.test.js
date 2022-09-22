const { BinaryTreeNode } = require('./BinaryTreeNode');
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
    expect(B.left.value).toEqual('C');
  })

});
