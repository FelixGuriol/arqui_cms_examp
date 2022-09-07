import Retail from "../themes/theme_retail/pages/products";
import Default from "../themes/theme_default/pages/products";

function ProductList({ theme }) {
  if (theme == "theme_retail") {
    return <Retail />;
  } else {
    return <Default />;
  }
}

export async function getServerSideProps(context) {
  const theme = process.env.SELECTED_THEME;
  console.log("theme", theme);
  return { props: { theme } };
}

export default ProductList;

