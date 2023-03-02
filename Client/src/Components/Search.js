import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import SearchIcon from '../assets/svg/SearchIcon.svg';
const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
    style = {{marginTop:20,marginLeft:20,height:70,width:390}}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery} />
  );
};

export default Search;