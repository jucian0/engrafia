export const getResizableProps = (
  width: string,
  setWidth: (width: string) => void
) => ({
  minWidth: 260,
  maxWidth: '100%',
  size: {
    width: width,
    height: 'auto',
  },
  style: {
    margin: 0,
    marginRight: 'auto',
    height: 'auto',
  },
  enable: {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  },
  onResizeStop: (_: any, __: any, ref: any) => {
    setWidth(ref.style.width);
  },
});
