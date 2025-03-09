import { useEffect, useRef } from "react";
import './timeline.css';

const Timeline = () => {
  // 使用 useRef 引用 DOM 元素，並且保持每個元素的引用
  const itemsRef = useRef([]);

  // 檢查元素是否進入視窗
  const isInViewport = (el) => {
    if (!el) return false; // 加入檢查 el 是否存在，避免 null 參考
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // 使用 useEffect 來處理副作用
  useEffect(() => {
    const run = () => {
      // 使用 ref 陣列來處理每個項目
      itemsRef.current.forEach((item) => {
        if (item && isInViewport(item)) {
          item.classList.add("show");
        }
      });
    };

    // 加入事件監聽器
    window.addEventListener("load", run);
    window.addEventListener("resize", run);
    window.addEventListener("scroll", run);

    // 執行一次 run() 以確保初次加載時項目狀態正確
    run();

    // 清理事件監聽器
    return () => {
      window.removeEventListener("load", run);
      window.removeEventListener("resize", run);
      window.removeEventListener("scroll", run);
    };
  }, []); // 空依賴陣列，確保這個 effect 只執行一次

  return (
    <section id="timeline">
      <h5>經歷</h5>
      <h2>Experience</h2>
      <ul>
        <h3>2024</h3>
        <li ref={(el) => (itemsRef.current[0] = el)}>
          <div>
            <div>
              <h2>葳騰科技BQool (5 Year)</h2>
            </div>
            <p>
              Web Designer 網頁設計師<br />
              使用WordPress為架構建置的網站，進行切版功能開發。
            </p>
          </div>
        </li>
        <h3>2017</h3>
        <li ref={(el) => (itemsRef.current[1] = el)}>
          <div>
            <div>
              <h2>中華電信 (3 Year)</h2>
            </div>
            <p>
              Web Designer 網頁設計師<br />
              針對專案進行客製化設計，包括APP、網站、DM製作。
            </p>
          </div>
        </li>
        <h3>2013</h3>
        <li ref={(el) => (itemsRef.current[2] = el)}>
          <div>
            <div>
              <h2>曜發科技 (1 Year)</h2>
            </div>
            <p>
              Web Designer 網頁設計師<br />
              參與政府標案，設計網站、計劃書排版。
            </p>
          </div>
        </li>
        <h3>2011</h3>
        <li ref={(el) => (itemsRef.current[3] = el)}>
          <div>
            <div>
              <h2>米洛克 (1 Year)</h2>
            </div>
            <p>
              Designer 平面設計師<br />
              錶面設計，鐘錶設計、平面設計、活動文宣。
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Timeline;
