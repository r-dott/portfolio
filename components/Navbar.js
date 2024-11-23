import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-800 hover:text-gray-600">
            Rohan Ravi
          </Link>
          <div className="flex space-x-6">
            {/* <Link href="/publications" className="text-gray-600 hover:text-gray-800">Publications</Link>
            <Link href="/talks" className="text-gray-600 hover:text-gray-800">Talks</Link>
            <Link href="/teaching" className="text-gray-600 hover:text-gray-800">Teaching</Link>
            <Link href="/cv" className="text-gray-600 hover:text-gray-800">CV</Link> */}
            <Link href="/" className="text-gray-600 hover:text-gray-800">Academics</Link>
            <Link href="/bio" className="text-gray-600 hover:text-gray-800">Personal Bio</Link>
            <Link href="/dance" className="text-gray-600 hover:text-gray-800">Dance</Link>
            <Link href="/tennis" className="text-gray-600 hover:text-gray-800">Tennis</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}