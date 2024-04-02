import React from 'react';
import Footer from '../Pages/Footer';

const CurrentAffairs = () => {
  return (
    <div>
    <div>
      <div className="page-title-area bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="page-title-content">
            <ul className="flex items-center">
              <li>
                <a href="/" className="text-blue-500 hover:underline">Home</a>
              </li>
              <li className="ml-2 text-gray-500">/</li>
              <li className="ml-2 text-gray-500">Daily Current Affairs</li>
            </ul>
            <h2 className="mt-3 text-2xl font-bold">Daily Current Affairs</h2>
          </div>
        </div>
        <div className="shape9">
          <img src="/images/shape8.svg" alt="image" />
        </div>
      </div>
      <div className="container mx-auto mb-4">
        <div className="banner-wrapper-content">
          <p className="text-gray-700">
            Daily current affairs provides you with the best compilation of the Daily Current Affairs taking place across the globe: National, International, Sports, Science and Technology, Banking, Economy, Agreement, Appointments, Ranks, and Report and General Studies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="ant-card ant-card-bordered ant-card-type-inner mb-5">
            <div className="ant-card-head">
              <div className="ant-card-head-wrapper">
                <div className="ant-card-head-title">April</div>
              </div>
            </div>
            <div className="ant-card-body">
              <div className="directory-list">
                <a href="/current-affairs/01-april-2024">1-April</a>
              </div>
            </div>
          </div>
        </div>
        <div className="ant-card ant-card-bordered ant-card-type-inner mb-5">
          <div className="ant-card-head">
            <div className="ant-card-head-wrapper">
              <div className="ant-card-head-title">To View Old Current Affairs, please select date below</div>
            </div>
          </div>
          <div className="ant-card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="ant-space w-full">
                <div className="ant-space-item">
                  <div className="ant-picker ant-picker-large w-full">
                    <div className="ant-picker-input">
                      <input readOnly="" placeholder="Select date" title="" size="12" autoComplete="off" value=""/>
                      <span className="ant-picker-suffix">
                        <span role="img" aria-label="calendar" className="anticon anticon-calendar">
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ant-space-item">
                  <button type="button" className="btn-primary mt-3 w-full">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default CurrentAffairs;