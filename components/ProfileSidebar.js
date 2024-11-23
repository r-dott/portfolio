import { FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaOrcid } from 'react-icons/fa';

export default function ProfileSidebar() {
  return (
    <div className="text-center mb-8 md:mb-0">
      <img 
        src= "dp.jpg"
        alt="Profile"
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold mb-2">Rohan Ravi</h2>
      <p className="text-gray-600 mb-4">Undergraduate Student, CSE, IIT Kanpur</p>
      
      <div className="flex flex-col space-y-2 text-gray-600">
        <a href="https://www.cse.iitk.ac.in/" className="flex items-center justify-center space-x-2 hover:text-gray-800">
          <FaMapMarkerAlt />
          <span>IIT Kanpur, India</span>
        </a>
        <a href="mailto:rohanr21@iitk.ac.in" className="flex items-center justify-center space-x-2 hover:text-gray-800">
          <FaEnvelope />
          <span>iitk-mail</span>
        </a>

        <a href="mailto:rohanra@cse.iitk.ac.in" className="flex items-center justify-center space-x-2 hover:text-gray-800">
          <FaEnvelope />
          <span>cse.iitk-mail</span>
        </a>


        
      </div>
    </div>
  );
}
