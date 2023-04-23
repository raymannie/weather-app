import { IconSunrise } from "../Icons";
import { CustomCard } from "./ui/CustomCard";
import { Box, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';


const GeoTime = () => {
    return (
        <CustomCard display={"flex"} flexDir={"column"} px={4} minH={'295px'}>
            <Tag key={"map"} variant='unstyled' color={"white"}>
                <TagLeftIcon boxSize='16px' as={IconSunrise} />
                <TagLabel>Lagos, Nigeria</TagLabel>
            </Tag>
            <Box></Box>

        </CustomCard>
    );
}

export default GeoTime;