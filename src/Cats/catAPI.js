const catPictures = [
  {
    url: "http://24.media.tumblr.com/tumblr_m2cctt2nbt1qz5dg8o1_1280.jpg",
    id: "9qu"
  },
  {
    url: "http://24.media.tumblr.com/tumblr_lkxr5d2l6f1qbe5pxo1_1280.jpg",
    id: "9jl"
  },
  {
    url: "http://27.media.tumblr.com/tumblr_m2spn5J6Wl1qhwmnpo1_500.jpg",
    id: "2vb"
  },
  {
    url: "http://25.media.tumblr.com/tumblr_m0r697tjTt1qbhms5o1_500.jpg",
    id: "b43"
  },
  {
    url: "http://24.media.tumblr.com/tumblr_lx5o26MBpg1r27cnwo1_1280.jpg",
    id: "91g"
  },
  {
    url: "http://25.media.tumblr.com/tumblr_m3cx530cHA1qhwmnpo1_1280.jpg",
    id: "dt8"
  },
  {
    url: "http://24.media.tumblr.com/tumblr_ltwnnj2hRx1qdth8zo1_1280.jpg",
    id: "cfj"
  },
  {
    url: "http://25.media.tumblr.com/tumblr_m4jvmspBPl1ruqy6ro1_400.gif",
    id: "afd"
  },
  {
    url: "http://24.media.tumblr.com/tumblr_m4im8lX9Nt1r6jd7fo1_500.jpg",
    id: "eg9"
  },
  {
    url: "http://25.media.tumblr.com/tumblr_m11xfqIXZG1qjev1to1_500.jpg",
    id: "c6c"
  },
  {
    url: "http://25.media.tumblr.com/tumblr_ltdz2afnrC1r4xjo2o1_500.jpg",
    id: "5fd"
  }
];

const getOne = id => catPictures.find(cat => cat.id === id);
const getAll = () => catPictures;
export default {
  getOne,
  getAll
};
