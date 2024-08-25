import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <div className="flex h-16 items-center space-x-5 ">
        <h1>ポートフォリオ</h1>
        <nav className="space-x-5">
          <Button variant={"outline"} size={"lg"}>
            プロフィール
          </Button>
          <Button variant={"outline"} size={"lg"}>
            言語
          </Button>
          <Button variant={"outline"} size={"lg"}>
            作品
          </Button>
        </nav>
        <span className="flex-1"></span>
        <Button variant={"ghost"}>ログアウト</Button>
      </div>
    </>
  );
};

export default Header;
