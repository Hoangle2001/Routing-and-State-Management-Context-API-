import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Forecast = ({ title, data }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />

      <div className="flex items-center justify-between">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{d.title}</p>
            <img src={d.icon} alt="weather icon" className="w-12 my-1" />
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Thêm PropTypes cho các props
Forecast.propTypes = {
  title: PropTypes.string.isRequired, // 'title' là chuỗi và là bắt buộc
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired, // 'title' trong mỗi item là chuỗi và bắt buộc
      icon: PropTypes.string.isRequired, // 'icon' là chuỗi (URL của hình ảnh)
      temp: PropTypes.number.isRequired, // 'temp' là số và bắt buộc
    })
  ).isRequired, // 'data' là mảng và bắt buộc
};

export default Forecast;
