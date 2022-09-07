import App from "../components/App/index";
import React from 'react'
import { configResolver } from "~/service/theme";

function Home({ config }) {
  return <App config={config} />;
}

export async function getStaticProps(context) {
  const theme = process.env.SELECTED_THEME;
  const config = configResolver(theme,'index','customhost.com')
  return { props: { config } };
}

export default Home;
