import BookingModal from "../components/BookingModal.tsx";
import GreenTick from "../GreenTick";
import RedX from "../RedX";
import { useState } from "react";

function Vortex() {
  const room = { name: "Vortex", id: 2, isBooked: false };

  const [isModalOpen, updateIsModalOpen] = useState(false);

  return (
    <div className="app">
      <div className="room-cards-container relative">
        <div
          className={`${
            room.isBooked ? "red-background" : "green-background"
          } room-container`}
        >
          <img
            className="calender-image"
            src="./calendar.png"
            alt="calender"
          ></img>
          <p className="room-name">{room.name}</p>
          <p>{room.isBooked}</p>

          <div className="white-background tick-container">
            {room.isBooked ? <RedX /> : <GreenTick />}
          </div>
          <div style={{ height: "24px" }}>
            {!room.isBooked && (
              <p
                onClick={() => {
                  console.log("here");
                  updateIsModalOpen(!isModalOpen);
                }}
                className="book-now"
              >
                Book Now
              </p>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && <BookingModal updateIsModalOpen={updateIsModalOpen} />}
    </div>
  );
}

export default Vortex;
