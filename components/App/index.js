import React from "react";
import Script from "next/script";
import Header from "../Header";

import ImageBanner from "../ImageBanner/ImageBanner";

const components = {
  image_banner: ImageBanner,
};

function App({ config, extra }) {
  const header = config.use_header ? (
    <Header config={config.layout.header}></Header>
  ) : null;

  const generateStructure = (item, index) => {
    const Component = components[item];
    if (Component)
      return <Component key={index} config={config.sections[item]} />;
    return null;
  };

  return (
    <div>
      <Script src="https://cdn.tailwindcss.com" />
      {header}
      {config.order.map((item, index) => generateStructure(item, index))}
      <h1 className="text-3l underline">hla dude</h1>
    </div>
  );
}

export default App;
