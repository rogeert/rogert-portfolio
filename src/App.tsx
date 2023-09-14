import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useRef } from "react";

function App() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div className=" h-screen w-screen">
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={1}
          speed={4}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
      </Parallax>
    </div>
  );
}

export default App;
