import React, { useContext, useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MyContext from "../utils/MyContext";
import AllPlayerSection from "./AllPlayerSection";
import SelectedPlayers from "./SelectedPlayers";

export default function Main() {
  const { alignment, handleChange,selectedPlayers  } = useContext(MyContext);

  return (
    <div className="w-full border-2 border-red-500">
      <div className="space-y-4 sm:flex justify-between items-center ">
      
            {alignment === 'available_players' ?  <h1 className="text-2xl font-bold">Available Players</h1> :  <h1 className="text-2xl font-bold">Selected Players ({selectedPlayers.length}/6)</h1>}
                <div>
                <ToggleButtonGroup
                    color="warning"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton
                    value="available_players"
                    sx={{
                        textTransform: "none", // Prevents uppercase text
                        borderRadius: "10px 0 0 10px", // Applies left-side border radius
                        "&.Mui-selected": {
                        backgroundColor: "yellow",
                        fontWeight: "bold",
                        color: "black",
                        borderRadius: "10px 0 0 10px", // Ensures selected state maintains border-radius
                        },
                    }}
                    >
                    Available
                    </ToggleButton>

                    <ToggleButton
                    value="selected_players"
                    sx={{
                        textTransform: "none", // Prevents uppercase text
                        borderRadius: "0 10px 10px 0", // Applies right-side border radius
                        "&.Mui-selected": {
                        backgroundColor: "yellow",
                        fontWeight: "bold",
                        color: "black",
                        borderRadius: "0 10px 10px 0", // Ensures selected state maintains border-radius
                        },
                    }}
                    >
                    Selected ({selectedPlayers.length})
                    </ToggleButton>
                </ToggleButtonGroup>
                </div>
      </div>
      {alignment === "available_players" ? (
        <AllPlayerSection />
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
}
