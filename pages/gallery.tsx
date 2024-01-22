import type { NextPage } from "next";
import PageHeader from "../lib/components/pageHeader";
import Main from "../lib/components/ui/main";
import GallerySectionCard from "../lib/components/gallerySectionCard";
import { Box } from "@mui/material";

interface GalleryItem {
    title: string;
    imageUrl: string;
    path: string;
}

const galleryItems: GalleryItem[] = [
    {
        title: "Landscaping / Construction",
        imageUrl: "GalleryImageL.jpg",
        path: "landscaping-and-construction"
    },
    {
        title: "General Contracting",
        imageUrl: "GalleryImageHI.jpg",
        path: "contracting"
    },
    {
        title: "Masonry",
        imageUrl: "9.jpeg",
        path: "masonry"
    },
    {
        title: "Snow Removal",
        imageUrl: "8.jpeg",
        path: "snow-removal"
    },
];

const Gallery: NextPage = () => {
    const renderGallerySectionCard = (item: GalleryItem, index: number) => {
        return (
            <GallerySectionCard
                key={index}
                item={item}
            />
        );
    };

    return (
        <Main>
            <div>
                <PageHeader
                    title={
                        'Gallery'
                    }
                />
                <Box sx={{ paddingBottom: 10 }}>
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        flexWrap="wrap"
                    >
                        {galleryItems.map((item: GalleryItem, index: number) =>
                            renderGallerySectionCard(item, index)
                        )}
                    </Box>
                </Box>
            </div>
        </Main>
    );
};

export default Gallery;
