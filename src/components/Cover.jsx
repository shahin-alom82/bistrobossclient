import Container from "./Container";

const Cover = ({ image, topMenu, middleMenu }) => {
      return (
            <div className="hidden md:block">
                  <Container>
                        <div
                              className="h-[700px] relative bg-fixed"
                              style={{
                                    backgroundImage: `url("${image}")`,
                              }}>
                              <div className="hero-overlay bg-opacity-60"></div>
                              <div className="absolute bottom-32 left-52 bg-black opacity-70 text-white text-center  py-32 px-72 hidden md:block">
                                    <h1 className="lg:text-5xl uppercase tracking-wide font-bold">{topMenu}</h1>
                                    <p className="mt-6 tracking-wide uppercase">{middleMenu}</p>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Cover;