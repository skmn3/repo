import { Plus } from "../../../../packages/ui/assets";
import { Logo } from "../../../../packages/ui";

const SignUp = () => {
  return (
    <div className="flex h-[100vh]">
      <div
        className="flex justify-center items-center flex-col flex-1 backdrop-blur-3xl"
        style={{ boxShadow: "inset 0px 4px 240px rgba(0, 0, 0, 0.25)" }}
      >
        <Logo />
        <div className="bg-gray100 flex justify-center items-center w-52 h-52 rounded-full mt-14 mb-5">
          <Plus />
        </div>
        <p className="text-body5">프로필 추가</p>
      </div>
      <div className="w-[770px]">
        <div className="text-title1">회원가입</div>
      </div>
    </div>
  );
};

export default SignUp;