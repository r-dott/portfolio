// import Navbar from '../components/Navbar';
// import ProfileSidebar from '../components/ProfileSidebar';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <main className="max-w-4xl mx-auto px-4 py-8">
//         <div className="md:grid md:grid-cols-[300px_1fr] md:gap-8">
//           <ProfileSidebar />
          
//           <div className="space-y-8">
//             <section>
//               <h1 className="text-3xl font-bold mb-4">Adithya Vadapalli</h1>
//               <p className="text-gray-700 leading-relaxed">
//                 I am an Assistant Professor at the Computer Science and Engineering Department of IIT Kanpur. 
//                 I did my Ph.D. at Indiana University Bloomington. After my Ph.D., I was a Postdoctoral Fellow at 
//                 the University of Waterloo in the CrySP group for two years.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">Students</h2>
//               <p className="text-gray-700">
//                 I am currently seeking Masters and Ph.D. students to work in the area of Privacy Enhancing Technologies.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">Research</h2>
//               <p className="text-gray-700 mb-4">
//                 In my research, I build data-leak-proof systems. In creating such data-leak-proof systems, I 
//                 develop cryptographic primitives and tools that have applications beyond the particular system.
//                 Some of my past and planned research is:
//               </p>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>Meta-Data Protection</li>
//                 <li>Oblivious RAMs</li>
//                 <li>Secure Multi-Party Computation</li>
//               </ul>
//             </section>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="md:grid md:grid-cols-[300px_1fr] md:gap-8">
          <ProfileSidebar />
          
          <div className="space-y-8">
            <section>
              <h1 className="text-3xl font-bold mb-4">Rohan Ravi</h1>
              <p className="text-gray-700 leading-relaxed">
                I am a researcher and developer passionate about Privacy Enhancing Technologies, Secure Multi-Party Computation, and Oblivious Data Structures. 
                <br></br>
                With experience in collaborative research and product development, I aim to contribute to impactful advancements in both academia and industry.
                <br></br>
                I am in the process of exploring even more exciting applications of problem statements, only time and experience shall guide me!
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Bachelor of Technology, Computer Science and Engineering, IIT Kanpur, India, (2021-Present)</li>
                
                <li>Class XII CBSE, Jawahar Vidya Mandir Shyamali, Ranchi, India (2021)</li>

                <li>Class X CBSE, Jawahar Vidya Mandir Shyamali, Ranchi, India (2019)</li>

              </ul>
            </section>
            

            <section>
              <h2 className="text-2xl font-bold mb-4">Research Interests(so far)</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Privacy Enhancing Technologies</li>
                <li>Secure Multi-Party Computation</li>
                <li>ORAM and Distributed ORAM</li>
                <li>Differential Privacy</li>
                <li>Sender Anonymous Communication systems</li>
                <li>and more to be added in the future :-)....</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
              
                <li>
                  <strong>Noise sampling in MPC for DP (Aug 2024 - Present)</strong>

                Research Collaboration | Prof Ryan Henry, University of Calgary, CA
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                    Designed high-fidelity approximation for elementary functions using efficient bit decomposition and modular
                    reduction, over the existing Grotto spline evaluation in MPC.
                    Engineered Quantile function sampling methods(eg; Laplace and Gaussian) for applications in Differential Privacy and lattice-based cryptography, focusing on privacy budget management, sensitivity determination, and experimental validation
                    Co-authoring two research papers: one detailing precision-focused elementary function approximations and the other on quantile sampling for applications in FHE and differential privacy
                    </li>
                  </ul>
                </li>

                <li>
                <strong>Remise: Super-fast Sender Anonymous Communications (Jan 2024 - Nov 2024)</strong>

                  Student Researcher @ Privacy Lab, C3i, IIT Kanpur | Prof. Adithya Vadapalli
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        Proposed novel system of Sender Anonymous communication system based on DPF-based architecture along with Access control. 
                        Built-in auditing using Doerner-shelat algorithm for DPF constructions, constant time access control on database access. Can be instantiated in 2 ways- (1)Riposte like system with small Bulletin Boards, and (2)Anonymous communication channels for anonymous link between readers and writers.
                        Research paper to be published in December 2024.
                      </li>
                    </ul>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
