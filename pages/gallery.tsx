import type { NextPage } from "next";
import ImageGrid from "../lib/components/imageGrid";
import PageHeader from "../lib/components/pageHeader";

const homeImpImages : string[] = ['gallery1aa.jpeg','gallery5.JPG', 'gallery6aa.JPG', 'gallery7.JPG', 'gallery8.JPG', 'gallery9.JPG'];
const landscapingImages : string[] = ['gallery1aa.jpeg','gallery5.JPG', 'gallery6aa.JPG', 'gallery7.JPG', 'gallery8.JPG', 'gallery9.JPG'];

const Gallery: NextPage = () => {
  return (
    <div>
      <main>
        <PageHeader title="Before & After" />
        <ImageGrid prepend={"images/gallery/"} images={homeImpImages}></ImageGrid>
        <ImageGrid prepend={"images/gallery/"} images={landscapingImages}></ImageGrid>
      </main>
    </div>
  );
};

export default Gallery;
