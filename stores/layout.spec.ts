import { describe, beforeEach, it, expect } from 'vitest'
import { setActivePinia, createPinia } from "pinia"
import { useLayoutStore } from './layout'

describe('Layout Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('Menu is closed by default', () => {
        const layout = useLayoutStore()

        expect(layout.isMenuOpen).toBe(false)
    })

    it('Menu visibility is changeable', () => {
        const layout = useLayoutStore()

        expect(layout.isMenuOpen).toBe(false)

        layout.openMenu()

        expect(layout.isMenuOpen).toBe(true)

        layout.closeMenu()

        expect(layout.isMenuOpen).toBe(false)
    })
})