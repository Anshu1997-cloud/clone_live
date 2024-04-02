import React from 'react';
import Footer from './Footer';

const HeroSection1 = () => {
  return (
    <>
      <div className="container mx-auto mt-16 mb-8">
        <h1 className="text-4xl font-bold animate-bounce">NEET Online and Offline Courses</h1>
      </div>
      <p className='container mx-auto mt-50 mb-3'>UG Exams Preparation</p>
      <div className="container mx-auto mt-1 mb-8 flex justify-end pr-40">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrgg5uLDGcZR23aRObg3jNCH9Ak-1lWeZAy_lzZNgoWSA99_NKU_Vf_K7YifiX_PAXbU&usqp=CAU"
          alt="Online Test Series"
          className="w-70 h-auto mt-[-95px] animate-pulse"
        />
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img src="https://kgs.nyc3.cdn.digitaloceanspaces.com/courses/large/72cf8341-bb34-4df8-8e16-7c35df3d79dc.png" alt="Class 11th Yearlong Patna Offline Bilingual Batch NEET 2026 image" width="100%" />
          <h2 className="text-lg font-bold mb-2">OffLine Batch</h2>
          <p>Class 11th Yearlong Patna Offline Bilingual Batch NEET 2026</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img src="https://kgs.nyc3.cdn.digitaloceanspaces.com/courses/large/adc614a7-5a56-4863-a31c-6bdba8c429e0.png" alt="Class 12th Yearlong Patna Offline Bilingual Batch NEET 2025 image" width="100%" />
          <h2 className="text-lg font-bold mb-2">OffLine Batch</h2>
          <p>Class 12th Yearlong Patna Offline Bilingual Batch NEET 2025</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img src="https://kgs.nyc3.cdn.digitaloceanspaces.com/courses/large/079b2e60-1fee-40f2-b1e1-d04c3596ba3c.png" alt="Dropper Yearlong Bilingual Batch JEE 2025 image" width="100%" />
          <h2 className="text-lg font-bold mb-2">Online Batch</h2>
          <p>Dropper Yearlong Bilingual Batch JEE 2025.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img src="https://kgs.nyc3.cdn.digitaloceanspaces.com/courses/large/c6dc9fb7-8b8e-4491-b765-565e5e582a81.png" alt="Class 11th Yearlong Hindi Batch NEET 2026 image" width="100%" />
          <h2 className="text-lg font-bold mb-2">Offline Batch</h2>
          <p>Class 11th Yearlong Bilingual Batch NEET 2026.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img src="https://kgs.nyc3.cdn.digitaloceanspaces.com/courses/large/079b2e60-1fee-40f2-b1e1-d04c3596ba3c.png" alt="Dropper Yearlong Bilingual Batch JEE 2025 image" width="100%" />
          <h2 className="text-lg font-bold mb-2">Online Batch</h2>
          <p>Dropper Yearlong Batch JEE 2025.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img src="https://kgs.nyc3.cdn.digitaloceanspaces.com/courses/large/985577eb-a016-4cf9-8ee3-0d9bca21494c.png" alt="Mission NEET 2024 (75 Days) Batch (English Medium) image" width="100%" />
          <h2 className="text-lg font-bold mb-2">Offline Batch</h2>
          <p>75 days Target Batch for NEET 2024.</p>
        </div>
      </div>
      <div className="container mx-auto py-8 text-center">
  <h3 className="text-lg font-semibold mb-4">Exam Categories</h3>
  <div className="flex flex-wrap justify-center gap-4">
    <a
      href="/explore/khan-sir-courses"
      className="batches-chip rounded-full px-3 py-2 bg-gray-200 text-gray-700 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
    >
      Khan Sir Courses
      <br />
      <small className="text-xs text-gray-600">Geography I Polity I History | World Map I Indian Map I Economics I Biology</small>
    </a>
    <a
      href="/explore/upsc-state-psc"
      className="batches-chip rounded-full px-3 py-2 bg-gray-200 text-gray-700 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
    >
      UPSC & State PSC
      <br />
      <small className="text-xs text-gray-600">UPSC I BPSC I UP-PSC I MP-PSC</small>
    </a>
    <a
      href="/explore/state-oneday-exams"
      className="batches-chip rounded-full px-3 py-1 bg-gray-200 text-gray-700 mr-2 mb-2 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
    >
      State One Day Exams
      <br />
      <small className="text-xs text-gray-600">UP I Bihar I MP</small>
    </a>
    <a
      href="/explore/neet-jee-cuet-exam"
      className="batches-chip rounded-full px-3 py-1 bg-gray-200 text-gray-700 mr-2 mb-2 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
    >
      NEET | JEE | CUET
      <br />
      <small className="text-xs text-gray-600">UG Exams Preparation</small>
    </a>
    <a
      href="/explore/ssc"
      className="batches-chip rounded-full px-3 py-1 bg-gray-200 text-gray-700 mr-2 mb-2 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
    >
      SSC
      <br />
      <small className="text-xs text-gray-600">CGL  I CPO I CHSL I MTS I SSC GD I Delhi Police</small>
    </a>
    <a
      href="/explore/defence-and-police"
      className="batches-chip rounded-full px-3 py-1 bg-gray-200 text-gray-700 mr-2 mb-2 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
    >
      Defence | Police
      <br />
      <small className="text-xs text-gray-600">NDA I CDS I CAPF I AFCAT I SSB I Agniveer | Constable I Daroga</small>
    </a>
    <a
      href="/explore/railway-exams"
      className="batches-chip rounded-full px-3 py-1 bg-gray-200 text-gray-700 mr-2 mb-2 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
    >
      Railway Exams
      <br />
      <small className="text-xs text-gray-600">RRB</small>
    </a>
    <a
      href="/explore/gk-gs-foundation"
      className="batches-chip rounded-full px-3 py-1 bg-gray-200 text-gray-700 mr-2 mb-2 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
    >
      Foundation
      <br />
      <small className="text-xs text-gray-600">Physics I Chemistry I Biology I History I Geography I Polity I NCERT I Math I English | Map I Reasoning</small>
    </a>
    <a
      href="/explore/banking-exams"
      className="batches-chip rounded-full px-3 py-1 bg-gray-200 text-gray-700 mr-2 mb-2 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
    >
      Banking Exams
    </a>
    <a
      href="/explore/pg-net"
      className="batches-chip rounded-full px-3 py-1 bg-gray-200 text-gray-700 mr-2 mb-2 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
    >
      UGC NET
    </a>
  </div>
  <div class="w-30 md:w-80 mx-auto justify-center bg-purple-600 rounded-lg relative top-10 md:top-20 z-10 p-2 md:p-6">
  <div class="md:flex items-center">
    <div class="md:w-1/2 md:pr-2">
      <h1 class="text-white text-sm md:text-lg font-semibold mb-1 md:mb-2">The most trusted learning platform on your phone</h1>
      <ul class="text-white text-xs md:text-sm">
        <li class="mb-1">With our training programs, learning online can be a very exciting experience!</li>
        <li>Take the next step toward achieving your professional and personal objectives.</li>
      </ul>
      <div class="mt-1 md:mt-2">
        <div class="btn-box flex flex-col">
          <a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" class="playstore-btn flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 md:py-2 md:px-3 rounded-lg mb-1">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEX///8A3f8A7nf/M0T/3QAAAAAA2/+w8f8A3v8A72sA5cH/2wAA73z/5QD/KTr/JjcA4///kSkA7XD/HEeenp7l5eXKyspcXFxycnJTU1O7u7vz8/OOjo650D4A5P97e3vc3Ny/c4o+Pj6/v7+y1j/Jan/RYnf/FzDXW29E8Y/o/fL/5FP/++b/JTn4UF/2bXn46u3gU2e1+dGY9r6n+MjT/OXG+txo86M66chV8ple5/qA9bDD9foj74Pu/fuM9bfZ/Ohz9Kig98S2+tir1S3/3Dj78tX532z7+e/655j19cD16Xb075//8aj/9sv/5Vv/64f/87nAnmbumJ3x1NXvs7f1P07wg4r2XWr1wMX1nqX1d4L2xsv13N/1qK/1g4zdf47RQwLZAAAHpklEQVR4nN3da5vTRBQH8PSStaVrusSm3bQrLa0aQQsKCIoI3hDvqCiCXPT7fwqTttvmMpdzkkzOzPxf7qvzeyYnPTOT51nH5WY5H60WwczRO7NgsRrNl3yGw/n7fExdOjLjOUY4MY23zXgCFJ4G1KWWTnAKEIbm+pIEoUw4pS6xcqZCYaj7mxOSWcgXnlEXV1POeELzn9DzTNlCM38i2BmzhDYB08S90J5HdJtpXmjLS+aQs6wwpK5HQcKM0IbfwXxmaaFtTbjN9CC08RlNEu6FZg/b/ATnwlPqSpTldCe0dQm3ixgLJ9R1KMxkI7RrXMtmvBFSV6E0iXBOXYTSzGOhzQ9p8pg6dj+k8WPqLKlLUJylY3cbxo3ojKhLUJyRs6IuQXFWzoK6BMVZOPYOpdsEjo27+3Rs91XK1Rs3H9z6hLoKdbl9pe/H6R/foq5EUe7027v4X9ymLkZFPt0D4/Q/u0pdT+25e3QhTfT7n9+nLqne3DtqtTLEtt+2qx0vtVp5ol3teP+oxSDa1I73tsICMW5H6tJqyhs7YYFoTTvuhUVi3I42TDkHIYPY7t8xvx1TQhbR9x9QV1g1aSGLGLfjDeoaqyUjZBLb/hWj2zErZBPNbseckEM0uR3zQg7R4HYsCHnEuB2/pC62VIpCLjFuRxP3VQwhn+j7N6nrxYcl5BPb/vE31BVjwxQKiO2+ae3IFoqI7f5XRrUjRygkmtWOPKGQGLejOcccXKGYaFA78oUSojHtKBDKiL7/NXX1kIiEMqIZp45CoZRowqmjWCgn6n8JIBHKiXE76n3qKBMCiJq3o1QIIWrdjnIhiKjxJQBACCLqewkAEcKIul4CgIRAop7tCBNCiTqeOgKFUKKGp45QIZioXTuChXCiZpcAcCGCqFU7IoQIok7tiBFiiPrcyaGEKKIu7YgT4oh6nDoihThi2z+mb0esEEnU4NQRLcQSyU8d8UI0kbgdSwjRRNo7uTJCPPH424ffGSXEEo/f6XYHj743SYgjJsA4gx9MEmKIO2CSHw0SwokpYHfwwYfmCKHENDAx/tR0O5YXwog5YJKfjRFCiAxgd9BsO1YRyoksYNPtWEkoI3KAifE3Q4Ri4vHbPGCSX8wQiohiYNyOvxoh5BMlwMT4uIl2rCzkEeXAhtqxupBNBAEbaccahCwiGNgdPFTcjnUIi0Q4sKu8HWsR5okoYFdxO9YjzBKxwCS/6y5ME8sAFS5jXcIDsRRQIbE24TmxJDAmKjqrqk+4JZYGdruPtRcmxArAblfN7r9OYeuCXwU4UPPTX6ewd/LHm1YLe5cury9WICp61dQn7J1cHnbeqkJUAqxPGK/gsN" alt="Google Play Logo" class="h-3 md:h-4 mr-1" />GET IT ON<span class="ml-1">Google Play</span>
          </a>
          <a href="https://apps.apple.com/us/app/YOUR-APP-NAME/idYOUR_APP_ID" class="applestore-btn flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 md:py-2 md:px-3 rounded-lg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGa6cz0swSZwpUR7t1s6W1LEBCz9FwDKIfjg&usqp=CAU" alt="Apple App Store Logo" class="h-3 md:h-4 mr-1" />GET IT ON<span class="ml-1">App Store</span>
          </a>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 mt-2 md:mt-0">
      <img src="https://appsamurai.com/wp-content/uploads/2018/04/mobile-app-story-khan-academy-sharing-min-602x1024.png" alt="KGS Mobile App Screen" class="overflow-visible rounded-lg max-h-64 md:max-h-full"/>
    </div>
  </div>
</div>
</div>
  <Footer/>                              
    </>
  );
}

export default HeroSection1;