import React from "react";
function ListItem(props) {
  return (
    <div className="flex justify-center items-center gap-3">
      <img src="/f2.png" alt="" className="w-8" />
        <p className="text-xl">{props.text}</p>
    </div>
  );
}

export default ListItem;
