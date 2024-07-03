import React, { useState } from 'react'

const MultiStepGuide = ({ children }) => {

  const [currentStep, setCurrentStep] = useState(0);

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (index === currentStep) {
        return React.cloneElement(child, {
          currentStep,
        })
      }
      return null;
    })
  }
  
  return (
    <div>
      {renderChildren}
    </div>
  )
}

export default MultiStepGuide;