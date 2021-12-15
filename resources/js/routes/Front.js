import React from "react"
import { Link } from "react-router-dom"

import "../../sass/app.scss"

const Front = () => {

  return (
    <>
      <main className="front">
      <h1>地域社会の「つながり」<br/>についてのアンケート</h1>
      <div className="frontExplain">
        <p>
          ・このアンケートは、長野市中心５地区（第一地区～第五地区）の町会に加入している全世帯に配布しています。
        </p>
        <p>
          ・このアンケートで言う「町会」は、行政連絡区（区長）の単位を指します。
        </p>
        <p>
          ・このアンケートでは、あなたの普段の暮らしについてお聞きします。新型コロナウィルス感染拡大の影響で、それ以前とは暮らしが変わってしまっているかもしれませんが、<span>今の暮らしについて</span>お答えください。
        </p>
      </div>
      <div className="frontLink">
        <Link to="/step1">回答を始める</Link>
      </div>

      </main>
    </>
  );
};
export default Front;
