import GreenTick from "../GreenTick";
import RedX from "../RedX";

function Vortex() {
  const room = { name: "Vortex", id: 2, isBooked: true };
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
            {!room.isBooked && <p className="book-now">Book Now</p>}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Vortex;
