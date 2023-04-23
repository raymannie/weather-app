import { Box, Center, ChakraProvider, Container, HStack, Heading, SimpleGrid, Spacer, Spinner } from '@chakra-ui/react';
import './App.css';
import theme from './theme';
import GeoLocation from './components/GeoLocation';
import DailyForcast from './components/DailyForcast';
import FiveDayForcast from './components/FiveDayForcast';
import SearchField from './components/SearchField';
import useGeoHooks from './hooks/GeoHooks';
import { TempratureCard, WeatherCard } from './components/GeoCard';
import ToggleTemprature from './components/TempratureButtons';


function App() {
  const {
    loading,
    weatherData,
    unit,
    handleSearch,
    handleUnitChange,
  } = useGeoHooks();

  return (
    <ChakraProvider theme={theme}>
      <Box
        background={"linear-gradient(0.08deg, rgba(1, 43, 105, 0.52) 7.94%, rgba(1, 37, 97, 0.72) 47.74%, #00235D 80.02%)"}
        minH={"100vh"}
        py={10}
      >

        <HStack spacing={"20px"} px={{ base: 5, sm: 10 }}>
          <Spacer />
          <ToggleTemprature onChange={handleUnitChange} />
          <SearchField onSearch={handleSearch} />
        </HStack>

        {loading && <Center minH={"80vh"}><Spinner color='white' size='xl' /></Center>}

        {weatherData?.error && <Center minH={"80vh"}><Heading color={"#fff"}>No result found</Heading></Center>}

        {weatherData && weatherData?.current &&
          <Container maxW={"970px"} mt={"10"} as={SimpleGrid} columns={{ base: 1, lg: 2 }} columnGap={8} rowGap={{ base: 5, md: 8 }}>

            <GeoLocation
              data={weatherData}
              unit={unit}
            />

            <WeatherCard data={weatherData} />

            <DailyForcast unit={unit} data={weatherData} />

            <FiveDayForcast data={weatherData} unit={unit} />

            <TempratureCard data={weatherData} unit={unit} />

          </Container>}

      </Box>
    </ChakraProvider>
  );
}

export default App;
