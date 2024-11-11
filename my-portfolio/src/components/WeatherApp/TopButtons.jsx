import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: "Ho Chi Minh" },
    { id: 2, name: "Ha Noi" },
    { id: 3, name: "Can Tho" },
    { id: 4, name: "Da Nang" },
    { id: 5, name: "Ca Mau" },
  ];

  return (
    <div className="flex items-center justify-around my-6 text-white">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

// Thêm PropTypes cho prop setQuery
TopButtons.propTypes = {
  setQuery: PropTypes.func.isRequired, // Khai báo setQuery là một hàm và bắt buộc
};

export default TopButtons;
