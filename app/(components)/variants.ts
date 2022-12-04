import type { Variants } from 'framer-motion';

export const variants: Variants = {
	visible: { opacity: 1, translateX: 0, transition: { duration: 0.8 } },
	hidden: { opacity: 0, translateX: '-500px' },
};
