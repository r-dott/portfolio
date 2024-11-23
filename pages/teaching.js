import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';

export default function Teaching() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="md:grid md:grid-cols-[300px_1fr] md:gap-8">
          <ProfileSidebar />
          
          <div className="space-y-8">
            <h1 className="text-3xl font-bold mb-6">Teaching</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-blue-500 hover:text-blue-600">
                  <a href="#">Secure Computation</a>
                </h2>
                <p className="text-gray-600 italic mb-4">
                  Postgraduate course, IIT Kanpur, Computer Science and Engineering, 2024
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">About the Course</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The early pioneers of the Internet envisioned it would be the great equalizer and lead to the complete democratization of 
                    the online world—nearly four decades since the reality has diverged considerably from their grand vision. Rather than the 
                    bastion of freedom and free speech, which the early visionaries envisioned, the Internet has become a dangerous place. 
                    Data theft leading to identity theft has become commonplace. Despite these challenges, it is undeniable that the Internet 
                    has revolutionized our lives by making day-to-day tasks easier and connecting people worldwide — however, the risks 
                    associated with the Internet loom large. Secure Computation is a promising technique that allows users to keep their data 
                    private without sacrificing the Internet's benefits.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-500 hover:text-blue-600">
                  <a href="#">Cryptographic Techniques for Privacy Preservation</a>
                </h2>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}