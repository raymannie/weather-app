import { Box, Divider, Text, GridItem, HStack, Image } from "@chakra-ui/react";
import { CustomCard } from "./ui/CustomCard";

const DailyForcast = ({ data, unit }) => {
    const ConvertToAmPm = ({ dateStr }) => {
        const date = new Date(dateStr);

        const hours = date.getHours();

        let amOrPm = hours >= 12 ? 'PM' : 'AM';
        let hours12 = hours % 12 || 12;

        return (<Text whiteSpace={"nowrap"} fontSize={16} fontWeight={"medium"}>{hours12} <Box fontSize={"12px"} as={"span"}>{amOrPm}</Box></Text>);
    }



    return (
        <CustomCard color={"white"} py={"16px"} display={"flex"} flexDir={"column"} as={GridItem} colSpan={2}>
            <Text mb={"6px"} textTransform={"uppercase"} fontSize={"12"}>Condition throughout today</Text>
            <Divider />
            <HStack spacing={"16px"} overflowX={"auto"} mt={"10px"} mr={"-24px"}>
                {data?.forecast?.forecastday[0]?.hour.map((time, index) => {
                    return (
                        <Box minW={"40px"} key={index} textAlign={"center"}>
                            <ConvertToAmPm dateStr={time?.time} />
                            {/* <Icon /> */}
                            <Image m={"4px auto"} w={"32px"} alt="" src={time?.condition?.icon} />
                            <Text>{Math.round(unit === "C" ? time?.temp_c : time?.temp_f)}°</Text>
                        </Box>
                    )
                })}
            </HStack>
        </CustomCard>
    );
}

export default DailyForcast;