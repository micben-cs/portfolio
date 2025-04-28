"use client";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center">
      <Card className="flex items-center mb-5 h-[215px] w-full">
        <p className="w-full text-left text-default-300 p-5">Location</p>
        <p className="pb-1 text-xl pt-7">United States</p>
        <Divider />
        <p className="pt-1 text-default-500">Los Angeles, California, 90027</p>
      </Card>

      <Card className="p-0 mb-5 overflow-hidden  h-[215px] cursor-pointer text-left w-full">
        <p className="text-default-300 p-5">Business Card </p>
        <p className="pt-9 pl-10 text-xl">Michael Bennett</p>
        <Divider />
        <p className="pt-0.5 pl-10  text-default-500">Data Scientist</p>
      </Card>
      <Card className="p-0 overflow-hidden  h-[215px] cursor-pointer text-left w-full">
        <a href="mailto:	michaelbennett.cs@gmail.com">
          <p className="pt-5 pl-6 pb-1 text-default-500 ">
            michaelbennett.cs@gmail.com
          </p>
        </a>
        <Divider />
        <div className="flex items-center justify-between ">
          <div>
            <p className="pt-5 pl-6  text-default-500">michaelbennett.dev</p>
            <p className="pt-5 pl-6 pb-7 text-[12px] text-default-500">
              Scan the QR code to visit my portfolio
            </p>
          </div>
          <img
            src="/b_card/qr-code.svg"
            alt="QR Code"
            className="w-[108px] pr-5"
          />
        </div>
        <Divider />
        <a href="tel:+13236089665">
          <p className="pt-2 pl-6  text-default-500">(323) 608-9665</p>
        </a>
      </Card>
    </div>
  );
}
