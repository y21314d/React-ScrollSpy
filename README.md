## Installation

*@lyonhuang/react-scrollspy use React Hook which requires React 16.8.0 or later.*

```
npm i @lyonhuang/react-scrollspy
```

## Usage

```
import ReactScrollSpy from '@lyonhuang/react-scrollspy';
...
function App() {
    ...
    const refScrollPanel = useRef()
    const sections = [
        { name: "section1", ref: useRef() },
        { name: "section2", ref: useRef() },
        { name: "section3", ref: useRef() },
    ]

    ...
    return(
        <div >
            <div >
                <ReactScrollSpy  
                    sections={sections}
                    refScrollPanel={refScrollPanel}
                />
            </div>
            <div ref={refScrollPanel}>
                <section ref={sections[0].ref}>Section1</section>
                <section ref={sections[1].ref}>Section2</section>
                <section ref={sections[2].ref}>Section3</section>
            </div>     
        </div>
    )
}
```
