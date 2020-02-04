const interpreten = [
  {
    name: 'Nick Name',
    alben: [
      {
        titel: 'Push the sky away',
        erscheinungsjahr: 2013
      },
      {
        titel: 'No more shall we part',
        erscheinungsjahr: 2011
      }
    ]
  },
  {
    name: 'Ben Harper',
    alben: [
      {
        titel: 'Live from Mars',
        erscheinungsjahr: 2003
      },
      {
        titel: 'The Will to live',
        erscheinungsjahr: 1997
      }
    ]
  },
];

function istNach200() {
  return album.erscheinungsjahr > 2000;
}

function hatAlbumNach2000(interpret) {
  return interpret.alben.filter(istNach200).length > 0;
}

function alsInterpretenName(interpret) {
  return interpret.name;
}

interpreten
  .filter(hatAlbumNach2000)
  .map(alsInterpretenName)
  .forEach(console.log);
