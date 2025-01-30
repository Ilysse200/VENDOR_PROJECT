import React from "react";
import { FaStar, FaFilter, FaThLarge, FaList } from "react-icons/fa";
import "../styles/vendor.css";

const stores = [
  {
    name: "John Doe's Store",
    image: "https://via.placeholder.com/300",
    location: "Central Park, New York, United States (US)",
    rating: 4.5,
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "Jessica's Store",
    image: "https://via.placeholder.com/300",
    location: "Central Park, New York, United States (US)",
    rating: 4.0,
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "Santa Monica's Store",
    image: "https://via.placeholder.com/300",
    location: "Central Park, New York, United States (US)",
    rating: 5.0,
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "Digital Good's Store",
    image: "https://via.placeholder.com/300",
    location: "Central Park, New York, United States (US)",
    rating: 4.0,
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "The Glass Store",
    image: "https://via.placeholder.com/300",
    location: "Central Park, New York, United States (US)",
    rating: 4.7,
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "Josh Doe's Store",
    image: "https://via.placeholder.com/300",
    location: "Central Park, New York, United States (US)",
    rating: 4.8,
    profilePic: "https://via.placeholder.com/50",
  },
];

const StoreList = () => {
  return (
    <div className="store-list-container">
      <h1 className="title">Store List</h1>

      {/* Filter & Sorting Section */}
      <div className="filter-section">
        <p>Total stores showing: {stores.length}</p>
        <div className="filter-controls">
          <button className="filter-button">
            <FaFilter /> Filter
          </button>
          <span>Sort by:</span>
          <select>
            <option>Most Recent</option>
            <option>Top Rated</option>
            <option>Popular</option>
          </select>
          <div className="view-icons">
            <FaThLarge className="icon" />
            <FaList className="icon" />
          </div>
        </div>
      </div>

      {/* Stores Grid */}
      <div className="store-grid">
        {stores.map((store, index) => (
          <div key={index} className="store-card">
            <img src={store.image} alt={store.name} className="store-image" />
            <div className="store-info">
              <h3>{store.name}</h3>
              <div className="store-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < Math.floor(store.rating) ? "orange" : "lightgray"}
                  />
                ))}
              </div>
              <p>{store.location}</p>
            </div>
            <div className="store-footer">
              <button className="view-button">➜</button>
              <img src={store.profilePic} alt="Owner" className="profile-pic" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
