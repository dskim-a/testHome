import React from 'react';
import { CheckCircle, Zap, Shield, Heart } from 'lucide-react';

export default function About() {
  const strengths = [
    {
      icon: <Zap className="text-glow" style={{ color: 'var(--primary)' }} size={24} />,
      title: '거품 없는 1인 스튜디오',
      desc: '기획, 디자인, 개발을 한 명의 웹 전문가가 책임지고 직접 진행하여 의사소통 오류를 없애고 제작 비용을 획기적으로 낮춥니다.',
    },
    {
      icon: <Shield className="text-glow" style={{ color: 'var(--accent)' }} size={24} />,
      title: '타협 없는 고품질 디테일',
      desc: '최신 웹 표준 준수는 물론, 부드러운 애니메이션 및 1px의 오차도 허용하지 않는 픽셀 퍼펙트 반응형 설계를 고집합니다.',
    },
    {
      icon: <Heart className="text-glow" style={{ color: 'var(--neon-pink)' }} size={24} />,
      title: '1:1 전담 밀착 유지보수',
      desc: '공장식 에이전시와 달리, 프로젝트 완료 후에도 대표가 직접 사후 관리와 기능 업그레이드를 신속하게 지원합니다.',
    },
  ];

  const skills = [
    { name: 'React / Next.js', percent: 95 },
    { name: 'Interaction & Animation (CSS/Framer)', percent: 90 },
    { name: 'UI/UX Visual Design', percent: 85 },
    { name: 'Performance Optimization & SEO', percent: 95 },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="section-title">스튜디오 소개</div>
      <p className="section-subtitle">
        1인 기업의 강력한 기동력과 고성능 기술 스택을 결합하여, 세상에 단 하나뿐인 프리미엄 웹 브랜딩을 제공합니다.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          marginTop: '40px',
        }}
        className="about-grid"
      >
        {/* 왼쪽: 핵심 강점 카드 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '28px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--card-border)',
                  padding: '12px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 오른쪽: 기술 무기고 (Technical Arsenal) */}
        <div
          className="glass-panel"
          style={{
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>
              기술력 & 전문성
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              항상 트렌디한 기술만을 엄선하며, 사용자에게 부드럽고 쾌적한 인터랙션을 제공하는 최첨단 프론트엔드 환경을 구축합니다.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {skills.map((skill, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 500 }}>
                  <span style={{ color: '#fff' }}>{skill.name}</span>
                  <span style={{ color: 'var(--primary)' }}>{skill.percent}%</span>
                </div>
                {/* 게이지바 백그라운드 */}
                <div
                  style={{
                    height: '6px',
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '50px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* 채워지는 바 */}
                  <div
                    style={{
                      height: '100%',
                      width: `${skill.percent}%`,
                      background: 'linear-gradient(90deg, var(--accent) 0%, var(--primary) 100%)',
                      borderRadius: '50px',
                      boxShadow: '0 0 10px rgba(0, 242, 254, 0.4)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 인증 배지 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              paddingTop: '24px',
              fontSize: '13px',
              color: 'var(--text-muted)',
            }}
          >
            <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
            <span>SEO 표준 웹 가이드라인 준수 및 고성능 등급 보증</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
