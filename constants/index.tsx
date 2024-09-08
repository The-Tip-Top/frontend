export const sidebarLinks = [
  {
    icon: '/icons/data.png',
    route: '/admin',
    label: 'Participation',
  },
  {
    icon: '/icons/stats.png',
    route: '/admin/chart-data',
    label: 'Statistiques',
  },
  {
    icon: '/icons/game.png',
    route: '/admin/final-game',
    label: 'Grand jeux',
  },
];

export const topCategoryStyles = {
  'Food and Drink': {
    bg: 'bg-blue-25',
    circleBg: 'bg-blue-100',
    text: {
      main: 'text-blue-900',
      count: 'text-blue-700',
    },
    progress: {
      bg: 'bg-blue-100',
      indicator: 'bg-blue-700',
    },
    icon: '/icons/monitor.svg',
  },
  Travel: {
    bg: 'bg-success-25',
    circleBg: 'bg-success-100',
    text: {
      main: 'text-success-900',
      count: 'text-success-700',
    },
    progress: {
      bg: 'bg-success-100',
      indicator: 'bg-success-700',
    },
    icon: '/icons/coins.svg',
  },
  default: {
    bg: 'bg-pink-25',
    circleBg: 'bg-pink-100',
    text: {
      main: 'text-pink-900',
      count: 'text-pink-700',
    },
    progress: {
      bg: 'bg-pink-100',
      indicator: 'bg-pink-700',
    },
    icon: '/icons/shopping-bag.svg',
  },
};

export const participationStatusStyles = {
  WAITING: {
    borderColor: 'border-[#3f95e1]',
    backgroundColor: 'bg-[#3e95e1]',
    textColor: 'text-[#3f95e1]',
    chipBackgroundColor: 'bg-[#f5faff]',
  },
  CANCELLED: {
    borderColor: 'border-red-700',
    backgroundColor: 'bg-red-700',
    textColor: 'text-red-700',
    chipBackgroundColor: 'bg-[#fef2f2]',
  },
  PARTICIPATION: {
    borderColor: 'border-[#F2F4F7]',
    backgroundColor: 'bg-gray-500',
    textColor: 'text-[#344054]',
    chipBackgroundColor: 'bg-[#F2F4F7]',
  },
  CONCLUDED: {
    borderColor: 'border-[#12B76A]',
    backgroundColor: 'bg-[#12B76A]',
    textColor: 'text-[#027A48]',
    chipBackgroundColor: 'bg-[#ECFDF3]',
  },
  GIFT_GIVEN: {
    borderColor: 'border-[#12B76A]',
    backgroundColor: 'bg-[#12B76A]',
    textColor: 'text-[#027A48]',
    chipBackgroundColor: 'bg-[#ECFDF3]',
  },
  CURRENT_PARTICIPATION: {
    borderColor: 'border-[#12B76A]',
    backgroundColor: 'bg-[#12B76A]',
    textColor: 'text-[#027A48]',
    chipBackgroundColor: 'bg-[#ECFDF3]',
  },
  default: {
    borderColor: '',
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-700',
    chipBackgroundColor: 'bg-inherit',
  },
};
