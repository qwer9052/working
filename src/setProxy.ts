import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: any) {
  app.use(
    createProxyMiddleware('/api/v1', {
      target: 'http://192.168.0.9:8100',
      changeOrigin: true,
    }),
  );
};
