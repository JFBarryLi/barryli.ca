import { useRef } from 'react';

import { GraphCanvas, GraphCanvasRef, useSelection } from 'reagraph';

import { LocationGraphNodes, LocationGraphLinks } from 'slices/travelLog';

interface Props {
  nodes: LocationGraphNodes;
  edges: LocationGraphLinks;
}

const TravelGraph = ({ nodes, edges }: Props) => {
	const graphRef = useRef<GraphCanvasRef | null>(null);
  const { selections, actives, onNodeClick, onCanvasClick } = useSelection({
    ref: graphRef,
    nodes: nodes,
    edges: edges,
    pathSelectionType: 'all',
    focusOnSelect: false
	});

  return (
    <GraphCanvas
      nodes={nodes}
      edges={edges}

      layoutType='forceDirected2d'

      edgeInterpolation='curved'

      sizingType='attribute'
      sizingAttribute='days'
      minNodeSize={7}
      maxNodeSize={120}

			ref={graphRef}
			selections={selections}
			actives={actives}
			onCanvasClick={onCanvasClick}
			onNodeClick={onNodeClick}
    />
  );
}
export default TravelGraph;
