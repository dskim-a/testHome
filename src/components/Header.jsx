import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: '소개', href: '#about' },
    { name: '서비스', href: '#services' },
    { name: '포트폴리오', href: '#portfolio' },
    { name: '제작 프로세스', href: '#process' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(3, 0, 20, 0.75)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(15px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* 로고 */}
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
          <Cpu className="text-glow" style={{ color: 'var(--primary)' }} size={24} />
          <span>
            NEO<span className="text-gradient">STUDIO</span>
          </span>
        </a>

        {/* 데스크탑 네비게이션 */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-muted)',
                fontSize: '15px',
                fontWeight: 500,
                position: 'relative',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#fff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-futuristic" style={{ padding: '10px 20px', fontSize: '13px' }}>
            시작하기
          </a>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}
          className="mobile-toggle-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 모달 */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(3, 0, 20, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--card-border)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 999,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontSize: '18px',
                fontWeight: 500,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-futuristic"
            style={{ textAlign: 'center', justifyContent: 'center', marginTop: '10px' }}
          >
            시작하기
          </a>
        </div>
      )}

      {/* CSS를 위한 간단한 인라인 스타일 태그 */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-only { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-toggle-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
