const FooterLinks = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
      <div className="flex flex-col space-y-4">
        <h3 className="text-white text-lg font-bold">Quick Links</h3>
        <div className="flex flex-col space-y-3">
          <a href="/" className="text-white text-base flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 mr-2 text-[#DE4313]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
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
                d="M12 21v-6.75m0-2.25v-3m0 0H7.5m4.5 0h4.5M19.5 12v7.5m0 0v.75m-15-8.25h15m-15 7.5h15"
              />
            </svg>
            About Us
          </a>
          <a
            href="/services"
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
                d="M12 3v18m-6-6h12"
              />
            </svg>
            Services
          </a>
          <a href="/contact" className="text-white text-base flex items-center">
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
                d="M3.75 4.5h16.5a.75.75 0 01.75.75v14.25a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75zM21 6.75L12 12 3 6.75M12 12v8.25M12 12l9-5.25"
              />
            </svg>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
