import React, { useRef, useState } from 'react';  // 引入React的useRef與useState hooks
import emailjs from '@emailjs/browser';           // 引入emailjs，用來發送電子郵件
import { MdOutlineEmail } from 'react-icons/md';  // 引入郵件圖標
import './contact.css';                           // 引入樣式表

const Contact = () => {
  // 使用 useState 管理訊息狀態，來顯示感謝訊息
  const [message, setMessage] = useState(false);
  
  // 使用 useRef 引用表單，方便在提交表單時進行操作
  const formRef = useRef();
  
  // 表單提交處理函數
  const handleSubmit = (e) => {
    e.preventDefault();  // 防止表單的默認提交行為，避免頁面刷新
    
    setMessage(true);  // 顯示感謝訊息
    
    // 使用 emailjs 發送表單數據
    emailjs
      .sendForm(
        'service_k2qawqh',        // emailjs 服務 ID
        'template_c6rkpn6',       // emailjs 模板 ID
        formRef.current,          // 使用 formRef 引用的表單
        'X7K7ebhIeOy3YwHki'      // emailjs 用戶 ID（這是 API 密鑰，需保護）
      )
      .then(
        (result) => {
          console.log(result.text);  // 發送成功後，顯示結果
        },
        (error) => {
          console.log(error.text);   // 發送失敗後，顯示錯誤
        }
      );
    
    e.target.reset();  // 提交後清除表單中的數據
  };

  return (
    <section id="contact">
      {/* 聯繫區塊標題 */}
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* 聯繫選項：這裡展示了直接發送電子郵件的方式 */}
        <div className="contact__options">
          <article className="contact__option">
            {/* 電子郵件圖標 */}
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>willerico0414@gmail.com</h5>
            {/* 點擊鏈接會打開默認郵件客戶端並填入郵箱地址 */}
            <a href="mailto:willerico0414@gmail.com">Send a message</a>
          </article>
        </div>
        
        {/* 表單部分 */}
        <form ref={formRef} onSubmit={handleSubmit}>
          {/* 用戶輸入姓名 */}
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required  // 強制要求此欄位填寫
          />
          
          {/* 用戶輸入郵箱 */}
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required  // 強制要求此欄位填寫
          />
          
          {/* 用戶輸入消息內容 */}
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required  // 強制要求此欄位填寫
          ></textarea>
          
          {/* 提交按鈕 */}
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {/* 提交後顯示感謝訊息 */}
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;  // 輸出組件以便其他地方引用
