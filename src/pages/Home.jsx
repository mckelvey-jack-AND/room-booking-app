const Home = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>Welcome to the Meeting Room Booking App</h1>
    <p>Book your meeting rooms quickly and easily.</p>
    <div className="room-links-container">
      <a href="/Enterprise" className="room-link">
        Enterprise Room
      </a>
      <a href="/Vortex" className="room-link">
        Vortex Room
      </a>
    </div>
  </div>
);

export default Home;
