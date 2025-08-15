import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to the local index.html file
        await page.goto(f"file://{os.getcwd()}/index.html")

        # 1. Select the "Three Card" spread using its new ID
        await page.locator("#spread-three-card").click()

        # Pause to see if it helps with any timing issues
        await page.pause()

        # 2. Start the reading
        await page.get_by_role("button", name="Begin Reading").click()

        # 3. Choose to draw cards from the modal
        await page.get_by_role("button", name="Draw Cards").click()

        # 4. Draw three cards
        deck_locator = page.locator("#deckContainer")
        await expect(deck_locator).to_be_visible(timeout=5000)
        for _ in range(3):
            await deck_locator.click()
            await expect(page.locator('.card-container')).to_have_count(_ + 1, timeout=5000)

        # 5. Wait for the analysis to be visible
        await expect(page.locator("#readingSummary")).to_be_visible(timeout=10000)

        # 6. Take a screenshot
        await page.screenshot(path="jules-scratch/verification/verification.png")

        await browser.close()

if __name__ == "__main__":
    import os
    asyncio.run(main())
