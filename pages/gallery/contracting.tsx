import Box from "@mui/material/Box";
import type { NextPage } from "next";
import PageHeader from "../../lib/components/pageHeader";
import Main from "../../lib/components/ui/main";
import Image from "next/image";
import ImageGrid from "../../lib/components/imageGrid";
const Contracting: NextPage = () => {
    const images: string[] = ["before.jpeg", "before2.jpeg", "before3.jpeg", "before4.jpeg", "before5.jpeg", "after1.JPG", "after2.JPG", "after3.JPG"]
    return (
        <Main>
            <div>
                <PageHeader title="General Contracting" />
                <Box sx={{ paddingBottom: 10 }}>

                </Box>
            </div>
            <Box display="flex"
                flexDirection="row"
                alignItems="center" justifyContent="center" gap={4} flexWrap="wrap">
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                > <ImageGrid
                    prepend={"/new-images/contracting/redone-kitchen/"}
                    images={images}
                ></ImageGrid></Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={4}
                    marginY={8}
                    // gap={16}
                    justifyContent="center"
                    flexWrap="wrap">
                    <Image src="/new-images/contracting/redone-walls/before1.jpg" height={400} width={700} alt="nfl logo" />
                    <Image src="/new-images/contracting/redone-walls/before2.jpg" height={400} width={700} alt="nfl logo" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={4}
                    // marginY={ }
                    // gap={16}
                    justifyContent="center"
                    flexWrap="wrap">
                    <Image src="/new-images/contracting/redone-walls/after2.jpg" height={400} width={700} alt="nfl logo" />
                    <Image src="/new-images/contracting/redone-walls/after3.jpg" height={400} width={700} alt="nfl logo" />
                </Box>
            </Box>
        </Main>
    );
};

export default Contracting;
