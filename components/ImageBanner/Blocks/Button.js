const classNames = (...classes) => classes.filter(Boolean).join(" ");

function Button({ config }) {
  return (
    <a
      href="#"
      className={classNames(
        config.settings.button_style_secondary_1
          ? "bg-white text-gray-900 hover:bg-gray-100"
          : " bg-gray-400 text-white hover:bg-gray-500",
        "mt-8 block w-full rounded-md border border-transparent py-3 px-8 text-base font-medium sm:w-auto"
      )}
    >
      {config.settings.button_label_1}
    </a>
  );
}

export default Button;
