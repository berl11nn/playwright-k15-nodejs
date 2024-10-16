import { Page } from "@playwright/test"

export async function scrollToBottom(page: Page, scrollPercentage: number) {

    await page.evaluate(scrollPercentage => {
        window.scrollTo(0, scrollPercentage * document.body.scrollHeight)
    }, scrollPercentage)
}

export async function getAdParams(page: Page, adSlotId: string) {

    return await page.evaluate(adSlotId => {
        const slot = googletag.pubads().getSlots().find(({ getSlotElementId }) => getSlotElementId() === adSlotId);
        return slot.getTargetingMap();
    }, adSlotId)
}

