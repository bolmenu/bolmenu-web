import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bolmenu | Under Construction</title>
        <meta name="description" content="Bolmenu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <article>
          <img srcSet="logo@2x.png 2x" src="logo.png" />
          <h1>Bolmenu</h1>
          <h2>Under Construction</h2>
          <p>It will be at your service as soon as possible.</p>
        </article>
      </div>
    </>
  );
}
