import React from 'react';
import { CustomCard } from "./ui/CustomCard";
import { Box, Center, GridItem, Heading, Image, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { IoLocationSharp } from "react-icons/io5";
import WeatherIcon from '../hooks/weatherIcons';

const GeoLocation = ({ unit, data }) => {

    const temperature =
        unit === "C"
            ? Math.round(data?.current?.temp_c)
            : Math.round(data?.current?.temp_f);



    return (
        <CustomCard display={"flex"} as={GridItem} colSpan={{ base: 2, lg: 1 }} flexDir={"column"} minH={'295px'} color={"white"}>
            <Tag ml="auto" key={"map"} variant='unstyled' color={"white"}>
                <TagLeftIcon boxSize='16px' as={IoLocationSharp} />
                <TagLabel fontSize={"14px"}>{data?.location?.name}, {data?.location?.country}</TagLabel>
            </Tag>
            <Box flex={1}>
                <Center boxSize={"135px"}>
                    <Image
                        w={"100%"}
                        alt=''
                        transform={"scale(2)"}
                        src={WeatherIcon(data?.current?.condition?.code)}
                    />
                </Center>
                <Heading fontWeight={"400"} fontSize={"50px"}>{temperature}<Box fontSize={"32"} verticalAlign={"text-top"} as='span'>°{unit}</Box></Heading>
            </Box>
            <Tag fontSize={"16px"} key={"map"} variant='unstyled' color={"white"}>
                <Image mr={"4px"} w={"32px"} alt='' src={data?.current?.condition?.icon} />
                <TagLabel>{data?.current?.condition?.text}</TagLabel>
            </Tag>
        </CustomCard>
    );
}

export default GeoLocation;