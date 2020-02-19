
import { getPosition, clearStyle } from './dom';

const getDocumentElement = () =>
    document['scrollingElement'] ||
    document['documentElement'] ||
    document['body'];

export const isBottom = ({ el }: any) => {
    let { clientHeight, scrollHeight, scrollTop } = el || getDocumentElement();

    return (
        Math.max(0, Math.abs(clientHeight - scrollHeight)) <= Math.round(scrollTop)
    );
};

export const lockScroll = (isLock: boolean) => {
    let el: any = getDocumentElement();

    let currentTop: number = Math.abs(
        getScrollTop(el) || getPosition(el).top || 0
    );

    if (isLock) {
        el.style.position = 'fixed';
        el.style.overflow = 'hidden';
        el.style.top = `-${currentTop}px`;
    } else {
        clearStyle(el);

        currentTop && setScrollTop(el, currentTop);
    }
};

export const topScroll = () => window.scrollTo(0, 0);

export const getScrollTop = (el: any) => (el || getDocumentElement()).scrollTop;

export const setScrollTop = (el: any, value: number | string) => {
    (el || getDocumentElement()).scrollTop = value;
};
