import "./BookingModal.css";
type BookingModalProps = {
  updateIsModalOpen: (open: boolean) => void;
};

function BookingModal({ updateIsModalOpen }: BookingModalProps) {
  return (
    <div className="modal">
      <div className="modal-overlay">
        <div className="close-button" onClick={() => updateIsModalOpen(false)}>
          X
        </div>
        <p>Booking Modal</p>
      </div>
    </div>
  );
}

export default BookingModal;
