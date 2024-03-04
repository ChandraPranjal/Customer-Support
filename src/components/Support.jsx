import React from "react";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

function Support({ isClicked, setIsClicked }) {
  return (
    <div className="fixed bottom-0 right-0 flex items-center"> 
      <button
        className="btn btn-lg btn-ghost  flex items-center m-4 fixed bottom-0 right-0"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <span class="absolute bottom-12 left-20 h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <SupportAgentOutlinedIcon style={{ fontSize: 64 }} />
      </button>
    </div>
  );
}

export default Support;
