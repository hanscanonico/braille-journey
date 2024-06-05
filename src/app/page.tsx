import fs from 'node:fs';
import path from 'node:path';
import BrailleList from './components/BrailleList';
import Link from 'next/link';
import { getBrailleLetters } from './functions/functions';
import { useRouter } from 'next/router';

const Home = async () => {
  const brailleData = await getBrailleLetters();

  return (
    <div>
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-center text-4xl font-bold">Learn Braille</h1>
      </header>
      <div className="mt-10 text-center">
        <Link href="/exercise" className="bg-blue-500 text-white px-4 py-2 rounded">
          Test Your Knowledge
        </Link>
        {/* <button type="button" onClick={handleTestButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded">
          Test Your Knowledge
        </button> */}
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <BrailleList brailleData={brailleData} />
        </div>
      </main>
    </div>
  );
};

export default Home;
