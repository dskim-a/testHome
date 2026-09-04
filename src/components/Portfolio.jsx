import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      image: '/src/assets/project1.jpg',
      title: 'AETHER FINANCE (차세대 핀테크 플랫폼)',
      category: 'Web Application / 3D Visualization',
      desc: '실시간 가상자산 시세와 입체적인 WebGL 차트가 통합된 고성능 파이낸셜 대시보드 시스템입니다.',
      tags: ['React', 'WebGL', 'CSS Modules', 'Vite'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      image: '/src/assets/project2.jpg',
      title: 'NOVA IOT (미래형 스마트홈 랜딩페이지)',
      category: 'Interactive Promotion / UI/UX',
      desc: '스마트홈 기기들을 입체적으로 배치하여 직관적으로 모니터링할 수 있는 반응형 프론트엔드입니다.',
      tags: ['React', 'Framer Motion', 'Vanilla CSS', 'Responsive'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      image: '/src/assets/project3.jpg',
      title: 'CYBERVIBE (사이버펑크 커스텀 쇼핑몰)',
      category: 'E-Commerce / Experience Center',
      desc: '네온 비주얼 감성 브랜딩과 사운드 반응형 컴포넌트가 탑재된 최첨단 패션 브랜드 사이트입니다.',
      tags: ['React', 'Web Audio API', 'Neon Theme', 'Interactive'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="portfolio" className="section-padding" style={{ position: 'relative' }}>
      {/* 백그라운드 조명 */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(127, 0, 255, 0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-title">포트폴리오</div>
      <p className="section-subtitle">
        단순한 홈페이지를 넘어 하나의 완전한 디지털 경험을 창조합니다. NEOSTUDIO가 직접 기획하고 개발한 가상 프로젝트들입니다.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          marginTop: '40px',
        }}
      >
        {/* 프로젝트 목록 */}
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.1fr',
                gap: '40px',
                padding: '32px',
                alignItems: 'center',
                overflow: 'hidden',
              }}
              className={`glass-panel portfolio-card ${isEven ? 'row-normal' : 'row-reverse'}`}
            >
              {/* 이미지 영역 */}
              <div
                style={{
                  width: '100%',
                  height: '320px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(0, 0, 0, 0.3)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="portfolio-img"
                  onError={(e) => {
                    // 이미지가 아직 로딩되지 않았을 때의 대체 스켈레톤 디자인
                    e.target.style.display = 'none';
                  }}
                />
                {/* 썸네일 대체 네온 스켈레톤 */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(3,0,20,0.8) 0%, rgba(127,0,255,0.15) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    pointerEvents: 'none',
                  }}
                >
                  <Code size={40} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>PREMIUM WORKPIECE</span>
                </div>
              </div>

              {/* 텍스트 내용 영역 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    letterSpacing: '1px',
                    marginBottom: '10px',
                  }}
                >
                  {project.category}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '16px',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                  }}
                >
                  {project.desc}
                </p>

                {/* 기술 태그 배지 */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '12px',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--card-border)',
                        color: '#fff',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 외부 링크 버튼 */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href={project.demoLink} className="btn-futuristic" style={{ padding: '10px 20px', fontSize: '14px' }}>
                    <span>시연 영상</span>
                    <ExternalLink size={14} />
                  </a>
                  <a href={project.githubLink} className="btn-futuristic-outline" style={{ padding: '10px 20px', fontSize: '14px' }}>
                    깃허브 코드
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .portfolio-card {
          transition: all 0.4s ease;
        }
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.05);
        }
        .row-normal {
          grid-template-columns: 1fr 1.1fr !important;
        }
        .row-reverse {
          grid-template-columns: 1.1fr 1fr !important;
        }
        @media (max-width: 991px) {
          .row-normal, .row-reverse {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .row-reverse div:nth-child(1) {
            order: 1; /* 모바일에서 이미지가 위로 가도록 정렬 */
          }
          .row-reverse div:nth-child(2) {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}
