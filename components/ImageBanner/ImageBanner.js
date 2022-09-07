import Button from "./Blocks/Button";
import Heading from "./Blocks/Heading";
import Text from "./Blocks/Text";

const blocks = {
  heading: Heading,
  text: Text,
  button: Button,
};

const classNames = (...classes) => classes.filter(Boolean).join(" ");

export default function ImageBanner({ config }) {
  const generateStructure = (item, index) => {
    const Component = blocks[item];
    if (Component)
      return <Component key={index} config={config.blocks[item]} />;
    return null;
  };

  return (
    <div className="relative flex bg-gray-800 h-[400px] py-6 px-6 sm:px-12 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={config.settings.image}
          alt=""
          className={`h-full w-full object-cover object-center opacity-[.${config.settings.image_overlay_opacity}]`}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
      />
      <div
        className={classNames(
          config.settings.desktop_content_position.includes("bottom-")
            ? "mt-auto"
            : "",
          config.settings.desktop_content_position.includes("center-")
            ? "my-auto"
            : "",
          config.settings.desktop_content_position.includes("top-")
            ? "mb-auto"
            : "",
          config.settings.desktop_content_position.includes("-center")
            ? "mx-auto"
            : "",
          config.settings.desktop_content_position.includes("-right")
            ? "ml-auto"
            : "",
          config.settings.desktop_content_position.includes("-left")
            ? "mr-auto"
            : "",
          "relative flex max-w-3xl flex-col items-center text-center"
        )}
      >
        {config.block_order.map((item, index) =>
          generateStructure(item, index)
        )}
      </div>
    </div>
  );
}
