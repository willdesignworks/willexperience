import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectHeader from "./components/ProjectHeader";
import Projectsfoot from "./components/Projectsfoot";
import './projects.css';

// 匯入圖片
import img1 from "../assets/single_bq_imgedm_04.jpg";
import img2 from "../assets/single_bq_imgedm_02.jpg";
import img3 from "../assets/single_bq_imgedm_03.jpg";
import img4 from "../assets/single_bq_imgedm_01.jpg";
import img5 from "../assets/single_bq_imgedm_06.jpg";
import img6 from "../assets/single_bq_imgedm_05.jpg";
import img7 from "../assets/single_bq_imgedm_07.jpg";
import img8 from "../assets/single_bq_imgedm_09.jpg";
import img9 from "../assets/single_bq_imgedm_10.jpg";
import img10 from "../assets/single_bq_imgedm_08.jpg";
// 資料
const projects = [
  {
    id: 6,
    description: `
      <p>EN官網：<a href="https://www.bqool.com/" target="_blank" class="sub-text-color">https://www.bqool.com/</a><p>
      <p>ES官網：<a href="https://www.bqool.com/es/<" target="_blank" class="sub-text-color">https://www.bqool.com/es/</a><p>
      <p>TW官網：<a href="https://www.bqool.com.tw/" target="_blank" class="sub-text-color">https://www.bqool.com.tw/</a><p>
      <p>Blog：<a href="https://blog.bqool.com/" target="_blank" class="sub-text-color">https://blog.bqool.com/</a><p><br>
      <p>網站的維運、改版，活動網頁的規劃、開發，風格設計。<p>
    `,
    images: [
      { id: 1, imgtitle: "推廣 Blog文章", imglink: img1 },
      { id: 2, imgtitle: "推廣 Blog文章", imglink: img2 },
      { id: 3, imgtitle: "推廣 Blog文章", imglink: img3 },
      { id: 4, imgtitle: "活動 折扣碼", imglink: img4 },
      { id: 5, imgtitle: "活動 折扣碼", imglink: img5 },
      { id: 6, imgtitle: "推廣 合作影片", imglink: img6 },
      { id: 7, imgtitle: "推廣 合作影片", imglink: img7 },
      { id: 8, imgtitle: "推廣 合作影片", imglink: img8 },
      { id: 9, imgtitle: "推廣 合作影片", imglink: img9 },
      { id: 10, imgtitle: "活動 耶誕節", imglink: img10 },
    ],
    categorytitle: "EDM",
    category: "Electronic",
    chinese: "電子報",
  },
];

const ProjectsEdm = () => {
  const { id } = useParams(); // 獲取 URL 參數中的 id
  const [project, setProject] = useState(null);

  useEffect(() => {
    /* 每次 id 改變時，將滾動條位置設置回頂部*/
    window.scrollTo(0, 0);
    
    // 根據 id 查找對應的專案資料
    const selectedProject = projects.find((project) => project.id === parseInt(id, 10));
    setProject(selectedProject || null);
  }, [id]);

  // 預防 project 為 null
  if (!project) {
    return <p>找不到專案資料...</p>;
  }

  return (
    <>
    <section className="container" id="projects-edm">

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

export default ProjectsEdm;
