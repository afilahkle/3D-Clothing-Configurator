import { swatch, fileIcon, logoShirt, stylishShirt, logoControls, textIcon, download, textureLogoPicker, texture1, texture2, texture3, texture4, texture5, logo1, logo2 } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "logocontrols",
    icon: logoControls,
  },
  {
    name: "textcontrols",
    icon: textIcon,
  },
  {
    name: "texturelogopicker",
    icon: textureLogoPicker,
  },
];

export const FilterTabs = [
  {
    name: "frontLogoShirt",
    icon: logoShirt,
  },
  {
    name: "backLogoShirt",
    icon: logoShirt,
  },
  {
    name: "frontTextShirt",
    icon: textIcon,
  },
  {
    name: "backTextShirt",
    icon: textIcon,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
  {
    name: "downloadShirt",
    icon: download,
  },
];

export const DecalTypes = {
  frontLogo: {
    stateProperty: "frontLogoDecal",
    filterTab: "logoShirt",
  },
  backLogo: {
    stateProperty: "backLogoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};

export const texturesLogos = [
  {
    name: "Texture 1",
    image: texture1,
    type: "texture",
  },
  {
    name: "Texture 2",
    image: texture2,
    type: "texture",
  },
  {
    name: "Texture 3",
    image: texture3,
    type: "texture",
  },
  {
    name: "Texture 4",
    image: texture4,
    type: "texture",
  },
  {
    name: "Texture 5",
    image: texture5,
    type: "texture",
  },
  {
    name: "Front Logo 1",
    image: logo1,
    type: "frontLogo",
  },
  {
    name: "Front Logo 2",
    image: logo2,
    type: "frontLogo",
  },
  {
    name: "Back Logo 1",
    image: logo1,
    type: "backLogo",
  },
  {
    name: "Back Logo 2",
    image: logo2,
    type: "backLogo",
  },
];
