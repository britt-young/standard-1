import ImageCompare from "./ImageCompare";
const ComparisonGallery = () => {
  return (
    <div className="min-h-fit">
      <div className="px-20 mx-auto flex flex-col justify-center items-center py-20">
        <div>
          <h2 className="mb-5 text-center">
            The Western Landscaping Difference
          </h2>
          <p className="text-center mb-10">
            Our team of experienced professionals brings creativity, expertise,
            and a commitment to excellence to every project. We work closely
            with our clients to understand their vision and deliver results that
            exceed expectations.
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="800" className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 p-4">
          <div>
            <ImageCompare />
            <h3 className="text-center text-lg font-medium mb-4">
              Residential Garden Project
            </h3>
          </div>
          <div>
            <ImageCompare />
            <h3 className="text-center text-lg font-medium mb-4">
              Cedar Park Landscaping
            </h3>
          </div>
          <div>
            <ImageCompare />
            <h3 className="text-center text-lg font-medium mb-4">
              Cross Creek Apartment Complex
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonGallery;
