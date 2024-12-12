import Contact from "./Contact";
import ubaid from "../img/ubaid.jpeg"
function About(){

    return(
        <>
              <div className="max-w-4xl  m-auto relative">
    <section className='flex flex-col bg-green-900 sm:flex-row gap-10 mt-11'>
    <div className="flex items-center  justify-center  flex-col h-screen w-screen bg-gradient-to-r ">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl shadow-lg text-center max-w-md w-fit sm:w-full">
        <img
          src={ubaid}  // Replace with your image URL
          className="mx-auto w-32 h-32 rounded-full mb-6 shadow-md"
        />
        <h1 className="text-lg lg:text-3xl font-semibold text-white mb-4">Get in Touch</h1>
        <p className="text-white mb-6">
          I’d love to hear from you! Click the button below to connect with me.
        </p>
        <a
          href="https://wa.me/qr/LT2MH7J74GTHN1"
          className="inline-block text-white bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 font-semibold py-3 px-6 rounded-lg "
        >
          Contact Me
        </a>
      </div>
      <div>
        </div>
    
    </div>
    </section>
    </div>
    <Contact/>
        </>
    )
}
export default About;