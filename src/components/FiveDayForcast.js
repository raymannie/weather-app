import { CustomCard } from "./ui/CustomCard";
import { Box, Divider, Text, Stack, HStack, VStack, Image, GridItem } from "@chakra-ui/react";

const FiveDayForcast = ({ data, unit }) => {
    const getDay = (value) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        const date = new Date(value); // get the current date
        const dayOfWeek = daysOfWeek[date.getDay()]
        const isToday = date.toDateString() === new Date().toDateString()
        return isToday ? 'Today' : dayOfWeek
    }
    return (
        <>
            <CustomCard as={GridItem} colSpan={{ base: 2, lg: 1 }} color="white" bg={"linear-gradient(360deg, rgba(1, 24, 78, 0.444) 15.42%, rgba(1, 37, 97, 0.462) 54.1%, rgba(0, 29, 87, 0.45) 92.97%);"}>
                <Text mb={"6px"} textTransform={"uppercase"} fontSize={"12"}>5-day Forecast</Text>
                <Divider />
                <VStack mt={4} alignItems={"stretch"} spacing={"16px"}>
                    {data?.forecast?.forecastday.slice(0, 5).map((day, item) =>
                        <Stack key={item} direction={"row"}>
                            <Text w={"30%"}>{getDay(day?.date)}</Text>
                            <Box w={"20%"}>
                                <Image w={"30px"} alt={day?.day?.condition?.text} src={day?.day?.condition?.icon} />
                            </Box>
                            <HStack w={"50%"}>
                                <Text whiteSpace={"nowrap"} w={"30px"}>{Math.round(unit === "C" ? day?.day?.mintemp_c : day?.day?.mintemp_f)}°</Text>
                                <Box rounded={"3px"} h={"4px"} bg={"linear-gradient(90.05deg, #FFE458 24.85%, #B7FF7E 60.9%)"} flex={"1"}></Box>
                                <Text whiteSpace={"nowrap"} w={"30px"}>{Math.round(unit === "C" ? day?.day?.maxtemp_c : day?.day?.maxtemp_f)}°</Text>
                            </HStack>
                        </Stack>

                    )}
                </VStack>
            </CustomCard>
        </>
    );
}

export default FiveDayForcast;