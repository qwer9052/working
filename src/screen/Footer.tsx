import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #d4d4d4', position: 'relative', marginTop: 100 }}>
      <div style={{ height: 80, width: 1100, margin: 'auto', justifyContent: 'space-between', display: 'flex' }}>
        <div style={{ alignSelf: 'center' }}>
          <div className='info'>
            <a href='/kr/introduce' className=''>
              서비스 소개
            </a>
            <a href='https://kr.teamblind.com/setting/term'>이용약관</a>
            <a href='/kr/sitemap' className=''>
              디렉토리
            </a>
            <a href='https://kr.teamblind.com/setting/privacy'>개인정보 처리방침</a>
            <a href='/kr/contact-us' target='_blank'>
              <strong>Workingnet</strong> 기업서비스
            </a>
            <a href='/kr/report-guide' className=''>
              신고가이드
            </a>
            <p className='copy'>© 2023 Workingnet. Inc</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
