import ImageCompare from "./ImageCompare";

const ComparisonGallery = () => {
  return (
    <div className="bg-[#f4ffe7] min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center py-20">
        <div>
          <h2 className="mb-2 text-center">Comparison Gallery</h2>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center p-4">
          <ImageCompare />
          <ImageCompare />
          <ImageCompare />
          <ImageCompare className="hidden" />
          <ImageCompare className="hidden" />
          <ImageCompare className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default ComparisonGallery;
