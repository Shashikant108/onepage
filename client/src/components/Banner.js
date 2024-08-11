import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: #f4a261;
  padding: 20px;
  text-align: center;
  position: relative;
`;

const Countdown = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

const Banner = ({ description, timer, link, show }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (!show || timeLeft <= 0) return;

    const countdown = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeLeft, show]);

  return (
    <BannerWrapper show={show}>
      <p>{description}</p>
      <Countdown>{timeLeft}s left</Countdown>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">Click Here</a>}
    </BannerWrapper>
  );
};

export default Banner;
