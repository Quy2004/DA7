
import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images: string[] = [
    "/src/assets/images/banner/Banner_1.webp",
    "/src/assets/images/banner/Banner_2.webp",
    "/src/assets/images/banner/Banner_3.webp"

]; // Thêm các hình ảnh bạn muốn sử dụng ở đây

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Thay đổi 3000 thành khoảng thời gian bạn muốn giữa các hình ảnh

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      <img src={images[currentIndex]} alt="" className="w-max" />
      {/* Thay đổi kích thước của ảnh tại đây nếu cần */}
    </>
  );
};

export default HomePage;