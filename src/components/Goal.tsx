import React from "react";


const Goal = ({ goal, updates }) => {
  return (
    <div className="m-0 p-0 box-border bg-zinc-100">
      <label className="block relative select-none">
        <input className="hidden checked:~span bg-blue-500 span:absolute top-0 right-0 h-12 w-12 ease-in  after:block " type="checkbox" defaultChecked={goal.fields.complete} disabled />
      </label>
      <h2 className="inline text-5xl px-11">{goal.fields.title}</h2>
      <div className="p-8 bg-zinc-300 ">
        <h3 className="text-2xl">DETAILS</h3>
        <p>{goal.fields.details}</p>
        <h3 className="mt-4">UPDATES</h3>
        {updates.map((update, index) => (
          <p key={index}>{update.fields.update}</p>
        ))}
      </div>
    </div>
  );
};

export default Goal;
