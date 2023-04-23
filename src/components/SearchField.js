import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react';

const SearchField = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };
    return (
        <form onSubmit={handleSubmit}>
            <InputGroup maxW={"300px"} ml={"auto"} color={"#fff"}>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon fontSize="12px" color='gray.300' />}
                />
                <Input
                    type='search'
                    placeholder='Search location'
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
            </InputGroup>
        </form>
    );
}

export default SearchField;