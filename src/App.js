import React from 'react';

function App() {

  const stories = [
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
    {
      title: 'Designing Data Intensive Apps',
      url: 'https://redux.js.org/',
      author: 'Me',
      num_comments: 4,
      points: 7,
      objectID: 2,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story => {
    return story.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <List list={searchedStories} />

    </div >
  );
}

const Search = props => {

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} value={props.searchTerm} />
      <p>
        Searching for <strong>{props.searchTerm}</strong>.
      </p>
    </div>
  );
};

const List = props => {
  return (
    props.list.map(function (item) {
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