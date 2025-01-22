import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import img from "../../assets/alfazahmed.jpg";

function Hero() {
  return (
    <div
      id="home"
      className="hero flex items-center gap-6  max-[448px]:gap-3 flex-col font-Lora mt-20 max-[448px]:mt-10"
    >
      <img
        className="rounded-[10px] w-56  max-[448px]:w-28"
        src={img}
        alt="img"
      />
      <h1 className="text-center sm:w-[450px] sm:text-4xl max-[448px]:w-[390px] max-[375px]:w-full lg:w-[870px] lg:text-7xl md:text-5xl max-[448px]:text-3xl max-[375px]:text-2xl  font-semibold md:w-[650px] ">
        <span className="text-[#10bf62]">
          Hello, <br /> Welcome to my Profile!
        </span>{" "}
        {""}
      </h1>
      <p className="lg:w-[650px] md:w-[490px] sm:w-[430px] max-[448px]:w-[270px] max-[448px]:text-xs text-center lg:text-xl md:text-base sm:text-sm leading-10">
        I am Alfaz, I am a professional Creative & Minimalist Brand Identity &
        Logo Designer, Completed 450+ all projects in my 5+ years of experience.
      </p>
      <div className="flex items-center gap-6 mb-12 text-2xl font-medium hero-action">
        <div className="lg:text-xl md:text-base sm:text-sm max-[448px]:text-xs max-[448px]:py-2 hero-connect lg:py-5 lg:px-10 md:py-3 md:px-6 sm:py-2 px-4 rounded-[50px] cursor-pointer bg-[#10bf62] text-fuchsia-100">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <a
          href="../../assets/alfazAhmed_CV.pdf"
          download="alfazAhmed_CV"
          className="lg:text-xl md:text-base sm:text-sm max-[448px]:text-xs max-[448px]:py-2 max-[448px]:hidden hero-resume lg:py-5 lg:px-16 md:py-3 md:px-8 sm:py-2 px-4 border-2 cursor-pointer rounded-[50px]"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Hero;

