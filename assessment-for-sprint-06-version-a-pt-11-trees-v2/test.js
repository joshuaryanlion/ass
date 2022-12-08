class Node
{
	constructor(data) {
    	this.left = null;
    	this.right = null;
    	this.data = data;
	}
}
	function findFirstNodes(root){
        if (!root) return [];
            let output = []
            // add the root node to queue
            let queue = [root]
            // run loops until the queue becomes empty
            while (queue.length > 0) {
                let size = queue.length;
                for (let i = 0; i < size; i++) {
                    let node = queue.shift()
                    // add the first node i.e left node of this level(height)
                    if (i === 0) {
                        output.push(node.data)
                    }
                    // add left node to queue
                    if (node.left !== null) {
                        queue.push(node.left)
                    }
                    // add right node to queue
                    if (node.right !== null) {
                        queue.push(node.right)
                    }
                }
            }
        return output;
	}

    const simpleTree = new Node(4, null, null);
    simpleTree.right = new Node(8, null, null);
    simpleTree.left = new Node(3, null, null);
    simpleTree.right.right = new Node(2, null, null);
  
  // Test the function with the debug tree
  console.log(findFirstNodes(simpleTree)); // -> [ 4, 3, 2 ]