import "../styles/ScrollIndicator.css"

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <p className="scroll-indicator-text">scroll to continue</p>
      <div className="scroll-indicator-pill" aria-hidden="true">
        <svg className="scroll-chevron scroll-chevron--1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <svg className="scroll-chevron scroll-chevron--2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <svg className="scroll-chevron scroll-chevron--3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  )
}

export default ScrollIndicator
