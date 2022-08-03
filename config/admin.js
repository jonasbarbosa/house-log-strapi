module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c278103698b8a6d10048710e5c636d21'),
  },
});
