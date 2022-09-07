const classNames = (...classes) => classes.filter(Boolean).join(" ");

function Text({ config }) {
  return (
    <p
      className={classNames(
        config.settings.text_style == "title" ? "text-xl" : "",
        config.settings.text_style == "body" ? "text-base" : "",
        "mt-3 text-white"
      )}
    >
      {config.settings.text}
    </p>
  );
}

export default Text;
