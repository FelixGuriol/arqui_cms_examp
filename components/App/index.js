import React from "react";
import Script from "next/script";
import Header from "../Header";
import Footer from "../Footer";

import ImageBanner from "../ImageBanner/ImageBanner";

const components = {
    image_banner: ImageBanner,
};

function App({ config, extra }) {
    const header = config.use_header ? (
        <Header config={config.layout.header}></Header>
    ) : null;
    const footer = config.use_footer ? (<Footer config={config.layout.footer}></Footer>) : null
    const generateStructure = (item, index) => {
        const Component = components[item];
        if (Component)
            return <Component key={index} config={config.sections[item]} />;
        return null;
    };
    const bd = config?.order ?(config.order.map((item, index) => generateStructure(item, index))):null 

    return (
        <div>
            <Script src="https://cdn.tailwindcss.com" />
            {header}
            <main className="mb-auto ">
                {bd}
            </main>
            {footer}
        </div>
    );
}

export default App;
