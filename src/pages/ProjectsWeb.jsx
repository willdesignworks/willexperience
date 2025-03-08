import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectHeader from "./components/ProjectHeader";
import Projectsfoot from "./components/Projectsfoot";
import './projects.css';

// 匯入圖片
import img1 from "../assets/single_bq_img_01_en.jpg";
import img2 from "../assets/single_bq_img_02_en.jpg";
import img4 from "../assets/single_bq_img_04_blog.jpg";
import img5 from "../assets/single_bq_imglanding_01.jpg";
import img6 from "../assets/single_bq_imglanding_02.jpg";
import img7 from "../assets/single_bq_imglanding_03.jpg";
// 資料
const projects = [
  {
    id: 2,
    description: `
      <p>EN官網：<a href="https://www.bqool.com/" target="_blank" class="sub-text-color">https://www.bqool.com/</a></p>
      <p>ES官網：<a href="https://www.bqool.com/es/<" target="_blank" class="sub-text-color">https://www.bqool.com/es/</a></p>
      <p>TW官網：<a href="https://www.bqool.com.tw/" target="_blank" class="sub-text-color">https://www.bqool.com.tw/</a></p>
      <p>Blog：<a href="https://blog.bqool.com/" target="_blank" class="sub-text-color">https://blog.bqool.com/</a></p><br>
      <p>網站的維運、改版，活動網頁的規劃、開發，風格設計。</p>
    `,
    images: [
      { id: 1, imgtitle: "EN官網", imglink: img1 },
      { id: 2, imgtitle: "ES官網", imglink: img2 },
      { id: 4, imgtitle: "Blog", imglink: img4 },
    ],
    categorytitle: "Web Designer",
    category: "Web Designer",
    chinese: "網頁設計",
  },
  {
    id: 3,
    description: "Web Development",
    images: [
      { id: 5, imgtitle: "登陸頁 1", imglink: img5 },
      { id: 6, imgtitle: "登陸頁 2", imglink: img6 },
      { id: 7, imgtitle: "登陸頁 3", imglink: img7 },
    ],
    categorytitle: "Web Designer",
    category: "Web Designer",
    chinese: "網頁設計",
  },
];

const ProjectsWeb = () => {
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
    <section className="container" id="projects-container">

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

export default ProjectsWeb;
