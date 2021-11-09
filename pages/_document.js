import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" />
          <title>Giao diện website dự án bất động sản của các chủ đầu tư</title>
          <meta name="description" content="Sở hữu website bất động sản của các chủ đầu tư Vinhomes, Sungroup với giá chỉ 99K"/>
          <meta name="keywords" content="website bất động sản, giao diện website bất động sản, web bất động sản, giao diện web bất động sản, web 99k, website 99k"/>    
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Giao diện website dự án bất động sản của các chủ đầu tư"/>
          <meta property="og:url" content="web99k.vercel.app"/>
          <meta property="og:image" content="https://media.graphcms.com/tK0xuYwHRAWHxydhr4QJ"/>
          <meta property="og:locale" content="vi_VN"/>
          <meta property="og:description" content="Sở hữu website bất động sản của các chủ đầu tư Vinhomes, Sungroup với giá chỉ 99K"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
