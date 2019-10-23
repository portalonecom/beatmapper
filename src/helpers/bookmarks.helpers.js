import { sample } from '../utils';

export const BOOKMARK_COLORS = [
  { background: '#F50057', text: 'white' }, // pink
  { background: '#FFEA00', text: 'black' }, // yellow
  { background: '#D500F9', text: 'white' }, // purple
  { background: '#64DD17', text: 'black' }, // green
  { background: '#0091EA', text: 'white' }, // blue
  { background: '#FF9100', text: 'black' }, // orange
];

export const getNewBookmarkColor = bookmarks => {
  // Most songs will have <6 bookmarks, so I'll have 6 unique colors.

  // If the user has MORE than 6 colors, just pick a random one
  // TODO: Should I either create new colors, OR pick a color unlike the colors
  // nearest to it? So that it tries not to have two purple ones in a row or
  // whatever?
  if (bookmarks.length >= 6) {
    return sample(BOOKMARK_COLORS);
  }

  const firstUnusedColor = BOOKMARK_COLORS.find(color => {
    const isColorUnused = bookmarks.every(bookmark => bookmark.color !== color);

    return isColorUnused;
  });

  return firstUnusedColor;
};
