import SectionTitle from "../contants/SectionTitle";
import featuredImg from "../assets/home/featured.jpg"
import "../contants/featured.css"
import Container from "./Container";
const Featured = () => {
      return (
            <Container>
                  <div className="featured-item bg-fixed bg-slate-500 opacity-85 text-white mt-20">
                        <section className="py-10">
                              <SectionTitle
                                    topHeading={"Check it out"}
                                    middleHeading={"From our Menu"}
                              />
                        </section>
                        <div className="md:flex justify-center items-center px-20 pb-20 pt-8">
                              <div>
                                    <img className="w-[500px] h-[300px]" src={featuredImg} alt="" />
                              </div>
                              <div className="md:ml-16">
                                    <h1 className="text-xl">January 28, 2025</h1>
                                    <h1 className="uppercase text-xl">Where can i get some?</h1>
                                    <h1 className="mt-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                                          <br />
                                          voluptate facere, deserunt dolores maiores quod nobis quas
                                          <br />
                                          quasi. Eaque repellat recusandae ad laudantium tempore
                                          <br />
                                          consequatur consequuntur omnis ullam maxime tenetur.</h1>
                                    <button className="btn btn-outline border-0 border-b-4 mt-6 text-white">READ MORE</button>
                              </div>
                        </div>
                  </div>
            </Container>
      );
};

export default Featured;