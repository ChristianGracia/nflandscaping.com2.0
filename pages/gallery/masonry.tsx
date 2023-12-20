
import type { NextPage } from "next";
import Image from "next/image";
import PageHeader from "../../lib/components/pageHeader";
import Main from "../../lib/components/ui/main";
import Box from "@mui/material/Box";
const Masonry: NextPage = () => {
    return (
        <Main>
            <div>
                <PageHeader title="Masonry" />
                <Box sx={{ paddingBottom: 10 }}>

                </Box>
            </div>
            <Box
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
            </Box>
        </Main>
    );
};

export default Masonry;
