import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectHeader from "./components/ProjectHeader";
import Projectsfoot from "./components/Projectsfoot";
import './projects.css';

// 匯入圖片
import img1 from "../assets/single_bq_blogimg_01.jpg";
import img3 from "../assets/single_bq_blogimg_03.jpg";
import img4 from "../assets/single_bq_blogimg_04.jpg";
import img5 from "../assets/single_bq_blogimg_05.jpg";
import img6 from "../assets/single_bq_blogimg_06.jpg";
import img7 from "../assets/single_bq_blogimg_07.jpg";
import img8 from "../assets/single_bq_imgbanner_01.jpg";
import img9 from "../assets/single_bq_imgbanner_02.jpg";
import img10 from "../assets/single_bq_imgbanner_03.jpg";
import img11 from "../assets/single_bq_imgbanner_04.jpg";
import img12 from "../assets/single_bq_imgbanner_05.jpg";
import img13 from "../assets/single_bq_imgbanner_06.jpg";
import img14 from "../assets/single_bq_imgblog_01.jpg";
import img15 from "../assets/single_bq_imgblog_01-1.jpg";
import img16 from "../assets/single_bq_imgblog_02.jpg";
import img17 from "../assets/single_bq_imgblog_02-1.jpg";
import img18 from "../assets/single_bq_imgblog_04.jpg";
import img19 from "../assets/single_bq_imgblog_04-1.jpg";
// 資料
const projects = [
  {
    id: 7,
    description: `
      <p>EN官網：<a href="https://www.bqool.com/" target="_blank" class="sub-text-color">https://www.bqool.com/</a><p>
      <p>ES官網：<a href="https://www.bqool.com/es/<" target="_blank" class="sub-text-color">https://www.bqool.com/es/</a><p>
      <p>TW官網：<a href="https://www.bqool.com.tw/" target="_blank" class="sub-text-color">https://www.bqool.com.tw/</a><p>
      <p>Blog：<a href="https://blog.bqool.com/" target="_blank" class="sub-text-color">https://blog.bqool.com/</a><p><br>
      <p>網站的維運、改版，活動網頁的規劃、開發，風格設計。<p>
    `,
    images: [
      { id: 1, imgtitle: "", imglink: img1 },
      { id: 3, imgtitle: "", imglink: img3 },
      { id: 4, imgtitle: "", imglink: img4 },
      { id: 5, imgtitle: "", imglink: img5 },
      { id: 6, imgtitle: "", imglink: img6 },
      { id: 7, imgtitle: "", imglink: img7 },
    ],
    categorytitle: "Social Media",
    category: "Social Media",
    chinese: "數位行銷",
  },
  {
    id: 8,
    description: `
      <p>EN官網：<a href="https://www.bqool.com/" target="_blank" class="sub-text-color">https://www.bqool.com/</a><p>
      <p>ES官網：<a href="https://www.bqool.com/es/<" target="_blank" class="sub-text-color">https://www.bqool.com/es/</a><p>
      <p>TW官網：<a href="https://www.bqool.com.tw/" target="_blank" class="sub-text-color">https://www.bqool.com.tw/</a><p>
      <p>Blog：<a href="https://blog.bqool.com/" target="_blank" class="sub-text-color">https://blog.bqool.com/</a><p><br>
      <p>網站的維運、改版，活動網頁的規劃、開發，風格設計。<p>
    `,
    images: [
      { id: 1, imgtitle: "活動 黑色星期五", imglink: img8 },
      { id: 3, imgtitle: "活動 聖誕節", imglink: img9 },
      { id: 4, imgtitle: "活動 萬聖節", imglink: img10 },
      { id: 5, imgtitle: "活動 黑色星期五", imglink: img11 },
      { id: 6, imgtitle: "活動 折扣碼", imglink: img12 },
      { id: 7, imgtitle: "活動 10周年", imglink: img13 },
      { id: 7, imgtitle: "社群 文章圖片", imglink: img14 },
      { id: 7, imgtitle: "社群 文章圖片", imglink: img15 },
      { id: 7, imgtitle: "", imglink: img16 },
      { id: 7, imgtitle: "", imglink: img17 },
      { id: 7, imgtitle: "", imglink: img18 },
      { id: 7, imgtitle: "", imglink: img19 },
    ],
    categorytitle: "Social Media",
    category: "Social Media",
    chinese: "數位行銷",
  },
];

const ProjectsSocialMedia = () => {
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
    <section className="container" id="projects-socialmedia">
      
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

export default ProjectsSocialMedia;
