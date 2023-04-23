import { IconHumidity, IconRainbowGraph, IconRainfall, IconSunrise, IconWind } from "../Icons";
import { CustomCard } from "./ui/CustomCard";
import { Box, GridItem, Heading, SimpleGrid, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react';


export const WeatherCard = ({ data }) => {
    return (
        <SimpleGrid as={GridItem} colSpan={{ base: 2, lg: 1 }} columns={2} gap={5}>
            <CustomCard color={"white"} display={"flex"} flexDir={"column"} px={4} minH={'200px'}>
                <Tag size={"sm"} key={"map"} variant='unstyled' color={"#dfdfdf"}>
                    <TagLeftIcon boxSize='16px' as={IconSunrise} />
                    <TagLabel textTransform={"uppercase"}>Sunrise</TagLabel>
                </Tag>
                <Box flex={1} mt={"24px"}>
                    <Heading fontWeight={"400"} fontSize={{ base: '24', md: "32px" }}>{data?.forecast?.forecastday[0]?.astro?.sunrise}</Heading>
                    <IconRainbowGraph fontSize={"150"} />
                </Box>
                <Text>Sunset: {data?.forecast?.forecastday[0]?.astro?.sunset}</Text>
            </CustomCard>

            <CustomCard color={"white"} display={"flex"} flexDir={"column"} px={4} minH={'200px'}>
                <Tag size={"sm"} key={"map"} variant='unstyled' color={"#dfdfdf"}>
                    <TagLeftIcon boxSize='16px' as={IconRainfall} />
                    <TagLabel textTransform={"uppercase"}>Rainfall</TagLabel>
                </Tag>
                <Box flex={1} mt={"24px"}>
                    <Heading fontWeight={"400"} fontSize={{ base: '24', md: "32px" }}>{data?.current?.precip_mm} mm</Heading>
                    <Text fontSize={12}>in last 24h</Text>
                </Box>
                <Text>{data?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}% possibility of rainfall</Text>
            </CustomCard>
        </SimpleGrid>
    );
}

export const TempratureCard = ({ data, unit }) => {
    const dayDate = data?.current?.last_updated
    const forecastArray = data?.forecast?.forecastday[0]?.hour?.find(itm => itm?.time === dayDate);
    const dew = forecastArray;

    const dewpoint =
        unit === "C"
            ? dew?.dewpoint_c
            : dew?.dewpoint_f;

    const getTime = data?.location?.localtime?.split(' ')

    return (
        <SimpleGrid as={GridItem} colSpan={{ base: 2, lg: 1 }} columns={2} gap={5}>

            <CustomCard color={"white"} display={"flex"} flexDir={"column"} px={4} minH={'200px'}>
                <Tag size={"sm"} key={"map"} variant='unstyled' color={"#dfdfdf"}>
                    <TagLeftIcon boxSize='16px' as={IconHumidity} />
                    <TagLabel textTransform={"uppercase"}>Humidity</TagLabel>
                </Tag>
                <Box flex={1} mt={"24px"}>
                    <Heading fontWeight={"400"} fontSize={{ base: '24', md: "32px" }}>{data?.current?.humidity}%</Heading>
                </Box>
                <Text>The dew point is {dewpoint}° right now.</Text>
            </CustomCard>

            <CustomCard color={"white"} display={"flex"} flexDir={"column"} px={4} minH={'200px'}>
                <Tag size={"sm"} key={"map"} variant='unstyled' color={"#dfdfdf"}>
                    <TagLeftIcon boxSize='16px' as={IconWind} />
                    <TagLabel textTransform={"uppercase"}>Wind</TagLabel>
                </Tag>
                <Box flex={1} mt={"24px"}>
                    <Heading fontWeight={"400"} fontSize={{ base: '24', md: "32px" }}>{data?.current?.wind_kph}<Box as="span" fontSize={'12'}>km/h</Box></Heading>
                </Box>
                {getTime && <Text>Time now: {getTime[1]}</Text>}
            </CustomCard>

        </SimpleGrid>
    );
}


