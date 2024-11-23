import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';

export default function Publications() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="md:grid md:grid-cols-[300px_1fr] md:gap-8">
          <ProfileSidebar />
          
          <div className="space-y-8">
            <h1 className="text-3xl font-bold mb-6">Publications</h1>

            <section>
              <h2 className="text-2xl font-bold mb-4">Journal Publications</h2>
              <div className="space-y-6">
                <article>
                  <h3 className="text-lg mb-2">[J2] <a href="#" className="text-blue-500 hover:text-blue-600">Prac: Round-Efficient 3-Party MPC for Dynamic Data Structures</a></h3>
                  <p className="text-gray-700">Sajin Sasy, Adithya Vadapalli, Ian Goldberg</p>
                  <p className="text-gray-600">Proceedings on Privacy Enhancing Technologies, Vol. 2024, No. 3, July 2024.</p>
                </article>

                <article>
                  <h3 className="text-lg mb-2">[J1] <a href="#" className="text-blue-500 hover:text-blue-600">You May Also Like... Privacy: Recommendation Systems Meet PIR</a></h3>
                  <p className="text-gray-700">Adithya Vadapalli, Fatanneh Bayatbabolghani, Ryan Henry</p>
                  <p className="text-gray-600">Proceedings on Privacy Enhancing Technologies, 2021</p>
                </article>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Conference Publications</h2>
              <div className="space-y-6">
                <article>
                  <h3 className="text-lg mb-2">[C4] <a href="#" className="text-blue-500 hover:text-blue-600">Grotto: Screaming fast (2 + 1)-PC for Z via (2, 2)-DPFs</a></h3>
                  <p className="text-gray-700">Kyle Storrier, Adithya Vadapalli, Alan Lyons, Ryan Henry</p>
                  <p className="text-gray-600">30th ACM Conference on Computer and Communications Security (CCS)</p>
                </article>

                <article>
                  <h3 className="text-lg mb-2">[C3] <a href="#" className="text-blue-500 hover:text-blue-600">Duoram: A Bandwidth-Efficient Distributed ORAM for 2- and 3-Party Computation</a></h3>
                  <p className="text-gray-700">Adithya Vadapalli, Ryan Henry, Ian Goldberg</p>
                  <p className="text-gray-600">32nd USENIX Security Symposium, August 2023</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}