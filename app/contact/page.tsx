"use client";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";

export default function PricingPage() {
  return (
    <Card className="w-full mr-5 mt-10 p-14">
      <p className="text-lg font-bold text-default-600">Contact Information</p>
      <Divider />
      <div className="mt-4 space-y-2">
        <p>
          <span className="text-default-500">Country: </span>
          United States
        </p>
        <p>
          <span className="text-default-500">State: </span> California
        </p>
        <p>
          <span className="text-default-500">City: </span> Los Angeles
        </p>
        <p>
          <span className="text-default-500">Zip Code: </span> 90029
        </p>
        <p>
          <a href="mailto:	michaelbennett.cs@gmail.com">
            <span className="text-default-500">Email: </span>
            michaelbennett.cs@gmail.com
          </a>
        </p>
        <p>
          <a href="tel:+13236089665">
            <span className="text-default-500">Phone: </span> (323) 608-9665
          </a>
        </p>
      </div>
    </Card>
  );
}
