import { Cloudinary } from "@cloudinary/url-gen";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME,
  },
  url: {
    secure: true,
  },
});

const getThumbnail = (title: string) => {
  const thumbnail = cld
    .image("astro-course-template")
    .overlay(
      source(text(title, new TextStyle("Cabin", 64).fontWeight("bold"))),
    );

  return thumbnail.toURL();
};

export { cld, getThumbnail };
