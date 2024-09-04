const PrivacyPolicy = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
      <div className="flex flex-col space-y-4">
        <h3 className="text-white text-lg font-bold">Resources</h3>
        <div className="flex flex-col space-y-3">
          <a href="/blog" className="text-white text-base flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2 text-[#DE4313]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18v18H3V3zm2.25 3v2.25H5.25V6.75H6.75zm3 0v2.25H8.25V6.75h1.5zm3 0v2.25h-1.5V6.75h1.5zM6.75 10.5v2.25H5.25V10.5h1.5zm3 0v2.25H8.25V10.5h1.5zm3 0v2.25h-1.5V10.5h1.5zm3-2.25h-1.5v2.25h1.5V8.25zm0 3h-1.5v2.25h1.5v-2.25zm0 3h-1.5v2.25h1.5v-2.25zM6.75 16.5v2.25H5.25v-2.25h1.5zm3 0v2.25H8.25v-2.25h1.5zm3 0v2.25h-1.5v-2.25h1.5z"
              />
            </svg>
            Blog
          </a>
          <a href="/aboutUs" className="text-white text-base flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2 text-[#DE4313]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5zM12 15.75v-1.5m0 0a1.5 1.5 0 01.75-1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75a.75.75 0 00-.75.75m-1.5 1.5a3 3 0 013-3M12 15.75v-1.5m0 0a1.5 1.5 0 01.75-1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75a.75.75 0 00-.75.75m-1.5 1.5a3 3 0 013-3"
              />
            </svg>
            FAQ
          </a>
          <a
            href="/terms-of-service"
            className="text-white text-base flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2 text-[#DE4313]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8.25v7.5m0 0h1.5m-1.5 0h-1.5M12 4.5a4.5 4.5 0 010 9m0 0a4.5 4.5 0 01-4.5-4.5m0 0A4.5 4.5 0 0112 9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75z"
              />
            </svg>
            Terms of Service
          </a>
          <a
            href="/privacy-policy"
            className="text-white text-base flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2 text-[#DE4313]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3a4.5 4.5 0 00-4.5 4.5v2.25H6a.75.75 0 00-.75.75v9a.75.75 0 00.75.75h12a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-1.5V7.5A4.5 4.5 0 0012 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12v1.5m6-1.5v1.5"
              />
            </svg>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
