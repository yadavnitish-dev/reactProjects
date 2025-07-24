import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const OutsideDropdownClose = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const toggleShowDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showDropdown]);

  return (
    <div className="text-center h-screen w-screen ">
      <div>
        <button
          onClick={toggleShowDropdown}
          className="bg-gray-200 w-150 px-5 py-2 mt-50 rounded-full"
        >
          <div className="flex justify-between items-center w-full">
            <span>Select an Option</span>
            <div className={showDropdown ? "rotate-180" : null}>
              <ChevronDown />
            </div>
          </div>
        </button>
      </div>
      <div ref={dropdownRef} className="bg-gray-200 mx-105 mt-5">
        {showDropdown
          ? ["Option 1", "Option 2", "Option 3"].map((option, idx) => (
              <div key={idx} className="mt-2">
                {option}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default OutsideDropdownClose;
