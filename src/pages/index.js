import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/">
          Acessar Manual do Sistema CNIEP 📘
        </Link>

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Bem-vindo"
      description="Manual do CNIEP – Cadastro Nacional de Inspeções nos Estabelecimentos Penais">
      <HomepageHeader />
      {/* Se não usar HomepageFeatures, remova a linha abaixo */}
      {/* <main><HomepageFeatures /></main> */}
    </Layout>
  );
}
