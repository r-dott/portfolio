import Navbar from '../components/Navbar';
import ProfileSidebar from '../components/ProfileSidebar';

export default function Publications() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* <div className="md:grid md:grid-cols-[300px_1fr] md:gap-8"> */}
          {/* <ProfileSidebar /> */}
          
          <div className="space-y-8">
            <h1 className="text-3xl font-bold mb-6">Tennis</h1>
            I have played tennis since I was 8. I played at a national level until age 16. In college I got to play inter college tennis at a competitive level. And also found amazing people in the team :)

            <div className="grid grid-cols-2 gap-4">
                <img 
                src="sportech.jpg" 
                alt="Tennis Image 1" 
                className="w-full h-auto rounded-lg shadow-md object-cover"
                />
                <img 
                src="diwalitennis.jpg" 
                alt="Tennis Image 2" 
                className="w-full h-auto rounded-lg shadow-md object-cover"
                />
                <img 
                src="interiit.jpg" 
                alt="Tennis Image 3" 
                className="w-full h-auto rounded-lg shadow-md object-cover"
                />
                <img 
                src="kanpuropen.jpg" 
                alt="Tennis Image 4" 
                className="w-full h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            
            



          {/* </div> */}
        </div>
      </main>
    </div>
  );
}
