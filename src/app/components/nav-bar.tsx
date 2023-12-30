import Link from 'next/link';

function NavBar() {
    return (
      <footer className="fixed bottom-0 w-full">
        <nav className="flex justify-center p-4 bg-gray-100 dark:bg-gray-800">
          <Link href="/faq"><span className="mx-2">FAQ</span></Link>
          <Link href="/support"><span className="mx-2">Support</span></Link>
          <Link href="/privacy-policy"><span className="mx-2">Privacy Policy</span></Link>
        </nav>
      </footer>
    );
  }
  
  export default NavBar;
  