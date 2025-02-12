import Link from 'next/link';
import EnvCard from './cards/envcard';

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 ">
      <EnvCard />
      <Link href="/" rel="nofollow" className="mr-2 font-bold">
        Nyusha Chat with Gemini
      </Link>
    </header>
  );
}
