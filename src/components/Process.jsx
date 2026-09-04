import React from 'react';
import { MessageSquare, Code, Rocket } from 'lucide-react';

const FigmaIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M8.5 9A3.5 3.5 0 0 1 12 12.5V16H8.5A3.5 3.5 0 1 1 8.5 9z" />
    <path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z" />
    <path d="M5 18.5A3.5 3.5 0 0 1 8.5 15H12v3.5A3.5 3.5 0 1 1 5 18.5z" />
  </svg>
);

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: <MessageSquare size={20} style={{ color: 'var(--primary)' }} />,
      title: '비전 설계 & 컨설팅',
      desc: '1:1 심층 상담을 통해 대표님의 비즈니스 목표와 브랜드 철학을 경청하고, 최적화된 기획 방향성을 수립합니다.',
    },
    {
      num: '02',
      icon: <FigmaIcon size={20} style={{ color: 'var(--accent)' }} />,
      title: 'UI/UX 스토리보드 기획',
      desc: 'Figma를 이용해 실제 웹과 동일하게 상호작용하는 프로토타입을 설계하여, 레이아웃과 동선 흐름을 시각적으로 먼저 검증합니다.',
    },
    {
      num: '03',
      icon: <Code size={20} style={{ color: 'var(--neon-pink)' }} />,
      title: '초고속 프론트엔드 개발',
      desc: 'React 기반의 고성능 엔진과 최적화 기법을 사용해 가볍고 부드러우며 반응 속도가 압도적으로 빠른 프론트 코딩을 실시합니다.',
    },
    {
      num: '04',
      icon: <Rocket size={20} style={{ color: '#00f2fe' }} />,
      title: 'SEO 검증 및 전격 배포',
      desc: 'Lighthouse 성능 분석, 완벽한 SEO 및 메타태그 삽입, 도메인 연동 및 글로벌 CDN 서버 구축을 통해 정식 오픈합니다.',
    },
  ];

  return (
    <section id="process" className="section-padding" style={{ position: 'relative' }}>
      {/* 뱌경 회로 조명 효과 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 242, 254, 0.15), rgba(127, 0, 255, 0.15), transparent)',
          zIndex: 1,
        }}
        className="timeline-line"
      />

      <div className="section-title">제작 프로세스</div>
      <p className="section-subtitle">
        상담부터 배포까지 모든 과정이 막힘 없이 시원하게 진행됩니다. 1인 기업이기에 가능하며, 오직 대표님만을 위한 맞춤식 프로세스입니다.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '30px',
          position: 'relative',
          zIndex: 5,
          marginTop: '60px',
        }}
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '16px',
            }}
          >
            {/* 넘버링 서클 */}
            <div
              style={{
                position: 'relative',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--bg-dark)',
                border: '2px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
              }}
              className="process-circle"
            >
              {/* 작은 아이콘 표시 배지 */}
              <div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(5px)',
                }}
              >
                {step.icon}
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '20px',
                  color: '#fff',
                }}
              >
                {step.num}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 700,
                color: '#fff',
                marginTop: '8px',
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                fontSize: '13.5px',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .process-circle {
          transition: all 0.3s ease;
        }
        .glass-panel:hover .process-circle {
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.4);
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .timeline-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
