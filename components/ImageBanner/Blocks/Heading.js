const classNames = (...classes) => classes.filter(Boolean).join(" ");

function Heading({ config }) {
  return (
    <h2
      className={classNames(
        config.settings.heading_size == "h1" ? "text-2xl sm:text-3xl" : "",
        config.settings.heading_size == "h0" ? "text-3xl sm:text-4xl" : "",
        " font-bold tracking-tight text-white"
      )}
    >
      {config.settings.heading}
    </h2>
  );
}

export default Heading;
