import Box from "@mui/material/Box";
import type { NextPage } from "next";
import PageHeader from "../../lib/components/pageHeader";
import Main from "../../lib/components/ui/main";
import Image from "next/image";

const LandscapingAndConstruction: NextPage = () => {
    return (
        <Main>
            <div>
                <PageHeader title="Landscaping and Construction" />
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
                <Image src="/new-images/landscaping/1.jpg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/landscaping/2.jpeg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/landscaping/8.jpg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/landscaping/9.jpg" height={700} width={800} alt="nfl logo" />
                <Image src="/new-images/landscaping/10.jpg" height={700} width={800} alt="nfl logo" />
            </Box>

        </Main>
    );
};

export default LandscapingAndConstruction;
