import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectHeader from "./components/ProjectHeader";
import Projectsfoot from "./components/Projectsfoot";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './projects.css';

// 匯入圖片
import img1 from "../assets/single_cht_img_01.jpg";
import img3 from "../assets/single_cht_img_03.jpg";
import img4 from "../assets/single_cht_img_04.jpg";
import img5 from "../assets/single_cht_img_05.jpg";
import img6 from "../assets/single_cht_img_06.jpg";
import img7 from "../assets/single_cht_img_07.jpg";
import img8 from "../assets/single_cht_img_08.jpg";
import img9 from "../assets/single_cht_img_09.jpg";
import img10 from "../assets/single_cht_img_10.jpg";
import img11 from "../assets/single_cht_img_11.jpg";
import img12 from "../assets/single_cht_img_12.jpg";
import img13 from "../assets/single_cht_img_13.jpg";
import img14 from "../assets/single_cht_img_14.jpg";
import img15 from "../assets/single_cht_img_20.jpg";
import img16 from "../assets/single_cht_img_21.jpg";
import img17 from "../assets/single_cht_img_22.jpg";
import img18 from "../assets/single_cht_img_23.jpg";
import AppLightBox from "./components/AppLightBox";
// 資料
const projects = [
  {
    id: 4,
    description: `
      <p>台鐵App 台鐵e訂通</p><br>

      <p class="sub-text-color">製作流程：</p>
      <p>IA 資訊架構 (架構規劃)</p>
      <p>Functional Map (功能規劃)</p>
      <p>Flow Chart (完成任務操作的流程)</p>
      <p>UI Flow (完成任務頁面的過程)</p><br>

      <p><span class="sub-text-color">PM部分：</span>IA 資訊架構、Functional Map</p>
      <p><span class="sub-text-color">我的部分：</span>Flow Chart、UI Flow、Mockup</p>
    `,
    descriptionLogic : `
      <p class="title-text-color">Logic Flow</p>
    `,
    descriptionMockup: `
      <p class="title-text-color">Mockup (旅客服務)</p>
      <p class="sub-text-color">設計重點：活潑、對比強烈</p>
    `,
    descriptionCaptain: `
      <p class="title-text-color">Mockup (車掌服務)</p>
      <p class="sub-text-color">設計重點：深色沉穩、資訊清楚</p>
    `,
    descriptionStep: `
      <p class="title-text-color">流程：訂票紀錄查詢為範例</p>
    `,
    images: [
      { id: 1, imgtitle: "UI Flow", imgcategory: "flow", imglink: img3 },
      { id: 3, imgtitle: "Flow Chart", imgcategory: "flow", imglink: img1 },
      { id: 4, imgtitle: "UI Flow", imgcategory: "flow", imglink: img7 },
      { id: 5, imgtitle: "Mockup (輸入框)", imgcategory: "flow", imglink: img4 },
      { id: 6, imgtitle: "Logic Flow", imgcategory: "step", imglink: img6 },
      { id: 7, imgtitle: "Mockup (列表)", imgcategory: "flow step", imglink: img9 },
      { id: 8, imgtitle: "首頁", imgcategory: "mockup", imglink: img8 },
      { id: 9, imgtitle: "訂票-列表", imgcategory: "mockup", imglink: img5 },
      { id: 10, imgtitle: "訂票-內頁", imgcategory: "mockup", imglink: img10 },
      { id: 11, imgtitle: "彈出框", imgcategory: "mockup", imglink: img11 },
      { id: 12, imgtitle: "Mockup (輸入框)", imgcategory: "step", imglink: img12 },
      { id: 13, imgtitle: "選單", imgcategory: "mockup", imglink: img13 },
      { id: 14, imgtitle: "列表", imgcategory: "mockup", imglink: img14 },
      { id: 15, imgtitle: "車長 首頁", imgcategory: "mockupcaptain", imglink: img15 },
      { id: 16, imgtitle: "車長 列表", imgcategory: "mockupcaptain", imglink: img16 },
      { id: 17, imgtitle: "車長 旅客座位", imgcategory: "mockupcaptain", imglink: img17 },
      { id: 18, imgtitle: "車長 彈出框", imgcategory: "mockupcaptain", imglink: img18 },
    ],
    categorytitle: "UI / UX",
    category: "App design",
    chinese: "APP設計",
  },
];

const ProjectApp = () => {

  const { id } = useParams(); // 獲取 URL 參數中的 id
  const [project, setProject] = useState(null);
  // 呈現哪筆資料
  useEffect(() => {
    const selectedProject = projects.find((project) => project.id === parseInt(id, 10));
    setProject(selectedProject || null);
  }, [id]);

  // Lightbox 狀態
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // 預防 project 為 null
  if (!project) {
    return <p>找不到專案資料...</p>;
  }

// 篩選並排序
const ImgCategoryFlow = project 
  ? project.images.filter(image => image.imgcategory.split(" ").includes("flow")).sort((a, b) => a.id - b.id)
  : [];

const ImgCategoryMockup = project 
  ? project.images.filter(image => image.imgcategory.split(" ").includes("mockup")).sort((a, b) => a.id - b.id)
  : [];

const ImgCategoryCaptain = project 
  ? project.images.filter(image => image.imgcategory === "mockupcaptain").sort((a, b) => a.id - b.id)
  : [];

const ImgCategoryStep = project 
  ? project.images.filter(image => image.imgcategory.split(" ").includes("step")).sort((a, b) => a.id - b.id)
  : [];
// 資料展開 給 Lightbox
  const sortedImages = [
    ...ImgCategoryFlow,
    ...ImgCategoryMockup,
    ...ImgCategoryCaptain,
    ...ImgCategoryStep,
  ];

  return (
  <>
<section className="container" id="projectapp-container">

  <Lightbox
    open={open}
    index={index}
    close={() => setOpen(false)}
    slides={sortedImages.map(({ imglink }) => ({ src: imglink }))}
    onClose={() => console.log("Lightbox closed")}
    controller={{
      closeOnBackdropClick: true,  // 點擊背景時關閉
      closeOnPullUp: false,        // 禁用向上滑動關閉
      closeOnPullDown: false,      // 禁用向下滑動關閉
    }}
  />

  <ProjectHeader
    categorytitle={project.categorytitle}
    category={project.category}
    chinese={project.chinese}
  />
  <div className="project-description" dangerouslySetInnerHTML={{ __html: project.description }} />

  {/*ImgCategoryFlow*/}
  <div className="project-description" dangerouslySetInnerHTML={{ __html: project.descriptionLogic }} />
  <div className="portfolio__container first">
    {ImgCategoryFlow.map(({ id, imgtitle, imglink }) => (
      <AppLightBox
        key={id}
        id={id}
        imgtitle={imgtitle}
        imglink={imglink}
        sortedImages={sortedImages}
        setIndex={setIndex}
        setOpen={setOpen}
      />
    ))}
  </div>

  {/*ImgCategoryMockup*/}
  <div className="project-description" dangerouslySetInnerHTML={{ __html: project.descriptionMockup }} />
  <div className="portfolio__container">
    {ImgCategoryMockup.map(({ id, imgtitle, imglink }) => (
      <AppLightBox
        key={id}
        id={id}
        imgtitle={imgtitle}
        imglink={imglink}
        sortedImages={sortedImages}
        setIndex={setIndex}
        setOpen={setOpen}
      />
    ))}
  </div>

  {/*ImgCategoryCaptain*/}
  <div className="project-description" dangerouslySetInnerHTML={{ __html: project.descriptionCaptain }} />
  <div className="portfolio__container">
    {ImgCategoryCaptain.map(({ id, imgtitle, imglink }) => (
      <AppLightBox
        key={id}
        id={id}
        imgtitle={imgtitle}
        imglink={imglink}
        sortedImages={sortedImages}
        setIndex={setIndex}
        setOpen={setOpen}
      />
    ))}
  </div>

  {/*ImgCategoryStep*/}
  <div className="project-description" dangerouslySetInnerHTML={{ __html: project.descriptionStep }} />
  <div className="portfolio__container">
    {ImgCategoryStep.map(({ id, imgtitle, imglink }) => (
      <AppLightBox
        key={id}
        id={id}
        imgtitle={imgtitle}
        imglink={imglink}
        sortedImages={sortedImages}
        setIndex={setIndex}
        setOpen={setOpen}
      />
    ))}
  </div>
</section>
<Projectsfoot />
  </>
  );
};

export default ProjectApp;