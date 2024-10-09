import React, { useState } from "react";

type ConfirmBookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (startTime: string) => void;
};

const ConfirmBookingModal: React.FC<ConfirmBookingModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [startTime, setStartTime] = useState("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (startTime) {
      const formatteStartTime = new Date(startTime).toISOString();
      onConfirm(formatteStartTime);
    } else {
      alert("Please select a start time.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-lg font-bold mb-4 text-orange-600">Book Now</h2>
        <div className="mb-4">
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-gray-700"
          >
            Start Time
          </label>
          <input
            type="datetime-local"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
          >
            Pay Tk 100 to Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBookingModal;
