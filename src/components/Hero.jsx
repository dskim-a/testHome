import React from 'react';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 24px 80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 백그라운드 입체 광선 효과 */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '15%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'pulseGlow 8s infinite alternate ease-in-out',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(127, 0, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'pulseGlow 12s infinite alternate ease-in-out -4s',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          alignItems: 'center',
          gap: '60px',
          zIndex: 10,
        }}
        className="hero-grid"
      >
        {/* 히어로 왼쪽 정보 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {/* 배지 */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '50px',
              background: 'rgba(0, 242, 254, 0.05)',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              marginBottom: '28px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--primary)',
              letterSpacing: '0.5px',
            }}
          >
            <Sparkles size={14} />
            <span>Next-Gen Web Architecture</span>
          </div>

          {/* 메인 카피 */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5vw, 68px)',
              fontWeight: 800,
              lineHeight: '1.15',
              letterSpacing: '-1.5px',
              color: '#fff',
              marginBottom: '24px',
            }}
          >
            상상을 뛰어넘는<br />
            <span className="text-gradient">미래형 웹사이트</span><br />
            제작 스튜디오
          </h1>

          {/* 서브 텍스트 */}
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: '1.7',
              color: 'var(--text-muted)',
              marginBottom: '40px',
              maxWidth: '600px',
            }}
          >
            NEOSTUDIO는 1인 기업 특유의 압도적으로 신속한 소통과 최고 수준의 개발 기술을 통해, 고객의 비즈니스를 웹 세상 속에 가장 미래지향적이고 예술적으로 구현해 드립니다.
          </p>

          {/* CTA 버튼 그룹 */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '60px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-futuristic">
              <span>무료 컨설팅 신청</span>
              <ArrowRight size={16} />
            </a>
            <a href="#portfolio" className="btn-futuristic-outline">
              포트폴리오 살펴보기
            </a>
          </div>

          {/* 심플 스탯 정보 */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              paddingTop: '32px',
              width: '100%',
            }}
          >
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary)' }}>50+</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>성공적인 웹 프로젝트</p>
            </div>
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#fff' }}>99%</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>고객 재의뢰 및 만족도</p>
            </div>
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--neon-pink)' }}>14일</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>평균 기획-출시 기간</p>
            </div>
          </div>
        </div>

        {/* 히어로 오른쪽 3D 구체 애니메이션 아트워크 */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '450px',
          }}
          className="hero-art-container"
        >
          {/* 가상 구체 (CSS 아트) */}
          <div
            style={{
              position: 'relative',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(127, 0, 255, 0.2) 0%, rgba(3, 0, 20, 0.9) 100%)',
              border: '2px solid rgba(0, 242, 254, 0.4)',
              boxShadow: '0 0 60px rgba(0, 242, 254, 0.2)',
              animation: 'spinSphere 15s linear infinite',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* 내부 가로 회전 링 */}
            <div
              style={{
                position: 'absolute',
                width: '110%',
                height: '110%',
                borderRadius: '50%',
                border: '1px dashed rgba(255, 0, 127, 0.6)',
                transform: 'rotateX(75deg)',
                animation: 'spinRingX 10s linear infinite',
              }}
            />
            {/* 내부 세로 회전 링 */}
            <div
              style={{
                position: 'absolute',
                width: '105%',
                height: '105%',
                borderRadius: '50%',
                border: '1.5px solid rgba(0, 242, 254, 0.5)',
                transform: 'rotateY(75deg)',
                animation: 'spinRingY 8s linear infinite',
              }}
            />

            {/* 메인 아이콘 장식 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '24px',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(127, 0, 255, 0.3)',
              }}
            >
              <Terminal size={48} style={{ color: 'var(--primary)' }} />
            </div>
          </div>

          {/* 떠다니는 플로팅 오너먼트 */}
          <div
            style={{
              position: 'absolute',
              top: '15%',
              right: '10%',
              padding: '12px 20px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              animation: 'floatOrn 6s infinite alternate ease-in-out',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f2fe' }} />
            <span style={{ fontSize: '13px', fontWeight: 500, fontFamily: 'var(--font-display)' }}>Interactive UI</span>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '15%',
              left: '10%',
              padding: '12px 20px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              animation: 'floatOrn 5s infinite alternate ease-in-out -2.5s',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff007f' }} />
            <span style={{ fontSize: '13px', fontWeight: 500, fontFamily: 'var(--font-display)' }}>High-Speed Loading</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0% { transform: scale(1); opacity: 0.12; }
          100% { transform: scale(1.15); opacity: 0.22; }
        }
        @keyframes spinSphere {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spinRingX {
          0% { transform: rotateX(75deg) rotateZ(0deg); }
          100% { transform: rotateX(75deg) rotateZ(360deg); }
        }
        @keyframes spinRingY {
          0% { transform: rotateY(75deg) rotateZ(0deg); }
          100% { transform: rotateY(75deg) rotateZ(360deg); }
        }
        @keyframes floatOrn {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-15px) rotate(2deg); }
        }

        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-grid div {
            align-items: center !important;
          }
          .hero-art-container {
            height: 350px !important;
          }
        }
      `}</style>
    </section>
  );
}
