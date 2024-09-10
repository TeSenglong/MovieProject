
// export function LazyLoadImage({src, styles}) {
//   return (
//     <>
//       <LazyLoadImage
//         alt='loading'
//         className="gallery-img"
//         effect="blur"
//         src={src}
//         width="100%"
//         style={styles}
//       />
//     </>
//   );
// }
// const [lastScrollTop, setLastScrollTop] = useState(0);
// const [navStyle, setNavStyle] = useState({ top: '0' });

// useEffect(() => {
//     const handleScroll = () => {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         if (scrollTop > lastScrollTop) {
//             setNavStyle({ top: '-80px' });
//         } else {
//             setNavStyle({ top: '0' });
//         }
//         setLastScrollTop(scrollTop);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
// }, [lastScrollTop]);