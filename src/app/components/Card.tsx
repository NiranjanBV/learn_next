/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Card(){
    return (
        <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <Link href="/restaurant/Milesstone_Grill">
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/26226232.webp"
                  alt=""
                  className="w-full h-36"
                />
                <div className="p-1">
                  <h3 className="font-bold text-2xl mb-2">Niru Hotel</h3>
                  <div className="flex items-start">
                    <div className="flex mb-2">*******</div>
                    <p className="ml-2">0 reviews</p>
                  </div>
                  <div className="flex text-reg font-light capitalize">
                    <p className="mr-3">Mexican</p>
                    <p className="mr-3">$$$$</p>
                    <p>Toronto</p>
                  </div>
                  <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
                </div>
              </Link>
            </div>
    );
}