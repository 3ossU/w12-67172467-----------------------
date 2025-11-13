import Adder from "../components/Adder";
import RadixCounter from "../components/Radixcounter";
import Temperator from "../components/Temperator";
import Timer from "../components/Timer";
import Value from "../components/Value";
import { useState } from "react";
import "./Components.css"; // ใช้ไฟล์ style แยก

const Components = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="components-container">
      <h1 className="title">REACT COMPONENTS</h1>

          <RadixCounter />
      <div className="grid-layout">
        <div className="counter-box">
          <Value name={"COUNTER"} value={counter} setValue={setCounter} />
          <Timer />
        </div>

        <div className="adder-box">
          <Adder />
        </div>

        <div className="temp-box">
          <Temperator />
        </div>
      </div>

      <p className="student-info">67172467 สุรวัศ แสงเจริญสุขเลิศ</p>
    </div>
  );
};

export default Components;
