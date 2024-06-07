import Head from 'next/head';
import BrailleList from './components/BrailleList';
import Link from 'next/link';
import { getBrailleLetters } from './functions/functions';

const Home = async () => {
  const brailleData = await getBrailleLetters();

  return (
    <>
      <Head>
        <title>Learn Braille - Your Guide to Master Braille</title>
        <meta name="description" content="Learn Braille with our comprehensive guide and interactive exercises. Perfect for beginners and advanced learners alike." />
        <meta name="keywords" content="Braille, learn Braille, Braille alphabet, Braille exercises" />
        <meta property="og:title" content="Learn Braille - Your Guide to Master Braille" />
        <meta property="og:description" content="Learn Braille with our comprehensive guide and interactive exercises. Perfect for beginners and advanced learners alike." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.learn-braille.com/" />
        <h1 className="text-center text-4xl font-bold">Learn Braille</h1>
      </Head>
      <div>
        <header className="bg-blue-600 text-white py-6">
          <h1 className="text-center text-4xl font-bold">Learn Braille</h1>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <section className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Learn Braille</h2>
            <p className="text-lg">Explore the Braille alphabet and test your knowledge with our interactive exercises.</p>
            <Link href="/exercise" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
              Test Your Knowledge
            </Link>
          </section>
          <section className="z-10 w-full max-w-5xl font-mono text-sm lg:flex">
            <BrailleList brailleData={brailleData} />
          </section>
        </main>
        <footer className="text-black-500 py-4 text-center">
          <p>&copy; 2024 Learn Braille. All rights reserved.</p>
        </footer>
      </div>

    </>
  );
};

export default Home;
