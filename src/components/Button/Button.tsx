import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({
  href,
  variant = 'primary',
  children,
}: ButtonProps) {
  const baseStyles =
    'px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 inline-block';
  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg',
    secondary:
      'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105',
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
