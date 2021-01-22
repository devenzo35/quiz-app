import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";

export const ScoreList = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    const docRef = db.collection("users");

    docRef.onSnapshot((snap) => {
      const users = [];
      snap.forEach((snapChild) => {
        users.push(snapChild.data());
      });
      setstate(users);
    });
  }, []);

  return (
    <div className="scorelist">
      <h1 className="scorelist_title">TOP WORLD BEST MASTER PLAYERS</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {state.map((el, i) => {
            return (
              <tr key={i}>
                <td>{el.name}</td>
                <td>{el.score}</td>
                <td>
                  {("0" + Math.floor(el.time / 60).toString()).slice(-2)}:
                  {(
                    "0" + (el.time - Math.floor(el.time / 60) * 60).toString()
                  ).slice(-2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
