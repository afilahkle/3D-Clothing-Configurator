import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './texture.jpeg',
  logoPosition: [ 0, 0.04, 0.15 ],
  logoScale: 0.15,
});

export default state;
