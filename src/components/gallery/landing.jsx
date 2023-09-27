import aboutus from '../../assets/aboutMe/aboutus.png';
import '../../pages/about/styles.css'
const Landing = () => {
  return (
    <div className="relative" style={{background:"#000"}}>
      {/* Background Image */}
      <img
        src={aboutus}

        alt="Background"
        className="w-full h-80 md:h-375 object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-75 text-white font-fontawesome">
      <div className='flex'>
      <a href="/" className="text-s mr-3">HOME</a>
      ◉
        <a href="/" className="text-s ml-3">PAGE</a>

      </div>
        <h1 className="text-6xl text-center font-bold mb-4 mt-5">Gallery</h1>
        
      </div>
    </div>

  );
};

export default Landing;
