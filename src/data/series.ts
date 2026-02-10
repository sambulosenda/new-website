export interface Series {
  name: string;
  slugs: string[];
}

export const allSeries: Series[] = [
  {
    name: 'React Native Essentials',
    slugs: [
      'react-native-perfomance-tips',
      'keyboard-behavior-react-native',
      'building-offline-first-react-native',
      'push-notifications-react-native',
      'implementing-i18n-react-native',
    ],
  },
  {
    name: 'React Native Updates',
    slugs: [
      'react-native-0-76-features-overview',
      'react-native-0-78-react-19-updates',
    ],
  },
];

export function findSeries(slug: string) {
  for (const series of allSeries) {
    const index = series.slugs.indexOf(slug);
    if (index !== -1) {
      return {
        series,
        index,
        prev: index > 0 ? series.slugs[index - 1] : null,
        next: index < series.slugs.length - 1 ? series.slugs[index + 1] : null,
      };
    }
  }
  return null;
}
