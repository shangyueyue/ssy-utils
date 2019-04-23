// class Cookie {
//   static parseCookie(cookie) {
//     // 解析
//     const cookies = {};
//     if (!cookie) {
//       return cookies;
//     }
//     const list = cookie.split(';');
//     for (let i = 0; i < list.length; i++) {
//       const pair = list[i].split('=');
//       cookies[pair[0].trim()] = pair[1];
//     }
//     return cookies;
//   }

//   static serialize() {
//     // 序列化
//     const pairs = [`${name}=${val}`];
//     opt = opt || {};
//     if (opt.maxAge) pairs.push(`Max-Age = ${opt.maxAge}`);
//     if (opt.domain) pairs.push(`Domain=${opt.domain}`);
//     if (opt.path) pairs.push(`Path=${opt.path}`);
//     if (opt.expires) pairs.push(`Expires=${opt.expires.toUTCString()}`);
//     if (opt.httpOnly) pairs.push('HttpOnly');
//     if (opt.secure) pairs.push('Secure');
//     return pairs.join('; ');
//   }
// }

// export default Cookie;
