# TODO: Implement Transparent Navbar on Scroll

- [ ] Modify `src/components/Navbar.jsx`:
  - [ ] Import `useState` and `useEffect` from React.
  - [ ] Add state `isScrolled` to track scroll position.
  - [ ] Use `useEffect` to add scroll event listener that sets `isScrolled` to true when `window.scrollY > 0`.
  - [ ] Update the `nav` element's `className` to conditionally apply `bg-transparent` when scrolled, otherwise `bg-amber-50`.
- [ ] Test the scroll behavior by running the app and scrolling.
- [ ] If needed, adjust text colors for visibility on transparent background.
