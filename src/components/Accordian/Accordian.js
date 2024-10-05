import React, { useState } from "react";
import { accordionData } from "./data";

const Accordian = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [enableMultiple, setEnableMutiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const selectIndex = (id) => {
    if (!enableMultiple) {
      setSelectedIndex(selectedIndex === id ? null : id);
    } else {
      const cpyMultiple = [...multiple];
      const findIndex = cpyMultiple.indexOf(id);
      if (findIndex === -1) cpyMultiple.push(id);
      else cpyMultiple.splice(findIndex, 1);
      setMultiple(cpyMultiple);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 w-[50%] mx-auto">
      <h1
        className="font-bold text-xl bg-slate-400 p-2 rounded-xl"
        onClick={() => setEnableMutiple(!enableMultiple)}>
        {!enableMultiple ? "Enable Multi Selects" : "Single"}
      </h1>
      <div className="w-full">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((data, index) => {
            return (
              <div
                className="bg-slate-300 m-2 rounded-xl p-2 w-full"
                key={data.id}
                onClick={() => {
                  selectIndex(data.id);
                }}>
                <div className="flex justify-between">
                  <h1 className="font-bold">{data.title} </h1>
                  <p className="font-bold">+</p>
                </div>
                {selectedIndex === data.id ||
                multiple.indexOf(data.id) !== -1 ? (
                  <p>{data.content}</p>
                ) : null}
              </div>
            );
          })
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
};

export default Accordian;
