import React, { useState } from "react";
import { Button } from "../Button";
import { Selected, UnSelected } from "../../assets";
import { ShareFnType } from ".";

const sharingButton = [
  { text: "비공개", button_Status: "CREATED SUBMITTED" },
  { text: "공개", button_Status: "SHARING" },
];

interface PropsType {
  status?: "CREATED" | "SUBMITTED" | "SHARING";
  sharingFn: ShareFnType;
  document_id?: string;
}

export const Sharing = ({ status, sharingFn, document_id }: PropsType) => {
  const share = () => sharingFn(status === "SHARING" ? "UNSHARING" : "SHARING");
  return (
    <>
      <div className="text-title4">1316 장지성</div>

      <div className="flex flex-col gap-[10px] mt-6">
        <div className="text-body5">문서 공개 설정</div>
        {sharingButton.map(({ text, button_Status }) => {
          const includeShare = status && button_Status.includes(status);

          return (
            <div
              onClick={() => includeShare || share()}
              className=" bg-gray600 rounded-md text-body6 px-3 py-[14px] flex items-center justify-between"
            >
              {text}
              {includeShare ? <Selected /> : <UnSelected />}
            </div>
          );
        })}
      </div>

      <div className="text-body5 mt-6 mb-[10px]">내보내기</div>
      <Button kind="containedWhite" className="w-full">
        PDF로 내보내기
      </Button>
    </>
  );
};
