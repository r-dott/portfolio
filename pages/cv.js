import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="md:grid md:grid-cols-[300px_1fr] md:gap-8">
          <ProfileSidebar />
          
          <div className="space-y-8">
            <h1 className="text-3xl font-bold mb-6">CV</h1>

            <section>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <ul className="space-y-3">
                <li>Ph.D, Computer Science at Indiana University, Bloomington, 2016-2021</li>
                <li>M.Sc, Computer Science at Saarland University, 2012- 2015</li>
                <li>B.Tech, Computer Science and Engineering at Amrita Vishwa Vidyapeetham, 2008-2012</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Work experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl mb-2">Assistant Professor, September 2023 - present</h3>
                  <p className="text-gray-700 ml-4">Indian Institute of Technology, Kanpur</p>
                </div>
                
                <div>
                  <h3 className="text-xl mb-2">Postdoctoral Fellow, September 2021 - August 2023</h3>
                  <p className="text-gray-700 ml-4">University of Waterloo</p>
                  <p className="text-gray-700 ml-4">Supervisor: Ian Goldberg</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Publications</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="text-lg hover:text-blue-600">
                    <a href="#" className="text-blue-500">Massively parallel algorithms and hardness for single-linkage clustering under ℓp-distances</a>
                  </h3>
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}