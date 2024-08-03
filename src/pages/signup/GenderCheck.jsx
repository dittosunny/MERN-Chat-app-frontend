
function GenderCheck({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex">
      <div className="form-control">
        <div className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </div>
      </div>
      <div className="form-control">
        <div className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </div>
      </div>
    </div>
  );
}


export default GenderCheck;
