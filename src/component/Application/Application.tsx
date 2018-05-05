import * as cx from "classnames";
import * as React from "react";
import { main } from "../main.css";

const Application = () => (
  <div className={cx("container", main)}>
    <h1 className="mx-5 py-5">適当に作ったもの</h1>
    <ul>
      <li><a href="/app/stage-logo-maker">画像にダクソっぽく文字乗せる</a></li>
    </ul>
  </div>
);

export {
  Application
};
