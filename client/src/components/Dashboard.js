import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBannerData({
      ...bannerData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:7900/api/create', bannerData)
      .then(response => console.log('Banner updated:', response.data))
      .catch(error => console.error('Error updating banner:', error));
  };

  return (
    <div>
      <h2>Banner Settings</h2>
      <label>
        Show Banner:
        <input
          type="checkbox"
          name="show"
          checked={bannerData.show}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={bannerData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Timer (seconds):
        <input
          type="number"
          name="timer"
          value={bannerData.timer}
          onChange={handleChange}
        />
      </label>
      <label>
        Link:
        <input
          type="text"
          name="link"
          value={bannerData.link}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
