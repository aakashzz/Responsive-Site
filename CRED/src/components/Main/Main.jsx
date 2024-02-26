import React from "react";
import Logo from "../../../public/images/undraw_mobile_pay_re_sjb8.svg";
import samsungLogo from "../../../public/images/samsung.svg";
import NikeLogo from "../../../public/images/nike.png";
import MacDonalds from "../../../public/images/mcdonalds.png";
import AmazonPay from "../../../public/images/amazon-pay.png";
import Adidas from "../../../public/images/adidas.png";
import Pepsi from "../../../public/images/pepsi.png";
import ApplePay from "../../../public/images/apple-pay.png";
import TapPay from "../../../public/images/TapPay.jpg";
import "./Main.css";
function Main() {
  return (
    <main>
      <div className="p-10 flex gap-4 justify-between ">
        <img src={Logo} className="h-96   " alt="firstImg" />
        <div className="p-4">
          <p className="text-6xl font-extrabold h-40 text-center">
            Rewards for paying credit card bills.
          </p>
          <p className="text-2xl font-bold text-center pt-14">
            join 9M+ members who win rewards and cashbacks everyday
          </p>
        </div>
      </div>
      <div className="h-5/6 flex justify-between border sticky">
        <div className="w-3/5">
          <p className="text-6xl font-extrabold p-5">
            feel special more often.
          </p>
          <p className="text-3xl font-bold pl-6 py-1">
            exclusive rewards for paying your bills.
          </p>
          <p className="text-xl font-semibold pl-6 w-3/4 py-5">
            every time you pay your credit card bills on CRED, you receive CRED
            coins. you can use these to win exclusive rewards or get special
            access to curated products and experiences.
          </p>
          <div class="button-borders m-2 ml-6">
            <button class="primary-button"> Explore</button>
          </div>
        </div>
        <div className="float-right w-fit  ">
          <img className="h-full w-fit" src={TapPay} alt="" />
        </div>
      </div>
      <div className="h-72 border sticky py-7 ">
        <p className="text-3xl font-extrabold px-8 py-5">
          rewards from brands you love.
        </p>
        <div className="flex gap-10 px-5 p-4 justify-around">
          <img className="w-32" src={samsungLogo} alt="" />
          <img className="w-32" src={NikeLogo} alt="" />
          <img className="w-32" src={MacDonalds} alt="" />
          <img className="w-32" src={AmazonPay} alt="" />
          <img className="w-32" src={Adidas} alt="" />
          <img className="w-32" src={Pepsi} alt="" />
          <img className="w-32" src={ApplePay} alt="" />
        </div>
      </div>

      
    </main>
  );
}

export default Main;
