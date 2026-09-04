import React from 'react';
import { Globe, Zap, BarChart, Layers, ShieldCheck, Paintbrush } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe size={28} style={{ color: 'var(--primary)' }} />,
      title: '인터랙티브 프리미엄 웹',
      desc: '방문자를 압도하는 3D 그래픽, 세련된 모션 트랜지션을 통해 브랜드 아이덴티티를 예술적으로 전달하는 쇼케이스 웹사이트입니다.',
    },
    {
      icon: <Zap size={28} style={{ color: 'var(--accent)' }} />,
      title: '고전환 프로모션 랜딩페이지',
      desc: '마케팅 목적에 최적화된 UX 라이팅과 유기적인 레이아웃 설계를 통해 광고 효율 및 전환율을 극대화하는 반응형 원페이지 사이트입니다.',
    },
    {
      icon: <BarChart size={28} style={{ color: 'var(--neon-pink)' }} />,
      title: '기업 비즈니스 플랫폼',
      desc: '회사 소개, 블로그, 다국어 지원, 예약 관리 등 다양한 기능과 백엔드 연동을 원활하게 지원하는 체계적인 다목적 반응형 웹 시스템입니다.',
    },
    {
      icon: <Layers size={28} style={{ color: '#00f2fe' }} />,
      title: 'SaaS 및 대시보드 웹앱',
      desc: '사용자 친화적인 인터페이스와 고성능 상태 관리를 통해 복잡한 데이터 분석이나 내부 관리 도구로 활용할 수 있는 웹앱 솔루션입니다.',
    },
    {
      icon: <Paintbrush size={28} style={{ color: '#7f00ff' }} />,
      title: 'UI/UX 디자인 컨설팅',
      desc: '단순한 심미성을 넘어, 타겟 유저의 행동 패턴 분석을 기반으로 최상의 인터랙션 구조와 직관적인 네비게이션 설계를 제공합니다.',
    },
    {
      icon: <ShieldCheck size={28} style={{ color: '#ff007f' }} />,
      title: '검색 엔진(SEO) 최적화',
      desc: '구글/네이버 검색 봇이 이해하기 쉬운 시맨틱 마크업, 빠른 메타데이터 구조, 고성능 이미지 포맷을 적용하여 상위 노출을 견인합니다.',
    },
  ];

  return (
    <section id="services" className="section-padding" style={{ position: 'relative' }}>
      {/* 장식용 네온 원형 */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '80%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(255, 0, 127, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-title">서비스 분야</div>
      <p className="section-subtitle">
        단순한 코드 작성을 넘어, 브랜드 가치를 높이고 비즈니스 매출을 견인할 수 있는 고품격 웹 솔루션을 설계합니다.
      </p>

      <div className="grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '20px',
            }}
          >
            {/* 아이콘 컨테이너 */}
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 12px rgba(255, 255, 255, 0.05)',
              }}
            >
              {service.icon}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '-0.5px',
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
              }}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
