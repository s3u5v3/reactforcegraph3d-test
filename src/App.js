import  ForceGraph3D  from "react-force-graph-3d";
import SpriteText from "three-spritetext";

const App = () => {
  const depData = {
    "nodes": [
      { "package": "react-force-graph", "user": "vasturiano" },
      { "package": "force-graph", "user": "vasturiano" },
      { "package": "3d-force-graph", "user": "vasturiano" },
      { "package": "three-render-objects", "user": "vasturiano" },
      { "package": "3d-force-graph-vr", "user": "vasturiano" },
      { "package": "3d-force-graph-ar", "user": "vasturiano" },
      { "package": "aframe-forcegraph-component", "user": "vasturiano" },
      { "package": "three-forcegraph", "user": "vasturiano" },
      { "package": "d3-force-3d", "user": "vasturiano" },
      { "package": "d3-force", "user": "d3" },
      { "package": "ngraph", "user": "anvaka" },
      { "package": "three.js", "user": "mrdoob" },
      { "package": "aframe", "user": "aframevr" },
      { "package": "AR.js", "user": "jeromeetienne" }
    ],
    "links": [
      { "target": "force-graph", "source": "react-force-graph" },
      { "target": "3d-force-graph", "source": "react-force-graph" },
      { "target": "3d-force-graph-vr", "source": "react-force-graph" },
      { "target": "3d-force-graph-ar", "source": "react-force-graph" },
      { "target": "aframe-forcegraph-component", "source": "3d-force-graph-vr" },
      { "target": "aframe-forcegraph-component", "source": "3d-force-graph-ar" },
      { "target": "three-forcegraph", "source": "3d-force-graph" },
      { "target": "three-render-objects", "source": "3d-force-graph" },
      { "target": "three-forcegraph", "source": "aframe-forcegraph-component" },
      { "target": "d3-force-3d", "source": "three-forcegraph" },
      { "target": "ngraph", "source": "three-forcegraph" },
      { "target": "d3-force", "source": "force-graph" },
      { "target": "aframe", "source": "3d-force-graph-vr" },
      { "target": "three.js", "source": "aframe" },
      { "target": "three.js", "source": "3d-force-graph" },
      { "target": "AR.js", "source": "3d-force-graph-ar" },
      { "target": "aframe", "source": "AR.js" }]
  };
  return (

      <ForceGraph3D
          graphData={depData}
          numDimensions='3'
          forceEngine='d3'
          dagMode="lr"
          dagLevelDistance={60}
          nodeId="package"
          nodeAutoColorBy="user"
          linkDirectionalParticles={2}
          linkDirectionalParticleWidth={0.5}
          onNodeClick={node => window.open(`https://github.com/${node.user}/${node.package}`, '_blank')}
          nodeThreeObject={node => {
            const sprite = new SpriteText(node.package);
            sprite.color = node.color;
            sprite.textHeight = 5;
            return sprite;
          }}
        />
  );
};


export default App;
