import Box from "@mui/material/Box";
import type { NextPage } from "next";
import PageHeader from "../../lib/components/pageHeader";
import Main from "../../lib/components/ui/main";
import ImageGrid from "../../lib/components/imageGrid";
import ImageGroup from "../../lib/components/imageGroup";
import Divider from "../../lib/components/divider";
const SnowRemoval: NextPage = () => {
    const images: string[] = ['1.jpeg', '2.jpeg', '3.jpeg', '5.jpeg', '6.jpeg', '7.jpeg']
    return (
        <Main>
            <div>
                <PageHeader title="Snow Removal" />
                <Box sx={{ paddingBottom: 10 }}>

                </Box>
            </div>
            <ImageGroup prepend="/new-images/snow-removal/" images={['1.jpeg', '2.jpeg', '3.jpeg', '5.jpeg', '6.jpeg', '7.jpeg']} />
            {/* <Divider /> */}
            {/* <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
            > <ImageGrid
                prepend={"/new-images/snow-removal/"}
                images={images}
            ></ImageGrid></Box> */}
        </Main>
    );
};

export default SnowRemoval;
