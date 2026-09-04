import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'rgba(3, 0, 20, 0.98)',
        borderTop: '1px solid var(--card-border)',
        padding: '80px 24px 40px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 꼬리 장식 라이트 효과 */}
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(127, 0, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '60px',
        }}
      >
        {/* 브랜딩 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <a
            href="#home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '22px',
              color: '#fff',
            }}
          >
            <Cpu style={{ color: 'var(--primary)' }} size={24} />
            <span>
              NEO<span className="text-gradient">STUDIO</span>
            </span>
          </a>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', maxWidth: '300px' }}>
            가장 진보된 기술과 감각적인 디자인으로, 차세대 디지털 경험을 구축하는 1인 웹 스튜디오입니다.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" className="social-icon-btn"><GithubIcon size={18} /></a>
            <a href="#" className="social-icon-btn"><TwitterIcon size={18} /></a>
            <a href="#" className="social-icon-btn"><InstagramIcon size={18} /></a>
          </div>
        </div>

        {/* 퀵 링크 */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, marginBottom: '24px', color: '#fff' }}>
            탐색
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="#about" className="footer-link">스튜디오 소개</a></li>
            <li><a href="#services" className="footer-link">서비스 안내</a></li>
            <li><a href="#portfolio" className="footer-link">포트폴리오</a></li>
            <li><a href="#process" className="footer-link">제작 프로세스</a></li>
          </ul>
        </div>

        {/* 서비스 */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, marginBottom: '24px', color: '#fff' }}>
            전문 분야
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ color: 'var(--text-muted)', fontSize: '14px' }}>인터랙티브 3D 웹 개발</li>
            <li style={{ color: 'var(--text-muted)', fontSize: '14px' }}>기업 맞춤형 프리미엄 웹</li>
            <li style={{ color: 'var(--text-muted)', fontSize: '14px' }}>고성능 프로모션 랜딩페이지</li>
            <li style={{ color: 'var(--text-muted)', fontSize: '14px' }}>반응형 UI/UX 디자인</li>
          </ul>
        </div>

        {/* 뉴스레터 구독 */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, marginBottom: '24px', color: '#fff' }}>
            최신 트렌드 받기
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6' }}>
            최신 웹 디자인 및 기술 트렌드 소식을 가장 먼저 받아보세요.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="email"
              placeholder="이메일 주소"
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '50px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--card-border)',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button className="btn-futuristic" style={{ padding: '12px 20px', fontSize: '13px' }}>
              구독
            </button>
          </div>
        </div>
      </div>

      {/* 하단 저작권 및 위로가기 버튼 */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
          &copy; {new Date().getFullYear()} NEOSTUDIO. All rights reserved.
        </span>
        <button
          onClick={scrollToTop}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--card-border)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--card-border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <ArrowUp size={16} />
        </button>
      </div>

      <style>{`
        .social-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--card-border);
          display: flex;
          alignItems: center;
          justifyContent: center;
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .social-icon-btn:hover {
          color: #fff;
          border-color: var(--primary);
          background: rgba(0, 242, 254, 0.1);
          transform: translateY(-2px);
        }
        .footer-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: var(--primary);
        }
      `}</style>
    </footer>
  );
}
