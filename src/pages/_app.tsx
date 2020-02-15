import React from 'react';
import App from 'next/app';
import Head from 'next/head';

class PipelineApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Pipeline's ProtoType</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default PipelineApp;