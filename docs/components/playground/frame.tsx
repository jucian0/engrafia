import React from 'react';
import Frame from 'react-frame-component';

const CLEAR_PADDING = `<style> body { padding: 0; margin: 0; width: 100%; height: auto !important; }  </style>`;
const INITIAL_IFRAME_CONTENT = `<!DOCTYPE html><html><head> ${CLEAR_PADDING} </head><body><div></div></body></html>`;

interface IFrame {
  node: HTMLIFrameElement;
}

export const IframeWrapper = ({ children, onMount, style = {}, ...rest }) => {
  const [height, setHeight] = React.useState(0);
  const iframeRef: React.RefObject<IFrame> = React.createRef();
  const handleResize = (iframe: React.RefObject<IFrame>) => {
    if (
      iframe.current &&
      iframe.current.node.contentDocument &&
      iframe.current.node.contentDocument.body.scrollHeight !== 0
    ) {
      setHeight(iframe.current.node.contentDocument.body.scrollHeight);
    }
  };
  /**
   * Because <iframe> serves content in an isolated browsing context (document environment),
   * Styles in parent browsing context will not be available to <iframe> content,
   * we need to manually copy styles from parent browsing context to <iframe> browsing context
   */

  const copyStyles = (ref: React.RefObject<any>) => {
    const iFrameNode = ref.current?.node;
    if (!iFrameNode?.contentDocument?.body) {
      return;
    }
    // Copy <link> elements

    const links = Array.from(document.getElementsByTagName('link'));
    links.forEach((link) => {
      if (link.rel === 'stylesheet') {
        iFrameNode.contentDocument.head.appendChild(link.cloneNode(true));
      }
    });

    // Copy <style> elements
    const styles = Array.from(document.head.getElementsByTagName('style'));
    //styles.push(getEmotionStyle())
    styles.forEach((style) => {
      iFrameNode.contentDocument.head.appendChild(style.cloneNode(true));
    });
  };
  React.useEffect(() => {
    // copyStyles(iframeRef)
    handleResize(iframeRef);
  }, [children]);
  React.useEffect(() => {
    onMount();
  }, []);
  return (
    <Frame
      style={{
        ...style,
        width: '100%',
        height,
      }}
      ref={iframeRef as any}
      initialContent={INITIAL_IFRAME_CONTENT}
      onLoad={() => {
        copyStyles(iframeRef);
        handleResize(iframeRef);
      }}
    >
      {children}
    </Frame>
  );
};
