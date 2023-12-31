import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import RestaurantMenu from "../components/RestaurantMenu";
import { Metadata } from "next";

/* eslint-disable @next/next/no-img-element */
export const metadata: Metadata = {
  title: 'Menu | MilesStone Grill | OpenTable',
  description: 'Generated by create next app',
}

export default function Menu() {
  return (
    <>
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar />
          <RestaurantMenu />
        </div>
    </>
  );
}
