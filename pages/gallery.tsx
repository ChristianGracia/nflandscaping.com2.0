import Button from "@mui/material/Button";
import type { NextPage } from "next";
import { useState } from "react";
import ImageGrid from "../lib/components/imageGrid";
import PageHeader from "../lib/components/pageHeader";
import GallerySectionCard from "../lib/components/gallerySectionCard";
import Box from "@mui/material/Box";
import Main from "../lib/components/ui/main";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface GalleryProjectProps {
  name: string;
  numberOfImages: number;
}

interface GalleryItem {
  title: string;
  imageUrl: string;
  prepend: string;
  images: string[];
  sectionedImages: GalleryProjectProps[];
}

const homeImpImages: string[] = [
  "gallery6a.JPG",
  "gallery1a.JPG",
  "gallery2.JPG",
  "gallery4.JPG",
  "gallery4a.JPG",
  "gallery11.JPG",
  "gallery16.JPG",
  "gallery3.JPG",
];
const landscapingImages: string[] = [
  "gallery1aa.jpeg",
  "gallery5.JPG",
  "gallery6aa.JPG",
  "gallery7.JPG",
  "gallery8.JPG",
  "gallery9.JPG",
  "gallery11.PNG",
  "gallery12.PNG",
  "gallery13.JPG",
  "gallery14.JPG",
  "gallery17.JPG",
  "gallery18.JPG",
  "gallery20.JPG",
  "gallery21.JPG",
  "gallery15.JPG",
  "gallery10.JPG",
  "gallery22.JPG",
  "gallery23.JPG",
  "gallery24.jpeg",
  "gallery25.JPG",
  "gallery34.jpeg",
];

const snowRemovalImages: string[] = [
  "1.JPG",
  "2.JPG",
  "4.JPG",
  "5.JPG",
  "6.JPG",
  "7.JPG",
  "8.JPG",
  "9.JPG",
  "10.JPG",
  "11.JPG",
  "12.JPG",
];

const galleryItems: GalleryItem[] = [
  {
    title: "Landscaping / Construction",
    imageUrl: "GalleryImageL.jpg",
    prepend: "images/gallery-images/",
    sectionedImages: [
      { name: "landscaping-construction/project1", numberOfImages: 18 },
  
    ],
    images: landscapingImages,
  },
  {
    title: "Home Improvement",
    imageUrl: "GalleryImageHI.jpg",
    prepend: "images/gallery-images/",
    sectionedImages: [
      { name: "home-improvement/project2", numberOfImages: 8 },
      { name: "home-improvement/project2", numberOfImages: 15 }
    ],
    images: homeImpImages,
  },
  {
    title: "Snow Removal",
    imageUrl: "GalleryImageSR.jpg",
    prepend: "images/gallery-images/snow-removal/",
    sectionedImages: [],
    images: snowRemovalImages,
  },
];

const Gallery: NextPage = () => {
  const [currentSection, setCurrentSection] =
    useState<string>("Before & After");

  const selectService = (title: string) => {
    setCurrentSection(title);
  };

  const renderGallerySectionCard = (item: GalleryItem, index: number) => {
    return (
      <Box key={index}>
        <GallerySectionCard
          handleClick={() => selectService(item.title)}
          item={item}
        />
      </Box>
    );
  };

  const renderGallery = (item: GalleryItem, index: number) => {
    if (currentSection === item.title) {
      return (
        <Box  key={index}>
          <ImageGrid
            prepend={item.prepend}
            images={item.images}
            sectionedImages={item.sectionedImages}
          ></ImageGrid>
        </Box>
      );
    }
    return null;
  };

  const handleBackButton = () => {
    setCurrentSection("Before & After");
  };
  return (
    <Main>
      <div>
        <PageHeader title={currentSection} />
        <Box sx={{ paddingBottom: 10 }}>
          {currentSection === "Before & After" ? (
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
          ) : (
            <Button onClick={handleBackButton}>
              <ArrowBackIosIcon />
              Back
            </Button>
          )}
          {galleryItems.map((item: GalleryItem, index: number) =>
            renderGallery(item, index)
          )}
        </Box>
      </div>
    </Main>
  );
};

export default Gallery;
