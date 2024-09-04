const ContactUs = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
      <div className="flex flex-col space-y-4">
        <h3 className="text-white text-lg font-bold">Contact Us</h3>
        <div className="flex flex-col space-y-3">
          <a
            href="mailto:jakirhossaimd540@gmail.com"
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
                d="M21.75 8.25v9.75a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V8.25m19.5 0V6.75a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25v1.5m19.5 0l-9.75 6.75L3 8.25"
              />
            </svg>
            jakirhossaimd540@gmail.com
          </a>
          <a
            href="tel:+8801707372220"
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
                d="M3.75 6.75A2.25 2.25 0 016 4.5h2.25c.574 0 1.125.204 1.548.57l1.454 1.305a2.25 2.25 0 01.447 2.754l-.697 1.393a2.25 2.25 0 00.338 2.578l2.86 2.86a2.25 2.25 0 002.578.338l1.393-.697a2.25 2.25 0 012.754.447l1.305 1.454c.366.423.57.974.57 1.548V18a2.25 2.25 0 01-2.25 2.25H18a15.75 15.75 0 01-15.75-15.75V6.75z"
              />
            </svg>
            +8801707372220
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
