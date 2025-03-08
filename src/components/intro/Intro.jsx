import React from 'react';
import ME from '../../assets/home_anime.f372ef86.gif';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>簡介</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <svg className="about__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 6.99999C16.4183 6.99999 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 6.99999 12 6.99999ZM12 8.99999C8.68629 8.99999 6 11.6863 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15C18 11.6863 15.3137 8.99999 12 8.99999ZM12 10.5L13.3225 13.1797L16.2798 13.6094L14.1399 15.6953L14.645 18.6406L12 17.25L9.35497 18.6406L9.86012 15.6953L7.72025 13.6094L10.6775 13.1797L12 10.5ZM18 1.99999V4.99999L16.6366 6.13755C15.5305 5.5577 14.3025 5.17884 13.0011 5.04948L13 1.99899L18 1.99999ZM11 1.99899L10.9997 5.04939C9.6984 5.17863 8.47046 5.55735 7.36441 6.13703L6 4.99999V1.99999L11 1.99899Z"></path></svg>
              <h5>Experience <span>經驗</span></h5>
              <small>8+ year</small>
            </article>
            <article className="about__card">
              <svg className="about__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM6 9C5.44772 9 5 9.44772 5 10V14H7V10C7 9.44772 6.55228 9 6 9ZM19 5H10V3H20C20.5523 3 21 3.44772 21 4V15C21 15.5523 20.5523 16 20 16H16.5758L19.3993 22H17.1889L14.3654 16H10V14H19V5Z"></path></svg>
              <h5>Projects <span>專案</span></h5>
              <small>124+ Completed Projects</small>
            </article>
          </div>
          <p>工作負責網站的維運、改版，活動網頁的規劃、開發，風格設計。<br/>
專長是設計、切版、UI / UX、HTML、CSS3、JavaScript、Bootstrap。</p>

<p>從設計轉型為工程師，我擁有深厚的 UI 設計背景，能夠將使用者需求與技術實現結合，優化使用者體驗。
  我擅長在設計與開發之間架起橋梁，提升團隊協作與溝通效率。</p>

<p>此外，我也懂一些 UX 分析能力，使用者行為模式分析及Google Analytics（GA）追蹤等工具，
能從使用者角度理解需求，優化體驗並提升產品的易用性。這些能力幫助我在跨部門協作中，更有效推動業務增長。</p>

<p>2024年7月，開始學習React前端框架，在學習過程中，專注於React的核心跟git的部屬，
雖然目前缺乏實際的工作經驗，但我有信心將新技能應用到實際專案中，並且不斷嘗試新技術，為公司帶來更好的用戶體驗。</p>

<p>未來計畫繼續深化Node.js、Native以及Vue的技術，並期待能在這些領域中成長與發展。</p>
          <a href="#portfolio" className="btn btn-primary">觀看專案</a>
        </div>
      </div>
    </section>
  )
}

export default Intro