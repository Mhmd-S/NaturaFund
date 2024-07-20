import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        const modalContainer = dropdownRef.current;

        const handleClickOutside = (event) => {
            if (modalContainer && !modalContainer.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <div
            ref={dropdownRef}
            className="min-w-32 w-32 text-sm p-1 flex flex-col items-center bg-white text-gray-med border-[1px] rounded-lg"
        >
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.label : "Select an option"}
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`ml-1 ${isOpen && "rotate-180"}`}
                />
            </button>
            {isOpen && (
                <ul className="w-full">
                    {options.map((option) => (
                        <li
                            className="w-full p-1 cursor-pointer rounded-md hover:bg-slate-200"
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
