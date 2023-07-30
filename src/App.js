import React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <List />

    </div >
  );
}

function List() {
  return (
    list.map(function (item) {
      return (
        <div key={item.objectID}>
          <h2>Title: <a href={item.url}>{item.title} </a> </h2>
          <h3>Author: {item.author} </h3>
          <h4>Num Comments: {item.num_comments}</h4>
        </div>
      )
    })
  )
}

export default App;