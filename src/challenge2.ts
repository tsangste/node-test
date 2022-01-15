class Node {
  readonly value: number
  left?: Node | null
  right?: Node | null

  constructor(value: number){
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinaryTree {
  root: Node | null

  constructor() {
    this.root = null
  }

  insert(value: number): void {
    const newNode = new Node(value)
    if(this.root === null ) {
      this.root = newNode
      return
    }

    let current: Node = this.root
    while(current) {
      if(value === current.value) {
        return
      }

      if(value < current.value) {
        if(!current.left){
          current.left = newNode
          return
        }

        current = current.left
      } else {
        if(!current.right) {
          current.right = newNode
          return
        }

        current = current.right
      }
    }
  }

  reverse() {
    throw new Error('not implemented')
  }

  toArray() {
    const result: number[] = []

    this.traverse((node: Node) => result.push(node.value))

    return result
  }

  toString() {
    return this.toArray().toString()
  }

  private traverse(process) {
    const inOrder = node => {
      if (node){
        if (node.left !== null) {
          inOrder(node.left)
        }

        process(node)

        if (node.right !== null) {
          inOrder(node.right)
        }
      }
    }

    inOrder(this.root)
  }
}
