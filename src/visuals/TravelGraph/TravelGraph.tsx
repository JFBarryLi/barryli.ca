import { GraphCanvas, GraphNode, GraphEdge } from 'reagraph';

interface Props {
  nodes: GraphNode;
  edges: GraphEdge;
}

const TravelGraph = ({ nodes, edges }: Props) => {
  return (
    <GraphCanvas
      nodes={nodes}
      edges={edges}
    />
  );
}
export default TravelGraph;
