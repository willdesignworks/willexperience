import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectHeader from "./components/ProjectHeader";
import Projectsfoot from "./components/Projectsfoot";
import './projects.css';

// 匯入圖片
import img1 from "../assets/single_ux_img_01.png";
import img2 from "../assets/single_ux_img_02.png";
import img3 from "../assets/single_ux_img_03.png";

// 資料
const projects = [
  {
    id: 5,
    description: `
      <p class="title-text-color">我在設計網頁，參考的數據過程。</p>
      <p>作品網址：<a href="https://www.bqool.com/" class="sub-text-color" target="_blank">https://www.bqool.com/</a></p><br>

      <p class="title-text-color">UX / UI流程：</p>
      <p>行銷部(MKT) 統整意見資料跟設計討論。</p>
      <p>設計部(ART) 聽取意見根據後台「行為追蹤」擬定修正方案。</p>
      <p>最後 A/B Testing 1-2個禮拜。</p><br>

      <p class="title-text-color">Google Analytics利用：</p>
      <p class="title-text-color">行銷方式</p>
      <ul>
        <li>官網：<span class="sub-text-color">埋入GA，紀錄那些媒介導流進入、跳出時間、訪客人數。</span></li>
        <li>Blog：<span class="sub-text-color">導流到官網，並加上UTM連結追蹤。</span></li>
        <li>經營社群：<span class="sub-text-color">數位行銷，影片或圖片傳達訊息，導流到官網。</span></li>
        <li>EDM：<span class="sub-text-color">數位行銷，加上UTM連結追蹤，判斷有多少人點開閱讀內容。</span></li>
        <li>廣告頁：<span class="sub-text-color">google廣告推送，關鍵字、效能優化，加上UTM連結追蹤。</span></li>
        <li>Microsoft Clarity：<span class="sub-text-color">後台行為追蹤，記錄熱點、行為模式回放、A/B Testing。</span></li>
      </ul><br>
      <p class="title-text-color">GA 客戶開發報表 (UI/UX)<p>
      <ul>
        <li>推薦 (Referral)流量：<span class="sub-text-color">經由其他網站導流至你的網站。</span></li>
        <li>直接 (Direct)流量：<span class="sub-text-color">直接進入你的網站。</span></li>
        <li>自然搜尋 (Organic)流量：<span class="sub-text-color">透過搜尋引擎輸入關鍵字。</span></li>
        <li>付費搜尋 (Paid Search)流量：<span class="sub-text-color">經由關鍵字廣告進入你的網站。</span></li>
        <li>社群 (Social)流量：<span class="sub-text-color">從社群網站進來的流量。</span></li>
      </ul><br>
      <p class="title-text-color">GA 行為報表 (UI/UX)<p>
      <ul>
        <li>使用者：<span class="sub-text-color">統計訪客數量。</span></li>
        <li>平均瀏覽時間：<span class="sub-text-color">在頁面上的停留時間。</span></li>
        <li>跳出率：<span class="sub-text-color">離開網站的比例。</span></li>
      </ul><br><br><br><br>

      <p class="title-text-color">Microsoft Clarity利用：</p>
      <p>軟體DEMO網址：<a href="https://clarity.microsoft.com/demo/projects/view/3t0wlogvdz/dashboard" class="sub-text-color" target="_blank">https://clarity.microsoft.com/demo/projects/view/3t0wlogvdz/dashboard</a></p><br>
    `,
    images: [
      { id: 1, imgtitle: "熱度圖", imglink: img1 },
      { id: 2, imgtitle: "錄製使用者互動", imglink: img2 },
      { id: 3, imgtitle: "A/B Testing", imglink: img3 },
    ],
    categorytitle: "UI / UX",
    category: "Web Designer",
    chinese: "網頁設計",
  },
];

const ProjectsUX = () => {
  const { id } = useParams(); // 獲取 URL 參數中的 id
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find((project) => project.id === parseInt(id, 10));
    setProject(selectedProject || null);
  }, [id]);

  // 預防 project 為 null
  if (!project) {
    return <p>找不到專案資料...</p>;
  }

  return (
    <>
    <section className="container" id="projectsux-container">

      <ProjectHeader
        categorytitle={project.categorytitle}
        category={project.category}
        chinese={project.chinese}
      />

      <div className="project-description" dangerouslySetInnerHTML={{ __html: project.description }} />

      <div className="portfolio__container">
        {project.images.map(({ id, imgtitle, imglink }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-content">
              <p>{imgtitle}</p>
            </div>
            <div className="portfolio__item-image">
              <img src={imglink} alt={`img-${id}`} />
            </div>
          </article>
        ))}
      </div>
    </section>
    <Projectsfoot />
    </>
  );
};

export default ProjectsUX;