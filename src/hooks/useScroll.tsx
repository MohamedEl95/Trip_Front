
const useScroll = (elementId:string) => {
  const scrollToView = () => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView();
    }
  };
  return scrollToView;
};

export default useScroll;
