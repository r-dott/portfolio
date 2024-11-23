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
            <h1 className="text-3xl font-bold mb-6">Dance</h1>
            I dance. I danced a bit in college, these are some of the videos i feature on.

            {/* YouTube Videos Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
              <div className="space-y-6">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="800"
                    height="300"
                    src="https://www.youtube.com/embed/zTIG8ILxTxI?si=dsri_B7KAfJlCXdN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center text-gray-600 mt-2">
                <strong>Freshers' dance video Y21</strong>     10M views as of November'24.
                </p>

                <div className="aspect-w-16 aspect-h-9">
                <iframe 
                width="800" 
                height="300" 
                src="https://www.youtube.com/embed/pQtdpEIE_mo?si=mwfhdpv6WPtDoJjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className="text-center text-gray-600 mt-2">
                <strong>Freestyle Dance battle 2023:</strong>     At Asia's largest Cultural Fest- Antaragni.
                </p>

                <div className="aspect-w-16 aspect-h-9">
                <iframe width="800" height="300" src="https://www.youtube.com/embed/1lmrFkCgWRw?si=VjHd2Ahl7h9FuDQu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className="text-center text-gray-600 mt-2">
                <strong>Self-choreographed the entire piece</strong>

                </p>

              </div>
            </section>



          {/* </div> */}
        </div>
      </main>
    </div>
  );
}
