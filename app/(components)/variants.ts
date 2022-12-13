import type { Variants } from 'framer-motion';

export const topVariants: Variants = {
	visible: { opacity: 1, translateY: 0, transition: { duration: 0.8 } },
	hidden: { opacity: 0, translateY: '-50px' },
};

export const bottomVariants = (size: number = 50): Variants => ({
	visible: { opacity: 1, translateY: 0, transition: { duration: 0.8 } },
	hidden: { opacity: 0, translateY: `${size}px` },
});
