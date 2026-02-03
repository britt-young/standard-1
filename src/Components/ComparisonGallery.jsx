import ImageCompare from "./ImageCompare";

const ComparisonGallery = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center py-20">
        <div>
          <h2 className="mb-2 text-center">
            The Western Landscaping Difference
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 p-4">
          <ImageCompare />
          <ImageCompare />
          <ImageCompare />
          <ImageCompare />
        </div>
      </div>
    </div>
  );
};

export default ComparisonGallery;
