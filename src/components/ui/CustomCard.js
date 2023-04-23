import { chakra } from "@chakra-ui/react"

export const CustomCard = chakra("div", {
    // attach style props
    baseStyle: {
        px: "6",
        py: "6",
        rounded: "xl",
        background: "linear-gradient(270deg, rgba(23, 38, 92, 0.6) -6.38%, rgba(2, 110, 189, 0.408) 107.1%)",
    },
})