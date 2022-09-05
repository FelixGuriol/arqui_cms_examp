import styles from "../../../styles/Home.module.css";

import Layout_base from "../components/layouts/Layout_base";

function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to default Theme <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout_base>{page}</Layout_base>;
};

/* export async function getStaticProps(context) {
  console.log(process.env.SELECTED_THEME);
  return { props: {} };
} */

export default Home;
