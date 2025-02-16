import React from "react";
import { FaStar, FaFilter, FaThLarge, FaList } from "react-icons/fa";
import "../styles/vendor.css";
import outfitBlack from '../assets/jeans.webp';
import green from '../assets/greenShoes.webp';
import glasses from '../assets/glasses.webp';
import equipment from '../assets/blackEquipment.webp';
import person from '../assets/blueShirt.webp';
import blankPerson from '../assets/blankProfile.png'

//import action icons for edit and delete used in tables
import { CiEdit } from "react-icons/ci"; //edit table icon

import { LuDelete } from "react-icons/lu"; //delete table icon

export const stores = [
  {
    name: "John Doe's Store",
    image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-6.jpg.webp",
    location: "Central Park, New York, United States (US)",
    rating: 4.5,
    profilePic: glasses,
    action_icon: [<CiEdit color='blue'/>, <LuDelete color='red'/>]
  },
  {
    name: "Jessica's Store",
    image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-shoes-shop-1-2.jpg.webp",
    location: "Central Park, New York, United States (US)",
    rating: 4.0,
    profilePic: green,
    action_icon: [<CiEdit color='blue'/>, <LuDelete color='red'/>]
  },
  {
    name: "Santa Monica's Store",
    image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-1-1.jpg.webp",
    location: "Central Park, New York, United States (US)",
    rating: 5.0,
    profilePic: outfitBlack,
    action_icon: [<CiEdit color='blue'/>, <LuDelete color='red'/>]
  },
  {
    name: "Digital Good's Store",
    image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-4-2.jpg.webp",
    location: "Central Park, New York, United States (US)",
    rating: 4.0,
    profilePic: equipment,
    action_icon: [<CiEdit color='blue'/>, <LuDelete color='red'/>]
  },
  {
    name: "The Glass Store",
    image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-5-1.jpg.webp",
    location: "Central Park, New York, United States (US)",
    rating: 4.7,
    profilePic: person,
    action_icon: [<CiEdit color='blue'/>, <LuDelete color='red'/>]
  },
  {
    name: "Josh Doe's Store",
    image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/uploads/sites/145/2022/12/vendor-banner-3.jpg",
    location: "Central Park, New York, United States (US)",
    rating: 4.8,
    profilePic:blankPerson,
    action_icon: [<CiEdit color='blue'/>, <LuDelete color='red'/>]
  }
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