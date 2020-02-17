export const isMobile = (): boolean =>
  !!window.navigator.userAgent.match(
    /iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/i
  );

export const isIOS = (): boolean =>
  !!window.navigator.userAgent.match(/iPhone|iPod|iPad/i);

export const isMSIE = (): boolean =>
  !!window.navigator.userAgent.match(/Trident|MSIE/g);

export const msieVersion = (): string => {
  let version: number = 0;
  let ua: string = (window.navigator.userAgent || '').toLowerCase();
  let trident: any = ua.match(/Trident\/(\d.\d)/i);

  if (trident !== null) {
    switch (trident[1]) {
      case '3.0':
        version = 7;
        break;

      case '4.0':
        version = 8;
        break;

      case '5.0':
        version = 9;
        break;

      case '6.0':
        version = 10;
        break;

      case '7.0':
      default:
        version = 11;
        break;
    }
  } else {
    let reg = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');

    reg.exec(ua) !== null && (version = parseFloat(RegExp.$1));
  }

  return String(version);
};

export const browserType = (): string => {
  let type: string = '';
  let ua: string = (window.navigator.userAgent || '').toLowerCase();

  if (ua.indexOf('edge') !== -1) {
    type = 'edge';
  } else if (ua.indexOf('chrome') !== -1) {
    type = 'chrome';
  } else if (
    ua.indexOf('safari') !== -1 ||
    ua.indexOf('applewebkit/5') !== -1
  ) {
    type = 'safari';
  } else if (ua.indexOf('firefox') !== -1) {
    type = 'firefox';
  } else if (ua.indexOf('opera') !== -1) {
    type = 'opera';
  } else {
    type = isMSIE() ? 'msie' + msieVersion() : 'unknown-browser';
  }
  return type;
};
