import styles from "../styles/Home.module.css";

import Layout_base from "../themes/theme_retail/components/layouts/Layout_base";

function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout_base>{page}</Layout_base>;
};

export async function getStaticProps(context) {
  /* switch(process.env.PROJECT_ENV) {
    case 'project1': 
      // fetch project 1 data
    case 'project2': 
      // fetch project 2 data
    case 'project3': 
      // fetch project 3 data
  }
  return {
    props: {...}
  } */
  console.log(process.env.SELECTED_THEME);
  return { props: {} };
}

export default Home;
