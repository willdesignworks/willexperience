import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectHeader from "./components/ProjectHeader";
import Projectsfoot from "./components/Projectsfoot";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./projects.css";

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
import img22 from "../assets/single_cht_img_25.jpg";
import img24 from "../assets/single_ui_img_24.jpg";
import img21 from "../assets/single_ui_img_26.jpg";
import img27 from "../assets/single_ui_img_27.jpg";
import AppLightBox from "./components/AppLightBox";
// 資料
const projects = [
  {
    id: 4,
    description: `<div style="text-align:center;">
      <p>台鐵App 台鐵e訂通<br>
      <span class="sub-text-color">台鐵e訂通是台灣鐵路管理局官方的手機應用程式，<br>提供旅客便捷的訂票、查詢、服務等功能。</span></p>
      <p><img src="${img22}" style="max-width:640px;margin:12px auto;" /></p>

      <p class="title-text-color;" style="display:flex;gap:30px;justify-content: center;">
      <a href="https://apps.apple.com/tw/app/%E5%8F%B0%E9%90%B5e%E8%A8%82%E9%80%9A/id1441617748">蘋果 APP 下載</a>
      <a href="https://play.google.com/store/apps/details?id=tw.gov.tra.twtraffic&hl=zh_TW">安卓 APP 下載</a>
      </p>
      </div>
<br><br>
      <p class="title-text-color">製作流程：</p>
      <p>1. 競品分析 (GPT、Claude AI 協助比較表格)</p>
      <p>2. 使用者分析 (需求分析、架構圖、模組化製作、設計系統)</p>
      <p>3. Wireflow (切版成為 HTML 格式，討論有畫面輔助)</p>
      <p>4. 高保真原型 (製作配色完成的檔案)</p><br>
    `,
    descriptionarChitecture: `
      <p class="title-text-color">2 使用者分析</p>
      <ul>
        <li>2-1 需求分析</li>
        <li>2-2 架構圖</li>
        <li>2-3 模組化製作</li>
        <li>2-4 設計系統</li>
      </ul><br>
      <p class="title-text-color">2-2 架構圖</p>
    `,
    imagesarchitecture: [
      { id: 1, imgtitle: "UI Flow", imgcategory: "flow", imglink: img3 },
    ],

    descriptionarComponents: `
      <p class="title-text-color">2-3 模組化製作</p>
      <a  class="sub-text-color" target="_blank" href="https://www.figma.com/design/xbsEWcV7KJCYutscPXHJOA/share%E8%A8%AD%E8%A8%88%E4%B8%AD_%E5%8F%B0%E9%90%B5?node-id=36-128&m=dev&t=j87KFw8f14l5K8NL-1">Figma 連結</a>
    `,
    imagesComponents: [
      { id: 2, imgtitle: "UI Flow", imgcategory: "flow", imglink: img21 },
    ],

    descriptionarSystem: `
      <p class="title-text-color">2-4 設計系統</p>
      <a  class="sub-text-color" target="_blank" href="https://www.figma.com/design/xbsEWcV7KJCYutscPXHJOA/share%E8%A8%AD%E8%A8%88%E4%B8%AD_%E5%8F%B0%E9%90%B5?node-id=38-128&m=dev&t=j87KFw8f14l5K8NL-1">Figma 連結</a>
    `,
    imagesSystem: [
      { id: 3, imgtitle: "UI Flow", imgcategory: "flow", imglink: img24 },
    ],

    descriptionarWireflow: `
      <p class="title-text-color">3 Wireflow (溝通流程、配色)</p>
      <a  class="sub-text-color" target="_blank" href="https://www.figma.com/design/xbsEWcV7KJCYutscPXHJOA/share%E8%A8%AD%E8%A8%88%E4%B8%AD_%E5%8F%B0%E9%90%B5?node-id=38-128&m=dev&t=j87KFw8f14l5K8NL-1">Figma 連結</a>
    `,
    imagesWireflow: [
      { id: 4, imgtitle: "UI Flow", imgcategory: "flow", imglink: img27 },
    ],

    descriptionMockup: `
      <p class="title-text-color">4 高保真原型</p>
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
      { id: 5, imgtitle: "Flow Chart", imgcategory: "flow", imglink: img1 },
      { id: 6, imgtitle: "UI Flow", imgcategory: "flow", imglink: img7 },
      {
        id: 7,
        imgtitle: "Mockup (輸入框)",
        imgcategory: "flow",
        imglink: img4,
      },
      { id: 8, imgtitle: "Logic Flow", imgcategory: "step", imglink: img6 },
      {
        id: 9,
        imgtitle: "Mockup (列表)",
        imgcategory: "flow step",
        imglink: img9,
      },
      { id: 10, imgtitle: "首頁", imgcategory: "mockup", imglink: img8 },
      { id: 11, imgtitle: "訂票-列表", imgcategory: "mockup", imglink: img5 },
      { id: 12, imgtitle: "訂票-內頁", imgcategory: "mockup", imglink: img10 },
      { id: 13, imgtitle: "彈出框", imgcategory: "mockup", imglink: img11 },
      {
        id: 14,
        imgtitle: "Mockup (輸入框)",
        imgcategory: "step",
        imglink: img12,
      },
      { id: 15, imgtitle: "選單", imgcategory: "mockup", imglink: img13 },
      { id: 16, imgtitle: "列表", imgcategory: "mockup", imglink: img14 },
      {
        id: 17,
        imgtitle: "車長 首頁",
        imgcategory: "mockupcaptain",
        imglink: img15,
      },
      {
        id: 18,
        imgtitle: "車長 列表",
        imgcategory: "mockupcaptain",
        imglink: img16,
      },
      {
        id: 19,
        imgtitle: "車長 旅客座位",
        imgcategory: "mockupcaptain",
        imglink: img17,
      },
      {
        id: 20,
        imgtitle: "車長 彈出框",
        imgcategory: "mockupcaptain",
        imglink: img18,
      },
    ],
    categorytitle: "UI / UX",
    category: "App design",
    chinese: "APP設計",
  },
];

const ProjectApp = () => {
  const { id } = useParams(); // 獲取 URL 參數中的 id
  const [project, setProject] = useState(null);

  useEffect(() => {
    /* 每次 id 改變時，將滾動條位置設置回頂部*/
    window.scrollTo(0, 0);

    // 根據 id 查找對應的專案資料
    const selectedProject = projects.find(
      (project) => project.id === parseInt(id, 10)
    );
    setProject(selectedProject || null);
  }, [id]);

  // Lightbox 狀態
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // 預防 project 為 null
  if (!project) {
    return <p>找不到專案資料...</p>;
  }

  // 取得各類型圖片
  const ImgArchitecture = project?.imagesarchitecture || [];
  const ImgCategoryFlow = project?.imagesFlow || []; // 架構
  const ImgComponents = project?.imagesComponents || []; // 組件
  const ImgSystem = project?.imagesSystem || []; // 設計系統
  const ImgWireflow = project?.imagesWireflow || []; // Wireflow

  const ImgCategoryMockup = project
    ? project.images
        .filter((image) => image.imgcategory.split(" ").includes("mockup"))
        .sort((a, b) => a.id - b.id)
    : [];

  const ImgCategoryCaptain = project
    ? project.images
        .filter((image) => image.imgcategory === "mockupcaptain")
        .sort((a, b) => a.id - b.id)
    : [];

  const ImgCategoryStep = project
    ? project.images
        .filter((image) => image.imgcategory.split(" ").includes("step"))
        .sort((a, b) => a.id - b.id)
    : [];

  // 資料展開 給 Lightbox
  const sortedImages = [
    ...ImgCategoryFlow,
    ...ImgArchitecture,
    ...ImgComponents,
    ...ImgSystem,
    ...ImgWireflow,
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
            closeOnBackdropClick: true, // 點擊背景時關閉
            closeOnPullUp: false, // 禁用向上滑動關閉
            closeOnPullDown: false, // 禁用向下滑動關閉
          }}
        />

        <ProjectHeader
          categorytitle={project.categorytitle}
          category={project.category}
          chinese={project.chinese}
        />
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.descriptionLogic1 }}
        />
        {/*architecture 架構圖*/}
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.descriptionarChitecture }}
        />
        <div className="portfolio__container first">
          {ImgArchitecture.map(({ id, imgtitle, imglink }) => (
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
        {/*Components 組件*/}
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.descriptionarComponents }}
        />
        <div className="portfolio__container first">
          {ImgComponents.map(({ id, imgtitle, imglink }) => (
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
        {/*descriptionarSystem 設計系統*/}
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.descriptionarSystem }}
        />
        <div className="portfolio__container first">
          {ImgSystem.map(({ id, imgtitle, imglink }) => (
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
        {/*descriptionarWireflow Wireflow*/}
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.descriptionarWireflow }}
        />
        <div className="portfolio__container first">
          {ImgWireflow.map(({ id, imgtitle, imglink }) => (
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
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.descriptionMockup }}
        />
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
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.descriptionCaptain }}
        />
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
        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: project.descriptionStep }}
        />
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
