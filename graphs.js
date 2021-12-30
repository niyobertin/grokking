class Graph{
    constructor(){
        this.nodes = new Map();

    }
    insertNode(node){
        this.nodes.set(node,[]);
    }
    insertEdge(sources,destination){

        //here we take sources and push to destination
        this.nodes.get(sources).push(destination);
        //here we take destion and pushes to sourece becouse of undirected graph
        //this.nodes.get(destination).push(sources);
    }
    disply(){
        for(let[node,adlist] of this.nodes){
            console.log(`${node}: ${adlist}`);
        }
    }

    // removing node 
    removeNode(node){
       let neighbores  = this.nodes.get(node);
       for(friends of neighbores){
           let adjOfNeighbor  = this.nodes.get(friends);
           this.getIndexAndRemoveIterm(node,adjOfNeighbor);
       } 
       this.nodes.delete(node);
 

   }
    getIndexAndRemoveIterm(item,list){
        const index = list.indexOf(item);
        list.splice(index,1);
    }
    //removing edge

    removeEdge(sources,destination){
        let adjOfSources = this.nodes.get(sources);
        let adjOfdestination = this.nodes.get(destination);
        this.getIndexAndRemoveIterm(sources,adjOfSources)
        this.getIndexAndRemoveIterm(destination,adjOfdestination);
    }
}

let myGraph = new Graph();
console.log("disply :"+myGraph.disply());
console.log("displying node\n..........................")
myGraph.insertNode("name");
myGraph.insertNode("gender");
myGraph.insertNode('email');
//myGraph.removeNode("name")
console.log(myGraph.disply());
console.log("displying nodes and values\n..........................")
myGraph.insertEdge('name','niyonkuru')
myGraph.insertEdge('name','keza')
myGraph.insertEdge('name','keza')
myGraph.insertEdge('name','keza')
myGraph.insertEdge('gender','male')
myGraph.insertEdge('gender','female')
//myGraph.removeEdge('name',"niyonkuru")
console.log(myGraph.disply());