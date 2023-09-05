import { GraphCanvas } from 'reagraph';

interface Node {
  id: string;
  label: string;
}

interface Edge {
  id: string;
  label: string;
  source: string;
  target: string;
}

interface Props {
  nodes: Node[];
  edges: Edge[];
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
