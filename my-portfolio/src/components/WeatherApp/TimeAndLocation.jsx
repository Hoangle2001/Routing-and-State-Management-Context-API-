import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">{formattedLocalTime}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

// Thêm PropTypes cho các props
TimeAndLocation.propTypes = {
  weather: PropTypes.shape({
    formattedLocalTime: PropTypes.string.isRequired, // Kiểu dữ liệu cho formattedLocalTime
    name: PropTypes.string.isRequired, // Kiểu dữ liệu cho name
    country: PropTypes.string.isRequired, // Kiểu dữ liệu cho country
  }).isRequired,
};

export default TimeAndLocation;
