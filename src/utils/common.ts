import {useDark} from '@vueuse/core';

/** 设置主题，用于判断主题色是否为暗色 */
export const isDark = useDark({
    storageKey:'vitepress-theme-appearance',
})