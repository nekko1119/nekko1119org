import * as cx from "classnames";
import * as React from "react";
import * as githubImage from "../../../image/github.png";
import * as hatenablogImage from "../../../image/hatenablog.png";
import * as IconImage from "../../../image/icon.png";
import * as qiitaImage from "../../../image/qiita.png";
import * as twitterImage from "../../../image/twitter.png";
import { main } from "../main.css";
import * as styles from "./style.css";
const services = [
  {
    src: twitterImage,
    url: "https://twitter.com/nekko1119"
  },
  {
    src: githubImage,
    url: "https://github.com/nekko1119"
  },
  {
    src: hatenablogImage,
    url: "http://nekko1119.hatenablog.com/"
  },
  {
    src: qiitaImage,
    url: "https://qiita.com/nekko1119"
  }
];

const Service = () => (
  <div className="text-center mb-5">
  {
    services.map((service, i) =>
      (
        <a href={service.url} target="_blank" className="ml-3" key={i}>
          <img className={cx("img-thumbnail", styles.serviceIcon)} src={service.src} />
        </a>
      )
    )
  }
  </div>
);

const Home = () => (
  <div>
    <div
      className={cx("jumbotron", "rounded-0", "position-relative", styles.headerImage)}
    />
    <div className={cx("container", main)}>
      <div className="text-center mb-4 pt-4">
        <img className={cx("img-thumbnail", "mb-2", styles.icon)} src={IconImage} />
        <div className="text-center">
          <h2>nekko1119</h2>
        </div>
      </div>
      <Service />
      <div className="mx-5">
        <h3>仕事</h3>
        <p>
          仕事はWebフロントエンド開発をしています<br />
          TypeScript, FlowType, React, Redux, RxJS, Jest, Webpack, ...<br />
          cssはまだ初心者です
        </p>
        <h3>趣味</h3>
        <h5>プログラミング</h5>
        <p>
          主にC++とゲームプログラミングに興味があります<br />
          C++の規格(よく分からない), テンプレートメタプログラミング(よく分からない), constexprによるコンパイル時計算(よく分からない),
          Boost各種, GTest, Catch, CppCoreGuideline, Streams, RxCpp, DirectX, win32API, ...
        </p>
        <p>
          また、より良いコードの書き方や設計に興味があります<br />
          SOLID原則、デメテルの法則、DRY原則、YAGNI、例外安全、デザインパターン、テスタビリティ、カバレッジ、疎結合、凝集度, ...
        </p>
        <h5>ゲーム</h5>
        <p>
          ゲームを遊ぶのも好きです<br />
          ゼルダの伝説、風来のシレン、ピクミン、DARK SOULS、Bloodborne、Demon's Souls、
          EXVS、逆転裁判、パワプロ、ドラゴンクエスト、アイマス、ポケモン、RED STONE、...<br />
          アナログゲームも好きです。ドミニオン、カルカソンヌ、カタン、コヨーテ、コードネーム、藪の中に、...
        </p>
      </div>
    </div>
  </div>
);

export {
  Home
};
