// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import path from 'path';
import fs from 'fs';
import etag from 'etag';
import {getCwd} from './util.js'
import compile from './scripts/compile.js'

const _proxy = async (req, res, u) => {
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  // res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('Cache-Control', 'no-cache');

  if (/^\//.test(u)) {
    const cwd = getCwd();
    u = path.join(cwd, u);
    
    // console.log('fetch file locally', {cwd, u});

    const resultBuffer = await fs.promises.readFile(u);
    
    const et = etag(resultBuffer);
    res.setHeader('ETag', et);

    if (req.headers['if-none-match'] && req.headers['if-none-match'].split(',').includes(et)) {
      console.log('304 asset', u);
      res.statusCode = 304;
      res.end();
    } else {
      console.log('200 asset', u);
      res.end(resultBuffer);
    }
  } else {
    // console.log('redirect asset', {u});
    
    res.redirect(u);
  }
};

export async function handler(req, res) {
  /* if (/\.glb/.test(req.url)) {
    console.log('\n\n\n\ncompile', req.headers, req.url, '\n\n\n\n');
  } */
  // console.log('got url', {u: req.url});

  const u = req.url
    .replace(/^\/([a-zA-Z0-9]+:)/, '$1') // remove initial slash
    .replace(/^([a-zA-Z0-9]+:\/(?!\/))/, '$1/'); // add second slash to protocol, since it is truncated
  if (u) {
    // XXX note: sec-fetch-dest is not supported by Safari
    const dest = req.headers['x-fetch-dest'] ??
      req.headers['sec-fetch-dest'] ??
      '';
    // console.log('got dest', dest);
    if (
      ['empty', 'image'].includes(dest) ||
      dest.includes('github.io')
    ) {
      try {
        await _proxy(req, res, u);
      } catch (err) {
        res.send(500, err.stack);
      }
    } else {
      let resultUint8Array, err;
      try {
        resultUint8Array = await compile(u);
      } catch (e) {
        err = e;
      }
      if (!err) {
        const resultBuffer = Buffer.from(resultUint8Array);
        const et = etag(resultBuffer);
        res.setHeader('ETag', et);
        // check if-none-match (multiple)
        res.setHeader('Content-Type', 'application/javascript');
        if (req.headers['if-none-match'] && req.headers['if-none-match'].split(',').includes(et)) {
          // console.log('304', u);
          
          res.statusCode = 304;
          res.setHeader('Access-Control-Allow-Methods', '*');
          res.setHeader('Access-Control-Allow-Headers', '*');

          // res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          res.setHeader('Cache-Control', 'no-cache');
          // res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
          res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
          res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
          res.end();
        } else {
          // console.log('200', u);
          res.setHeader('Access-Control-Allow-Methods', '*');
          res.setHeader('Access-Control-Allow-Headers', '*');

          // res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          res.setHeader('Cache-Control', 'no-cache');
          // res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
          res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
          res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
          res.end(resultBuffer);
        }
      } else {
        console.warn(err);
        res.status(500).send(err.stack);
      }
    }
  } else {
    res.status(404).send('not found');
  }
}
