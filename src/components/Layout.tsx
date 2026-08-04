import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/faq', label: 'FAQ' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
];

export default function Layout({ children }: LayoutProps) {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#333]">
      <nav className="fixed top-0 z-50 w-full border-b border-[#eef3eb] bg-white/95 px-4 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/yFgsqx49/IMG-20251112-WA0082.jpg"
              alt="May's Chills logo"
              className="h-10 w-auto sm:h-12"
            />
            <span className="text-lg font-semibold text-[#333] sm:text-xl">May's Chills</span>
          </Link>
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${isActive ? 'text-[#7ed321]' : 'text-[#333] hover:text-[#7ed321]'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {loading ? null : user ? (
              <button type="button" onClick={() => signOut()} className="rounded-full border border-[#e8f5e8] px-3 py-2 text-sm font-semibold">
                Sign out
              </button>
            ) : (
              <button type="button" onClick={() => signInWithGoogle()} className="rounded-full bg-[#7ed321] px-3 py-2 text-sm font-semibold text-white">
                Sign in
              </button>
            )}
            <Link to="/shop" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7ed321] text-lg text-white">
              🛒
            </Link>
          </div>
        </div>
      </nav>
      <main className="pt-20 sm:pt-24">{children}</main>
      <footer className="bg-[#1a1a1a] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <h3 className="mb-3 text-xl font-semibold">May&apos;s Chills</h3>
            <p className="max-w-md text-sm text-gray-300">
              Fresh meals, healthy options, and fast delivery for your everyday cravings.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <Link to="/shop" className="hover:text-[#7ed321]">Shop</Link>
            <Link to="/faq" className="hover:text-[#7ed321]">FAQ</Link>
            <Link to="/privacy" className="hover:text-[#7ed321]">Privacy</Link>
            <Link to="/terms" className="hover:text-[#7ed321]">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
