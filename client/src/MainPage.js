import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';

const MainPage = () => {
  const [bannerData, setBannerData] = useState({
    description: '',
    timer: 0,
    link: '',
    show: false,
  });
   
  useEffect(() => {
    axios.get('http://localhost:7900/api/get')
      .then(response => setBannerData(response.data))
      .catch(error => console.error('Error fetching banner data:', error));
  }, []);

  return (
    <div>
      <Banner {...bannerData} />
      <h1>Welcome to Our Website</h1>
      <p>This is the main content of the website.</p>
    </div>
  );
};

export default MainPage;
