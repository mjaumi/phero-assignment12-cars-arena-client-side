import React, { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/outline';

const Dropdown = ({ dropdownName, dropdownDefaultValue, dropdownMenu }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(dropdownDefaultValue);

    // rendering dropdown component here
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <div className="relative inline-flex align-middle w-full">
                    <div className="relative flex w-full flex-wrap items-stretch cursor-pointer">
                        <input type="text" name={dropdownName} value={dropdownValue} className='input input-bordered input-secondary rounded-none w-full text-neutral cursor-pointer' onClick={() => setDropdownPopoverShow(!dropdownPopoverShow)} readOnly />
                        <span className="z-10 h-full leading-snug font-normal absolute text-center bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                            <ChevronDownIcon className={`${dropdownPopoverShow ? 'rotate-90' : 'rotate-0'} text-neutral duration-300`} />
                        </span>
                    </div>
                    <div
                        className={
                            `${dropdownPopoverShow ? 'scale-y-100' : 'scale-y-0'} bg-base-200 z-50 text-neutral origin-top duration-300 absolute top-full w-full`
                        }
                    >
                        {
                            dropdownMenu?.map(item => <button
                                key={item}
                                className={
                                    `${dropdownPopoverShow ? 'scale-y-100' : 'scale-y-0'} text-sm py-2 px-4 font-normal block w-full whitespace-nowrap hover:bg-secondary hover:font-bold duration-300 origin-top`
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setDropdownValue(item);
                                    setDropdownPopoverShow(!dropdownPopoverShow);
                                }}
                            >
                                {item}
                            </button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;