import React, { useEffect, useState } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const category = 'computers';
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': '+Hhv/6oKBwKx4r5HTlGDwA==Srdg9dP2aoLIBhH8',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex].quote);
        setAuthor(data[randomIndex].author);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching quote');
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = (
      <div className="quote-container">
        <div className="quote">{quote}</div>
        <div className="author">
          -
          {' '}
          {author}
        </div>
      </div>
    );
  }

  return <div className="centered-content">{content}</div>;
};

export default QuoteDisplay;
