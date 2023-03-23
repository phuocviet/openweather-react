import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_URL, apioptions } from "../../api";

const Search = ({onSearchChange}) =>{

  const [search, setSearch] = useState(null)
  const handleOnchange = (searchdata) =>{
    setSearch(searchdata)
    onSearchChange(searchdata)
  }
  const loadOptions = (inputValue) =>{
    return fetch(`${GEO_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, apioptions)
    .then((response) => response.json())
    .then((response) => {
      return{
        options: response.data.map((city) =>{
          return{
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name} ${city.countryCode}`
          }
        })
      }
    })
    .catch((err) => console.error(err));
  }

  return(
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
  );
}

export default Search