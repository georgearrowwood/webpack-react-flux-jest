export default {
  title: process.env.TITLE ? process.env.TITLE : '',
  scriptUrl: process.env.SCRIPT_URL ? process.env.SCRIPT_URL : '/assets/bundle.js',
  styleUrl: process.env.STYLE_URL ? process.env.STYLE_URL : '/assets/style.css',
  jwtSecret: process.env.JWT_SECRET ? process.env.JWT_SECRET : '7y873g493h98ffh893h834hf3',
};
