import type { Variants } from 'framer-motion';

export const leftVariants: Variants = {
	visible: { opacity: 1, translateX: 0, transition: { duration: 0.8 } },
	hidden: { opacity: 0, translateX: '-500px' },
};

export const rightVariants: Variants = {
	visible: { opacity: 1, translateX: 0, transition: { duration: 0.8 } },
	hidden: { opacity: 0, translateX: '500px' },
};
