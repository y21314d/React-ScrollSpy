import { useState, useEffect } from 'react'
import throttle from 'lodash/fp/throttle'


const useActiveSection = ({
    offsetPx= -200, 
    throttleMs= 100, 
    defaultActiveSection= "", 
    sections=[],
    refScrollPanel=null
}) => {
    const [activeSection, setActiveSection] = useState(defaultActiveSection)
    const handle = throttle(throttleMs, () => {
        let currentSection = activeSection
        for (let i = 0; i < sections.length; i++) {
            const sectionRefs = sections[i].ref.current
            if (sectionRefs.getBoundingClientRect().top + offsetPx < 0) {
                currentSection = sections[i].name
                continue
            }
            break
        }
        setActiveSection(currentSection)
    })

    useEffect(() => {
        refScrollPanel.current.addEventListener('scroll', handle)
        return () => {
            refScrollPanel.current.removeEventListener('scroll', handle)
        }
    }, [sections, handle, refScrollPanel])

    return activeSection
}

export default useActiveSection