import React, { useEffect, useState } from 'react';

const ApiQuote = () => {
  const [quote, setQuote] = useState('');
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
        if (data.length > 0) {
          setQuote(data[0].quote);
        } else {
          setQuote('No quote available');
        }
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching quote');
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div>{quote}</div>;
};

export default ApiQuote;
