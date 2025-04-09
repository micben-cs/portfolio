"use client";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function PricingPage() {
  return (
    <Card className="mx-3 py-14 ">
      <p className="text-lg font-bold text-default-600">Contact Information</p>
      <Divider />
      <div className="mt-4 space-y-2">
        <p>
          Country:
          <span className="text-default-500"> United States</span>
        </p>
        <p>
          State: <span className="text-default-500"> California</span>
        </p>
        <p>
          City: <span className="text-default-500"> Los Angeles</span>
        </p>
        <p>
          Zip Code: <span className="text-default-500">90027</span>
        </p>
        <p>
          <a
            className=" inline-flex gap-1"
            href="mailto:	michaelbennett.cs@gmail.com"
          >
            Email:
            <span className="text-default-500">
              michaelbennett.cs@gmail.com
            </span>
          </a>
        </p>
        <p>
          <a href="tel:+13236089665">
            Phone: <span className="text-default-500"> (323) 608-9665</span>
          </a>
        </p>
      </div>
    </Card>
  );
}
