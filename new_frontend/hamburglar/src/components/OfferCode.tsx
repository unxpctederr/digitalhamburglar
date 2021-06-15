import { Box, Heading, VStack } from "@chakra-ui/layout";
import { useEffect } from "react";
import { OfferDetails } from "./OfferCodeModule";
import bwipjs from "bwip-js"

interface Props {
    code: OfferDetails,
}

const OfferCode = ({code}: Props) => {
    useEffect(() => {
        if(code !== null){
            const options : bwipjs.ToBufferOptions = {
                bcid: "azteccode",
                text: code.barcodeData
            } 
            bwipjs.toCanvas("codeCanvas", options)
        }
    }, [code])

    return (
        <VStack> 
            <Heading color="white"> {code.code} </Heading>
            <Box p={2} borderRadius="lg" background="white">
                <canvas id="codeCanvas" style={{width: '100%', height: '100%', maxWidth: 250, maxHeight: 250, minWidth: 150, minHeight: 150, backgroundColor: "white"}} />
            </Box>
        </VStack>
    )
}

export default OfferCode;