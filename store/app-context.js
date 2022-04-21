import React, {useState, createContext, useContext, useEffect} from "react";
import {Keyboard} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [number, setNumber] = useState("");
  const [points, setPoints] = useState("");
  const [scorers, setScorers] = useState([]);

  const saveScorers = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@scorers", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadScorers = async () => {
    try {
      const value = await AsyncStorage.getItem("@scorers");
      if (value !== null) {
        setScorers(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const onePointHandler = () => {
    const players = [...scorers];
    if (!number.trim()) return;
    const position = players.map((player) => player.number).indexOf(number);
    if (position !== -1) {
      players[position] = {
        ...players[position],
        points: players[position].points + parseInt(1),
      };
      setScorers(players);
    } else {
      const newScorer = {
        id: Date.now(),
        number: number,
        points: parseInt(1),
      };
      setScorers([...scorers, newScorer]);
    }
    setNumber("");
    Keyboard.dismiss();
  };

  const twoPointsHandler = () => {
    const players = [...scorers];
    if (!number.trim()) return;
    const position = players.map((player) => player.number).indexOf(number);
    if (position !== -1) {
      players[position] = {
        ...players[position],
        points: players[position].points + parseInt(2),
      };
      setScorers(players);
    } else {
      const newScorer = {
        id: Date.now(),
        number: number,
        points: parseInt(2),
      };
      setScorers([...scorers, newScorer]);
    }
    setNumber("");
    Keyboard.dismiss();
  };

  const threePointsHandler = () => {
    const players = [...scorers];
    if (!number.trim()) return;
    const position = players.map((player) => player.number).indexOf(number);
    if (position !== -1) {
      players[position] = {
        ...players[position],
        points: players[position].points + parseInt(3),
      };
      setScorers(players);
    } else {
      const newScorer = {
        id: Date.now(),
        number: number,
        points: parseInt(3),
      };
      setScorers([...scorers, newScorer]);
    }
    setNumber("");
    Keyboard.dismiss();
  };

  const onScored = () => {
    const players = [...scorers];
    if (!number.trim() && !points.trim()) return;
    const position = players.map((player) => player.number).indexOf(number);
    if (position !== -1) {
      players[position] = {
        ...players[position],
        points: players[position].points + parseInt(points),
      };
      setScorers(players);
    } else {
      const newScorer = {
        id: Date.now(),
        number: number,
        points: parseInt(points),
      };
      setScorers([...scorers, newScorer]);
    }
    setNumber("");
    setPoints("");
    Keyboard.dismiss();
  };

  useEffect(() => {
    loadScorers();
  }, []);

  useEffect(() => {
    saveScorers(scorers);
  }, [scorers]);

  const newTeam = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log("error cleaning", e);
    }
    setScorers([]);
  };

  return (
    <AppContext.Provider
      value={{
        number,
        points,
        setNumber,
        setPoints,
        scorers,
        setScorers,
        onScored,
        newTeam,
        onePointHandler,
        twoPointsHandler,
        threePointsHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const appContext = () => useContext(AppContext);
export default AppContextProvider;
