import { Button } from './Button';
import { Section } from './Section';
import { Background } from './Background';
import { HeroOneButton } from './hero-one-button';
import { useState } from 'react';

const Intro = () => {
  return (
    <Background color="bg-gray-200">
      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              <span className="text-primary-500">Build the software career you want</span>
            </>
          }
          description="Weekly, actionable tips to invest in yourself and raise your value."
        />
      </Section>
    </Background>
  )
}

export default Intro
