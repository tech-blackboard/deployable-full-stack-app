import { useState } from "react";

export default function Divisions() {
    const [divs, setDivis] = useState(["A", "B", "C", "D", "E"]);

    function handleChange(index, newValue) {
        const updatedDivs = [...divs];   // copy current state
        updatedDivs[index] = newValue;   // modify one item 
        setDivis(updatedDivs);   // update state
    }

    return (
        <div>
        
               {
                    divs.length>=2 && (
                    <div>
                        {divs.map((div, index) => (
                            <div key={index} className="border h-11 bd-red-700 md:w-1/2 ml-9">
                                <p>{div}</p>
                                {/* <button
                                    onClick={() => handleChange(index, "Clicked!")}
                                    className="ml-3 bg-blue-500 text-white px-2 rounded"
                                >
                                    Change
                                </button> */}
                            </div>
                        ))}
            </div>
                )}
           
        </div>
    );
}
