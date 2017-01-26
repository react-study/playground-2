import React from 'react';

export const Home = () => ( <h2>Home</h2> );
export const About = ({children}) => (
  <div>
      <h2>About</h2>
      {children}
  </div>
);
export const Name = ()=> ( <h3>Yuri</h3> );

const portfolioList = [
    { id: 0, text: 'portfolio #0' },  
    { id: 1, text: 'portfolio #1' },  
    { id: 2, text: 'portfolio #2' }  
];
export const Portfolio = ({
    routeParams : {id}
}) => {
    const filteredList = id ? [portfolioList.find(p => p.id == id)] : portfolioList;
    const renderList = filteredList.map(v => (
        <li key={v.id}>{v.text}</li>
    ));
    return (
      <div>
          <h2>Portfolio</h2>
          <ul>{renderList}</ul>
      </div>  
    );
};