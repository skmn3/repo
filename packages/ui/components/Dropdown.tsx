import React, { useState } from "react";
import { Arrow } from "../assets/Arrow";
import ReactOutSideClickHandler from "react-outside-click-handler";

interface PropsType {
  kind?: "outline" | "contained";
  name: string;
  lists: string[];
  value?: string;
  onClick: (value: { keyword: string; name: string }) => void;
  className?: string;
  placeholder: string;
}

const kindColor = {
  outline: "border-2 border-gray-800 bg-gray50",
  contained: "bg-gray100",
};

export const Dropdown = ({
  kind = "outline",
  name,
  lists,
  value,
  onClick,
  className,
  placeholder,
}: PropsType) => {
  const kindCss = kindColor[kind];
  const [dropdown, setDropDown] = useState(false);
  return (
    <ReactOutSideClickHandler
      display="inline-block"
      onOutsideClick={() => {
        setDropDown(false);
      }}
    >
      <div className={`${className} relative`}>
        <div
          onClick={() => setDropDown(true)}
          className={`h-[46px] flex items-center justify-between rounded-sm pl-4 pr-3 ${kindCss} cursor-pointer`}
        >
          <div className={`text-body6 ${value || "text-gray200"}`}>
            {value || placeholder}
          </div>
          <Arrow direction="bottom" />
        </div>
        {dropdown && (
          <div className="absolute z-50 top-14 bg-gray100 rounded-md shadow-xl w-full max-h-[132px] overflow-y-auto flex flex-col items-center">
            {lists.map((keyword, idx) => (
              <>
                <div
                  onClick={() => {
                    onClick({ keyword, name });
                    setDropDown(false);
                  }}
                  className="w-full hover:bg-gray200 flex pl-4 py-2.5 items-center rounded cursor-pointer"
                >
                  {keyword}
                </div>
                {idx !== lists.length - 1 && (
                  <div className="w-[95%] h-[1px]  bg-gray50 shrink-0" />
                )}
              </>
            ))}
          </div>
        )}
      </div>
    </ReactOutSideClickHandler>
  );
};
