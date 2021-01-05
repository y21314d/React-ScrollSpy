import React from 'react'
import useActiveSection from './useActiveSection'

const ReactScrollSpy = ((props) => {

  const autoScroll = (target) => {
    props.refScrollPanel.current.scrollTo({ top: props.sections[target].ref.current.offsetTop - 10, behavior: 'smooth' })
  }

  const activeSection = useActiveSection({
    offsetPx: props.offsetPx,
    throttleMs: props.throttleMs,
    defaultActiveSection: props.sections[0].name,
    sections: props.sections,
    refScrollPanel: props.refScrollPanel
  })

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", margin: "0 10px", fontSize: "16px", lineHeight: "2" }} >
      {
        props.sections.map((section, index) => {
          return (
            <span
              key={section.name}
              style={{
                flex: "1 1 auto",
                textAlign: "center",
                borderTop: "1px solid",
                borderBottom: "1px solid",
                borderRight: (index === props.sections.length - 1) ? "unset" : "1px solid #DDD",
                cursor: "pointer",
                backgroundColor: (activeSection === section.name ? "#BDE8EF" : "unset")
              }} onClick={() => autoScroll(index)}>
              {section.name}
            </span>
          )
        })
      }
    </nav>
  )
})

module.exports = ReactScrollSpy;

