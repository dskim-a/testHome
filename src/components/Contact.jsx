import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '500-1000',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.details) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', budget: '500-1000', details: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      {/* 백그라운드 퍼플 조명 */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(127, 0, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-title">문의하기</div>
      <p className="section-subtitle">
        상상 속의 아이디어를 현실적인 웹 비즈니스로 실현하고 싶으신가요? 편하게 문의해 주시면 신속하게 답변드리겠습니다.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.8fr 1.2fr',
          gap: '50px',
          marginTop: '40px',
        }}
        className="contact-grid"
      >
        {/* 왼쪽: 연락처 정보 카드 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '30px',
              }}
            >
              다이렉트 소통 채널
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(0, 242, 254, 0.05)',
                    border: '1px solid rgba(0, 242, 254, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>이메일 문의</p>
                  <a href="mailto:contact@neostudio.com" style={{ fontSize: '15px', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
                    contact@neostudio.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(127, 0, 255, 0.05)',
                    border: '1px solid rgba(127, 0, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>대표 번호</p>
                  <a href="tel:010-1234-5678" style={{ fontSize: '15px', color: '#fff', textDecoration: 'none', fontWeight: 500 }}>
                    010-1234-5678
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(255, 0, 127, 0.05)',
                    border: '1px solid rgba(255, 0, 127, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--neon-pink)',
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>스튜디오 위치</p>
                  <span style={{ fontSize: '15px', color: '#fff', fontWeight: 500 }}>
                    대한민국 서울시 강남구 테헤란로
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '24px 30px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              borderLeft: '4px solid var(--primary)',
            }}
          >
            <HelpCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              보통 문의 수신 후 영업시간 기준 <strong>2시간 이내</strong>에 신속한 피드백 메일을 전달드립니다.
            </p>
          </div>
        </div>

        {/* 오른쪽: 입력 폼 카드 */}
        <div className="glass-panel" style={{ padding: '40px' }}>
          {submitted ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                minHeight: '300px',
                textAlign: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(0, 242, 254, 0.1)',
                  border: '2px solid var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  boxShadow: '0 0 20px rgba(0, 242, 254, 0.3)',
                  animation: 'scaleIn 0.3s ease',
                }}
              >
                <Send size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>문의가 전송되었습니다!</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '300px', lineHeight: '1.6' }}>
                기재해 주신 이메일로 곧 연락드리겠습니다. NEOSTUDIO를 찾아주셔서 진심으로 감사드립니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" className="form-label">
                    성함 또는 회사명 <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="홍길동"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" className="form-label">
                    회신받을 이메일 주소 <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="budget" className="form-label">프로젝트 규모 (예상 예산)</label>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="form-input"
                  style={{ appearance: 'none', backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)' }}
                >
                  <option value="under-500">500만 원 이하</option>
                  <option value="500-1000">500만 원 ~ 1,000만 원</option>
                  <option value="1000-2000">1,000만 원 ~ 2,000만 원</option>
                  <option value="over-2000">2,000만 원 이상</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="details" className="form-label">
                  의뢰 목적 및 상세 내용 <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <textarea
                  id="details"
                  rows="5"
                  placeholder="제작하시고자 하는 브랜드 아이덴티티 및 필수 기능(예: 포트폴리오 사이트, 다국어 사이트, 예약 연동 등)에 대해 자유롭게 기재해주세요."
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className="form-input"
                  style={{ resize: 'none', borderRadius: '12px' }}
                  required
                />
              </div>

              <button type="submit" className="btn-futuristic" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                <span>제출하기</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .form-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.5px;
        }
        .form-input {
          padding: 14px 18px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--card-border);
          color: #fff;
          font-size: 14.5px;
          font-family: var(--font-body);
          outline: none;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 12px rgba(0, 242, 254, 0.25);
          background: rgba(255, 255, 255, 0.04);
        }
        select.form-input option {
          background: var(--bg-dark);
          color: #fff;
        }

        @keyframes scaleIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 480px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
