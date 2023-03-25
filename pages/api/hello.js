// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.end('a get request is made to html-snake');
  }
}
