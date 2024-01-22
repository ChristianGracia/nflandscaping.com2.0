import Box from "@mui/material/Box";
import type { NextPage } from "next";
import PageHeader from "../../lib/components/pageHeader";
import Main from "../../lib/components/ui/main";
import ImageGroup from "../../lib/components/imageGroup";
import Divider from "../../lib/components/divider";

const LandscapingAndConstruction: NextPage = () => {
    return (
        <Main>
            <div>
                <PageHeader title="Landscaping and Construction" />
                <Box sx={{ paddingBottom: 5 }}>
                </Box>
            </div>
            <ImageGroup prepend="/new-images/landscaping/lawn1/" images={["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/landscaping/outdoor1/" images={["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG", "7.JPG"]} />
            <Divider />
            <ImageGroup prepend="/new-images/landscaping/outdoor2/" images={["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/landscaping/outdoor3/" images={["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg"]} />
            <Divider />
            <ImageGroup prepend="/new-images/landscaping/tiles/" images={["1.jpeg", "2.jpeg"]} />
            <Divider />
            <ImageGroup prepend="/new-images/landscaping/front-walkway/" images={["1.jpeg", "2.jpeg"]} />
            <Divider />
            <ImageGroup prepend="/new-images/landscaping/field1/" images={["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "9.jpeg"]} />
            <Divider />
            <ImageGroup prepend="/new-images/landscaping/commercial-walkway/" images={["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/landscaping/backyard-pavement/" images={["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "9.jpeg", "10.jpeg", "11.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/landscaping/backyard1/" images={["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "9.jpeg"]} />
            {/* <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={4}
                justifyContent="center"
                flexWrap="wrap">
                <Image src="/new-images/landscaping/1.jpg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/landscaping/2.jpeg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/landscaping/8.jpg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/landscaping/9.jpg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/landscaping/10.jpg" height={700} width={800} alt="nfl logo" />
            </Box> */}

        </Main>
    );
};

export default LandscapingAndConstruction;
