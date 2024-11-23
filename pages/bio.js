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
            <h1 className="text-3xl font-bold mb-6">Personal Bio</h1>

            <p>
            I am an undergraduate student in Computer Science and Engineering at IIT Kanpur, deeply passionate about cryptography, secure multiparty computation, and advanced algorithms. My academic journey has been shaped by cutting-edge research and collaborative projects with esteemed professors and institutions.
            </p>      

            <p>
            Beyond my professional interests, I am an avid tennis player. I competed at the national level during my formative years and continue to enjoy the sport through inter-college competitions, where I’ve found not only success but also meaningful connections with my teammates. 
            </p>


            <p>
            I also have a love for the arts, particularly dance, where I’ve had the opportunity to perform for large audiences, expressing myself creatively and connecting with others through movement.
            </p>

            
            



          </div>
        </div>
      </main>
    </div>
  );
}
