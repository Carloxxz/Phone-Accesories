import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1502239608882-93b729c6af43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="rounded-xl w-72 mx-auto my-auto mt-10 shadow-lg">
          <div className="bg-gradient-to-r from-[#3B82F6] via-[#9333EA] to-[#6D28D9] rounded-lg border-4 border-gradient-blue-purple">
            <div className="flex flex-col justify-between h-full bg-white rounded-lg p-4">
              <div className="photo-wrapper mb-4">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="https://www.zarla.com/images/zarla-caseify-1x1-2400x2400-20210908-6hrp8ty399tghbm97kwq.png?crop=1:1,smart&width=250&dpr=2"
                  alt="Company Logo"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Fundas de Celular</h3>
                <p className="text-center text-gray-600 text-sm mt-2">
                  Empresa dedicada a la venta de accesorios telefónicos, como audífonos, y fundas, para diversos modelos. ¡Contáctanos o visítanos!
                </p>
                <table className="text-xs my-3 w-full">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold flex items-center border-b">
                        <FaMapMarkerAlt className="mr-1" /> Address
                      </td>
                      <td className="px-2 py-2 border-b">And Ejido 32</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold flex items-center border-b">
                        <FaPhoneAlt className="mr-1" /> Phone
                      </td>
                      <td className="px-2 py-2 border-b">+977 9955221114</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold flex items-center border-b">
                        <FaFacebook className="mr-1" /> Facebook
                      </td>
                      <td className="px-2 py-2 border-b">Celulares Pro</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center space-x-3 mt-3">
                  <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://wa.me/1234567890" className="text-green-600 hover:text-green-800">
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
