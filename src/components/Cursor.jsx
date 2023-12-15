import React from 'react'
import AnimatedCursor from "react-animated-cursor"
const Cursor = () => {
  return (
<AnimatedCursor
        innerSize={25}
        outerSize={8}
        color='68, 61, 202'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
  
    />
  )
}

export default Cursor