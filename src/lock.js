import React from "react";
import { Close } from "./close/close";

export function Lock({ onClose }) {
  return (
    <>
      <Close onClose={onClose} />
      <div className="lock">
        <img src="./amazon.png" />
        <div className="lockImage">
          <img src="./lockbox.jpg" />
        </div>
        <div className="title">
          <h3>Lock Box</h3>
          <h2>23$</h2>
        </div>

        <div
          id="feature-bullets"
          className="a-section a-spacing-medium a-spacing-top-small"
        >
          <hr />
          <h1 className="a-size-base-plus a-text-bold">About this item</h1>
          <ul className="a-unordered-list a-vertical a-spacing-mini">
            <li>
              <span className="a-list-item">
                Combination lock for convenient key-less locking and features
                trademarked Vaultz design
              </span>
            </li>

            <li>
              <span className="a-list-item">
                Roomy mesh pocket inside, removable zipper pouch
              </span>
            </li>

            <li>
              <span className="a-list-item">
                Four elastic straps are perfect for syringes
              </span>
            </li>

            <li>
              <span className="a-list-item">
                Default code for the lock: 046
              </span>
            </li>

            <li>
              <span className="a-list-item">
                Comfortable chrome handle for easy carrying
              </span>
            </li>

            <li>
              <span className="a-list-item">
                Search "Vaultz" on Amazon to find Lock It Up solutions for all
                your valuables, personal and private items, prescription meds
                and more
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
