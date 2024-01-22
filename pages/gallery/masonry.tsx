
import type { NextPage } from "next";
import Image from "next/image";
import PageHeader from "../../lib/components/pageHeader";
import Main from "../../lib/components/ui/main";
import Box from "@mui/material/Box";
import ImageGroup from "../../lib/components/imageGroup";
import Divider from "../../lib/components/divider";
const Masonry: NextPage = () => {
    return (
        <Main>
            <div>
                <PageHeader title="Masonry" />
                <Box sx={{ paddingBottom: 10 }}>

                </Box>
            </div>
            <ImageGroup prepend="/new-images/masonry/new/backyard1/" images={["1.jpg", "2.jpg", "3.jpeg", "4.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/masonry/new/backyard2/" images={["1.jpeg", "2.jpeg", "3.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/masonry/new/backyard3/" images={["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/masonry/new/front1/" images={["1.jpeg", "2.jpeg", "3.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/masonry/new/masonry1/" images={["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/masonry/new/tilewalkway/" images={["1.jpeg", "2.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/masonry/new/tilewalkway1/" images={["1.jpeg", "2.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/masonry/new/tilewalkway2/" images={["1.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/masonry/new/tilewalkway3/" images={["1.jpeg", "2.jpeg", "3.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/masonry/new/tilewalkway4/" images={["1.jpeg", "2.jpeg",]} />
            <Divider />
            <ImageGroup prepend="/new-images/masonry/new/wall/" images={["1.jpeg"]} />
            <Divider />
            {/* <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={4}
                justifyContent="center"
                flexWrap="wrap">
                <Image src="/new-images/masonry/tiled-walkway/before.jpeg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/masonry/tiled-walkway/after.jpeg" height={700} width={800} alt="nfl logo" />
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginY={8}
                gap={4}
                justifyContent="center"
                flexWrap="wrap">
                <Image src="/new-images/masonry/tiled-walkway2/tiled-walkway2.jpeg" height={700} width={800} alt="nfl logo" />

            </Box>
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={4}
                marginY={8}
                justifyContent="center"
                flexWrap="wrap">
                <Image src="/new-images/masonry/tiled-walkway3/before2.jpeg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/masonry/tiled-walkway3/after1.jpeg" height={700} width={800} alt="nfl logo" />
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={4}
                marginY={8}
                justifyContent="center"
                flexWrap="wrap">
                <Image src="/new-images/masonry/tiled-walkway4/masonry1.jpeg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/masonry/tiled-walkway4/masonry2.jpeg" height={700} width={800} alt="nfl logo" />
            </Box> */}
        </Main>
    );
};

export default Masonry;
