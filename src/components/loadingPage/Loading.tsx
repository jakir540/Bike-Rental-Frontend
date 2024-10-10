const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313]">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>

        <h1 className="mt-6 text-3xl font-bold text-white tracking-widest">
          Loading...
        </h1>

        <p className="mt-2 text-lg text-gray-200">
          Please wait, your content is on the way.
        </p>
      </div>
    </div>
  );
};

export default Loading;
