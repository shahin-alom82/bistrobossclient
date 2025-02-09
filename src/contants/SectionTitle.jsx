
const SectionTitle = ({ topHeading, middleHeading }) => {
      return (
            <div className="justify-center items-center text-center">
                  <h1 className="text-yellow-600 tracking-wide">--- {topHeading} ---</h1>
                  <p className="uppercase mx-auto text-3xl border-t-4 border-b-4 mt-2 font-medium text-gray-800 border-t-gray-300 border-b-gray-300 py-2 w-[330px] text-center">{middleHeading}</p>
            </div>
      );
};

export default SectionTitle;