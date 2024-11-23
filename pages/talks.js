import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';

export default function Talks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="md:grid md:grid-cols-[300px_1fr] md:gap-8">
          <ProfileSidebar />
          
          <div className="space-y-8">
            <h1 className="text-3xl font-bold mb-6">Talks and presentations</h1>

            <div className="space-y-8">
              <article>
                <h2 className="text-xl mb-2">
                  <a href="#" className="text-blue-500 hover:text-blue-600">Recommendation Systems meet PIR</a>
                </h2>
                <p className="text-gray-500 mb-1">March 01, 2014</p>
                <p className="text-gray-700">Short Talk, Sandia Labs, Albequerque, NM, USA</p>
              </article>

              <article>
                <h2 className="text-xl mb-2">
                  <a href="#" className="text-blue-500 hover:text-blue-600">Privacy Preserving Collaborations</a>
                </h2>
                <p className="text-gray-500 mb-1">February 01, 2014</p>
                <p className="text-gray-700">Talk, Microsoft Research, Bengaluru, Karnataka, India</p>
              </article>

              <article>
                <h2 className="text-xl mb-2">
                  <a href="#" className="text-blue-500 hover:text-blue-600">Sabre: A Lightweight Construction for Speedier Ripostes</a>
                </h2>
                <p className="text-gray-500 mb-1">March 01, 2013</p>
                <p className="text-gray-700">Talk, Queens University, Online</p>
                <p className="text-gray-600">CSearch Conference</p>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}