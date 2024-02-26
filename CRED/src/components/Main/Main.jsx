import React from "react";
import Logo from "../../../public/images/undraw_mobile_pay_re_sjb8.svg";
import PaetranPad from "../../../public/images/patternpad.svg"
import "./Header.css";
function Main() {
  return (
    <main>
      <div className="p-10 flex gap-4 ">
        <img src={Logo} className="h-80 bg-transparent  " alt="THis pjhoto" />
          <div className="p-4">
               <p className="text-7xl font-extrabold h-40 text-center">Rewards for paying credit card bills.</p>
               <p className="text-2xl font-bold text-center pt-14">join 9M+ members who win rewards and cashbacks everyday</p>
          </div>
      </div>
      {/* <img src={PaetranPad} className="p-2 bg-im text-white "> */}
          
      </img>
    </main>
  );
}

export default Main;
