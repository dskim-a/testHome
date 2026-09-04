import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* 미래형 배경 움직이는 네온 원형 장식 */}
      <div className="bg-gradient-shapes">
        <div className="bg-shape bg-shape-1" />
        <div className="bg-shape bg-shape-2" />
        <div className="bg-shape bg-shape-3" />
      </div>

      {/* 헤더 네비게이션 */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <main>
        {/* 히어로 랜딩 섹션 */}
        <Hero />

        {/* 회사/스튜디오 소개 섹션 */}
        <About />

        {/* 제공 서비스 분야 섹션 */}
        <Services />

        {/* 포트폴리오 쇼케이스 섹션 */}
        <Portfolio />

        {/* 웹 구축 프로세스 섹션 */}
        <Process />

        {/* 연락처 및 의뢰 문의 폼 */}
        <Contact />
      </main>

      {/* 푸터 영역 */}
      <Footer />
    </div>
  );
}
