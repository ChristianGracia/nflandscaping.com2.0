import Box from "@mui/material/Box";
import type { NextPage } from "next";
import PageHeader from "../../lib/components/pageHeader";
import Main from "../../lib/components/ui/main";
import Image from "next/image";
import ImageGrid from "../../lib/components/imageGrid";
import ImageGroup from "../../lib/components/imageGroup";
import Divider from "../../lib/components/divider";
const Contracting: NextPage = () => {
    const images: string[] = ["before.jpeg", "before2.jpeg", "before3.jpeg", "before4.jpeg", "before5.jpeg", "after1.JPG", "after2.JPG", "after3.JPG"]
    return (
        <Main>
            <div>
                <PageHeader title="General Contracting" />
                <Box sx={{ paddingBottom: 10 }}>

                </Box>
            </div>
            <ImageGroup prepend="/new-images/contracting/interior/" images={['5.JPG', '6.JPG', '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.JPG', '6.JPG']} />
            <Divider />
            <ImageGroup prepend="/new-images/contracting/redone-kitchen/" images={images} />
            <Divider />
            <ImageGroup prepend="/new-images/contracting/redone-walls/" images={['before1.jpg', 'before2.jpg', 'after2.jpg', 'after3.jpg']} />
            <Divider />
            <ImageGroup prepend="/new-images/contracting/gutters/" images={['1.JPG', '2.JPG', '3.JPG']} />
            <Divider />
            <ImageGroup prepend="/new-images/contracting/bricks/" images={['1.jpeg', '2.jpeg']} />
            <Divider />
            <ImageGroup prepend="/new-images/contracting/backyard1/" images={['1.jpeg', '2.jpeg', '3.jpeg']} />
            <Divider />
            <ImageGroup prepend="/new-images/contracting/pools/" images={['1.JPG', '2.JPG', '3.jpeg', '3.JPG', '4.jpeg',]} />
            <Divider />
            <ImageGroup prepend="/new-images/contracting/deck/" images={['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg']} />
            <Divider />
            <ImageGroup prepend="/new-images/contracting/roof/" images={['1.JPG', '2.JPG', '3.JPG', '4.jpeg', '5.JPG',]} />
            <Divider />
            {/* <Box display="flex"
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
            </Box> */}
        </Main>
    );
};

export default Contracting;
