import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

export const Content: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <div className="content">{children}</div>;
};

const InfiniteScrollWrap: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const $container = $(containerRef.current);
        const $item = $container.children().first();
        let i = 0.75;

        const onScroll = () => {
            const height = $item.height();
            const scrollTop = $(window).scrollTop();
            const activeCloneIndex = Math.floor(scrollTop / height);

            if (scrollTop > i * height) {
                i++;
                const $clone = $item.clone(true, true);
                $clone.addClass('clone');
                $clone.appendTo($container);
            } else if (i > 0.75 && scrollTop < (i - 1) * height) {
                $container.find('.clone').last().remove();
                i--;
            }

            $container.children().each(function (this: HTMLElement, index: number) {
                if (Math.abs(index - activeCloneIndex) >= 2) {
                    $(this).find('.content').children().css('display', 'none');
                } else {
                    $(this).find('.content').children().css('display', '');
                }
            });
        };

        $(window).on('scroll', onScroll);
        return () => {
            $(window).off('scroll', onScroll);
        };
    }, []);

    return <div ref={containerRef}>{children}</div>;
};

export default InfiniteScrollWrap;
