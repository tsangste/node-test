import assert from 'assert'
import { BinaryTree } from '../src/challenge2'

describe('challenge 2', () => {
  let binaryTree: BinaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree()

    binaryTree.insert(7)
    binaryTree.insert(10)
    binaryTree.insert(4)
    binaryTree.insert(8)
    binaryTree.insert(3)
    binaryTree.insert(11)
  })

  it('reverse binary tree', () => {
    binaryTree.reverse()

    assert.strictEqual(binaryTree.toString(), '11,10,8,7,4,3')
    assert.strictEqual(binaryTree.root?.left?.value, 10)
    assert.strictEqual(binaryTree.root?.right?.value, 4)
  })
})
