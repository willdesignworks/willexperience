import React, { useState } from 'react';
import { Link } from "react-router-dom";
import IMG1 from '../../assets/index_work_07.jpg';
import IMG2 from '../../assets/index_work_01.jpg';
import IMG3 from '../../assets/index_work_02.jpg';
import IMG4 from '../../assets/index_work_08.jpg';
import IMG5 from '../../assets/index_work_09.jpg';
import IMG6 from '../../assets/index_work_03.jpg';
import IMG7 from '../../assets/index_work_05.jpg';
import IMG8 from '../../assets/index_work_06.jpg';

import './portfolio.css';

const Portfolio = () => {
  const [category, setCategory] = useState('All'); // 用來記錄目前選擇的分類

  // 定義項目資料
  const soloProjects = [
    {
      id: 1,
      title: 'web design',
      img: IMG1,
      description:
        '六角學院提供的API，React為主要語言，以服飾購物車為主題設計的作品。',
      technologies: '服飾購物車 | React、SCSS',
      link: 'https://willdesignworks.github.io/reactshop/',
      github: 'https://github.com/willdesignworks/reactshop',
      Website: '',
      category: 'web design', // 分類
      isInternal: false, // 外部連結
    },
    {
      id: 2,
      title: 'web design',
      img: IMG2,
      description:
        '專注切版開發、UI設計與UX規劃，打造流暢且高效的使用者體驗。',
      technologies: '官網設計 | UI、UX、JavaScript、CSS',
      link: '/projectsweb',
      github: '',
      Website: 'https://www.bqool.com/',
      category: 'web design',
      isInternal: true, // 內部連結，需要 `id`
    },
    {
      id: 3,
      title: 'web design',
      img: IMG3,
      description: '提升活動網站的設計與UX，同時優化SEO，確保吸引目光並提升搜尋排名。',
      technologies: '活動頁切版 | UI、UX、JavaScript、CSS',
      link: '/projectsweb',
      github: '',
      Website: 'https://www.bqool.com/webinars/',
      category: 'web design',
      isInternal: true,
    },
    {
      id: 4,
      title: 'App design',
      img: IMG4,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'App設計 | UI / UX',
      link: '/projectapp',
      github: '',
      Website: '',
      category: 'web design',
      isInternal: true,
    },
    {
      id: 5,
      title: 'web design',
      img: IMG5,
      description:
        '簡單講解一些，我在設計網頁，參考的數據過程。',
      technologies: '網頁設計 | UI、UX、GA、Clarity',
      link: '/projectsux',
      github: '',
      Website: '',
      category: 'web design',
      isInternal: true,
    },
    {
      id: 6,
      title: 'EDM',
      img: IMG6,
      description:
        '透過策略性設計，打造具有高轉換率的EDM，提高開信率與用戶參與度，實現精準行銷目標。',
      technologies: '電子報 | 數位行銷宣傳物',
      link: '/projectsedm',
      github: '',
      Website: '',
      category: 'EDM',
      isInternal: true,
    },
    {
      id: 7,
      title: 'Social media',
      img: IMG7,
      description:
        'Blog 首頁縮圖，透過鮮明色彩與視覺焦點，讓文章在首頁脫穎而出，提升點擊率與閱讀興趣。',
      technologies: '數位行銷 | Blog圖片製作',
      link: '/projectssocialmedia',
      github: '',
      Website: 'https://blog.bqool.com/',
      category: 'Social media',
      isInternal: true,
    },
    {
      id: 8,
      title: 'Social media',
      img: IMG8,
      description:
        '透過精心設計的版面、視覺層次與色彩搭配，讓內容更具吸引力，提升閱讀體驗與社群分享率。',
      technologies: '數位行銷 | 社群圖片製作',
      link: '/projectssocialmedia',
      github: '',
      Website: '',
      category: 'Social media',
      isInternal: true,
    },
  ];

  // 根據當前選擇的分類篩選項目
  const filteredProjects = soloProjects.filter(
    (pro) => category === 'All' || pro.category === category
  );

  return (
    <section id="portfolio">
      <h5>專案</h5>
      <h2>Projects</h2>

      {/* 頁籤分類 */}
      <div className="portfolio__categories">
        <a href="#all" 
          className={category === 'All' ? 'active' : ''} // 根據選擇的分類來設置 active 類
          onClick={(e) => {
            e.preventDefault(); // 阻止 href 跳轉的預設行為
            setCategory('All');  // 更新分類
          }}
        ><h3>All</h3></a>

        <a href="#web-design" 
          className={category === 'web design' ? 'active' : ''} // 根據選擇的分類來設置 active 類
          onClick={(e) => {
            e.preventDefault();
            setCategory('web design');
          }}
        ><h3>Web Design</h3></a>

        <a href="#edm" 
          className={category === 'EDM' ? 'active' : ''} // 根據選擇的分類來設置 active 類
          onClick={(e) => {
            e.preventDefault();
            setCategory('EDM');
          }}
        ><h3>EDM</h3></a>

        <a href="#social-media" 
          className={category === 'Social media' ? 'active' : ''} // 根據選擇的分類來設置 active 類
          onClick={(e) => {
            e.preventDefault();
            setCategory('Social media');
          }}
        ><h3>Social Media</h3></a>
      </div>

      <div className="container portfolio__container">
        {filteredProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p className='portfolio__item-technologies'>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {/* 檢查是否有 github 連結或 web 連結 */}
              {pro.github && (
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
              {pro.Website && !pro.github && (
                <a
                  href={pro.Website}  // 使用 web 連結
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  Link
                </a>
              )}
              {/* 是否外部連結 */}
              {pro.isInternal ? (
                <Link
                  to={`${pro.link}/${pro.id}`} 
                  className="btn btn-primary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                </svg>
                </Link>
              ) : (
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Link
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
