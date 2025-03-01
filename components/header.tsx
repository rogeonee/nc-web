import Link from 'next/link';
import EnvCard from './cards/envcard';
import { ModeToggle } from './mode-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 ">
      <EnvCard />
      <Link href="/" rel="nofollow" className="mr-2 font-bold">
        Nyusha Chat with Gemini
      </Link>
      <ModeToggle />
    </header>
  );
}
