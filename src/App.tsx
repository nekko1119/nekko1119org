import * as React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const navbarId = "globalNavBarId";

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <nav
          className="navbar navbar-expand navbar-dark bg-dark"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/app" className="nav-link">
                App
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/app" component={Application} />
        <Route component={NotFound} />
      </Switch>

      <footer className="footer text-center pt-3">
        <div className="container">
          <a className="footer-link" href="/"><p>nekko1119.org</p></a>
        </div>
      </footer>
    </div>
  </BrowserRouter>
);

const Home = () => (
  <div>
    <div
      className="jumbotron rounded-0 position-relative header-image"
      style={{
        height: "50vh"
      }}
    />
    <div className="container main">
      <div className="text-center mb-4 pt-4">
        <img className="img-thumbnail mb-2" src="../image/icon.png" height={128} width={128} style={{ borderRadius: "50%" }} />
        <div className="text-center">
          <h2>nekko1119</h2>
        </div>
      </div>
      <div className="text-center mb-5">
        <a href="https://twitter.com/nekko1119" target="_blank" className="ml-3">
          <img className="img-thumbnail" height={64} width={64} style={{ borderRadius: "50%" }} src="../image/twitter.png" />
        </a>
        <a href="https://github.com/nekko1119" target="_blank" className="ml-3">
          <img className="img-thumbnail" height={64} width={64} style={{ borderRadius: "50%" }} src="../image/github.png" />
        </a>
        <a href="http://nekko1119.hatenablog.com/" target="_blank" className="ml-3">
          <img className="img-thumbnail" height={64} width={64} style={{ borderRadius: "50%" }} src="../image/hatenablog.png" />
        </a>
        <a href="https://qiita.com/nekko1119" target="_blank" className="ml-3">
          <img className="img-thumbnail" height={64} width={64} style={{ borderRadius: "50%" }} src="../image/qiita.png" />
        </a>
      </div>
      <div className="mx-5">
        <h3>仕事</h3>
        <p>
          仕事はWebフロントエンド開発をしています<br />
          TypeScript, FlowType, React, Redux, RxJS, Jest, Webpack, ...<br />
          cssはまだ初心者です
        </p>
        <h3>趣味</h3>
        <p>
          C++とゲームプログラミング、Android開発に興味があります(Androidはまだ未着手)<br />
          最新C++規格, テンプレートメタプログラミング, constexprによるコンパイル時計算,
          Boost各種, Gtest, Catch, CppCoreGuideline, Streams, RxCpp, DirectX, win32API, ...
        </p>
        <p>
          また、より良いコードの書き方や設計に興味があります<br />
          SOLID原則、デメテルの法則、DRY原則、YAGNI、例外安全、デザインパターン、テスタビリティ、カバレッジ、疎結合、凝集度, ...
        </p>
        <p>
          また、ゲームが趣味です<br />
          風来のシレン、ゼルダの伝説、ピクミン、DARK SOULS、Bloodborne、Demon's Souls、<br />
          ガンダムバーサス、ドラゴンクエスト、ポケモン、RED STONE、逆転裁判、パワプロ、...
        </p>
      </div>
    </div>
  </div>
);

const Application = () => (
  <div className="container main">
    <h1 className="mx-5 py-5">適当に作ったもの</h1>
    <ul>
      <li><a href="/apps/darksouls-logo-maker">画像にダクソっぽく文字乗せる</a></li>
    </ul>
  </div>
);

const NotFound = () => (
  <div className="container main">
    <h1 className="mx-5 py-5">Not Found</h1>
  </div>
);

export {
  App
};
