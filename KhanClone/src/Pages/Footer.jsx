import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer-area bg-gray-900 text-white shadow-xl">
        <div className="container pt-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 pl-5">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Exams</h3>
              <a href="/explore/upsc-state-psc" className="block mb-2">UPSC & State PSC</a>
              <a href="/explore/ssc" className="block mb-2">SSC</a>
              <a href="/explore/defence-and-police" className="block mb-2">Defence | Police</a>
              <a href="/explore/railway-exams" className="block mb-2">Railway Exams</a>
              <a href="/explore/gk-gs-foundation" className="block mb-2">Foundation</a>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold">Exams Syllabus</h3>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-auto my-1">
                  <a href="/syllabus/upsssc-pet-syllabus" className="text-sm hover:underline">UPSSSC PET SYLLABUS</a>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white">Resources</h3>
              <a href="/upsc-previous-year-questions" className="block my-1 hover:text-gray-300">UPSC Previous Year Question Papers</a>
              <a href="/news-highlights" className="block my-1 hover:text-gray-300">Daily News Highlights</a>
              <a href="/current-affairs" className="block my-1 hover:text-gray-300">Current Affairs</a>
              <a href="/news-highlights/directories" className="block my-1 hover:text-gray-300">News Highlights Directories</a>
              <a href="/kgs-ias-online-tests" className="block my-1 hover:text-gray-300">KGS-IAS Open Test</a>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="text-white mb-4">NCERT Books</h3>
              <div className="w-full md:w-1/3 lg:w-1/6 my-1">
                <a href="/ncert-books-pdf/class-6">NCERT Books Class 6</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area bg-gray-800">
          <div className="container">
            <div className="row items-center">
              <div className="col-lg-6 col-md-6">
                <p className="text-sm text-gray-500"><i className="bx bx-copyright"></i> Copyright 2024 <a target="_blank" href="https://khanglobalstudies.com/" className="text-blue-500">KhanGlobalStudies</a></p>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="flex justify-end space-x-4 text-sm text-gray-500">
                  <li><a href="/privacy-policy" className="hover:text-blue-500">Privacy Policy</a></li>
                  <li><a href="/terms-of-service" className="hover:text-blue-500">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="lines bg-gray-800">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Footer;