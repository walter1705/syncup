import Link from 'next/link';
import Button from '@/components/Button/Button';

export default function Header() {
  return (
    <header className="bg-[var(--foreground)]  sticky top-0 z-50 backdrop-blur-sm shadow-sm ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            RSync
          </Link>

          <div className="flex gap-4">
            <Button href="/login" variant="secondary">
              Log In
            </Button>
            <Button href="/login" variant="primary">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
