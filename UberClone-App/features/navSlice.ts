import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

interface Location {
  lat: number;
  lng: number;
}

interface Destination {
  location: Location;
  description: string;
}
interface Origin {
  location: Location;
  description: string;
}
interface NavState {
  origin: Origin | null;
  destination: Destination | null;
  travelTimeInfrormation: any | null;
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInfrormation: null,
};

export const NavSlice = createSlice({
  name: "nav",
  
  initialState,
  reducers: {
    setOrgin: (state, action: PayloadAction<Origin>) => {
      state.origin = action.payload;
    },
    setdestination: (state, action: PayloadAction<Destination>) => {
      state.destination = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTravelTimeInfrormation: (state, action: PayloadAction<any>) => {
      state.travelTimeInfrormation = action.payload;
    },
  },
});

export const {setOrgin,setdestination,setTravelTimeInfrormation}=NavSlice.actions
export const selectOrgin =(state:RootState)=> state.nav.origin
export const selectdestination =(state:RootState)=>state.nav.destination
export const selectTravelTimeInfrormation =(state:RootState)=>state.nav.travelTimeInfrormation

export default NavSlice.reducer
