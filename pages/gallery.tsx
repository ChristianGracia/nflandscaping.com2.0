import Button from "@mui/material/Button";
import type { NextPage } from "next";
import { useState } from "react";
import ImageGrid from "../lib/components/imageGrid";
import PageHeader from "../lib/components/pageHeader";
import GallerySectionCard from "../lib/components/gallerySectionCard";
import Box from "@mui/material/Box";

interface GalleryItem {
  title: string;
  imageUrl: string;
}

const homeImpImages: string[] = [
  "gallery1aa.jpeg",
  "gallery5.JPG",
  "gallery6aa.JPG",
  "gallery7.JPG",
  "gallery8.JPG",
  "gallery9.JPG",
];
const landscapingImages: string[] = [
  "gallery1aa.jpeg",
  "gallery5.JPG",
  "gallery6aa.JPG",
  "gallery7.JPG",
  "gallery8.JPG",
  "gallery9.JPG",
];

const galleryItems: GalleryItem[] = [
  {
    title: "Landscaping / Construction",
    imageUrl: "GalleryImageL.jpg",
  },
  {
    title: "Home Improvement",
    imageUrl: "GalleryImageHI.jpg",
  },
];

const Gallery: NextPage = () => {
  const [showHomeImpImages, setShowHomeImpImages] = useState<boolean>(false);
  const [showLandscapingImages, setShowLandscapingImages] =
    useState<boolean>(false);
  const [showSelectionButtons, setShowSelectionButtons] =
    useState<boolean>(true);

  const selectService = (title: string) => {
    if (title === "Landscaping / Construction") {
      setShowLandscapingImages(true);
    } else if (title === "Home Improvement") {
      setShowHomeImpImages(true);
    }
    setShowSelectionButtons(false);
  };

  const renderGallerySectionCard = (item: GalleryItem, index: number) => {
    return (
      <GallerySectionCard
        key={index}
        handleClick={() => selectService(item.title)}
        item={item}
      />
    );
  };

  const handleBackButton = () => {
    setShowLandscapingImages(false);
    setShowHomeImpImages(false);
    setShowSelectionButtons(true);
  };
  return (
    <div>
      <main className="main">
        <PageHeader
          title={
            showSelectionButtons
              ? "Before & After"
              : showHomeImpImages
              ? "Home Improvement"
              : showLandscapingImages
              ? "Landscaping / Construction"
              : ""
          }
        />
        <Box sx={{paddingBottom: 10}}>
        {showSelectionButtons ? (
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
          <Button onClick={handleBackButton}>Back</Button>
        )}
        {showHomeImpImages && (
          <ImageGrid
            prepend={"images/gallery-images/"}
            images={homeImpImages}
          ></ImageGrid>
        )}
        {showLandscapingImages && (
          <ImageGrid
            prepend={"images/gallery-images/"}
            images={landscapingImages}
          ></ImageGrid>
        )}
        </Box>
      </main>
    </div>
  );
};

export default Gallery;
