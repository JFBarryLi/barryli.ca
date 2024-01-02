import { useRef } from 'react';

import { useTheme } from '@mui/material/styles';

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

  const muiTheme = useTheme();

  const theme = {
    canvas: { background: '#fff' },
    node: {
      fill: muiTheme.palette.primary.light,
      activeFill: muiTheme.palette.secondary.light,
      opacity: 1,
      selectedOpacity: 1,
      inactiveOpacity: 0.2,
      label: {
        color: muiTheme.palette.primary.dark,
        stroke: '#fff',
        activeColor: muiTheme.palette.secondary.dark,
      },
      subLabel: {
        color: '#ddd',
        stroke: 'transparent',
        activeColor: muiTheme.palette.primary.main,
      }
    },
    lasso: {
      border: '1px solid #55aaff',
      background: 'rgba(75, 160, 255, 0.1)'
    },
    ring: {
      fill: muiTheme.palette.primary.light,
      activeFill: muiTheme.palette.secondary.light
    },
    edge: {
      fill: muiTheme.palette.primary.main,
      activeFill: muiTheme.palette.secondary.main,
      opacity: 1,
      selectedOpacity: 1,
      inactiveOpacity: 0.1,
      label: {
        stroke: '#fff',
        color: muiTheme.palette.primary.dark,
        activeColor: muiTheme.palette.secondary.dark,
        fontSize: 6
      }
    },
    arrow: {
      fill: muiTheme.palette.primary.main,
      activeFill: muiTheme.palette.secondary.main
    },
    cluster: {
      stroke: muiTheme.palette.primary.main,
      opacity: 1,
      selectedOpacity: 1,
      inactiveOpacity: 0.1,
      label: {
        stroke: '#fff',
        color: muiTheme.palette.primary.dark
      }
    }
  };

  return (
    <GraphCanvas
      nodes={nodes}
      edges={edges}

      layoutType='forceDirected3d'

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

      theme={theme}
    />
  );
}
export default TravelGraph;
