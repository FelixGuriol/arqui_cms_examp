import IndexRetail from "../themes/theme_retail/pages/index";
import IndexDefault from "../themes/theme_default/pages/index";

function Home({ theme }) {
  if (theme == "theme_retail") {
    return <IndexRetail />;
  } else {
    return <IndexDefault />;
  }
}

export async function getStaticProps(context) {
  const theme = process.env.SELECTED_THEME;
  console.log("theme", theme);
  return { props: { theme } };
}

export default Home;
