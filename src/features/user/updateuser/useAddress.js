import { useState } from "react";
import { getAddress } from "../../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export function useAddress() {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");
  //const [status, setStatus] = useState("idle");

  async function fetchAddress() {
    const positionObj = await getPosition();
    const pos = {
      latitude: positionObj?.coords?.latitude,
      longitude: positionObj?.coords?.longitude,
    };

    setPosition(pos);

    //With reverse geocoding API, get user's address description
    const addressObj = await getAddress(pos);
    console.log(addressObj);
    const addr = ` ${addressObj?.city}, ${addressObj?.countryName} `; //${addressObj?.locality}, ${addressObj?.postcode },

    setAddress(addr);
  }

  return { position, address, fetchAddress };
}
