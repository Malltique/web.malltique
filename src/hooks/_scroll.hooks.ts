import { useEffect, useState } from 'react';

export const useSticky = (height: number) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Получаем текущую позицию скролла
            const scrollPosition = window.scrollY;

            // Если прокрутка больше height, то делаем хедер "липким"
            if (scrollPosition > height) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Добавляем обработчик прокрутки
        window.addEventListener('scroll', handleScroll);

        // Убираем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { isSticky };
};
