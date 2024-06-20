import Drawer from "@/components/Drawer";
import {
  ArrowUpLeft,
  CalendarCheck2,
  MoveDownLeft,
  MoveUpRight,
  PieChart,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Drawer>
      <div className="flex flex-row ">
        <div className="basis-1/4 ">
          <div className="flex gap-8">
            <div className="py-28 px-28 bg-gradient-to-r from-green-400 to-emerald-400 mt-4 shadow-md">
              <p className="capitalize text-xs text-white">total orders</p>
              <h2 className="text-white">12,500,00</h2>
              <div
                className="radial-progress text-white mt-2"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                <MoveUpRight />
              </div>
              <h2 className=" text-center text-lg mt-1 text-white">100%</h2>
            </div>
            <div className="py-28 px-28 mt-4 shadow-md bg-gradient-to-r from-purple-400 to-purple-500">
              <p className="capitalize text-xs text-white">total sale</p>
              <h2 className="text-white">$8,765,11</h2>
              <div
                className="radial-progress text-white mt-2"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                <MoveDownLeft />
              </div>
              <h2 className=" text-center text-lg mt-1 text-white">80%</h2>
            </div>
            <div className="py-28 px-28 bg-gradient-to-r from-blue-400 to-blue-500 mt-4 shadow-md">
              <p className="capitalize text-xs text-white">orders revenue</p>
              <h2 className="text-white">$871,987,00</h2>
              <div
                className="radial-progress text-white mt-2"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                <MoveUpRight />
              </div>
              <h2 className=" text-center text-lg mt-1 text-white">100%</h2>
            </div>
            <div className="py-28 px-28 bg-gradient-to-r from-orange-400 to-orange-500  mt-4 shadow-md">
              <p className="capitalize text-xs text-white">total vititors</p>
              <h2 className="text-white">20,454,00</h2>
              <div
                className="radial-progress text-white mt-2"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                <MoveDownLeft />
              </div>
              <h2 className=" text-center text-lg mt-1 text-white">75%</h2>
            </div>
          </div>
        </div>

        <div className="basis-1/2 bg-white shadow-md px-16 ">
          <div className="flex items-center justify-around p-8">
            <div className="">
              <h1 className="capitalize">revenue</h1>
            </div>
            <div className="">
              <details className="dropdown">
                <summary className="m-1 btn">
                  <CalendarCheck2 />
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>2019</a>
                  </li>
                  <li>
                    <a>2020</a>
                  </li>
                  <li>
                    <a>2021</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-4xl text-amber-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
