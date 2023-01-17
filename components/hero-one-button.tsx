import { ReactNode, useState } from 'react';
import { Button } from './Button';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const [ subscribed, setSubscribed ] = useState(false);
  const [ email, setEmail ] = useState('');

  const onSubscribe = async () => {
    const url = new URL(
      "https://qcg6wvoojg.execute-api.us-west-2.amazonaws.com/V1/subscriber"
    );
    
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    
    await fetch(url, {
        method: "POST",
        headers,body: JSON.stringify({ email })
    }).then(response => response.json());

    setSubscribed(true);
  };

  return (
    <header className="text-center">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <div className="text-2xl mt-4 mb-12">{props.description}</div>

      <div className="mb-8">
        <input 
          onChange={(event) => setEmail(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder='Your Email Address'>
        </input>
      </div>

      { subscribed ? <div className="mb-4">Thank you for subscribing!</div> : null}
      
      <Button xl onClick={onSubscribe}>
        Subscribe Now
      </Button>
    </header>
  );
};

export { HeroOneButton };
