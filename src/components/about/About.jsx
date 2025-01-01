import aboutImg from "../../assets/user_icon1.png";
import "./About.css";
function About() {
  return (
    <div
      id="about"
      className="about font-Lora flex items-center justify-center flex-col lg:gap-12 md:gap-6 lg:my-14 md:my-7 max-[448px]:mx-7 mx-16"
    >
      <h2 className="px-7 lg:text-7xl font-semibold md:text-6xl max-[448px]:text-4xl whitespace-nowrap">
        About Me
      </h2>
      <div className="about-section flex gap-20 lg:gap-10 md:gap-0 max-[448px]:gap-0">
        <div className="mt-3 about-left ">
          <img
            className="max-[1440px]:object-cover max-[1440px]:w-[850px] max-[1440px]:h-[400px] max-[1024px]:w-[950px] max-[1024px]:h-[450px] max-[1024px]:object-cover max-[768px]:hidden"
            src={aboutImg}
            alt="img"
          />
        </div>
        <div className="about-right flex lg:gap-12 md:gap-6 max-[448px]:gap-5 flex-col mt-4">
          <div className="about-para flex flex-col gap-5 text-xl font-medium  max-[448px]:gap-2 max-[448px]:text-justify">
            <p className="max-[448px]:text-sm mr-24 max-[448px]:mr-0">
              I am Alfaz, I am a professional Creative & Minimalist Brand
              Identity & Logo Designer, I create logo designs strategies.
              🙇🙇Completed 450+ all projects in my 5+ years of experience.
              😮😮😮 I create custom designs by understanding the client&apos;s
              needs. My goal is to satisfy you with high quality work.
            </p>
          </div>

          <div className="flex flex-col about-skills lg:gap-5 md:gap-2 ">
            <div className="transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5 max-[320px]:gap-2">
              <p className="min-w-[150px] max-[448px]:min-w-[70px] lg:text-2xl md:text-[22px] max-[448px]:text-xs font-medium">
                Illustrator
              </p>
              <hr
                className="outline-none border-none w-[50%] h-3 max-[448px]:h-1 rounded-[50px] bg-gradient-to-r bg-[#10bf62]"
                style={{ width: "67%" }}
              />
            </div>
            <div className="transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5 max-[320px]:gap-2">
              <p className="min-w-[150px] max-[448px]:min-w-[70px] lg:text-2xl md:text-[22px] max-[448px]:text-xs font-medium">
                Photoshop
              </p>
              <hr
                className="outline-none border-none w-[50%] h-3 max-[448px]:h-1 rounded-[50px] bg-gradient-to-r bg-[#10bf62]"
                style={{ width: "67%" }}
              />
            </div>
            <div className="transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5 max-[320px]:gap-2">
              <p className="min-w-[150px] max-[448px]:min-w-[70px] lg:text-2xl md:text-[22px] max-[448px]:text-xs font-medium">
                InDesign
              </p>

              <hr
                className="outline-none border-none w-[50%] h-3 max-[448px]:h-1 rounded-[50px] bg-gradient-to-r bg-[#10bf62]"
                style={{ width: "67%" }}
              />
            </div>
            <div className="transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5 max-[320px]:gap-2">
              <p className="min-w-[150px] max-[448px]:min-w-[70px] lg:text-2xl md:text-[22px] max-[448px]:text-xs font-medium">
                After Effects{" "}
              </p>
              <hr
                className="outline-none border-none w-[50%] h-3 max-[448px]:h-1 rounded-[50px] bg-gradient-to-r bg-[#10bf62]"
                style={{ width: "67%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about-acbS flex justify-around w-[100%] mb-20 max-[448px]:mt-3">
        <div className="about-acb transition-all ease-linear duration-500 hover:scale-105 flex flex-col items-center gap-2.5 max-[448px]:gap-0">
          <h2 className="lg:text-5xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r bg-[#10bf62]">
            05+
          </h2>
          <p className="lg:text-xl md:text-base max-[448px]:text-[7px] max-[320px]:text-[5px] font-medium">
            Years OF EXPERIENCE
          </p>
        </div>
        <span className="block  w-1 h-30 bg-gradient-to-b bg-[#10bf62]"></span>
        <div className="about-acb transition-all ease-linear duration-500 hover:scale-105 flex flex-col items-center gap-2.5 max-[448px]:gap-0">
          <h2 className="lg:text-5xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r bg-[#10bf62]">
            500+
          </h2>
          <p className="lg:text-xl md:text-base max-[448px]:text-[7px] max-[320px]:text-[5px] font-medium">
            PROJECTS COMPLETED
          </p>
        </div>
        <span className="block  w-1 h-30 bg-gradient-to-b bg-[#10bf62]"></span>
        <div className="about-acb transition-all ease-linear duration-500 hover:scale-105 flex flex-col items-center gap-2.5 max-[448px]:gap-0">
          <h2 className="lg:text-5xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r bg-[#10bf62]">
            450+
          </h2>
          <p className="lg:text-xl md:text-base max-[448px]:text-[7px] max-[320px]:text-[5px] font-medium">
            HAPPY CLIENTS
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
