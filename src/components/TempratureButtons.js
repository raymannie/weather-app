import { HStack, Switch, Text } from "@chakra-ui/react";

const ToggleTemprature = ({ onChange }) => {
    return (
        <>
            <HStack color={"#fff"} spacing={"2"} mr={"20px"}>
                <Text>°C</Text>
                <Switch color={"green"} onChange={onChange} size='lg' />
                <Text>°F</Text>
            </HStack>
        </>
    );
}

export default ToggleTemprature;